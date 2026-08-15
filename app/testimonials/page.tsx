'use client'
import { Users, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string; // URL to avatar image
  profession: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Delhi",
    rating: 5,
    comment: "After consulting Dr. Arvind Vats for our office space, we saw a 40% increase in productivity within three months. His recommendations were practical and easy to implement.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    profession: "Business Owner"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Mumbai",
    rating: 5,
    comment: "We were facing constant health issues in our new home. Dr. Vats identified the Vastu defects and suggested simple remedies. Within weeks, our health improved significantly.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b40b?w=100&h=100&fit=crop&crop=face",
    profession: "Homemaker"
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Bangalore",
    rating: 5,
    comment: "Our retail shop was struggling with sales. After following Dr. Vats' Vastu recommendations for layout and cash counter placement, our sales increased by 60%.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    profession: "Shop Owner"
  },
  {
    id: 4,
    name: "Sunita Reddy",
    location: "Hyderabad",
    rating: 5,
    comment: "Dr. Vats helped us select the perfect plot for our dream home. His guidance on orientation and layout has made our home a haven of peace and prosperity.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    profession: "Homeowner"
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Pune",
    rating: 5,
    comment: "As a builder, I consult Dr. Vats for all my projects. His Vastu inputs have significantly increased customer satisfaction and resale value of properties.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    profession: "Builder/Developer"
  },
  {
    id: 6,
    name: "Ananya Desai",
    location: "Ahmedabad",
    rating: 5,
    comment: "Our factory was facing frequent breakdowns and low productivity. Dr. Vats' Vastu consultation helped optimize the layout, resulting in smoother operations and better output.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b40b?w=100&h=100&fit=crop&crop=face",
    profession: "Factory Owner"
  },
  {
    id: 7,
    name: "Rahul Mehta",
    location: "Jaipur",
    rating: 5,
    comment: "I was skeptical about Vastu initially, but after consulting Dr. Vats for my restaurant, I noticed a significant increase in customer satisfaction and repeat business.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    profession: "Restaurant Owner"
  },
  {
    id: 8,
    name: "Kavita Sharma",
    location: "Chandigarh",
    rating: 5,
    comment: "Dr. Vats helped us resolve ongoing family conflicts through simple Vastu adjustments in our home. The peace and harmony in our household has improved dramatically.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    profession: "Homemaker"
  }
];

export default function Testimonials() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mb-16 text-center text-gray-600 max-w-3xl mx-auto">
            Hear from satisfied clients who have experienced positive transformations in their homes and businesses through expert Vastu consultation.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-200px 0px -100px 0px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-5 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s photo`}
                      className="h-12 w-12 rounded-full object-cover border-2 border-green-100 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.profession}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <div className="flex mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= testimonial.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-6">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>
                  <div className="flex items-center space-x-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Verified Client</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-600">
              Join over 20,000 satisfied clients who have transformed their spaces with expert Vastu guidance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}