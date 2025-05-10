package com.exam.fsad.controller;

import com.exam.fsad.model.Subject;
import com.exam.fsad.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173") // Adjust if frontend is hosted elsewhere
@RestController
@RequestMapping("/api/subjects")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @GetMapping
    public List<Subject> getAllSubjects() {
        return subjectService.getAllSubjects();
    }

    @PostMapping
    public Subject addSubject(@RequestBody Subject subject) {
        if (subject.getSubjectName() == null || subject.getSubjectCode() == null) {
            throw new IllegalArgumentException("Subject name and code are required");
        }
        return subjectService.addSubject(subject);
    }

    @DeleteMapping("/{id}")
    public void deleteSubject(@PathVariable Long id) {
        subjectService.deleteSubject(id);
    }
}