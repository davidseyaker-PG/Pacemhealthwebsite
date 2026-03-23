import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { ServiceBreadcrumb } from "../components/ServiceBreadcrumb";

// Import hero image
import heroImage from 'figma:asset/3a7cb7aba883ebd469b6b110f67942aef938b015.png';
// Import demand planning image
import demandPlanningImage from 'figma:asset/c1b5f01ca507c53b63a3d71c7d32135abcc5f718.png';
// Import regional hub image
import regionalHubImage from 'figma:asset/bcaa20217527e6220b2b6e551273b32557d0a42a.png';
// Import cold chain image
import coldChainImage from 'figma:asset/cf0952f8d2c5302c5f0acf65b7847a7df4d97c18.png';
// Import last-mile delivery image
import lastMileImage from 'figma:asset/acf6d0ffd30a3d3fdccacd92be062b3cc4f5556b.png';
// Import integrated supply chain image
import integratedSupplyChainImage from 'figma:asset/a1e2a2ced8d43cec5741e7f8b4d00433e64a8713.png';

export default function SupplyChainLogistics() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const heroStats = [
    { 
      value: "2", 
      label: "Regional Hubs",
      description: "Strategic distribution centers in our regional hubs enabling 2-7 day delivery to major cities and 7-14 days to remote locations across East, West, and Southern Africa."
    },
    { 
      value: "High", 
      label: "Cold Chain Compliance",
      description: "Temperature-controlled storage and refrigerated transport with continuous monitoring, validated containers, and GDP-compliant procedures ensuring vaccine and biologics integrity."
    },
    { 
      value: "Growing", 
      label: "Products in Stock",
      description: "Comprehensive pharmaceutical inventory with buffer stock management, no minimum order quantities, and same-day dispatch capabilities for emergency and routine needs."
    },
    { 
      value: "Always-On", 
      label: "Real-Time Tracking",
      description: "Advanced warehouse management system with real-time inventory visibility, shipment tracking, proof of delivery, and continuous supply chain monitoring and reporting."
    }
  ];

  const pillars = [
    {
      number: "01",
      title: "Demand Planning & Stock Optimization",
      description: "Predictive analytics, buffer stock management, stock-out prevention, and supply chain resilience audits.",
      image: demandPlanningImage
    },
    {
      number: "02",
      title: "Regional Hub Management & Real-Time Inventory",
      description: "Regional hubs in our regional hubs with real-time WMS, no minimum orders, and same-day dispatch capabilities.",
      image: regionalHubImage
    },
    {
      number: "03",
      title: "Cold Chain Management & Temperature Monitoring",
      description: "Temperature-controlled 2-8°C storage, refrigerated transport, continuous monitoring, and GDP compliance.",
      image: coldChainImage
    },
    {
      number: "04",
      title: "Last-Mile Delivery & Customs Coordination",
      description: "Optimized routing, expert customs clearance, proof of delivery, and remote location access.",
      image: lastMileImage
    }
  ];

  const pillarDetails = [
    {
      title: "Demand Planning & Stock Optimization",
      subtitle: "Predictive Analytics and Buffer Stock Management for Supply Continuity",
      image: demandPlanningImage,
      content: {
        intro: "Effective supply chain management begins with accurate demand forecasting. Our data-driven approach to demand planning and stock optimization ensures healthcare facilities maintain optimal inventory levels, prevent stock-outs, and build resilience against supply disruptions.",
        sections: [
          {
            heading: "Predictive Demand Forecasting",
            description: "Advanced analytics combining historical consumption data, epidemiological trends, seasonal patterns, and program scale-up projections to predict future demand with high accuracy. Our forecasting models account for disease burden shifts, policy changes, and donor funding cycles to prevent both stock-outs and excess inventory."
          },
          {
            heading: "Buffer Stock Strategy & Management",
            description: "Strategic buffer stock positioning at regional hubs ensures rapid response to unexpected demand spikes, supply disruptions, or emergency health needs. We maintain 3-6 months of safety stock for essential products based on consumption velocity, lead time variability, and supply chain risk assessment."
          },
          {
            heading: "Stock-Out Prevention Systems",
            description: "Early warning systems with automated alerts for low stock levels, approaching expiries, and order triggers. Proactive procurement recommendations ensure continuous product availability. Our clients achieve strong service levels with optimized inventory investment."
          },
          {
            heading: "Supply Chain Resilience Audits",
            description: "Comprehensive assessment of supply chain vulnerabilities including single-source dependencies, lead time risks, regulatory bottlenecks, and infrastructure constraints. We develop tailored mitigation strategies including supplier diversification, buffer stock positioning, and alternative routing plans."
          },
          {
            heading: "Consumption Data Analysis & Reporting",
            description: "Detailed analytics on consumption patterns, stock turnover rates, wastage levels, and service quality metrics. Regular reporting enables evidence-based procurement decisions and continuous supply chain optimization."
          }
        ],
        highlights: [
          "High demand forecasting accuracy",
          "Reliable service level achievement",
          "3-6 months strategic buffer stock",
          "Automated low-stock alerts",
          "Supply chain risk assessments",
          "Real-time consumption analytics"
        ]
      }
    },
    {
      title: "Regional Hub Management & Real-Time Inventory",
      subtitle: "Strategic Distribution Hubs with Advanced Warehouse Management",
      image: regionalHubImage,
      content: {
        intro: "Our regional distribution hubs in our regional hub locations serve as strategic pharmaceutical stockpoints enabling rapid delivery across East, West, and Southern Africa. Advanced warehouse management systems provide real-time inventory visibility and same-day dispatch capabilities.",
        sections: [
          {
            heading: "Strategic Hub Locations",
            description: "Regional hubs positioned in strategic locations serving East, West, and Southern Africa enable 2-7 day delivery to major cities compared to 4-6 week international shipping. Hub locations selected based on transport infrastructure, regulatory environment, and market access."
          },
          {
            heading: "Real-Time Warehouse Management System (WMS)",
            description: "Cloud-based WMS provides real-time inventory visibility, automated stock tracking, FEFO rotation, lot traceability, and proof of receipt/dispatch documentation. Customers access live stock levels, place orders, and track shipments through our online portal dedicated."
          },
          {
            heading: "No Minimum Order Quantities",
            description: "Unlike traditional distributors requiring minimum orders, we process single-carton orders with the same efficiency as container loads. This flexibility enables small clinics and large hospitals to order exactly what they need when they need it, reducing inventory carrying costs and waste."
          },
          {
            heading: "Same-Day Dispatch Capabilities",
            description: "Orders received before 12pm are processed and dispatched the same business day. Rapid fulfillment reduces lead times, enables just-in-time inventory management, and supports emergency response needs. Expedited processing available for urgent orders."
          },
          {
            heading: "Quality Storage Conditions",
            description: "Climate-controlled warehouses with ambient (15-25°C), cold chain (2-8°C), and frozen (-20°C) zones. Security measures, pest control, proper product segregation, and regular facility inspections ensure pharmaceutical quality standards throughout storage period."
          }
        ],
        highlights: [
          "2 regional hubs: our regional hubs",
          "2-7 day delivery to major cities",
          "Real-time inventory visibility",
          "No minimum order requirements",
          "Same-day dispatch capability",
          "Multi-temperature storage zones"
        ]
      }
    },
    {
      title: "Cold Chain Management & Temperature Monitoring",
      subtitle: "GDP-Compliant Cold Chain from Hub to Healthcare Facility",
      image: coldChainImage,
      content: {
        intro: "Vaccines, biologics, and temperature-sensitive medications require uncompromising cold chain integrity. Our GDP-compliant cold chain infrastructure and validated processes ensure pharmaceutical products maintain potency from our hubs through last-mile delivery.",
        sections: [
          {
            heading: "Temperature-Controlled Storage (2-8°C)",
            description: "Dedicated cold rooms with industrial refrigeration systems maintaining 2-8°C for vaccines and biologics. Backup generators, redundant cooling systems, and alarm monitoring prevent temperature excursions. All equipment calibrated and validated according to WHO PQS standards."
          },
          {
            heading: "Continuous Temperature Monitoring",
            description: "Automated temperature monitoring systems with wireless sensors, cloud-based data logging, and instant SMS/email alerts for deviations. Continuous temperature records maintained for regulatory compliance and quality assurance audits. Temperature mapping performed annually to identify hot/cold spots."
          },
          {
            heading: "Refrigerated Transport Fleet",
            description: "GPS-tracked refrigerated vehicles for urban delivery and validated cold boxes/vaccine carriers for remote areas. Temperature data loggers accompany every cold chain shipment providing documented proof of temperature maintenance throughout transport. Thermal packaging validated for up to 96 hours."
          },
          {
            heading: "GDP Compliance & SOPs",
            description: "Comprehensive standard operating procedures covering cold chain receiving, storage, picking, packing, transport, and deviation management. Staff trained on WHO/GDP cold chain requirements with competency assessments. Regular internal audits and client inspections welcomed."
          },
          {
            heading: "Temperature Deviation Protocols",
            description: "Documented procedures for investigating and managing temperature excursions including product segregation, manufacturer consultation, and disposition decisions. Temperature excursion reports provided to clients for transparency and regulatory compliance."
          }
        ],
        highlights: [
          "high cold chain compliance rate",
          "continuous automated temperature monitoring",
          "equipment guided by WHO PQS standards",
          "Refrigerated vehicle fleet",
          "GDP-compliant processes",
          "Complete temperature documentation"
        ]
      }
    },
    {
      title: "Last-Mile Delivery & Customs Coordination",
      subtitle: "Reliable Delivery to Remote Locations with Expert Customs Clearance",
      image: lastMileImage,
      content: {
        intro: "The final mile determines whether products reach patients. Our optimized last-mile delivery network combines GPS-tracked vehicles, local partnerships, and expert customs coordination to ensure reliable access even to remote and hard-to-reach health facilities.",
        sections: [
          {
            heading: "Optimized Delivery Routing",
            description: "Route optimization algorithms combining delivery destinations, vehicle capacity, time windows, and road conditions to maximize efficiency. Scheduled routes to regional areas provide predictable delivery windows while maintaining flexibility for urgent orders and route adjustments."
          },
          {
            heading: "Remote & Hard-to-Reach Access",
            description: "Partnerships with local transporters and community networks extend our reach to remote rural areas, island communities, and conflict-affected regions. Multi-modal transport combining trucks, boats, motorcycles, and porters ensures no facility is left behind."
          },
          {
            heading: "Expert Customs Clearance",
            description: "Dedicated customs clearance specialists manage import documentation, tariff classification, tax exemption processing, and regulatory approvals. We navigate complex African customs environments ensuring compliant, efficient clearance. Average clearance time 2-5 days depending on country."
          },
          {
            heading: "Real-Time Tracking & Proof of Delivery",
            description: "GPS vehicle tracking, SMS delivery notifications, and electronic proof of delivery with recipient signatures and timestamps. Customers track shipments in real-time through our online portal. All delivery documentation maintained for compliance and audit purposes."
          },
          {
            heading: "Emergency & Expedited Services",
            description: "rapid emergency response capability for critical medication needs. Expedited processing, priority routing, and dedicated transport available for urgent orders. 2-4 hour emergency delivery in urban areas. Coordination with client emergency preparedness plans."
          }
        ],
        highlights: [
          "2-7 days to major cities",
          "7-14 days to remote locations",
          "GPS-tracked deliveries",
          "Expert customs clearance",
          "rapid emergency response",
          "Electronic proof of delivery"
        ]
      }
    }
  ];

  const processSteps = [
    { number: "1", title: "Consultation", description: "Customized supply chain strategy" },
    { number: "2", title: "Forecasting", description: "Demand planning & procurement" },
    { number: "3", title: "Hub Dispatch", description: "GDP-compliant processing" },
    { number: "4", title: "In-Transit", description: "Customs & real-time tracking" },
    { number: "5", title: "Delivery", description: "Last-mile confirmation" }
  ];

  const benefits = [
    { title: "High Availability", description: "Eliminate stock-outs" },
    { title: "high Compliance", description: "Cold chain integrity" },
    { title: "Rapid Delivery", description: "Regional hub speed" },
    { title: "Remote Access", description: "Reach any location" },
    { title: "GDP Standards", description: "Quality assurance" },
    { title: "No Minimums", description: "Flexible ordering" }
  ];

  const whoWeServe = [
    {
      category: "Public Sector Healthcare",
      description: "Comprehensive supply chain solutions for government healthcare facilities including ministries of health, public hospitals, and health programs with GDP-compliant delivery, buffer stock management, and emergency support."
    },
    {
      category: "Private Healthcare Providers",
      description: "Full-service logistics and warehousing for private hospitals, clinic chains, and medical centers with flexible ordering, real-time inventory tracking, and dedicated account management."
    },
    {
      category: "Development Organizations",
      description: "Specialized supply chain support for international health programs including development banks (AfDB, World Bank), NGOs, UN organizations, compliance documentation, and impact reporting."
    },
    {
      category: "Commercial Distributors",
      description: "Strategic distribution partnerships for pharmaceutical companies, wholesalers, and distributors with regional hub access, cold chain capabilities, and last-mile delivery networks."
    }
  ];

  const faqs = [
    {
      question: "How does Pacem Health improve supply chain resilience?",
      answer: "We build resilience through predictive demand forecasting, buffer stock management, regional distribution hubs in East and West Africa, and diversified supplier networks. Our approach ensures continuous product availability even during supply disruptions."
    },
    {
      question: "What are your delivery timelines from the regional hubs?",
      answer: "Delivery timelines vary by location, but our regional hubs at our regional hubs enable 2-7 day delivery to most major cities and 7-14 days to remote locations—significantly faster than 4-6 week international shipping times."
    },
    {
      question: "Do you have a minimum order quantity (MOQ)?",
      answer: "No. Unlike traditional distributors, we do not impose minimum order quantities. Whether you need a single carton or a container load, we process your order with the same efficiency and care."
    },
    {
      question: "How do you ensure the integrity of cold chain products?",
      answer: "We maintain high cold chain compliance through temperature-controlled storage facilities (2-8°C), refrigerated vehicles, validated passive containers, continuous temperature monitoring with data loggers, and GDP-compliant standard operating procedures."
    },
    {
      question: "Can you deliver to remote and hard-to-reach locations?",
      answer: "Yes. Our last-mile delivery network uses local knowledge and partnerships to reach even the most remote health facilities, including hard-to-reach rural areas and conflict-affected regions."
    },
    {
      question: "How can your supply chain services give my private hospital a competitive advantage?",
      answer: "Reliable supply eliminates stock-outs, ensures continuous patient care, reduces inventory holding costs through just-in-time delivery, and frees your team to focus on clinical excellence rather than procurement headaches."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Supply Chain & Logistics" />
      
      {/* Enhanced Hero Section with Integrated Stats */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10" />
        <motion.img
          src={heroImage}
          alt="Aerial view of shipping port"
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
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-white mb-6 leading-tight">
              Supply Chain & Logistics
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Building resilient healthcare delivery systems through reliable, GDP-compliant supply chain solutions
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00aeef] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#0099d6] transition-colors"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* We Don't Just Move Product */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-blue mb-6 leading-tight">
              Regional Hubs. Local Expertise. Global Standards.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              In Africa's dynamic healthcare landscape, supply chain reliability is a <strong>strategic enabler</strong> of healthcare delivery. Through regional distribution hubs in East and West Africa, GDP-compliant cold chain facilities, and optimized last-mile networks, we ensure continuous product availability for government ministries, development partners, private hospitals, and pharmaceutical companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars with Imagery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-4 leading-tight">
              Four Pillars of Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              End-to-end supply chain management from forecasting through delivery
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
                  <h3 className="text-xl font-serif font-semibold text-blue mb-3 leading-tight">
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

      {/* Supply Chain Operations at a Glance */}
      <section className="py-20 bg-[rgba(161,71,71,0)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-4 leading-tight">
              Supply Chain Operations at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a strategic supply chain partner, we not only manage logistics, but we also provide demand forecasting, warehousing, cold chain management, and last-mile delivery that enable continuous product availability across Africa's dynamic healthcare landscape.
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
                <div className="text-5xl font-bold text-blue mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold mb-2 font-bold">
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

      {/* Why Partner - Icon Grid Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-blue mb-4 leading-tight">
              Why Partner With Pacem Health
            </h2>
            <p className="text-xl text-gray-600">
              Measurable supply chain excellence across the value chain
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
                <h3 className="text-xl font-serif font-semibold text-blue mb-3 leading-tight">
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

      {/* Who We Serve - Compact Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-blue mb-4 leading-tight">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive supply chain solutions for every healthcare stakeholder
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
                <div className="h-1 bg-[#ff6b35]" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-semibold text-blue mb-3 leading-tight">
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

      {/* 5-Step Process - Horizontal Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-4 leading-tight">
              Our Supply Chain Process
            </h2>
            <p className="text-lg text-gray-600">
              From consultation to confirmed delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-1 bg-[#ff6b35]" />
                <div className="p-6">
                  <div className="text-6xl font-bold text-[#ff6b35]/20 mb-3">
                    0{step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-blue mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnership Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={integratedSupplyChainImage}
                alt="Supply chain logistics management with global connections"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-6 leading-tight">
                One Integrated Supply Chain Partner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether strengthening public health infrastructure or building competitive advantage in the private market, Pacem Health delivers supply chain excellence tailored to your sector's unique needs.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Operating from regional distribution hubs in our regional hub locations, we maintain high compliance with GDP standards for cold chain excellence. Our flexible ordering system eliminates minimum order quantity requirements, while our optimized last-mile delivery network ensures reliable access to remote and hard-to-reach locations across Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#003d7a]/95 z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1717940716846-5c061c2e66b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBzaGlwcGluZyUyMHBvcnQlMjBjb250YWluZXJzfGVufDF8fHx8MTc2Nzg0Mjc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Supply chain background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Strengthen Your Supply Chain?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a free consultation with our logistics experts to eliminate stock-outs, ensure cold chain compliance, and build resilient healthcare delivery systems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
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
                Download Capabilities Deck
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
                      <h3 className="text-xl font-serif font-semibold text-blue mb-2 leading-tight">
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
                  <h3 className="text-xl font-serif font-semibold text-blue mb-4 leading-tight">Key Highlights</h3>
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