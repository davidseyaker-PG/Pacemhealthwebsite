import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { ServiceBreadcrumb } from "../components/ServiceBreadcrumb";
import { Link } from "wouter";
import heroImage from "figma:asset/9521ba9df93f4a5805515c8b0b8089fadcfbad29.png";
import pillar1Image from "figma:asset/57b36a980b6730d3b5004be0a634f36ff1002c6b.png";
import pillar2Image from "figma:asset/b7d72f019dd08c2cacdba37a71abd47c83e03eea.png";
import pillar3Image from "figma:asset/2417c24cf4dc9233bac119f85efa3778e91da1a2.png";
import pillar4Image from "figma:asset/6c29025208493340e771b4cdecad797aec5e9e2c.png";
import pharmaDistImage from "figma:asset/0d58b8232985d3c2ca269bc1cd4ecdc561c6bf86.png";
import medicalSuppliesImage from "figma:asset/aea4fbe7c4580e9643f116f7ecbaebf6a503ca3b.png";

export default function PharmaceuticalSupplies() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const heroStats = [
    { 
      value: "3,500+", 
      label: "Product SKUs",
      description: "Comprehensive portfolio of prescription medications, vaccines, and specialty pharmaceuticals from trusted manufacturers."
    },
    { 
      value: "50+", 
      label: "International Partners",
      description: "Strategic partnerships with WHO-approved manufacturers across Europe, Asia, and North America."
    },
    { 
      value: "99.8%", 
      label: "Quality Compliance",
      description: "Rigorous quality assurance with GDP-compliant facilities, batch tracking, and full traceability."
    }
  ];

  const pillars = [
    {
      number: "01",
      title: "Comprehensive Product Portfolio",
      description: "Over 10,000 SKUs including prescription medications, OTC products, vaccines, controlled substances, and specialty pharmaceuticals from trusted global manufacturers.",
      image: pillar1Image
    },
    {
      number: "02",
      title: "Cold Chain Excellence",
      description: "Temperature-controlled storage and distribution for vaccines and biologics with 24/7 monitoring, GDP compliance, and validated cold chain integrity.",
      image: pillar2Image
    },
    {
      number: "03",
      title: "Quality Assurance & Traceability",
      description: "Rigorous quality control, batch tracking, expiry management, and full supply chain traceability ensuring patient safety and regulatory compliance.",
      image: pillar3Image
    },
    {
      number: "04",
      title: "Reliable Delivery Network",
      description: "Same-day delivery to major cities, scheduled distribution to remote areas, emergency supply services, and flexible ordering with no minimum requirements.",
      image: pillar4Image
    }
  ];

  const pillarDetails = [
    {
      title: "Comprehensive Product Portfolio",
      subtitle: "Over 10,000 SKUs from Trusted Global Manufacturers",
      image: pillar1Image,
      content: {
        intro: "Our extensive pharmaceutical portfolio ensures healthcare facilities have access to essential medications, specialty pharmaceuticals, and medical supplies needed to deliver quality patient care across all therapeutic areas.",
        sections: [
          {
            heading: "Prescription Medications",
            description: "Complete range of prescription pharmaceuticals across all major therapeutic categories including antibiotics, cardiovascular agents, diabetes management, pain management, oncology medications, and respiratory treatments. All sourced from WHO-approved manufacturers with full regulatory compliance."
          },
          {
            heading: "Vaccines & Biologics",
            description: "Comprehensive vaccine portfolio including routine immunizations, travel vaccines, and specialty biologics. Our GDP-compliant cold chain ensures vaccine efficacy from manufacturer to patient, with 24/7 temperature monitoring and validated storage protocols."
          },
          {
            heading: "Specialty Pharmaceuticals",
            description: "Critical medications for chronic disease management including HIV/AIDS antiretrovirals, malaria treatment, tuberculosis therapy, and specialty products for complex medical conditions. We maintain consistent availability of these life-saving medications."
          },
          {
            heading: "OTC & Consumer Health",
            description: "Broad selection of over-the-counter medications, vitamins, supplements, and consumer health products to meet everyday patient needs. Competitive pricing and frequent restocking keep pharmacy shelves well-stocked."
          },
          {
            heading: "Medical Supplies & Equipment",
            description: "Surgical consumables, wound care products, diagnostic supplies, personal protective equipment, and essential medical devices. One-stop sourcing for both pharmaceutical and medical supply needs."
          }
        ],
        highlights: [
          "10,000+ SKUs across all therapeutic categories",
          "100% WHO-approved manufacturer sourcing",
          "Regular portfolio expansion with new products",
          "Custom procurement for specialty items",
          "Competitive pricing with volume discounts",
          "Comprehensive product information & documentation"
        ]
      }
    },
    {
      title: "Cold Chain Excellence",
      subtitle: "GDP-Compliant Temperature Control from Manufacturer to Patient",
      image: pillar2Image,
      content: {
        intro: "Vaccines, biologics, and temperature-sensitive medications require uncompromising cold chain integrity. Our GDP-certified facilities and validated processes ensure pharmaceutical products maintain potency and safety throughout the distribution journey.",
        sections: [
          {
            heading: "Temperature-Controlled Storage Facilities",
            description: "Purpose-built cold storage facilities with multi-zone temperature control for 2-8°C (vaccines), 15-25°C (ambient), and -20°C (frozen biologics). All facilities equipped with backup generators, redundant cooling systems, and 24/7 monitoring to prevent temperature excursions."
          },
          {
            heading: "Real-Time Temperature Monitoring",
            description: "Automated temperature monitoring systems with wireless sensors, cloud-based data logging, and instant alert notifications. Every storage unit tracked continuously with full audit trails for regulatory compliance and quality assurance documentation."
          },
          {
            heading: "Validated Cold Chain Transport",
            description: "Fleet of refrigerated vehicles with GPS tracking, temperature data loggers, and validated thermal packaging for last-mile delivery. Pre-qualified cold boxes and vaccine carriers ensure temperature stability even in challenging distribution environments."
          },
          {
            heading: "Standard Operating Procedures",
            description: "Comprehensive SOPs for cold chain management including receiving inspections, storage protocols, temperature mapping, deviation handling, and emergency response. Staff trained on GDP requirements and cold chain best practices with regular competency assessments."
          },
          {
            heading: "Quality Documentation & Compliance",
            description: "Complete temperature records, calibration certificates, validation studies, and deviation reports maintained for regulatory inspections. Full traceability from manufacturer cold chain to healthcare facility receipt with documented proof of compliance."
          }
        ],
        highlights: [
          "WHO PQS-certified cold chain equipment",
          "24/7 temperature monitoring with instant alerts",
          "99.9% cold chain integrity rate",
          "Backup power systems at all facilities",
          "GDP-trained cold chain specialists",
          "Complete temperature documentation & traceability"
        ]
      }
    },
    {
      title: "Quality Assurance & Traceability",
      subtitle: "Rigorous Quality Control for Patient Safety",
      image: pillar3Image,
      content: {
        intro: "Patient safety depends on pharmaceutical quality. Our comprehensive quality assurance program ensures every product distributed meets stringent safety standards through supplier qualification, batch verification, proper storage, and full supply chain traceability.",
        sections: [
          {
            heading: "Supplier Pre-Qualification",
            description: "Rigorous evaluation of all pharmaceutical suppliers including manufacturing site audits, regulatory compliance verification, quality management system assessment, and WHO pre-qualification status confirmation. Only manufacturers meeting our strict quality criteria are approved for our distribution network."
          },
          {
            heading: "Product Authentication & Batch Tracking",
            description: "Every product received undergoes authenticity verification including manufacturer certificate of analysis review, physical inspection, packaging integrity assessment, and batch number documentation. Advanced tracking systems monitor each batch from receipt through distribution to final delivery."
          },
          {
            heading: "Expiry Management & FEFO",
            description: "Sophisticated inventory management systems track expiry dates, implement First-Expiry-First-Out (FEFO) protocols, flag approaching expiries, and prevent distribution of short-dated products. Automated alerts ensure proactive inventory rotation and minimal product waste."
          },
          {
            heading: "Storage Compliance & Facility Standards",
            description: "Climate-controlled warehouses with proper segregation of product categories, secure storage for controlled substances, clean and organized storage areas, and regular facility inspections. All storage conditions monitored and documented to maintain product integrity."
          },
          {
            heading: "Full Supply Chain Traceability",
            description: "Complete product journey documentation from manufacturer to healthcare facility including receiving records, storage logs, picking documentation, dispatch records, and delivery confirmation. Every product traceable for recalls, investigations, or regulatory inquiries."
          }
        ],
        highlights: [
          "100% WHO-approved manufacturer sourcing",
          "Certificate of analysis for every batch",
          "Advanced batch tracking systems",
          "FEFO inventory rotation protocols",
          "Secure controlled substance storage",
          "Complete audit trail for regulatory compliance"
        ]
      }
    },
    {
      title: "Reliable Delivery Network",
      subtitle: "From Same-Day Urban Delivery to Remote Area Distribution",
      image: pillar4Image,
      content: {
        intro: "Healthcare facilities need medications when and where they're needed. Our flexible delivery network combines urban same-day service, scheduled regional distribution, and emergency response capability to ensure reliable pharmaceutical access across all service areas.",
        sections: [
          {
            heading: "Same-Day Delivery in Major Cities",
            description: "Express delivery service for Nairobi, Mombasa, Kisumu, Accra, and other major urban centers with orders placed before noon delivered the same business day. Multiple daily delivery runs ensure rapid fulfillment for urgent medication needs and emergency orders."
          },
          {
            heading: "Scheduled Distribution to Regional Areas",
            description: "Regular delivery schedules to regional hospitals, district health facilities, and rural clinics with weekly or bi-weekly routes covering all service areas. Predictable delivery schedules allow facilities to plan inventory and ensure consistent medication availability."
          },
          {
            heading: "Emergency Supply Services",
            description: "24/7 emergency response capability for critical medication shortages, unexpected patient needs, or urgent treatment requirements. Dedicated emergency hotline with 2-4 hour response time in urban areas and expedited processing for life-saving medications."
          },
          {
            heading: "Flexible Order Management",
            description: "No minimum order quantities accommodate facilities of all sizes from large teaching hospitals to small rural clinics. Online ordering portal, phone orders, email requests, and dedicated account representatives provide multiple convenient ordering channels."
          },
          {
            heading: "Delivery Tracking & Proof of Receipt",
            description: "Real-time delivery tracking, SMS notifications, estimated arrival times, and electronic proof of delivery with recipient signatures. Full delivery documentation maintained for compliance, auditing, and inventory reconciliation purposes."
          }
        ],
        highlights: [
          "Same-day delivery to major cities",
          "Weekly/bi-weekly routes to regional areas",
          "24/7 emergency response capability",
          "No minimum order requirements",
          "Real-time delivery tracking",
          "Multiple ordering channels available"
        ]
      }
    }
  ];

  const productCategories = [
    {
      category: "Brand Drugs",
      description: "Original patented medications from leading pharmaceutical companies"
    },
    {
      category: "Generic Drugs",
      description: "Alternatives to brand-name drugs with the same active ingredients and efficacy"
    },
    {
      category: "Specialty Drugs",
      description: "Medications for complex or chronic conditions, often requiring special handling or administration"
    },
    {
      category: "Vaccines",
      description: "A wide range of vaccines for disease prevention and routine immunization programs"
    },
    {
      category: "Biosimilars",
      description: "Cost-effective alternatives to biologic drugs that offer similar efficacy and safety profiles"
    },
    {
      category: "Medical Supplies",
      description: "Surgical consumables, wound care products, diagnostic supplies, and personal protective equipment"
    },
    {
      category: "HIV/AIDS Medications",
      description: "Antiretroviral therapies and treatments for HIV/AIDS management and prevention"
    },
    {
      category: "Malaria Treatment",
      description: "Antimalarial medications for prevention and treatment of malaria across endemic regions"
    },
    {
      category: "Over-the-Counter (OTC)",
      description: "Non-prescription medications and health products for everyday wellness and minor ailments"
    }
  ];

  const whoWeServe = [
    {
      title: "Public Hospitals & Clinics",
      description: "Comprehensive pharmaceutical supply for government healthcare facilities with transparent pricing, reliable delivery, and emergency support."
    },
    {
      title: "Private Healthcare Providers",
      description: "Full-service pharmaceutical distribution for private hospitals, clinics, and medical centers with flexible ordering and dedicated account management."
    },
    {
      title: "Retail Pharmacies",
      description: "Broad product selection, competitive pricing, and frequent delivery schedules to keep pharmacy shelves stocked and patients served."
    },
    {
      title: "NGOs & Donor Programs",
      description: "Specialized support for international health programs including donor-funded procurement, compliance documentation, and impact reporting."
    }
  ];

  const benefits = [
    { title: "99.8% Quality Rate", description: "Rigorous quality control & authentic products" },
    { title: "24hr Emergency Service", description: "Critical medication urgent response" },
    { title: "Cold Chain Certified", description: "WHO GDP-compliant temperature control" },
    { title: "3,500+ SKUs", description: "Comprehensive pharmaceutical portfolio" },
    { title: "Same-Day Delivery", description: "Rapid fulfillment in major cities" },
    { title: "No Minimums", description: "Flexible ordering for all facility sizes" }
  ];

  const faqs = [
    {
      question: "What is your product quality assurance process?",
      answer: "We source exclusively from WHO-approved manufacturers and conduct rigorous quality checks at every stage. Our quality assurance includes supplier pre-qualification, certificate of analysis verification, physical inspection upon receipt, proper storage conditions, batch tracking, and expiry management. Every product is traceable from manufacturer to end user."
    },
    {
      question: "Do you provide cold chain distribution for vaccines?",
      answer: "Yes. We operate GDP-compliant cold chain facilities with 24/7 temperature monitoring, backup power systems, validated refrigerated transport, and documented temperature logs. Our cold chain covers vaccines, biologics, insulin, and other temperature-sensitive medications requiring 2-8°C storage."
    },
    {
      question: "What are your delivery times and service areas?",
      answer: "We offer same-day delivery to major cities in Kenya and Ghana, next-day delivery to regional centers, and scheduled weekly deliveries to remote areas. Emergency orders can be expedited with 2-4 hour delivery in urban areas. Our distribution network covers all major healthcare facilities across East and West Africa."
    },
    {
      question: "Do you have minimum order requirements?",
      answer: "No. We serve facilities of all sizes from large hospitals to small rural clinics. There are no minimum order quantities, allowing you to order exactly what you need when you need it. We offer flexible payment terms based on your facility type and order volume."
    },
    {
      question: "How do you handle emergency medication requests?",
      answer: "We maintain 24/7 emergency response capability for critical medications. Contact our emergency hotline, and we'll prioritize your order for same-day delivery in urban areas. We keep safety stock of essential emergency medications and have protocols for rapid sourcing of specialty items."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Pharmaceutical & Medical Supplies Distribution" />
      
      {/* Hero Section - New White Background Style */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text and CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="text-6xl lg:text-7xl font-serif font-extrabold text-navy mb-6 leading-tight">
                Pharmaceutical & Medical Supplies Distribution
              </h1>
              <p className="text-2xl text-gray-700 mb-10 leading-relaxed">
                Reliable access to quality medications and medical supplies for healthcare facilities across Africa
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue/90 transition-colors shadow-lg"
                >
                  Request Product Catalog
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors"
                >
                  Contact Distribution Team
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side - Image with Blue Pattern Background */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Blue Diagonal Pattern Background */}
              <div className="absolute -right-12 -top-12 w-[120%] h-[120%] bg-blue transform rotate-12 rounded-3xl -z-10" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <motion.img
                  src={heroImage}
                  alt="Medical supplies and pharmaceutical equipment"
                  className="w-full h-[500px] object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-6">
              Your Trusted Pharmaceutical Distribution Partner
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              From essential generics to specialty medications, we ensure healthcare facilities have reliable access to quality pharmaceutical products. Our end-to-end distribution combines <strong>rigorous quality control</strong>, <strong>GDP-compliant cold chain</strong>, and <strong>flexible delivery options</strong> to keep your pharmacy stocked and your patients served.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Distribution Areas - Pharmaceutical & Medical Supplies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-6">
              Two Core Distribution Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive distribution solutions for both pharmaceutical products and medical supplies, ensuring healthcare facilities have access to everything they need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pharmaceutical Distribution */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pharmaDistImage}
                  alt="Pharmaceutical distribution"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold leading-tight text-blue mb-4">
                  Pharmaceutical Distribution
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Distribution of branded, generic, and specialty medications with GDP-compliant operations ensuring product integrity.
                </p>
                <Link href="/solutions/pharmaceutical-distribution">
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue/90 transition-colors flex items-center gap-2"
                  >
                    Learn More About Pharmaceuticals
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Medical Supplies Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={medicalSuppliesImage}
                  alt="Medical supplies and equipment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold leading-tight text-blue mb-4">
                  Medical Supplies Distribution
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Medical-surgical supplies, diagnostic equipment, and consumables for immediate healthcare delivery needs.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue/90 transition-colors flex items-center gap-2"
                >
                  Learn More About Medical Supplies
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distribution Operations at a Glance - McKesson Style */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Distribution Operations at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a pharmaceutical supply chain expert, we not only deliver orders safely and accurately, but we also help healthcare facilities navigate regulatory complexities, optimize inventory management, and drive better patient outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border-l-4 border-orange shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-bold text-navy mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-3">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Four Pillars of Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
              Comprehensive pharmaceutical distribution from sourcing to delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPillar(index)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
                  
                  {/* Pillar Number Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {pillar.number}
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-serif font-semibold leading-tight text-white mb-2">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              We partner with suppliers and manufacturers every day to ensure our customers and their patients have access to the most optimal inventory selection of pharmaceuticals and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  {category.category}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Tailored pharmaceutical distribution for every healthcare provider
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
                className="bg-white rounded-lg p-6 border-t-4 border-orange shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              News & Stories
            </h2>
            <p className="text-xl text-gray-600">
              Latest updates from our pharmaceutical distribution operations
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
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Cold chain expansion"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">December 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Expanding Cold Chain Infrastructure Across East Africa
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  New GDP-compliant cold storage facilities in Nairobi and Mombasa enhance our vaccine distribution capacity to serve 200+ additional healthcare facilities.
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
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Quality certification"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">November 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Achieving WHO PQS Certification for Quality Standards
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our distribution facilities receive WHO Pre-Qualification System certification, reinforcing our commitment to pharmaceutical quality and safety.
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
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Partnership announcement"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">October 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  New Partnerships with Leading Global Manufacturers
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Strategic agreements with 15 new pharmaceutical manufacturers expand our product portfolio to over 3,500 SKUs across therapeutic categories.
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
          src="https://images.unsplash.com/photo-1765031092161-a9ebe556117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMHNoZWx2ZXMlMjBtZWRpY2F0aW9ufGVufDF8fHx8MTc2Nzg5MDgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Pharmaceutical background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold leading-tight text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join 500+ healthcare facilities trusting Pacem Health for reliable pharmaceutical distribution. Request a product catalog or speak with our team today.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors"
              >
                Request Product Catalog
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Contact Our Team
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>10,000+ Products</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>24hr Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>GDP Certified</span>
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
                  <h2 className="text-4xl font-serif font-bold leading-tight text-white mb-2">
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
                      <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-2">
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
                  <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">Key Highlights</h3>
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