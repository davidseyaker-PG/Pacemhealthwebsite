import { motion } from "motion/react";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Target, Shield, Users, Lightbulb, TrendingUp, Globe, Building2, Zap, Award } from "lucide-react";
import heroImage from "figma:asset/1360f77dc6f8810ca5c43a1ccd02731f871d62ec.png";

export default function OurApproach() {
  const coreValues = [
    {
      icon: Shield,
      title: "Quality First",
      description: "International certifications and world-class standards across every service",
      features: [
        "Internationally prequalified products",
        "ISO-certified processes",
        "Continuous quality monitoring"
      ]
    },
    {
      icon: Users,
      title: "Partnership Model",
      description: "Long-term collaboration built on trust and mutual success",
      features: [
        "Co-designed solutions",
        "Shared accountability",
        "Sustained engagement"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description: "Digital health and modern supply chain solutions",
      features: [
        "Real-time tracking systems",
        "Digital health platforms",
        "Data-driven decisions"
      ]
    },
    {
      icon: Globe,
      title: "Pan-African Expertise",
      description: "Deep local knowledge combined with global best practices",
      features: [
        "15+ African markets",
        "Local regulatory expertise",
        "Cultural competence"
      ]
    }
  ];

  const uniqueApproach = [
    {
      title: "Strategy Grounded in Reality",
      description: "Strategic recommendations informed by on-the-ground operational experience and market realities.",
      icon: Target
    },
    {
      title: "Implementation with Vision",
      description: "Strategic deployment with continuous optimization based on your long-term objectives.",
      icon: TrendingUp
    },
    {
      title: "Comprehensive Capabilities",
      description: "Integrated solutions across the entire healthcare value chain.",
      icon: Globe
    },
    {
      title: "Local + International Standards",
      description: "Deep African market roots with global certifications and quality standards.",
      icon: Shield
    },
    {
      title: "Long-Term Partnership",
      description: "Committed to ongoing optimization, support, and growth.",
      icon: Award
    },
    {
      title: "Rapid Response Capability",
      description: "Agile deployment teams ready to address urgent healthcare needs.",
      icon: Zap
    }
  ];

  const partnerTypes = [
    {
      category: "Multilateral Organizations",
      examples: ["Multilateral development banks", "International health organizations", "Development finance institutions", "Global health agencies", "Health-focused multilateral funds"]
    },
    {
      category: "Development Agencies",
      examples: ["Bilateral development agencies", "International cooperation organizations", "Technical assistance providers", "Foreign development ministries", "Global health development partners"]
    },
    {
      category: "Governments & Ministries",
      examples: ["Ministries of Health", "National Health Insurance", "Regulatory Authorities"]
    },
    {
      category: "Private Sector",
      examples: ["Pharmaceutical Manufacturers", "Medical Device Companies", "Healthcare Investors"]
    },
    {
      category: "NGOs & Foundations",
      examples: ["Global health foundations", "Health access organizations", "Humanitarian medical organizations", "Community-based organizations"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy font-medium">Our Approach</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70 z-10" />
        <motion.img
          src={heroImage}
          alt="Global healthcare network"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-4 leading-tight">
              Our Approach
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              Proven methodology combining global best practices with deep African market expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Strategy and Implementation, Seamlessly Integrated
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We serve both <strong>global partners entering African markets</strong> and <strong>communities seeking quality healthcare</strong>. Our integrated approach delivers end-to-end solutions with unmatched efficiency and impact — combining unwavering quality standards, collaborative partnerships, purpose-built solutions, and deep local expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Grid - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600">
              Principles that define how we work and the impact we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-navy hover:border-blue"
                >
                  <h3 className="text-xl font-heading font-bold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <ul className="space-y-2">
                    {value.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinctive elements that set us apart in delivering healthcare solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueApproach.map((approach, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-navy hover:border-blue"
                >
                  <h3 className="text-xl font-heading font-bold text-navy mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {approach.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Partner Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse range of partners we collaborate with to achieve our mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-heading text-navy font-bold mb-4">
                  {type.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-white px-3 py-1.5 rounded-full text-sm text-gray-700 border border-gray-200 hover:border-blue hover:text-blue transition-colors"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process - Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures successful outcomes at every stage
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "We begin by understanding your objectives, constraints, and context through comprehensive stakeholder engagement and market analysis."
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Our team co-creates tailored solutions that align with your strategic goals while addressing operational realities and regulatory requirements."
              },
              {
                step: "03",
                title: "Implementation & Deployment",
                description: "We execute with precision, using our local networks and global expertise to deliver on time and on budget."
              },
              {
                step: "04",
                title: "Optimization & Support",
                description: "Continuous monitoring, performance tracking, and ongoing support ensure sustained impact and continuous improvement."
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-navy text-white text-2xl font-heading w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-navy mb-3">{phase.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-blue/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1759310610775-b298f34f73aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBwYXJ0bmVyc2hpcCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODUyNTk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Partnership background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Experience the Pacem Health Difference
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Partner with us to bring world-class healthcare solutions to Africa. Our proven approach, deep expertise, and commitment to excellence ensure your success.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors"
              >
                Partner With Us
                <ArrowRight className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="/commitments/programs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                View Success Stories
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>Proven Methodology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>Pan-African Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>Quality Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}