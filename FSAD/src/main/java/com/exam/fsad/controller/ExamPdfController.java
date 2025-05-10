package com.exam.fsad.controller;

import com.exam.fsad.model.ExamPdf;
import com.exam.fsad.service.ExamPdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/exam-pdfs")
@CrossOrigin(origins = "*")  // Optional, allow frontend requests
public class ExamPdfController {

    @Autowired
    private ExamPdfService examPdfService;

    // POST method to upload a new exam PDF
    @PostMapping
    public ResponseEntity<ExamPdf> uploadExamPdf(
            @RequestParam("examName") String examName,
            @RequestParam("course") String course,
            @RequestParam("year") String year,
            @RequestParam("subjectName") String subjectName,
            @RequestParam("file") MultipartFile file
    ) {
        ExamPdf saved = examPdfService.saveExamPdf(examName, course, year, subjectName, file);
        return ResponseEntity.ok(saved);
    }

    // GET method to fetch an exam PDF by its ID
    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getExamPdfById(@PathVariable Long id) {
        byte[] pdfData = examPdfService.getExamPdfById(id);
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("attachment", "exam.pdf");
        return ResponseEntity.ok().headers(headers).body(pdfData);
    }

    // GET method to fetch all exam PDFs
    @GetMapping
    public ResponseEntity<List<ExamPdf>> getAllExamPdfs() {
        List<ExamPdf> examPdfs = examPdfService.getAllExamPdfs();
        return ResponseEntity.ok(examPdfs);
    }
}