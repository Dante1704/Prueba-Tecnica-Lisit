import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Loading } from '../Loading'


export const PlanetaDetalle = ({ planeta }) => {

    const [residentes, setResidentes] = useState(null)

    useEffect(() => {
        const getplanetaResidentes = (residentes) => {
            const residentesPromise = []
            residentes.forEach((residente) => {
                residentesPromise.push(axios.get(residente))
            })
            Promise.all(residentesPromise)
                .then(responses => {
                    const residentesNames = []
                    responses.forEach((response) => {
                        residentesNames.push(response.data.name);
                    })
                    setResidentes(residentesNames)
                })
                .catch(err => console.log(err))
        }
        if (planeta.residents) {
            getplanetaResidentes(planeta.residents)
        }
    }, [])



    return (
        <>
            <h2 className=' text-xl font-bold uppercase'>{planeta.name}</h2>
            <div className='flex flex-col my-5'>
                <span>Periodo de rotación: {planeta.rotation_period}</span>
                <span>Periodo de órbita: {planeta.orbital_period}</span>
                <span>Diámetro: {planeta.diameter}</span>
                <span>Clima: {planeta.climate}</span>
                <span>Gravedad: {planeta.gravity}</span>
                <span>Población: {planeta.population}</span>
                <h3 className='text-md my-3 font-semibold'>RESIDENTES</h3>
                {
                    !residentes ?
                        <Loading /> :
                        residentes.length > 0 ?
                            (residentes.map((residente) => {
                                return (
                                    <span key={residente}>
                                        <Link to={"/personas"} className='btn btn-active btn-ghost btn-xs'>
                                            {residente}
                                        </Link>
                                    </span>
                                )
                            })) :
                            (<span>No hay residentes para mostrar</span>)
                }
            </div >
        </>
    )

}
