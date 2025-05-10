package com.exam.fsad.repository;

import com.exam.fsad.model.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, Long> {
    boolean existsByEmail(String email);
}