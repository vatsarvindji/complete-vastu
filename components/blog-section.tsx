
'use client';

export default function BlogSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold text-green-800">
            Vastu Resources & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of articles, guides, and tips on Vastu Shastra to enhance your living and working spaces.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="h-48 bg-gray-100">
              {/* Placeholder image */}
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
        </div>

        <div className="mt-12 text-center">
          <a href="/blog" className="inline-block bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 hover:scale-105 motion-safe:hover:scale-105">
            View All Resources
          </a>
        </div>
      </div>
    </section>
  );
}