package com.exam.fsad.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Timestamp;

@Entity
@Table(name = "exam_participants")
public class ExamParticipant {

    @Id
    private String studentId; // Student ID

    private String year;
    private String course;
    private String examName;
    private String examPassword;
    private boolean examTaken; // To track if the exam is taken
    private Timestamp createdAt; // To track when the exam was started
    private int score; // To store the score of the participant

    // Default constructor
    public ExamParticipant() {
    }

    // Constructor with fields
    public ExamParticipant(String studentId, String year, String course, String examName, String examPassword, boolean examTaken, Timestamp createdAt, int score) {
        this.studentId = studentId;
        this.year = year;
        this.course = course;
        this.examName = examName;
        this.examPassword = examPassword;
        this.examTaken = examTaken;
        this.createdAt = createdAt;
        this.score = score;
    }

    // Getters and Setters
    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    public String getExamPassword() {
        return examPassword;
    }

    public void setExamPassword(String examPassword) {
        this.examPassword = examPassword;
    }

    public boolean isExamTaken() {
        return examTaken;
    }

    public void setExamTaken(boolean examTaken) {
        this.examTaken = examTaken;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "ExamParticipant{" +
                "studentId='" + studentId + '\'' +
                ", year='" + year + '\'' +
                ", course='" + course + '\'' +
                ", examName='" + examName + '\'' +
                ", examPassword='" + examPassword + '\'' +
                ", examTaken=" + examTaken +
                ", createdAt=" + createdAt +
                ", score=" + score +
                '}';
    }
}