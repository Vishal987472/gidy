package com.example.gidy.service;
import com.example.gidy.dto.request.*;
import com.example.gidy.dto.response.ProfileResponseDto;

public interface ProfileService {


    ProfileResponseDto getProfile(Long profileId);
    void addSkill(Long profileId, SkillRequestDto dto);
    void addExperience(Long profileId, ExperienceRequestDto dto);
    void addEducation(Long profileId, EducationRequestDto dto);
    void addCertification(Long profileId, CertificationRequestDto dto);
    void updateTheme(Long profileId, ThemeRequestDto dto);
    ProfileResponseDto createProfile(ProfileRequestDto dto);


}