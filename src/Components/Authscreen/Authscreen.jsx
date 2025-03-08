import './Authscreen.css'
import React from 'react'
import Loginform from '../Loginform/Loginform'

const Authscreen = ({form}) => {
  return (
    <div className='auth'>
      
      <div className='img'>
        <p className='text'></p>
      </div>

      <div className='form'>{form}</div>
    </div>
  )
}

export default Authscreen
