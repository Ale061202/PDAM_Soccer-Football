package com.trianasalesianos.dam.Soccer.Football.player.dto;

import lombok.*;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Builder
public class NewPlayerDto {

    private String name;
    private String age;
    private String country;
    private int height;
    private int jerseyNumber;
    private String position;
    private double weight;
    private Long idTeam;
}
