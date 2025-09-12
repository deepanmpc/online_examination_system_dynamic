package com.exam.fsad.repository;

import com.exam.fsad.model.Mcq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface McqRepository extends JpaRepository<Mcq, Long> {
}