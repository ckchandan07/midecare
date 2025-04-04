import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="main footer-nav">
        <div className="header flex justify-between items-center">
            <div className="logo">
                <h1 className='font-bold'>Medi<span className=''>Care+</span></h1>
            </div>
            <div className="head-text flex justify-around items-center gap-10">
                <div className="header-text foot">
                    <ul className='flex justify-around gap-8 font-bold '>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                        <li> <Link to="/services">Services</Link> </li>
                        <li> <Link to="/news">News</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};



export default Footer