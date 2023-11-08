import React, { useEffect, useState } from 'react'
import getResources from '../API/resources'
import { InfoPreliminarPersonas } from '../components/infoPreliminar/InfoPreliminarPersonas'
import { InfoPreliminarPlanetas } from '../components/infoPreliminar/InfoPreliminarPlanetas'
import { InfoPreliminarNaves } from '../components/infoPreliminar/InfoPreliminarNaves'
import '../index.css'

export const Home = () => {

  const [resources, setResources] = useState({
    personas: null,
    planetas: null,
    naves: null
  })

  useEffect(() => {
    getResources()
      .then(response => setResources({
        personas: response[0]?.data.results,
        planetas: response[1]?.data.results,
        naves: response[2]?.data.results,
      }))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='grid grid-flow-col overflow-x-auto gap-5 pb-4 lg:pb-0'>
      <div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4 text-white">
        <h2 className='text-center text-xl'>PERSONAS</h2>
        {resources.personas && (

          <InfoPreliminarPersonas personas={resources.personas.slice(0, 3)} />

        )}
      </div>
      <div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4">
        <h2 className='text-center text-xl'>PLANETAS</h2>
        {resources.planetas && (

          <InfoPreliminarPlanetas planetas={resources.planetas.slice(0, 3)} />

        )}
      </div>
      <div className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4">
        <h2 className='text-center text-xl'>NAVES</h2>
        {resources.naves && (

          <InfoPreliminarNaves naves={resources.naves.slice(0, 3)} />

        )}
      </div>
    </div >
  )
}
