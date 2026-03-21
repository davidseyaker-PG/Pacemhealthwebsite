import { motion } from 'motion/react';
import { Link } from 'wouter';

const governanceAreas = [
  {
    title: 'Strategic Oversight',
    description: 'Quarterly board meetings review strategic initiatives, financial performance, risk management, and mission alignment.'
  },
  {
    title: 'Stakeholder Accountability',
    description: 'Ensures accountability to partners, investors, customers, and the communities we serve across Africa.'
  },
  {
    title: 'Mission Alignment',
    description: 'Guides company direction to ensure we stay true to our mission of strengthening healthcare across Africa.'
  }
];

const expertiseAreas = [
  {
    title: 'Healthcare Systems',
    description: 'WHO experience, pharmaceutical regulation, health system strengthening'
  },
  {
    title: 'Financial Leadership',
    description: 'Private equity, healthcare finance, growth-stage companies'
  },
  {
    title: 'African Markets',
    description: 'Regional business networks, government relations, local expertise'
  },
  {
    title: 'International Development',
    description: 'World Bank, development finance, multilateral partnerships'
  },
  {
    title: 'Supply Chain Excellence',
    description: 'Pharmaceutical distribution, logistics, emerging markets'
  },
  {
    title: 'Governance & Policy',
    description: 'African Union, public policy, corporate governance'
  }
];

export default function Board() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#1E3A6E]" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-white/90 mb-4 font-semibold">Corporate Governance</p>
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-4 leading-tight">
              Board of Directors
            </h1>
            <p className="text-xl text-white/95 max-w-3xl leading-relaxed">
              Providing strategic oversight and governance excellence to strengthen healthcare delivery across Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed text-center"
          >
            Pacem Health's Board of Directors brings together global health systems expertise, financial leadership, 
            African business acumen, and governance experience to guide our strategic direction and ensure accountability 
            to stakeholders. Our Board members provide oversight, strategic guidance, and deep industry expertise as we 
            work to strengthen healthcare systems across Africa.
          </motion.p>
        </div>
      </section>

      {/* About Our Board Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-12"
          >
            About Our Board
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-heading font-bold text-navy mb-2">Board Composition:</h3>
              <p className="text-gray-700 leading-relaxed">
                Pacem Health's Board of Directors is composed of six distinguished members with complementary expertise spanning healthcare systems, international development, African markets, financial leadership, supply chain operations, and corporate governance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-navy mb-2">Meeting Frequency:</h3>
              <p className="text-gray-700 leading-relaxed">
                The Board meets quarterly to review strategic initiatives, financial performance, operational metrics, risk management, and alignment with our mission to strengthen healthcare delivery across Africa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-navy mb-2">Oversight Responsibilities:</h3>
              <p className="text-gray-700 leading-relaxed">
                Board members provide strategic guidance on market expansion, partnership development, capital allocation, governance policies, and long-term sustainability. They ensure the company maintains the highest standards of corporate governance while staying true to our mission-driven values.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-navy mb-2">Independence:</h3>
              <p className="text-gray-700 leading-relaxed">
                Our Board includes independent directors who bring objective oversight and ensure accountability to all stakeholders including partners, investors, customers, and the communities we serve.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-navy mb-2">Stakeholder Trust:</h3>
              <p className="text-gray-700 leading-relaxed">
                This governance structure demonstrates our commitment to transparency, accountability, and professional management as we build lasting partnerships with governments, development agencies, health systems, and communities across Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Board Members - Coming Soon */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-12">
              Our Board Members
            </h2>
            <div className="bg-gray-50 rounded-xl p-16">
              <p className="text-2xl text-gray-500 font-heading font-semibold">Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Board Governance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-4">
              Board Governance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Board provides strategic oversight and ensures alignment with our mission to strengthen Africa's health systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {governanceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-heading font-bold text-navy mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-4">
              Board Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-xl font-heading font-bold text-navy mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold text-navy mb-2">
                Meet Our Leadership Team
              </h3>
              <p className="text-gray-600">
                Learn about the executives driving our mission across Africa
              </p>
            </div>
            <Link href="/about/leadership">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-orange transition-colors duration-300 shadow-lg whitespace-nowrap cursor-pointer"
              >
                View Leadership Team
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}