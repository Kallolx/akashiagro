import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    content: "Very satisfied with the cattle from Akashi Agro. Both their service and cattle quality are excellent. The delivery system, in particular, is outstanding.",
    author: "Abdul Karim",
    role: "Dairy Farm Owner, Tangail",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "Tangail",
    purchaseDate: "December 2023",
    verified: true
  },
  {
    id: 2,
    content: "Extremely professional service. The advance payment system is very secure and convenient. Health certificates and documentation are perfect.",
    author: "Md. Rofiqul Islam",
    role: "Business Owner, Dhaka",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    location: "Dhaka",
    purchaseDate: "January 2024",
    verified: true
  },
  {
    id: 3,
    content: "Been buying cattle from Akashi Agro for 2 years. Their cattle quality and service are consistently excellent. A very reliable organization.",
    author: "Md. Shafiqul Islam",
    role: "Farmer, Mymensingh",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    location: "Mymensingh",
    purchaseDate: "November 2023",
    verified: true
  },
  {
    id: 4,
    content: "The health certification process is thorough and transparent. Very happy with my purchase from Akashi Agro.",
    author: "Md. Habibur Rahman",
    role: "Farm Manager, Gazipur",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    location: "Gazipur",
    purchaseDate: "January 2024",
    verified: true
  },
  {
    id: 5,
    content: "Great communication throughout the process. The team is very professional and helpful.",
    author: "Mohammad Ali",
    role: "Business Owner, Chittagong",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    location: "Chittagong",
    purchaseDate: "December 2023",
    verified: true
  },
  {
    id: 6,
    content: "The quality of cattle exceeded my expectations. Will definitely buy from them again.",
    author: "Md. Jahangir Alam",
    role: "Livestock Trader, Sylhet",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    location: "Sylhet",
    purchaseDate: "November 2023",
    verified: true
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm sm:text-base font-semibold leading-7 text-primary-600">Testimonials</h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            What Our Customers Say
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Read authentic reviews from our valued customers across Bangladesh
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative mt-16">
          <motion.div 
            className="flex gap-6 py-4"
            animate={{
              x: [0, -2000],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              },
            }}
          >
            {/* First set of cards */}
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="flex-shrink-0 w-[350px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-full rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-900/5">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-100"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h3 className="text-base font-semibold text-gray-900">{testimonial.author}</h3>
                        {testimonial.verified && (
                          <CheckBadgeIcon className="h-5 w-5 text-primary-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="mt-4 text-sm text-gray-600 line-clamp-4">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>📍 {testimonial.location}</span>
                      <span>🗓 {testimonial.purchaseDate}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial) => (
              <motion.div
                key={`duplicate-${testimonial.id}`}
                className="flex-shrink-0 w-[350px]"
              >
                {/* Same card content as above */}
                <div className="h-full rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-900/5">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-100"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h3 className="text-base font-semibold text-gray-900">{testimonial.author}</h3>
                        {testimonial.verified && (
                          <CheckBadgeIcon className="h-5 w-5 text-primary-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="mt-4 text-sm text-gray-600 line-clamp-4">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>📍 {testimonial.location}</span>
                      <span>🗓 {testimonial.purchaseDate}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] bg-gradient-to-b from-primary-50 to-transparent opacity-20" />
      </div>
    </section>
  );
} 