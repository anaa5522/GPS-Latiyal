import React from 'react'

export default function Key() {
    return (
        <div className="relative h-screen overflow-hidden">

            {/* 🔹 BACKGROUND GRADIENT */}
            <div className="absolute inset-0 h-screen bg-[#F6F2EA]"></div>

            {/* 🔹 CONTENT */}
            <div className="relative z-10">

                {/* Heading */}
                <div className="flex items-center justify-center mt-20 gap-4">
                    <div className="w-60 border-t"></div>
                    <div className="text-4xl font-bold whitespace-nowrap  ">
                        <span className="text-yellow-500 ">K</span>ey Feature
                    </div>
                    <div className="w-60 border-t"></div>
                </div>

                <div className="text-[#383838] flex items-center justify-center text-lg mt-5 mb-10">
                    Providing GPS tracking solution for various industries.
                </div>

                {/* Cards */}
                <div className="container mx-auto p-4 space-y-4">

                    {/* Row 1 */}
                    <div className=" personal-noto grid grid-cols-4 gap-4">
                        {[
                            { img: "real time tracking.png", title: "Real Time Tracking" },
                            { img: "ALERT AND NOTIFICATION.png", title: "Alerts & Notifications" },
                            { img: "Brive Reservation 2.png", title: "Driver Behavior" },
                            { img: "Brive Reservation.png", title: "Route History" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex bg-white shadow-lg hover:shadow-2xl 
                                           rounded-xl p-6 gap-4
                                           transition-all duration-300 
                                           hover:scale-105 group cursor-pointer"
                            >
                                <img
                                    src={item.img}
                                    width={80}
                                    className="group-hover:animate-vibrate"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold pt-4 pb-2">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-[#383838]">
                                        Track your vehicle live at any time
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className=" personal-noto grid grid-cols-3 gap-4">
                        {[
                            { img: "Fuel & Milage.png", title: "Fuel Monitoring" },
                            { img: "GEO-FENCING.png", title: "Geo-Fencing" },
                            { img: "PLAY BACK.png", title: "Playback" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex bg-white shadow-lg hover:shadow-2xl 
                                           rounded-xl p-6 gap-4
                                           transition-all duration-300 
                                           hover:scale-105 group cursor-pointer"
                            >
                                <img
                                    src={item.img}
                                    width={80}
                                    className="group-hover:animate-vibrate"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold pt-4 pb-2">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-[#383838]">
                                        Track fuel, zones & route history
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
