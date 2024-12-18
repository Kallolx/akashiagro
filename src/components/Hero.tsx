import { motion } from 'framer-motion';
import { PhoneIcon, CheckCircleIcon, ShieldCheckIcon, StarIcon, UserGroupIcon, MapPinIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: "Premium Quality",
    description: "Top-grade cattle breeds",
    icon: ShieldCheckIcon,
  },
  {
    name: "Health Certified",
    description: "100% verified health status",
    icon: CheckCircleIcon,
  }
];

export default function Hero() {
  const whatsappNumber = "+8801757320452";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="relative z-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fdf4_1px,transparent_1px),linear-gradient(to_bottom,#f0fdf4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative">
        {/* Added proper spacing from navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-24">
          {/* Main Content Grid */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Text */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
                Premium Quality Cattle for Your Needs
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
                Experience the finest selection of healthy and well-cared-for cattle. At Akashi Agro LTD, we pride ourselves on providing top-quality livestock.
              </p>

              {/* Feature Cards - Mobile Optimized */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature) => (
                  <motion.div
                    key={feature.name}
                    className="relative rounded-xl bg-white p-4 sm:p-6 shadow-md ring-1 ring-gray-900/5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900">{feature.name}</h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-green-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-green-500 transition-colors duration-200"
                >
                  <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Chat on WhatsApp
                </a>
                <a
                  href="#cattle"
                  className="inline-flex items-center justify-center rounded-full bg-primary-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-primary-500 transition-colors duration-200"
                >
                  View Our Cattle
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-sm ring-1 ring-gray-900/5">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">4.9/5</span>
                    <span className="text-gray-600 ml-1">Customer Rating</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-sm ring-1 ring-gray-900/5">
                  <UserGroupIcon className="h-5 w-5 text-primary-600" />
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">5+ Years</span>
                    <span className="text-gray-600 ml-1">of Excellence</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image - Mobile Optimized */}
            <motion.div
              className="mt-10 sm:mt-16 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Location Badge - Positioned at top */}
                <div className="absolute -top-3 left-4 right-4 z-10">
                  <div className="flex items-center justify-center sm:justify-start gap-2 rounded-full bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg backdrop-blur-sm ring-1 ring-gray-900/5">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
                    <div className="text-xs sm:text-sm truncate">
                      <span className="font-medium text-gray-900">Madhupur, Tangail</span>
                      <span className="text-gray-500 ml-1 hidden sm:inline">• Dhaka Division</span>
                    </div>
                  </div>
                </div>

                {/* Main Image Card */}
                <div className="relative rounded-xl sm:rounded-2xl bg-white p-1.5 sm:p-2 shadow-xl ring-1 ring-gray-900/5">
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl">
                    <img
                      src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Premium Cattle"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                    
                    {/* Image Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="space-y-0.5 sm:space-y-1">
                            <h3 className="text-base sm:text-lg font-semibold text-white">Premium Cattle</h3>
                            <p className="text-xs sm:text-sm text-gray-200">Health certified & well-cared</p>
                          </div>
                          <span className="self-start sm:self-auto inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium text-primary-700">
                            Available Now
                          </span>
                        </div>

                        {/* Additional Info */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-white/90">
                          <div className="flex items-center gap-1">
                            <CheckCircleIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            <span>Verified Farm</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ShieldCheckIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            <span>Quality Assured</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 -left-3 sm:-left-4 -bottom-3 sm:-bottom-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-primary-50 to-white -z-10" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 