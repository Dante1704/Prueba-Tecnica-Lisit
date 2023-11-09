import React, { useEffect, useState } from 'react'
import { getAllResources } from '../API/resources'
import { InfoPreliminarPersonas } from '../components/infoPreliminar/InfoPreliminarPersonas'
import { InfoPreliminarPlanetas } from '../components/infoPreliminar/InfoPreliminarPlanetas'
import { InfoPreliminarNaves } from '../components/infoPreliminar/InfoPreliminarNaves'
import { Loading } from '../components/Loading'

export const Home = () => {

  const [allResources, setAllResources] = useState({
    personas: null,
    planetas: null,
    naves: null
  })

  useEffect(() => {
    getAllResources()
      .then(response => setAllResources({
        personas: response[0]?.data.results,
        planetas: response[1]?.data.results,
        naves: response[2]?.data.results,
      }))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='grid grid-flow-col overflow-x-auto gap-5 pb-4 lg:pb-0'>
      <section className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4 text-white">
        <h2 className='text-center text-xl'>PERSONAS</h2>
        {allResources.personas ? (
          <InfoPreliminarPersonas personas={allResources.personas.slice(0, 3)} />
        ) :
          <Loading />
        }
      </section>
      <section className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4">
        <h2 className='text-center text-xl'>PLANETAS</h2>
        {allResources.planetas ? (
          <InfoPreliminarPlanetas planetas={allResources.planetas.slice(0, 3)} />
        ) :
          <Loading />
        }
      </section>
      <section className="w-[280px] h-[568px] bg-base-100 opacity-90 p-4">
        <h2 className='text-center text-xl'>NAVES</h2>
        {allResources.naves ? (
          <InfoPreliminarNaves naves={allResources.naves.slice(0, 3)} />
        ) :
          <Loading />
        }
      </section>
    </div >
  )
}
