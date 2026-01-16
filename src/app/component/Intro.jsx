"use client";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="w-full bg-[#F6F2EA] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] leading-tight">
            The solution to your <br /> parking problems
          </h2>

          <p className="mt-6 text-[#383838] max-w-lg">
            We understand that finding a parking space can be a challenge for many.
            Our app addresses this problem with these three essential features.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3 text-[#383838]">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#000000] text-white">
                ✓
              </span>
              Well-organized information
            </li>

            <li className="flex items-center gap-3 text-[#383838]">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#000000] text-white">
                ✓
              </span>
              Google Maps integration
            </li>

            <li className="flex items-center gap-3 text-[#383838]">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#000000] text-white">
                ✓
              </span>
              Integration with car sensors
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 border border-[#000000] rounded-lg hover:bg-[#FCB13B] hover:text-[#000000] transition">
            Learn more
          </button>
        </div>

        {/* ================= RIGHT IMAGE (iPhone Mockup) ================= */}
        <div className="relative flex justify-center items-center">

          {/* SCREEN MASK */}
          <div
            className="
              absolute
              top-[6.5px]
              left-1/2
              -translate-x-1/2
              w-[240px] md:w-[290px]
              h-[515px] md:h-[555px]
              rounded-[32px]
              overflow-hidden
              z-0
            "
          >
            <img
              src="/remove all text from.png"
              alt="App Screen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* IPHONE FRAME */}
          <img
            src="imgi_676_white-smartphone-mockup-blank-screen-isolated-on-transparent-background-smartphone-mockup-frame-free-png.png"
            alt="iPhone Frame"
            className="w-[120px] md:w-[300px] relative rounded-4xl"
          />

        </div>
      </div>
    </section>
  );
}
