package com.exam.fsad.service;

import com.exam.fsad.model.User;
import com.exam.fsad.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String username, String password) {
        Optional<User> userOpt = userRepository.findByUsername(username);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            System.out.println("Input password: " + password);
            System.out.println("DB password: " + user.getPassword());
            return user.getPassword().equals(password);
        } else {
            System.out.println("User not found: " + username);
            return false;
        }
    }

    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}