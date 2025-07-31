import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link = "https://www.linkedin.com/in/dorotejarnold/" Icon = {FaLinkedinIn} />
      <SingleContactSocial link = "https://github.com/ddarnold" Icon = {FaGithub} />
      <SingleContactSocial link = "https://www.instagram.com/arnold_dorotej_dado/" Icon = {FaInstagram} /> 
    </div>
  )
}

export default ContactSocial