import { PokedexNacional, PokedexResponse, SimplePokemon } from "@/pokemons"
import { revalidationMonthly } from "./revalidation"

export const getPokemons = async (region: string): Promise<SimplePokemon[]> => {
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

export const pokedexNacional = async ():Promise<PokedexNacional> => {

    return {
        kanto: await getPokemons('kanto'),
        johto: await getPokemons('updated-johto'),
        hoenn: await  getPokemons('updated-hoenn'),
        sinnoh: await getPokemons('extended-sinnoh'),
        tesselia: await getPokemons('updated-unova'),
        kalos: {
            kalos_central: await getPokemons('kalos-central'),
            kalos_coastal: await getPokemons('kalos-coastal'),
            kalos_mountain: await getPokemons('kalos-mountain'),
        },
        alola: {
            alola: await getPokemons('updated-alola'),
            melemele: await getPokemons('original-melemele'),
            akala: await getPokemons('original-akala'),
            ulaula: await getPokemons('original-ulaula'),
            poni: await getPokemons('original-poni'),
        }
    }
    
}