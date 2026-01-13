import React from 'react'
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <header className='flex container mx-auto justify-between  left-0 w-full h-auto bg-white shadow '>
                <div>
                    <img src='Latiyal Logo Final.png' alt='company logo' width={180} height={100} className='mx-20 my-5' />
                </div>
                <div className='my-auto gap-20 flex item-center bg-white/30 backdrop-blur-sm p-6 rounded-lg py-2 px-8 rounded-xl '>
                    <div className="relative inline-block personal-tinos font-bold text-lg
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:w-0 after:h-[3px] after:bg-yellow-400
               after:transition-all after:duration-300
               hover:after:w-full">HOME</div>
                    <div className="relative inline-block personal-tinos font-bold text-lg
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:w-0 after:h-[3px] after:bg-yellow-400
               after:transition-all after:duration-300
               hover:after:w-full">PRODUCT</div>
                    <div className="relative inline-block personal-tinos font-bold text-lg
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:w-0 after:h-[3px] after:bg-yellow-400
               after:transition-all after:duration-300
               hover:after:w-full">CONTACT US</div>
                    <div className="relative inline-block personal-tinos font-bold text-lg
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:w-0 after:h-[3px] after:bg-yellow-400
               after:transition-all after:duration-300
               hover:after:w-full">SUPPORT</div>
                    <div className="relative inline-block personal-tinos font-bold text-lg
               after:content-[''] after:absolute after:left-0 after:-bottom-1
               after:w-0 after:h-[3px] after:bg-yellow-400
               after:transition-all after:duration-300
               hover:after:w-full">VISIT COMPANY </div>
                </div>
                <div className='my-auto gap-10 flex  item-center justify-end mx-20'>
                    <BsSearch color='black' />
                    <FaShoppingCart color='black' />
                </div>

            </header>
        </>
    )
}
