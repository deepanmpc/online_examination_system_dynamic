package com.exam.fsad.controller;

import com.exam.fsad.model.Mcq;
import com.exam.fsad.service.McqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/mcqs")
@CrossOrigin(origins = "*")
public class McqController {

    @Autowired
    private McqService mcqService;

    @PostMapping("/{examName}/create")
    public ResponseEntity<Mcq> createMcq(@PathVariable String examName, @RequestBody Map<String, Object> payload) {
        List<Map<String, Object>> mcqDtos = (List<Map<String, Object>>) payload.get("mcqDtos");
        Map<String, Object> mcqDto = mcqDtos.get(0);
        String question = (String) mcqDto.get("question");
        List<String> options = (List<String>) mcqDto.get("options");
        String answer = (String) mcqDto.get("answer");
        int points = (int) mcqDto.get("points");
        Mcq createdMcq = mcqService.createMcq(question, options, answer, points, examName);
        if (createdMcq != null) {
            return ResponseEntity.ok(createdMcq);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{examName}")
    public ResponseEntity<List<Mcq>> getMcqsByExamName(@PathVariable String examName) {
        return ResponseEntity.ok(mcqService.getMcqsByExamName(examName));
    }

    @GetMapping("/{examName}/random/{count}")
    public ResponseEntity<List<Mcq>> getRandomMcqsByExamName(@PathVariable String examName, @PathVariable int count) {
        return ResponseEntity.ok(mcqService.getRandomMcqsByExamName(examName, count));
    }
}