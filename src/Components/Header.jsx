import React from 'react'

function Header({choose, visibility}) {
  
    const toggleVisibility = () =>{
        visibility()
    }
    

  return (
      <div className="bg-[url('/images/desktop/image-hero.jpg')] bg-cover px-5  md:px-24 pt-16 pb-24 ">
        <div className="flex justify-between mb-24">
          <h1 className="text-3xl font-bold text-white">loopstudios</h1>
          <div className="flex  text-white justify-between md:gap-5">
            <button onClick={toggleVisibility} className="visible md:invisible">
                <img src="/images/icon-hamburger.svg" alt="" />
            </button>
            {choose.map((choice, index) => (
              <div key={index} className='hidden md:block'>
                <a  href="#" className=" hover:underline hover:underline-offset-8">{choice}</a> 
              </div> 
            ))}
          </div>
          
        </div>
        <div className="border border-slate-400 px-5 md:px-12 py-4 w-full md:w-3/6 mt-10 mb-10">
          <p className="md:text-7xl text-5xl text-white font-extralight text ">IMMERSIVE EXPERIENCES THAT DELIVER</p>
        </div>  
      </div>
  )
}

export default Header
