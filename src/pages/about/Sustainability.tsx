import { motion } from 'motion/react';
import { Link } from 'wouter';
import { ArrowRight, Leaf, Droplet, Recycle, Globe, Heart, Users, CheckCircle2, Target, Award, TrendingUp } from 'lucide-react';
import heroImage from "figma:asset/a0458ca71553fc8ee319f1ade7fe8397fa6220a3.png";
import supplyChainImage from "figma:asset/b6bec3588abc7dbc8754dbc214a52d23e15bbb73.png";
import communityHealthImage from "figma:asset/8a476a1d897174525d65104773610b4f593bd97e.png";
import workforceDevelopmentImage from "figma:asset/659f664fee8b8cc2e798a0877a3fcf371327be7f.png";
import programsCardImage from "figma:asset/5988e2e563b1fdc80cb4b870d67f6fe7eea90de9.png";
import approachCardImage from "figma:asset/339dd2fd338d88af8ef2a72a3faa6b6e00a5d61c.png";
import historyCardImage from "figma:asset/58cdfc1012d629d542a7d33044809488a308189c.png";

export default function Sustainability() {
  const focusAreas = [
    {
      title: 'Sustainable Healthcare Supply Chains',
      description: 'Building efficient, eco-friendly pharmaceutical and medical equipment distribution networks across Africa.'
    },
    {
      title: 'Local Capacity & Job Creation',
      description: 'Investing in African talent through training programs and employment opportunities in healthcare logistics.'
    },
    {
      title: 'Environmental Responsibility',
      description: 'Minimizing our carbon footprint through optimized transportation, waste reduction, and green practices.'
    },
    {
      title: 'Equitable Access & Social Impact',
      description: 'Ensuring quality healthcare products reach underserved communities regardless of geographic location.'
    },
    {
      title: 'Community Partnerships',
      description: 'Collaborating with local governments, NGOs, and health organizations to strengthen health systems.'
    },
    {
      title: 'Resilient Health Systems',
      description: 'Building infrastructure and processes that withstand disruptions and serve communities long-term.'
    }
  ];

  const sustainableApproach = [
    {
      image: supplyChainImage,
      title: 'Sustainable Supply Chains',
      description: 'Optimizing logistics networks to reduce environmental impact while ensuring reliable delivery of quality-assured products.'
    },
    {
      image: communityHealthImage,
      title: 'Community Health Impact',
      description: 'Partnering with healthcare facilities to improve patient outcomes and strengthen community health services.'
    },
    {
      image: workforceDevelopmentImage,
      title: 'Workforce Development',
      description: 'Training 5,000+ healthcare workers annually in pharmaceutical management, equipment maintenance, and quality assurance.'
    }
  ];

  const commitments = [
    {
      title: 'Environmental Stewardship',
      description: 'We minimize environmental impact through sustainable operations, implementing waste reduction and medical waste management programs across our network. We partner with suppliers committed to environmental standards, optimize transportation routes to reduce carbon emissions, and invest in renewable energy solutions for our warehouses and facilities.'
    },
    {
      title: 'Social & Economic Impact',
      description: 'Through local hiring and capacity building across 15+ African countries, we create meaningful employment opportunities in healthcare logistics. We partner with local businesses and suppliers to strengthen economies, ensure equitable access to essential medicines and equipment, and support community health initiatives and education programs that empower communities to take charge of their health futures.'
    },
    {
      title: 'Responsible Business Practices',
      description: 'We maintain the highest quality and safety standards while operating with transparency, integrity, and ethical principles. By building long-term partnerships based on mutual respect and investing in innovative solutions that benefit communities, we ensure regular reporting on our sustainability goals and progress to maintain accountability to our stakeholders.'
    },
    {
      title: 'Health Equity & Access',
      description: 'We are committed to eliminating barriers to healthcare access across Africa by addressing social determinants of health through strategic programs. We develop innovative financing models for affordability, collaborate with governments and NGOs on health priorities, and build resilient health systems that serve all communities regardless of geographic location or economic status.'
    }
  ];

  const sdgGoals = [
    { number: 3, title: 'Good Health and Well-being' },
    { number: 8, title: 'Decent Work and Economic Growth' },
    { number: 9, title: 'Industry, Innovation and Infrastructure' },
    { number: 10, title: 'Reduced Inequalities' },
    { number: 12, title: 'Responsible Consumption and Production' },
    { number: 13, title: 'Climate Action' },
    { number: 17, title: 'Partnerships for the Goals' },
    { number: 2063, title: 'The Africa We Want', isAgenda: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-4"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-blue transition-colors">Home</Link><span>/</span><Link href="/about" className="hover:text-blue transition-colors">About</Link><span>/</span><span className="text-navy font-medium">Sustainability</span></nav></div>
      {/* Hero Section - Just Title */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Healthcare Innovation and Sustainability"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-4 leading-tight">
              Healthcare Innovation Drives Sustainable Development
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section Below Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-8">
              Sustainability at the Heart of Everything We Do
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Pacem Health, sustainability isn't just a commitment—it's fundamental to how we strengthen healthcare systems across Africa. We're building pharmaceutical supply chains, medical equipment distribution, and healthcare infrastructure that benefit communities, economies, and the environment for generations to come.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Founded in 2024 with a vision born from discovering medication quality issues in Liberia, we're proving that world-class healthcare logistics can be both sustainable and profitable while serving the most challenging markets in Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Focus Areas */}
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
              Our Sustainability Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six pillars guide our sustainable approach to transforming African healthcare logistics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 border-t-4 border-t-[#047857] hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-heading font-bold text-navy mb-4">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Sustainable Healthcare Approach */}
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
              Our Sustainable Healthcare Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrating sustainability into every aspect of our operations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sustainableApproach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-heading font-bold text-navy mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sustainability Commitments */}
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
              Our Sustainability Commitments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Concrete actions we're taking to build a sustainable healthcare future for Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-blue/20 hover:border-blue/40 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-heading font-bold text-navy mb-4">{commitment.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{commitment.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aligned with Global Sustainability Goals */}
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
              Aligned with Global Sustainability Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work directly supports the United Nations Sustainable Development Goals, particularly those focused on health, economic growth, and reducing inequalities.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-8 rounded-2xl border-2 border-[#047857] text-center hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-bold mb-4 text-[#047857]">
                  {goal.isAgenda ? 'AU 2063' : `SDG ${goal.number}`}
                </div>
                <div className="text-lg font-medium text-[#047857]">{goal.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-blue">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Explore More About Pacem Health
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover our programs, approach, and the story behind our mission to transform African healthcare.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={programsCardImage}
                  alt="Our Programs"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-xl font-heading font-bold text-navy mb-4">Our Programs</h3>
                <p className="text-gray-700 mb-6">
                  Explore our flagship programs focused on healthcare development, pharmacy excellence, and pediatric care across Africa.
                </p>
                <Link href="/programs">
                  <a className="text-blue hover:text-blue/80 font-semibold inline-flex items-center gap-2 transition-colors">
                    Learn more →
                  </a>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={approachCardImage}
                  alt="Our Approach"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-xl font-heading font-bold text-navy mb-4">Our Approach</h3>
                <p className="text-gray-700 mb-6">
                  Discover how we're building resilient health systems through strategic planning, quality assurance, and innovative logistics.
                </p>
                <Link href="/our-approach">
                  <a className="text-blue hover:text-blue/80 font-semibold inline-flex items-center gap-2 transition-colors">
                    Learn more →
                  </a>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={historyCardImage}
                  alt="Our History"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 bg-white">
                <h3 className="text-xl font-heading font-bold text-navy mb-4">Our History</h3>
                <p className="text-gray-700 mb-6">
                  Read the story of how a 2013 research discovery in Liberia led to founding a company transforming African healthcare.
                </p>
                <Link href="/about/history">
                  <a className="text-blue hover:text-blue/80 font-semibold inline-flex items-center gap-2 transition-colors">
                    Learn more →
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-blue/90">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Join Us in Building Sustainable Healthcare Systems
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Partner with Pacem Health to create lasting impact through sustainable, equitable, and innovative healthcare solutions across Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 bg-white text-blue px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </a>
              </Link>
              <Link href="/about/company">
                <a className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                  Explore Our Company
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}