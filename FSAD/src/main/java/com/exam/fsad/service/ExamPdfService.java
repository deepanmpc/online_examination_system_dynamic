package com.exam.fsad.service;

import com.exam.fsad.model.ExamPdf;
import com.exam.fsad.repository.ExamPdfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ExamPdfService {

    @Autowired
    private ExamPdfRepository examPdfRepository;

    // Method to upload and save the PDF
    public ExamPdf saveExamPdf(String examName, String course, String year, String subjectName, MultipartFile file) {
        try {
            ExamPdf examPdf = new ExamPdf();
            examPdf.setExamName(examName);
            examPdf.setCourse(course);
            examPdf.setYear(year);
            examPdf.setSubjectName(subjectName);
            examPdf.setPdfData(file.getBytes()); // Store the PDF as a byte array in the database

            return examPdfRepository.save(examPdf);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store PDF", e);
        }
    }

    // Method to fetch the PDF by ID
    public byte[] getExamPdfById(Long id) {
        ExamPdf examPdf = examPdfRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Exam PDF not found"));

        return examPdf.getPdfData(); // Retrieve the PDF binary data from the database
    }

    // Method to fetch all exam PDFs
    public List<ExamPdf> getAllExamPdfs() {
        return examPdfRepository.findAll();
    }
}