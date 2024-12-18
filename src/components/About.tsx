import { motion } from 'framer-motion';
import { ShieldCheckIcon, TruckIcon, DocumentCheckIcon, EyeIcon, FlagIcon, HeartIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: "Premium Quality Assurance",
    description: "Every cattle in our farm undergoes thorough health checks and certification process.",
    icon: ShieldCheckIcon,
    color: "text-primary-600",
    bgColor: "from-primary-50 to-primary-100/50",
  },
  {
    name: "Nationwide Delivery",
    description: "Safe and reliable delivery service across Bangladesh with proper care.",
    icon: TruckIcon,
    color: "text-primary-600",
    bgColor: "from-primary-50 to-primary-100/50",
  },
  {
    name: "Complete Documentation",
    description: "Transparent process with all necessary papers and ownership documents.",
    icon: DocumentCheckIcon,
    color: "text-primary-600",
    bgColor: "from-primary-50 to-primary-100/50",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="relative container-custom">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-primary-600 font-medium mb-2">About Us</h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Our Story & Mission
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 sm:mb-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
                Founded in 2019, Akashi Agro has emerged as a trusted name in Bangladesh's 
                cattle trading industry. We take pride in revolutionizing the traditional 
                cattle trading system by introducing modern practices, transparency, and 
                unmatched quality assurance.
              </p>
              <p>
                Our vision is to transform cattle trading through innovation and customer-centric 
                services. We understand the importance of quality livestock in farming and take 
                every measure to ensure our cattle meet the highest standards of health and 
                productivity.
              </p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src="/images/farm.jpg"
                alt="Akashi Agro Farm"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl p-4 sm:p-6 grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { value: "500+", label: "Happy Customers" },
                  { value: "5+", label: "Years Experience" },
                  { value: "15+", label: "Districts Covered" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-600">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 -left-2 sm:-left-4 -bottom-2 sm:-bottom-4 bg-gradient-to-r from-primary-100/20 to-transparent rounded-xl sm:rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 overflow-hidden">
                {/* Card content remains the same but with responsive spacing */}
                <div className="relative">
                  <motion.div
                    className={`inline-flex rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.bgColor} p-2.5 sm:p-3 mb-3 sm:mb-4`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${feature.color} transform group-hover:rotate-12 transition-transform duration-300`} />
                  </motion.div>
                  
                  {/* Decorative dots with responsive positioning */}
                  <div className="absolute -right-1 sm:-right-2 top-0 h-6 sm:h-8 w-6 sm:w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-primary-200/50"></div>
                    <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-primary-200/50 left-2 sm:left-3"></div>
                    <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-primary-200/50 top-2 sm:top-3"></div>
                  </div>
                </div>

                <motion.h3 
                  className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.name}
                </motion.h3>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] sm:h-[1000px] w-[600px] sm:w-[1000px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] bg-gradient-to-b from-primary-50 to-transparent opacity-20" />
      </div>
    </section>
  );
} 