import React from 'react'
// import Banner from './pages/banner/Banner'
import Footer from './pages/footer/Footer'
import Manubar from './pages/home/manubar/Manubar'
import PageRoutes from './routes/PageRoutes'

const AppTerritory = () => {
  return (
    <>
        <Manubar/>
        <PageRoutes/>
        <Footer/>
    </>
  )
}

export default AppTerritory