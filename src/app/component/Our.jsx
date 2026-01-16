"use client";
import { useEffect, useRef, useState } from "react";

export default function Our() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F6F2EA] py-16 px-4">

      {/* ===== Heading ===== */}
      <div className="flex items-center justify-center gap-4">
        <div className="hidden sm:block w-40 border-t border-[#383838]"></div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#000000]">
          <span className="text-[#FCB13B]">H</span>ow Our GPS Work
        </h2>
        <div className="hidden sm:block w-40 border-t border-[#383838]"></div>
      </div>

      <p className="text-center text-[#383838] mt-4 mb-12">
        Advance GPS Solution for real time vehicle tracking
      </p>

      {/* ===== Cards ===== */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >

        {/* ===== CARD 1 ===== */}
        <div
          className={`relative h-[550px] rounded-xl overflow-hidden group shadow-lg transition-all duration-700
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <img
            src="/8658e416bf461f50df6d540f28ce9b27.jpg"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-[#000000]/40"></div>

          <img
            src="/Latiyal Logo Final.png"
            className="absolute top-4 left-4 w-20"
            alt="logo"
          />

          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 bg-[#FCB13B] text-black font-bold rounded-full text-center leading-8">
                1
              </span>
              <h3 className="font-bold text-lg">
                GPS Device in Vehicle
              </h3>
            </div>
            <p className="text-sm">
              Install our device to enable real-time tracking
            </p>
          </div>
        </div>

        {/* ===== CARD 2 ===== */}
        <div
          className={`relative h-[550px] rounded-xl overflow-hidden group shadow-lg transition-all duration-700
          ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <img
            src="/fce0dcd5df1deddef6201cd88a525fcf.jpg"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-[#000000]/40"></div>

          <img
            src="/Latiyal Logo Final.png"
            className="absolute top-4 left-4 w-20"
            alt="logo"
          />

          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 bg-[#FCB13B] text-black font-bold rounded-full text-center leading-8">
                2
              </span>
              <h3 className="font-bold text-lg">
                Signal to Satellites
              </h3>
            </div>
            <p className="text-sm">
              Device communicates via satellites
            </p>
          </div>
        </div>

        {/* ===== CARD 3 ===== */}
        <div
          className={`relative h-[550px] rounded-xl overflow-hidden group shadow-lg transition-all duration-700
          ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
        >
          <img
            src="/d84ec660dac3a8933bd66d143b685047.jpg"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-[#000000]/40"></div>

          <img
            src="/Latiyal Logo Final.png"
            className="absolute top-4 left-4 w-20"
            alt="logo"
          />

          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 bg-[#262F6C] text-white font-bold rounded-full text-center leading-8">
                3
              </span>
              <h3 className="font-bold text-lg">
                Live Tracking
              </h3>
            </div>
            <p className="text-sm">
              Track vehicles live on any device
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
