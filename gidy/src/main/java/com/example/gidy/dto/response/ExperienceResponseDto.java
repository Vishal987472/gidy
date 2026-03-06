package com.example.gidy.dto.response;


import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ExperienceResponseDto {

    private Long id;
    private String company;
    private String role;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
}