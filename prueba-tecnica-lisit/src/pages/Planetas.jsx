import React, { useState, useEffect } from 'react'
import { getPlanetasPaginados } from '../API/resources'
import { PlanetaDetalle } from '../components/categoriasDetalle/PlanetaDetalle'
import { Paginado } from '../components/Paginado'
import { Loading } from '../components/Loading'

export const Planetas = () => {
    const [planetasPaginados, setPlanetasPaginados] = useState({
    })

    const [paginaActual, setPaginaActual] = useState(1)

    useEffect(() => {
        getPlanetasPaginados(paginaActual)
            .then(response => setPlanetasPaginados(response.data))
            .catch(err => console.log(err))
    }, [paginaActual])

    const cambiarPagina = (pagina) => {
        setPaginaActual(pagina)
    }

    return (
        <section className='flex flex-col justify-center items-center gap-10'>

            {planetasPaginados.results ?
                (<>
                    <div className='grid gap-10 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5'>
                        {
                            planetasPaginados.results.map((planeta) => {
                                return (
                                    <div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4 text-white" key={planeta.name}>
                                        <PlanetaDetalle planeta={planeta} />
                                    </div>
                                )
                            })}
                    </div >
                    <Paginado
                        paginaActual={paginaActual}
                        paginaAnterior={planetasPaginados.previous}
                        paginaSiguiente={planetasPaginados.next}
                        cambiarPagina={cambiarPagina}
                    />
                </>) :
                (<div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4 text-white">
                    <h2 className='text-center text-xl'>Cargando planetas ...</h2>
                    <Loading />
                </div>)
            }
        </section>
    )
}
