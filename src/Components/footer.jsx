import React from 'react'

function Footer() {
  return (
    <>
        <div className="newsLetter bg-[#171717] flex w-full align-center justify-center h-[270px] mt-10">
            <div className="container h-full flex align-center flex-col m-auto">
                <h1 className='text-white font-black text-[40px]'>Newsletter</h1>
                <input type="email" name="yourEmail" id="" />
                <button className='bg-white mx-5'>Subscribe</button>                

            </div>
        </div>
        <div className="footer bg-black w-full h-[200px]">
            {/* <div className="container flex">
                <h1 className='text-white'>Newsletter</h1>
            </div> */}
        </div>
    </>
  )
}

export default Footer;