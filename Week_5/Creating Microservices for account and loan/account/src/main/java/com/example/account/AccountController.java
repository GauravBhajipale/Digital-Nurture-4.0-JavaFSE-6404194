
package com.example.account;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {
    @GetMapping("/account")
    public String getAccount() {
        return "Account Service is running";
    }
    @GetMapping("/{id}") // endpoint
    public String getAccountById(@PathVariable String id) {
        return "Account ID: " + id;
    }
}
