package com.exam.fsad.service;

import com.exam.fsad.dto.RegisterRequest;
import com.exam.fsad.model.RegisteredUser;
import com.exam.fsad.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RegisterService {

    @Autowired
    private RegisteredUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public String registerUser(RegisterRequest request) {
        // Validate inputs
        if (request.getName() == null || request.getName().isEmpty()) {
            return "Name cannot be empty!";
        }
        if (request.getEmail() == null || request.getEmail().isEmpty()) {
            return "Email cannot be empty!";
        }
        if (request.getPassword() == null || request.getPassword().isEmpty()) {
            return "Password cannot be empty!";
        }

        // Check if email already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already exists!";
        }

        // Create and populate the user object
        RegisteredUser user = new RegisteredUser();
        user.setName(request.getName());
        user.setLastName(request.getLastName());
        user.setPhone(request.getPhone());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword())); // Encrypt password

        // Save the user to the repository
        userRepository.save(user);
        
        return "Registration successful!";
    }
}