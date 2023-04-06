import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram }  from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import {FaTiktok} from 'react-icons/fa'
import  {useContextGlobal}  from '../Components/utils/global.context';

const Footer = () => {
  const {stylesComponentsSwitch} = useContextGlobal();
  return (
    <footer style={stylesComponentsSwitch}>
        <img src="../images/DH.png" alt='DH-logo' />
        <div className='icons'>
        <FaFacebookSquare/>
        <AiFillInstagram/>
        <IoLogoWhatsapp/>
        <FaTiktok/>
        </div>
    </footer>
  )
}

export default Footer