import React from 'react'

const Ball = ({borderColor, imgBall,shadow}) => {
  return (
    <div className={`w-20 h-20 lg:w-44 lg:h-44 rounded-full items-center justify-center flex border-4 lg:border-8 ${borderColor} mb-4 lg:mb-6 ${shadow}`}>
        <img src={imgBall} className=""/>
    </div>
  )
}

export default Ball