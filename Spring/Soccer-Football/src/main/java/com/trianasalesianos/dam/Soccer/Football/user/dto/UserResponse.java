package com.trianasalesianos.dam.Soccer.Football.user.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.trianasalesianos.dam.Soccer.Football.post.dto.GetPostDto;
import com.trianasalesianos.dam.Soccer.Football.team.dto.GetTeamDto;
import com.trianasalesianos.dam.Soccer.Football.user.model.User;
import com.trianasalesianos.dam.Soccer.Football.user.model.UserRole;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@SuperBuilder
public class UserResponse {

    protected String id;
    protected String username, avatar, first_name,last_name,email;
    protected String token;
    private int phone;
    protected Set<UserRole> roles;


    public static UserResponse fromUser(User user) {

        return UserResponse.builder()
                .id(user.getId().toString())
                .username(user.getUsername())
                .avatar(user.getAvatar())
                .first_name(user.getFirst_name())
                .last_name(user.getLast_name())
                .email(user.getEmail())
                .phone(user.getPhone())
                .roles(user.getRoles())
                .token("")
                .build();
    }
}
