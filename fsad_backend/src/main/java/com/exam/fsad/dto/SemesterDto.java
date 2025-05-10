package com.exam.fsad.dto;

import java.time.LocalDate;
import java.util.List;

import com.exam.fsad.model.Semester;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SemesterDto {

    public Long id;
    public String semesterName;
    public String courseName;
    public LocalDate startDate;
    public LocalDate endDate;
    public String status;
    public List<String> subjects;  // Assuming subjects are a list of strings

    // Default constructor required for Jackson deserialization
    public SemesterDto() {}

    // Constructor to convert Semester to SemesterDto
    @JsonCreator
    public SemesterDto(@JsonProperty("id") Long id, 
                       @JsonProperty("semesterName") String semesterName, 
                       @JsonProperty("courseName") String courseName, 
                       @JsonProperty("startDate") LocalDate startDate, 
                       @JsonProperty("endDate") LocalDate endDate, 
                       @JsonProperty("status") String status, 
                       @JsonProperty("subjects") List<String> subjects) {
        this.id = id;
        this.semesterName = semesterName;
        this.courseName = courseName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.subjects = subjects;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSemesterName() {
        return semesterName;
    }

    public void setSemesterName(String semesterName) {
        this.semesterName = semesterName;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<String> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<String> subjects) {
        this.subjects = subjects;
    }

    // Constructor to convert Semester model to SemesterDto
    public SemesterDto(Semester semester) {
        this.id = semester.getId();
        this.semesterName = semester.getSemesterName();
        this.courseName = semester.getCourseName();
        this.startDate = semester.getStartDate();
        this.endDate = semester.getEndDate();
        this.status = semester.getStatus();
        this.subjects = semester.getSubjects();
    }
}