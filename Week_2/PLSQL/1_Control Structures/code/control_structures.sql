-- Customers Table

CREATE TABLE Customer (
    CustomerID     NUMBER PRIMARY KEY,
    CustomerName   VARCHAR2(100),
    CustomerAge    NUMBER,
    Balance        NUMBER,
    IsVIP          VARCHAR2(5)
)

-- Loan Table
CREATE TABLE Loan (
    LoanID         NUMBER PRIMARY KEY,
    CustomerID     NUMBER REFERENCES Customer(CustomerID),
    InterestRate   NUMBER(5,2),
    DueDate        DATE
);

--Inserting values in tables

INSERT INTO Loan VALUES (104, 4, 6.5, SYSDATE + 60)

INSERT INTO Loan VALUES (102, 2, 7.5, SYSDATE + 40)

INSERT INTO Loan VALUES (103, 3, 9.0, SYSDATE + 5)

INSERT INTO Loan VALUES (101, 1, 8.5, SYSDATE + 10)

INSERT INTO Customer VALUES (4, 'Anita Rao', 30, 15000, 'FALSE')

INSERT INTO Customer VALUES (3, 'Suresh Kumar', 70, 5000, 'FALSE')

INSERT INTO Customer VALUES (1, 'Ravi Sharma', 65, 12000, 'FALSE')

INSERT INTO Customer VALUES (2, 'Neha Mehta', 45, 8000, 'FALSE')

INSERT INTO Loan VALUES (104, 4, 6.5, SYSDATE + 60)


--Scenario 1: Apply 1% Discount to Senior Citizens' Loan Interest

BEGIN
   FOR rec IN (
      SELECT l.LoanID, l.InterestRate, c.CustomerName
      FROM Loan l
      JOIN Customer c ON l.CustomerID = c.CustomerID
      WHERE c.CustomerAge > 60
   ) LOOP
      UPDATE Loan
      SET InterestRate = InterestRate - 1
      WHERE LoanID = rec.LoanID;

      DBMS_OUTPUT.PUT_LINE('Applied 1% discount to loan ' || rec.LoanID ||
                           ' for customer ' || rec.CustomerName);
   END LOOP;

   COMMIT;
END;
/
--Scenario 2: Mark VIP Customers
BEGIN
   FOR rec IN (
      SELECT CustomerID, CustomerName
      FROM Customer
      WHERE Balance > 10000
   ) LOOP
      UPDATE Customer
      SET IsVIP = 'TRUE'
      WHERE CustomerID = rec.CustomerID;

      DBMS_OUTPUT.PUT_LINE('Marked customer ' || rec.CustomerName ||
                           ' (ID: ' || rec.CustomerID || ') as VIP.');
   END LOOP;

   COMMIT;
END;
/

--Scenario 3: Loan Due Reminders for Next 30 Days
BEGIN
   FOR rec IN (
      SELECT c.CustomerName, l.DueDate, l.CustomerID
      FROM Loan l
      JOIN Customer c ON l.CustomerID = c.CustomerID
      WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
   ) LOOP
      DBMS_OUTPUT.PUT_LINE('Reminder: Loan for ' || rec.CustomerName ||
                           ' (ID: ' || rec.CustomerID || ') is due on ' ||
                           TO_CHAR(rec.DueDate, 'DD-MON-YYYY'));
   END LOOP;
END;
/


select * from customer;
select * from loan;