import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main style={{}} className='flex flex-row justify-center items-center grow image'>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
