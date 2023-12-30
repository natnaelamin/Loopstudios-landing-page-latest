import React from 'react'

function Modal({visible, choose, visibility}) {
    if(!visible) return null;
    const togglvisibility =()=>{
        visibility()
    }
  return (
      <div className="bg-black px-5 text-white py-5 fixed inset-0 block md:hidden">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-white">loopstudios</h1>
          <button onClick={togglvisibility} className="text-3xl font-bold text-white" >X</button>
        </div>
        <div className='mt-20'>
            {choose.map((choice, index) => (
            <div key={index} className=' text-3xl font-extralight text-white my-5'>
                <a  href="#" className=" hover:underline hover:underline-offset-8">{choice}</a> 
            </div> 
            ))}
        </div>
      </div>
        
  )
}

export default Modal
