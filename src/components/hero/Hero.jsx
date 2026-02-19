import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { slides } from "../../data/heroData";
const Hero = () => {
  return (
    <section
      className="relative min-h-[70vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('./images/bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold  leading-tight mb-4">
              Build. <span className="text-[var(--primary)]">Protect.</span>{" "}
              Grow.
            </h1>
            <p className="text-base sm:text-lg md:text-xl  text-gray-200 max-w-xl mx-auto lg:mx-0 mb-6">
              Your Trusted Partner for Business Buying, Selling & Trademark
              Solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="px-5 py-3 rounded-xl border border-white/30 hover:bg-[var(--primary)] transition text-sm sm:text-base">
                Buy a Business
              </button>
              <button className="px-5 py-3 rounded-xl border border-white/30 hover:bg-[var(--primary)] transition text-sm sm:text-base">
                Sell a Business
              </button>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="h-full"
            >
              {slides.map((item, index) => {
                const Icon = item.icon;

                return (
                  <SwiperSlide key={index}>
                    <div className="text-white text-center lg:text-left">
                      <div className="w-14 h-14 flex items-center justify-center mx-auto md:mx-0 mb-1 sm:mb-2 rounded-xl bg-white/10 text-[var(--primary)]">
                        <Icon className="w-7 h-7" />
                      </div>

                      <h3 className="text-lg  sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
