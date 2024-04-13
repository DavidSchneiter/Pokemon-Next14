import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';
import { PokedexNacional, PokedexResponse } from '../interfaces/pokedex';
import { RegionesComponent } from './RegionesComponent';

interface Props {
  pokedex: SimplePokemon[];
}


export const PokemonGrid = ({ pokedex }: Props) => {

  

  return (
      <div className="flex flex-wrap gap-10 items-center justify-center">

        {
          pokedex.map(pokedex => (
            <PokemonCard key={pokedex.idNacional} pokemon={pokedex} />
          ))
        }

      </div>
  )
}
