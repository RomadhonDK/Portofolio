import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    // const dataPorto = [
    //     {
    //         id: 1,
    //         logo: "/schfess.png",
    //         upperTitle: "#100K+ downloaders & 4,4 ✩ Ratings",
    //         title: "Schoolfess App",
    //         color: "bg-green--primary2",
    //         desc: "Schoolfess (@schfess) is a social media platform for school children. Can be used to search for school records, questions and answers, discussions, search for information, and even educational consultations.",
    //         web: false
    //     },
    //     {
    //         id: 2,
    //         logo: "/halped.png",
    //         upperTitle: "#10K+ downloaders & 4,1 ✩ Ratings",
    //         title: "Halalpedia App",
    //         color: "bg-green--primary3",
    //         desc: "The Halalpedia mobile application is an application that operates in the e-commerce sector with halal products. All products in the Halalpedia Application have been verified by halalpedia to guarantee halal product quality. Users can download this application to start shopping for halal products on halalpedia. Apart from that, we provide digital product payments such as credit, electricity tokens and emoney payments.",
    //         web: false
    //     },
    //     {
    //         id: 3,
    //         logo: "/benings.png",
    //         upperTitle: "#5K+ downloaders & 4,1 ✩ Ratings",
    //         title: "Benings App",
    //         color: "bg-benings--color",
    //         desc: "BENING'S APP is an application designed to help users care for their beauty. This application provides an online consultation feature with beauty specialist doctors, such as dermatologists or estheticians, who can provide appropriate skin care advice and recommendations according to the user's skin condition and needs.",
    //         web: false
    //     },
    //     {
    //         id: 4,
    //         logo: "/idmai.png",
    //         upperTitle: "",
    //         title: "IDMAI Survey Apps",
    //         color: "bg-transparent--color",
    //         desc: "Application for BAPPENAS (Badan Perencanaan Pembangunan Nasional Republik Indonesia), used by all farmers in Indonesia.",
    //         web: false
    //     },
    // ]

    const dataWeb = [
        {
            id: 1,
            logo: "/DashboardBravo.PNG",
            title: "Mitratel Bravo",
            desc: "Mitratel Bravo is a web-based application developed using the React.js programming language. It functions as a platform for monitoring tickets, employee attendance, checking cable types, and viewing the locations of units or employees.",
        },
        {
            id: 2,
            logo: "/DashboardJPO.PNG",
            title: "JPO Bina Marga",
            desc: "JPO Bina Marga is a website developed using the ReactJS programming language. It is designed to monitor the counting of people, the counting of people leaning on the pedestrian overpass, and to monitor individuals who have the potential to jump from the pedestrian overpass.",
        },
        {
            id: 3,
            logo: "/DashboardGSD.PNG",
            title: "Dashboard GSD Telkom",
            desc: "Dashboard GSD is a website developed using the ReactJS programming language. It is used to monitor all maintenance and building services activities for Bank Duta and has also expanded to include construction services for Bank Duta",
        },
        // {
        //     id: 8,
        //     logo: "/iptracker.png",
        //     title: "IP - Tracker Website",
        //     desc: "ip - website tracker created using ReactJs and Tailwind for styling. Use of the IP - tracker website for Get IP address, city, regional, code information regional, country code, country name, postal code, latitude, longitude, time zone, currency, language and phone code countries use the public API ipapi.",
        // },
    ]

    return (
        <div className='px-8'>
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
                <Link to={`/about`}>
                <p className="text-white text-base lg:text-lg font-semibold	rotate-90 mt-32 lg:mt-32 hover:text-orange--primary">ABOUT</p>
                </Link>
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
            <div className='items-center justify-center flex flex-col'>
                <img src={'/my-project.png'} className="hidden mb-4 lg:mb-0 lg:block" />
                {/* <h1 className="text-3xl lg:text-7xl	font-semibold text-white mb-12">Mobile Apps</h1> */}
                {/* {
                    dataPorto.map(data => {
                        return (
                            <div className="flex flex-col lg:flex-row mt-4 mb-16" >
                                <div className='hidden lg:block'>
                                    <div className=' w-28 h-20 border border-white items-center justify-center flex mr-10'>
                                        <h1 className='text-white text-2xl'>{data.id}</h1>
                                    </div>
                                </div>
                                <div className={`${data.color} w-72 lg:w-64 h-96 mb-4  lg:mb-0 mr-4 items-center justify-center flex rounded-md`}>
                                    <img src={data.logo} className="w-20 h-20" />
                                </div>
                                <div className='bg-black--tertiary w-72 h-fit lg:h-96 mr-10 rounded-md px-6 py-6'>
                                    <div className=''>
                                        <p className='text-white font-normal text-xs mt-2'>{data.upperTitle}</p>
                                        <p className='text-white font-bold text-lg mt-4 texgt-left'>{data.title}</p>
                                    </div>
                                    <div className='w-full h-full text-center justify-center mt-4'>
                                        <p className='text-gray--primary font-semibold text-xs mt-2 text-left'>{data.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                } */}

                {/* <h1 className="text-3xl lg:text-7xl	font-semibold text-white mb-12">Website</h1> */}

                {
                    dataWeb.map(data => {
                        return (
                            <div className="flex flex-col lg:flex-row w-full items-center justify-center mt-4 mb-16" >
                                <div className='hidden lg:block'>
                                    <div className=' w-28 h-20 border border-white items-center justify-center flex mr-10'>
                                        <h1 className='text-white text-2xl'>{data.id}</h1>
                                    </div>
                                </div>
                                <div className={` w-72 lg:w-2/5 h-96 mr-4 mb-4 rounded-md items-center justify-center flex`}>
                                    <img src={data.logo} className="w-fit h-full rounded-md" />
                                </div>
                                <div className='bg-black--tertiary w-72 h-fit lg:h-96 mr-4 rounded-md px-6 py-6'>
                                    <div className=''>
                                        <p className='text-white font-bold text-lg mt-4 texgt-left'>{data.title}</p>
                                    </div>
                                    <div className='w-full h-full text-center justify-center mt-4'>
                                        <p className='text-gray--primary font-semibold text-xs mt-2 text-left'>{data.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio