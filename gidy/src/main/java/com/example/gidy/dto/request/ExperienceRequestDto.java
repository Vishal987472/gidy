package com.example.gidy.dto.request;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ExperienceRequestDto {

    private String company;

    private String role;

    private String description;

    private LocalDate startDate;

    private LocalDate endDate;
}
