import { MovesResponse, PokemonResponse } from "@/pokemons";



export async function getMovesDetails(pokemon:PokemonResponse):Promise<MovesResponse[]> {
    const movesPromises = pokemon.moves.map(async move => {
        return  await fetch(move.move.url).then(resp => resp.json())
        ;
    });

  return  Promise.all(movesPromises)
    .then(moves => {
        return moves; 
    })
}