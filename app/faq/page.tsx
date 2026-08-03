'use client'

import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is Vastu Shastra and how can it benefit me?",
    answer:
      "Vastu Shastra is an ancient Indian science of architecture and spatial arrangement that harmonizes human dwellings with natural forces. Proper Vastu can enhance health, wealth, relationships, and overall well-being by optimizing the flow of positive energy in your living or working space.",
  },
  {
    id: 2,
    question: "Do I need to make structural changes to my home or office for Vastu corrections?",
    answer:
      "No, Dr. Arvind Vats specializes in non-demolition Vastu solutions. Most recommendations involve simple changes like furniture rearrangement, color adjustments, placement of objects, and use of specific materials - all without requiring structural modifications.",
  },
  {
    id: 3,
    question: "How long does a Vastu consultation take?",
    answer:
      "A typical consultation session lasts between 60-90 minutes for residential properties and 2-4 hours for commercial or industrial spaces, depending on the size and complexity of the property. The consultation includes property analysis, discussion of concerns, and personalized recommendations.",
  },
  {
    id: 4,
    question: "Can Vastu help with specific problems like financial issues or health problems?",
    answer:
      "Yes, many common life challenges including financial difficulties, health issues, relationship problems, and career stagnation can be related to Vastu imbalances. Addressing these imbalances through proper Vastu principles often leads to significant improvements in these areas.",
  },
  {
    id: 5,
    question: "Is Vastu consultation suitable for rented properties?",
    answer:
      "Absolutely! Vastu principles can be applied to both owned and rented properties. For rented spaces, Dr. Vats provides recommendations that work within the constraints of rental agreements, focusing on interior arrangements, color schemes, and non-structural changes.",
  },
  {
    id: 6,
    question: "How soon can I expect to see results after implementing Vastu recommendations?",
    answer:
      "Results vary depending on the nature of the issues and the extent of changes made. Some clients report noticing positive changes within days or weeks, particularly in areas like mental peace and sleep quality. More substantial changes in areas like finances or relationships may take 2-3 months to manifest fully.",
  },
  {
    id: 7,
    question: "Do I need to believe in Vastu for it to work?",
    answer:
      "No, Vastu works on principles of energy flow, direction, and spatial arrangement that can be observed and measured. While an open mind helps with implementation, the principles are based on architectural and environmental science rather than religious belief.",
  },
  {
    id: 8,
    question: "What information do I need to provide for a consultation?",
    answer:
      "For an effective consultation, please provide: property layout/floor plan, direction of the main entrance, photographs of key areas (entrance, living room, bedroom, kitchen), and specific concerns you wish to address. For property selection, provide plot dimensions and surrounding details.",
  },
  {
    id: 9,
    question: "Do you offer online consultations?",
    answer:
      "Yes, we offer both online and on-site consultations. Online consultations are conducted via video conferencing platforms where you can share your property plans, photos, and discuss your concerns. We provide detailed reports and recommendations that you can implement at your convenience.",
  },
  {
    id: 10,
    question: "What makes Dr. Arvind Vats different from other Vastu consultants?",
    answer:
      "Dr. Arvind Vats brings over 20 years of experience and has conducted more than 20,000 successful consultations. His approach combines traditional Vastu Shastra wisdom with practical, scientific applications suitable for modern living. He focuses on logical, non-demolition solutions rather than superstition or fear-mongering, providing clear explanations and realistic expectations.",
  }
];

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mb-16 text-center text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about Vastu consultation and our services.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    className={`flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer`}
                    onClick={() => toggleAnswer(faq.id)}
                  >
                    <div className="flex items-center space-x-3 w-0 flex-1">
                      <HelpCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-gray-900">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        expanded === faq.id ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>

                  {expanded === faq.id && (
                    <div className="border-t border-gray-200 bg-white">
                      <div className="p-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}