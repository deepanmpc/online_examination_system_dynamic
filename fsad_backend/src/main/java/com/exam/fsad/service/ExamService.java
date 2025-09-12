package com.exam.fsad.service;

import com.exam.fsad.model.Exam;
import com.exam.fsad.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExamService {

    @Autowired
    private ExamRepository examRepository;

    public Exam createExam(String name) {
        Exam exam = new Exam(name);
        return examRepository.save(exam);
    }

    public Exam getExamByName(String name) {
        return examRepository.findByName(name);
    }
}