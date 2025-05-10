package com.exam.fsad.controller;

import com.exam.fsad.model.ExamParticipant;
import com.exam.fsad.service.ExamParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/exam-participants")
public class ExamController {

    private final ExamParticipantService examParticipantService;

    @Autowired
    public ExamController(ExamParticipantService examParticipantService) {
        this.examParticipantService = examParticipantService;
    }

    @PostMapping
    public ResponseEntity<ExamParticipant> createExamParticipant(@RequestBody ExamParticipant examParticipant) {
        ExamParticipant savedExamParticipant = examParticipantService.saveExamParticipant(examParticipant);
        return new ResponseEntity<>(savedExamParticipant, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ExamParticipant>> getAllExamParticipants() {
        List<ExamParticipant> examParticipants = examParticipantService.getAllExamParticipants();
        return new ResponseEntity<>(examParticipants, HttpStatus.OK);
    }

    @GetMapping("/{studentId}")
    public ResponseEntity<ExamParticipant> getExamParticipantById(@PathVariable String studentId) {
        Optional<ExamParticipant> examParticipant = examParticipantService.getExamParticipantById(studentId);
        return examParticipant.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{studentId}")
    public ResponseEntity<ExamParticipant> updateExamParticipant(@PathVariable String studentId, @RequestBody ExamParticipant examParticipant) {
        Optional<ExamParticipant> existingParticipant = examParticipantService.getExamParticipantById(studentId);
        if (existingParticipant.isPresent()) {
            examParticipant.setStudentId(studentId);
            ExamParticipant updatedExamParticipant = examParticipantService.saveExamParticipant(examParticipant);
            return new ResponseEntity<>(updatedExamParticipant, HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{studentId}")
    public ResponseEntity<Void> deleteExamParticipant(@PathVariable String studentId) {
        Optional<ExamParticipant> examParticipant = examParticipantService.getExamParticipantById(studentId);
        if (examParticipant.isPresent()) {
            examParticipantService.deleteExamParticipant(studentId);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}