import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative h-screen overflow-hidden">
       
        <div
          className="absolute inset-0 bg-cover bg-center animate-slowZoom"
          style={{
            backgroundImage:
              "url('https://cdn.create.vista.com/api/media/medium/371019258/stock-photo-lots-of-childrens-toy-cars-for-child-development-games-on-a-yellow-background?token=')",
          }}
        ></div>

      
        <div className="absolute inset-0 bg-black/15"></div>

      
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-4xl px-5 py-2 text-center max-w-2xl mx-4 animate-fadeInUp shadow-lg">
            <h1 className="text-4xl sm:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg mb-5">
              PLAYTOPIA
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-violet-200 mb-6">
              Welcome to Playtopia <br /> where every toy sparks imagination!
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

     <section className="px-6 sm:px-12 lg:px-24 py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-10">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
      About 
    </span>
  </h1>

  <div className="max-w-5xl mx-auto">
    <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 text-justify mb-6">
      Welcome to <span className="font-bold text-yellow-600">Playtopia</span>,
      your premium destination for toy vehicles that redefine the joy of play
      and collecting. We specialize exclusively in{" "}
      <span className="text-orange-600 font-semibold">
        high-quality miniature vehicles
      </span>{" "}
      designed for children, enthusiasts, and collectors who appreciate detail,
      durability, and creativity.
    </p>

    <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 text-justify mb-6">
      We believe vehicles are more than just toys – they are{" "}
      <span className="italic text-yellow-700">symbols of adventure</span>,
      imagination, and limitless journeys. Every product in our collection is
      carefully handpicked to ensure{" "}
      <span className="text-orange-600 font-semibold">exceptional craftsmanship</span>, 
      realistic design, and safe play.
    </p>

    <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 text-justify">
      Our goal is to provide not just toys, but{" "}
      <span className="font-bold text-yellow-700">premium experiences</span>{" "}
      that inspire young racers, budding engineers, and passionate collectors
      alike. With a strong commitment to quality, authenticity, and customer
      satisfaction, Playtopia is more than just a shop – it’s a{" "}
      <span className="underline decoration-yellow-500 font-semibold">
        community
      </span>{" "}
      for those who love the thrill of wheels, wings, and engines.
    </p>
  </div>
</section>

    </>
  );
}

export default Home;
