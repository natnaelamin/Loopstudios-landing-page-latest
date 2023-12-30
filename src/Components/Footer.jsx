import React from 'react'

function Footer({choose}) {

    const images = [
        { name: 'facebook', icon: <img src="/images/icon-facebook.svg" alt="" /> },
        { name: 'twitter', icon: <img src="/images/icon-twitter.svg" alt="" /> },
        { name: 'pinterest', icon: <img src="/images/icon-pinterest.svg" alt="" /> },
        { name: 'instagram', icon: <img src="/images/icon-instagram.svg" alt="" /> },
      ];
  return (
      <div className="bg-black px-5 md:px-28 mt-20 py-10 text-center ">
        <div className="md:flex justify-between ">
          <p className="text-3xl font-bold text-white">loopstudios</p>
          
          <div className=" hidden md:flex gap-5 justify-between">
            {images.map((image, index) =>(
                <div key={index}>
                    <a href="#">{image.icon}</a>
                </div>
            ))}
          </div>
        </div>

        <div className="md:flex justify-between text-white mt-5  ">
          <div className="md:flex jusify-between gap-5 ">
            {choose.map((choice, index) => (
              <div className='md:mb-0 mb-3' key={index}>
                <a  href="#" className=" hover:underline hover:underline-offset-8">{choice}</a> 
              </div> 
            ))}
          </div>
          <div className=" flex px-16 md:hidden gap-5 mt-5 justify-between mb-5">
            {images.map((image, index) =>(
                <div key={index}>
                    <a href="#">{image.icon}</a>
                </div>
            ))}
          </div>
            <p className="text-neutral-400">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
  )
}

export default Footer
