import React, { ReactEventHandler, SyntheticEvent } from 'react'
import { PokedexNacional } from '../interfaces/pokedex'

interface Props {
    pokedex: PokedexNacional
    // I DONT KNOW THIS FUNCTION TYPE
    onHandleClick: any
    
}

export const RegionesComponent = ({onHandleClick, pokedex}:Props) => {
    return (
        <>
            <div className='lg:hidden md:flex p-10'>
                <select onChange={(e) => onHandleClick(e.target.value)} defaultValue={'DEFAULT'} id="states" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value={'DEFAULT'}>Elije una Region</option>
                    {
                        Object.keys(pokedex).map(region => (

                            <option className='capitalize' key={region} value={region}>{region.replace("_", " ")}</option>
                        ))
                    }
                </select>
            </div>

            <div className='lg:flex justify-around pb-10 px-10 md hidden'>
                {
                    Object.keys(pokedex).map(value => (

                        <button key={value} onClick={() => onHandleClick(value)} type="button" className="capitalize text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {value.replace("_", " ")}
                        </button>
                    ))
                }

            </div>
        </>
    )
}
