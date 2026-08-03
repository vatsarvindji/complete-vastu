import { Users, Briefcase, Brain, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutDoctor() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-80 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-xl -z-10" />
              <img
                src="/about-doctor.jpg"
                alt="Dr. Arvind Vats - Expert Vastu Consultant"
                className="rounded-xl shadow-xl w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Dr. Arvind Vats - Your Trusted Vastu Expert
              </h2>
              <p className="text-gray-600 mb-6">
                With over 20 years of dedicated practice and more than 20,000 successful consultations, Dr. Arvind Vats has established himself as one of India's most trusted Vastu consultants. His approach combines traditional Vastu Shastra wisdom with practical, scientific applications suitable for modern living and working spaces.
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
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Nationwide Availability</h3>
                    <p className="text-sm text-gray-600">
                      Serving clients across India with both online and on-site consultations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Specializations</h3>
                    <p className="text-sm text-gray-600">
                      Residential, Commercial, Industrial Vastu & Non-Demolition Remedies
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-block bg-green-800 hover:bg-green-900 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 hover:scale-105 motion-safe:hover:scale-105"
              >
                Learn More About Dr. Arvind Vats
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}