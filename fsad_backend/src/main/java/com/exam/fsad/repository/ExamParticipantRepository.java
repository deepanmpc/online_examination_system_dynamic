package com.exam.fsad.repository;

import com.exam.fsad.model.ExamParticipant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamParticipantRepository extends JpaRepository<ExamParticipant, String> {
}