import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { ServiceBreadcrumb } from "../components/ServiceBreadcrumb";
import heroImage from "figma:asset/53a40d92200e4ec4ea643675f0aa3bb27a18513b.png";
import pillar1Image from "figma:asset/b34f9559665bfcb23e52b45b74f89ec8fd606d93.png";
import pillar2Image from "figma:asset/a8d7222a88c41926203320173fe95a7dafd270b2.png";
import pillar3Image from "figma:asset/d4dd8d76ee635e5e869787fe9b8e07cc2152f7b2.png";
import pillar4Image from "figma:asset/9ae61367450c5ccbb73ea3263115c3910c1f3b25.png";
import kenyaPPBLogo from "figma:asset/daa06e12ae22e7223e32e7ef93d5709316a6141a.png";
import ghanaFDALogo from "figma:asset/530566238562b93c548b548f2cb14a1f82e95e40.png";
import nafdacLogo from "figma:asset/052de86a356ddd3ef0ece4e54ff7b37b9838c5b6.png";

export default function RegulatoryCompliance() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const heroStats = [
    { 
      value: "Multiple", 
      label: "African Regulatory Bodies",
      description: "Deep expertise navigating regulatory requirements across East, West, and Southern Africa including national medicines regulatory authorities across the continent."
    },
    { 
      value: "High", 
      label: "First-Time Approval Rate",
      description: "Successful pharmaceutical registration through comprehensive documentation, regulatory intelligence, and proven submission strategies."
    },
    { 
      value: "Growing", 
      label: "Products Registered",
      description: "Extensive portfolio of successfully registered pharmaceuticals, medical devices, and biologics across multiple African markets."
    },
    { 
      value: "Thousands", 
      label: "Professionals Trained",
      description: "Internationally recognized GDP, GMP, and pharmacovigilance training equipping teams with regulatory compliance competencies."
    }
  ];

  const pillars = [
    {
      number: "01",
      title: "Product Registration & Licensing",
      description: "End-to-end pharmaceutical registration including dossier preparation, regulatory submissions, and import/export licenses.",
      image: pillar1Image
    },
    {
      number: "02",
      title: "Medical Information & Drug Safety Monitoring",
      description: "Medical science liaison, pharmacovigilance systems, drug safety reporting, and medical education programs.",
      image: pillar2Image
    },
    {
      number: "03",
      title: "Quality Management Systems & GDP/GMP Compliance",
      description: "GDP/GMP compliance audits, quality management system development, and corrective action implementation.",
      image: pillar3Image
    },
    {
      number: "04",
      title: "Professional Development & Certification Programs",
      description: "WHO-aligned training in GDP, GMP, pharmacovigilance, and regulatory affairs for healthcare teams.",
      image: pillar4Image
    }
  ];

  const pillarDetails = [
    {
      title: "Product Registration & Licensing",
      subtitle: "Comprehensive Registration Support from Dossier to Approval",
      image: pillar1Image,
      content: {
        intro: "Pharmaceutical market entry in Africa requires navigating complex regulatory landscapes across multiple countries. Our product registration services combine technical expertise, regulatory intelligence, and proven submission strategies to secure timely approvals for pharmaceuticals, medical devices, and biologics.",
        sections: [
          {
            heading: "Regulatory Dossier Preparation",
            description: "Comprehensive dossier compilation meeting Common Technical Document (CTD) standards and country-specific requirements. We prepare Module 1 administrative data, quality documentation, non-clinical and clinical data, and ensure compliance with regional regulatory guidelines including EAC, ECOWAS, and national authorities."
          },
          {
            heading: "Multi-Country Registration Strategy",
            description: "Strategic approach to regional registration using harmonization initiatives (EAC, ZAZIBONA) while managing country-specific requirements. We optimize submission sequencing, identify reference markets, and coordinate parallel applications to accelerate market access across priority countries."
          },
          {
            heading: "Regulatory Intelligence & Monitoring",
            description: "Continuous tracking of regulatory landscape changes, guideline updates, fee revisions, and policy developments across African markets. Our intelligence reports keep clients informed of regulatory shifts affecting registration timelines, compliance obligations, and market opportunities. We use established relationships with regulatory authorities for strategic liaison, pre-submission consultations, and policy dialogue to clarify requirements and facilitate efficient regulatory processes."
          },
          {
            heading: "Regulatory Submissions & Agency Liaison",
            description: "Professional submission management including pre-submission meetings, application lodging, deficiency response, and regulatory authority communication. Our established relationships with African regulators enable efficient query resolution and application tracking through to approval."
          },
          {
            heading: "Import & Export Licensing",
            description: "Comprehensive import permit processing, export certification, and trade license facilitation. We manage WHO-format certificates, customs documentation, controlled substance permits, and special authorization for investigational products or compassionate use."
          },
          {
            heading: "Post-Approval Compliance",
            description: "Ongoing regulatory maintenance including product renewals, variation applications, periodic safety updates, and label modifications. We monitor regulatory changes, manage compliance obligations, and ensure continuous market authorization validity."
          }
        ],
        highlights: [
          "High first-time approval success rate",
          "Multiple African regulatory authorities",
          "CTD and country-specific formats",
          "EAC/ECOWAS harmonization expertise",
          "Established regulator relationships",
          "End-to-end license management"
        ]
      }
    },
    {
      title: "Medical Information & Drug Safety Monitoring",
      subtitle: "Pharmacovigilance Systems and Medical Education Programs",
      image: pillar2Image,
      content: {
        intro: "Effective medical information and drug safety monitoring are critical for maintaining patient safety and regulatory compliance. Our services include medical science liaison, pharmacovigilance system implementation, drug safety reporting, and medical education programs to ensure robust pharmacovigilance practices.",
        sections: [
          {
            heading: "Medical Science Liaison",
            description: "Strategic communication between healthcare providers, patients, and regulatory authorities to ensure accurate and timely dissemination of medical information. We facilitate the exchange of scientific data, clinical insights, and regulatory updates to support informed decision-making."
          },
          {
            heading: "Pharmacovigilance Systems Implementation",
            description: "Design and deployment of comprehensive pharmacovigilance systems including adverse event reporting, signal detection, and risk management. We ensure compliance with international standards (ICH E2A, E2B) and local regulatory requirements to maintain robust safety monitoring."
          },
          {
            heading: "Drug Safety Reporting",
            description: "Adverse drug reaction monitoring, safety signal detection, and regulatory reporting obligations. Training equips healthcare professionals to identify, document, assess, and report adverse events in compliance with national and WHO pharmacovigilance requirements."
          },
          {
            heading: "Medical Education Programs",
            description: "Training and educational initiatives for healthcare professionals on drug safety, pharmacovigilance, and regulatory compliance. We develop tailored programs to enhance knowledge, skills, and awareness of safety practices in healthcare settings."
          }
        ],
        highlights: [
          "Comprehensive pharmacovigilance systems",
          "Medical science liaison services",
          "Drug safety reporting compliance",
          "Medical education programs",
          "ICH E2A/E2B standards",
          "Local regulatory adherence"
        ]
      }
    },
    {
      title: "Quality Management Systems & GDP/GMP Compliance",
      subtitle: "GDP/GMP Compliance and Quality Management Excellence",
      image: pillar3Image,
      content: {
        intro: "Regulatory compliance demands robust quality systems and continuous adherence to Good Distribution Practice (GDP) and Good Manufacturing Practice (GMP) standards. Our compliance audit and quality system services help healthcare organizations achieve and maintain regulatory standards through gap assessments, corrective actions, and quality culture development.",
        sections: [
          {
            heading: "GDP/GMP Compliance Audits",
            description: "Comprehensive facility and process audits against WHO GDP/GMP guidelines and national regulatory requirements. Our experienced auditors evaluate premises, equipment, procedures, documentation, training, and quality systems to identify gaps and non-conformances requiring corrective action."
          },
          {
            heading: "Quality Management System Development",
            description: "Design and implementation of robust quality management systems including quality manuals, standard operating procedures, quality control processes, document management, change control, deviation handling, and CAPA (Corrective and Preventive Action) systems aligned with regulatory expectations."
          },
          {
            heading: "Regulatory Inspection Readiness",
            description: "Preparation for regulatory authority inspections including mock inspections, documentation review, staff interview training, and facility readiness assessments. We help organizations demonstrate compliance, respond to inspector queries, and address inspection findings with effective remediation plans."
          },
          {
            heading: "Supplier Qualification & Audits",
            description: "Vendor qualification programs ensuring supply chain partners meet quality standards. We conduct supplier audits, evaluate quality agreements, verify certifications, and establish approved supplier lists for pharmaceuticals, raw materials, packaging, and logistics service providers."
          },
          {
            heading: "Continuous Improvement Programs",
            description: "Ongoing quality culture development through KPI monitoring, internal audit programs, management review processes, and quality risk management. We help organizations transition from reactive compliance to proactive quality excellence."
          }
        ],
        highlights: [
          "WHO GDP/GMP standards compliance",
          "Experienced audit specialists",
          "Quality system documentation",
          "Inspection readiness preparation",
          "Supplier qualification programs",
          "Continuous improvement focus"
        ]
      }
    },
    {
      title: "Professional Development & Certification Programs",
      subtitle: "Internationally Recognized Pharmaceutical Training Programs",
      image: pillar4Image,
      content: {
        intro: "Regulatory compliance depends on competent, trained personnel. Our WHO-aligned training programs deliver internationally recognized competency-based education in pharmaceutical quality, regulatory affairs, and compliance management—equipping African healthcare teams with skills to meet global standards.",
        sections: [
          {
            heading: "GDP Training & Certification",
            description: "Comprehensive Good Distribution Practice training covering storage requirements, temperature management, documentation, transportation, quality management, and regulatory compliance. Programs include practical cold chain exercises, case studies, and competency assessments leading to WHO-recognized certification."
          },
          {
            heading: "GMP & Quality Assurance Training",
            description: "Good Manufacturing Practice fundamentals for pharmaceutical production, quality control, and quality assurance personnel. Training covers contamination control, process validation, quality systems, documentation practices, and regulatory requirements for manufacturing operations."
          },
          {
            heading: "Pharmacovigilance & Safety Reporting",
            description: "Adverse drug reaction monitoring, safety signal detection, and regulatory reporting obligations. Training equips healthcare professionals to identify, document, assess, and report adverse events in compliance with national and WHO pharmacovigilance requirements."
          },
          {
            heading: "Regulatory Affairs & Submissions",
            description: "Technical training on pharmaceutical registration processes, dossier compilation, regulatory intelligence, and regulatory authority interactions. Participants learn CTD structure, regulatory pathways, submission strategies, and post-approval compliance requirements."
          },
          {
            heading: "Custom Corporate Training Programs",
            description: "Tailored training solutions designed for specific organizational needs including onboarding programs, refresher training, specialized technical topics, and regulatory updates. We deliver training on-site, virtually, or through blended learning approaches with competency documentation."
          }
        ],
        highlights: [
          "WHO-aligned programs",
          "Competency-based assessments",
          "Practical case studies included",
          "On-site and virtual delivery",
          "Custom corporate programs",
          "Internationally recognized certificates"
        ]
      }
    }
  ];

  const benefits = [
    { title: "High Approval Rate", description: "First-time registration success" },
    { title: "Multiple Regulators", description: "Pan-African expertise" },
    { title: "WHO-Certified", description: "International training standards" },
    { title: "Fast-Track", description: "Accelerated market entry" },
    { title: "Full Compliance", description: "GDP/GMP adherence" },
    { title: "Local Expertise", description: "On-ground regulatory knowledge" }
  ];

  const whoWeServe = [
    {
      category: "International Pharmaceutical Companies",
      description: "Complete regulatory support for global pharma entering African markets including registration strategy, dossier preparation, submissions, and compliance management."
    },
    {
      category: "African Pharmaceutical Manufacturers",
      description: "Local manufacturers seeking WHO prequalification, GMP certification, export registrations, or expansion into regional markets with quality system development and regulatory support."
    },
    {
      category: "Healthcare Facilities & Distributors",
      description: "Hospitals, clinics, and distributors requiring GDP compliance, quality system audits, training programs, and licensing support to meet regulatory standards."
    },
    {
      category: "Development Organizations & Donors",
      description: "NGOs, UN agencies, and development banks implementing health programs requiring regulatory compliance, procurement support, and capacity building for supply chain quality."
    }
  ];

  const faqs = [
    {
      question: "How long does pharmaceutical registration take in Africa?",
      answer: "Registration timelines vary by country and product complexity. Timelines typically range from 9 to 36 months depending on the regulatory authority and product type. We optimize timelines through quality dossiers, pre-submission consultations, and responsive deficiency management."
    },
    {
      question: "What is the Common Technical Document (CTD) and is it required in Africa?",
      answer: "CTD is the internationally standardized format for pharmaceutical registration dossiers. While not universally required, many African regulators accept or prefer CTD format, and regional harmonization initiatives (EAC, ZAZIBONA) promote CTD adoption. We prepare dossiers in both CTD and country-specific formats."
    },
    {
      question: "Do you provide WHO prequalification support?",
      answer: "Yes. We support manufacturers pursuing WHO prequalification including gap assessments, quality system development, GMP compliance, dossier preparation, and prequalification application management. WHO prequalification enables access to international procurement mechanisms."
    },
    {
      question: "What is GDP compliance and why is it important?",
      answer: "Good Distribution Practice (GDP) ensures pharmaceutical quality throughout the supply chain. GDP compliance is required for distribution licenses, international partnerships, and donor-funded procurement. We provide GDP audits, training, and quality system development."
    },
    {
      question: "Can you help with regulatory inspections?",
      answer: "Yes. We prepare organizations for regulatory authority inspections through mock inspections, documentation review, staff training, facility readiness assessments, and post-inspection CAPA support. Our inspection readiness programs significantly improve inspection outcomes."
    },
    {
      question: "What makes your training WHO-aligned?",
      answer: "Our training programs follow WHO curriculum standards, incorporate WHO guidelines and technical documents, and are delivered by WHO-qualified trainers. Participants receive certificates recognized by regulatory authorities and international organizations for demonstrating competency in pharmaceutical quality standards."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Regulatory & Compliance Services" />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10" />
        <motion.img
          src={heroImage}
          alt="Regulatory compliance and legal frameworks"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-white mb-6 leading-tight">
              Regulatory & Compliance Services
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Navigate regulatory complexity with confidence through expert guidance, internationally recognized training, and comprehensive compliance solutions
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue/90 transition-colors shadow-lg"
            >
              Request Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-1 w-20 bg-orange mb-6 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
              We Navigate Complexity—You Focus on Healthcare Delivery
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Africa's regulatory landscape is diverse and evolving. With expertise across multiple regulatory authorities, WHO-aligned training programs, and comprehensive pharmacovigilance systems, we provide the regulatory confidence to bring safe, effective healthcare products to African markets—empowering pharmaceutical companies, healthcare organizations, and professionals to focus on what matters most: patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 leading-tight">
              Four Pillars of Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive regulatory solutions from registration through compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedPillar(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-navy mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue/90 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Operations at a Glance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 leading-tight">
              Regulatory Expertise at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As regulatory specialists, we combine technical expertise, regulatory intelligence, and established authority relationships to accelerate approvals, ensure compliance, and build pharmaceutical quality capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="text-5xl font-bold text-navy mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-500">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4 leading-tight">
              Why Partner With Pacem Health
            </h2>
            <p className="text-xl text-gray-600">
              Deep regulatory expertise backed by African market knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-navy"
              >
                <h3 className="text-xl font-serif font-semibold text-navy mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4 leading-tight">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Tailored regulatory solutions for every pharmaceutical stakeholder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-1 bg-orange" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-semibold text-navy mb-3 leading-tight">
                    {sector.category}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Regulatory & Compliance Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-1 w-20 bg-orange mb-6 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 leading-tight">
              Our Regulatory & Compliance Process
            </h2>
            <p className="text-lg text-gray-600">
              From assessment to post-market surveillance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                number: "01",
                title: "Regulatory Assessment",
                description: "Comprehensive evaluation & strategy"
              },
              {
                number: "02",
                title: "Documentation",
                description: "Dossier preparation & filing"
              },
              {
                number: "03",
                title: "Authority Liaison",
                description: "Regulatory review & approval"
              },
              {
                number: "04",
                title: "Training",
                description: "Compliance capacity building"
              },
              {
                number: "05",
                title: "Surveillance",
                description: "Post-market monitoring"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange"
              >
                <div className="p-6">
                  <div className="text-6xl font-bold text-orange/20 mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-navy mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Work With Leading African Regulatory Authorities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 leading-tight">
              We Work With Leading African Regulatory Authorities
            </h2>
            <p className="text-lg text-gray-600">
              Established relationships with national regulatory authorities across multiple African countries
            </p>
          </div>

          {/* Featured Regulatory Authorities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "East African Regulatory Authority",
                abbreviation: "East Africa",
                logo: kenyaPPBLogo
              },
              {
                name: "West African Regulatory Authority",
                abbreviation: "West Africa",
                logo: ghanaFDALogo
              },
              {
                name: "Central & Southern African Regulatory Authority",
                abbreviation: "Central & Southern Africa",
                logo: nafdacLogo
              }
            ].map((authority, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="h-1 bg-orange mb-6" />
                <div className="flex flex-col items-center text-center">
                  {/* Logo Container */}
                  <div className="w-full h-48 flex items-center justify-center mb-6">
                    {authority.logo ? (
                      <img
                        src={authority.logo}
                        alt={authority.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-300">
                          {authority.abbreviation.split(' ')[0].charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Authority Name */}
                  <h3 className="text-xl font-serif font-semibold text-navy mb-2 leading-tight">
                    {authority.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium">
                    {authority.abbreviation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Countries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 mb-6">And regulatory authorities in:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Tanzania",
                "Uganda",
                "Rwanda",
                "Ethiopia",
                "Zambia",
                "Zimbabwe",
                "Malawi",
                "Mozambique",
                "South Africa",
                "Botswana",
                "Namibia"
              ].map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <p className="text-navy font-medium">{country}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy/95 z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Professional regulatory team"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Navigate African Regulatory Markets?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Schedule a consultation with our regulatory experts to accelerate approvals, ensure compliance, and build quality capabilities for sustainable pharmaceutical operations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00aeef] text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-[#0099d6] transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Download Service Overview
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillar Details Modal */}
      {selectedPillar !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedPillar(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={pillarDetails[selectedPillar].image}
                alt={pillarDetails[selectedPillar].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h2 className="text-4xl font-serif font-bold text-white mb-2 leading-tight">
                    {pillarDetails[selectedPillar].title}
                  </h2>
                  <p className="text-xl text-white/90">
                    {pillarDetails[selectedPillar].subtitle}
                  </p>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto max-h-[calc(90vh-16rem)] p-8">
              {/* Introduction */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {pillarDetails[selectedPillar].content.intro}
              </p>

              {/* Sections */}
              {pillarDetails[selectedPillar].content.sections.length > 0 && (
                <div className="space-y-6 mb-8">
                  {pillarDetails[selectedPillar].content.sections.map((section, idx) => (
                    <div key={idx} className="border-l-4 border-orange pl-6">
                      <h3 className="text-xl font-serif font-semibold text-navy mb-2 leading-tight">
                        {section.heading}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              {pillarDetails[selectedPillar].content.highlights.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-serif font-semibold text-navy mb-4 leading-tight">Key Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pillarDetails[selectedPillar].content.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue/90 transition-colors flex items-center gap-2"
                >
                  Request More Information
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPillar(null)}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}