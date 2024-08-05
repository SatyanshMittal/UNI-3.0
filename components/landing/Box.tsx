import React from 'react'

function Box() {
  return (
    <div>
        <div className="z-20 absolute flex justify-center items-center w-full h-screen bg-gray-400 bg-opacity-5">
            <div className="h-[60%] w-[60%] bg-gray-400 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex justify-center items-center">
            </div>
        </div>
  </div>
  )
}

export default Box