import React, { useEffect, useState } from 'react'
import getResources from '../API/resources'

export const Home = () => {

  const [resources, setResources] = useState({
    personas: null,
    planetas: null,
    naves: null
  })

  useEffect(() => {
    getResources()
      .then(response => setResources({
        personas: response[0].data.results,
        planetas: response[1].data.results,
        naves: response[2].data.results,
      }))
  }, [])

  return (
    <div className='grid grid-flow-col overflow-x-auto gap-5 pb-4 lg:pb-0  '>
      <div className="w-[320px] h-[568px] bg-red-500">320×568</div>
      <div className="w-[320px] h-[568px] bg-red-500">320×568</div>
      <div className="w-[320px] h-[568px] bg-red-500">320×568</div>
    </div >
  )
}
