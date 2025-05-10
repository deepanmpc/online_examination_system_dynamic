package com.exam.fsad.repository;

import com.exam.fsad.model.ExamPdf;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamPdfRepository extends JpaRepository<ExamPdf, Long> {
}