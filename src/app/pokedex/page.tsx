import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { pokedexNacional } from "@/services";



export default async function KantoPage() {

  const pokedex = await pokedexNacional()
  
  return (
    <div className="flex flex-col mt-10">
      
      <PokemonGrid pokedex={ pokedex } />

    </div>
  );
}