import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingBag className="w-8 h-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-800">QuickStore</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-indigo-600 transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/admin-login" className="text-gray-600 hover:text-indigo-600 transition duration-300">Admin Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;