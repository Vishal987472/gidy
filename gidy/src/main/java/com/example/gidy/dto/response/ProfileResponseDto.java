package com.example.gidy.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProfileResponseDto {

    private Long id;

    private String name;

    private String role;

    private String location;

    private String bio;

    private String email;

    private String profilePicture;

    private String league;

    private Integer rank;

    private Integer points;

    private String theme;


    private List<SkillResponseDto> skills;
    private List<ExperienceResponseDto> experiences;
    private List<EducationResponseDto> education;
    private List<CertificationResponseDto> certifications;
}