package com.exam.fsad.repository;

import com.exam.fsad.model.Semester;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SemesterRepository extends JpaRepository<Semester, Long> {
    // Custom query methods can be added if necessary
}