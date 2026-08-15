import { Award, Medal, Trophy, Briefcase } from 'lucide-react';

export default function CertificationsAwardsSection() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold text-green-800">
            Recognitions & Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dr. Arvind Vats&apos;s expertise has been acknowledged through various certifications, awards, and professional affiliations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Certification 1 */}
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <Award className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Certified Vastu Expert
            </h3>
            <p className="text-gray-600">
              Recognized by the International Vastu Association for excellence in Vastu consulting.
            </p>
          </div>

          {/* Award 1 */}
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <Trophy className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Best Vastu Consultant Award
            </h3>
            <p className="text-gray-600">
              Awarded for outstanding contribution to the field of Vastu Shastra in 2022.
            </p>
          </div>

          {/* Certification 2 */}
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <Medal className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Advanced Vedic Sciences Certification
            </h3>
            <p className="text-gray-600">
              Specialized training in traditional Vedic architecture and spatial sciences.
            </p>
          </div>

          {/* Professional Affiliation */}
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <Briefcase className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Member, International Society of Vastu Experts
            </h3>
            <p className="text-gray-600">
              Active member of the global community of Vastu practitioners and researchers.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            With 20+ years of experience and 20,000+ successful consultations, Dr. Arvind Vats continues to uphold the highest standards in Vastu consultancy.
          </p>
        </div>
      </div>
    </section>
  );
}