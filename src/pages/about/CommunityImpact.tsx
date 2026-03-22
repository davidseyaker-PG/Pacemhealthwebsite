import { motion } from 'motion/react';
import { Link } from 'wouter';
import heroImage from 'figma:asset/7dad1dbe8ca44f21e82d5cbb1aedd31a67a52fc7.png';

export default function CommunityImpact() {
  const impactAreas = [
    {
      title: 'Healthcare Workforce Development',
      description: 'Building training programs in pharmaceutical management, equipment maintenance, quality assurance, and clinical best practices to strengthen the healthcare workforce across Africa.',
      stat: 'Training',
      statLabel: 'Healthcare Workers'
    },
    {
      title: 'Local Job Creation',
      description: 'Developing sustainable employment pathways in healthcare logistics, pharmacy operations, and medical equipment services, with a commitment to local hiring and capacity building.',
      stat: 'Pan-African',
      statLabel: 'Reach'
    },
    {
      title: 'Community Health Programs',
      description: 'Designing programs to support maternal health, pediatric care, chronic disease management, and preventive health in communities with limited healthcare access.',
      stat: 'Community',
      statLabel: 'Centered'
    },
    {
      title: 'Rural Healthcare Access',
      description: 'Building pharmaceutical supply chains and pharmacy services designed to reach remote areas, so essential medicines are accessible to communities regardless of location.',
      stat: 'Last-Mile',
      statLabel: 'Delivery Focus'
    },
    {
      title: 'Economic Development',
      description: 'Committed to partnering with local suppliers, manufacturers, and businesses to strengthen local economies and build sustainable healthcare value chains.',
      stat: 'Locally',
      statLabel: 'Led Growth'
    },
    {
      title: 'Quality & Safety Standards',
      description: 'Advancing healthcare quality through training, certification programs, and quality assurance systems designed to protect patient safety across every market we enter.',
      stat: 'Quality',
      statLabel: 'First Approach'
    }
  ];

  const programs = [
    {
      image: 'https://images.unsplash.com/photo-1744809495173-217ca4faa8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBtZWRpY2FsJTIwdHJhaW5pbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY4MDE0NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pacem Excellence in African Pharmacy',
      description: 'Comprehensive training program improving pharmaceutical care standards, pharmacy management practices, and medication safety across Africa.',
      link: '/programs/pacem-excellence'
    },
    {
      image: 'https://images.unsplash.com/photo-1599666882726-fe28581e3147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hpbGRyZW4lMjBoZWFsdGglMjBjbGluaWN8ZW58MXx8fHwxNzY4MDE0NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pediatric Pharmacy Care',
      description: 'Specialized initiative ensuring children across Africa receive appropriate medications, proper dosing, and family-centered pharmaceutical care.',
      link: '/programs/pediatric-pharmacy'
    },
    {
      image: 'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwaGVhbHRoY2FyZSUyMHdvcmtlcnN8ZW58MXx8fHwxNzY4MDE0NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Healthcare System Strengthening',
      description: 'Building resilient health infrastructure, supply chain systems, and governance frameworks that serve communities for generations.',
      link: '/programs/healthcare-development'
    }
  ];

  const communityInitiatives = [
    {
      title: 'Maternal & Child Health',
      description: 'Ensuring mothers and children have access to essential medicines, prenatal care supplies, and pediatric health products.',
      highlights: [
        'Prenatal vitamin distribution programs',
        'Pediatric medication safety initiatives',
        'Maternal health product access',
        'Family planning support'
      ]
    },
    {
      title: 'Chronic Disease Management',
      description: 'Supporting communities in managing diabetes, hypertension, and other chronic conditions through reliable medication access.',
      highlights: [
        'Diabetes medication programs',
        'Hypertension treatment access',
        'Patient education initiatives',
        'Medication adherence support'
      ]
    },
    {
      title: 'Preventive Health',
      description: 'Promoting wellness through vaccination programs, health screenings, and preventive care product distribution.',
      highlights: [
        'Immunization support programs',
        'Health screening initiatives',
        'Preventive care education',
        'Community health campaigns'
      ]
    },
    {
      title: 'Healthcare Infrastructure',
      description: 'Investing in pharmacy facilities, medical equipment, and diagnostic capabilities in areas with limited healthcare access.',
      highlights: [
        'Community pharmacy development',
        'Medical equipment installation',
        'Diagnostic laboratory support',
        'Facility upgrade programs'
      ]
    }
  ];

  const impactStats = [
    { number: 'Pan-African', label: 'Market Reach' },
    { number: 'Thousands', label: 'Workers to Train' },
    { number: 'Millions', label: 'Lives to Reach' },
    { number: 'Hundreds', label: 'Local Partnerships' },
    { number: 'Expanding', label: 'Rural Access Network' },
    { number: '100%', label: 'Quality Standard' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-4"><nav className="flex items-center gap-2 text-sm text-gray-500"><Link href="/" className="hover:text-blue transition-colors">Home</Link><span>/</span><Link href="/about" className="hover:text-blue transition-colors">About</Link><span>/</span><span className="text-navy font-medium">Community Impact</span></nav></div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Community healthcare"
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
              Strengthening Communities Through Reliable Healthcare
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">Investing in people, building local capacity, and strengthening the healthcare infrastructure that communities across Africa depend on.</p>
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
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Pacem Health, community impact is at the heart of everything we do. We're committed to more than delivering medicines and medical equipment. Our vision is to invest in people, build local capacity, create jobs, and strengthen the healthcare infrastructure that communities depend on.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              From workforce training to ensuring rural communities can access quality-assured pharmaceuticals, our approach is designed to benefit families, strengthen economies, and support healthier futures across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas Grid */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-6">
              Our Community Impact Areas
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Six pillars of our commitment to healthcare communities across Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue/30 hover:shadow-lg transition-all duration-300"
                >
                                    <h3 className="text-xl font-heading font-semibold text-navy mb-4">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{area.description}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-3xl font-bold text-orange mb-1">{area.stat}</div>
                    <div className="text-sm text-gray-500">{area.statLabel}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Community Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-6">
              Our Community Programs
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Flagship initiatives strengthening healthcare delivery and building stronger communities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
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
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-heading font-semibold text-navy mb-4">{program.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>
                  <Link href={program.link} className="text-blue hover:text-orange font-semibold inline-flex items-center gap-2 transition-colors">
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Health Initiatives */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-6">
              Community Health Initiatives
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Targeted programs addressing critical health needs in communities we serve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityInitiatives.map((initiative, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-blue/20 hover:border-blue/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                                        <div>
                      <h3 className="text-xl font-heading font-semibold text-navy mb-2">{initiative.title}</h3>
                      <p className="text-gray-700">{initiative.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {initiative.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
              What We're Building Toward
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The goals driving our work across Africa
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                >
                  <div className="text-5xl font-bold text-orange mb-4">{stat.number}</div>
                  <div className="text-lg text-white/90">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Partnerships Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-6">
                Building Partnerships That Last
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We work hand-in-hand with local governments, community health organizations, NGOs, and businesses to create sustainable healthcare solutions tailored to each community's unique needs.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our partnership approach ensures programs are culturally appropriate, economically sustainable, and designed to strengthen local capacity rather than create dependency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Local Government Collaboration</h4>
                    <p className="text-gray-700">Working with health ministries to strengthen public health systems and ensure alignment with national priorities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Community Health Organizations</h4>
                    <p className="text-gray-700">Partnering with local NGOs and health groups who understand community needs and cultural contexts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Local Business Development</h4>
                    <p className="text-gray-700">Supporting local suppliers, distributors, and service providers to build sustainable healthcare value chains.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1652295372392-3171ab2c0e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGhhcm1hY3klMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjgwMTQ0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Community partnerships"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Cards Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
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
                  src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwaGVhbHRoY2FyZSUyMHdvcmtlcnN8ZW58MXx8fHwxNzY4MDE0NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Programs"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold text-navy mb-4">Our Programs</h3>
                <p className="text-gray-700 mb-6">
                  Explore our flagship programs strengthening healthcare delivery, raising pharmacy standards, and improving pediatric care.
                </p>
                <Link href="/programs" className="text-blue hover:text-orange font-semibold inline-flex items-center gap-2 transition-colors">
                  View Programs →
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
                  src="https://images.unsplash.com/photo-1649187642490-c1baa69d27fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcnVyYWwlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc2ODAxNDQwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sustainability"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold text-navy mb-4">Sustainability</h3>
                <p className="text-gray-700 mb-6">
                  Discover how we're building sustainable healthcare systems that benefit communities, economies, and the environment.
                </p>
                <Link href="/about/sustainability" className="text-blue hover:text-orange font-semibold inline-flex items-center gap-2 transition-colors">
                  Learn More →
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
                  src="https://images.unsplash.com/photo-1744809495173-217ca4faa8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBtZWRpY2FsJTIwdHJhaW5pbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY4MDE0NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Approach"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold text-navy mb-4">Our Approach</h3>
                <p className="text-gray-700 mb-6">
                  Learn about our systematic approach to strengthening health systems, ensuring quality, and building local capacity.
                </p>
                <Link href="/our-approach" className="text-blue hover:text-orange font-semibold inline-flex items-center gap-2 transition-colors">
                  Discover How →
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
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Partner With Us to Strengthen Communities
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join Pacem Health in building stronger healthcare systems through community-focused programs, workforce development, and sustainable partnerships across Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Involved
              </Link>
              <Link href="/programs" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}