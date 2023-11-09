import React from 'react'

export const Paginado = ({ paginaActual, paginaAnterior, paginaSiguiente, cambiarPagina }) => {


    /* const [paginado, setPaginado] = useState({
       min: 1,
       max: Math.ceil(personasPaginadas.count/10),
       startPage: 1 //redonde a 9 pag
   }) */




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
        console.log(paginaActual);
    }


    console.log("paginaAnterior: ", paginaAnterior);
    console.log("paginaSiguiente: ", paginaSiguiente);

    return (
        <div className="join">
            <button className="join-item btn" onClick={irAlAnterior}>«</button>
            <button className="join-item btn">{paginaActual}</button>
            <button className="join-item btn" onClick={irAlSiguiente}>»</button>
        </div>
    )
}
