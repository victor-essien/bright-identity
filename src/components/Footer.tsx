
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/customize">Customize</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact Us</h3>
          <p className="text-gray-300">
            📍 123 Print Avenue, Creativity City<br />
            📞 +123 456 7890<br />
            📧 support@brightidentitty.com
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">Follow Us</h3>
          <div className="flex gap-4 text-2xl text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="mailto:support@brightidentitty.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Bright Identitty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
