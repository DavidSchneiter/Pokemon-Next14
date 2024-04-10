'use client'
import Link from 'next/link'
import React, { useState } from 'react'

interface Props {
    id: number
}

export const NextPokemon = ({ id }: Props) => {
    const [disable, setDisable] = useState(false)
    id == 1 ? setDisable(!disable) : ''
    return (
        <>
            <Link href={`/pokemon/${id - 1}`}
                className={`${disable ? 'disabled' : ''} relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                aria-disabled={disable}
                tabIndex={disable ? -1 : undefined}
            >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
            </Link>
        </>
    )
}
