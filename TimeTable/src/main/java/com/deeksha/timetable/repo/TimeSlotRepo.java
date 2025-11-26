package com.deeksha.timetable.repo;

import com.deeksha.timetable.entity.TimeSlot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeSlotRepo extends JpaRepository<TimeSlot, Long> {}
