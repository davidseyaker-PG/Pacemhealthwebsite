import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'wouter';
import { ArrowRight, Target, Eye, Heart, Users, Award, Shield, Handshake, CheckCircle, ChevronDown } from 'lucide-react';
import partnershipImage from 'figma:asset/b44f646b4420de97c03315aae69cfa18146efc14.png';
import accountabilityImage from 'figma:asset/1046ae3a93c7085bd26ffc18f9da87ba3eca78dc.png';
import excellenceImage from 'figma:asset/8712fbe1da3e019a1db43190c491503533761199.png';
import equityImage from 'figma:asset/4f5afa9a02e0acc819d73f95b102e33b7211f4b2.png';
import mutualRespectImage from 'figma:asset/226e4076e8527098921a3b17c29d7eb9397df76a.png';
import missionImage from 'figma:asset/3615afc07e05ae980b9b2915f1c1aeccc7563c09.png';
import visionImage from 'figma:asset/cb157bf7eeffd2ee0e34e387eb4226e051d81756.png';

export default function MissionVision() {
  const [activeValue, setActiveValue] = useState('partnership');
  const [expandedMission, setExpandedMission] = useState<number | null>(null);
  const [expandedVision, setExpandedVision] = useState<number | null>(null);

  const values = {
    partnership: {
      title: 'Partnership',
      icon: Handshake,
      description: 'We believe in the power of collaboration. By working hand-in-hand with governments, healthcare providers, NGOs, and communities, we create solutions that are co-designed, locally relevant, and sustainable. Our partnerships are built on mutual respect, shared goals, and a commitment to lasting impact.',
      image: partnershipImage,
      actions: [
        'Establishing partnerships with Ministries of Health across 5 initial African markets',
        'Building long-term relationships with local healthcare providers and communities',
        'Engaging with international donors and development partners for 2026 launch',
        'Creating shared value through transparent, mutually beneficial partnerships'
      ]
    },
    accountability: {
      title: 'Accountability',
      icon: Shield,
      description: 'We hold ourselves to the highest standards of transparency, reliability, and performance. Every commitment we makeâwhether to a government, healthcare facility, or patientâis a promise we keep. We measure our success by the health outcomes we enable and the trust we build.',
      image: accountabilityImage,
      actions: [
        'Targeting 98%+ on-time delivery commitments across all operations by 2027',
        'Establishing full transparency in pricing, product sourcing, and quality standards',
        'Implementing regular impact reporting systems to track health outcomes',
        'Building accountability frameworks that prioritize results over activities'
      ]
    },
    excellence: {
      title: 'Excellence',
      icon: Award,
      description: 'Quality is non-negotiable. From product selection to service delivery, we pursue operational excellence at every step. We source only WHO-prequalified and internationally certified products, implement rigorous quality assurance processes, and continuously improve our systems to serve African healthcare better.',
      image: excellenceImage,
      actions: [
        'Committed to sourcing 100% WHO-prequalified pharmaceuticals and certified medical equipment',
        'Implementing ISO-certified quality management systems across all operations',
        'Planning to train 5,000+ healthcare workers annually starting 2027',
        'Building continuous improvement processes through technology and continuous improvement'
      ]
    },
    equity: {
      title: 'Equity',
      icon: Users,
      description: 'Healthcare is a human right, not a privilege. We design our solutions to ensure that quality healthcare reaches everyoneâfrom urban teaching hospitals to remote rural clinics. Our tiered pricing models, flexible financing options, and last-mile delivery capabilities prioritize access for underserved communities.',
      image: equityImage,
      actions: [
        'Expanding to reach all 54 African countries by 2030',
        'Developing tiered pricing models that make quality healthcare affordable',
        'Creating flexible financing options for resource-limited facilities',
        'Prioritizing essential medicines and equipment for primary healthcare'
      ]
    },
    respect: {
      title: 'Mutual Respect',
      icon: Heart,
      description: 'We approach every relationship with humility and respect for local knowledge, context, and expertise. We listen before we speak, learn before we advise, and adapt our solutions to fitânot forceâlocal realities. Mutual respect means valuing African leadership, local capacity, and cultural wisdom.',
      image: mutualRespectImage,
      actions: [
        'African-led leadership team driving strategy and operations',
        'Investing in local capacity building and training programs',
        'Adapting solutions to local contexts, languages, and cultural norms',
        'Treating every stakeholderâfrom ministers to community health workersâwith equal respect'
      ]
    }
  };

  const missionPillars = [
    {
      title: 'Quality-Assured Product Distribution',
      description: 'Reliable procurement and distribution of WHO-prequalified pharmaceuticals and internationally certified medical equipment, ensuring every product meets the highest quality standards from manufacturer to patient.'
    },
    {
      title: 'Healthcare Workforce Development',
      description: 'Comprehensive training and capacity building programs targeting 5,000+ healthcare workers annually starting 2027, covering Good Distribution Practice, pharmacovigilance, regulatory affairs, and clinical best practices.'
    },
    {
      title: 'Government Advisory Services',
      description: 'Strategic advisory services to Ministries of Health on procurement reform, regulatory strengthening, supply chain optimization, and health systems developmentâbuilding institutional capacity for long-term sustainability.'
    },
    {
      title: 'Sustainable Healthcare Financing',
      description: 'Flexible financing models, tiered pricing structures, and payment plans that make quality healthcare accessible and affordable for resource-limited facilities and underserved populations.'
    },
    {
      title: 'Last-Mile Delivery Excellence',
      description: 'Advanced logistics and cold chain capabilities ensuring reliable delivery to remote health facilities in the most challenging environmentsâfrom urban centers to rural communities across 54 African countries.'
    }
  ];

  const visionPillars = [
    {
      title: 'Universal Access Across 54 Countries',
      description: 'Ensuring every person in Africaâregardless of geography, income, or backgroundâhas access to essential medicines, medical equipment, and quality healthcare services. Our expansion roadmap targets comprehensive coverage across all African nations by 2030.'
    },
    {
      title: 'Self-Sufficient Health Systems',
      description: 'Building health infrastructure that operates independently of external aidâwith local leadership, sustainable financing, robust regulatory frameworks, and trained workforces capable of delivering quality care without perpetual donor dependency.'
    },
    {
      title: 'African-Led Healthcare Innovation',
      description: 'Championing solutions designed by African leaders for African contextsârespecting local knowledge, cultural norms, and community wisdom. Our African-led leadership team ensures every solution is contextually appropriate and locally owned.'
    },
    {
      title: 'Modern Health Facility Infrastructure',
      description: 'Equipping hospitals, clinics, and community health centers with purpose-built medical technology, reliable power systems, cold chain infrastructure, diagnostic equipment, and digital health tools that enable world-class care delivery.'
    },
    {
      title: 'Empowered Healthcare Workforce',
      description: 'Investing in continuous professional development, providing access to global best practices, delivering ongoing training and mentorship, and ensuring healthcare workers have the knowledge, tools, and resources to excel in their life-saving work.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/about/company" className="hover:text-navy transition-colors">
              Our Story
            </Link>
            <span>/</span>
            <span className="text-navy">Mission & Vision</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaGVhbHRoY2FyZSUyMHdvcmtlcnMlMjBjb2xsYWJvcmF0aW9uJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzY4MDA4MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Healthcare collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-[#0A1628]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight">
              Transforming Healthcare<br />Through Action
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl mb-10 leading-relaxed">
              Our mission and vision aren't just statementsâthey're commitments we live every day across 54 African countries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-lg font-heading font-semibold hover:bg-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about/company" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-heading font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Learn Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Mission Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-2xl text-navy/80 font-heading font-medium mb-8 leading-relaxed">
                To strengthen health systems across Africa by delivering integrated pharmaceutical supply chains, medical equipment, and healthcare infrastructure that improve patient outcomes and build self-sufficient healthcare delivery.
              </p>
              <div className="bg-gray-50 border-l-4 border-orange p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "We're not just distributing productsâwe're building the foundation for Africa's healthcare independence."
                </p>
              </div>
            </motion.div>

            {/* Mission Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src={missionImage}
                  alt="Healthcare professional consultation"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange text-white px-8 py-6 rounded-xl shadow-2xl">
                <p className="text-5xl font-heading font-extrabold mb-1">5</p>
                <p className="text-sm font-semibold uppercase tracking-wide">Initial Markets (2026)</p>
              </div>
            </motion.div>
          </div>

          {/* Mission Pillars - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-heading font-semibold text-navy mb-6 text-center">We will do this through:</h3>
            <div className="space-y-4">
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-orange/50 transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => setExpandedMission(expandedMission === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-navy/10 text-navy w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-heading font-semibold text-navy">{pillar.title}</h4>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        expandedMission === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedMission === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-700 leading-relaxed pl-12">
                        {pillar.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Vision Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src={visionImage}
                  alt="Vision - Looking toward the future"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue/70 via-blue/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue text-white px-8 py-6 rounded-xl shadow-2xl">
                <p className="text-5xl font-heading font-extrabold mb-1">54</p>
                <p className="text-sm font-semibold uppercase tracking-wide">African Countries</p>
              </div>
            </motion.div>

            {/* Vision Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">Our Vision</h2>
              <p className="text-2xl text-navy/80 font-heading font-medium mb-8 leading-relaxed">
                A future where every person in Africa has access to quality, affordable healthcareâpowered by resilient systems, purpose-built solutions, and partnerships that prioritize people over profit.
              </p>
              <div className="bg-blue/5 border-l-4 border-blue p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "We envision an Africa where healthcare excellence is the norm, not the exceptionâwhere every community has the tools to thrive."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Vision Pillars - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-heading font-semibold text-navy mb-6 text-center">We're building toward:</h3>
            <div className="space-y-4">
              {visionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue/50 transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => setExpandedVision(expandedVision === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-blue/10 text-blue w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-heading font-semibold text-navy">{pillar.title}</h4>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        expandedVision === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedVision === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-700 leading-relaxed pl-12">
                        {pillar.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Interactive Tabs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PACEM represents our unwavering commitment to transforming healthcare through principled action
            </p>
          </motion.div>

          {/* Value Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(values).map(([key, value]) => {
              const Icon = value.icon;
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveValue(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                    activeValue === key
                      ? 'bg-navy text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: activeValue === key ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  {value.title}
                </motion.button>
              );
            })}
          </div>

          {/* Active Value Content */}
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src={values[activeValue].image}
                alt={values[activeValue].title}
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-6 py-3 rounded-lg shadow-lg">
                <p className="text-2xl font-heading text-navy font-bold">{values[activeValue].title}</p>
              </div>
            </div>

            <div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {values[activeValue].description}
              </p>
              <h4 className="text-xl font-heading font-semibold text-navy mb-4">
                In Action:
              </h4>
              <div className="space-y-3">
                {values[activeValue].actions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue/5 hover:border-blue/20 border border-transparent transition-all duration-300"
                  >
                    <div className="bg-blue w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{action}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-[#0A1628] to-navy/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">2027 Targets</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our ambitious goals for transforming African healthcare after launch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '5,000+', label: 'Healthcare Workers Trained Annually', sublabel: '2027 Target' },
              { number: '98%', label: 'On-Time Delivery Rate', sublabel: '2027 Target' },
              { number: '100%', label: 'WHO-Prequalified Products', sublabel: 'Quality Standard' },
              { number: '54', label: 'African Countries', sublabel: '2030 Goal' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-8 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <p className="text-5xl font-heading font-extrabold mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-white/60 text-sm">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-navy rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Join Us in Transforming Healthcare
            </h2>
            <p className="text-xl mb-10 text-gray-700 leading-relaxed">
              Whether you're a government, healthcare facility, or development partner, we're ready to collaborate on solutions that make a real difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-lg font-heading font-semibold hover:bg-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-heading font-semibold hover:bg-navy/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Our Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}