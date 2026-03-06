package com.example.gidy.controller;

import com.example.gidy.dto.request.*;
import com.example.gidy.dto.response.ProfileResponseDto;
import com.example.gidy.service.ProfileService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class ProfileController {

    private final ProfileService profileService;
    @PostMapping
    public ProfileResponseDto createProfile(
            @RequestBody ProfileRequestDto dto) {

        return profileService.createProfile(dto);
    }

    @GetMapping("/{id}")
    public ProfileResponseDto getProfile(@PathVariable Long id) {
        return profileService.getProfile(id);
    }

    @PostMapping("/{id}/skills")
    public void addSkill(
            @PathVariable Long id,
            @RequestBody SkillRequestDto dto) {

        profileService.addSkill(id, dto);
    }

    @PostMapping("/{id}/experience")
    public void addExperience(
            @PathVariable Long id,
            @RequestBody ExperienceRequestDto dto) {

        profileService.addExperience(id, dto);
    }

    @PostMapping("/{id}/education")
    public void addEducation(
            @PathVariable Long id,
            @RequestBody EducationRequestDto dto) {

        profileService.addEducation(id, dto);
    }

    @PostMapping("/{id}/certification")
    public void addCertification(
            @PathVariable Long id,
            @RequestBody CertificationRequestDto dto) {

        profileService.addCertification(id, dto);
    }

    @PutMapping("/{id}/theme")
    public void updateTheme(
            @PathVariable Long id,
            @RequestBody ThemeRequestDto dto) {

        profileService.updateTheme(id, dto);
    }

}