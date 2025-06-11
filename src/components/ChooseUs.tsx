
import { FaTruck, FaTshirt, FaTags, FaStar } from 'react-icons/fa';

const ChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Why Choose <span className="text-orange-500">Us</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Fast Delivery */}
          <div className="flex flex-col items-center">
            <FaTruck className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Get your custom prints delivered quickly and reliably.</p>
          </div>

          {/* High-Quality Print */}
          <div className="flex flex-col items-center">
            <FaStar className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">High-Quality Print</h3>
            <p className="text-gray-600 text-sm">Sharp, vibrant prints that last wash after wash.</p>
          </div>

          {/* Bulk Discount */}
          <div className="flex flex-col items-center">
            <FaTags className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Bulk Discount</h3>
            <p className="text-gray-600 text-sm">Save more when ordering in large quantities.</p>
          </div>

          {/* 100% Cotton */}
          <div className="flex flex-col items-center">
            <FaTshirt className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Cotton</h3>
            <p className="text-gray-600 text-sm">Soft, breathable fabric for all-day comfort.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
