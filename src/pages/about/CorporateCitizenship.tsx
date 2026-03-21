import { motion } from 'motion/react';
import { Link } from 'wouter';
import heroImage from 'figma:asset/d5af171be4c697d3ddbfcf1622198d24682a769c.png';

export default function CorporateCitizenship() {
  const citizenshipPillars = [
    {
      title: 'Community Impact',
      description: 'Improving health outcomes and quality of life in the communities we serve across Africa.',
      initiatives: [
        'Community health education programs',
        'Free health screening initiatives',
        'Support for vulnerable populations',
        'Local healthcare infrastructure development'
      ]
    },
    {
      title: 'Environmental Stewardship',
      description: 'Operating sustainably and minimizing our environmental footprint across all operations.',
      initiatives: [
        'Sustainable packaging and waste reduction',
        'Energy-efficient facilities',
        'Carbon footprint reduction programs',
        'Responsible pharmaceutical disposal'
      ]
    },
    {
      title: 'Education & Training',
      description: 'Investing in healthcare workforce development and professional education programs.',
      initiatives: [
        'Healthcare professional training',
        'Pharmacy education scholarships',
        'University partnerships',
        'Continuing medical education support'
      ]
    },
    {
      title: 'Employee Well-being',
      description: 'Creating an inclusive, supportive workplace where our team members can thrive.',
      initiatives: [
        'Comprehensive health benefits',
        'Professional development opportunities',
        'Work-life balance programs',
        'Diversity and inclusion initiatives'
      ]
    }
  ];

  const socialPrograms = [
    {
      title: 'Maternal & Child Health',
      description: 'Programs supporting pregnant women, new mothers, and children with essential healthcare access and nutrition.',
      impact: 'Our goal: expanding access to maternal and child healthcare across Africa'
    },
    {
      title: 'Healthcare Access for Underserved',
      description: 'Mobile clinics and community outreach bringing healthcare services to remote and underserved areas.',
      impact: 'Our goal: reaching underserved communities across priority markets'
    },
    {
      title: 'Chronic Disease Management',
      description: 'Education and support programs for diabetes, hypertension, and other chronic conditions affecting African communities.',
      impact: 'Our goal: growing chronic care support across African communities'
    },
    {
      title: 'Healthcare Professional Development',
      description: 'Scholarships and training programs developing the next generation of African healthcare leaders.',
      impact: 'Our goal: developing the next generation of healthcare leaders'
    },
    {
      title: 'Local Business Partnerships',
      description: 'Supporting local suppliers, entrepreneurs, and small businesses in our healthcare supply chain.',
      impact: 'Our goal: strengthening local supply chains and partnerships'
    },
    {
      title: 'Health Solutions Fund',
      description: 'Investing in African healthcare solutions and purpose-built technology improving patient outcomes.',
      impact: 'Our goal: investing in African-led health technology solutions'
    }
  ];

  const philanthropicCommitments = [
    {
      title: 'Medicine Donation Program',
      description: 'Providing essential medications to vulnerable populations during emergencies and humanitarian crises.'
    },
    {
      title: 'Disaster Response Fund',
      description: 'Rapid response pharmaceutical and medical supplies for natural disasters and health emergencies.'
    },
    {
      title: 'Community Health Centers',
      description: 'Building and supporting community health facilities in underserved regions.'
    },
    {
      title: 'Research Partnerships',
      description: 'Collaborating with universities and research institutions on African health challenges.'
    }
  ];

  const governanceCommitments = [
    {
      title: 'Ethical Operations',
      description: 'Conducting business with integrity, transparency, and accountability to all stakeholders.'
    },
    {
      title: 'Sustainable Development Goals',
      description: 'Aligning our operations with UN SDGs, particularly Good Health and Well-being (SDG 3).'
    },
    {
      title: 'Responsible Governance',
      description: 'Strong corporate governance ensuring responsible decision-making at every level.'
    }
  ];

  const pillarColors = ['border-green', 'border-blue', 'border-orange', 'border-navy'];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue transition-colors">Home</Link>
          <span>/</span>
          <Link href="/about/company" className="hover:text-blue transition-colors">Our Story</Link>
          <span>/</span>
          <span className="text-navy font-medium">Corporate Citizenship</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Corporate Citizenship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center z-10">
          <div className="max-w-2xl w-full">
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-4 leading-tight">
              Corporate Citizenship
            </h1>
            <p className="text-xl text-white/80">
              Making a Positive Impact in the Communities We Serve
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-8">
              Committed to Building Together
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Pacem Health, corporate citizenship is core to our identity. We believe businesses have a responsibility to contribute positively to society, protect the environment, and support the communities where we operate.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-6">
              Our corporate citizenship strategy focuses on improving health outcomes, advancing education, promoting environmental sustainability, and building economic opportunity across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Citizenship Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Our Citizenship Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four core areas where we create meaningful social impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {citizenshipPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl p-8 shadow-sm border-l-4 ${pillarColors[index]} hover:shadow-md transition-shadow`}
              >
                <h3 className="text-2xl font-heading font-bold text-navy mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.initiatives.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-green mt-1 font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Social Impact Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Initiatives creating real, lasting change in African communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-heading font-bold text-navy mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                <div className="bg-green/5 border border-green/20 rounded-lg px-4 py-3">
                  <p className="text-sm font-heading font-semibold text-green">{program.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Creating Lasting Value
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Our corporate citizenship initiatives create lasting value for our business and the communities we serve. By investing in health, education, and sustainable development, we strengthen healthcare systems and improve lives across Africa.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              We measure our success not just by financial performance, but by the positive social impact we create and the lives we improve every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philanthropic Commitments & Governance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Philanthropic */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
                Philanthropic Commitments
              </h2>
              <p className="text-gray-600 mb-8">Supporting communities through purposeful giving and partnerships</p>
              <div className="space-y-6">
                {philanthropicCommitments.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-green shadow-sm">
                    <h3 className="text-lg font-heading font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Governance */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
                Governance & Leadership
              </h2>
              <p className="text-gray-600 mb-8">Leading by example with responsible corporate governance</p>
              <div className="space-y-6">
                {governanceCommitments.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-blue shadow-sm">
                    <h3 className="text-lg font-heading font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6 text-center">
              Partner With Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              We're always looking for partners who share our commitment to improving healthcare access and creating positive social impact across Africa. Whether you're an NGO, community organization, educational institution, or business, let's work together to create meaningful change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-blue/90 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Together, we can create a healthier, more equitable future for Africa. Learn more about our corporate citizenship initiatives and how you can get involved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-full font-heading font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </Link>
              <Link href="/about/company" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
