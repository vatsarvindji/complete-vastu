import { ShieldCheck, Users, Clock, UsersRound } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustIndicators() {
  return (
    <>
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Trusted by Thousands Across India
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <ShieldCheck className="h-10 w-10 text-green-600" />
              <h3 className="font-semibold text-gray-900">20+ Years Experience</h3>
              <p className="text-sm text-gray-600">
                Decades of proven expertise in Vastu Shastra principles
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <UsersRound className="h-10 w-10 text-green-600" />
              <h3 className="font-semibold text-gray-900">20,000+ Consultations</h3>
              <p className="text-sm text-gray-600">
                Successfully completed residential, commercial, and industrial projects
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Users className="h-10 w-10 text-green-600" />
              <h3 className="font-semibold text-gray-900">Nationwide Presence</h3>
              <p className="text-sm text-gray-600">
                Serving clients across India with both online and on-site consultations
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Clock className="h-10 w-10 text-green-600" />
              <h3 className="font-semibold text-gray-900">Non-Demolition Solutions</h3>
              <p className="text-sm text-gray-600">
                Effective remedies without requiring structural changes to your property
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}