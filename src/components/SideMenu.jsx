import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
    <div className="fixed -right-3 top-10 lg:right-14 lg:top-32 ">
      <Link to={`/about`}>
        <p className="text-white text-base lg:text-lg font-semibold	rotate-90 mt-32 lg:mt-32 hover:text-orange--primary">ABOUT</p>
      </Link>
      <Link to={`/portfolio`}>
        <p className="text-white text-base lg:text-lg font-semibold	rotate-90 mt-16 lg:mt-32 hover:text-orange--primary">PORTFOLIO</p>
      </Link>
      <Link to={`/resume`}>
        <p className="text-white text-base lg:text-lg font-semibold	rotate-90 mt-24 lg:mt-32 hover:text-orange--primary">RESUME</p>
      </Link>
    </div>
  )
}

export default SideMenu