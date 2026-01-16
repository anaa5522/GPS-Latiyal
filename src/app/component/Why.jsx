"use client";

export default function Our() {
  return (
    <section className="bg-[#F6F2EA] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* SINGLE LINE CONTAINER */}
        <div className="flex gap-6 overflow-x-auto flex-nowrap scrollbar-hide">

          {/* ITEM 1 */}
          <div className="min-w-[300px] bg-white border-l-4 border-[#FCB13B] rounded-xl p-4 flex items-center gap-4">
            <img
              src="imgi_110_4c15a9b76fb269e21b445715a80a78ab.png"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-bold text-[#000000]">99.9% Uptime</h3>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="min-w-[300px] bg-white border-l-4 border-[#FCB13B] rounded-xl p-4 flex items-center gap-4">
            <img
              src="imgi_62_3aba2def1b9ec0363802a4b88c58e489.png"
              className="w-15 h-15 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-bold text-[#000000]">Live Tracking</h3>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="min-w-[300px] bg-white border-l-4 border-[#FCB13B] rounded-xl p-4 flex items-center gap-4">
            <img
              src="imgi_93_88356419c717c2c19e4c0dab71e21a1c.png"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-bold text-[#000000]">Easy Setup</h3>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="min-w-[300px] bg-white border-l-4 border-[#FCB13B] rounded-xl p-4 flex items-center gap-4">
            <img
              src="imgi_140_9c27a963b2709df487d81ab4bc08d007.png"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-bold text-[#000000]">Secure Data</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
