import React from 'react';
import { Newspaper } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Newspaper className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">DevBlog</h1>
          </Link>
          <nav className="flex space-x-8">
            <Link 
              to="/" 
              className={`${
                location.pathname === '/' 
                  ? 'text-indigo-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <a href="#" className="text-gray-600 hover:text-gray-900">Articles</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}