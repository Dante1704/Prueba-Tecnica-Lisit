import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Personas } from './components/Personas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/personas' element={<Personas />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
