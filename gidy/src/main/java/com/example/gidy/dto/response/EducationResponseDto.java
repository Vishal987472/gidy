package com.example.gidy.dto.response;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EducationResponseDto {

    private Long id;
    private String degree;
    private String university;
    private LocalDate startDate;
    private LocalDate endDate;
}