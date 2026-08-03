import { Home, Briefcase, Factory, LandPlot, Store, Headset, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Our Comprehensive Vastu Services
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <Home className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Residential Vastu</h3>
                  <p className="text-sm text-gray-600">
                    Homes, apartments, villas, and living spaces
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• New home construction planning</li>
                <li>• Existing home assessment & remedies</li>
                <li>• Apartment & flat Vastu consultation</li>
                <li>• Villa and independent house consultation</li>
                <li>• Interior layout optimization</li>
              </ul>
              <Link href="/services#residential" className="mt-4 inline-block text-sm font-medium text-green-600 hover:text-green-800">
                Learn More →
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <Briefcase className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Commercial Vastu</h3>
                  <p className="text-sm text-gray-600">
                    Offices, shops, showrooms, and workspaces
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Office space optimization</li>
                <li>• Retail shop & showroom Vastu</li>
                <li>• Co-working space consultation</li>
                <li>• Commercial building design consultation</li>
                <li>• Workspace productivity enhancement</li>
              </ul>
              <Link href="/services#commercial" className="mt-4 inline-block text-sm font-medium text-green-600 hover:text-green-800">
                Learn More →
              </Link>
            </div>

            {/* Industrial */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <Factory className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Industrial Vastu</h3>
                  <p className="text-sm text-gray-600">
                    Factories, warehouses, and industrial plants
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Factory layout optimization</li>
                <li>• Warehouse & storage facility Vastu</li>
                <li>• Industrial plant layout consultation</li>
                <li>• Production flow optimization</li>
                <li>• Worker productivity enhancement</li>
              </ul>
              <Link href="/services#industrial" className="mt-4 inline-block text-sm font-medium text-green-600 hover:text-green-800">
                Learn More →
              </Link>
            </div>

            {/* Plots & Land */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <LandPlot className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Plot & Land Selection</h3>
                  <p className="text-sm text-gray-600">
                    Land evaluation and plot selection guidance
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Plot selection for construction</li>
                <li>• Land suitability assessment</li>
                <li>• Plot shape and size evaluation</li>
                <li>• Surrounding environment analysis</li>
                <li>• Direction and slope analysis</li>
              </ul>
              <Link href="/services#plots" className="mt-4 inline-block text-sm font-medium text-green-600 hover:text-green-800">
                Learn More →
              </Link>
            </div>

            {/* Commercial Complexes */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Commercial Complexes</h3>
                  <p className="text-sm text-gray-600">
                    Malls, IT parks, and business centers
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Shopping mall Vastu consultation</li>
                <li>• IT park & tech park planning</li>
                <li>• Business center layout optimization</li>
                <li>• Mixed-use development consultation</li>
                <li>• Tenant mix optimization for commercial success</li>
              </ul>
              <Link href="/services#commercial-complexes" className="mt-4 inline-block text-sm font-medium text-green-600 hover:text-green-800">
                Learn More →
              </Link>
            </div>

            {/* Retail & Hospitality */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <Store className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Retail & Hospitality</h3>
                  <p className="text-sm text-gray-600">
                    Hotels, restaurants, and retail establishments
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Hotel & resort Vastu consultation</li>
                <li>• Restaurant & cafe layout optimization</li>
                <li>• Retail store layout for maximum sales</li>
                <li>• Spa & wellness center Vastu</li>
                <li>• Entertainment venue consultation</li>
              </ul>
              <Link href="/services#hospitality" className="mt-4 inline-block text-sm font-medium text-green-600 hover:text-green-800">
                Learn More →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}