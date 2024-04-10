import { PokedexResponse, PokemonResponse } from "@/pokemons";
import { getPokemon, revalidationMonthly } from "@/services";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
    params: { name: string }
}
export async function generateStaticParams() {

    const data: PokedexResponse = await fetch('https://pokeapi.co/api/v2/pokedex/1',
        { next: { revalidate: revalidationMonthly } }
    )
        .then(res => res.json())
    return data.pokemon_entries.map(name => ({
        name: name.pokemon_species.name
    }));

}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    try {
        const { id, name } = await getPokemon(params.name);

        return {
            title: `#${id} - ${name.replace(/^\w/, (c) => c.toUpperCase())}`,
            description: `Página del pokémon ${name}`
        }

    } catch (error) {
        return {
            title: 'Pokemon no encontrado',
            description: 'Pokemon no existente'
        }
    }
}




export default async function PokemonPage({ params }: Props) {

    const pokemon = await getPokemon(params.name)
    return (
        <div className="flex mt-5 items-center text-slate-800">
            <div>
                <Link href={`/pokedex/pokemon/${pokemon.id - 1}`}
                    style={{
                        pointerEvents: (pokemon.id == 1) ? "none" : "auto",
                    }}
                    className={` relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
                <div className="mt-2 mb-8 w-full">
                    <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
                        #{pokemon.id} {pokemon.name}
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={pokemon.sprites.other?.["official-artwork"].front_default ?? ''}
                            width={150}
                            height={150}
                            alt={`Imagen del pokemon ${pokemon.name}`}
                            className="mb-5"
                        />


                        <div className="flex flex-wrap">
                            {
                                pokemon.moves.map(move => (
                                    <p key={move.move.name} className="mr-2 capitalize">{move.move.name}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 px-2 w-full">

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                        <p className="text-sm text-gray-600">Types</p>
                        <div className="text-base font-medium text-navy-700 flex">
                            {
                                pokemon.types.map(type => (
                                    <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                        <p className="text-sm text-gray-600">Peso</p>
                        <span className="text-base font-medium text-navy-700 flex">
                            {
                                pokemon.weight
                            }
                        </span>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                        <p className="text-sm text-gray-600">Regular Sprites</p>
                        <div className="flex justify-around">

                            <Image
                                src={pokemon.sprites.front_default}
                                width={100}
                                height={100}
                                alt={`sprite ${pokemon.name}`}
                            />
                            {
                                (!!(pokemon.sprites.back_default)) ?
                                    <Image
                                        src={pokemon.sprites.back_default}
                                        width={100}
                                        height={100}
                                        alt={`sprite ${pokemon.name}`}
                                    />
                                    : <small>No tiene</small>
                            }
                        </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                        <p className="text-sm text-gray-600">Shiny Sprites</p>
                        <div className="flex justify-around">
                            {
                                (!!(pokemon.sprites.front_shiny)) ?
                                    <Image
                                        src={pokemon.sprites.front_shiny}
                                        width={100}
                                        height={100}
                                        alt={`sprite ${pokemon.name}`}
                                    />
                                    : <small>No tiene</small>
                            }
                            {

                                (!!(pokemon.sprites.back_shiny)) ?
                                    <Image
                                        src={pokemon.sprites.back_shiny}
                                        width={100}
                                        height={100}
                                        alt={`sprite ${pokemon.name}`}
                                    />
                                    : <small>No tiene</small>
                            }


                        </div>

                    </div>



                </div>
            </div>
            <div>
                <Link href={`/pokedex/pokemon/${pokemon.id + 1}`}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}