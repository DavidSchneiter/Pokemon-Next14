import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { getPokemons } from "@/services/getPokemon";
import { Search } from '../../../pokemons/components/Search';



export default async function PokedexPage() {

  const pokedex = await getPokemons('2')

  return (
    <div className="flex flex-col my-10">
      
      <Search />

      <PokemonGrid pokedex={pokedex} />

    </div>
  );
}