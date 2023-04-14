package com.trianasalesianos.dam.Soccer.Football.team.model;
import com.trianasalesianos.dam.Soccer.Football.league.model.League;
import com.trianasalesianos.dam.Soccer.Football.player.model.Player;
import com.trianasalesianos.dam.Soccer.Football.user.model.User;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@EntityListeners(AuditingEntityListener.class)
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
@Builder
public class Team {

    @Id
    @GeneratedValue
    private Long id;

    private String teamName;

    @ManyToOne
    @JoinColumn(name = "league_id")
    private League league;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "team")
    @Builder.Default
    private List<Player> players = new ArrayList<>();
}
