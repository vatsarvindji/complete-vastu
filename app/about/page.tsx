'use client'

import Link from 'next/link';
import { Users, Briefcase, Brain, ShieldCheck, Clock, MapPin, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                About Dr. Arvind Vats
              </h1>
              <p className="text-lg text-gray-600">
                With over 20 years of dedicated practice and more than 20,000 successful consultations,
                Dr. Arvind Vats has established himself as one of India's most trusted Vastu consultants.
                His approach combines traditional Vastu Shastra wisdom with practical, scientific applications
                suitable for modern living and working spaces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Professional Background
                  </h2>
                  <p className="text-gray-600">
                    Dr. Arvind Vats began his journey in Vastu Shastra over two decades ago,
                    combining traditional knowledge with modern architectural principles to create
                    practical solutions for contemporary living and working spaces.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">20+ Years of Experience</h3>
                        <p className="text-sm text-gray-600">
                          Decades of dedicated practice in Vastu Shastra consultation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Briefcase className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">20,000+ Successful Consultations</h3>
                        <p className="text-sm text-gray-600">
                          Extensive track record across residential, commercial, and industrial projects
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Brain className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">Scientific & Practical Approach</h3>
                        <p className="text-sm text-gray-600">
                          Focus on logic-based solutions rather than superstition or fear-mongering
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">Non-Demolition Solutions</h3>
                        <p className="text-sm text-gray-600">
                          Effective remedies that work with your existing structure
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      Philosophy & Approach
                    </h2>
                    <p className="text-gray-600">
                      Dr. Vats believes that Vastu Shastra is not about superstition or fear,
                      but about creating harmonious living and working environments through
                      scientific principles of direction, placement, and energy flow.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Heart className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Holistic Well-being</h3>
                          <p className="text-sm text-gray-600">
                            Focus on overall health, happiness, and prosperity of occupants
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Practical Solutions</h3>
                          <p className="text-sm text-gray-600">
                            Remedies that work with existing structures and modern lifestyles
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Personalized Approach</h3>
                          <p className="text-sm text-gray-600">
                            Customized solutions based on individual needs and property characteristics
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Sparkles className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900">Ethical Practice</h3>
                          <p className="text-sm text-gray-600">
                            Transparent consultations with clear explanations and realistic expectations
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
                  Comprehensive Vastu Services
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
                        <Users className="h-6 w-6 text-green-600 mt-0.5" />
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
                      </ul>
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
                      </ul>
                    </div>

                    {/* Industrial */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start space-x-4 mb-4">
                        <MapPin className="h-6 w-6 text-green-600 mt-0.5" />
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
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
                  What Clients Say
                </h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Testimonial 1 */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <p className="text-gray-600 italic mb-4">
                        "After consulting Dr. Arvind Vats for our office space, we saw a 40% increase in productivity within three months. His recommendations were practical and easy to implement."
                      </p>
                      <div className="flex items-start space-x-3">
                        <Users className="h-4 w-4 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Rajesh Sharma, Delhi</h4>
                          <p className="text-sm text-gray-600">Business Owner</p>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <p className="text-gray-600 italic mb-4">
                        "We were facing constant health issues in our new home. Dr. Vats identified the Vastu defects and suggested simple remedies. Within weeks, our health improved significantly."
                      </p>
                      <div className="flex items-start space-x-3">
                        <Users className="h-4 w-4 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Priya Patel, Mumbai</h4>
                          <p className="text-sm text-gray-600">Homemaker</p>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <p className="text-gray-600 italic mb-4">
                        "Our retail shop was struggling with sales. After following Dr. Vats' Vastu recommendations for layout and cash counter placement, our sales increased by 60%."
                      </p>
                      <div className="flex items-start space-x-3">
                        <Users className="h-4 w-4 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">Amit Kumar, Bangalore</h4>
                          <p className="text-sm text-gray-600">Shop Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="mt-12 text-center">
                  <Link
                    href="/testimonials"
                    className="inline-block bg-green-800 hover:bg-green-900 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 hover:scale-105 motion-safe:hover:scale-105"
                  >
                    Read More Testimonials
                  </Link>
                </div>
              </div>
            </section>
          </>
        );
      }