"use client";
import { useEffect, useRef, useState } from "react";

export default function Our() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    /* ===== Background Wrapper ===== */
    <section className="bg-[#F6F2EA] py-16 sm:py-20 md:py-24 px-4">

      {/* ===== Heading ===== */}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <div className="hidden sm:block w-32 md:w-60 border-t border-gray-400"></div>

        <div className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap">
          <span className="text-yellow-500">H</span>ow Our GPS Work
        </div>

        <div className="hidden sm:block w-32 md:w-60 border-t border-gray-400"></div>
      </div>

      <div className="text-[#383838] text-center text-sm sm:text-base md:text-lg mt-4 sm:mt-5 mb-10 sm:mb-14">
        Advance GPS Solution for real time vehicle tracking
      </div>

      {/* ===== Cards Section ===== */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {/* Card 1 */}
        <div
          className={`bg-white text-center shadow-lg rounded-xl transition-all duration-700 
          hover:scale-105
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <img src="/1768301653838.jpg" className="rounded-t-xl w-full" />

          <div className="flex gap-4 pt-5 px-6 items-center">
            <h2 className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-400 font-extrabold rounded-full text-center leading-9 sm:leading-10">
              1
            </h2>
            <h3 className="font-bold text-base sm:text-lg">
              GPS Device in Vehicle
            </h3>
          </div>

          <p className="text-sm pb-4 px-6 text-[#383838]">
            Install our device in your vehicle to
            <br />enable real-time tracking
          </p>
        </div>

        {/* Card 2 */}
        <div
          className={`bg-white text-center shadow-lg rounded-xl transition-all duration-700 
          hover:scale-105
          ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <img src="/1768301875168.jpg" className="rounded-t-xl w-full" />

          <div className="flex gap-4 pt-5 px-6 items-center">
            <h2 className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-400 font-extrabold rounded-full text-center leading-9 sm:leading-10">
              2
            </h2>
            <h3 className="font-bold text-base sm:text-lg">
              Signal Sent to Satellites
            </h3>
          </div>

          <p className="text-sm pb-4 px-6 text-[#383838]">
            Our devices send and receive signals
            <br />through satellites for tracking accuracy
          </p>
        </div>

        {/* Card 3 */}
        <div
          className={`bg-white text-center shadow-lg rounded-xl transition-all duration-700 
          hover:scale-105
          ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
        >
          <img src="/1768301981768.jpg" className="rounded-t-xl w-full" />

          <div className="flex gap-4 pt-5 px-6 items-center">
            <h2 className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-400 font-extrabold rounded-full text-center leading-9 sm:leading-10">
              3
            </h2>
            <h3 className="font-bold text-base sm:text-lg">
              Live Tracking on Your Devices
            </h3>
          </div>

          <p className="text-sm pb-4 px-6 text-[#383838]">
            View the real-time location, route and
            <br />alerts on your PC, tablet
          </p>
        </div>
      </div>
    </section>
  );
}
