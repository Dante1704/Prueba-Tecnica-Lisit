import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Loading } from '../Loading'


export const PersonaDetalle = ({ persona }) => {

    const [mundoNatal, setMundoNatal] = useState(null)

    const [films, setFilms] = useState(null)

    useEffect(() => {
        if (persona.homeworld) {
            axios.get(persona.homeworld)
                .then(response => setMundoNatal(response.data.name))
                .catch(err => console.log(err))
        }
    }, [])

    useEffect(() => {
        const getPersonaFilms = (films) => {
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
        if (persona.films) {
            getPersonaFilms(persona.films)
        }
    }, [])

    return (
        <>
            <h2 className=' text-xl font-bold uppercase'>{persona.name}</h2>
            <div className='flex flex-col my-10'>
                <span>Altura: {persona.height}</span>
                <span>Peso: {persona.mass}</span>
                <span>Color de pelo: {persona.hair_color}</span>
                <span>Color de piel: {persona.skin_color}</span>
                <span>Color de ojos: {persona.eye_color}</span>
                <span>Año de nacimiento: {persona.birth_year}</span>
                <span>Género: {persona.gender}</span>
                {mundoNatal ?
                    <span>Mundo Natal: {mundoNatal}</span> :
                    <Loading />
                }
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
