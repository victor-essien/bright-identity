import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gradient-to-br from-orange-50 via-white to-gray-100 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F2937] mb-4 tracking-tight drop-shadow-sm">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're passionate about helping people express themselves through
              custom prints and fashion.
            </p>
          </section>

          {/* Mission Statement */}
          <section className="mb-12 bg-white/90 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-orange-100">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2 text-orange-500">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg">
                At{" "}
                <span className="font-bold text-orange-500">Bright Identity</span>
                , our mission is to empower creativity and personal identity
                through custom-designed apparel and print solutions. We believe
                everyone deserves to wear their ideas.
              </p>
            </div>
            <img
              src="/shirt-templates/hero-shirt.png"
              alt="Our Mission"
              className="w-32 h-32 object-contain rounded-xl shadow hidden md:block bg-orange-50 p-2"
            />
          </section>

          {/* Brand Story */}
          <section className="mb-12 bg-white/90 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-orange-100">
            <img
              src="/shirt-templates/hero-shirt.png"
              alt="Our Story"
              className="w-32 h-32 object-contain rounded-xl shadow hidden md:block bg-orange-50 p-2"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2 text-orange-500">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg">
                Founded in 2024, we started with a simple vision: to offer unique,
                high-quality custom clothing and print materials. What began as a
                small print shop has grown into a trusted brand loved by
                thousands.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-12 bg-white/90 rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">
              What We Value
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-2xl">✨</span> Creativity and
                Self-Expression
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🤝</span> Customer-first Experience
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🌱</span> Sustainable Materials
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">📦</span> Quality & Speed in Delivery
              </li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-[#1F2937] mb-4">
              Join our community of creators!
            </h3>
            <a
              href="/customize"
              className="bg-orange-500 hover:bg-orange-600 text-white py-4 px-10 rounded-2xl text-lg font-bold shadow-lg transition"
            >
              Start Customizing
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
