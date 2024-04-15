import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { PokemonResponse } from '../interfaces/pokemon';

interface Props {
    nextPokemon: PokemonResponse;
}

export const NextPokemon = ({ nextPokemon }: Props) => {
    return (
        <Link href={`/pokedex/pokemon/${nextPokemon.name}`}
            className={`flex flex-col relative items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
        >
            <div className='flex items-center'>

                <Image
                    src={nextPokemon.sprites.other?.["official-artwork"].front_default ?? ''}
                    width={150}
                    height={150}
                    alt={`Imagen del pokemon ${nextPokemon.name}`}
                    className="mb-5"
                />
            </div>
                <h1 className='capitalize'># {nextPokemon.id}</h1>
        </Link>
    )

}
