package com.example.gidy.repository;
import java.util.List;
import com.example.gidy.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {
    List<Skill> findByProfileId(Long profileId);
}