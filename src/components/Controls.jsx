import React from 'react'
import '../index.css'
import Timer from './Timer'
import Text from './Text'
import Popup from './Popup'
import { useState } from 'react'


const Controls = () => {
  const [btnMsg, setBtnMsg] = useState('Start Session');
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isNotify, setIsNotify] = useState(false);

  const handleButtonClick = () => {
    setBtnMsg((prevMsg) => (prevMsg === 'Start Session' ? 'End Session' : 'Start Session'));
    setIsSessionActive((prevStatus) => !prevStatus);
    isNotify && setIsNotify(false);
  };

  const handleNotify = (remainingTime) => {
    if (remainingTime === 180) {
      setIsNotify(true);
    }
  };

  const handleClosePopup = () => {
    setIsNotify(false);
  };

  return (
    <>
      <div className='mid w-full max-h-screen flex flex-col items-center align-center  justify-between p-14 slate'>

        <div>{!isSessionActive && <Text />}</div>

        <div className={`timeKeeper ${isNotify ? 'hidden' : 'block'}`}>
          {isSessionActive && <Timer onTimeCheck={handleNotify} />}
        </div>

        <div className={`notification ${isNotify ? 'block' : 'hidden'}`}>
          {isNotify && <Popup onClose={handleClosePopup} />}
        </div>

        <button
          onClick={handleButtonClick}
          className='text-indigo-900 font-poppins font-bold p-3 mb-6 bg-white rounded-xl w-80 h-14 hover:bg-gray-300'>
          {btnMsg}
        </button>
      </div>
    </>
  )
}

export default Controls