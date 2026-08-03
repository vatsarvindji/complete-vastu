'use client'

import Link from 'next/link';
import { Home, Briefcase, Factory, Building, LandPlot, Store, Users, ShieldCheck, Brain, Sparkles, ArrowRight, CircleDot } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                Our Vastu Services
              </h1>
              <p className="text-lg text-gray-600">
                Comprehensive Vastu consultancy services for residential, commercial, and industrial properties,
                specializing in non-demolition solutions that work with your existing structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Service Categories
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Residential */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <Home className="h-8 w-8 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Residential Vastu</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Harmonize living spaces for health, happiness, and prosperity
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• New home construction planning</li>
                  <li>• Existing home assessment & remedies</li>
                  <li>• Apartment & flat Vastu consultation</li>
                  <li>• Villa and independent house consultation</li>
                  <li>• Interior layout optimization</li>
                  <li>• Bedroom, kitchen, and bathroom placement guidance</li>
                </ul>
                <Link
                  href="/services#residential"
                  className="mt-6 inline-block text-sm font-medium text-green-600 hover:text-green-800 flex items-center space-x-2"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Commercial */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <Briefcase className="h-8 w-8 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Commercial Vastu</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Optimize workspaces for productivity, prosperity, and success
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Office space optimization</li>
                  <li>• Retail shop & showroom Vastu</li>
                  <li>• Co-working space consultation</li>
                  <li>• Commercial building design consultation</li>
                  <li>• Workspace productivity enhancement</li>
                  <li>• Client attraction and retention strategies</li>
                </ul>
                <Link
                  href="/services#commercial"
                  className="mt-6 inline-block text-sm font-medium text-green-600 hover:text-green-800 flex items-center space-x-2"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Industrial */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <Factory className="h-8 w-8 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Industrial Vastu</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Enhance productivity, safety, and efficiency in industrial settings
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Factory layout optimization</li>
                  <li>• Warehouse & storage facility Vastu</li>
                  <li>• Industrial plant layout consultation</li>
                  <li>• Production flow optimization</li>
                  <li>• Worker productivity enhancement</li>
                  <li>• Safety and accident prevention measures</li>
                </ul>
                <Link
                  href="/services#industrial"
                  className="mt-6 inline-block text-sm font-medium text-green-600 hover:text-green-800 flex items-center space-x-2"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Plots & Land */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <LandPlot className="h-8 w-8 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Plot & Land Selection</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Choose the perfect land for your dream project
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Plot selection for construction</li>
                  <li>• Land suitability assessment</li>
                  <li>• Plot shape and size evaluation</li>
                  <li>• Surrounding environment analysis</li>
                  <li>• Direction and slope analysis</li>
                  <li>• Road alignment and accessibility</li>
                </ul>
                <Link
                  href="/services#plots"
                  className="mt-6 inline-block text-sm font-medium text-green-600 hover:text-green-800 flex items-center space-x-2"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Commercial Complexes */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <Building className="h-8 w-8 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Commercial Complexes</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Optimize malls, IT parks, and business centers for success
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Shopping mall Vastu consultation</li>
                  <li>• IT park & tech park planning</li>
                  <li>• Business center layout optimization</li>
                  <li>• Mixed-use development consultation</li>
                  <li>• Tenant mix optimization for commercial success</li>
                  <li>• Common area and amenity placement</li>
                </ul>
                <Link
                  href="/services#commercial-complexes"
                  className="mt-6 inline-block text-sm font-medium text-green-600 hover:text-green-800 flex items-center space-x-2"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Retail & Hospitality */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <Store className="h-8 w-8 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Retail & Hospitality</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Enhance customer experience and business success in hospitality and retail
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Hotel & resort Vastu consultation</li>
                  <li>• Restaurant & cafe layout optimization</li>
                  <li>• Retail store layout for maximum sales</li>
                  <li>• Spa & wellness center Vastu</li>
                  <li>• Entertainment venue consultation</li>
                  <li>• Guest experience and satisfaction optimization</li>
                </ul>
                <Link
                  href="/services#hospitality"
                  className="mt-6 inline-block text-sm font-medium text-green-600 hover:text-green-800 flex items-center space-x-2"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Non-Demolition Remedies */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <ShieldCheck className="h-8 w-8 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Non-Demolition Remedies</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Effective solutions without structural changes
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Color therapy and paint recommendations</li>
                  <li>• Furniture rearrangement and placement</li>
                  <li>• Use of specific materials and elements</li>
                  <li>• Placement of objects and symbols</li>
                  <li>• Lighting and ventilation adjustments</li>
                  <li>• Entrance and entrance area enhancements</li>
                </ul>
                <Link
                  href="/services#remedies"
                  className="mt-6 inline-block text-sm font-medium text-green-600 hover:text-green-800 flex items-center space-x-2"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Residential Section */}
          <section id="residential" className="mb-20">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Residential Vastu Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Our Residential Vastu Approach
                </h3>
                <p className="mb-6 text-gray-600">
                  We analyze your living space to create harmonious environments that support health,
                  relationships, and prosperity. Our recommendations focus on optimizing room placements,
                  entrance directions, and energy flow without requiring major structural changes.
                </p>
                <p className="mb-6 text-gray-600">
                  Whether you're building a new home, renovating an existing space, or seeking to improve
                  your current living situation, our residential Vastu services can help create a more
                  balanced and positive home environment.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Key Residential Services
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">New home construction planning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Existing home assessment & remedies</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Apartment & flat Vastu consultation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Interior layout optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Bedroom placement guidance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Kitchen and bathroom positioning</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Commercial Section */}
          <section id="commercial" className="mb-20">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Commercial Vastu Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Our Commercial Vastu Approach
                </h3>
                <p className="mb-6 text-gray-600">
                  We optimize commercial spaces to enhance productivity, attract customers,
                  and improve business performance. Our recommendations focus on layout,
                  entrance placement, and energy flow to create environments conducive to success.
                </p>
                <p className="mb-6 text-gray-600">
                  From offices and retail shops to co-working spaces and commercial buildings,
                  our Vastu expertise helps businesses thrive through optimized spatial arrangements.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Key Commercial Services
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Office space optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Retail shop & showroom Vastu</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Co-working space consultation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Workspace productivity enhancement</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Client attraction and retention strategies</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Workspace layout for team collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industrial Section */}
          <section id="industrial" className="mb-20">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Industrial Vastu Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Our Industrial Vastu Approach
                </h3>
                <p className="mb-6 text-gray-600">
                  We optimize industrial spaces to enhance productivity, safety, and operational efficiency.
                  Our recommendations focus on layout, workflow, and energy flow to create environments
                  conducive to manufacturing excellence and worker well-being.
                </p>
                <p className="mb-6 text-gray-600">
                  From factories and warehouses to industrial plants and manufacturing facilities,
                  our Vastu expertise helps industries thrive through optimized spatial arrangements.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Key Industrial Services
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Factory layout optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Warehouse & storage facility Vastu</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Industrial plant layout consultation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Production flow optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Worker productivity enhancement</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CircleDot className="h-2.5 w-2.5 text-green-600 mt-1.5" />
                    <span className="text-sm text-gray-600">Safety and accident prevention measures</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}