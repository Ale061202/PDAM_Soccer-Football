package com.trianasalesianos.dam.Soccer.Football.player.controller;


import com.trianasalesianos.dam.Soccer.Football.player.dto.EditPlayerDto;
import com.trianasalesianos.dam.Soccer.Football.player.dto.GetPlayerDto;
import com.trianasalesianos.dam.Soccer.Football.player.model.Player;
import com.trianasalesianos.dam.Soccer.Football.player.service.PlayerService;
import com.trianasalesianos.dam.Soccer.Football.search.util.SearchCriteria;
import com.trianasalesianos.dam.Soccer.Football.search.util.SearchCriteriaExtractor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/player")
public class PlayerController {

    private final PlayerService playerService;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/")
    public Page<GetPlayerDto> getAllPlayers(@RequestParam(value = "search", defaultValue = "") String search,
                                            @PageableDefault(size = 15, page = 0) Pageable pageable){
        List<SearchCriteria> params = SearchCriteriaExtractor.extractSearchCriteriaList(search);

        return playerService.search(params,pageable).map(GetPlayerDto::fromPlayer);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{id}")
    public GetPlayerDto getPlayerById(@PathVariable Long id){
        return GetPlayerDto.fromPlayer(playerService.findById(id).orElse(null));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/")
    public ResponseEntity<GetPlayerDto> createPlayer(@Valid @RequestBody Player player){

        Player created = playerService.save(player);

        URI createdURI = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(created.getId()).toUri();

        return ResponseEntity
                .created(createdURI)
                .body(GetPlayerDto.fromPlayer(created));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public GetPlayerDto editPlayer(@PathVariable Long id, @Valid @RequestBody EditPlayerDto editPlayerDto){

        Player edited = playerService.editDetails(id, editPlayerDto);

        return GetPlayerDto.fromPlayer(edited);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){

        playerService.delete(id);

        return ResponseEntity.noContent().build();
    }
}
