import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { Layout } from './components/layout'
import { Home } from './pages/Home'
import { Personas } from './pages/Personas'
import { Planetas } from './pages/Planetas'
import { Naves } from './pages/Naves'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/personas' element={<Personas />} />
        <Route path='/planetas' element={<Planetas />} />
        <Route path='/naves' element={<Naves />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
