package com.trianasalesianos.dam.Soccer.Football.player.controller;


import com.trianasalesianos.dam.Soccer.Football.comment.model.Comment;
import com.trianasalesianos.dam.Soccer.Football.league.model.League;
import com.trianasalesianos.dam.Soccer.Football.player.dto.EditPlayerDto;
import com.trianasalesianos.dam.Soccer.Football.player.dto.GetPlayerDto;
import com.trianasalesianos.dam.Soccer.Football.player.dto.NewPlayerDto;
import com.trianasalesianos.dam.Soccer.Football.player.model.Player;
import com.trianasalesianos.dam.Soccer.Football.player.service.PlayerService;
import com.trianasalesianos.dam.Soccer.Football.search.util.SearchCriteria;
import com.trianasalesianos.dam.Soccer.Football.search.util.SearchCriteriaExtractor;
import com.trianasalesianos.dam.Soccer.Football.team.dto.GetTeamDto;
import com.trianasalesianos.dam.Soccer.Football.team.dto.NewTeamDto;
import com.trianasalesianos.dam.Soccer.Football.team.model.Team;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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

    @Operation(summary = "Get a list of Players with pagination")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Players Found",
                    content = {@Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = Player.class)),
                            examples = {@ExampleObject(
                                    value = """
                                            {
                                                "content": [
                                                    {
                                                        "id": 44,
                                                        "name": "Sergio Canales",
                                                        "age": "33",
                                                        "position": "Centrocampista",
                                                        "jerseyNumber": 10,
                                                        "height": 176,
                                                        "weight": 65.0,
                                                        "team": "Porcinos FC"
                                                    },
                                                    {
                                                        "id": 45,
                                                        "name": "Sergio Ramos",
                                                        "age": "37",
                                                        "position": "Defensa",
                                                        "jerseyNumber": 4,
                                                        "height": 184,
                                                        "weight": 65.0,
                                                        "team": "Ultimate Mostoles"
                                                    },
                                                    {
                                                        "id": 46,
                                                        "name": "Borja Iglesias",
                                                        "age": "30",
                                                        "position": "Delantero",
                                                        "jerseyNumber": 9,
                                                        "height": 187,
                                                        "weight": 65.0,
                                                        "team": "Saiyans FC"
                                                    },
                                                    {
                                                        "id": 47,
                                                        "name": "Claudio Bravo",
                                                        "age": "40",
                                                        "position": "Portero",
                                                        "jerseyNumber": 1,
                                                        "height": 184,
                                                        "weight": 65.0,
                                                        "team": "ElBarrio"
                                                    },
                                                    {
                                                        "id": 48,
                                                        "name": "Nabil Fekir",
                                                        "age": "29",
                                                        "position": "Centrocampista",
                                                        "jerseyNumber": 8,
                                                        "height": 173,
                                                        "weight": 72.0,
                                                        "team": "PIO"
                                                    },
                                                    {
                                                        "id": 49,
                                                        "name": "Luiz Felipe",
                                                        "age": "26",
                                                        "position": "Defensa",
                                                        "jerseyNumber": 19,
                                                        "height": 187,
                                                        "weight": 65.0,
                                                        "team": "1K"
                                                    },
                                                    {
                                                        "id": 50,
                                                        "name": "Cristiano Ronaldo",
                                                        "age": "38",
                                                        "position": "Delantero",
                                                        "jerseyNumber": 7,
                                                        "height": 176,
                                                        "weight": 65.0,
                                                        "team": "Kunisports"
                                                    },
                                                    {
                                                        "id": 51,
                                                        "name": "Alisson",
                                                        "age": "30",
                                                        "position": "Portero",
                                                        "jerseyNumber": 10,
                                                        "height": 193,
                                                        "weight": 91.0,
                                                        "team": "Troncos FC"
                                                    },
                                                    {
                                                        "id": 52,
                                                        "name": "Juanmi",
                                                        "age": "30",
                                                        "position": "Centrocampista",
                                                        "jerseyNumber": 7,
                                                        "height": 169,
                                                        "weight": 65.0,
                                                        "team": "Jijantes FC"
                                                    },
                                                    {
                                                        "id": 53,
                                                        "name": "German Pezzella",
                                                        "age": "31",
                                                        "position": "Defensa",
                                                        "jerseyNumber": 6,
                                                        "height": 190,
                                                        "weight": 82.0,
                                                        "team": "Aniquiladores FC"
                                                    },
                                                    {
                                                        "id": 54,
                                                        "name": "Messi",
                                                        "age": "35",
                                                        "position": "Delantero",
                                                        "jerseyNumber": 10,
                                                        "height": 170,
                                                        "weight": 65.0,
                                                        "team": "Xbuyer Team"
                                                    },
                                                    {
                                                        "id": 55,
                                                        "name": "David De Gea",
                                                        "age": "32",
                                                        "position": "Portero",
                                                        "jerseyNumber": 1,
                                                        "height": 192,
                                                        "weight": 82.0,
                                                        "team": "Rayo de Barcelona"
                                                    },
                                                    {
                                                        "id": 56,
                                                        "name": "Toni Kroos",
                                                        "age": "33",
                                                        "position": "Centrocampista",
                                                        "jerseyNumber": 8,
                                                        "height": 183,
                                                        "weight": 65.0,
                                                        "team": "Real Betis Balompie"
                                                    },
                                                    {
                                                        "id": 57,
                                                        "name": "Sabaly",
                                                        "age": "30",
                                                        "position": "Defensa",
                                                        "jerseyNumber": 23,
                                                        "height": 174,
                                                        "weight": 66.0,
                                                        "team": "Sevilla FC"
                                                    },
                                                    {
                                                        "id": 58,
                                                        "name": "Antoine Griezmann",
                                                        "age": "32",
                                                        "position": "Delantero",
                                                        "jerseyNumber": 8,
                                                        "height": 176,
                                                        "weight": 65.0,
                                                        "team": "Real Madrid"
                                                    },
                                                    {
                                                        "id": 59,
                                                        "name": "Rui Silva",
                                                        "age": "29",
                                                        "position": "Portero",
                                                        "jerseyNumber": 13,
                                                        "height": 189,
                                                        "weight": 85.0,
                                                        "team": "FC Barcelona"
                                                    },
                                                    {
                                                        "id": 60,
                                                        "name": "Luka Modric",
                                                        "age": "37",
                                                        "position": "Centrocampista",
                                                        "jerseyNumber": 10,
                                                        "height": 172,
                                                        "weight": 65.0,
                                                        "team": "Atletico de Madrid"
                                                    },
                                                    {
                                                        "id": 61,
                                                        "name": "Virgil van Dijk",
                                                        "age": "31",
                                                        "position": "Defensa",
                                                        "jerseyNumber": 10,
                                                        "height": 195,
                                                        "weight": 92.0,
                                                        "team": "Real Valladolid"
                                                    },
                                                    {
                                                        "id": 62,
                                                        "name": "Luis Suárez",
                                                        "age": "36",
                                                        "position": "Delantero",
                                                        "jerseyNumber": 9,
                                                        "height": 182,
                                                        "weight": 65.0,
                                                        "team": "Real Sociedad"
                                                    },
                                                    {
                                                        "id": 63,
                                                        "name": "Manuel Neuer",
                                                        "age": "37",
                                                        "position": "Portero",
                                                        "jerseyNumber": 1,
                                                        "height": 193,
                                                        "weight": 65.0,
                                                        "team": "Villarreal"
                                                    },
                                                    {
                                                        "id": 64,
                                                        "name": "Joaquin Sánchez",
                                                        "age": "41",
                                                        "position": "Centrocampista",
                                                        "jerseyNumber": 17,
                                                        "height": 179,
                                                        "weight": 65.0,
                                                        "team": "Valencia"
                                                    },
                                                    {
                                                        "id": 65,
                                                        "name": "Gerard Pique",
                                                        "age": "36",
                                                        "position": "Defensa",
                                                        "jerseyNumber": 3,
                                                        "height": 194,
                                                        "weight": 65.0,
                                                        "team": "Athletic Club"
                                                    },
                                                    {
                                                        "id": 66,
                                                        "name": "Karim Benzema",
                                                        "age": "35",
                                                        "position": "Delantero",
                                                        "jerseyNumber": 19,
                                                        "height": 185,
                                                        "weight": 65.0,
                                                        "team": "Elche"
                                                    },
                                                    {
                                                        "id": 67,
                                                        "name": "Ter Stegen",
                                                        "age": "31",
                                                        "position": "Portero",
                                                        "jerseyNumber": 1,
                                                        "height": 187,
                                                        "weight": 65.0,
                                                        "team": "Girona"
                                                    },
                                                    {
                                                        "id": 68,
                                                        "name": "Thomas Müller",
                                                        "age": "33",
                                                        "position": "Centrocampista",
                                                        "jerseyNumber": 25,
                                                        "height": 185,
                                                        "weight": 65.0,
                                                        "team": "Osasuna"
                                                    },
                                                    {
                                                        "id": 69,
                                                        "name": "Marc Bartra",
                                                        "age": "32",
                                                        "position": "Defensa",
                                                        "jerseyNumber": 3,
                                                        "height": 184,
                                                        "weight": 65.0,
                                                        "team": "Rayo Vallecano"
                                                    },
                                                    {
                                                        "id": 70,
                                                        "name": "Rubén Castro",
                                                        "age": "41",
                                                        "position": "Delantero",
                                                        "jerseyNumber": 24,
                                                        "height": 169,
                                                        "weight": 65.0,
                                                        "team": "Getafe"
                                                    },
                                                    {
                                                        "id": 71,
                                                        "name": "Courtois",
                                                        "age": "31",
                                                        "position": "Portero",
                                                        "jerseyNumber": 1,
                                                        "height": 200,
                                                        "weight": 96.0,
                                                        "team": "Cadiz"
                                                    },
                                                    {
                                                        "id": 72,
                                                        "name": "Jude Bellingham",
                                                        "age": "19",
                                                        "position": "Centrocampista",
                                                        "jerseyNumber": 22,
                                                        "height": 186,
                                                        "weight": 65.0,
                                                        "team": "Almería"
                                                    }
                                                ],
                                                "pageable": {
                                                    "sort": {
                                                        "empty": true,
                                                        "unsorted": true,
                                                        "sorted": false
                                                    },
                                                    "offset": 0,
                                                    "pageNumber": 0,
                                                    "pageSize": 30,
                                                    "paged": true,
                                                    "unpaged": false
                                                },
                                                "last": true,
                                                "totalPages": 1,
                                                "totalElements": 29,
                                                "first": true,
                                                "size": 30,
                                                "number": 0,
                                                "sort": {
                                                    "empty": true,
                                                    "unsorted": true,
                                                    "sorted": false
                                                },
                                                "numberOfElements": 29,
                                                "empty": false
                                            }                                       
                                            """
                            )}
                    )}),
            @ApiResponse(responseCode = "404",
                    description = "No Players Found",
                    content = @Content),
    })
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @GetMapping("/")
    public Page<GetPlayerDto> getAllPlayers(@RequestParam(value = "search", defaultValue = "") String search,
                                            @PageableDefault(size = 30, page = 0) Pageable pageable){
        List<SearchCriteria> params = SearchCriteriaExtractor.extractSearchCriteriaList(search);

        return playerService.search(params,pageable).map(GetPlayerDto::fromPlayer);
    }

    @Operation(summary = "Get a Player by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Player Found",
                    content = {@Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = Player.class)),
                            examples = {@ExampleObject(
                                    value = """
                                            [
                                                  {
                                                      "id": 44,
                                                      "name": "Sergio Canales",
                                                      "age": "33",
                                                      "position": "Centrocampista",
                                                      "jerseyNumber": 10,
                                                      "height": 176,
                                                      "weight": 65.0,
                                                      "team": "Porcinos FC"
                                                  }
                                             ]                                         
                                            """
                            )}
                    )}),
            @ApiResponse(responseCode = "404",
                    description = "No Player Found",
                    content = @Content),
    })

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{id}")
    public GetPlayerDto getPlayerById(@PathVariable Long id){
        return GetPlayerDto.fromPlayer(playerService.findById(id));
    }

    @Operation(summary = "Create a Player")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201",
                    description = "Player Created",
                    content = {@Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = Player.class)),
                            examples = {@ExampleObject(
                                    value = """
                                            [
                                                   {
                                                       "id": 73,
                                                       "name": "Harry Kane",
                                                       "age": "37",
                                                       "position": "Delantero",
                                                       "jerseyNumber": 4,
                                                       "height": 184,
                                                       "weight": 82.0,
                                                       "country": "Inglaterra",
                                                       "team": {
                                                           "id": 13,
                                                           "teamName": "Xbuyer Team",
                                                           "league": {
                                                               "id": 1,
                                                               "league_name": "KingsLeague"
                                                           }
                                                       }
                                                   }
                                             ]                                         
                                            """
                            )}
                    )}),
            @ApiResponse(responseCode = "400",
                    description = "No Player Creation Request",
                    content = @Content),
    })

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/")
    public ResponseEntity<GetPlayerDto> createNewPlayer(@Valid @RequestBody NewPlayerDto newPlayerDto) {

        Player created = playerService.save(newPlayerDto);

        URI createdURI = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(created.getId()).toUri();


        return ResponseEntity
                .created(createdURI)
                .body(GetPlayerDto.fromPlayer(created));

    }

    @Operation(summary = "Update a Player info")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",
                    description = "Player updated Successfully",
                    content = {@Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = League.class)),
                            examples = {@ExampleObject(
                                    value = """
                                            [
                                                 {
                                                       "id": 73,
                                                       "name": "Harry Kane",
                                                       "age": "37",
                                                       "position": "Delantero",
                                                       "jerseyNumber": 4,
                                                       "height": 184,
                                                       "weight": 82.0,
                                                       "country": "Inglaterra",
                                                       "team": {
                                                           "id": 13,
                                                           "teamName": "Xbuyer Team",
                                                           "league": {
                                                               "id": 1,
                                                               "league_name": "KingsLeague"
                                                           }
                                                       }
                                                   }                                                    
                                            ]                                          
                                            """
                            )}
                    )}),
            @ApiResponse(responseCode = "400",
                    description = "Bad Player of League update Request",
                    content = @Content),
    })
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public GetPlayerDto editPlayer(@PathVariable Long id, @Valid @RequestBody EditPlayerDto editPlayerDto){

        Player edited = playerService.editDetails(id, editPlayerDto);

        return GetPlayerDto.fromPlayer(edited);
    }

    @Operation(summary = "Delete Player")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204",
                    description = "Player removed Successfully",
                    content = {@Content(mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = Player.class)),
                            examples = {@ExampleObject(
                                    value = """
                                            {
                                                
                                            }                                        
                                            """
                            )}
                    )}),
    })
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){

        playerService.delete(id);

        return ResponseEntity.noContent().build();
    }
}
