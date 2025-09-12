package com.exam.fsad.controller;

import com.exam.fsad.model.PracticeQuestion;
import com.exam.fsad.service.PracticeQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/practice-questions")
@CrossOrigin(origins = "*")
public class PracticeQuestionController {

    @Autowired
    private PracticeQuestionService practiceQuestionService;

    @GetMapping
    public ResponseEntity<List<PracticeQuestion>> getAllPracticeQuestions() {
        List<PracticeQuestion> practiceQuestions = practiceQuestionService.getAllPracticeQuestions();
        if (practiceQuestions.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(practiceQuestions);
    }
}