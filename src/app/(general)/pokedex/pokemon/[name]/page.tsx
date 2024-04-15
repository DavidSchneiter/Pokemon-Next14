import { PokedexResponse } from "@/pokemons";
import { MovesComponent } from "@/pokemons/components/MovesComponent";
import { NextPokemon } from "@/pokemons/components/NextPokemon";
import { getMovesDetails, getPokemon, revalidationMonthly } from "@/services";
import { getPokemons } from "@/services/getPokemon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
    params: { name: string, region: string }
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
    const nacional = await getPokemons('1')
    const getActualPokemon = await getPokemon(params.name)

    const movesDetails = await getMovesDetails(getActualPokemon)
    const getNextPokemon = await getPokemon((getActualPokemon.id == nacional.length) ? nacional.length.toString() : (getActualPokemon.id + 1).toString())
    const getPreviousPokemon = await getPokemon((getActualPokemon.id == 1) ? '1' : (getActualPokemon.id - 1).toString())

    return (
        <div className="flex flex-col m-5 items-center text-slate-800 md:flex-row">
            <div className="absolute left-12 top-24 w-4/12 md:static md:w-40 lg:w-60">
                {
                    getActualPokemon.id == 1 ?
                        <Link href={`/pokedex`}
                            className={`flex flex-col relative items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                        >
                            <Image
                                src={'/pokedex.png'}
                                width={150}
                                height={150}
                                alt={`Pokedex`}
                                className="mb-5"
                            />
                            <h1>Home</h1>
                        </Link>
                        :
                        <NextPokemon  nextPokemon={getPreviousPokemon} />
                }

            </div>
            <div className="absolute top-80 md:static rounded-[20px] w-11/12 mx-auto my-2 bg-white bg-clip-border shadow-lg p-3 md:w-1/2"
            >
                <div className="mt-2 mb-8 w-full">
                    <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
                        #{getActualPokemon.id} {getActualPokemon.name}
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={getActualPokemon.sprites.other?.["official-artwork"].front_default ?? ''}
                            width={150}
                            height={150}
                            alt={`Imagen del getActualPokemon ${getActualPokemon.name}`}
                            className="mb-5"
                        />
                        <div >
                            {
                                getActualPokemon.types.map(({ type }) =>

                                    <h2 key={type.url} className={`${(type.name)} capitalize type`} > {type.name}</h2>
                                )
                            }
                        </div>
                        <div className="border-solid flex flex-col w-full">

                            <h3 className="w-full h-8 text-white text-xl font-medium text-center rounded-xl bg-gradient-to-br from-orange-400 to-pink-500">Movements</h3>

                            <MovesComponent move={movesDetails} />
                        </div>

                    </div>
                </div>
                <div className="lg:grid-cols-2 grid grid-cols-1 gap-4 px-2 w-full ">

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                        <p className="text-sm text-gray-600">Abilitys</p>
                        <div className="text-base font-medium text-navy-700 flex">
                            {
                                getActualPokemon.abilities.map(ability => (
                                    <div key={ability.ability.name} className="pr-3">
                                        <p  className="mr-2 capitalize">{ability.ability.name}</p>
                                        <p >{ability.is_hidden ? 'No Hidden ' : 'Hidden'}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                        <p className="text-sm text-gray-600">Weight</p>
                        <span className="text-base font-medium text-navy-700 flex">
                            {
                                getActualPokemon.weight
                            }
                        </span>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                        <p className="text-sm text-gray-600">Regular Sprites</p>
                        <div className="flex justify-around">

                            <Image
                                src={getActualPokemon.sprites.front_default}
                                width={100}
                                height={100}
                                alt={`sprite ${getActualPokemon.name}`}
                            />
                            {
                                (!!(getActualPokemon.sprites.back_default)) ?
                                    <Image
                                        src={getActualPokemon.sprites.back_default}
                                        width={100}
                                        height={100}
                                        alt={`sprite ${getActualPokemon.name}`}
                                    />
                                    : <small>No tiene</small>
                            }
                        </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                        <p className="text-sm text-gray-600">Shiny Sprites</p>
                        <div className="flex justify-around">
                            {
                                (!!(getActualPokemon.sprites.front_shiny)) ?
                                    <Image
                                        src={getActualPokemon.sprites.front_shiny}
                                        width={100}
                                        height={100}
                                        alt={`sprite ${getActualPokemon.name}`}
                                    />
                                    : <small>No tiene</small>
                            }
                            {

                                (!!(getActualPokemon.sprites.back_shiny)) ?
                                    <Image
                                        src={getActualPokemon.sprites.back_shiny}
                                        width={100}
                                        height={100}
                                        alt={`sprite ${getActualPokemon.name}`}
                                    />
                                    : <small>No tiene</small>
                            }


                        </div>

                    </div>



                </div>
            </div>
            <div className={'absolute top-24 right-12 w-2/6 md:static md:w-40 lg:w-60'} >
                {
                    getActualPokemon.id == nacional.length ?
                        <Link href={`/pokedex`}
                        className={`flex flex-col relative items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                        >
                            <Image
                                src={'/pokedex.png'}
                                width={150}
                                height={150}
                                alt={`Pokedex`}
                                className="mb-5"
                            />
                            <h1>Home</h1>
                        </Link>
                        :
                        <NextPokemon nextPokemon={getNextPokemon} />
                }
            </div>
        </div>
    );
}