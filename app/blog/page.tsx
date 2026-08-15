import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <Link
            href="/"
            className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="ml-4 text-3xl font-bold text-green-800">
            Vastu Resources & Insights
          </h1>
        </div>
        <p className="mb-12 text-lg text-gray-600 max-w-3xl">
          Explore our collection of articles, guides, and tips on Vastu Shastra to enhance your living and working spaces.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 bg-gray-100">
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                Vastu Tips for Home
              </div>
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="px-3 py-1 bg-green-50 text-green-800 text-xs font-semibold rounded-full">
                  Residential Vastu
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 hover:text-green-800 transition-colors duration-200">
                5 Essential Vastu Principles for Harmonious Home Living
              </h3>
              <p className="mb-4 text-gray-600 line-clamp-3">
                Discover the fundamental Vastu guidelines that promote positive energy flow, health, and prosperity in your home environment.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
                Read More
                <span className="ml-2">→</span>
              </a>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 bg-gray-100">
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                Commercial Vastu Guide
              </div>
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="px-3 py-1 bg-green-50 text-green-800 text-xs font-semibold rounded-full">
                  Commercial Vastu
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 hover:text-green-800 transition-colors duration-200">
                Optimizing Your Workspace: Vastu Tips for Enhanced Productivity
              </h3>
              <p className="mb-4 text-gray-600 line-clamp-3">
                Learn how Vastu principles can be applied to offices, retail spaces, and commercial establishments to boost success and employee well-being.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
                Read More
                <span className="ml-2">→</span>
              </a>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 bg-gray-100">
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                Remedies Without Demolition
              </div>
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="px-3 py-1 bg-green-50 text-green-800 text-xs font-semibold rounded-full">
                  Remedies
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 hover:text-green-800 transition-colors duration-200">
                Effective Non-Demolition Vastu Remedies for Common Problems
              </h3>
              <p className="mb-4 text-gray-600 line-clamp-3">
                Explore simple yet powerful Vastu corrections that don&apos;t require structural changes, including color therapy, object placement, and lighting adjustments.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
                Read More
                <span className="ml-2">→</span>
              </a>
            </div>
          </article>

          {/* Blog Post 4 */}
          <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 bg-gray-100">
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                Vastu for Apartments
              </div>
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="px-3 py-1 bg-green-50 text-green-800 text-xs font-semibold rounded-full">
                  Apartment Vastu
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 hover:text-green-800 transition-colors duration-200">
                Vastu Guidelines for Apartments and Flats
              </h3>
              <p className="mb-4 text-gray-600 line-clamp-3">
                Specific Vastu considerations for apartment living, including balcony placement, interior layout, and energy flow optimization in multi-story buildings.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
                Read More
                <span className="ml-2">→</span>
              </a>
            </div>
          </article>

          {/* Blog Post 5 */}
          <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 bg-gray-100">
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                Vastu for New Construction
              </div>
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="px-3 py-1 bg-green-50 text-green-800 text-xs font-semibold rounded-full">
                  Construction Vastu
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 hover:text-green-800 transition-colors duration-200">
                Pre-Construction Vastu: Planning Your Dream Home
              </h3>
              <p className="mb-4 text-gray-600 line-clamp-3">
                Essential Vastu considerations before breaking ground, including plot selection, orientation, room placement, and foundation rituals for long-term harmony.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
                Read More
                <span className="ml-2">→</span>
              </a>
            </div>
          </article>

          {/* Blog Post 6 */}
          <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 bg-gray-100">
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                Vastu for Financial Prosperity
              </div>
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="px-3 py-1 bg-green-50 text-green-800 text-xs font-semibold rounded-full">
                  Wealth Vastu
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 hover:text-green-800 transition-colors duration-200">
                Enhancing Financial Flow Through Vastu Principles
              </h3>
              <p className="mb-4 text-gray-600 line-clamp-3">
                Practical Vastu tips for attracting abundance, including wealth corner activation, cash box placement, and business entrance optimization for prosperity.
              </p>
              <a href="#" className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
                Read More
                <span className="ml-2">→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}