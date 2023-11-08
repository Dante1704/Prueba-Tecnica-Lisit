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
    <p className='text-3xl font-bold underline'>
      Hello world!
    </p>
  )
}
