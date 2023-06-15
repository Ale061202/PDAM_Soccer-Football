package com.trianasalesianos.dam.Soccer.Football.user.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.trianasalesianos.dam.Soccer.Football.user.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@SuperBuilder
public class JwtUserResponse extends UserResponse{

    private String token;
    private String refreshToken;
    public JwtUserResponse(UserResponse userResponse) {

    }

    public static JwtUserResponse of (User user, String token, String refreshToken) {
        JwtUserResponse result = new JwtUserResponse(UserResponse.fromUser(user));
        result.setToken(token);
        result.setRefreshToken(refreshToken);
        return result;

    }
}
