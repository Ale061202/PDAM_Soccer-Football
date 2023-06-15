package com.trianasalesianos.dam.Soccer.Football.player.dto;

import com.trianasalesianos.dam.Soccer.Football.player.model.Player;
import com.trianasalesianos.dam.Soccer.Football.team.model.Team;
import lombok.*;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Builder
public class GetPlayerDto {

    private Long id;

    private String name;

    private int age;

    private String position;

    private int jerseyNumber;

    private int height;

    private double weight;

    private String team;

    public static GetPlayerDto fromPlayer(Player player){
        return GetPlayerDto.builder()
                .id(player.getId())
                .name(player.getName())
                .position(player.getPosition())
                .jerseyNumber(player.getJerseyNumber())
                .height(player.getHeight())
                .weight(player.getWeight())
                .team(player.getTeam().getTeamName())
                .build();
    }

}