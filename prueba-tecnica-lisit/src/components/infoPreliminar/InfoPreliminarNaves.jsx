import React from 'react'
import { Link } from 'react-router-dom'

export const InfoPreliminarNaves = ({ naves }) => {

    return (
        <>
            {naves.map((naves) => {
                return (
                    <div className='my-10' key={naves.name}>
                        <p>Nombre: {naves.name.split(" ")[0]}</p>
                        <p>Costo: {naves.cost_in_credits}</p>
                        <p>Tripulación: {naves.crew}</p>
                    </div>
                )
            })}
            <p className='my-10'>...</p>

            <p className='text-center'>
                <Link to="/naves" className='btn btn-ghost'>Ver más naves</Link>
            </p>
        </>
    )
}
