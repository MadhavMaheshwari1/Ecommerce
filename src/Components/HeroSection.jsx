import React from 'react'
import '../App.css'

function HeroSection() {
  return (
    <div className="heroSection container grid grid-cols-3 grid-row-2 gap-4 mt-4 m-auto">
      <div className="features col-start-1 col-end-2 row-start-1 row-end-3 relative">
        <a href="" className="feature1 inline-block w-full h-full">
          <div id="img1" className="absolute bg-black w-full h-full bg-opacity-25 hover:bg-opacity-40 transition-all duration-500"></div>
          <img src="/Images/Furniture.webp" className="w-full h-full" alt="" />
          <h4 className='absolute bottom-0 text-4xl text-white font-semibold px-6 py-6'>Live Comfortably</h4>
        </a>
      </div>
      <div className="features row-start-1 row-end-3 relative">
        <a href="" className="feature2 inline-block w-full h-full">
          <div id="img2" className="absolute bg-black w-full h-full bg-opacity-25 hover:bg-opacity-40 transition-all duration-500"></div>
          <img src="/Images/Skincare.webp" className="w-full h-full" alt="" />
          <h4 className='absolute bottom-0 text-4xl text-white font-semibold px-6 py-6'>Skincare</h4>
        </a>
      </div>
      <div className="features row-start-2 col-end-4 relative">
        <a href="" className="feature3 inline-block w-full h-full">
          <div id="img3" className="absolute bg-black w-full h-full bg-opacity-25 hover:bg-opacity-40 transition-all duration-500"></div>
          <img src="/Images/Electronics.webp" className="w-full h-full" alt="" />
          <h4 className='absolute bottom-0 text-4xl text-white font-semibold px-6 py-6'>Electronics</h4>
        </a>
      </div>
      <div className="features row-start-1 row-end-2 col-end-4 relative">
        <div id="img4" className="absolute bg-black w-full h-full bg-opacity-25 hover:bg-opacity-40 transition-all duration-500"></div>
        <a href="" className="feature4 inline-block w-full h-full">
          <img src="/Images/Kitchen.webp" className="w-full h-full" alt="" />
          <h4 className='absolute bottom-0 text-4xl text-white font-semibold px-6 py-6'>Kitchen</h4>
        </a>
      </div>
    </div>
  )
}

export default HeroSection;