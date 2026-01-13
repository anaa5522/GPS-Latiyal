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
    <>
      {/* ===== Heading ===== */}
      <div className="flex items-center justify-center mt-24 gap-4">
        <div className="w-60 border-t"></div>

        <div className="text-4xl font-bold whitespace-nowrap">
          <span className="text-yellow-500">H</span>ow Our GPS Work
        </div>

        <div className="w-60 border-t"></div>
      </div>

      <div className="flex items-center justify-center text-lg mt-5 mb-10">
        Advance GPS Solution for real time vehicle tracking
      </div>

      {/* ===== Cards Section ===== */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto rounded-xl"
      >
        {/* Card 1 – Bottom se */}
        <div
          className={`text-center shadow-lg rounded-xl transition-all duration-700 
          delay-160 
          hover:scale-110
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <img src="/1768301653838.jpg" className="rounded-t-xl w-full" />

          <div className="flex gap-5 pt-5 px-7 items-center">
            <h2 className="w-10 h-10 bg-yellow-400 font-extrabold rounded-full text-center leading-10">
              1
            </h2>
            <h3 className="font-bold text-lg">
              GPS Device in Vehicle
            </h3>
          </div>

          <p className="text-sm pb-4 px-6">
            Install our device in your vehicle to
            <br />
            enable real-time tracking
          </p>
        </div>

        {/* Card 2 – Fade + Zoom */}
        <div
          className={`text-center shadow-lg rounded-xl transition-all duration-700 delay-160 
          hover:scale-110
          ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <img src="/1768301875168.jpg" className="rounded-t-xl w-full" />

          <div className="flex gap-5 pt-5 px-7 items-center">
            <h2 className="w-10 h-10 bg-yellow-400 font-extrabold rounded-full text-center leading-10">
              2
            </h2>
            <h3 className="font-bold text-lg">
              Signal Sent to Satellites
            </h3>
          </div>

          <p className="text-sm pb-4 px-6">
            Our devices send and receive signals
            <br />
            through satellites for tracking accuracy
          </p>
        </div>

        {/* Card 3 – Top se */}
        <div
          className={`text-center shadow-lg rounded-xl transition-all duration-700 delay-160 
          hover:scale-110
          ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}
        >
          <img src="/1768301981768.jpg" className="rounded-t-xl w-full" />

          <div className="flex gap-5 pt-5 px-7 items-center">
            <h2 className="w-10 h-10 bg-yellow-400 font-extrabold rounded-full text-center leading-10">
              3
            </h2>
            <h3 className="font-bold text-lg">
              Live Tracking on Your Devices
            </h3>
          </div>

          <p className="text-sm pb-4 px-6">
            View the real-time location, route and
            <br />
            alerts on your PC, tablet
          </p>
        </div>
      </div>
    </>
  );
}
