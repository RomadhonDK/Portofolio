import React from 'react'

const HeaderName = () => {
  return (
    <div>
        <div className="fixed top-0 left-0 lg:-top-2 lg:left-10">
            <video className='w-24 h-24  lg:w-52 lg:h-52' autoPlay loop muted>
                <source src="/animation.mp4" type="video/mp4"/>
        
            </video>
        </div>
        <div className="fixed top-4 right-4 lg:top-10 lg:right-20 cursor-pointer">
                <h1 className="text-white text-base lg:text-xl text-right font-semibold hover:text-green--primary">ROMADHON <br/>DWI <br/> KURNIAWAN</h1>
        </div>
    </div>
  )
}

export default HeaderName