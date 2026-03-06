package com.example.gidy.service.impl;

import com.example.gidy.dto.request.*;
import com.example.gidy.dto.response.*;
import com.example.gidy.entity.*;
import com.example.gidy.mapper.ProfileMapper;
import com.example.gidy.repository.*;
import com.example.gidy.service.ProfileService;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final CertificationRepository certificationRepository;

    private final ProfileMapper profileMapper;

    @Override
    public ProfileResponseDto createProfile(ProfileRequestDto dto) {

        Profile profile = profileMapper.toProfileEntity(dto);

        profile.setLeague("Bronze");
        profile.setRank(0);
        profile.setPoints(0);
        profile.setTheme("LIGHT");

        Profile saved = profileRepository.save(profile);

        return profileMapper.profileToDto(saved);
    }

    @Override
    public ProfileResponseDto getProfile(Long profileId) {

        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        List<Skill> skills = skillRepository.findByProfileId(profileId);
        List<Experience> experiences = experienceRepository.findByProfileId(profileId);
        List<Education> education = educationRepository.findByProfileId(profileId);
        List<Certification> certifications = certificationRepository.findByProfileId(profileId);

        ProfileResponseDto dto = profileMapper.profileToDto(profile);
        dto.setSkills(profileMapper.toSkillResponseDtos(skills));
        dto.setExperiences(profileMapper.toExperienceResponseDto(experiences));
        dto.setEducation(profileMapper.toEducationResponseDto(education));
        dto.setCertifications(profileMapper.toCertificationResponseDto(certifications));

        return dto;
    }

    @Override
    public void addSkill(Long profileId, SkillRequestDto dto) {

        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        Skill skill = profileMapper.toSkillEntity(dto);
        skill.setProfile(profile);

        skillRepository.save(skill);
    }

    @Override
    public void addExperience(Long profileId, ExperienceRequestDto dto) {

        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        Experience experience = profileMapper.toExperienceEntity(dto);
        experience.setProfile(profile);

        experienceRepository.save(experience);
    }

    @Override
    public void addEducation(Long profileId, EducationRequestDto dto) {

        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        Education education = profileMapper.toEducationEntity(dto);
        education.setProfile(profile);

        educationRepository.save(education);
    }

    @Override
    public void addCertification(Long profileId, CertificationRequestDto dto) {

        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        Certification certification = profileMapper.toCertificationEntity(dto);
        certification.setProfile(profile);

        certificationRepository.save(certification);
    }

    @Override
    public void updateTheme(Long profileId, ThemeRequestDto dto) {

        Profile profile = profileRepository.findById(profileId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        profile.setTheme(dto.getTheme());

        profileRepository.save(profile);
    }

}