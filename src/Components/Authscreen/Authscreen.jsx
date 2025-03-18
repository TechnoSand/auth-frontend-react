import './Authscreen.css'
import React from 'react'
import Loginform from '../Loginform/Loginform'

const Authscreen = ({form}) => {
  return (
    <div className='background'> 
    <div className='block'>
      <div className='img'>
        <p className='text'></p>
      </div>
      <div className='form'>{form}</div>
      </div>
    </div>

  )
}

export default Authscreen
