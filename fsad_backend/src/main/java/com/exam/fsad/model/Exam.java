package com.exam.fsad.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "exam", cascade = CascadeType.ALL)
    private List<Mcq> mcqs;

    public Exam() {
    }

    public Exam(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Mcq> getMcqs() {
        return mcqs;
    }

    public void setMcqs(List<Mcq> mcqs) {
        this.mcqs = mcqs;
    }
}