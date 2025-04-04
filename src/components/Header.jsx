import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='main-color'>
      <div className="main relative p-4">
        <div className="circle absolute top-0 left-0"></div>
        <div className="circle-2 absolute top-0 right-0"></div>
        <div className="header flex flex-col md:flex-row justify-between items-center">
          <div className="logo flex justify-between w-full md:w-auto">
            <h1 className='text-xl md:text-2xl font-bold'>Medi<span className='text-primary'>Care+</span></h1>
            <button 
              className="md:hidden text-xl focus:outline-none" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
          <div className={`head-text flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-4 md:mt-0 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
            <div className="header-text">
              <ul className='flex flex-col md:flex-row justify-center gap-4 md:gap-8 font-bold'>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/services">Services</Link> </li>
                <li> <Link to="/news">News</Link> </li>
              </ul>
            </div>
            <div className="header-btn bg-primary px-4 py-2 rounded-lg text-white font-bold">
              <p> <Link to="/Contact">Contact</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
