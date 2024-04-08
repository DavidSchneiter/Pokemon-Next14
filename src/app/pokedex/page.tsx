import { PokedexResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { revalidationMonthly } from "@/services";


const getPokemons = async():Promise<SimplePokemon[]> => {
  const data:PokedexResponse = await fetch('https://pokeapi.co/api/v2/pokedex/1',
  { next: { revalidate: revalidationMonthly } }
  )
    .then(res => res.json())
  
  const pokemon = data.pokemon_entries.map( pokemon => ({
    id: pokemon.entry_number.toString(),
    name: pokemon.pokemon_species.name
  }))
  return pokemon
}

export default async function PokédexPage() {
  const pokemons = await getPokemons()
  return (
    <div className="flex flex-col mt-10">
      
      <PokemonGrid pokemons={ pokemons } />

    </div>
  );
}