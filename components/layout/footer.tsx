'use client'

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <>
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Complete Vastu Solution</h3>
            <p className="mb-4">
              Expert Vastu consultancy services by Dr. Arvind Vats with 20+ years of experience and 20,000+ successful consultations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <a href="#" className="text-white font-semibold mb-4">Services</a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <MapPin className="h-5 w-5" />
            <span className="ml-2">Delhi, India</span>
          </a>
        </div>
        <div className="mt-4 flex space-x-3">
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Phone className="h-5 w-5" />
            <span className="ml-2">+91 98765 43210</span>
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Mail className="h-5 w-5" />
            <span className="ml-2">info@completevastu.com</span>
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Complete Vastu Solution. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
    </>
  );
}