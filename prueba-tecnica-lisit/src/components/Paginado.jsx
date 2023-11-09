import React from 'react'

export const Paginado = ({ paginaActual, paginaAnterior, paginaSiguiente, cambiarPagina }) => {

    const irAlAnterior = () => {
        if (paginaAnterior) {
            const nuevaPagina = paginaActual - 1
            cambiarPagina(nuevaPagina)
        }
    }

    const irAlSiguiente = () => {
        if (paginaSiguiente) {

            const nuevaPagina = paginaActual + 1
            cambiarPagina(nuevaPagina)
        }
    }

    return (
        <div className="join">
            <button className="join-item btn" onClick={irAlAnterior}>«</button>
            <button className="join-item btn">{paginaActual}</button>
            <button className="join-item btn" onClick={irAlSiguiente}>»</button>
        </div>
    )
}
