import React, { useState, useContext } from 'react'
import { useResolvedPath } from 'react-router-dom'
import { getElementoPorNombre } from '../../API/resources'
import { cambiarIdiomaCategoria } from '../../helpers/cambiarIdiomaCategoria'
import { ElementosPorNombreContext } from '../../context/elementosPorNombre'



export const Search = () => {
    const { setResultadoElementosPorNombre } = useContext(ElementosPorNombreContext)
    const { pathname } = useResolvedPath()
    const categoria = pathname.split("/")[1]
    const [elementoABuscar, setElementoABuscar] = useState("")

    const guardarElementoABuscar = (evt) => {
        setElementoABuscar(evt.target.value)
    }

    const buscarElemento = (evt) => {
        evt.preventDefault()

        const categoriaEnIngles = cambiarIdiomaCategoria(categoria)
        getElementoPorNombre(categoriaEnIngles, elementoABuscar)
            .then(response => setResultadoElementosPorNombre(response.data))
            .catch(err => console.log(err))
    }

    const limpiarElementosPorNombre = () => {
        setResultadoElementosPorNombre(null)
        setElementoABuscar("")
    }

    return (
        <form
            className={`form-control flex-row ${pathname === '/' && 'hidden'} `}
            onSubmit={buscarElemento}
        >
            <input
                type="text"
                name='search'
                value={elementoABuscar}
                placeholder={`Buscar ${categoria}...`}
                className="input input-bordered w-24 md:w-auto"
                onChange={guardarElementoABuscar}
                onClick={limpiarElementosPorNombre}
                required
            />
            <button className="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </form>
    )
}
