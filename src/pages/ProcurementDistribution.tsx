import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, X, Check } from "lucide-react";
import { ServiceBreadcrumb } from "../components/ServiceBreadcrumb";

// Import hero image
import heroImage from '../assets/e1e42c3346441cf7ca5269bf646e3125e8f76893.png';
// Import supplier network image
import supplierNetworkImage from '../assets/30493905e846ef1fad895302a0f19f4c7a401c0a.png';
// Import cost optimization image
import costOptimizationImage from '../assets/77d07c928da14c430acae2357229be3f67a40af1.png';
// Import quality verification image
import qualityVerificationImage from '../assets/f1973b6cebaf4c3623263246929dbf5686bc646c.png';
// Import logistics image
import logisticsImage from '../assets/8b107eb2657e8d63dd14693855810d1cd43edcb4.png';
// Import strategic partnership image
import partnershipImage from '../assets/e1d2ef8deba701c4d43fe7a574a0b4fcfddd5a9d.png';

export default function ProcurementDistribution() {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const heroStats = [
    { 
      value: "Growing", 
      label: "Supplier Network",
      description: "Pre-qualified pharmaceutical manufacturers and quality-approved suppliers across multiple countries providing quality-assured health products with complete regulatory compliance."
    },
    { 
      value: "Significant", 
      label: "Cost Savings",
      description: "Average cost reductions achieved through competitive tendering, volume aggregation, direct manufacturer relationships, and strategic sourcing while maintaining quality standards."
    },
    { 
      value: "High", 
      label: "On-Time Delivery",
      description: "Consistent delivery performance through end-to-end logistics coordination, customs clearance expertise, and multi-year supplier agreements preventing stockouts."
    },
    { 
      value: "Strong", 
      label: "Annual Volume",
      description: "Total procurement volume managed annually for government health programs, international NGOs, donors, and private healthcare providers across African markets."
    }
  ];

  const whoWeServe = [
    {
      title: "Government Health Programs",
      description: "Ministries of Health, National Medical Stores, and vertical disease programs requiring transparent, competitive procurement."
    },
    {
      title: "International NGOs & Donors",
      description: "Global health organizations requiring compliant procurement and quality assurance."
    },
    {
      title: "Private Healthcare Providers",
      description: "Hospital chains, private clinics, and healthcare facilities seeking reliable supply and competitive pricing."
    }
  ];

  const pillars = [
    {
      number: "01",
      title: "Global Supplier Network & Pre-Qualification",
      description: "Direct relationships with a broad network of pre-qualified manufacturers and quality-approved suppliers across multiple countries.",
      image: supplierNetworkImage,
      modalContent: {
        subtitle: "Building Quality Through Strategic Supplier Relationships",
        overview: "Market entry means nothing without reliable suppliers. Our global supplier network provides access to a broad network of pre-qualified pharmaceutical manufacturers and quality-approved suppliers across multiple countries. Through rigorous pre-qualification processes and ongoing relationship management, we ensure your supply chain is built on quality, compliance, and reliability.",
        highlights: [
          "quality-verified manufacturers meeting GMP standards",
          "Direct relationships with manufacturers across multiple regions across multiple regions",
          "Continuous supplier performance monitoring with quarterly reviews",
          "Multi-source strategy preventing single-source dependencies",
          "Rigorous site audits & quality system verification",
          "Complete regulatory documentation & compliance tracking"
        ],
        features: [
          {
            title: "WHO Pre-Qualification Standards",
            description: "All suppliers meet WHO Good Manufacturing Practices (GMP) and regulatory standards. We maintain updated documentation, conduct site audits, and verify manufacturing capabilities before any supplier enters our network."
          },
          {
            title: "Direct Manufacturer Relationships",
            description: "We eliminate middlemen by establishing direct relationships with manufacturers across multiple regions across multiple regions. This approach reduces costs, improves communication, and ensures faster response times for urgent orders."
          },
          {
            title: "Continuous Performance Monitoring",
            description: "Supplier performance is tracked through quality metrics, delivery timelines, and compliance audits. Quarterly reviews and annual site inspections ensure our network maintains the highest standards."
          },
          {
            title: "Multi-Source Strategy",
            description: "For critical products, we maintain relationships with multiple suppliers to prevent single-source dependencies and ensure supply continuity even during global disruptions."
          }
        ]
      }
    },
    {
      number: "02",
      title: "Competitive Sourcing & Cost Optimization",
      description: "Competitive tendering, volume aggregation, and manufacturer negotiations delivering meaningful cost reductions.",
      image: costOptimizationImage,
      modalContent: {
        subtitle: "Strategic Procurement Delivering Measurable Savings",
        overview: "Cost optimization isn't about cutting corners—it's about strategic sourcing. Through competitive tendering, volume aggregation, and direct manufacturer negotiations, we consistently deliver meaningful cost reductions while maintaining quality standards. Our procurement expertise transforms health budgets into maximum impact.",
        highlights: [
          "Transparent RFQ processes with 3-5 pre-qualified suppliers",
          "meaningful cost reductions through competitive bidding",
          "significant annual volume providing negotiating strength",
          "Direct manufacturer negotiations eliminating middlemen",
          "Total cost of ownership analysis including all landed costs",
          "Full audit trails for donor compliance"
        ],
        features: [
          {
            title: "Competitive Tendering Process",
            description: "Transparent RFQ processes with 3-5 pre-qualified suppliers ensure competitive pricing. We manage the entire tender cycle from specification development to contract award, maintaining full audit trails for donor compliance."
          },
          {
            title: "Volume Aggregation Advantage",
            description: "By consolidating demand across multiple clients and programs, we achieve economies of scale that individual buyers cannot access. significant in annual volume provides significant negotiating strength with manufacturers."
          },
          {
            title: "Direct Manufacturer Negotiations",
            description: "Eliminating distributors and middlemen, we negotiate directly with manufacturers for the best pricing. Long-term agreements and forecasting commitments secure preferential rates and priority production slots."
          },
          {
            title: "Total Cost of Ownership Analysis",
            description: "We evaluate not just unit prices but total landed costs including freight, insurance, customs duties, and logistics. This comprehensive approach ensures true cost optimization."
          }
        ]
      }
    },
    {
      number: "03",
      title: "Quality Verification & Compliance Assurance",
      description: "Triple verification: supplier pre-qualification, batch testing, and pre-shipment inspection per WHO guidelines.",
      image: qualityVerificationImage,
      modalContent: {
        subtitle: "Triple-Layer Quality Assurance for Patient Safety",
        overview: "Quality cannot be compromised in healthcare. Our triple-layer verification system—supplier pre-qualification, batch testing, and pre-shipment inspection—ensures that every product meets WHO quality standards before reaching patients. With a high quality pass rate, we've built our reputation on uncompromising quality assurance.",
        highlights: [
          "high quality pass rate across all shipments",
          "Triple verification: pre-qualification, batch testing & pre-shipment inspection",
          "quality-approved laboratory testing for high-risk products",
          "Complete Certificate of Analysis (CoA) documentation",
          "Physical packaging & labeling integrity verification",
          "Digital documentation archives for complete traceability"
        ],
        features: [
          {
            title: "Supplier Pre-Qualification",
            description: "Before any supplier joins our network, we conduct comprehensive due diligence including regulatory approvals verification, manufacturing site inspections, and quality system audits against WHO GMP standards."
          },
          {
            title: "Batch Testing & Certification",
            description: "Every batch undergoes testing for authenticity, potency, and contamination. We require Certificates of Analysis (CoA) from manufacturers and conduct independent testing for high-risk products through quality-approved laboratories."
          },
          {
            title: "Pre-Shipment Inspection",
            description: "Before products leave the factory, our quality team conducts physical inspections to verify packaging integrity, labeling accuracy, expiry dates, and documentation completeness. This final checkpoint prevents substandard products from entering the supply chain."
          },
          {
            title: "Regulatory Documentation",
            description: "Complete regulatory compliance documentation including WHO pre-qualification certificates, GMP certificates, product registrations, and import permits. We maintain digital archives for audit trails and donor reporting."
          }
        ]
      }
    },
    {
      number: "04",
      title: "International Logistics & Customs Coordination",
      description: "Complete coordination from factory to final destination, including customs clearance and last-mile delivery.",
      image: logisticsImage,
      modalContent: {
        subtitle: "End-to-End Supply Chain Coordination",
        overview: "The most competitively priced, quality-assured products mean nothing if they don't arrive on time. Our international logistics and customs coordination services provide complete supply chain visibility from manufacturer to final destination. With strong on-time delivery performance, we ensure your health programs never face stockouts.",
        highlights: [
          "strong on-time delivery performance",
          "Air & sea freight coordination with cold chain integrity",
          "Expert customs clearance across multiple countries",
          "Tax exemption handling for donor-funded programs",
          "Last-mile delivery to warehouses & healthcare facilities",
          "Real-time tracking with exception alerts"
        ],
        features: [
          {
            title: "International Freight Management",
            description: "We coordinate air and sea freight through established partnerships with global logistics providers. Our shipping volumes secure preferential rates while maintaining cold chain integrity for temperature-sensitive products."
          },
          {
            title: "Customs Clearance Expertise",
            description: "Navigate complex regulatory requirements across multiple countries. Our customs brokers handle all documentation including import permits, tax exemptions for donor-funded programs, and regulatory approvals, preventing costly delays."
          },
          {
            title: "Last-Mile Delivery Coordination",
            description: "Once products clear customs, we coordinate final delivery to warehouses, distribution centers, or healthcare facilities. Our in-country logistics partners ensure products reach their destination safely and on schedule."
          },
          {
            title: "Real-Time Supply Chain Visibility",
            description: "Track shipments from factory gate to final destination through our logistics platform. Real-time updates, estimated arrival dates, and exception alerts keep you informed throughout the supply chain journey."
          }
        ]
      }
    }
  ];

  const process = [
    {
      number: "01",
      title: "Needs Assessment",
      description: "Define requirements and align expectations"
    },
    {
      number: "02",
      title: "Supplier Identification",
      description: "Pre-qualify from our global network"
    },
    {
      number: "03",
      title: "Tendering & Negotiation",
      description: "Competitive bidding and contracts"
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Verify compliance before shipment"
    },
    {
      number: "05",
      title: "Logistics & Delivery",
      description: "End-to-end coordination"
    }
  ];

  const benefits = [
    {
      title: "Quality Confidence",
      description: "quality-verified manufacturers with high quality pass rate"
    },
    {
      title: "Cost Savings",
      description: "meaningful reductions through competitive bidding"
    },
    {
      title: "Regulatory Compliance",
      description: "Complete documentation and customs clearance"
    },
    {
      title: "Supply Continuity",
      description: "Multi-year agreements prevent stockouts"
    },
    {
      title: "Global Network",
      description: "a broad network of suppliers across multiple countries"
    },
    {
      title: "Strong Track Record",
      description: "significant annual volume, strong on-time delivery"
    }
  ];

  const productCategories = [
    { title: "Pharmaceuticals", description: "Essential medicines, generics, vaccines" },
    { title: "Medical Devices", description: "Diagnostic & surgical equipment" },
    { title: "Diagnostics", description: "Rapid tests & lab reagents" },
    { title: "Health Commodities", description: "PPE & medical consumables" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Procurement & Distribution" />
      
      {/* Enhanced Hero Section with Integrated Stats */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Procurement and Distribution"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-white mb-6 leading-tight">
              Procurement & Distribution
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Quality-assured health products from a broad network of pre-qualified suppliers. Delivered with full regulatory compliance at optimal costs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="px-8 py-4 bg-blue hover:bg-blue-light text-white rounded-md transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-navy transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Product Categories
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* We Don't Just Source Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6 leading-tight">
              We Don't Just Source Products—We Build Supply Resilience
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              From needs assessment to final delivery, our integrated procurement and distribution services ensure quality-assured health products reach those who need them—on time, within budget, and fully compliant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 leading-tight">
              Four Pillars of Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-8">
              Integrated services from procurement strategy to final delivery
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
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-semibold text-navy mb-4 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPillar(index)}
                    className="bg-blue text-white px-6 py-3 rounded-md hover:bg-blue-light transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Pillar Details */}
      {selectedPillar !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl my-8"
          >
            {/* Modal Header with Image */}
            <div className="relative h-64">
              <img
                src={pillars[selectedPillar].image}
                alt={pillars[selectedPillar].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-4xl font-serif font-bold text-white mb-2 leading-tight">
                  {pillars[selectedPillar].title}
                </h2>
                <p className="text-white/90 text-lg">
                  {pillars[selectedPillar].modalContent.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {pillars[selectedPillar].modalContent.overview}
              </p>

              {/* Key Highlights Section */}
              <h3 className="text-2xl font-serif font-semibold text-navy mb-6 leading-tight">Key Highlights</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {pillars[selectedPillar].modalContent.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features Section */}
              <h3 className="text-2xl font-serif font-semibold text-navy mb-6 leading-tight">Features</h3>
              
              <div className="space-y-6 mb-8">
                {pillars[selectedPillar].modalContent.features.map((feature, idx) => (
                  <div key={idx} className="border-l-4 border-orange pl-6">
                    <h4 className="text-xl font-serif text-navy mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue text-white px-6 py-3 rounded-md hover:bg-blue-light transition-colors flex items-center gap-2"
                >
                  Request More Information
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Procurement Operations at a Glance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 leading-tight">
              Procurement Operations at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a strategic procurement partner, we not only source quality-assured health products, but we also provide comprehensive supplier management, quality assurance, and logistics coordination that enable government health programs, international NGOs, and private healthcare providers to deliver cost-effective care.
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

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 leading-tight">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Strategic procurement partnerships across healthcare sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoWeServe.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border-t-4 border-orange shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-serif font-semibold text-navy mb-3 leading-tight">
                  {sector.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 leading-tight">Our Process</h2>
            <p className="text-xl text-gray-600">
              Excellence at every stage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#FF6B35] group"
              >
                <div className="text-5xl font-bold text-[#FF6B35]/20 group-hover:text-[#FF6B35]/30 transition-colors mb-3">{step.number}</div>
                <h3 className="text-lg font-semibold text-navy mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-lg overflow-hidden"
            >
              <img
                src={partnershipImage}
                alt="Partnership"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
                Strategic Partnerships That Deliver
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We've built our procurement and distribution network through years of partnership with leading global health organizations, ministries of health, and international NGOs. Our commitment goes beyond transactions—we're your long-term supply chain partner.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Trusted by global health leaders including global health organizations and ministries of health across Africa, we maintain full audit trails, competitive tendering processes, and complete regulatory documentation to ensure transparent and compliant operations. Our results-driven approach has delivered significant in annual procurement volume with strong on-time delivery and a high quality pass rate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner - Compact Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-2 leading-tight">Why Partner With Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-navy"
                >
                  <h3 className="text-xl font-serif font-semibold text-navy mb-3 leading-tight">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories - Compact */}
      <section className="py-20 bg-[#002855]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">Product Categories</h2>
            <p className="text-xl text-white/80 mt-6">
              Comprehensive sourcing across all essential health product categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-semibold text-white mb-2 leading-tight">{category.title}</h3>
                <p className="text-white/70 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1722235623488-ae7639a2ffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc3VwcGx5JTIwY2hhaW58ZW58MXx8fHwxNzY3ODQxMjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Healthcare Supply Chain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002855]/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Contact our Procurement & Distribution team for a consultation on how our end-to-end services can improve quality, reliability, and cost-effectiveness.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-navy px-10 py-5 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors text-lg mb-8"
            >
              Request Procurement Consultation
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}