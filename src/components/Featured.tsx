import { motion } from 'framer-motion';
import CattleCard from './cards/CattleCard';

// Export the cattle data
export const cattleData = [
  {
    id: "1",
    image: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/442501240_462947309578609_6102993389557825138_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFIj6xZdGngVZWyr-NtbeEeVZq9gNQOQqBVmr2A1A5CoLDIOzCtGUxITVtvAqF95aD6hsJngHyC3zJJ6KEo1WHY&_nc_ohc=-UDmzqHrIsoQ7kNvgEqi6AH&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AnCZuZa9NPpL69Xs8isorPN&oh=00_AYDsvhA1xwulOvqbOxlmiIAYt1LofBn_TDMGdSMb3SPGog&oe=6767B0EE",
    breed: "Australian Brahman",
    weight: "450 KG",
    age: "24 Months",
    price: "৳2,50,000",
    type: "Beef",
    isAvailable: true,
  },
  {
    id: "2",
    image: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/442473944_462970286242978_945080775611826525_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGS82Vfoj_d_sj9sGLl0gaEJ6M_RvLw0m4noz9G8vDSbl6Eex01j2uikuuYFGCtwMRVJ3knlGU-2ZItrApLeWEW&_nc_ohc=UllSwzc4TGcQ7kNvgGSQ2sB&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AB83eNmKBfa7PbI8JxVViF8&oh=00_AYCbty6Em0bl4M_O6GwWeSX_b6EK0Q0-sP6H67kj2DVrBA&oe=6767C5C7",
    breed: "Jersey",
    weight: "350 KG",
    age: "22 Months",
    price: "৳1,90,000",
    type: "Dairy",
    isAvailable: true,
  },
  {
    id: "3",
    image: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/442473901_462947876245219_3743371249192091750_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTnHKSAmAk8LifA5l9s8nq8wEqjUt8zo_zASqNS3zOj6REyAcM8ViQI_zIt8wt4hSRLegm2xyG3jEXSyz2npu4&_nc_ohc=0RnSGDfD89MQ7kNvgEZMipf&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=Aa4U6OII51Kx-zIn0UqLy81&oh=00_AYBIUriR8_SoPOwcIQ8Dg_Ikx6CGQ3A8x9ONeYTcy-sqpA&oe=6767A5DE",
    breed: "Deshi Cow",
    weight: "320 KG",
    age: "18 Months",
    price: "৳1,30,000",
    type: "Beef",
    isAvailable: true,
  },
  {
    id: "4",
    image: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/442481967_462947926245214_3944080168955991888_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFixrLgimjp7CBb_vFL161H_9tPNf51gN__2081_nWA3xTx2zVsTIlrqT0vJxYxW3m-XwEmf4WD_3ZufDxGahBV&_nc_ohc=8pUswXlAABgQ7kNvgHIN7Xd&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AinhNPNsFkwDCzJVYFeN92l&oh=00_AYCxt9VsB5JTjWp8YI3Y-Fiy69LB9f_Py2WFef6SvpoXuA&oe=6767B5D1",
    breed: "Holstein Friesian",
    weight: "480 KG",
    age: "28 Months",
    price: "৳2,90,000",
    type: "Dairy",
    isAvailable: true,
  },
  {
    id: "5",
    image: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/442412411_462948009578539_7967922082088980694_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEnlMEOCvbngWwTF-AE8U6lB0CsRvCKFLIHQKxG8IoUsu0SKrkBgWPgXu2o22g3qWfwFNe9OtmQNNAuAV5YNTVg&_nc_ohc=6lavQEpz214Q7kNvgGueN99&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AP993TRmK4KzYEtgfGV7GnL&oh=00_AYDOwEXuAxjTrvadki3o0ZPt_B0aryTKWxNusgIx0pS1yQ&oe=6767AB86",
    breed: "Gir",
    weight: "400 KG",
    age: "26 Months",
    price: "৳2,10,000",
    type: "Dairy",
    isAvailable: true,
  },
  {
    id: "6",
    image: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/442480540_462948069578533_502103795134656101_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEMTTElEdg_lC9oC0iiyf8bcJeMfhefX55wl4x-F59fnniBDZzg0pxiK6aqF0fLBK3YsZNUE59n0yW539ShHH2y&_nc_ohc=8_BciuFKqPwQ7kNvgER6uk1&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AH8bBsJvJl_U_xhk2s58hQM&oh=00_AYDdq1QkQ4YTQS7dGlSY6L0rtw_smfxa_4QY7q2M2FNlRQ&oe=6767C255",
    breed: "Angus",
    weight: "430 KG",
    age: "24 Months",
    price: "৳2,40,000",
    type: "Beef",
    isAvailable: true,
  },
];

export default function Featured() {
  return (
    <section id="featured" className="relative py-12 sm:py-16 bg-gray-50">
      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm sm:text-base font-semibold leading-7 text-primary-600">Featured Cattle</h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Our Premium Selection
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Explore our handpicked selection of premium cattle, each certified for quality and health.
          </p>
        </motion.div>

        {/* Cattle Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cattleData.map((cattle) => (
            <CattleCard
              key={cattle.id}
              {...cattle}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="/cattle"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-primary-600/10 hover:bg-primary-50 transition-colors duration-200"
          >
            View All Cattle
          </a>
        </motion.div>
      </div>
    </section>
  );
} 