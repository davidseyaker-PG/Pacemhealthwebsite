import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { ServiceBreadcrumb } from "../components/ServiceBreadcrumb";
import heroImage from "figma:asset/63392901cf2e5d6e18a784d5db79fb554d5c18aa.png";
import pillar1Image from "figma:asset/7d112e15eb00197cb038c7b13999f6d18557fe2d.png";
import pillar2Image from "figma:asset/3a98fc96a20513179a7b03802127a0e52b13e83d.png";
import pillar3Image from "figma:asset/e393c692654cc2d52943f3a8fc514f97c64c5c0b.png";
import pillar4Image from "figma:asset/c23242523ae865e7e685df2e0390046b687e84cc.png";

export default function MedicalEquipment() {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const heroStats = [
    { 
      value: "500+", 
      label: "Equipment Installations by 2026",
      description: "Installing and maintaining advanced medical equipment including diagnostic imaging, surgical systems, patient monitoring, laboratory analyzers, and life support technology across healthcare facilities."
    },
    { 
      value: "50+", 
      label: "International Partners",
      description: "Healthcare facilities, hospitals, and clinics equipped with world-class medical technology from leading manufacturers, supported by expert installation, training, and comprehensive maintenance services."
    },
    { 
      value: "95%", 
      label: "Uptime Guarantee",
      description: "Industry-leading equipment reliability maintained through preventive maintenance programs, 24/7 technical support, rapid response repair services, and comprehensive spare parts inventory management."
    }
  ];

  const pillars = [
    {
      number: "01",
      title: "Advanced Medical Equipment Supply",
      description: "Comprehensive portfolio of diagnostic imaging (CT, MRI, X-Ray, ultrasound), surgical equipment, patient monitoring systems, laboratory analyzers, and life support systems from world-leading manufacturers.",
      image: pillar1Image
    },
    {
      number: "02",
      title: "Turnkey Facility Solutions",
      description: "End-to-end healthcare infrastructure development including facility design, equipment procurement, installation, commissioning, staff training, and regulatory compliance for hospitals, clinics, and diagnostic centers.",
      image: pillar2Image
    },
    {
      number: "03",
      title: "Maintenance & Service Excellence",
      description: "Preventive maintenance programs, rapid repair services, 24/7 technical support, spare parts inventory management, and equipment lifecycle optimization to maximize uptime and protect your investment.",
      image: pillar3Image
    },
    {
      number: "04",
      title: "Financing & Asset Management",
      description: "Flexible financing options, equipment leasing programs, trade-in services, asset tracking systems, and depreciation management to make advanced medical technology accessible and affordable.",
      image: pillar4Image
    }
  ];

  const equipmentCategories = [
    {
      category: "Diagnostic Imaging",
      items: ["CT & MRI scanners", "Digital X-Ray systems", "Ultrasound machines", "Mammography equipment", "Fluoroscopy systems", "PACS integration"]
    },
    {
      category: "Surgical & Operating Room",
      items: ["Operating tables & lights", "Anesthesia workstations", "Electrosurgical units", "Endoscopy equipment", "Surgical instruments", "Sterilization systems"]
    },
    {
      category: "Patient Monitoring & Care",
      items: ["ICU monitoring systems", "Ventilators & respirators", "Infusion pumps", "Patient beds & stretchers", "Vital signs monitors", "Telemetry systems"]
    },
    {
      category: "Laboratory & Diagnostics",
      items: ["Hematology analyzers", "Clinical chemistry systems", "Microbiology equipment", "Blood bank refrigerators", "Centrifuges", "Laboratory information systems"]
    }
  ];

  const whoWeServe = [
    {
      title: "New Hospital Setup",
      description: "Complete greenfield hospital development from architectural planning to equipment commissioning, including regulatory approvals and staff training."
    },
    {
      title: "Clinic Modernization",
      description: "Upgrade existing facilities with modern diagnostic equipment, patient management systems, and infrastructure improvements to enhance service delivery."
    },
    {
      title: "Specialty Centers",
      description: "Turnkey solutions for specialized facilities including cardiac centers, cancer treatment centers, dialysis units, and surgical centers."
    },
    {
      title: "Mobile Health Units",
      description: "Fully-equipped mobile clinics and diagnostic units for community outreach, rural healthcare delivery, and emergency medical services."
    }
  ];

  const benefits = [
    { title: "OEM Partnerships", description: "Authorized distributor for top brands" },
    { title: "95% Uptime", description: "Service excellence & rapid response" },
    { title: "Turnkey Solutions", description: "Design to commissioning" },
    { title: "Flexible Financing", description: "Leasing & payment plans available" },
    { title: "24/7 Support", description: "Technical assistance anytime" },
    { title: "Staff Training", description: "Comprehensive equipment training" }
  ];

  const pillarDetails = [
    {
      title: "Advanced Medical Equipment Supply",
      subtitle: "World-Class Technology from Leading Global Manufacturers",
      image: pillar1Image,
      content: {
        intro: "Our comprehensive medical equipment portfolio brings the latest diagnostic, surgical, and patient care technology to healthcare facilities across Africa. As authorized distributors for GE Healthcare, Philips, Siemens Healthineers, and Medtronic, we supply advanced medical equipment backed by full warranties, factory training, and OEM support.",
        sections: [
          {
            heading: "Diagnostic Imaging Equipment",
            description: "State-of-the-art CT scanners, MRI systems, digital X-Ray, ultrasound machines, mammography equipment, and fluoroscopy systems for accurate diagnosis and patient monitoring. All imaging equipment includes PACS integration, RIS connectivity, and DICOM compliance for seamless workflow integration with hospital information systems."
          },
          {
            heading: "Surgical & Operating Room Equipment",
            description: "Complete OR solutions including advanced operating tables, LED surgical lighting systems, anesthesia workstations, electrosurgical units, endoscopy equipment, surgical instrument sets, and sterilization systems. Equipment designed for safety, precision, and optimal surgical outcomes in modern operating theaters."
          },
          {
            heading: "Patient Monitoring & Life Support",
            description: "ICU monitoring systems, ventilators, patient monitors, infusion pumps, defibrillators, and telemetry systems for critical care environments. Advanced alarm management, wireless connectivity, and centralized monitoring capabilities ensure patient safety and enable rapid clinical response to changes in patient condition."
          },
          {
            heading: "Laboratory & Diagnostic Equipment",
            description: "Comprehensive laboratory solutions including hematology analyzers, clinical chemistry systems, immunoassay analyzers, microbiology equipment, blood bank refrigerators, centrifuges, and laboratory information systems (LIS). High-throughput automation and quality control ensure accurate, reliable test results."
          },
          {
            heading: "OEM Partnerships & Warranty Support",
            description: "Direct partnerships with leading manufacturers ensure authentic equipment, competitive pricing, full manufacturer warranties, and access to the latest technology innovations. Factory-certified engineers provide installation, calibration, and ongoing technical support backed by OEM standards and protocols."
          }
        ],
        highlights: [
          "Authorized distributor for GE, Philips, Siemens, Medtronic",
          "Full manufacturer warranties on all equipment",
          "Comprehensive portfolio across all clinical specialties",
          "Latest technology innovations and upgrades",
          "Competitive pricing with volume discounts",
          "Factory-certified installation & commissioning"
        ]
      }
    },
    {
      title: "Turnkey Facility Solutions",
      subtitle: "End-to-End Healthcare Infrastructure Development",
      image: pillar2Image,
      content: {
        intro: "From concept to commissioning, we deliver complete turnkey healthcare facility solutions. Whether establishing a new hospital, modernizing an existing clinic, or developing a specialized treatment center, our comprehensive approach covers facility design, equipment procurement, installation, regulatory compliance, staff training, and ongoing support.",
        sections: [
          {
            heading: "Facility Planning & Design Consultation",
            description: "Collaborative facility design working with architects, engineers, and healthcare administrators to optimize clinical workflows, patient safety, and operational efficiency. Space planning for diagnostic imaging suites, operating theaters, ICUs, laboratories, and specialized treatment areas aligned with international healthcare design standards."
          },
          {
            heading: "Equipment Selection & Procurement",
            description: "Needs assessment and equipment recommendations tailored to your clinical services, patient volumes, and budget constraints. Master equipment planning ensures compatibility between systems, appropriate capacity for current and future needs, and alignment with regulatory requirements. Centralized procurement leverages our OEM relationships for competitive pricing."
          },
          {
            heading: "Project Management & Installation",
            description: "Dedicated project managers coordinate all aspects of equipment delivery, site preparation, installation, and commissioning. Detailed project timelines, milestone tracking, and stakeholder communication ensure on-time, on-budget completion. Factory-trained engineers manage installation, calibration, and integration with existing hospital systems."
          },
          {
            heading: "Regulatory Compliance & Certification",
            description: "Complete support for medical equipment registration with regulatory authorities, compliance with local healthcare standards, electrical safety certifications, radiation safety licensing, and environmental health approvals. Documentation packages prepared for ministry of health inspections and facility accreditation processes."
          },
          {
            heading: "Staff Training & Clinical Application",
            description: "Comprehensive training programs for clinical staff, biomedical engineers, and technical teams covering equipment operation, safety protocols, quality control procedures, and basic troubleshooting. Hands-on training, user manuals, and ongoing clinical application support ensure staff competency and optimal equipment utilization."
          }
        ],
        highlights: [
          "Complete facility design consultation",
          "End-to-end project management",
          "Regulatory compliance & licensing support",
          "Factory-certified installation teams",
          "Comprehensive staff training programs",
          "On-time, on-budget project delivery"
        ]
      }
    },
    {
      title: "Maintenance & Service Excellence",
      subtitle: "Preventive Maintenance & 24/7 Technical Support",
      image: pillar3Image,
      content: {
        intro: "Medical equipment uptime is critical for patient care and operational revenue. Our comprehensive service programs include preventive maintenance, rapid repair response, 24/7 technical support, spare parts inventory management, and remote diagnostics to maximize equipment availability and extend operational life. We guarantee 95% uptime for all equipment under service contract.",
        sections: [
          {
            heading: "Preventive Maintenance Programs",
            description: "Scheduled maintenance visits following manufacturer protocols and OEM specifications including equipment inspections, calibration verification, performance testing, cleaning, lubrication, and consumable replacement. Preventive maintenance reduces unexpected breakdowns, extends equipment lifespan, ensures accuracy, and maintains regulatory compliance and warranty validity."
          },
          {
            heading: "Rapid Repair & Emergency Response",
            description: "24/7 technical support hotline with 4-hour response time for critical equipment failures including imaging systems, operating room equipment, and life support devices. Factory-trained biomedical engineers diagnose issues remotely or dispatch on-site for repairs. Emergency parts available from local inventory for rapid restoration of equipment operation."
          },
          {
            heading: "Spare Parts Inventory & Management",
            description: "Comprehensive spare parts inventory for all major equipment brands maintained at regional service centers. Genuine OEM replacement parts ensure equipment performance, safety, and warranty compliance. Consignment inventory programs available for facilities with critical equipment dependencies requiring immediate parts availability."
          },
          {
            heading: "Remote Diagnostics & Monitoring",
            description: "Proactive equipment monitoring through remote connectivity, automated performance logging, predictive failure alerts, and utilization tracking. Remote diagnostics allow engineers to troubleshoot issues, adjust parameters, and often resolve problems without on-site visits, minimizing equipment downtime and service costs."
          },
          {
            heading: "Equipment Lifecycle Management",
            description: "Long-term partnership managing equipment from installation through end-of-life including performance tracking, upgrade recommendations, technology refresh planning, and trade-in programs. Lifecycle management optimizes capital investments, ensures access to latest innovations, and maintains competitive clinical capabilities."
          }
        ],
        highlights: [
          "95% uptime guarantee under service contract",
          "24/7 technical support with 4-hour response",
          "Factory-trained biomedical engineers",
          "Genuine OEM spare parts inventory",
          "Remote diagnostics & proactive monitoring",
          "Comprehensive preventive maintenance programs"
        ]
      }
    },
    {
      title: "Financing & Asset Management",
      subtitle: "Making Advanced Medical Technology Accessible & Affordable",
      image: pillar4Image,
      content: {
        intro: "Advanced medical equipment represents significant capital investment. Our flexible financing solutions, equipment leasing programs, and asset management services make cutting-edge technology accessible to healthcare facilities of all sizes while optimizing cash flow, preserving capital, and ensuring equipment remains current throughout its operational life.",
        sections: [
          {
            heading: "Equipment Financing Options",
            description: "Flexible payment plans including equipment leasing, installment purchase agreements, and rental programs tailored to your financial constraints and operational needs. Partnerships with healthcare financing institutions provide competitive interest rates and terms up to 7 years. Financing packages bundle equipment purchase with service contracts for comprehensive cost predictability."
          },
          {
            heading: "Operating Leases & Capital Leases",
            description: "Operating leases preserve capital and keep equipment off balance sheet with fixed monthly payments covering equipment use, maintenance, and upgrades. Capital leases provide equipment ownership over time with tax benefits and asset depreciation. Flexible end-of-lease options include equipment purchase, lease renewal, or upgrade to latest technology."
          },
          {
            heading: "Trade-In & Equipment Upgrade Programs",
            description: "Trade-in programs provide value for aging equipment when upgrading to newer models, reducing net investment in technology refresh. Upgrade paths allow phased technology adoption, ensuring facilities maintain competitive clinical capabilities without major capital outlays. Certified pre-owned equipment options available for budget-conscious facilities."
          },
          {
            heading: "Asset Tracking & Inventory Management",
            description: "Comprehensive asset management systems track equipment location, utilization, maintenance history, warranty status, and depreciation schedules. Automated alerts for warranty expiration, scheduled maintenance, and regulatory recertification ensure compliance and prevent unexpected costs. Portfolio reporting supports capital planning and equipment lifecycle management."
          },
          {
            heading: "Depreciation Management & Tax Planning",
            description: "Expert guidance on equipment depreciation schedules, tax deduction strategies, and capital budgeting aligned with local accounting standards and tax regulations. Asset valuations support financial reporting, insurance requirements, and facility accreditation processes. Depreciation planning optimizes tax benefits and guides technology refresh cycles."
          }
        ],
        highlights: [
          "Flexible financing with terms up to 7 years",
          "Operating & capital lease options available",
          "Trade-in programs for equipment upgrades",
          "Comprehensive asset tracking systems",
          "Certified pre-owned equipment available",
          "Depreciation & tax planning support"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Medical Equipment & Infrastructure" />
      
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/50 to-navy/40 z-10" />
        <motion.img
          src={heroImage}
          alt="Medical equipment and hospital technology"
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
            <h1 className="text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              Medical Equipment & Infrastructure
            </h1>
            <p className="text-2xl text-white/90 mb-10 leading-relaxed">
              Advanced medical technology and turnkey facility solutions to power world-class healthcare delivery
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue/90 transition-colors shadow-lg"
              >
                Request Equipment Catalog
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-1 w-20 bg-orange mb-6 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Equipping Africa's Healthcare Facilities with Excellence
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              From cutting-edge diagnostic imaging to complete hospital infrastructure, we deliver <strong>world-class medical equipment</strong>, <strong>turnkey facility solutions</strong>, and <strong>lifetime support</strong> to healthcare providers across Africa. Our end-to-end approach ensures your facility has the technology and infrastructure to deliver exceptional patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
              Four Pillars of Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive medical equipment solutions from procurement to ongoing support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-navy mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPillar(index)}
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

      {/* Equipment Operations at a Glance - McKesson Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
              Equipment Operations at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a medical equipment and infrastructure expert, we not only supply advanced technology, but we also provide turnkey facility solutions, comprehensive training, preventive maintenance, and 24/7 support to ensure your healthcare facility operates at peak performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="text-gray-600 leading-relaxed">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
              Comprehensive Equipment Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Advanced medical technology across all clinical specialties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipmentCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 border-t-4 border-teal hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-serif text-navy mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
              Turnkey Facility Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Complete healthcare infrastructure from design to commissioning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border-t-4 border-orange shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-serif text-navy mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
              Why Choose Pacem Health
            </h2>
            <p className="text-xl text-gray-600">
              Trusted partner for medical equipment and infrastructure
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
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
              News & Stories
            </h2>
            <p className="text-xl text-gray-600">
              Latest updates from our medical equipment and infrastructure operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="CT scanner installation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">December 2025</div>
                <h3 className="text-xl font-serif text-navy mb-3">
                  Installing East Africa's First AI-Powered CT Scanner
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Groundbreaking installation of GE Healthcare's latest AI-enhanced CT technology at Nairobi Teaching Hospital, reducing scan times by 40% and improving diagnostic accuracy.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue font-semibold flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Hospital facility construction"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">November 2025</div>
                <h3 className="text-xl font-serif text-navy mb-3">
                  Completing Ghana's Largest Turnkey Hospital Project
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Successfully commissioned a 250-bed tertiary hospital in Accra with complete diagnostic imaging suite, 8 operating theaters, ICU, and laboratory infrastructure.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue font-semibold flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Biomedical engineer training"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">October 2025</div>
                <h3 className="text-xl font-serif text-navy mb-3">
                  Training 200+ Biomedical Engineers Across Kenya
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive technical training program on advanced equipment maintenance, preventive care protocols, and emergency repair procedures to ensure 95% uptime guarantee.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue font-semibold flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy/95 z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1766299892693-2370a8d47e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwaG9zcGl0YWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Nzg5MTI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Medical equipment background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif text-white mb-6">
              Ready to Equip Your Facility?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Partner with Pacem Health for world-class medical equipment, turnkey facility solutions, and lifetime support. Let's discuss your healthcare infrastructure needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors"
              >
                Request Equipment Catalog
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Schedule Consultation
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>OEM Partnerships</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>Flexible Financing</span>
              </div>
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
                  <h2 className="text-4xl font-serif text-white mb-2">
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
                      <h3 className="text-xl font-serif text-navy mb-2">
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
                  <h3 className="text-xl font-serif text-navy mb-4">Key Highlights</h3>
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
              <div className="mt-8 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue/90 transition-colors flex items-center gap-2"
                >
                  Request Equipment Catalog
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