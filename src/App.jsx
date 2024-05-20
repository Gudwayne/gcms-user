import React from 'react'
import mkbg from './assets/images/mkbg.png'
import mkbg2 from './assets/images/mkbg2.png'
import Sblack from './assets/images/Sblack.png'
import Controls from './components/Controls'
import './index.css'

const App = () => {
  return (
    <>
      <div className='bg-white z-bg'>
        {/* image 1 */}
        <img className='w-full h-screen block sm:hidden low' src={mkbg} alt='bg_img' />
        {/* image 2 */}
        <img className='w-full h-screen hidden sm:block low' src={mkbg2} alt='bg_img' />

        <img className='w-full h-screen high' src={Sblack} alt='bg_img' />

        <Controls />

      </div>
    </>
  )
}

export default App