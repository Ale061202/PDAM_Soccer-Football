package com.trianasalesianos.dam.Soccer.Football.player.dto;

import lombok.*;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Builder
public class NewPlayerDto {

    private String name;

    private String position;

    private int height;

    private double weight;

    private int jerseyNumber;
}
