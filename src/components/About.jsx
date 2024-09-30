import React from 'react'
import HeaderName from './HeaderName'
import Ball from './ball'
import SideMenu from './SideMenu'
import { Link } from 'react-router-dom'

const About = () => {
    const colorBall = [
        {
            id: 1,
            imgBall: "/pinkBall.png",
            colorBorder: "border-pink--primary",
            shadow: "shadow-2xl shadow-pink--primary"
        },
        {
            id: 2,
            imgBall: "/purpleBall.png",
            colorBorder: "border-blue--primary",
            shadow: "shadow-2xl shadow-blue--primary"

        },
        {
            id: 3,
            imgBall: "/greenBall.png",
            colorBorder: "border-green--primary",
            shadow: "shadow-2xl shadow-green--primary"
        },
        {
            id: 4,
            imgBall: "/yellowBall.png",
            colorBorder: "border-yellow--primary",
            shadow: "shadow-2xl shadow-yellow--primary"
        },
        {
            id: 5,
            imgBall: "/orangeBall.png",
            colorBorder: "border-orange--primary",
            shadow: "shadow-2xl shadow-orange--primary"
        },
        {
            id: 6,
            imgBall: "/redBall.png",
            colorBorder: "border-red--primary",
            shadow: "shadow-2xl shadow-red--primary"
        }
    ]
    return (
        <div className="px-8">
            <div className="flex items-center justify-between w-full ">
                <div className="">
                    <video className='w-32 h-32 lg:w-48 lg:h-48' autoPlay loop muted>
                        <source src="/animation.mp4" type="video/mp4" />

                    </video>
                </div>
                <Link to={`/`}>
                    <div className="cursor-pointer">
                        <h1 className="text-white text-base lg:text-xl text-right font-semibold hover:text-green--primary">ROMADHON <br />DWI <br /> KURNIAWAN</h1>
                    </div>
                </Link>
            </div>
            <div className="fixed -right-3 top-24 lg:right-3 lg:top-32 ">
                <p className="text-white text-base lg:text-lg font-semibold	rotate-90 mt-32 lg:mt-32 hover:text-orange--primary">ABOUT</p>
                <Link to={`/portfolio`}>
                    <p className="text-white text-base lg:text-lg font-semibold	rotate-90 mt-16 lg:mt-24 hover:text-orange--primary">PORTFOLIO</p>
                </Link>
                <Link to={`/resume`}>
                    <p className="text-white text-base lg:text-lg font-semibold	rotate-90 mt-24 lg:mt-32 hover:text-orange--primary">RESUME</p>
                </Link>
            </div>
            <div className="flex items-center lg:justify-center">
                <img src={"/about.png"} className="w-5/6 h-5/6 mt-12 lg:mt-0 lg:w-3/4 lg:h-3/4 z-50" />
            </div>
            <div className="absolute top-24 right-4 mt-2 lg:mt-0 lg:-top-20 lg:right-36">
                {
                    colorBall.map(i => {
                        return (
                            <div className={`w-12 h-12 lg:w-44 lg:h-44 -ml-24 item-center justify-center rounded-full mb-2 lg:mb-8 border-4 lg:border-8 ${i.shadow} ${i.colorBorder} `}>
                                <img src={i.imgBall} />
                            </div>
                        )
                    })
                }
            </div>
            <h1 className="absolute top-44 left-12 mt-1 lg:mt-0 lg:top-52 lg:left-60 z-50 text-md lg:text-[80px] font-semibold text-white">ABOUT ME</h1>
            <div className="mt-12 pb-12 pr-6 lg:px-20">
                <p className="text-white font font-medium text-lg lg:font-semibold lg:text-2xl ">Hey there! I am an A developer who has focused on the front end for more than 1 year. Experienced and familiar with programming languages such as JavaScript, React and HTML. I am a multi-tasker, working under pressure, and have high ambitions to achieve the targets that have been set at the beginning without violating the applicable rules</p>
                {/* <div> */}
                <h1 className="text-3xl lg:text-7xl	font-semibold text-white mt-12">INSTAGRAM</h1>
                <img src="/ig-feed.png" className="mt-9 lg:mt-14 rounded-md" />
                {/* </div> */}
            </div>
            <div className="fixed mt-4 lg:right-20 lg:bottom-10 flex items-center justify-between w-44">
                    <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/romadhondwik/">
                        <img src={"/linkedIn.png"} className="w-7 h-7 lg:h-9 lg:w-9 mr-12" />
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/dwiiikurniawann/">
                        <img src={"/ig.png"} className="w-7 h-7 lg:h-9 lg:w-9 mr-12" />
                    </a>
                    {/* <a target='_blank' rel='noopener noreferrer' href="https://www.youtube.com/@ajaxjson22">
                        <img src={"/yt.png"} className="w-7 h-7 lg:h-9 lg:w-9" />
                    </a> */}
                </div>
        </div>
    )
}

export default About