import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ServiceBreadcrumb } from "../components/ServiceBreadcrumb";
import heroImage from "figma:asset/8f44cd417d655d6f081f59d7b51171dc1270878d.png";

export default function PharmaceuticalDistribution() {
  const productCategories = [
    {
      title: "Brand Drugs",
      description: "Innovative and patented medications from leading pharmaceutical companies"
    },
    {
      title: "Generic Drugs",
      description: "Alternatives to brand-name drugs with the same active ingredients and efficacy"
    },
    {
      title: "Specialty Drugs",
      description: "Medications for complex or chronic conditions, often requiring special handling or administration"
    },
    {
      title: "Vaccines",
      description: "A wide range of vaccines for disease prevention and routine immunization programs"
    },
    {
      title: "Plasma Products",
      description: "Plasma-derived treatments for immune deficiencies and bleeding disorders"
    },
    {
      title: "Biosimilars",
      description: "Cost-effective alternatives to biologic drugs that offer similar efficacy and safety profiles"
    },
    {
      title: "Cell & Gene Therapies",
      description: "Cutting-edge treatments targeting genetic disorders and other complex diseases through cellular and genetic modification"
    },
    {
      title: "Rare and Orphan Drugs",
      description: "Medications designed for rare diseases, addressing unmet needs in the pharmaceutical landscape"
    },
    {
      title: "Over-the-Counter (OTC)",
      description: "Non-prescription medications and health products for everyday health needs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Pharmaceutical Distribution" />
      
      {/* Hero Section - White Background with Blue Diagonal Pattern */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-7xl font-serif text-navy leading-tight mb-8">
                Pharmaceutical Distribution
              </h1>
              
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors shadow-lg"
              >
                Download Product Catalog
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>

            {/* Right Side - Professional Image with Blue Diagonal Pattern */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Blue Diagonal Background */}
              <div className="absolute -right-12 -top-8 w-[120%] h-[120%] bg-blue rounded-3xl transform rotate-6 -z-10" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Pharmaceutical research and quality control"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivering Distribution Success */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="h-1 w-20 bg-orange mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-12">
              Bridging the Pharmaceutical Access Gap in Africa
            </h2>
            
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                Access to quality pharmaceuticals remains one of Africa's greatest healthcare challenges. At Pacem Health, we've built a pharmaceutical distribution network specifically designed to overcome the unique obstacles of African healthcare marketsâfrom fragmented supply chains and regulatory complexities to infrastructure limitations and counterfeit medication risks.
              </p>
              
              <p>
                Our distribution model combines international pharmaceutical sourcing with local market expertise. We maintain strategic partnerships with WHO-approved manufacturers across Europe, Asia, and North America, ensuring our healthcare partners receive authentic, quality-assured medications at competitive prices. Every product is verified, tracked, and delivered through our GDP-compliant cold chain network.
              </p>
              
              <p>
                Whether you're a government hospital managing thousands of patients, a rural clinic serving remote communities, or a private pharmacy expanding your product range, Pacem Health provides the pharmaceutical access, regulatory support, and supply chain reliability you need to focus on what matters mostâdelivering exceptional patient care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Product Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="h-1 w-20 bg-orange mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Comprehensive Pharmaceutical Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From essential medications treating malaria and HIV/AIDS to specialty biologics and temperature-sensitive vaccines, our carefully curated pharmaceutical portfolio addresses Africa's most pressing health priorities while ensuring every product meets international quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-serif text-navy mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pacem Health */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Why Choose Pacem Health for Pharmaceutical Distribution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by healthcare facilities across Africa for reliable pharmaceutical supply chain excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-navy mb-2">3,500+</div>
              <div className="text-lg font-semibold text-gray-800 mb-3">Product SKUs</div>
              <p className="text-sm text-gray-600">
                Comprehensive pharmaceutical portfolio across all therapeutic categories
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-navy mb-2">99.8%</div>
              <div className="text-lg font-semibold text-gray-800 mb-3">Quality Rate</div>
              <p className="text-sm text-gray-600">
                Rigorous quality control with WHO-approved manufacturers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-navy mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-800 mb-3">Cold Chain</div>
              <p className="text-sm text-gray-600">
                GDP-compliant temperature monitoring for vaccines and biologics
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-navy mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-800 mb-3">Healthcare Partners</div>
              <p className="text-sm text-gray-600">
                Serving hospitals, clinics, and pharmacies across East and West Africa
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Our Distribution Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif text-navy mb-3">
                    GDP-Compliant Cold Chain
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Temperature-controlled storage and distribution for vaccines, biologics, and specialty medications with 24/7 monitoring and validated protocols ensuring product integrity from manufacturer to patient.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif text-navy mb-3">
                    Quality Assurance & Traceability
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every product sourced from WHO-approved manufacturers with batch tracking, certificate of analysis verification, and complete supply chain traceability ensuring pharmaceutical quality and patient safety.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif text-navy mb-3">
                    Flexible Delivery Network
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Same-day delivery in major cities, scheduled regional distribution, and 24/7 emergency response capability. No minimum orders - we serve facilities of all sizes from large hospitals to rural clinics.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif text-navy mb-3">
                    Regulatory Compliance Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Complete documentation for regulatory inspections including temperature records, batch certificates, and validation studies. Expert guidance on pharmaceutical regulations and compliance requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Request Catalog */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy z-10" />
        <div className="absolute inset-0 opacity-10 z-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-cta)" />
          </svg>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif text-white mb-6">
              Request Our Pharmaceutical Catalog
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Explore our comprehensive pharmaceutical portfolio. Download our product catalog or speak with our distribution team to learn how we can support your facility's medication needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors shadow-lg"
              >
                Download Product Catalog
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Contact Distribution Team
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-navy" />
                <span>3,500+ Products Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-navy" />
                <span>WHO-Approved Manufacturers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-navy" />
                <span>Same-Day Delivery Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}