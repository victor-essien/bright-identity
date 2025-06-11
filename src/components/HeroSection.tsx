
import { Link } from "react-router-dom"; // If using React Router

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-gray-100 text-gray-800 w-full overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-100 rounded-full opacity-40 blur-2xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200 rounded-full opacity-30 blur-2xl z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT - Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:pr-8 space-y-8 justify-center h-full">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
              Print What You Imagine.
              <span className="block text-orange-500 mt-2 animate-pulse">
                Customize Your Style.
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mt-4">
              High-quality custom T-shirts and printed items with your personal
              touch. Pick a size, add text or images, and make it yours!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center md:justify-start">
            <Link to="/customize">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-orange-600 transition w-full sm:w-auto font-semibold text-lg">
                Customize Now
              </button>
            </Link>
            <Link to="/shop">
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-xl shadow hover:bg-orange-100 transition w-full sm:w-auto font-semibold text-lg">
                Shop All
              </button>
            </Link>
          </div>
        </div>
        {/* RIGHT - Image */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <img
              src="/shirt-templates/hero-shirt.png"
              alt="Customized Shirt Mockup"
              className="w-full max-w-xs md:max-w-md object-contain drop-shadow-2xl bg-white rounded-2xl p-4 border-4 border-orange-100"
            />
            {/* Decorative accent */}
            <span className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-400 opacity-20 rounded-full blur-xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
