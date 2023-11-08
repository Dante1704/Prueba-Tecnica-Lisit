import React from 'react'
import { Link } from 'react-router-dom'

export const InfoPreliminarPlanetas = ({ planetas }) => {

    return (
        <>
            {planetas.map((planeta) => {
                return (
                    <div className='my-10' key={planeta.name}>
                        <p>Nombre: {planeta.name}</p>
                        <p>Clima: {planeta.climate}</p>
                        <p>Gravedad: {planeta.gravity}</p>
                    </div>
                )
            })}
            <p className='my-10'>...</p>

            <p className='text-center'>
                <Link to="/planetas" className='btn btn-ghost'>Ver más planetas</Link>
            </p>
        </>
    )
}
