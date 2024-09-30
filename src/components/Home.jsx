import Ball from './ball'
import SideMenu from './SideMenu'
import HeaderName from './HeaderName'

const Home = () => {

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
        },
        {
            id: 7,
            imgBall: "/pinkBall.png",
            colorBorder: "border-pink--primary",
            shadow: "shadow-2xl shadow-pink--primary"
        },
        {
            id: 8,
            imgBall: "/purpleBall.png",
            colorBorder: "border-blue--primary",
            shadow: "shadow-2xl shadow-blue--primary"

        },
        {
            id: 9,
            imgBall: "/greenBall.png",
            colorBorder: "border-green--primary",
            shadow: "shadow-2xl shadow-green--primary"
        },
        {
            id: 10,
            imgBall: "/yellowBall.png",
            colorBorder: "border-yellow--primary",
            shadow: "shadow-2xl shadow-yellow--primary"
        },
        {
            id: 11,
            imgBall: "/orangeBall.png",
            colorBorder: "border-orange--primary",
            shadow: "shadow-2xl shadow-orange--primary"
        },
        {
            id: 12,
            imgBall: "/redBall.png",
            colorBorder: "border-red--primary",
            shadow: "shadow-2xl shadow-red--primary"
        },
    ]


    return (
        <div className="flex flex-col items-center justify-center">
            {
                colorBall.map(i => {
                    return (
                        <Ball
                            key={i.id}
                            borderColor={i.colorBorder}
                            imgBall={i.imgBall}
                            shadow={i.shadow}
                        />
                    )
                })
            }
            <HeaderName />
            <SideMenu />
            <h1 className="text-black--secondary text-4xl lg:text-9xl font-semibold  fixed top-80">ROMADHON DWI KURNIAWAN</h1>
            <img src={"/yudha2.png"} className="w-66 h-56  lg:px-0 lg:w-96 lg:h-96 lg:items-center lg:justify-center fixed top-60 lg:top-72 lg:bottom-0 rounded-md" />
            <div className="fixed left-10 bottom-30 lg:bottom-8 lg:left-20">
                <h1 className="text-white text-3xl font-semibold">FrontEnd Developer</h1>
                <div className="flex flex-row items-center">
                    <h1 className="mr-2 text-gray--primary text-xl	 font-medium">From</h1>
                    <h1 className="text-white text-xl text-yellow--primary font-bold">Bandung, Indonesia</h1>
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
        </div>
    )
}

export default Home