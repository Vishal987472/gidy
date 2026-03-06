package com.example.gidy.dto.response;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CertificationResponseDto {

    private Long id;
    private String name;
    private String provider;
    private LocalDate date;
}
