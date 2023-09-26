import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'



const Footer = () => {
  return (
    <div className="footer-container">
      <p>20233 Sunu Boutique ALL rigth reserverd</p>

      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer