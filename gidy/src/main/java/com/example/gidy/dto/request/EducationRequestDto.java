package com.example.gidy.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EducationRequestDto {

    private String degree;

    private String university;

    private LocalDate startDate;

    private LocalDate endDate;
}