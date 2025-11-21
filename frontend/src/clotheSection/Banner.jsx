import React from "react";


function Banner() {
  return (
    <>
      <section
        className="w-[1180px] h-[120px] mx-auto mt-5 mb-[30px] rounded flex items-center justify-between px-8 text-white"
        style={{
          background: "linear-gradient(115deg, #1E80FF 0%, #1E80FF 58%, #005ADE 58%, #005ADE 100%)",
        }}
      >
        {/* Left Text */}
        <div>
          <h2 className="text-xl font-semibold">
            Super discount on more than 100 USD
          </h2>
          <p className="text-sm opacity-80">
            Have you ever finally just write dummy info
          </p>
        </div>

        {/* Button */}
        <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600">
          Shop now
        </button>
      </section>
    </>
  );
}

export default Banner;
