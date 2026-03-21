import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'wouter';
import heroImage from 'figma:asset/b57d35428c93383e6fa708fce857702def4533cf.png';
import inspireImage from 'figma:asset/584966ecdbf06d97187474045952e8f6fa6ae001.png';
import mobilizeImage from 'figma:asset/f1c7d0452f41217cb3b9e1ee979ef334484264d2.png';
import partnerImage from 'figma:asset/6e564376298b3ac3fefa656ba21c61ce580ee369.png';
import transformImage from 'figma:asset/54ebd154e7c4865d614741c73112d09c2bd5c241.png';
import createImage from 'figma:asset/7537b46b6a38a79ff2259b35905b300569006baa.png';

const impactTabs = [
  {
    id: 'inspire',
    label: 'Inspire',
    title: 'Inspire Vision',
    description: 'We inspire our teams to see beyond current limitations and envision transformative possibilities for Africa\'s health systems.',
    image: inspireImage
  },
  {
    id: 'mobilize',
    label: 'Mobilize',
    title: 'Mobilize Teams',
    description: 'We bring together diverse talent, resources, and stakeholders to create unified momentum toward shared health goals.',
    image: mobilizeImage
  },
  {
    id: 'partner',
    label: 'Partner',
    title: 'Partner Authentically',
    description: 'We build genuine, trust-based relationships with communities, governments, and organizations to co-create lasting solutions.',
    image: partnerImage
  },
  {
    id: 'act',
    label: 'Act',
    title: 'Act Decisively',
    description: 'We make bold, informed decisions and take swift action to address critical healthcare challenges across the continent.',
    image: 'https://images.unsplash.com/photo-1723972027105-00ed6f2ee5d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXIlMjBhcnJvdyUyMGRpcmVjdGlvbiUyMHNpZ258ZW58MXx8fHwxNzY3OTgyMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'create',
    label: 'Create',
    title: 'Create Lasting Change',
    description: 'We design and implement purpose-built solutions that create sustainable, long-term impact on health systems and communities.',
    image: createImage
  },
  {
    id: 'transform',
    label: 'Transform',
    title: 'Transform Systems',
    description: 'We fundamentally reimagine and rebuild healthcare delivery systems to create resilient, equitable health infrastructure.',
    image: transformImage
  }
];

const leadershipQualities = [
  {
    title: 'Mission-Driven Leadership',
    description: 'Our leaders are united by a shared commitment to improving health outcomes across Africa, guided by purpose rather than profit alone.'
  },
  {
    title: 'Systems Expertise',
    description: 'Deep understanding of complex healthcare systems, regulatory environments, and the unique challenges of operating across diverse African markets.'
  },
  {
    title: 'Purpose-Built Approach',
    description: 'Commitment to deploying purpose-built approaches, using technology, and challenging conventional thinking to solve persistent health challenges.'
  }
];

const usLeadership = [
  {
    name: 'David Seyaker',
    title: 'Founder & Chief Executive Officer',
    bio: 'David founded Pacem Health in 2025 with a vision to strengthen healthcare delivery across Africa through purpose-built supply chain solutions. With extensive experience in global health systems management, regulatory compliance, and market supply chain management, he leads the company\'s strategic direction and business development.',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4MDA2MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'david-seyaker'
  },
  {
    name: 'Sarah Mitchell',
    title: 'Chief Operating Officer',
    bio: 'Sarah oversees operational excellence across product sourcing, quality assurance, and service delivery. She brings deep expertise in procurement, supply chain management, pharmaceutical distributors, she brings her operational agility in healthcare supply chain regulation and operational management.',
    image: 'https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3OTM1MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'sarah-mitchell'
  },
  {
    name: 'Michael Anderson',
    title: 'Chief Strategy Officer',
    bio: 'Michael leads strategic planning, market development, and advisory services expansion. He specializes in designing health systems strengthening programs across 15 African countries and has played expertise in healthcare policy, business strategy and digital health transformation.',
    image: 'https://images.unsplash.com/photo-1578758803946-2c4f6738df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjgwMDYyODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'michael-anderson'
  },
  {
    name: 'Jennifer Chen',
    title: 'Chief Financial Officer',
    bio: 'Jennifer manages financial operations, investment planning, and sustainable financing strategies. With a background in healthcare finance and international development, she ensures the organization\'s financial health while supporting its mission-driven approach to African health systems strengthening.',
    image: 'https://images.unsplash.com/photo-1758369636875-60b3dcb76366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJ1c2luZXNzd29tYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3OTQwMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'jennifer-chen'
  },
  {
    name: 'Robert Williams',
    title: 'Chief Procurement Officer',
    bio: 'Robert leads product strategy, vendor relationships, and procurement operations across pharmaceutical, medical equipment, and laboratory supplies. His 20+ years in global healthcare procurement bring deep expertise in competitive pricing for African health systems.',
    image: 'https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzk3NjQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'robert-williams'
  },
  {
    name: 'Lisa Thompson',
    title: 'VP of Business Development',
    bio: 'Lisa drives new market expansion, government partnerships, and strategic alliances across Africa. Previously with USAID and the World Bank, she brings extensive experience in public-private partnerships and sustainable finance for health system strengthening.',
    image: 'https://images.unsplash.com/photo-1553028826-defa0c2187d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwbGVhZGVyfGVufDF8fHx8MTc2ODAwNjI4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'lisa-thompson'
  }
];

const globalLeadership = [
  {
    name: 'Dr. Amara Okonkwo',
    title: 'Africa Regional Director',
    bio: 'Dr. Okonkwo leads regional operations across Africa, overseeing market development, government partnerships, and service implementation. Former senior advisor to multiple African Ministries of Health, she brings unparalleled regional expertise and strategic relationships.',
    image: 'https://images.unsplash.com/photo-1675383094481-3e2088da943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBwcm9mZXNzaW9uYWwlMjBzdWl0fGVufDF8fHx8MTc2ODAwNjQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'amara-okonkwo'
  },
  {
    name: 'James Kariuki',
    title: 'Director of Port Operations',
    bio: 'James manages operations across Kenya, Tanzania, Uganda, Rwanda, and Ethiopia. With 20+ years in pharmaceutical logistics and port operations in East Africa, he ensures seamless delivery of equipment, training, and technical support to health facilities.',
    image: 'https://images.unsplash.com/photo-1621062089461-01f1eaebb66c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwbWFuJTIwYnVzaW5lc3MlMjBzdWl0fGVufDF8fHx8MTc2ODAwNjQ3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'james-kariuki'
  },
  {
    name: 'Fatima Diallo',
    title: 'Director of Partnerships - Africa',
    bio: 'Fatima builds and manages strategic partnerships with Ministries of Health, international donors, NGOs, USAID and the African Union. She has deep expertise in public-private partnerships and donor coordination.',
    image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjgwMDY0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'fatima-diallo'
  },
  {
    name: 'Kwame Mensah',
    title: 'West Africa Operations Director',
    bio: 'Kwame directs operations across Nigeria, Ghana, Senegal, and Francophone West Africa. With extensive experience in pharmaceutical distribution and cold chain logistics, warehousing, and last-mile delivery across challenging environments.',
    image: 'https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXN0JTIwYWZyaWNhbiUyMGJ1c2luZXNzbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MDA2NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'kwame-mensah'
  },
  {
    name: 'Dr. Thandive Moyo',
    title: 'Chief Medical Officer - Africa',
    bio: 'Dr. Moyo provides clinical leadership and medical expertise across product selection, clinical training programs, and health facility support. A trained pharmacist with 15+ years across Southern Africa, she ensures clinical appropriateness of all solutions and services.',
    image: 'https://images.unsplash.com/photo-1632054226770-9ce6a8915462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmVtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODAwNjQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'thandive-moyo'
  },
  {
    name: 'Mohammed Hassan',
    title: 'Southern Africa Regional Manager',
    bio: 'Mohammed manages market development and operations across South Africa, Botswana, Zambia, Zimbabwe, and Mozambique. His expertise in Southern African health systems and procurement agencies ensures successful engagement.',
    image: 'https://images.unsplash.com/photo-1608009139974-b77b4d1b6933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFmcmljYW4lMjBidXNpbmVzc21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgwMDY0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'mohammed-hassan'
  },
  {
    name: 'Grace Wanjiru',
    title: 'Director of Training & Capacity Building',
    bio: 'Grace develops and delivers training programs for healthcare workers across Africa on medical equipment, laboratory systems, and pharmacy operations. With a background in nursing education and biomedical engineering, she has trained over 5,000 healthcare workers in 8 countries.',
    image: 'https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgwMDY0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'grace-wanjiru'
  },
  {
    name: 'Youssef El-Amin',
    title: 'North Africa & Francophone Director',
    bio: 'Youssef leads operations across Morocco, Tunisia, and Francophone countries including Egypt, Morocco, Tunisia, and Central Africa. Fluent in French and Arabic, he navigates diverse regulatory environments and cultural contexts to expand Pacem Health\'s reach across the francophone world.',
    image: 'https://images.unsplash.com/photo-1719561940606-ec38a36e5f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aCUyMGFmcmljYW4lMjBidXNpbmVzc21hbiUyMHN1aXR8ZW58MXx8fHwxNzY4MDA2NDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'youssef-el-amin'
  },
  {
    name: 'Adaeze Nwachukwu',
    title: 'Director of Quality & Regulatory Affairs - Africa',
    bio: 'Adaeze ensures compliance with medicines regulatory requirements across all African markets. With experience at national medicines regulatory authorities and WHO pre-qualification programs, she maintains quality standards and regulatory compliance across all product categories.',
    image: 'https://images.unsplash.com/photo-1643660398957-614da01c6b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3N3b21hbiUyMHByb2Zlc3Npb25hbCUyMGdsYXNzZXN8ZW58MXx8fHwxNzY4MDA2NDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'adaeze-nwachukwu'
  }
];

export default function Leadership() {
  const [activeTab, setActiveTab] = useState('inspire');

  const activeTabData = impactTabs.find(tab => tab.id === activeTab) || impactTabs[0];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Leadership Team - Diverse Professionals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 to-[#0A1628]/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6">
              Leadership & Management
            </h1>
            <p className="text-xl text-white/95 max-w-3xl leading-relaxed">
              Combining strategic vision with implementation excellence to strengthen Africa's health systems
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
            Our management team brings together decades of experience in healthcare delivery, supply chain management, 
            regulatory compliance, and social impact across Africa. United by our PACEM values, we are committed to 
            building resilient health systems that serve communities with excellence, dignity, and lasting impact.
          </motion.p>
        </div>
      </section>

      {/* IMPACT Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Our Leadership Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The IMPACT framework defines how we lead, make decisions, and drive transformative change across Africa's health systems
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {impactTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-navy text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-[400px] md:h-[500px] overflow-hidden group">
                <img
                  src={activeTabData.image}
                  alt={activeTabData.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">
                  {activeTabData.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {activeTabData.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* U.S. Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">U.S. Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              The Pacem Health U.S. Leadership team is committed to serving the interests of the company and achieving sustainable growth in company value. In the following, you will also find further information on the management of our businesses.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {usLeadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl border-t-4 border-green shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-semibold text-navy mb-2">{leader.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{leader.title}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{leader.bio}</p>
                    <Link
                      href={`/about/leadership/${leader.slug}`}
                      className="inline-flex items-center gap-2 text-green hover:text-navy font-semibold transition-colors duration-300"
                    >
                      Biography
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Global Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">Global Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Our Global Leadership team brings together African health systems expertise, regional operational knowledge, and strategic partnerships to drive health system transformation across the continent.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {globalLeadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl border-t-4 border-green shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-semibold text-navy mb-2">{leader.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{leader.title}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{leader.bio}</p>
                    <Link
                      href={`/about/leadership/${leader.slug}`}
                      className="inline-flex items-center gap-2 text-green hover:text-navy font-semibold transition-colors duration-300"
                    >
                      Biography
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Leadership Qualities Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {leadershipQualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl border-t-4 border-green shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-heading font-semibold text-navy mb-4">{quality.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{quality.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Governance CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-semibold text-navy mb-2">
                Interested in Our Governance?
              </h3>
              <p className="text-gray-600">
                Learn about our Board of Directors and corporate governance structure
              </p>
            </div>
            <Link href="/about/board">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-green text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-navy transition-colors duration-300 shadow-lg whitespace-nowrap cursor-pointer"
              >
                View Board of Directors
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leadership Values & Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Our Leadership Values & Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our leadership team and define our commitment to strengthening Africa's health systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Human-Centered',
                description: 'Every solution we design starts with the needs of patients, healthcare workers, and communities we serve across Africa.'
              },
              {
                title: 'Systems-Focused',
                description: 'We think beyond individual products to design comprehensive solutions that strengthen entire health systems.'
              },
              {
                title: 'Implementation Excellence',
                description: 'We combine strategic vision with operational expertise to ensure transformations actually happen and deliver results.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border-t-4 border-green shadow-md p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-heading font-semibold text-navy mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-green" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              We're looking for exceptional leaders and professionals who share our commitment to strengthening 
              Africa's health systems. Explore career opportunities at Pacem Health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/careers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-green text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-navy transition-colors duration-300 shadow-lg"
              >
                View Open Positions
              </motion.a>
              <motion.a
                href="/about/company"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Learn About Our Culture
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}