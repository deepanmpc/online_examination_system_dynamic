package com.exam.fsad.service;

import com.exam.fsad.model.Semester;
import com.exam.fsad.repository.SemesterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SemesterService {

    @Autowired
    private SemesterRepository semesterRepository;

    public List<Semester> getAllSemesters() {
        return semesterRepository.findAll();
    }

    public Semester createSemester(Semester semester) {
        return semesterRepository.save(semester);
    }

    public Semester updateSemester(Long id, Semester semester) {
        if (semesterRepository.existsById(id)) {
            semester.setId(id);
            return semesterRepository.save(semester);
        } else {
            return null;
        }
    }

    public boolean deleteSemester(Long id) {
        if (semesterRepository.existsById(id)) {
            semesterRepository.deleteById(id);
            return true;
        }
        return false;
    }
}