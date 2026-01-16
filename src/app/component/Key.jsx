"use client";
import Image from "next/image";

export default function TrackSection() {
  const items = [
    "ROBUST DEVICES",
    "STABLE & ACCURATE DATA",
    "EDGE PROCESSING & DIAGNOSTICS",
    "REMOTE ECU PROVISIONING",
    "DEAD RECKONING",
    "CLOUD MOBILITY PLATFORM",
  ];

  return (
    <section className="w-full bg-[#F6F2EA] py-24">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* HEADING */}
        {/* HEADING WITH LINES */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden md:block w-40 flex-1 border-t border-[#383838]/40"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] text-center">
            <span className="text-[#FCB13B]">H</span>ow Our GPS Work
          </h2>
          <div className="hidden md:block w-40 flex-1 border-t border-[#383838]/40"></div>
        </div>

        {/* Paragraph below heading */}
        <p className="text-center text-[#383838] mt-4 mb-10">
          Advance GPS Solution for real time vehicle tracking
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="relative flex justify-center  items-center">

            <img
              src="d84ec660dac3a8933bd66d143b685047.jpg"
              alt="C Shape"
              className="w-[300px] md:w-[430px] relative z-10 rounded-xl"
            />

            {/* SHADOW OVER IMAGE */}
            <div
              className="rounded-xl
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                w-[300px] md:w-[430px]
                h-full
                bg-gradient-to-b
                from-[#000000]/70
                via-[#000000]/50
                to-transparent
                z-20
                pointer-events-none
              "
            />

            {/* CENTER LOGO */}
            <img
              src="/Latiyal Logo Final.png"
              alt="Logo"
              className="absolute z-30 w-[150px] md:w-[180px]"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="relative space-y-6">

            {items.map((text, index) => (
              <div key={index} className="relative flex items-center">

                {/* CONNECTING LINE */}
                <span className="hidden lg:block absolute -left-28 w-24 h-[2px] bg-[#383838]/40" />

                {/* CARD */}
                <div className="w-full bg-white rounded-xl shadow-md px-6 py-5 flex items-center gap-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FCB13B] text-black font-bold">
                    {index + 1}
                  </span>
                  <p className="text-[#000000] font-semibold">
                    {text}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
