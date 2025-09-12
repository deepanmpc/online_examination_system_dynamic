package com.exam.fsad.controller;

import com.exam.fsad.model.RegisteredUser; // Added import
import com.exam.fsad.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException; // Added import
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*") // Allow CORS if calling from frontend
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        System.out.println("Received login: " + username + " / " + password);

        boolean isAuthenticated = userService.authenticate(username, password);

        if (isAuthenticated) {
            // Fetch the user again to get the role
            RegisteredUser user = userService.getUserByUsername(username)
                                            .orElseThrow(() -> new UsernameNotFoundException("User not found after authentication"));
            return ResponseEntity.ok(Map.of("message", "Login successful", "user", username, "role", user.getRole()));
        } else {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid credentials", "user", username));
        }
    }
}