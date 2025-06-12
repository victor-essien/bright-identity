

const Promise = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our <span className="text-orange-500">Brand Promise</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-semibold text-orange-500">Bright Identitty</span>, we’re committed to delivering
          not just products, but pride. Every item you customize with us is crafted with care, quality, and creativity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality You Can Feel</h3>
            <p className="text-sm text-gray-600">Our products are made with premium materials and expert printing techniques to ensure a perfect finish every time.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized for You</h3>
            <p className="text-sm text-gray-600">From t-shirts to mugs, everything can be uniquely customized to match your personality or purpose.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Delivered with Care</h3>
            <p className="text-sm text-gray-600">We handle every order with speed and care to ensure it arrives on time and in perfect condition.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;
