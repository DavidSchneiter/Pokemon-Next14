import Image from 'next/image'
import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Link from 'next/link';

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { name, idRegional, idNacional } = pokemon
    return (
        <div className="relative flex flex-col justify-center from-rose-100 to-teal-100 rounded">
            <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                <Link key={pokemon.idNacional} href={`/pokedex/${idNacional}`}>
                    <div className='flex justify-center'>
                        <Image
                            key={name}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idNacional}.png`}
                            width={150}
                            height={150}
                            alt={name}
                            priority={false}
                        />
                    </div>
                </Link>
                <div className="p-4 flex justify-around">
                    <small className="text-blue-400 text-xs">Regional # - {idRegional}</small>
                    <small className="text-blue-400 text-xs">Nacional # - {idNacional}</small>
                </div>
                <div className="p-4 self-center">

                    <h1 className="text-2xl font-medium text-slate-600 pb-2 capitalize">{name}</h1>
                </div>
            </div>
        </div>
    )
}
