package com.exam.fsad.controller;

import com.exam.fsad.model.ExamSchedule;
import com.exam.fsad.service.ExamScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/exam-schedules")
@CrossOrigin(origins = "*")
public class ExamScheduleController {

    @Autowired
    private ExamScheduleService examScheduleService;

    @GetMapping
    public ResponseEntity<List<ExamSchedule>> getAllExamSchedules() {
        List<ExamSchedule> examSchedules = examScheduleService.getAllExamSchedules();
        if (examSchedules.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(examSchedules);
    }
}