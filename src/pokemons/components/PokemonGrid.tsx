import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';

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
