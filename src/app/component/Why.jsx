import React from 'react'
import { motion } from "framer-motion";

export default function Why() {
    return (
        <div className="relative h-screen overflow-hidden bg-[#F6F2EA]">

            {/* Background Image with overlay effect */}
            <img
                src="Gemini_Generated_Image_ppj5yjppj5yjppj5.png"
                alt="GPS Background"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
            />

            {/* Content */}
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 h-full flex flex-col items-start justify-center text-black px-32"
            >
                <h1 className="text-6xl font-bold">
                    Why Choose Us
                </h1>

                <p className="text-xl mt-6 text-[#383838]">
                    Trust of thousand of business nationwide
                </p>

                <button className="px-10 py-3 text-md font-bold bg-yellow-500 text-black rounded-lg mt-10">
                    Get Started
                </button>
            </motion.div>

        </div>
    )
}
