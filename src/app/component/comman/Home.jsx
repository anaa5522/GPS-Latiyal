"use client"
import React from 'react'
import Our from '../Our'
import Key from '../Key'
import Why from '../Why'

export default function Home() {
    return (
        <>
            {/* FIXED BACKGROUND VIDEO */}
            <div
                className="w-full"
                style={{
                    backgroundImage: "url('/IMG_20260113_130526.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "90vh",
                }}
            >
                <div className="container mx-auto h-full flex items-center justify-start px-4 sm:px-6">
                    <div
                        className="
        text-left
        max-w-2xl
        pl-0
        sm:pl-8
        md:pl-5
        lg:pl-20
        zoom-in
      "
                    >
                        <h1
                            className="
           font-inter
  text-black
  text-3xl
  sm:text-4xl
  md:text-4xl
  xl:text-5xl
  2xl:text-6xl
  pb-4
  font-semibold
  leading-tight
        "
                        >
                            TRACK SMARTER.
  <span className="block mt-4">DRIVE SAFER.</span>
                        </h1>

                        <h2
                            className="
          font-montserrat
          mt-3
          text-[10px]
          sm:text-base
          md:text-md
          text-gray-800
          pb-4
        "
                        >
                            Advanced GPS Solution for Real-Time Vehicle Tracking
                        </h2>

                        <div
                            className="
          mt-5
          flex
          flex-row
          flex-nowrap
          justify-start
          gap-3
        "
                        >
                            <button
                                className="
            px-6
            sm:px-10
            py-2.5
            sm:py-3
            text-sm
            sm:text-md
            font-montserrat
            bg-yellow-500
            text-black
            rounded-lg
            whitespace-nowrap
          "
                            >
                                Get Started
                            </button>

                            <button
                                className="
            px-6
            sm:px-10
            py-2.5
            sm:py-3
            text-sm
            sm:text-md
            font-montserrat
            text-black
            border
            border-black
            rounded-lg
            whitespace-nowrap
          "
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>




            {/* step 2 */}
            <Our />

            {/* step 3 */}
            {/* <Key /> */}

            {/* step3 */}
            {/* <Why /> */}


        </>
    )
}
