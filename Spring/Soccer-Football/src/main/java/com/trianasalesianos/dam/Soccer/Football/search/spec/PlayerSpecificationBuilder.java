package com.trianasalesianos.dam.Soccer.Football.search.spec;

import com.trianasalesianos.dam.Soccer.Football.player.model.Player;
import com.trianasalesianos.dam.Soccer.Football.search.util.SearchCriteria;
import com.trianasalesianos.dam.Soccer.Football.team.model.Team;

import java.util.List;

public class PlayerSpecificationBuilder extends GenericSpecificationBuilder<Player> {


    public PlayerSpecificationBuilder(List<SearchCriteria> params) {
        super(params, Team.class);
    }

}
