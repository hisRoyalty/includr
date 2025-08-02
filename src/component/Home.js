import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ContactUs from './ContactUs'
import Staff from './Staff'
import About from './About'


// Home component with every component (most)



function Home() {
  return (
    <div className='bg-blue-200'>
    <Header></Header>
    <About></About>
    <Staff></Staff>
    <Footer></Footer>
    </div>
    
    
  )
}

export default Home