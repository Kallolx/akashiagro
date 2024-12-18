import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const team = [
  {
    id: 1,
    name: 'Md. Anwar Hossain',
    role: 'Owner & CEO',
    image: '/images/team/owner.jpg',
    quote: "Our commitment is to revolutionize cattle farming in Bangladesh by maintaining the highest standards of quality and care.",
    experience: "25+ years in agriculture",
    achievements: [
      "Pioneer in modern cattle farming",
      "Established quality benchmarks",
      "Community development leader"
    ],
    contact: {
      phone: "+8801711437963",
      email: "anwar@akashiagro.com"
    }
  },
  {
    id: 2,
    name: 'Ahnaf Tazwar Udoy',
    role: 'Managing Director',
    image: '/images/team/director.jpg',
    quote: "Innovation and sustainability are at the heart of our operations.",
    expertise: [
      "Operations Management",
      "Business Development",
      "Strategic Planning"
    ],
    contact: {
      phone: "+8801757320452",
      email: "udoy@akashiagro.com"
    }
  },
  {
    id: 3,
    name: 'Mehedi Hasan',
    role: 'Manager',
    image: '/images/team/manager.jpg',
    quote: "Quality assurance and customer satisfaction are our top priorities.",
    expertise: [
      "Livestock Management",
      "Customer Relations",
      "Quality Control"
    ],
    contact: {
      phone: "+8801721315956",
      email: "mehedi@akashiagro.com"
    }
  },
];

export default function Team() {
  return (
    <section id="team" className="py-12 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm sm:text-base font-semibold leading-7 text-primary-600">Our Leadership</h2>
            <p className="mt-2 text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Meet the Visionaries Behind Akashi Agro
            </p>
            <p className="mt-4 text-sm sm:text-lg leading-7 sm:leading-8 text-gray-600">
              A dedicated team committed to revolutionizing cattle farming in Bangladesh
            </p>
          </motion.div>
          
          {/* Owner's Special Section */}
          <motion.div
            className="mt-8 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={team[0].image}
                  alt={team[0].name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <p className="text-xs sm:text-sm font-medium text-primary-400">{team[0].experience}</p>
                  <h3 className="mt-1 sm:mt-2 text-xl sm:text-2xl font-bold">{team[0].name}</h3>
                  <p className="text-sm text-gray-300">{team[0].role}</p>
                </div>
              </div>
              
              <div className="p-4 sm:p-8">
                <blockquote className="text-base sm:text-xl font-medium text-gray-900 italic">
                  "{team[0].quote}"
                </blockquote>
                
                <div className="mt-6 sm:mt-8">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Key Achievements</h4>
                  <ul className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                    {team[0]?.achievements?.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2 sm:gap-3">
                        <AcademicCapIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={`tel:${team[0].contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-4 py-2 sm:py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
                  >
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    Call Now
                  </a>
                  <a
                    href={`mailto:${team[0].contact.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 sm:py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Team Members */}
          <div className="mt-8 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {team.slice(1).map((member, index) => (
              <motion.div
                key={member.id}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg">
                  <div className="aspect-[3/2]">
                    <img
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-xs sm:text-sm text-primary-600">{member.role}</p>
                      </div>
                      <div className="flex gap-1 sm:gap-2">
                        <a
                          href={`tel:${member.contact.phone}`}
                          className="rounded-full p-1.5 sm:p-2 text-gray-600 hover:bg-gray-50"
                        >
                          <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                        <a
                          href={`mailto:${member.contact.email}`}
                          className="rounded-full p-1.5 sm:p-2 text-gray-600 hover:bg-gray-50"
                        >
                          <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </div>
                    </div>

                    <blockquote className="mt-3 sm:mt-4 text-xs sm:text-sm italic text-gray-600">
                      "{member.quote}"
                    </blockquote>

                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900">Areas of Expertise</h4>
                      <ul className="mt-2 space-y-1">
                        {member.expertise?.map((skill, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                            <UserGroupIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-600 flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 