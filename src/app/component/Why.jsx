"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Why() {
  const settings = {
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 5, // default large screen
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // medium-large
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // small screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 360, // very small
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <section className="bg-[#F6F2EA] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          <SliderItem img="imgi_110_4c15a9b76fb269e21b445715a80a78ab.png" title="100% Uptime" />
          <SliderItem img="imgi_62_3aba2def1b9ec0363802a4b88c58e489.png" title="Live Tracking" />
          <SliderItem img="imgi_93_88356419c717c2c19e4c0dab71e21a1c.png" title="Easy Setup" />
          <SliderItem img="imgi_140_9c27a963b2709df487d81ab4bc08d007.png" title="Secure Data" />
          <SliderItem img="imgi_110_4c15a9b76fb269e21b445715a80a78ab.png" title="99.9% Uptime" />
          <SliderItem img="imgi_62_3aba2def1b9ec0363802a4b88c58e489.png" title="Live Tracking" />
          <SliderItem img="imgi_110_4c15a9b76fb269e21b445715a80a78ab.png" title="100% Uptime" />
          <SliderItem img="imgi_62_3aba2def1b9ec0363802a4b88c58e489.png" title="Live Tracking" />
          <SliderItem img="imgi_93_88356419c717c2c19e4c0dab71e21a1c.png" title="Easy Setup" />
          <SliderItem img="imgi_140_9c27a963b2709df487d81ab4bc08d007.png" title="Secure Data" />
          <SliderItem img="imgi_110_4c15a9b76fb269e21b445715a80a78ab.png" title="99.9% Uptime" />
          <SliderItem img="imgi_62_3aba2def1b9ec0363802a4b88c58e489.png" title="Live Tracking" />
        </Slider>
      </div>
    </section>
  );
}

/* SLIDE ITEM */
function SliderItem({ img, title }) {
  return (
    <div className="slick-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
