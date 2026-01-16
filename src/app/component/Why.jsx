"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SoloSlider() {
  const items = [
    { id: 1, img: "imgi_110_4c15a9b76fb269e21b445715a80a78ab.png", title: "99.9% Uptime" },
    { id: 2, img: "imgi_62_3aba2def1b9ec0363802a4b88c58e489.png", title: "Live Tracking" },
    { id: 3, img: "imgi_93_88356419c717c2c19e4c0dab71e21a1c.png", title: "Easy Setup" },
    { id: 4, img: "imgi_140_9c27a963b2709df487d81ab4bc08d007.png", title: "Secure Data" },
    { id: 5, img: "imgi_110_4c15a9b76fb269e21b445715a80a78ab.png", title: "100% Uptime" },
    { id: 6, img: "imgi_62_3aba2def1b9ec0363802a4b88c58e489.png", title: "Live Tracking" },
    { id: 7, img: "imgi_93_88356419c717c2c19e4c0dab71e21a1c.png", title: "Easy Setup" },
    { id: 8, img: "imgi_140_9c27a963b2709df487d81ab4bc08d007.png", title: "Secure Data" },
  ];

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1} },
    ],
  };

  return (
    <section className="bg-[#F6F2EA] py-10">
      <div className="max-w-[1420px] mx-auto px-4">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-2">
              <div
                className="
                  relative bg-white rounded-2xl
                  px-4 py-4 md:px-6 md:py-5
                  flex items-center gap-3 md:gap-5
                  shadow-sm border border-black/5
                "
              >
                {/* Accent strip */}
                <span className="absolute left-0 top-0 h-full w-[5px] bg-[#F5A623] rounded-l-2xl" />

                {/* Icon */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain"
                />

                {/* Text */}
                <p
                  className="
                    text-sm md:text-[17px]
                    font-semibold text-[#262F6C]
                    whitespace-normal md:whitespace-nowrap
                  "
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
