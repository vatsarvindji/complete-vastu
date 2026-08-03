import { Zap, ClipboardList, MapPin, BarChart2, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ConsultationProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Our Consultation Process
        </h2>
        <p className="mb-16 text-center text-gray-600 max-w-2xl mx-auto">
          A systematic, transparent approach to Vastu consultation ensuring clarity and results.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-8">
            {/* Initial Consultation */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">1. Initial Consultation</h3>
                <p className="text-gray-600 mb-3">
                  We begin with a detailed discussion to understand your concerns, goals, and specific requirements for your space.
                </p>
                <Link href="/contact" className="text-sm font-medium text-green-600 hover:text-green-800">
                  Schedule Consultation →
                </Link>
              </div>
            </div>

            {/* Site Analysis */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                <ClipboardList className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">2. Detailed Site Analysis</h3>
                <p className="text-gray-600 mb-3">
                  Comprehensive analysis of your property including plot orientation, entrance directions, room placements, and surrounding environment.
                </p>
              </div>
            </div>

            {/* Customized Plan */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">3. Customized Vastu Plan</h3>
                <p className="text-gray-600 mb-3">
                  Personalized recommendations tailored to your specific needs, including structural suggestions, room usage recommendations, and remedial measures.
                </p>
              </div>
            </div>

            {/* Remedial Solutions */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                <BarChart2 className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">4. Remedial Solutions</h3>
                <p className="text-gray-600 mb-3">
                  Practical, non-demolition solutions using elements like colors, materials, placements, and adjustments to balance energies without structural changes.
                </p>
              </div>
            </div>

            {/* Implementation Support */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">5. Implementation Support</h3>
                <p className="text-gray-600 mb-3">
                  Guidance throughout the implementation process to ensure recommendations are correctly applied for maximum effectiveness.
                </p>
              </div>
            </div>

            {/* Follow-up */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">6. Follow-up & Support</h3>
                <p className="text-gray-600 mb-3">
                  Post-implementation consultation to assess results and make any necessary adjustments for optimal outcomes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}