'use client'

import Link from 'next/link';
import { Search, AlertCircle, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Page Not Found
                </h1>
                <p className="text-lg text-gray-600">
                  We couldn't find the page you're looking for.
                </p>
              </div>
            </div>

            <div className="max-w-lg space-y-4">
              <p className="text-gray-600">
                The page you requested might have been removed, had its name changed,
                or is temporarily unavailable.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 justify-center">
                <Link
                  href="/"
                  className="flex-1 bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors duration-200 hover:scale-105 motion-safe:hover:scale-105"
                >
                  Return to Homepage
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="flex-1 bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-lg border border-gray-300 text-center transition-colors duration-200 hover:scale-105 motion-safe:hover:scale-105"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}