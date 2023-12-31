import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export const Layout = ({children}) => {
  return (
    <div className="max-w-screen-xl	w-full mx-auto">
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </div>
  )
}
