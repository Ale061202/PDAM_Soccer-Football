package com.trianasalesianos.dam.Soccer.Football.user.dto;

import com.trianasalesianos.dam.Soccer.Football.user.model.User;
import com.trianasalesianos.dam.Soccer.Football.user.model.UserRole;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDetailsResponse {
    private String username, avatar, firstName, lastName, email;
    private Integer phone;
    private Set<UserRole> roles;

    public static UserDetailsResponse fromUser(User user){
        return UserDetailsResponse.builder()
                .username(user.getUsername())
                .avatar(user.getAvatar())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .roles(user.getRoles())
                .build();
    }
}
