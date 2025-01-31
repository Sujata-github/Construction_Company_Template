import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='h-full w-full'>
      <Header />
      <div className='h-full w-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
