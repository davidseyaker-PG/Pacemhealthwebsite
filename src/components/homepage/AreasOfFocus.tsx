import { motion } from 'motion/react';
import { SectionLabel } from '../SectionLabel';
import { Link } from 'wouter';
import pharmaDistImage from 'figma:asset/d4667a8dae869db713eb296a7e79ef6833197ef8.png';
import pharmacyServicesImage from 'figma:asset/4784e854b2c897e4e36260584a05b8b42aba5687.png';
import medicalEquipmentImage from 'figma:asset/66cddba03389af46f6ea5b713f7db4bfaa934ec8.png';
import laboratoryImage from 'figma:asset/80adf0921af998d32c42918456fb79ef6702916a.png';
import communityHealthImage from 'figma:asset/b16efa35141d1aae3f045dabcdf401ba9de63f93.png';
import digitalHealthImage from 'figma:asset/d2b38c228dfb2584d04731930a858ff5b4d4acb6.png';

const areas = [
  {
    title: 'Pharmaceutical & Medical Supplies Distribution',
    image: pharmaDistImage,
    route: '/solutions/pharmaceutical-supplies',
  },
  {
    title: 'Pharmacy Services',
    image: pharmacyServicesImage,
    route: '/solutions/pharmacy-services',
  },
  {
    title: 'Medical Equipment & Infrastructure',
    image: medicalEquipmentImage,
    route: '/solutions/medical-equipment',
  },
  {
    title: 'Laboratory & Diagnostics',
    image: laboratoryImage,
    route: '/solutions/laboratory-diagnostics',
  },
  {
    title: 'Community Health Solutions',
    image: communityHealthImage,
    route: '/solutions/community-health',
  },
  {
    title: 'Digital Health & Technology',
    image: digitalHealthImage,
    route: '/solutions/digital-health',
  },
];

export function AreasOfFocus() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel>HEALTHCARE SOLUTIONS</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-navy mt-6 mb-6"
          >
            Our Areas of Focus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 max-w-3xl mx-auto mb-8"
          >
            We provide comprehensive healthcare solutions across multiple sectors, ensuring quality care reaches every corner of Africa.
          </motion.p>
          <motion.a
            href="/solutions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block px-6 py-3 border-2 border-blue text-blue rounded-md hover:bg-blue hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>

        {/* Six-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={area.route}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden h-64">
                    <motion.img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-blue hover:text-blue-light transition-colors duration-300 flex items-center gap-2">
                      {area.title}
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}