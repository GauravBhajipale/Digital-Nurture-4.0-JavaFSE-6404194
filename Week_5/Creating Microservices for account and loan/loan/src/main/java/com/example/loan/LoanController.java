
package com.example.loan;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {
    @GetMapping("/loan")
    public String getLoan() {
        return "Loan Service is running";
    }
}
