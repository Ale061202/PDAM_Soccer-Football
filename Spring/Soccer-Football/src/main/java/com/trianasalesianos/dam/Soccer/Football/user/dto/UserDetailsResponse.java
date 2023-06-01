package com.trianasalesianos.dam.Soccer.Football.user.dto;

import com.trianasalesianos.dam.Soccer.Football.user.model.User;
import com.trianasalesianos.dam.Soccer.Football.user.model.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Set;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDetailsResponse {
    private String username, avatar, firstName, email, lastName;
    private Integer phone;
    private Set<UserRole> roles;

    public static UserDetailsResponse fromUser(User user){
        return UserDetailsResponse.builder()
                .username(user.getUsername())
                .avatar(user.getAvatar())
                .firstName(user.getFirst_name())
                .lastName(user.getLast_name())
                .email(user.getEmail())
                .phone(user.getPhone())
                .roles(user.getRoles())
                .build();
    }
}
