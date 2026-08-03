import { ShieldCheck, TrendingUp, Sparkles, Shield, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Why Choose Dr. Arvind Vats for Vastu Consultation?
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <ShieldCheck className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Authentic Expertise</h3>
              <p className="text-sm text-gray-600">
                Deep knowledge of traditional Vastu Shastra combined with modern practical applications
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-sm text-gray-600">
                20,000+ successful consultations across residential, commercial, and industrial projects
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <Sparkles className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Practical Solutions</h3>
              <p className="text-sm text-gray-600">
                Non-demolition remedies that work with your existing structure
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <Shield className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Professional Approach</h3>
              <p className="text-sm text-gray-600">
                Scientific, systematic analysis without superstition or fear-mongering
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <Building2 className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Services</h3>
              <p className="text-sm text-gray-600">
                From homes and offices to factories and commercial complexes
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Trusted Nationwide</h3>
              <p className="text-sm text-gray-600">
                Serving clients across India with both online and on-site consultations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}