"use client"
import React from 'react'
import Our from '../Our'
import Key from '../Key'

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
                <div className="container mx-auto h-full flex items-center justify-start">
                    <div className="text-left max-w-2xl pl-40 pb-20 zoom-in">
                        <h1 className="text-black text-6xl pb-5 font-bold leading-tight">
                            TRACK SMARTER. <br /> DRIVE SAFER.
                        </h1>

                        <h2 className="mt-4 text-md text-gray-800 pb-5">
                            Advanced GPS Solution for Real-Time Vehicle Tracking
                        </h2>

                        <div className="mt-6 flex justify-start gap-4">
                            <button className="px-10 py-3 text-md font-bold bg-yellow-500 text-black rounded-lg">
                                Get Started
                            </button>

                            <button className="px-10 py-3 text-md font-bold text-black border border-black rounded-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

            </div>

                {/* step 2 */}
                    <Our/>

                    {/* step 3 */}
                    <Key/>


        </>
    )
}
