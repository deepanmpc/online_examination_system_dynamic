package com.exam.fsad.service;

import com.exam.fsad.model.ExamSchedule;
import com.exam.fsad.repository.ExamScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ExamScheduleService {

    @Autowired
    private ExamScheduleRepository examScheduleRepository;

    public List<ExamSchedule> getAllExamSchedules() {
        try {
            return examScheduleRepository.findAll();
        } catch (Exception e) {
            // Log the exception
            return Collections.emptyList();
        }
    }
}