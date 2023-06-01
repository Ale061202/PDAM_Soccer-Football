package com.trianasalesianos.dam.Soccer.Football.player.model;

import com.trianasalesianos.dam.Soccer.Football.team.model.Team;
import com.trianasalesianos.dam.Soccer.Football.user.model.User;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@EntityListeners(AuditingEntityListener.class)
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
@Builder
public class Player {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private int age;

    private int height;

    private double weight;

    private String country;

    private String position;

    private int jerseyNumber;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

}
