"use client";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Rajesh Patel",
      city: "Mumbai",
      image: "563d3e1223a5794d8224c1eae03daa7b.jpg",
      review:
        "Latiyal GPS se hamare fleet ki efficiency 30% badh gayi hai. Accurate tracking aur alerts bahut hi help karte hain.",
    },
    {
      name: "Anjali Sharma",
      city: "Delhi",
      image: "563d3e1223a5794d8224c1eae03daa7b.jpg",
      review:
        "Latiyal GPS ne meri gadi mein real-time tracking aur geofencing set up bahut asaan bana diya. Highly recommend!",
    },
    {
      name: "Vikram Singh",
      city: "Jaipur",
      image: "563d3e1223a5794d8224c1eae03daa7b.jpg",
      review:
        "Hamare fleet management ke liye Latiyal GPS best hai. Inki kaam ki quality aur 24/7 support ne hamari sabhi zarurate puri kar di.",
    },
  ];

  return (
    <section className="bg-[#F6F2EA] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#000000]">
          What Our Customers Say
        </h2>

        <p className="text-center text-[#383838] mt-3 mb-14">
          Trusted by vehicle owners, fleet managers & businesses across India.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl
                px-8
                pt-14
                pb-8
                text-center
                relative
                shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]
                transition
                duration-300
              "
            >
              {/* USER IMAGE */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>

              {/* NAME */}
              <h3 className="mt-6 font-bold text-lg text-[#262F6C]">
                {item.name}
              </h3>
              <p className="text-sm text-[#383838]">{item.city}</p>

              {/* STARS */}
              <div className="flex justify-center gap-1 text-[#FCB13B] mt-3">
                ★★★★★
              </div>

              {/* REVIEW */}
              <p className="text-[#383838] text-sm mt-4 leading-relaxed">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          <span className="w-3 h-3 rounded-full bg-[#262F6C]" />
          <span className="w-3 h-3 rounded-full bg-gray-300" />
          <span className="w-3 h-3 rounded-full bg-gray-300" />
        </div>

      </div>
    </section>
  );
}
