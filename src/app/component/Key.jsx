import React from 'react'
import { MapPin } from "@deemlol/next-icons";

export default function Key() {
    return (
        <>
            <div className="flex items-center justify-center mt-20  gap-4">
                <div className="w-60 border-t"></div>
                <div className="text-4xl font-bold whitespace-nowrap">
                    <span className="text-yellow-500">k</span>ey Feature{" "}

                </div>
                <div className="w-60 border-t"></div>
            </div>

            <div className="flex items-center justify-center text-lg mt-5 mb-10 gap-4">
                Providing GPS tracking solution for varous industries.
            </div>
            <div className="container mx-auto p-4 space-y-4">
                {/* First Row: 4 Columns */}
                <div className="grid grid-cols-4 gap-4">
                    <div className="shadow-lg rounded-xl text- p-6 ">
                        <div><img src="" alt="" /></div>
                        <div><h2 className=' personal-noto  text-xl font-semibold pb-2 text-start'>Real Time tracking</h2>
                            <p className='text-sm'>Track your vehicle live At any time </p>
                        </div>

                    </div>
                    <div className="shadow-lg rounded-xl text- p-6 ">
                        <div><img src="" alt="" /></div>
                        <div><h2 className=' personal-noto  text-xl font-semibold pb-2 text-start'>Real Time tracking</h2>
                            <p className='text-sm'>Track your vehicle live At any time </p>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-xl p-6 "> <div><img src="" alt="" /></div>
                        <div><h2 className=' personal-noto  text-xl font-semibold pb-2 text-start'>Real Time tracking</h2>
                            <p className='text-sm'>Track your vehicle live At any time </p>
                        </div></div>
                    <div className="shadow-lg rounded-xl p-6 "> <div><img src="" alt="" /></div>
                        <div><h2 className=' personal-noto  text-xl font-semibold pb-2 text-start'>Real Time tracking</h2>
                            <p className='text-sm'>Track your vehicle live At any time </p>
                        </div></div>
                </div>

                {/* Second Row: 3 Columns */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="shadow-lg rounded-xl  p-6 "> <div><img src="" alt="" /></div>
                        <div><h2 className=' personal-noto  text-xl font-semibold pb-2 text-start'>Real Time tracking</h2>
                            <p className='text-sm'>Track your vehicle live At any time </p>
                        </div></div>
                    <div className="shadow-lg rounded-xl  p-6 "> <div><img src="" alt="" /></div>
                        <div><h2 className=' personal-noto  text-xl font-semibold pb-2 text-start'>Real Time tracking</h2>
                            <p className='text-sm'>Track your vehicle live At any time </p>
                        </div></div>
                    <div className="shadow-lg rounded-xl  p-6 "> <div><img src="" alt="" /></div>
                        <div><h2 className=' personal-noto  text-xl font-semibold pb-2 text-start'>Real Time tracking</h2>
                            <p className='text-sm'>Track your vehicle live At any time </p>
                        </div></div>
                </div>
            </div>


        </>
    )
}
