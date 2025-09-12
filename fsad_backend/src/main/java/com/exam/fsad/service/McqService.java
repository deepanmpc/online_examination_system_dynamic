package com.exam.fsad.service;

import com.exam.fsad.model.Exam;
import com.exam.fsad.model.Mcq;
import com.exam.fsad.repository.McqRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;
import java.util.Random;

@Service
public class McqService {

    @Autowired
    private McqRepository mcqRepository;

    @Autowired
    private ExamService examService;

    public Mcq createMcq(String question, List<String> options, String answer, int points, String examName) {
        try {
            Exam exam = examService.getExamByName(examName);
            if (exam == null) {
                exam = examService.createExam(examName);
            }
            Mcq mcq = new Mcq(question, options, answer, points, exam);
            return mcqRepository.save(mcq);
        } catch (Exception e) {
            // Log the exception
            return null;
        }
    }

    public List<Mcq> getMcqsByExamName(String examName) {
        try {
            Exam exam = examService.getExamByName(examName);
            if (exam != null) {
                return exam.getMcqs();
            }
            return Collections.emptyList();
        } catch (Exception e) {
            // Log the exception
            return Collections.emptyList();
        }
    }

    public List<Mcq> getRandomMcqsByExamName(String examName, int count) {
        try {
            List<Mcq> allMcqs = getMcqsByExamName(examName);
            if (allMcqs.isEmpty()) {
                return Collections.emptyList();
            }

            // Shuffle the list and return a subset
            List<Mcq> shuffledMcqs = new ArrayList<>(allMcqs);
            Collections.shuffle(shuffledMcqs, new Random());

            return shuffledMcqs.subList(0, Math.min(count, shuffledMcqs.size()));
        } catch (Exception e) {
            // Log the exception
            return Collections.emptyList();
        }
    }
}