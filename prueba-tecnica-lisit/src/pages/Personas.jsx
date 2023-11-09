import React, { useState, useEffect, useRef } from 'react'
import { getPersonasPaginadas } from '../API/resources'
import { Loading } from '../components/Loading'
import { PersonaDetalle } from '../components/PersonaDetalle'


export const Personas = () => {

    const [personasPaginadas, setPersonasPaginadas] = useState({
    })

    const paginaActual = useRef(1)

    useEffect(() => {
        getPersonasPaginadas(paginaActual.current)
            .then(response => setPersonasPaginadas(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <section className='grid grid-flow-col overflow-x-auto gap-5 pb-4'>
            {personasPaginadas.results ?
                personasPaginadas.results.map((persona) => {
                    return (
                        (<div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4 text-white" key={persona.name}>
                            <PersonaDetalle persona={persona} />
                        </div>)
                    )
                }) :
                (<div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4 text-white">
                    <h2 className='text-center text-xl'>Cargando personas ...</h2>
                    <Loading />
                </div>
                )
            }
        </section >
    )
}
