import React from 'react'
import '../index.css'
import alert from '../assets/images/alert.png'
import { FaTimes } from 'react-icons/fa'

const Popup = ({onClose}) => {
  return (
    <div className='bg-white w-80 h-96 rounded-lg opacity-80 mt-14 relative'>

        <button onClick={onClose} className='text-2xl font-poppins absolute quit'><FaTimes /></button>

        <div className='m-20'>
          <img className='m-auto mt-8 mb-8' src={alert} alt='err!' />
          <h1 className='font-poppins text-center text-indigo-900 text-2xl align-center'>
              Session is <br/>almost up!  
          </h1>
        </div>
    </div>
  )
}

export default Popup