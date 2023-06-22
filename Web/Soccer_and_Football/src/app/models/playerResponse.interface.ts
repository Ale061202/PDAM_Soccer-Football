import { Team } from "./teamResponse.interface";

export interface PlayerResponse {
    content:          Player[];
    pageable:         Pageable;
    last:             boolean;
    totalElements:    number;
    totalPages:       number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Player {
    id:           number;
    name:         string;
    age:          number;
    position:     string;
    jerseyNumber: number;
    height:       number;
    weight:       number;
    country:      string;
    team:         Team;
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}