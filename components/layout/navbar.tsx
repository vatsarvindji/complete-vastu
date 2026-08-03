'use client'

import Link from 'next/link';
import { Menu, Moon, Sun, LayoutDashboard, Users, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-800">Complete Vastu Solution</span>
          </Link>
        </div>
        <div className="hidden md:block md:flex-1 md:justify-center">
          <nav className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-800 transition-colors duration-200">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-green-800 transition-colors duration-200">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-green-800 transition-colors duration-200">Services</Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-green-800 transition-colors duration-200">Testimonials</Link>
            <Link href="/faq" className="text-gray-700 hover:text-green-800 transition-colors duration-200">FAQ</Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-800 transition-colors duration-200">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="bg-green-800 hover:bg-green-900 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Book Consultation
          </Link>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="mt-4 space-y-2">
          <Link href="/" className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Home</Link>
          <Link href="/about" className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">About</Link>
          <Link href="/services" className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Services</Link>
          <Link href="/testimonials" className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Testimonials</Link>
          <Link href="/faq" className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">FAQ</Link>
          <Link href="/contact" className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">Contact</Link>
          <Link
            href="/contact"
            className="block py-2 pl-3 pr-4 text-base font-medium text-white bg-green-800 hover:bg-green-900 rounded-md"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </nav>
  );
}