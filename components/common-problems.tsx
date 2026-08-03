import { AlertTriangle, TrendingDown, Sliders, Home, Briefcase, Factory, LandPlot, Store } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CommonProblems() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Common Vastu Challenges We Solve
        </h2>
        <p className="mb-16 text-center text-gray-600 max-w-2xl mx-auto">
          Dr. Arvind Vats has helped thousands of clients overcome these common Vastu-related challenges
          through practical, non-demolition solutions.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Financial Issues */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Financial Problems</h3>
                  <p className="text-sm text-gray-600">
                    Unexplained losses, blocked funds, or financial instability
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Many financial issues can be traced to Vastu imbalances in the workplace or home.
                Proper arrangement of wealth corners, entrance placement, and water elements
                can significantly improve financial flow.
              </p>
            </div>

            {/* Health Problems */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <TrendingDown className="h-6 w-6 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Health Issues</h3>
                  <p className="text-sm text-gray-600">
                    Unexplained ailments, stress, or chronic health problems
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Vastu defects in bedroom placement, bathroom locations, or kitchen positioning
                can affect health and well-being. Simple remedies can create healing environments.
              </p>
            </div>

            {/* Relationship Issues */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <Sliders className="h-6 w-6 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Relationship Problems</h3>
                  <p className="text-sm text-gray-600">
                    Family conflicts, marital issues, or lack of harmony
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                The placement of bedrooms, living areas, and entrance directions significantly
                impacts family harmony and relationships. Vastu corrections can restore peace.
              </p>
            </div>

            {/* Career Stagnation */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <Home className="h-6 w-6 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Career Stagnation</h3>
                  <p className="text-sm text-gray-600">
                    Lack of growth, promotions, or job satisfaction
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Office desk placement, office location within building, and entrance directions
                affect career growth. Proper Vastu can remove obstacles to professional success.
              </p>
            </div>

            {/* Business Losses */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <Briefcase className="h-6 w-6 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Losses</h3>
                  <p className="text-sm text-gray-600">
                    Declining sales, customer issues, or operational problems
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Shop layout, cash counter placement, entrance direction, and storage locations
                critically affect business prosperity. Vastu corrections can turn around struggling businesses.
              </p>
            </div>

            {/* Construction Delays */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <Factory className="h-6 w-6 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Construction Delays</h3>
                  <p className="text-sm text-gray-600">
                    Projects facing delays, cost overruns, or labor issues
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Plot selection, foundation laying timing, and construction material storage
                according to Vastu principles can prevent delays and cost escalations.
              </p>
            </div>

            {/* Legal Issues */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Legal Problems</h3>
                  <p className="text-sm text-gray-600">
                    Property disputes, litigation, or legal complications
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Property boundaries, entrance directions, and room placements can influence
                legal matters. Proper Vastu can help prevent and resolve property disputes.
              </p>
            </div>

            {/* Land Selection Issues */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <LandPlot className="h-6 w-6 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Land Selection Problems</h3>
                  <p className="text-sm text-gray-600">
                    Difficulty finding suitable land or plots with issues after purchase
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Plot shape, slope, surrounding environment, and road alignment are crucial
                Vastu factors in land selection. Expert guidance prevents costly mistakes.
              </p>
            </div>

            {/* Retail Issues */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <Store className="h-6 w-6 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Retail Business Issues</h3>
                  <p className="text-sm text-gray-600">
                    Low footfall, poor sales, or customer dissatisfaction
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Shop entrance, product placement, cash counter location, and storage areas
                significantly impact retail success. Vastu optimization can boost sales and customer satisfaction.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}