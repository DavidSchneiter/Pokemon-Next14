'use client'
import React, { useState } from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';
import { PokedexNacional } from '../interfaces/pokedex';

interface Props {
  pokedex: PokedexNacional;
}


export const PokemonGrid = ({ pokedex }: Props) => {
  const [region, setRegion] = useState(pokedex.kanto)

  const onHandleClick = (region: SimplePokemon[]) => {
    setRegion(region)
  }
  return (
    <>
      <div className='flex justify-around'>
        <button onClick={() => onHandleClick(pokedex.kanto)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Kanto
          </button>
        <button onClick={() => onHandleClick(pokedex.johto)} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Johto
          </button>
        <button onClick={() => onHandleClick(pokedex.hoenn)} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Hoenn
          </button>
        <button onClick={() => onHandleClick(pokedex.sinnoh)} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Sinnoh
          </button>
        <button onClick={() => onHandleClick(pokedex.tesselia)} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Tesselia
        </button>
        <button onClick={() => onHandleClick(pokedex.kalos.kalos_central)} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Kalos Central
          </button>
        {/* <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
          Yellow
          </button>
        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
       */}
      </div>
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
