package com.example.gidy.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProfileRequestDto {

    private String name;
    private String role;
    private String location;
    private String bio;
    private String email;
    private String profilePicture;

}
