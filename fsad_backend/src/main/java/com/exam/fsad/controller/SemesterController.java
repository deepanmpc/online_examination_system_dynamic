package com.exam.fsad.controller;

import com.exam.fsad.model.Semester;
import com.exam.fsad.service.SemesterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/semesters")
public class SemesterController {

    @Autowired
    private SemesterService semesterService;

    @GetMapping
    public List<Semester> getAllSemesters() {
        return semesterService.getAllSemesters();
    }

    @PostMapping
    public ResponseEntity<Semester> createSemester(@RequestBody Semester semester) {
        Semester createdSemester = semesterService.createSemester(semester);
        return ResponseEntity.status(201).body(createdSemester); // Return the created semester with status 201
    }

    @PutMapping("/{id}")
    public ResponseEntity<Semester> updateSemester(@PathVariable Long id, @RequestBody Semester semester) {
        Semester updatedSemester = semesterService.updateSemester(id, semester);
        return updatedSemester != null ? ResponseEntity.ok(updatedSemester) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSemester(@PathVariable Long id) {
        return semesterService.deleteSemester(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}