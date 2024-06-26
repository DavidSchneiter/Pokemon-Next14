// Generated by https://quicktype.io

import { SimplePokemon } from "./simple-pokemon";
// Generated by https://quicktype.io

export interface RegionsResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}
// Generated by https://quicktype.io

export interface RegionResponse {
    id:              number;
    locations:       MainGeneration[];
    main_generation: MainGeneration;
    name:            string;
    names:           Name[];
    pokedexes:       MainGeneration[];
    version_groups:  MainGeneration[];
}

export interface MainGeneration {
    name: string;
    url:  string;
}

export interface Name {
    language: MainGeneration;
    name:     string;
}




export interface PokedexResponse {
    descriptions: Description[];
    id: number;
    is_main_series: boolean;
    name: string;
    names: Name[];
    pokemon_entries: PokemonEntry[];
    region: null;
    version_groups: any[];
}

export interface Description {
    description: string;
    language: Language;
}

export interface Language {
    name: string;
    url: string;
}

export interface Name {
    language: Language;
    name: string;
}

export interface PokemonEntry {
    entry_number: number;
    pokemon_species: Language;
}

export interface PokedexNacional {
    kanto: SimplePokemon[];
    johto: SimplePokemon[];
    hoenn: SimplePokemon[];
    sinnoh: SimplePokemon[];
    tesselia: SimplePokemon[];
    kalos_central: SimplePokemon[];
    kalos_coastal: SimplePokemon[];
    kalos_mountain: SimplePokemon[];
    alola: SimplePokemon[];
}
