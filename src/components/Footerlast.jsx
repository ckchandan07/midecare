import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footerlast = () => {
  return (
    <div className='footer-icon'>
    <div className="foot-icon flex gap-2 ">
        <div className="icon">
        <FaFacebookF />
        </div>
        <div className="icon">
        <FaGoogle />
        </div>
        <div className="icon">
        <FaTwitter />
        </div>
  </div>
  <p>©2023 - 011BQ </p>
  </div>
  )
}

export default Footerlast