import { motion } from 'motion/react';
import { Link } from 'wouter';
import { Shield, Scale, Eye, Lock, FileText, AlertCircle, CheckCircle, Users, Globe, Building2, Heart, Award } from 'lucide-react';
import heroImage from 'figma:asset/d5af171be4c697d3ddbfcf1622198d24682a769c.png';

export default function EthicsCompliance() {
  const coreValues = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with unwavering honesty, transparency, and ethical conduct in all business relationships and decisions.'
    },
    {
      icon: Shield,
      title: 'Accountability',
      description: 'We take responsibility for our actions, uphold the highest standards, and ensure compliance with all regulations.'
    },
    {
      icon: Users,
      title: 'Respect',
      description: 'We treat everyone with dignity and respect, fostering an inclusive environment that values diversity and human rights.'
    },
    {
      icon: Scale,
      title: 'Fairness',
      description: 'We conduct business fairly and equitably, rejecting all forms of corruption, bribery, and unethical practices.'
    }
  ];

  const complianceAreas = [
    {
      icon: Scale,
      title: 'Code of Ethics & Business Conduct',
      description: 'Our comprehensive Code of Conduct guides every decision and action across the organization.',
      details: [
        'Ethical decision-making framework',
        'Professional conduct standards',
        'Conflict of interest policies',
        'Gift and hospitality guidelines',
        'Fair competition practices',
        'Accurate record-keeping requirements'
      ]
    },
    {
      icon: Shield,
      title: 'Anti-Corruption & Bribery Prevention',
      description: 'Zero-tolerance policy for corruption, bribery, and any form of unethical business practices.',
      details: [
        'FCPA & UK Bribery Act compliance',
        'Third-party due diligence',
        'Transparent payment processes',
        'No facilitation payments',
        'Anti-kickback procedures',
        'Regular compliance monitoring'
      ]
    },
    {
      icon: Eye,
      title: 'Transparency & Disclosure',
      description: 'Open communication and honest disclosure in all stakeholder relationships and reporting.',
      details: [
        'Financial transparency',
        'Accurate regulatory reporting',
        'Stakeholder communication',
        'Product information disclosure',
        'Supply chain transparency',
        'Public accountability commitments'
      ]
    },
    {
      icon: Lock,
      title: 'Data Privacy & Security',
      description: 'Protecting sensitive information and maintaining the highest data security and privacy standards.',
      details: [
        'GDPR and data protection compliance',
        'Patient confidentiality (HIPAA-aligned)',
        'Secure information systems',
        'Data breach prevention protocols',
        'Employee privacy protections',
        'Regular security audits'
      ]
    },
    {
      icon: Globe,
      title: 'Responsible Sourcing',
      description: 'Ethical procurement practices ensuring suppliers meet our integrity and quality standards.',
      details: [
        'Supplier code of conduct',
        'Human rights due diligence',
        'Fair labor practice verification',
        'Environmental responsibility',
        'Conflict-free sourcing',
        'Supplier audit programs'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Whistleblower Protection',
      description: 'Safe, confidential reporting channels for ethics concerns without fear of retaliation.',
      details: [
        'Anonymous reporting hotline',
        'Non-retaliation guarantee',
        'Confidential investigation process',
        'Multiple reporting channels',
        'Independent ethics committee',
        'Regular case reviews'
      ]
    }
  ];

  const compliancePrograms = [
    {
      title: 'Risk Assessment & Monitoring',
      description: 'Regular compliance risk assessments and continuous monitoring of business practices.',
      icon: AlertCircle
    },
    {
      title: 'Training & Education',
      description: 'Comprehensive ethics and compliance training for all employees, partners, and suppliers.',
      icon: Users
    },
    {
      title: 'Audit & Internal Controls',
      description: 'Rigorous internal audits and control systems ensuring adherence to policies and regulations.',
      icon: CheckCircle
    },
    {
      title: 'Regulatory Engagement',
      description: 'Proactive engagement with regulatory authorities and industry standards organizations.',
      icon: Building2
    }
  ];

  const reportingChannels = [
    {
      title: 'Ethics Hotline',
      description: '24/7 confidential reporting line operated by independent third party',
      contact: '+1-800-ETHICS-LINE'
    },
    {
      title: 'Email Reporting',
      description: 'Direct confidential communication with the Ethics & Compliance Office',
      contact: 'ethics@pacemhealth.com'
    },
    {
      title: 'Online Portal',
      description: 'Secure web-based reporting system for anonymous submissions',
      contact: 'ethics.pacemhealth.com/report'
    },
    {
      title: 'Management Chain',
      description: 'Report concerns directly to your manager or any senior leader',
      contact: 'leadership@pacemhealth.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Ethics and compliance"
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
            <h1 className="text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white mb-6">
              Ethics & Compliance
            </h1>
            <p className="text-2xl text-white/90 max-w-2xl">
              Integrity, Transparency, and Accountability in Everything We Do
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-8">
              Building Trust Through Integrity
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Pacem Health, ethics and compliance are fundamental to our mission of improving healthcare access across Africa. We are committed to conducting business with the highest standards of integrity, transparency, and accountability.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our comprehensive ethics and compliance program ensures we meet regulatory requirements, prevent corruption, protect stakeholder interests, and maintain the trust placed in us by healthcare providers, patients, partners, and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four fundamental principles guiding our ethical conduct and compliance commitment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange transition-all duration-300"
                >
                  <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4 text-center">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-6">
              Compliance Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six pillars of our comprehensive ethics and compliance program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange transition-all duration-300"
                >
                  <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4 text-center">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{area.description}</p>
                  <div className="space-y-2">
                    {area.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-black font-medium">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white mb-6">
              Our Commitment
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              We pledge to operate with unwavering integrity, adhering to all applicable laws, regulations, and industry standards. We reject all forms of corruption, bribery, fraud, and unethical conduct.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              Every employee, partner, and supplier is expected to uphold these principles. We provide comprehensive training, clear policies, and accessible reporting channels to ensure our commitment to ethics and compliance remains strong.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-6">
              Compliance Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proactive measures ensuring continuous adherence to ethical standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliancePrograms.map((program, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange transition-all duration-300"
                >
                  <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">{program.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{program.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Whistleblower & Reporting */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-6">
              Speak Up: Report Concerns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We encourage all stakeholders to report ethics or compliance concerns through our confidential reporting channels
            </p>
          </motion.div>

          <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-lg mb-12">
            <div>
              <h3 className="text-2xl font-serif font-semibold leading-tight text-blue mb-4">Non-Retaliation Policy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pacem Health strictly prohibits retaliation against anyone who reports a concern in good faith. All reports are treated confidentially and investigated thoroughly by our independent Ethics & Compliance Committee.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can report concerns anonymously if you prefer. We are committed to protecting whistleblowers and ensuring a safe environment for raising ethics concerns.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reportingChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{channel.description}</p>
                <div className="inline-block bg-orange/10 text-orange px-4 py-2 rounded-lg font-mono text-sm">
                  {channel.contact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-6">
              Regulatory Standards & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our compliance program aligns with international best practices and regulatory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">International Anti-Corruption</h3>
              <p className="text-gray-700 leading-relaxed">
                Compliance with US Foreign Corrupt Practices Act (FCPA), UK Bribery Act, and OECD Anti-Bribery Convention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">Data Protection & Privacy</h3>
              <p className="text-gray-700 leading-relaxed">
                GDPR compliance, HIPAA-aligned practices, and adherence to African data protection regulations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">Pharmaceutical Regulations</h3>
              <p className="text-gray-700 leading-relaxed">
                WHO guidelines, national pharmacy regulations, and international pharmaceutical standards compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">Labor & Human Rights</h3>
              <p className="text-gray-700 leading-relaxed">
                ILO conventions, UN Guiding Principles on Business and Human Rights, and fair labor standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">Environmental Standards</h3>
              <p className="text-gray-700 leading-relaxed">
                ISO 14001 environmental management principles and sustainable business practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">Corporate Governance</h3>
              <p className="text-gray-700 leading-relaxed">
                International corporate governance standards and transparent financial reporting practices.
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white mb-6">
              Questions About Ethics & Compliance?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our Ethics & Compliance team is here to support you. Contact us for guidance, training, or to report a concern.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Contact Compliance Team
              </Link>
              <a href="mailto:ethics@pacemhealth.com" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Report a Concern
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}