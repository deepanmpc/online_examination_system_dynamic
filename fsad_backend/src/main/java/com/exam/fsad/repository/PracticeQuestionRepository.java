package com.exam.fsad.repository;

import com.exam.fsad.model.PracticeQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PracticeQuestionRepository extends JpaRepository<PracticeQuestion, Long> {
}