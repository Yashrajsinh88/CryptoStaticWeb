import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import OM from './components/OM.jsx'
import HIW from './components/HIW/HIW.JSX'
import ContactUs from './components/ContactUs.jsx'
import Faq from './components/Faq.jsx'
import Footer from './Footer.jsx'
import"./components/App.css"

const App = () => {
  return (
    <div className="app-container">
     <Navbar/>
     <Banner/>
     <HIW/>
     <OM/>
     <ContactUs/>
     <Faq/>
     <Footer/>
    </div>
  )
}

export default App
