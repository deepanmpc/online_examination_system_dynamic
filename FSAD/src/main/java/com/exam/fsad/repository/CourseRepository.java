package com.exam.fsad.repository;

import com.exam.fsad.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    // You can define custom query methods here if needed
}