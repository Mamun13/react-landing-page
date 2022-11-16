import React from 'react'
import ContactFormPage from '../../components/AppModules/contactForm/ContactFormPage'
import Catalogue from '../catalogue/Catalogue'
import Banner from './banner/Banner'
import CompanyProduct from './companyProduct/CompanyProduct'

const Home = () => {
  return (
    <>
        <Banner/>
        <CompanyProduct/>
        <Catalogue/>
        <ContactFormPage/>
    </>
  )
}

export default Home