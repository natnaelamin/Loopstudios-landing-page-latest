import React from 'react'
import imageData from './data'

function Creations() {
  return (
      <div>
        <div className="md:flex justify-between px-5 md:px-28  my-20">
          <h2 className="md:text-5xl text-3xl text-center md:text-right font-extralight text-black">OUR CREATIONS</h2>
          <button className="hidden md:block hover:text-white text-black border-black border mr-5 bg-white hover:bg-black px-7 py-1">SEE ALL</button>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-7 px-5  md:px-28 my-20">
          {imageData.map((item, index)=>(
            <div key={index} className="relative  mb-5">
              <div className=" brightness-75 hover:opacity-50">{item.image}</div>
              <p className="absolute left-10 bottom-7 text-white text-2xl font-extralight w-28">{item.title}</p>
            </div>
          ))}
        </div>
        <div className='block md:hidden text-center'>
         <button className=" hover:text-white text-black border-black border
          bg-white hover:bg-black px-7 py-1">SEE ALL</button>
        </div>
        
      </div>
  )
}

export default Creations
