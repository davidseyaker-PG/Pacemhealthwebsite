import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download } from 'lucide-react';
import { Link } from 'wouter';
import partnershipImage from '../../assets/b44f646b4420de97c03315aae69cfa18146efc14.png';
import accountabilityImage from '../../assets/1046ae3a93c7085bd26ffc18f9da87ba3eca78dc.png';
import excellenceImage from '../../assets/8712fbe1da3e019a1db43190c491503533761199.png';
import equityImage from '../../assets/4f5afa9a02e0acc819d73f95b102e33b7211f4b2.png';
import mutualRespectImage from '../../assets/226e4076e8527098921a3b17c29d7eb9397df76a.png';
import heroImage from '../../assets/ea6c8fb96b5cfbcca769ba24799b06a0bd30a208.png';

export default function OurCompany() {
  const [activeTab, setActiveTab] = useState('partnership');

  const values = {
    partnership: {
      title: 'Partnership',
      description:
        'We believe in the power of collaboration. By working hand-in-hand with governments, healthcare providers, NGOs, and communities, we create solutions that are co-designed, locally relevant, and sustainable. Our partnerships are built on mutual respect, shared goals, and a commitment to lasting impact.',
      image: partnershipImage,
    },
    accountability: {
      title: 'Accountability',
      description:
        'We hold ourselves to the highest standards of responsibility and transparency. From project planning to execution and evaluation, we measure our impact, report our progress, and continuously improve. Our stakeholders can trust that we deliver on our commitments and take ownership of outcomes.',
      image: accountabilityImage,
    },
    excellence: {
      title: 'Excellence',
      description:
        'We are committed to delivering the highest quality in everything we do. From the products we source to the systems we design and the services we provide, excellence is our standard. We continuously improve, learn, and adapt to ensure our solutions meet the evolving needs of the healthcare landscape.',
      image: excellenceImage,
    },
    equity: {
      title: 'Equity',
      description:
        'Health is a human right. We are dedicated to breaking down barriers to care and ensuring that quality healthcare is accessible to all, regardless of geography, income, or background. Our work prioritizes underserved populations and addresses systemic inequities in health systems.',
      image: equityImage,
    },
    mutualRespect: {
      title: 'Mutual Respect',
      description:
        'We honor the dignity, expertise, and perspectives of all stakeholders. Whether engaging with ministries of health, community health workers, or patients, we approach every interaction with humility and cultural sensitivity. We listen, learn, and value diverse voices in shaping health solutions.',
      image: mutualRespectImage,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy">Our Company</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Global Health - Stethoscope and Earth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-navy/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-4 leading-tight">
              Building resilient health systems to improve human health
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section (merged with Company Overview) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-8">
              Our Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When <strong>David Seyaker</strong> founded <strong>Pacem Health</strong> in 2025, the vision was clear: to build resilient health systems that strengthen care delivery across Africa. Drawing from years of experience in global health supply chains and pharmaceutical distribution, David recognized that Africa's healthcare challenges required more than isolated interventions—they demanded integrated, sustainable solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pacem Health was born from a simple yet powerful insight: <em>the strongest health systems are built through partnership, not charity</em>. We started by listening—to ministries of health, to frontline healthcare workers, to communities who knew their needs best. What emerged was a model that combines world-class supply chain management, pharmaceutical expertise, medical equipment provisioning, and healthcare facility development—all tailored to the unique context of each partner country.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, Pacem Health partners with governments, NGOs, development organizations, and private sector leaders to build resilient, self-sustaining health infrastructure. From Kenya to Ghana to Nigeria, our work spans pharmaceutical supply chains, medical equipment, digital health solutions, and workforce development—all anchored in our commitment to building health systems that last, one partnership at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border-t-4 border-blue p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-heading font-semibold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To strengthen health systems across Africa by delivering quality-assured pharmaceutical supply chains, medical equipment, and healthcare infrastructure that improve patient outcomes and build self-sufficient healthcare delivery.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border-t-4 border-blue p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-heading font-semibold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A future where every person in Africa has access to quality, affordable healthcare—powered by resilient systems, purpose-built solutions, and partnerships that prioritize people over profit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values - PACEM Tabs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five values guide everything we do: Partnership, Accountability, Excellence, Equity, and Mutual Respect
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(values).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-heading font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {value.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                <img
                  src={values[activeTab as keyof typeof values].image}
                  alt={values[activeTab as keyof typeof values].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-4xl font-heading font-bold text-navy mb-6">
                  {values[activeTab as keyof typeof values].title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {values[activeTab as keyof typeof values].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl font-heading font-extrabold text-green mb-2">10+</div>
              <div className="text-gray-300">Healthcare Facilities in Active Pipeline</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-heading font-extrabold text-green mb-2">3</div>
              <div className="text-gray-300">Priority Countries: Kenya, Ghana, Nigeria</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-heading font-extrabold text-green mb-2">12</div>
              <div className="text-gray-300">Regulatory Authority MOUs Signed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-heading font-extrabold text-green mb-2">$500K+</div>
              <div className="text-gray-300">Initial Product Commitments Secured</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Blueprint for Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Our Blueprint for Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three core principles guide our approach to building resilient health systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border-t-4 border-blue p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-heading font-semibold text-navy mb-4">1. Systems, Not Just Solutions</h3>
              <p className="text-gray-700 leading-relaxed">
                We don't deliver isolated products or services—we build integrated ecosystems that address root causes, strengthen infrastructure, and create lasting capacity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border-t-4 border-blue p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-heading font-semibold text-navy mb-4">2. True Partnership</h3>
              <p className="text-gray-700 leading-relaxed">
                We co-design solutions with local stakeholders, respecting context and culture, ensuring ownership and alignment at every level—from policy to practice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border-t-4 border-blue p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-heading font-semibold text-navy mb-4">3. Building for Self-Sufficiency</h3>
              <p className="text-gray-700 leading-relaxed">
                Our goal is to work ourselves out of a job. Every project includes knowledge transfer, capacity building, and sustainability planning so systems thrive long after we're gone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Working Across the Healthcare Ecosystem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Working Across the Healthcare Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with governments, development partners, NGOs, and private sector leaders to strengthen health systems at every level.
            </p>
          </motion.div>

          {/* Partner Categories Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              'Ministries of Health',
              'Development Organizations',
              'UN & Global Health Agencies',
              'Private Healthcare Networks',
              'NGOs & Community Organizations',
              'Medical Universities & Training Institutions',
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-6 rounded-lg text-center hover:bg-blue hover:text-white transition-all duration-300 group cursor-default shadow-sm"
              >
                <p className="font-medium text-sm">{partner}</p>
              </motion.div>
            ))}
          </div>

          {/* Become a Partner CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue rounded-2xl p-12 text-center text-white"
          >
            <h3 className="text-3xl font-heading font-bold mb-4">Become a Partner</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
              Whether you're a government ministry, development partner, NGO, or healthcare institution, we're ready to collaborate on building stronger, more resilient health systems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue rounded-lg hover:bg-navy hover:text-white transition-all duration-300 font-heading font-semibold inline-flex items-center gap-2"
              >
                Request Partnership Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learn More About Pacem Health Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="h-1 w-16 bg-orange mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Learn More About Pacem Health
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our approach to building resilient, self-sustaining health infrastructure across Africa.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Leadership Card */}
            <motion.a
              href="/about/leadership"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-lg overflow-hidden border-t-4 border-blue shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1763739528307-ad10867048b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXJzaGlwJTIwY29ycG9yYXRlfGVufDF8fHx8MTc2ODc1ODgxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Leadership"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-blue mb-2">
                  Leadership →
                </h3>
                <p className="text-gray-600 text-sm">
                  Turning our vision into action.
                </p>
              </div>
            </motion.a>

            {/* History Card */}
            <motion.a
              href="/about/history"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-lg overflow-hidden border-t-4 border-blue shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1680263131734-8240e8dfd29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwdGltZWxpbmUlMjBhcmNoaXZlfGVufDF8fHx8MTc2ODc1ODgxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="History"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-blue mb-2">
                  History →
                </h3>
                <p className="text-gray-600 text-sm">
                  Our journey of building resilient health systems.
                </p>
              </div>
            </motion.a>

            {/* Business Segments Card */}
            <motion.a
              href="/our-approach"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-lg overflow-hidden border-t-4 border-blue shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1758518729593-275baa967f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2ODc0OTY2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business Segments"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-blue mb-2">
                  Business Segments →
                </h3>
                <p className="text-gray-600 text-sm">
                  Improving care in every setting through our services.
                </p>
              </div>
            </motion.a>

            {/* Newsroom Card */}
            <motion.a
              href="/stories"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-white rounded-lg overflow-hidden border-t-4 border-blue shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1640572114471-3f01541bce88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcm9vbSUyMGpvdXJuYWxpc20lMjBtZWRpYXxlbnwxfHx8fDE3Njg3NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Newsroom"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-blue mb-2">
                  Newsroom →
                </h3>
                <p className="text-gray-600 text-sm">
                  Latest updates and developments.
                </p>
              </div>
            </motion.a>
          </div>
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
              Ready to Build Together?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We're building the future of African healthcare—and we're looking for partners who share our commitment to lasting impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-lg font-heading font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-heading font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Download className="w-5 h-5" />
                Download Company Overview
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
