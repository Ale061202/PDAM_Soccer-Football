package com.trianasalesianos.dam.Soccer.Football.player.repository;

import com.trianasalesianos.dam.Soccer.Football.player.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PlayerRepository extends JpaRepository<Player,Long>, JpaSpecificationExecutor<Player> {
}
