package com.gaurav;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    // Setup method
    @Before
    public void setUp() {
        calculator = new Calculator();  // Arrange
        System.out.println("Setup done");
    }

    // Teardown method
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown done");
    }

    @Test
    public void testAddition() {
        // Act
        int result = calculator.add(10, 5);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        // Act
        int result = calculator.subtract(10, 3);

        // Assert
        assertEquals(7, result);
    }
}
