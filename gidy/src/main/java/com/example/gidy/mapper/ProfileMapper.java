package com.example.gidy.mapper;

import com.example.gidy.dto.request.*;
import com.example.gidy.dto.response.*;
import com.example.gidy.entity.*;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProfileMapper {

    // Profile → Response DTO
    ProfileResponseDto profileToDto(Profile profile);

    // Request DTO → Entity
    Profile toProfileEntity(ProfileRequestDto dto);
    Skill toSkillEntity(SkillRequestDto dto);
    Experience toExperienceEntity(ExperienceRequestDto dto);
    Education toEducationEntity(EducationRequestDto dto);
    Certification toCertificationEntity(CertificationRequestDto dto);

    // Entity → Response DTO
    List<SkillResponseDto> toSkillResponseDtos(List<Skill> skills);
    List<ExperienceResponseDto> toExperienceResponseDto(List<Experience> experience);
    List<EducationResponseDto> toEducationResponseDto(List<Education> education);
    List<CertificationResponseDto> toCertificationResponseDto(List<Certification> certification);

}