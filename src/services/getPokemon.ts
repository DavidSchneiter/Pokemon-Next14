import { PokedexResponse, PokemonResponse, SimplePokemon } from "@/pokemons"
import { revalidationMonthly } from "./revalidation"
import { notFound } from "next/navigation";

export const getPokemon = async (id: string): Promise<PokemonResponse> => {
    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            next: {
                revalidate: revalidationMonthly
            }
        }).then(resp => resp.json());

        return pokemon;

    } catch (error) {
        notFound()
    }
}
export const getPokemons = async (region: string): Promise<SimplePokemon[]> => {
    const data: PokedexResponse = await fetch(`https://pokeapi.co/api/v2/pokedex/${region}`,
        { next: { revalidate: revalidationMonthly } }
    )
        .then(res => res.json())

    const pokemon = data.pokemon_entries.map(pokemon => ({
        idNacional: pokemon.pokemon_species.url.split('/').at(-2)!,
        name: pokemon.pokemon_species.name
    }))
    return pokemon
}
