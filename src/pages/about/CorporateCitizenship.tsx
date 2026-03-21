import { motion } from 'motion/react';
import { Link } from 'wouter';
import { Heart, Users, Globe, Leaf, Award, Building2, GraduationCap, Activity, Handshake, Shield, Target, Lightbulb } from 'lucide-react';
import heroImage from 'figma:asset/d5af171be4c697d3ddbfcf1622198d24682a769c.png';

export default function CorporateCitizenship() {
  const citizenshipPillars = [
    {
      icon: Heart,
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
      icon: Leaf,
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
      icon: GraduationCap,
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
      icon: Users,
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
      impact: '50,000+ mothers and children targeted annually by 2028',
      icon: Heart
    },
    {
      title: 'Healthcare Access for Underserved',
      description: 'Mobile clinics and community outreach bringing healthcare services to remote and underserved areas.',
      impact: '200+ communities targeted across 5 priority countries',
      icon: Activity
    },
    {
      title: 'Chronic Disease Management',
      description: 'Education and support programs for diabetes, hypertension, and other chronic conditions.',
      impact: '15,000+ patients targeted for management programs by 2028',
      icon: Shield
    },
    {
      title: 'Healthcare Professional Development',
      description: 'Scholarships and training programs developing the next generation of African healthcare leaders.',
      impact: '500+ scholarships targeted by 2028',
      icon: GraduationCap
    },
    {
      title: 'Local Business Partnerships',
      description: 'Supporting local suppliers, entrepreneurs, and small businesses in our healthcare supply chain.',
      impact: '300+ local businesses targeted for our network',
      icon: Handshake
    },
    {
      title: 'Health Solutions Fund',
      description: 'Investing in African healthcare solutions and purpose-built technology improving patient outcomes.',
      impact: '$2M+ targeted investment in local health tech solutions',
      icon: Lightbulb
    }
  ];

  const philanthropicCommitments = [
    {
      title: 'Medicine Donation Program',
      description: 'Providing essential medications to vulnerable populations during emergencies and humanitarian crises.',
      amount: '$5M+ annual donation target'
    },
    {
      title: 'Disaster Response Fund',
      description: 'Rapid response pharmaceutical and medical supplies for natural disasters and health emergencies.',
      amount: '24/7 emergency response capability'
    },
    {
      title: 'Community Health Centers',
      description: 'Building and supporting community health facilities in underserved regions.',
      amount: '20+ facilities targeted by 2028'
    },
    {
      title: 'Research Partnerships',
      description: 'Collaborating with universities and research institutions on African health challenges.',
      amount: '15+ research partnerships planned'
    }
  ];

  const governanceCommitments = [
    {
      icon: Target,
      title: 'Ethical Operations',
      description: 'Conducting business with integrity, transparency, and accountability to all stakeholders.'
    },
    {
      icon: Globe,
      title: 'Sustainable Development Goals',
      description: 'Aligning our operations with UN SDGs, particularly Good Health and Well-being (SDG 3).'
    },
    {
      icon: Building2,
      title: 'Responsible Governance',
      description: 'Strong corporate governance ensuring responsible decision-making and stakeholder value.'
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description: 'Setting standards for corporate citizenship in the African healthcare industry.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Corporate citizenship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-4 leading-tight">
              Corporate Citizenship
            </h1>
            <p className="text-2xl text-white/90 max-w-2xl">
              Making a Positive Impact in the Communities We Serve
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-8">
              Committed to Social Responsibility
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Pacem Health, corporate citizenship is core to our identity. We believe businesses have a responsibility to contribute positively to society, protect the environment, and support the communities where we operate.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our corporate citizenship strategy focuses on improving health outcomes, advancing education, promoting environmental sustainability, and fostering economic development across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Citizenship Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Our Citizenship Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four core areas where we create meaningful social impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {citizenshipPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border-t-4 border-blue shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-orange/10 p-4 rounded-xl">
                      <Icon className="w-8 h-8 text-orange" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-navy">{pillar.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{pillar.description}</p>
                  <div className="space-y-2">
                    {pillar.initiatives.map((initiative, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-orange font-medium">•</span>
                        <span className="text-gray-700">{initiative}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Social Impact Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Initiatives creating measurable positive change in African communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border-t-4 border-blue shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-blue/10 p-4 rounded-xl inline-block mb-4">
                    <Icon className="w-8 h-8 text-blue" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-3">{program.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{program.description}</p>
                  <div className="bg-orange/10 px-4 py-2 rounded-lg inline-block">
                    <span className="text-orange font-semibold text-sm">{program.impact}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Creating Shared Value
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Our corporate citizenship initiatives create shared value for our business and the communities we serve. By investing in health, education, and sustainable development, we strengthen healthcare systems and improve lives across Africa.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              We measure our success not just by financial performance, but by the positive social impact we create and the lives we improve every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philanthropic Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Philanthropic Commitments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting communities through strategic giving and partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {philanthropicCommitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border-t-4 border-blue shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-navy mb-3">{commitment.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{commitment.description}</p>
                <div className="bg-blue/10 px-4 py-2 rounded-lg inline-block">
                  <span className="text-blue font-semibold">{commitment.amount}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Governance & Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading by example with responsible corporate governance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governanceCommitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border-t-4 border-blue shadow-md hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="bg-orange/10 p-4 rounded-xl inline-block mb-4">
                    <Icon className="w-8 h-8 text-orange" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-3">{commitment.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{commitment.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We're always looking for partners who share our commitment to improving healthcare access and creating positive social impact across Africa. Whether you're an NGO, community organization, educational institution, or business, let's work together to create meaningful change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-lg font-heading font-semibold hover:bg-blue/90 transition-all duration-300 transform hover:scale-105">
                Explore Partnership Opportunities
              </Link>
              <Link href="/about/community-impact" className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-lg font-heading font-semibold border-2 border-navy hover:bg-navy hover:text-white transition-all duration-300">
                View Community Impact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Together, we can create a healthier, more equitable future for Africa. Learn more about our corporate citizenship initiatives and how you can get involved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about/sustainability" className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-lg font-heading font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                View Sustainability Report
              </Link>
              <a href="mailto:inquiries@pacemhealth.com" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-heading font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Contact Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
