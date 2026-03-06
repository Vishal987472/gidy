package com.example.gidy.entity;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Certification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String provider;

    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;
}