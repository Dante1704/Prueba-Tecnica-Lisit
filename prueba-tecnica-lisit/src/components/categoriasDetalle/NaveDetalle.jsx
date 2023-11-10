import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Loading } from '../Loading'


export const NaveDetalle = ({ nave }) => {


    const [films, setFilms] = useState(null)

    useEffect(() => {
        const getNaveFilms = (films) => {
            const filmPromise = []
            films.forEach((film) => {
                filmPromise.push(axios.get(film))
            })
            Promise.all(filmPromise)
                .then(responses => {
                    const filmNames = []
                    responses.forEach((response) => {
                        filmNames.push(response.data.title);
                    })
                    setFilms(filmNames)
                })
                .catch(err => console.log(err))
        }
        if (nave.films) {
            getNaveFilms(nave.films)
        }
    }, [])

    return (
        <>
            <h2 className=' text-xl font-bold uppercase'>{nave.name}</h2>
            <div className='flex flex-col my-10'>
                <span>Modelo: {nave.model}</span>
                <span>Costo: {nave.cost_in_credits}</span>
                <span>Largo de la nave: {nave.length}</span>
                <span>Máxima velocidad de atmósfera: {nave.max_atmosphering_speed}</span>
                <span>Tripulación: {nave.crew}</span>
                <span>Pasajeros: {nave.passengers}</span>
                <span>Capacidad de carga: {nave.cargo_capacity}</span>
                <span>Indice de hipervelocidad: {nave.hyperdrive_rating}</span>
                <h3 className='text-lh my-6 font-semibold'>FILMS</h3>
                {
                    films ?
                        (films.map((film) => {
                            return (
                                <span key={film}>{film}</span>
                            )
                        })) :
                        <Loading />
                }

            </div>
        </>
    )

}
