import { motion } from 'motion/react';
import { Link } from 'wouter';
import { Shield, CheckCircle, FileCheck, FlaskConical, Eye, Award, Building2, Users, FileText, Truck, ClipboardCheck, Globe } from 'lucide-react';
import heroImage from 'figma:asset/0822cbe7ba417a9da0a1d08bf4da0e5f4631c329.png';

export default function QualityAssurance() {
  const tripleVerifiedComponents = [
    {
      icon: Building2,
      title: 'Supplier Prequalification',
      description: 'Only WHO-prequalified and SRA-approved manufacturers meet our stringent supplier standards.',
      details: ['WHO-prequalified facilities', 'FDA/EMA approved suppliers', 'Regular supplier audits', 'GMP compliance verification']
    },
    {
      icon: CheckCircle,
      title: 'Product Verification',
      description: 'Batch-by-batch inspection ensures every product meets international quality specifications.',
      details: ['Individual product verification', 'Batch documentation review', 'Visual inspection protocols', 'Specification compliance checks']
    },
    {
      icon: FlaskConical,
      title: 'Independent Laboratory Testing',
      description: 'ISO 17025 accredited laboratories provide objective third-party quality verification.',
      details: ['ISO 17025 accredited facilities', 'Independent testing protocols', 'Active ingredient verification', 'Dissolution & impurity testing']
    },
    {
      icon: FileCheck,
      title: 'Documentation Review',
      description: 'Complete regulatory certificates and documentation verified for every shipment.',
      details: ['Certificate of Analysis review', 'Manufacturer certifications', 'Regulatory approval documents', 'Batch release documentation']
    },
    {
      icon: Globe,
      title: 'Regulatory Compliance',
      description: 'Products meet destination country requirements and international pharmaceutical standards.',
      details: ['National regulatory compliance', 'Import permit verification', 'Local registration status', 'Country-specific requirements']
    },
    {
      icon: Eye,
      title: 'Ongoing Monitoring',
      description: 'Post-delivery pharmacovigilance and market surveillance ensure continuous quality assurance.',
      details: ['Pharmacovigilance programs', 'Market surveillance systems', 'Adverse event monitoring', 'Supplier performance tracking']
    }
  ];

  const qualitySteps = [
    {
      number: '1',
      title: 'Supplier Prequalification',
      description: 'Partner only with WHO-prequalified manufacturers and SRA-approved suppliers with proven quality track records.'
    },
    {
      number: '2',
      title: 'Product Prequalification',
      description: 'Individual product quality verification ensures each item meets international pharmaceutical standards.'
    },
    {
      number: '3',
      title: 'Batch Verification',
      description: 'Receiving inspection at our quality hubs confirms batch integrity and specification compliance.'
    },
    {
      number: '4',
      title: 'Independent Laboratory Testing',
      description: 'ISO 17025 accredited laboratories provide objective third-party quality verification for every batch.'
    },
    {
      number: '5',
      title: 'Quality-Assured Distribution',
      description: 'WHO GDP-compliant cold chain and logistics maintain product quality throughout the supply chain.'
    },
    {
      number: '6',
      title: 'Post-Release Monitoring',
      description: 'Continuous pharmacovigilance and market surveillance provide ongoing quality assurance beyond delivery.'
    }
  ];

  const publicSectorClients = [
    'Ministries of Health',
    'UN Agencies (WHO, UNICEF, UNFPA)',
    'Donor Organizations (USAID, GAVI, Global Fund)',
    'Development Banks (AfDB, World Bank)',
    'National Regulatory Authorities'
  ];

  const privateSectorClients = [
    'Hospital Groups & Health Systems',
    'Private Pharmacies & Distributors',
    'Corporate Health Programs',
    'Insurance Providers',
    'NGO Health Partners'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Quality assurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white mb-6">
              Quality Assurance
            </h1>
            <p className="text-2xl text-white/90 max-w-2xl">
              Triple-Verified Quality. Every Product. Every Time.
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
              Embedded Excellence
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Quality is not just a commitment at Pacem Health—it's embedded in every step of our process. Our triple-verified quality system combines supplier certification, independent laboratory testing, and complete documentation to ensure every product meets the highest international pharmaceutical standards.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              From WHO-prequalified manufacturers to ISO 17025 accredited testing and ongoing pharmacovigilance, we provide complete quality confidence for healthcare providers and patients across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Triple-Verified Quality System */}
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
              Triple-Verified Quality System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six integrated components ensuring pharmaceutical quality and patient safety
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tripleVerifiedComponents.map((component, index) => {
              const Icon = component.icon;
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

      {/* Trusted Across All Sectors */}
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
              Trusted Across All Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quality standards meet the rigorous requirements of both public and private sector healthcare organizations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-orange hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-3xl font-serif font-semibold leading-tight text-blue mb-6">Public Sector</h3>
              <ul className="space-y-4">
                {publicSectorClients.map((client, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">{client}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-orange hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-3xl font-serif font-semibold leading-tight text-blue mb-6">Private Sector</h3>
              <ul className="space-y-4">
                {privateSectorClients.map((client, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">{client}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Six Steps of Quality Verification */}
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
              Six Steps of Quality Verification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive quality verification process ensures product integrity from manufacturer to patient
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualitySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl font-bold text-navy">{step.number}</span>
                  <h3 className="text-xl font-serif font-semibold leading-tight text-blue pt-2">{step.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
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
              Four pillars of pharmaceutical quality ensuring products meet global best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">WHO Good Distribution Practices</h3>
              <p className="text-gray-700 leading-relaxed">
                Guidelines for proper distribution, storage, and transportation of pharmaceutical products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">ISO 17025 Accredited Testing</h3>
              <p className="text-gray-700 leading-relaxed">
                Independent laboratory testing by internationally-accredited facilities ensuring objective quality verification.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">WHO Prequalification Program</h3>
              <p className="text-gray-700 leading-relaxed">
                Products sourced by WHO-prequalified manufacturers meeting the highest international quality standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">Stringent Regulatory Authority Approval</h3>
              <p className="text-gray-700 leading-relaxed">
                Products approved by US FDA, European EMA, or equivalent stringent regulatory authorities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Partners */}
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
              Our Quality Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with internationally-recognized suppliers and accredited testing facilities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-orange hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-3xl font-serif font-semibold leading-tight text-blue mb-6">Supplier Partners</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                    WHO-Prequalified Manufacturers
                  </h4>
                  <p className="text-gray-700 leading-relaxed ml-5">
                    Global network of WHO-prequalified pharmaceutical manufacturers with regular quality audits and proven track records.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                    FDA/EMA-Approved Suppliers
                  </h4>
                  <p className="text-gray-700 leading-relaxed ml-5">
                    Suppliers approved by US FDA, European EMA, and other stringent regulatory authorities ensuring highest quality standards.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                    ISO-Certified Pharmaceutical Suppliers
                  </h4>
                  <p className="text-gray-700 leading-relaxed ml-5">
                    ISO 9001 certified suppliers with quality management systems meeting international pharmaceutical standards.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-orange hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-3xl font-serif font-semibold leading-tight text-blue mb-6">Testing Partners</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                    Ghana Food & Drugs Authority Laboratory
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2 ml-5">
                    ISO 17025 accredited testing facility providing independent quality verification for pharmaceutical products.
                  </p>
                  <span className="inline-block bg-blue/10 text-blue text-sm px-3 py-1 rounded-full font-semibold ml-5">
                    ISO 17025 Accredited
                  </span>
                </div>
                
                <div>
                  <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                    Kenya Bureau of Standards (KEBS)
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2 ml-5">
                    ISO 17025 accredited laboratory conducting comprehensive pharmaceutical quality testing and analysis.
                  </p>
                  <span className="inline-block bg-blue/10 text-blue text-sm px-3 py-1 rounded-full font-semibold ml-5">
                    ISO 17025 Accredited
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
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
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our triple-verified quality assurance solves critical pharmaceutical quality challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-orange hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-serif font-semibold leading-tight text-blue mb-6">Complete Quality Confidence</h3>
              
              <div className="mb-4">
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Challenge:
                </h4>
                <p className="text-gray-700 mb-4 ml-5">
                  Healthcare providers need absolute confidence in pharmaceutical quality. Many suppliers have limited quality verification processes, which can put patient safety at risk.
                </p>
                
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Our Solution:
                </h4>
                <p className="text-gray-700 mb-4 ml-5">
                  Triple-layer quality assurance combining supplier certification, independent laboratory testing, and complete regulatory documentation on every product.
                </p>
                
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Result:
                </h4>
                <p className="text-gray-700 ml-5">
                  Healthcare providers gain complete confidence in product quality, protection of facility reputation, and improved patient safety outcomes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-orange hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-serif font-semibold leading-tight text-blue mb-6">Regulatory Compliance</h3>
              
              <div className="mb-4">
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Challenge:
                </h4>
                <p className="text-gray-700 mb-4 ml-5">
                  Regulatory authorities require extensive quality documentation, and non-compliance can cause payment delays, product rejection, or service interruptions.
                </p>
                
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Our Solution:
                </h4>
                <p className="text-gray-700 mb-4 ml-5">
                  Pre-approved suppliers and products, complete regulatory documentation packages, and expert regulatory affairs support ensure full compliance.
                </p>
                
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Result:
                </h4>
                <p className="text-gray-700 ml-5">
                  Faster customs clearance, reduced risk of product seizure or rejection, simplified import compliance, and acceptance by regulatory authorities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-orange hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-serif font-semibold leading-tight text-blue mb-6">LC-Compliant Documentation</h3>
              
              <div className="mb-4">
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Challenge:
                </h4>
                <p className="text-gray-700 mb-4 ml-5">
                  Letter of Credit transactions require perfect documentation, and discrepancies can cause payment delays and additional fees.
                </p>
                
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Our Solution:
                </h4>
                <p className="text-gray-700 mb-4 ml-5">
                  Complete, accurate documentation packages prepared by experts ensure strict LC processing and seamless payment.
                </p>
                
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Result:
                </h4>
                <p className="text-gray-700 ml-5">
                  Clean LC presentation on first submission, faster payment processing, no amendment fees, and improved cash flow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-orange hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-serif font-semibold leading-tight text-blue mb-6">Ongoing Quality Assurance</h3>
              
              <div className="mb-4">
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Challenge:
                </h4>
                <p className="text-gray-700 mb-4 ml-5">
                  Quality assurance must continue after delivery, with monitoring for safety signals, recalls, and emerging quality concerns.
                </p>
                
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Our Solution:
                </h4>
                <p className="text-gray-700 mb-4 ml-5">
                  Post-distribution monitoring, pharmacovigilance, supplier performance tracking, and market surveillance provide continuous quality assurance.
                </p>
                
                <h4 className="font-bold text-navy mb-2 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                  Result:
                </h4>
                <p className="text-gray-700 ml-5">
                  Early detection of quality issues, rapid response to safety concerns, continuous supplier improvement, and long-term quality confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Documentation Package */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-navy/80">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white mb-6">
              Quality Documentation Package
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Complete documentation ensuring regulatory compliance and facilitating LC processing
            </p>
          </motion.div>

          <div className="backdrop-blur-lg rounded-2xl p-12 border" style={{ backgroundColor: '#0068AC' }}>
            <h3 className="text-2xl font-serif font-semibold leading-tight text-white mb-8 text-center">
              What You Receive with Every Shipment:
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange transition-all duration-300"
              >
                <h4 className="font-bold text-navy mb-2">1. Supplier Quality Certificate</h4>
                <p className="text-gray-700 text-sm">
                  Certification from internationally-recognized supplier or manufacturer confirming product quality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange transition-all duration-300"
              >
                <h4 className="font-bold text-navy mb-2">2. Laboratory Test Results</h4>
                <p className="text-gray-700 text-sm">
                  Independent testing results from ISO 17025 accredited laboratory (Ghana FDA or Kenya KEBS).
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange transition-all duration-300"
              >
                <h4 className="font-bold text-navy mb-2">3. Pacem Excellence Quality Certificate</h4>
                <p className="text-gray-700 text-sm">
                  Our certification that product has passed all three verification steps.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange transition-all duration-300"
              >
                <h4 className="font-bold text-navy mb-2">4. Certificate of Analysis</h4>
                <p className="text-gray-700 text-sm">
                  Manufacturer's certificate confirming product specifications and testing results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange transition-all duration-300"
              >
                <h4 className="font-bold text-navy mb-2">5. Regulatory Approvals</h4>
                <p className="text-gray-700 text-sm">
                  WHO-Prequalification, FDA approval, or equivalent regulatory documentation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange transition-all duration-300"
              >
                <h4 className="font-bold text-navy mb-2">6. Shipping Documentation</h4>
                <p className="text-gray-700 text-sm">
                  Bill of Lading, packing list, and complete chain of custody documentation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pacem Quality Assurance */}
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
              Why Choose Pacem Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five key advantages ensuring quality, compliance, and peace of mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">Triple-Verified Quality</h3>
              <p className="text-gray-700 leading-relaxed">
                Three independent layers of quality verification ensure supplier certification, laboratory testing, and complete documentation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">ISO-Accredited Testing</h3>
              <p className="text-gray-700 leading-relaxed">
                Independent testing by ISO 17025 accredited laboratories (Ghana FDA, Kenya KEBS) provides objective quality verification.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">Complete Documentation</h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive quality documentation packages ensure regulatory compliance and facilitate LC processing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">Continuous Monitoring</h3>
              <p className="text-gray-700 leading-relaxed">
                Post-distribution monitoring, pharmacovigilance, and market surveillance provide ongoing quality assurance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">Integrated Services</h3>
              <p className="text-gray-700 leading-relaxed">
                Quality Assurance supports all services: Procurement, Supply Chain, Regulatory, and Medical Services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-6">
                Quality Affairs Team
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our dedicated Quality Affairs team brings deep pharmaceutical expertise, regulatory knowledge, and quality management experience to every product we handle.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                From conducting supplier audits to managing laboratory testing relationships and ensuring documentation compliance, our team provides the expertise and oversight that makes triple-verified quality possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Supplier Auditing & Prequalification</h4>
                    <p className="text-gray-700">Regular audits of WHO-prequalified and SRA-approved manufacturers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Laboratory Testing Coordination</h4>
                    <p className="text-gray-700">Managing relationships with ISO 17025 accredited testing facilities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Pharmacovigilance & Post-Market Surveillance</h4>
                    <p className="text-gray-700">Continuous monitoring ensuring ongoing product quality and safety.</p>
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
                  src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHF1YWxpdHklMjBjb250cm9sJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjgwMTYxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Quality control laboratory"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
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
              Experience Triple-Verified Quality
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Partner with Pacem Health for pharmaceutical quality assurance that meets the highest international standards, ensures regulatory compliance, and provides complete confidence in every product.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Request Quality Information
              </Link>
              <Link href="/our-approach" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Learn Our Approach
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}