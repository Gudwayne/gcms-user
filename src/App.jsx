import React from 'react'
import mkbg from './assets/images/mkbg.png'
import black from './assets/images/black.jpg'
import './index.css'

const App = () => {
  return (
    <>
      <div className='bg-white z-bg'>
        <img className='w-full h-screen low' src={mkbg} alt='bg_img'/>
        <img className='w-full h-screen high' src={black} alt='bg_img'/>
      
        {/* <div className='mid w-full flex flex-col items-center justify-center min-h-screen'>
          <p className="bg-transparent text-white m-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, 
            quas blanditiis! Animi, optio! Placeat illum alias sint quasi quas 
            corrupti eveniet error necessitatibus cum quaerat vitae, ullam modi 
            exercitationem perspiciatis porro doloremque earum esse voluptatibus 
            saepe! Quam voluptas, nesciunt, aperiam nihil excepturi repudiandae 
            in quas ipsa odit, dignissimos doloribus quisquam molestiae porro 
            animi magnam amet tempora quos! 
          </p>

          <button className='text-indigo-900 p-3 bg-white rounded-xl w-72 hover:bg-gray-200'>
            Start Session
          </button>
        </div> */}
        

      </div>
    </>
  )
}

export default App