package com.exam.fsad.service;

import com.exam.fsad.model.RegisteredUser;
import com.exam.fsad.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean authenticate(String username, String password) {
        // WARNING: TEMPORARY BYPASS FOR DEBUGGING. DO NOT USE IN PRODUCTION.
        Optional<RegisteredUser> userOpt = registeredUserRepository.findByEmail(username);

        if (userOpt.isPresent()) {
            System.out.println("Authentication bypassed for existing user: " + username);
            return true; // Always return true for existing user for testing
        } else {
            System.out.println("User not found: " + username + ". Authentication failed (no bypass for non-existent users).");
            return false; // Do not bypass if user does not exist
        }
    }

    public Optional<RegisteredUser> getUserByUsername(String username) {
        return registeredUserRepository.findByEmail(username);
    }
}