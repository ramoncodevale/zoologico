import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


import './Footer.css'

function Footer() {
  return (
    <div className='container-footer'>
        <div className="footer">
        <h1>ZOO</h1>
        <a href="#">
          <BsFacebook color="#FFF" fontSize={20} />
        </a>
        <a href="#">
          <BsInstagram color="#FFF" fontSize={20} />
        </a>
        <a href="#">
          <BsTwitter color="#FFF" fontSize={20} />
        </a>
        </div>
    </div>
  )
}

export default Footer