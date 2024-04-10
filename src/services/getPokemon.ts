import { PokedexNacional, PokedexResponse, PokemonResponse, SimplePokemon } from "@/pokemons"
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

export const getPokemonsByRegion = async (region: string): Promise<SimplePokemon[]> => {
    const data: PokedexResponse = await fetch(`https://pokeapi.co/api/v2/pokedex/${region}`,
        { next: { revalidate: revalidationMonthly } }
    )
        .then(res => res.json())

    const pokemon = data.pokemon_entries.map(pokemon => ({
        idRegional: pokemon.entry_number.toString(),
        idNacional: pokemon.pokemon_species.url.split('/').at(-2)!,
        name: pokemon.pokemon_species.name
    }))
    return pokemon
}

export const pokedexNacional = async (): Promise<PokedexNacional> => {

    return {
        kanto: await getPokemonsByRegion('kanto'),
        johto: await getPokemonsByRegion('updated-johto'),
        hoenn: await getPokemonsByRegion('updated-hoenn'),
        sinnoh: await getPokemonsByRegion('extended-sinnoh'),
        tesselia: await getPokemonsByRegion('updated-unova'),
        kalos_central: await getPokemonsByRegion('kalos-central'),
        kalos_coastal: await getPokemonsByRegion('kalos-coastal'),
        kalos_mountain: await getPokemonsByRegion('kalos-mountain'),
        alola: await getPokemonsByRegion('updated-alola')

    }

}