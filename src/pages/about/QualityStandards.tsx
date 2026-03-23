import { motion } from 'motion/react';
import { Link } from 'wouter';
import { FileText, Target, TrendingUp, Users, BookOpen, Award, Settings, BarChart3, CheckCircle2, ClipboardCheck, AlertCircle, RefreshCw } from 'lucide-react';
import heroImage from 'figma:asset/f7b117f6e75ef195c971e9d1cfc1b0907bf545b7.png';

export default function QualityStandards() {
  const qmsComponents = [
    {
      icon: Target,
      title: 'Quality Policy & Objectives',
      description: 'Clear quality commitments and measurable objectives aligned with patient safety and regulatory excellence.',
      details: [
        'Patient-centered quality commitment',
        'SMART quality objectives',
        'Annual quality goals',
        'Performance measurement framework'
      ]
    },
    {
      icon: FileText,
      title: 'Standard Operating Procedures',
      description: 'Comprehensive SOPs governing all quality-critical operations and processes.',
      details: [
        '150+ documented procedures',
        'Regular SOP review & updates',
        'Version control systems',
        'Employee training on SOPs'
      ]
    },
    {
      icon: Users,
      title: 'Quality Culture & Training',
      description: 'Building organizational capability through comprehensive quality training and cultural development.',
      details: [
        'Mandatory quality training programs',
        'Role-based competency requirements',
        'Continuous professional development',
        'Quality awareness campaigns'
      ]
    },
    {
      icon: BarChart3,
      title: 'Quality Metrics & KPIs',
      description: 'Data-driven quality performance monitoring and continuous improvement measurement.',
      details: [
        'Real-time quality dashboards',
        'Supplier performance metrics',
        'Product quality indicators',
        'Process capability tracking'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Document Control & Records',
      description: 'Rigorous document management ensuring accuracy, accessibility, and regulatory compliance.',
      details: [
        'Electronic document management',
        'Controlled distribution systems',
        'Audit trail maintenance',
        'Records retention policies'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Continuous Improvement',
      description: 'Systematic approach to identifying and implementing quality enhancements.',
      details: [
        'PDCA cycle implementation',
        'Kaizen methodology',
        'Process optimization programs',
        'Adoption of best practices'
      ]
    }
  ];

  const qualityStandards = [
    {
      title: 'ISO 9001:2015 Quality Management',
      description: 'International standard for quality management systems ensuring consistent delivery of products and services.',
      icon: Award,
      color: 'blue'
    },
    {
      title: 'WHO Good Distribution Practices',
      description: 'Global standards for pharmaceutical distribution, storage, and cold chain management.',
      icon: CheckCircle2,
      color: 'orange'
    },
    {
      title: 'ICH Quality Guidelines',
      description: 'International Conference on Harmonisation guidelines for pharmaceutical quality.',
      icon: BookOpen,
      color: 'teal'
    },
    {
      title: 'GMP (Good Manufacturing Practices)',
      description: 'Quality standards ensuring pharmaceutical products are consistently produced and controlled.',
      icon: Settings,
      color: 'navy'
    }
  ];

  const capaProcess = [
    {
      step: '1',
      title: 'Issue Identification',
      description: 'Detect quality deviations through monitoring, audits, customer feedback, or internal reporting.'
    },
    {
      step: '2',
      title: 'Root Cause Analysis',
      description: 'Investigate underlying causes using techniques like 5-Why, Fishbone diagrams, and process analysis.'
    },
    {
      step: '3',
      title: 'Corrective Action',
      description: 'Implement immediate corrections to address the specific quality issue and prevent recurrence.'
    },
    {
      step: '4',
      title: 'Preventive Action',
      description: 'Develop systemic improvements to prevent similar issues across all processes and products.'
    },
    {
      step: '5',
      title: 'Verification & Monitoring',
      description: 'Validate effectiveness of actions through ongoing monitoring and performance measurement.'
    },
    {
      step: '6',
      title: 'Documentation & Learning',
      description: 'Record actions, share lessons learned, and update procedures to embed improvements.'
    }
  ];

  const riskManagement = [
    {
      step: '01',
      title: 'Risk Identification',
      description: 'Systematic identification of potential quality risks across supply chain, operations, and products.'
    },
    {
      step: '02',
      title: 'Risk Assessment',
      description: 'Evaluating likelihood and impact of identified risks using probability and severity matrices.'
    },
    {
      step: '03',
      title: 'Risk Mitigation',
      description: 'Implementing controls, safeguards, and contingency plans to reduce risk exposure.'
    },
    {
      step: '04',
      title: 'Risk Monitoring',
      description: 'Continuous surveillance of risk indicators and effectiveness of mitigation measures.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Quality management system"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white mb-6">
              Quality Standards
            </h1>
            <p className="text-2xl text-white/90 max-w-2xl">
              Excellence Through Robust Quality Management Systems
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
              Excellence in Every Process
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Our Quality Management System (QMS) provides the framework, policies, and standards that govern all quality-critical activities at Pacem Health. Built on international best practices and continuous improvement principles, our QMS ensures consistent quality performance across the organization.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              From ISO 9001 quality management to WHO Good Distribution Practices, our comprehensive quality standards create the foundation for excellence in pharmaceutical supply chain management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Management System */}
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
              Quality Management System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six core components of our comprehensive quality management framework
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qmsComponents.map((component, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue/30 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">{component.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{component.description}</p>
                  <ul className="space-y-2">
                    {component.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* International Quality Standards */}
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
              International Quality Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quality management system aligns with globally recognized pharmaceutical and quality standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => {
              const borderColors = {
                blue: 'border-t-blue',
                orange: 'border-t-orange',
                teal: 'border-t-teal',
                navy: 'border-t-navy'
              };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-2xl border border-gray-200 ${borderColors[standard.color]} border-t-4 hover:shadow-lg transition-all duration-300`}
                >
                  <h3 className="text-2xl font-serif font-semibold leading-tight text-blue mb-4">{standard.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{standard.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Policy Statement */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-blue">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white mb-8">
              Our Quality Policy
            </h2>
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <p className="text-xl text-gray-900 leading-relaxed mb-6">
                "Pacem Health is committed to delivering pharmaceutical products and services that consistently meet or exceed international quality standards, regulatory requirements, and customer expectations."
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                We achieve this through a robust Quality Management System built on WHO Good Distribution Practices, ISO 9001 principles, and continuous improvement. Every employee is responsible for maintaining quality standards, and we invest in training, technology, and processes that ensure product integrity from manufacturer to patient.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our quality commitment extends beyond complianceÃ¢ÂÂwe strive for excellence in every transaction, building trust with healthcare providers and contributing to better health outcomes across Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPA Process */}
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
              CAPA: Corrective & Preventive Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to identifying, correcting, and preventing quality issues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capaProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-orange/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl font-bold text-gray-900">{item.step}</span>
                  <h3 className="text-xl font-serif font-semibold leading-tight text-blue pt-1">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
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
              Quality Risk Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proactive risk-based approach to quality management protecting product integrity and patient safety
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskManagement.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-blue/20 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Quality Standards */}
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
              Supplier Quality Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigorous supplier requirements ensuring quality throughout the supply chain
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl border border-blue/20 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-serif font-semibold leading-tight text-blue mb-6">Supplier Qualification Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">WHO Prequalification or SRA Approval</h4>
                    <p className="text-gray-700 text-sm">Suppliers must hold WHO prequalification, FDA/EMA approval, or equivalent stringent regulatory authority certification.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">GMP Certification</h4>
                    <p className="text-gray-700 text-sm">Active Good Manufacturing Practices certification with regular inspections and audits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Quality Management System</h4>
                    <p className="text-gray-700 text-sm">ISO 9001 certified or equivalent quality management system implementation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Financial Stability</h4>
                    <p className="text-gray-700 text-sm">Demonstrated financial strength ensuring consistent supply and long-term reliability.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Track Record</h4>
                    <p className="text-gray-700 text-sm">Proven history of quality performance, regulatory compliance, and customer satisfaction.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl border border-orange/20 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-serif font-semibold leading-tight text-blue mb-6">Ongoing Supplier Monitoring</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Performance Scorecards</h4>
                    <p className="text-gray-700 text-sm">Regular evaluation of quality metrics, on-time delivery, and documentation accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Quality Audits</h4>
                    <p className="text-gray-700 text-sm">On-site audits verifying compliance with quality standards and GMP requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Regulatory Monitoring</h4>
                    <p className="text-gray-700 text-sm">Tracking regulatory status, warning letters, recalls, and compliance issues.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Quality Agreements</h4>
                    <p className="text-gray-700 text-sm">Formal agreements defining quality expectations, testing requirements, and documentation standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Continuous Improvement</h4>
                    <p className="text-gray-700 text-sm">Collaborative supplier development programs driving quality enhancements.</p>
                  </div>
                </div>
              </div>
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
              Learn More About Our Quality Standards
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Discover how our comprehensive quality management system and international standards ensure pharmaceutical excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about/quality-assurance" className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                View Quality Assurance
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Contact Quality Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}