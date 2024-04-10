'use client'
import { useState } from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';
import { PokedexNacional, PokedexResponse } from '../interfaces/pokedex';
import { RegionesComponent } from './RegionesComponent';

interface Props {
  pokedex: PokedexNacional;
}


export const PokemonGrid = ({ pokedex }: Props) => {
  const [region, setRegion] = useState(pokedex['kanto'])

  const onHandleClick = (region: string) => {
    setRegion(pokedex[region as keyof PokedexNacional])
  }

  return (
    <>
      <RegionesComponent onHandleClick={onHandleClick} pokedex={pokedex} />
      <div className="flex flex-wrap gap-10 items-center justify-center">

        {
          region.map(pokedex => (
            <PokemonCard key={pokedex.idNacional} pokemon={pokedex} />
          ))
        }

      </div>
    </>
  )
}
