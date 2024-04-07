import { PokemonResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";


const getPokemons = async(limit = 20):Promise<SimplePokemon[]> => {
  const data:PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then(res => res.json())
  
  const pokemon = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))
  return pokemon
}

export default async function PokédexPage() {
  const pokemons = await getPokemons(151)
  return (
    <div className="flex flex-col">
      
      <PokemonGrid pokemons={ pokemons } />

    </div>
  );
}