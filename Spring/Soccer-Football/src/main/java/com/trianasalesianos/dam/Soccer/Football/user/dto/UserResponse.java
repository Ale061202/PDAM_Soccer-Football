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
    protected String username, avatar, firstName,lastName,email;
    protected Integer phone;
    protected String token;
    protected Set<UserRole> roles;

    protected List<GetPostDto> posts;



    public static UserResponse fromUser(User user) {

        return UserResponse.builder()
                .id(user.getId().toString())
                .username(user.getUsername())
                .avatar(user.getAvatar())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .phone(user.getPhone())
                .email(user.getEmail())
                .roles(user.getRoles())
                .posts(user.getPosts().isEmpty() ? null : user.getPosts().stream().map(GetPostDto::fromPost).toList())
                .token("")
                .build();
    }
}
