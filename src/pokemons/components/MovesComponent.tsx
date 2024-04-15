'use client'
import React, { useState } from 'react'
import { MovesResponse } from '../interfaces/moves';

interface Props {
    move: MovesResponse[]
}

export const MovesComponent = ({ move }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => {
        setExpanded(!expanded)
    }
    return (
        <>
            <div className={`grid  grid-cols-2  max-h-60 overflow-hidden ${expanded ? 'expanded' : ''} gap-2 py-3  lg:grid-cols-3  xl:grid-cols-4`}>
                {
                    move.map((move) => (
                        <div key={move.name == 'pyschic' ? 'pyschicMove': move.name} style={{ 'margin': '0px' }} className={`text-white bg-gradient-to-r font-medium rounded-lg text-sm  py-2.5 text-center mb-2 ${move.type.name} `}>
                            <p className="mr-2 capitalize">{move.name}</p>
                            <p  className="mr-2 capitalize">{move.type.name}</p>
                        </div>

                    ))
                }
            </div>
            <div className='w-full text-center focus:outline-none rounded-b-xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-slate-600 dark:text-gray-400 dark:border-slate-500 dark:hover:text-white dark:hover:bg-gray-700'>
                <button className='w-full' onClick={toggleExpand}>{expanded ? 'Less' : 'More'}</button>
            </div>
        </>
    )
}
