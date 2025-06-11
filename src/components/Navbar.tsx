import { Link } from "react-router-dom";
const Navbar = () => (
  <header className="bg-gray-900 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      {/* Logo/Brand */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-extrabold text-orange-500 hover:text-orange-600 transition"
      >
        <span className="bg-orange-100 rounded-full px-2 py-1 text-orange-500">
          BI
        </span>
        <span className="hidden sm:inline">Bright Identity</span>
      </Link>
      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-gray-400 font-medium">
        <Link to="/" className="hover:text-orange-500 transition">
          Home
        </Link>
        <Link to="/shop" className="hover:text-orange-500 transition">
          Shop
        </Link>
        <Link to="/customize" className="hover:text-orange-500 transition">
          Customize
        </Link>
        <Link to="/gallery" className="hover:text-orange-500 transition">
          Gallery
        </Link>
        <Link to="/about" className="hover:text-orange-500 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-orange-500 transition">
          Contact
        </Link>
      </nav>
      {/* Cart Icon */}
      <Link
        to="/checkout"
        className="relative text-orange-500 hover:text-orange-600 text-2xl transition"
      >
        <span role="img" aria-label="cart">
          🛒
        </span>
        {/* Example badge for cart items */}
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5 shadow">
          2
        </span>
      </Link>
      {/* Mobile Menu Button (optional for future) */}
      {/* <button className="md:hidden p-2 rounded hover:bg-orange-100 transition">
        <span className="material-icons">menu</span>
      </button> */}
    </div>
    {/* Mobile Nav (optional for future) */}
    {/* <div className="md:hidden px-6 pb-2 flex flex-col gap-2 bg-white shadow">
      ...mobile links...
    </div> */}
  </header>
);
export default Navbar;
