package com.deeksha.timetable.repo;


import com.deeksha.timetable.entity.Password;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface PasswordsHolderRepo  extends JpaRepository<Password, Long> {
    Optional<Password> findById(long id);
}
