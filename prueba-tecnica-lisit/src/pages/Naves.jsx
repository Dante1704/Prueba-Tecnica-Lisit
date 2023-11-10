import React, { useState, useEffect, useContext } from 'react'
import { getNavesPaginadas } from '../API/resources'
import { Loading } from '../components/Loading'
import { Paginado } from '../components/Paginado'
import { NaveDetalle } from '../components/categoriasDetalle/NaveDetalle'
import { ElementosPorNombreContext } from '../context/elementosPorNombre'



export const Naves = () => {

    const [navesPaginadas, setNavesPaginadas] = useState({
    })

    const { elementosPorNombre } = useContext(ElementosPorNombreContext)

    const navesARenderizar = elementosPorNombre ?? navesPaginadas

    const [paginaActual, setPaginaActual] = useState(1)

    useEffect(() => {
        getNavesPaginadas(paginaActual)
            .then(response => setNavesPaginadas(response.data))
            .catch(err => console.log(err))
    }, [paginaActual])

    const cambiarPagina = (pagina) => {
        setPaginaActual(pagina)
    }

    return (
        <section className='flex flex-col justify-center items-center gap-10'>

            {navesARenderizar.results ?
                (<>
                    <div className='grid gap-10 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5'>
                        {
                            navesARenderizar.results.map((nave) => {
                                return (
                                    <div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4 text-white" key={nave.name}>
                                        <NaveDetalle nave={nave} />
                                    </div>
                                )
                            })}
                    </div >
                    <Paginado
                        paginaActual={paginaActual}
                        paginaAnterior={navesARenderizar.previous}
                        paginaSiguiente={navesARenderizar.next}
                        cambiarPagina={cambiarPagina}
                    />
                </>) :
                (<div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4 text-white">
                    <h2 className='text-center text-xl'>Cargando Naves ...</h2>
                    <Loading />
                </div>)
            }
        </section>
    )
}
