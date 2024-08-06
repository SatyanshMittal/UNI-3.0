import React from 'react'
import WebLms from "@/components/lms/WebLms"
import VrLms from "@/components/lms/VrLms"

function page() {
  return (
    <div className='flex justify-center items-center bg-black gap-4 w-full h-screen'>
       <WebLms/>
       <VrLms/>
       
    </div>
    
  )
}

export default page