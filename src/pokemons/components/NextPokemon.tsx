import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { PokemonResponse } from '../interfaces/pokemon';

interface Props {
    nextPokemon: PokemonResponse;
    position:string
}

export const NextPokemon = ({ nextPokemon, position }: Props) => {
    return (
        <Link href={`/pokedex/pokemon/${nextPokemon.name}`}
            className={` relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
        >
            {position == 'previous' ?
                <div>
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                    </svg>
                </div> : <></>}
            <Image
                src={nextPokemon.sprites.other?.["official-artwork"].front_default ?? ''}
                width={150}
                height={150}
                alt={`Imagen del pokemon ${nextPokemon.name}`}
                className="mb-5"
            />
            {position == 'next' ?
                <div>
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </div> : <></>}
                <div>
                    <h1 className='capitalize'># {nextPokemon.id}</h1>
                </div>
        </Link>
    )

}
