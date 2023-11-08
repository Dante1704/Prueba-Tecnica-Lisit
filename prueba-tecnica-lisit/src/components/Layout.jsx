import React from 'react'
import { Outlet } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <header>
        <div className='navbar bg-base-300'>
          <div className='flex-1'>
            <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
          </div>
          <div className='flex-none gap-2'>
            <div className='form-control'>
              <input type='text' placeholder='Search' className='input input-bordered w-24 md:w-auto' />
            </div>
          </div>
        </div>
      </header>
      <main className='grow'>
        {children}
        <Outlet />
      </main>
      <footer className='footer footer-center p-4 bg-base-300 text-base-content'>
        <aside>
          <p>Copyright © 2023 - All right reserved by LISIT</p>
        </aside>
      </footer>
    </div>
  )
}
