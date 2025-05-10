package com.exam.fsad.model;

import jakarta.persistence.*;

@Entity
@Table(name = "subjects")
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "subject_name", nullable = false) // Explicit column name mapping
    private String subjectName;

    @Column(name = "subject_code", nullable = false) // Explicit column name mapping
    private String subjectCode;

    @Column(name = "description")
    private String description;

    // Constructors
    public Subject() {}

    public Subject(String subjectName, String subjectCode, String description) {
        this.subjectName = subjectName;
        this.subjectCode = subjectCode;
        this.description = description;
    }

    // Getters & Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getSubjectCode() {
        return subjectCode;
    }

    public void setSubjectCode(String subjectCode) {
        this.subjectCode = subjectCode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}