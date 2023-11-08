import React from 'react'
import { Link } from 'react-router-dom'

export const InfoPreliminarPersonas = ({ personas }) => {

    return (
        <>
            {personas.map((person) => {
                return (
                    <div className='my-10' key={person.name}>
                        <p>Nombre: {person.name}</p>
                        <p>Género: {person.gender}</p>
                        <p>Año de nacimiento: {person.birth_year}</p>
                    </div>
                )
            })}
            <p className='my-10'>...</p>

            <p className='text-center'>
                <Link to="/personas" className='btn btn-ghost'>Ver más personas</Link>
            </p>
        </>
    )
}
