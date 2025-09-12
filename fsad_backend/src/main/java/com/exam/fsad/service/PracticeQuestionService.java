package com.exam.fsad.service;

import com.exam.fsad.model.PracticeQuestion;
import com.exam.fsad.repository.PracticeQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class PracticeQuestionService {

    @Autowired
    private PracticeQuestionRepository practiceQuestionRepository;

    public List<PracticeQuestion> getAllPracticeQuestions() {
        try {
            return practiceQuestionRepository.findAll();
        } catch (Exception e) {
            // Log the exception
            return Collections.emptyList();
        }
    }
}