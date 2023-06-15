package com.trianasalesianos.dam.Soccer.Football.player.service;

import com.trianasalesianos.dam.Soccer.Football.comment.model.Comment;
import com.trianasalesianos.dam.Soccer.Football.exception.LeagueNotFoundException;
import com.trianasalesianos.dam.Soccer.Football.exception.TeamNotFoundException;
import com.trianasalesianos.dam.Soccer.Football.league.dto.EditLeagueDto;
import com.trianasalesianos.dam.Soccer.Football.league.dto.GetLeagueDto;
import com.trianasalesianos.dam.Soccer.Football.league.model.League;
import com.trianasalesianos.dam.Soccer.Football.player.dto.EditPlayerDto;
import com.trianasalesianos.dam.Soccer.Football.player.dto.NewPlayerDto;
import com.trianasalesianos.dam.Soccer.Football.player.model.Player;
import com.trianasalesianos.dam.Soccer.Football.player.repository.PlayerRepository;
import com.trianasalesianos.dam.Soccer.Football.search.spec.LeagueSpecificationBuilder;
import com.trianasalesianos.dam.Soccer.Football.search.spec.PlayerSpecificationBuilder;
import com.trianasalesianos.dam.Soccer.Football.search.util.SearchCriteria;
import com.trianasalesianos.dam.Soccer.Football.team.model.Team;
import com.trianasalesianos.dam.Soccer.Football.user.dto.CreateUserRequest;
import com.trianasalesianos.dam.Soccer.Football.user.model.User;
import com.trianasalesianos.dam.Soccer.Football.user.model.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.EnumSet;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlayerService {

    private final PlayerRepository repository;

    public List<Player> findAll() {

        List<Player> result = repository.findAll();

        if (result.isEmpty())
            throw new EntityNotFoundException("No users with this search criteria");

        return repository.findAll();
    }

    public Player findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No user with id: " + id));
    }

    public Player save(NewPlayerDto newPlayerDto) {
        Player player =  Player.builder()
                .name(newPlayerDto.getName())

                .build();

        return repository.save(player);
    }

    public Player editDetails(Long id, EditPlayerDto editPlayerDto) {

        return repository.findById(id)
                .map(player -> {
                    player.setName(editPlayerDto.getName());
                    player.setCountry(editPlayerDto.getCountry());
                    player.setHeight(editPlayerDto.getHeight());
                    player.setJerseyNumber(editPlayerDto.getJerseyNumber());
                    player.setPosition(editPlayerDto.getPosition());
                    player.setWeight(editPlayerDto.getWeight());
                    return repository.save(player);
                })
                .orElseThrow(() ->new EntityNotFoundException("No user with id: " + id));


    }

    public Page<Player> search(List<SearchCriteria> params, Pageable pageable) {
        PlayerSpecificationBuilder playerSpecificationBuilder =
                new PlayerSpecificationBuilder(params);
        Specification<Player> spec =  playerSpecificationBuilder.build();
        return repository.findAll(spec, pageable);
    }

    public void delete(Long id) {
        if (repository.existsById(id))
            repository.deleteById(id);
    }
}
