package com.exam.fsad;

import com.exam.fsad.model.ExamSchedule;
import com.exam.fsad.model.PracticeQuestion;
import com.exam.fsad.repository.ExamScheduleRepository;
import com.exam.fsad.repository.PracticeQuestionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class FsadApplication {

	public static void main(String[] args) {
		SpringApplication.run(FsadApplication.class, args);
	}

	@Bean
	CommandLineRunner init(PracticeQuestionRepository practiceQuestionRepository, ExamScheduleRepository examScheduleRepository) {
		return args -> {
			practiceQuestionRepository.save(new PracticeQuestion("Math", "Midterm", "https://www.selfstudys.com/advance-pdf-viewer/cbse-sample-paper/english/12th/mathematics/mathematics-cbse-model-question-papers-2025-with-marking-scheme/1117023"));
			practiceQuestionRepository.save(new PracticeQuestion("Math", "Final", "https://www.selfstudys.com/advance-pdf-viewer/cbse-sample-paper/english/12th/mathematics/mathematics-2025-set-2/1119312"));
			practiceQuestionRepository.save(new PracticeQuestion("History", "Midterm", "https://www.selfstudys.com/advance-pdf-viewer/cbse-sample-paper/english/12th/history/history-cbse-model-question-papers-2025-with-marking-scheme/1117012"));

			examScheduleRepository.save(new ExamSchedule("Math 101 Final Exam", "Math 101", "Final exam for Math 101 covering Algebra and Geometry.", LocalDate.of(2025, 5, 15)));
			examScheduleRepository.save(new ExamSchedule("History 202 Midterm Exam", "History 202", "Midterm exam for History 202 covering World War II.", LocalDate.of(2025, 5, 20)));
			examScheduleRepository.save(new ExamSchedule("Computer Science 301 Practical Exam", "Computer Science 301", "Practical exam for CS 301 on Data Structures and Algorithms.", LocalDate.of(2025, 5, 25)));
		};
	}

}
