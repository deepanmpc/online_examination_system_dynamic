package com.exam.fsad.service;

import com.exam.fsad.model.ExamParticipant;
import com.exam.fsad.repository.ExamParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExamParticipantService {

    private final ExamParticipantRepository examParticipantRepository;

    @Autowired
    public ExamParticipantService(ExamParticipantRepository examParticipantRepository) {
        this.examParticipantRepository = examParticipantRepository;
    }

    public ExamParticipant saveExamParticipant(ExamParticipant examParticipant) {
        return examParticipantRepository.save(examParticipant);
    }

    public List<ExamParticipant> getAllExamParticipants() {
        return examParticipantRepository.findAll();
    }

    public Optional<ExamParticipant> getExamParticipantById(String studentId) {
        return examParticipantRepository.findById(studentId);
    }

    public void deleteExamParticipant(String studentId) {
        examParticipantRepository.deleteById(studentId);
    }
}