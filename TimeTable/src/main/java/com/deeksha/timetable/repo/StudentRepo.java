package com.deeksha.timetable.repo;

import com.deeksha.timetable.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student, Long> {
    Optional<Student> findById(long id);
    Optional<Student> findByEmail(String email);
}
