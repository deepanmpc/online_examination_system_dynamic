package com.exam.fsad.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;

@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Course name cannot be blank")
    @Size(min = 3, max = 100, message = "Course name must be between 3 and 100 characters")
    private String courseName;

    @NotBlank(message = "Course code cannot be blank")
    @Size(min = 2, max = 20, message = "Course code must be between 2 and 20 characters")
    @Pattern(regexp = "^[A-Z0-9]+$", message = "Course code must be alphanumeric and uppercase")
    private String courseCode;

    @Size(max = 500, message = "Description must be less than 500 characters")
    @Column(name = "description")  // Altered column name to "description"
    private String courseDescription;  // This name remains unchanged in the Java code, but the database column is renamed.

    // Default constructor (required for JPA)
    public Course() {}

    // Constructor with all fields
    public Course(String courseName, String courseCode, String courseDescription) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.courseDescription = courseDescription;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }
}