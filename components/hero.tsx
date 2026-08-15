import { ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Transform Your Space with Expert Vastu Guidance
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              Experience harmonious living and working spaces through scientifically-backed Vastu principles from Dr. Arvind Vats, a trusted Vastu consultant with 20+ years of expertise and 20,000+ successful consultations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 transform hover:scale-105 motion-safe:hover:scale-105"
            >
              Book Your Consultation
            </Link>
          </motion.div>

          <div className="hidden md:block relative">
            <div className="absolute -inset-2.5 -z-10 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl"></div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/villa.jpg"
                alt="Expert Vastu consultant analyzing a property layout"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Why Choose Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">20+ Years Experience</h3>
                    <p className="text-sm text-gray-600">Decades of proven expertise in Vastu Shastra</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">20,000+ Successful Consultations</h3>
                    <p className="text-sm text-gray-600">Extensive track record across residential, commercial, and industrial projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">Non-Demolition Solutions</h3>
                    <p className="text-sm text-gray-600">Effective remedies without structural changes</p>
                  </div>
                </div>
              </div>
            </div>
            
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}