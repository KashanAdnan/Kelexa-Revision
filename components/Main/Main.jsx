import React from 'react'
import { FaPlay } from "react-icons/fa";

const Main = () => {
    return (
        <>
            <div className='w-full relative py-4 h-[82.5vh] flex items-center justify-start flex-col bg-contain bg-[url("/background.png")] text-white text-center px-6 max-sm:bg-cover max-sm:bg-center'>
                <h1 className='text-[7vmin] font-bold'>WE HELP SMES 10X THEIR REVENUE</h1>
                <p className='text-[5vmin] font-medium'>THROUGH HIGH CONVERTING FUNNEL & </p>
                <button className="bg-[#EBFF00] px-4 py-2 rounded-xl text-[4vmin] font-medium mt-2 text-black">GOOGLE ADVERTISING</button>
                <div className='flex items-center justify-center top-56 absolute w-[70%] h-[75vh] bg-[url("/video.png")]' style={{ backgroundSize: "100% 100%" }}>
                    <div className='bg-[#E8B5031A] rounded-full p-10'>
                        <div className='bg-[#EBFF00] rounded-full p-12 cursor-pointer text-black'>
                            <FaPlay className='text-xl' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full text-center mt-[12rem] leading-10 text-lg font-normal px-6'>
                <p>Increase sales, get more leads, and ensure your strategy resonates with <br /> your business goals using our Google Ads services.</p>
            </div>
        </>
    )
}

export default Main
