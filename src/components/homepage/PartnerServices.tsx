import { motion } from 'motion/react';
import { Link } from 'wouter';
import { SectionLabel } from '../SectionLabel';
import marketAccessImage from 'figma:asset/c88e4fb775957e420c8bfcf1cf1554fc5bfd3581.png';
import procurementImage from 'figma:asset/297e6529a400e0d9c6b4db3bd1930a63995a2f1d.png';
import supplyChainImage from 'figma:asset/92e6af869de73c12165a36de5f06fa291bb76724.png';
import regulatoryImage from 'figma:asset/5b1221aa4de28fdbad4420eb78f8feddaff6de52.png';

const services = [
  {
    title: 'Market Access Services',
    description: 'Strategic market entry and expansion support across African healthcare markets',
    image: marketAccessImage,
    link: '/services/market-access',
  },
  {
    title: 'Procurement & Distribution',
    description: 'Efficient sourcing and delivery of pharmaceuticals and medical supplies',
    image: procurementImage,
    link: '/services/procurement-distribution',
  },
  {
    title: 'Supply Chain & Logistics',
    description: 'End-to-end logistics solutions ensuring timely delivery of healthcare products',
    image: supplyChainImage,
    link: '/services/supply-chain-logistics',
  },
  {
    title: 'Regulatory & Compliance',
    description: 'Expert guidance on healthcare regulations and quality standards',
    image: regulatoryImage,
    link: '/services/regulatory-compliance',
  },
];

export function PartnerServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel>PARTNER SERVICES</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-navy mt-6 mb-6"
          >
            Enabling Global Health Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Comprehensive B2B services designed to help global health organizations expand their impact across Africa.
          </motion.p>
          <motion.a
            href="/partners"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block px-6 py-3 border-2 border-blue text-blue rounded-md hover:bg-blue hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a>
        </div>

        {/* Four-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={service.link}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden h-48">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-blue hover:text-blue-light transition-colors duration-300 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
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