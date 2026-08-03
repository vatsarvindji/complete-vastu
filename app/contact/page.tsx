'use client'

import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Get in touch with Dr. Arvind Vats for expert Vastu consultation.
              We're here to help you create harmonious living and working spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Our Location</h3>
                      <p className="text-sm text-gray-600">
                        Delhi, India<br />
                        Serving clients across India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-sm text-gray-600">
                        <a href="tel:+919876543210" className="text-green-800 hover:underline">
                          +91 98765 43210
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-sm text-gray-600">
                        <a href="mailto:info@completevastu.com" className="text-green-800 hover:underline">
                          info@completevastu.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Availability</h3>
                      <p className="text-sm text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM IST<br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h2>
                <p className="mb-6 text-gray-600">
                  We'll respond to your inquiry within 24 hours.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How Can We Help You?
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select Service</option>
                      <option value="residential">Residential Vastu</option>
                      <option value="commercial">Commercial Vastu</option>
                      <option value="industrial">Industrial Vastu</option>
                      <option value="property-selection">Plot/Land Selection</option>
                      <option value="remedies">Non-demolition Remedies</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 hover:scale-105 motion-safe:hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Quick Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Book a Consultation
                </h3>
                <p className="mb-6 text-gray-600">
                  Schedule your personalized Vastu consultation with Dr. Arvind Vats
                </p>
                <Link
                  href="/"
                  className="w-full bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors duration-200 hover:scale-105 motion-safe:hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  <span>Book Your Consultation Now</span>
                </Link>
                <p className="mt-4 text-xs text-gray-500">
                  Available for both online and on-site consultations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}