import { TrendingUp, ShieldCheck, Users, Heart, Brain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Benefits of Proper Vastu Consultation
        </h2>
        <p className="mb-16 text-center text-gray-600 max-w-2xl mx-auto">
          Experience transformative improvements in various aspects of life and business
          through scientifically-applied Vastu principles.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Prosperity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-4">
                <TrendingUp className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Enhanced Financial Prosperity</h3>
                  <p className="text-sm text-gray-600">
                    Improved income flow, better savings, and increased business profitability
                  </p>
                </div>
              </div>
            </div>

            {/* Health & Well-being */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-4">
                <Heart className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Improved Health & Well-being</h3>
                  <p className="text-sm text-gray-600">
                    Better sleep quality, reduced stress, and enhanced vitality
                  </p>
                </div>
              </div>
            </div>

            {/* Harmonious Relationships */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-4">
                <Users className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Harmonious Relationships</h3>
                  <p className="text-sm text-gray-600">
                    Improved family harmony, better relationships, and reduced conflicts
                  </p>
                </div>
              </div>
            </div>

            {/* Career Growth */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-4">
                <Brain className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Career Growth & Success</h3>
                  <p className="text-sm text-gray-600">
                    Better job opportunities, promotions, and professional recognition
                  </p>
                </div>
              </div>
            </div>

            {/* Business Growth */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-4">
                <ShieldCheck className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Growth & Stability</h3>
                  <p className="text-sm text-gray-600">
                    Increased sales, better customer relations, and operational efficiency
                  </p>
                </div>
              </div>
            </div>

            {/* Peace & Prosperity */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-4">
                <Sparkles className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Overall Peace & Prosperity</h3>
                  <p className="text-sm text-gray-600">
                    Greater sense of well-being, positivity, and life satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}