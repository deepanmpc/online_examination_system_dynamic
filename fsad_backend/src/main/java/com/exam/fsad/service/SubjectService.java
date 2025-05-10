package com.exam.fsad.service;

import com.exam.fsad.model.Subject;
import com.exam.fsad.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {

    @Autowired
    private SubjectRepository subjectRepository;

    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    public Subject addSubject(Subject subject) {
        if (subject.getSubjectName() == null || subject.getSubjectCode() == null) {
            throw new IllegalArgumentException("Subject name and code are required");
        }
        return subjectRepository.save(subject);
    }

    public void deleteSubject(Long id) {
        subjectRepository.deleteById(id);
    }
}