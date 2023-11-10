import React, { useState, useEffect, useContext } from 'react'
import { getPersonasPaginadas } from '../API/resources'
import { Loading } from '../components/Loading'
import { PersonaDetalle } from '../components/categoriasDetalle/PersonaDetalle'
import { Paginado } from '../components/Paginado'
import { ElementosPorNombreContext } from '../context/elementosPorNombre'



export const Personas = () => {

    const [personasPaginadas, setPersonasPaginadas] = useState({
    })
    const { elementosPorNombre } = useContext(ElementosPorNombreContext)

    const personasARenderizar = elementosPorNombre ?? personasPaginadas

    const [paginaActual, setPaginaActual] = useState(1)

    useEffect(() => {
        getPersonasPaginadas(paginaActual)
            .then(response => setPersonasPaginadas(response.data))
            .catch(err => console.log(err))
    }, [paginaActual])

    const cambiarPagina = (pagina) => {
        setPaginaActual(pagina)
    }

    return (
        <section className='flex flex-col justify-center items-center gap-10'>

            {personasARenderizar.results ?
                (<>
                    <div className='grid gap-10 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5'>
                        {
                            personasARenderizar.results.map((persona) => {
                                return (
                                    <div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4 text-white" key={persona.name}>
                                        <PersonaDetalle persona={persona} />
                                    </div>
                                )
                            })}
                    </div >
                    <Paginado
                        paginaActual={paginaActual}
                        paginaAnterior={personasARenderizar.previous}
                        paginaSiguiente={personasARenderizar.next}
                        cambiarPagina={cambiarPagina}
                    />
                </>) :
                (<div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4 text-white">
                    <h2 className='text-center text-xl'>Cargando personas ...</h2>
                    <Loading />
                </div>)
            }
        </section>
    )
}
