-- Table for savings accounts
CREATE TABLE SavingsAccount (
    AccountID     NUMBER PRIMARY KEY,
    CustomerName  VARCHAR2(100),
    Balance       NUMBER(12,2)
);

-- Table for employees
CREATE TABLE Employee (
    EmpID         NUMBER PRIMARY KEY,
    EmpName       VARCHAR2(100),
    Department    VARCHAR2(50),
    Salary        NUMBER(10,2)
);

-- Table for fund transfer
CREATE TABLE BankAccount (
    AccountID     NUMBER PRIMARY KEY,
    CustomerName  VARCHAR2(100),
    Balance       NUMBER(12,2)
);


--Inserting into SavingsAccount
INSERT INTO SavingsAccount VALUES (103, 'Sakshi Deshmukh', 18000);
INSERT INTO SavingsAccount VALUES (104, 'Amit Verma', 25000);
INSERT INTO SavingsAccount VALUES (105, 'Kavita Joshi', 22000);
INSERT INTO SavingsAccount VALUES (106, 'Vikram Rana', 27000);
INSERT INTO SavingsAccount VALUES (107, 'Deepika Yadav', 19500);

--Inserting into Employee 
INSERT INTO Employee VALUES (4, 'Nitin Patil', 'IT', 58000);
INSERT INTO Employee VALUES (5, 'Sneha Kulkarni', 'Finance', 62000);
INSERT INTO Employee VALUES (6, 'Manoj Tiwari', 'Finance', 55000);
INSERT INTO Employee VALUES (7, 'Kiran Rao', 'Marketing', 48000);
INSERT INTO Employee VALUES (8, 'Rachna Shah', 'Marketing', 51000);

--Inserting into BankAccount
INSERT INTO BankAccount VALUES (203, 'Amit Verma', 17000);
INSERT INTO BankAccount VALUES (204, 'Kavita Joshi', 14000);
INSERT INTO BankAccount VALUES (205, 'Vikram Rana', 26000);
INSERT INTO BankAccount VALUES (206, 'Deepika Yadav', 21000);
INSERT INTO BankAccount VALUES (207, 'Sakshi Deshmukh', 23000);



--Scenario 1: Process Monthly Interest (1% Interest)
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
   FOR rec IN (SELECT AccountID, Balance FROM SavingsAccount) LOOP
      UPDATE SavingsAccount
      SET Balance = Balance + (Balance * 0.01)
      WHERE AccountID = rec.AccountID;

      DBMS_OUTPUT.PUT_LINE('Interest added to Account ID: ' || rec.AccountID);
   END LOOP;
   COMMIT;
END;
/
BEGIN
  ProcessMonthlyInterest;
END;
/

--Scenario 2: Update Employee Bonus

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
   deptName IN VARCHAR2,
   bonusPercent IN NUMBER
) AS
BEGIN
   FOR rec IN (
       SELECT EmpID, EmpName, Salary
       FROM Employee
       WHERE Department = deptName
   ) LOOP
      UPDATE Employee
      SET Salary = Salary + (Salary * bonusPercent / 100)
      WHERE EmpID = rec.EmpID;

      DBMS_OUTPUT.PUT_LINE('Bonus added for ' || rec.EmpName || ' in ' || deptName);
   END LOOP;

   COMMIT;
END;

/
BEGIN
  UpdateEmployeeBonus('HR', 10);
END;
/

--Scenario 3: Transfer Funds Between Accounts

CREATE OR REPLACE PROCEDURE TransferFunds(
   fromAcc IN NUMBER,
   toAcc IN NUMBER,
   amount IN NUMBER
) AS
   fromBalance NUMBER;
BEGIN
   -- Get balance of source account
   SELECT Balance INTO fromBalance
   FROM BankAccount
   WHERE AccountID = fromAcc;

   -- Check if source has enough funds
   IF fromBalance < amount THEN
      DBMS_OUTPUT.PUT_LINE('Insufficient balance in Account ' || fromAcc);
      RETURN;
   END IF;

   -- Deduct from source
   UPDATE BankAccount
   SET Balance = Balance - amount
   WHERE AccountID = fromAcc;

   -- Add to destination
   UPDATE BankAccount
   SET Balance = Balance + amount
   WHERE AccountID = toAcc;

   DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' from Account ' || fromAcc || ' to ' || toAcc);
   COMMIT;
END;
/


BEGIN
  TransferFunds(201, 202, 5000);
END;
/


SELECT * FROM SavingsAccount;

SELECT * FROM Employee;

SELECT * FROM BankAccount;
