package com.deeksha.timetable.controller;

import com.deeksha.timetable.dto.CourseRegisterRequest;
import com.deeksha.timetable.dto.WeeklyTimeTableResponse;
import com.deeksha.timetable.entity.Course;
import com.deeksha.timetable.exception.CourseNotFoundException;
import com.deeksha.timetable.exception.StudentNotFoundException;
import com.deeksha.timetable.exception.TimeSlotNotFoundException;
import com.deeksha.timetable.service.CourseService;
import com.deeksha.timetable.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.List;

@RestController
@RequestMapping("/api/v1/student")
public class StudentController {
    private final StudentService studentService;
    private final CourseService courseService;

    public StudentController(StudentService studentService, CourseService courseService) {
        this.studentService = studentService;
        this.courseService = courseService;
    }



    @GetMapping("{id}/courses")
    public ResponseEntity<List<Course>> getAllCourses(@PathVariable Long id) {
        List<Course> courses = courseService.getAll();
        return ResponseEntity.ok(courses);
    }

    @GetMapping("{id}/timetable")
    public ResponseEntity<?> getWeeklyTimeTable(@PathVariable Long id) {
        return studentService.showTimeTable(id);
    }

    @PostMapping("{id}/register-course")
    public ResponseEntity<?> registerCourse(
            @PathVariable Long id,
            @RequestBody CourseRegisterRequest request) {

        try {
            studentService.registerCourseToTimeSlot(id, request);
            return ResponseEntity.ok("Course registered to time slot successfully");
        } catch (StudentNotFoundException | CourseNotFoundException | TimeSlotNotFoundException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }

    @GetMapping("{id}/registered-courses") // Fixed endpoint to match frontend
    public ResponseEntity<?> getRegisteredCourses(@PathVariable Long id) {
        return studentService.getRegisteredCourses(id);
    }
}
