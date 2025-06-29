package com.gaurav;

import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert that 2 + 3 equals 5
        assertEquals(5, 2 + 3);

        // Assert that 5 is greater than 3
        assertTrue(5 > 3);

        // Assert that 5 is not less than 3
        assertFalse(5 < 3);

        // Assert null
        assertNull(null);

        // Assert not null
        assertNotNull(new Object());
    }
}
