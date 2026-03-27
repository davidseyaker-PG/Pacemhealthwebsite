import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'wouter';
import { Eye, UserPlus, Handshake, ArrowRight, ShieldCheck, Package, FileText, Clock, Lock, Globe, X, Mail, Phone, MapPin } from 'lucide-react';

export default function HealthcarePortal() {
  const [showContactSales, setShowContactSales] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const tiers = [
    {
      icon: Eye,
      name: 'Guest Access',
      tagline: 'Browse before you commit',
      description: 'Preview our product categories with general descriptions and limited specifications. No account required.',
      features: [
        'View product category overviews',
        'General product descriptions',
        'Download general catalog',
        'Request more information'
      ],
      action: 'Browse as Guest',
      actionStyle: 'border-2 border-blue text-blue hover:bg-blue hover:text-white',
      highlight: false
    },
    {
      icon: UserPlus,
      name: 'Registered Customer',
      tagline: 'Full specifications and documentation',
      description: 'Access complete product details, technical documentation, certifications, and request personalized quotes.',
      features: [
        'Full product specifications',
        'Technical documentation and manuals',
        'Quality certifications and compliance data',
        'Request personalized quotes',
        'Order tracking and history'
      ],
      action: 'Register Now',
      actionStyle: 'bg-blue text-white hover:bg-blue/90',
      highlight: true
    },
    {
      icon: Handshake,
      name: 'Verified Partner',
      tagline: 'Priority access for contracted partners',
      description: 'Full catalog access with contract pricing, priority fulfillment, dedicated support, and bulk order management.',
      features: [
        'Everything in Registered Customer',
        'Contract-based pricing tiers',
        'Priority order fulfillment',
        'Dedicated account manager',
        'Bulk order management tools',
        'API access for system integration'
      ],
      action: 'Contact Sales',
      actionStyle: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
      highlight: false
    }
  ];

  const whyRegister = [
    {
      icon: ShieldCheck,
      title: 'Regulatory Compliance',
      description: 'Certain pharmaceutical and medical products require verified credentials before detailed information can be shared.'
    },
    {
      icon: Package,
      title: 'Tailored Product Access',
      description: 'Registered users see products relevant to their market, with specifications tailored to their regulatory environment.'
    },
    {
      icon: FileText,
      title: 'Complete Documentation',
      description: 'Access technical manuals, quality certificates, stability data, and compliance documentation for every product.'
    },
    {
      icon: Clock,
      title: 'Faster Procurement',
      description: 'Registered accounts streamline the quoting and ordering process, reducing procurement lead times significantly.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy/90 py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue rounded-full mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white mb-4 sm:mb-6">
              Healthcare Portal
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Access our complete product catalog with tiered information levels designed for healthcare professionals, procurement teams, and institutional partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://pacem-market-access-production.up.railway.app/register"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-orange text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange/90 transition-all shadow-lg"
              >
                Register for Access
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#tiers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all"
              >
                View Access Tiers
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Access Tiers */}
      <section id="tiers" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-3 sm:mb-4">
              Choose Your Access Level
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our tiered system ensures you see the right level of product detail for your needs while maintaining regulatory compliance across all markets we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col ${tier.highlight ? 'ring-2 ring-blue' : ''}`}
              >
                {tier.highlight && (
                  <div className="bg-blue text-white text-center py-2 text-sm font-heading font-bold tracking-wider">
                    RECOMMENDED
                  </div>
                )}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy/10 rounded-full mb-4">
                    <tier.icon className="w-7 h-7 text-navy" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold leading-tight text-navy mb-1">{tier.name}</h3>
                  <p className="text-sm text-orange font-heading font-semibold mb-3">{tier.tagline}</p>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <ul className="space-y-2 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <ShieldCheck className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {tier.name === 'Verified Partner' ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowContactSales(true)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${tier.actionStyle}`}
                    >
                      {tier.action}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  ) : (
                    <motion.a
                      href={tier.name === 'Guest Access' ? 'https://pacem-market-access-production.up.railway.app/portal' : 'https://pacem-market-access-production.up.railway.app/register'}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${tier.actionStyle}`}
                    >
                      {tier.action}
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Register */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-3 sm:mb-4">
              Why Tiered Access?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Healthcare procurement requires verified credentials. Our tiered system protects both you and us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyRegister.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 border-2 border-blue/10 hover:border-blue/30 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue rounded-full mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold leading-tight text-navy mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Materials Callout */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Globe className="w-10 h-10 text-navy mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-tight text-navy mb-3">
              Just Need Quick Materials?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our Shop page offers general catalogs, training materials, and unregulated equipment accessories available for immediate download and ordering.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 border-2 border-blue text-blue px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-blue hover:text-white transition-all"
            >
              Visit the Shop
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Sales Modal */}
      {showContactSales && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full my-8"
          >
            <div className="bg-gradient-to-r from-navy to-blue p-6 sm:p-8 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-tight text-white mb-2">
                    Become a Verified Partner
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base">
                    Priority access, contract pricing, and dedicated support
                  </p>
                </div>
                <button
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setShowContactSales(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-gray-700 mb-6">
                Contact our sales team to discuss partnership terms. Once a formal agreement is in place, your organization will be upgraded to Partner-level access with contract pricing, priority fulfillment, a dedicated account manager, and API integration.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <a href="mailto:sales@pacemhealth.com" className="text-blue font-semibold hover:underline">
                      sales@pacemhealth.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <a href="tel:+16168711799" className="text-blue font-semibold hover:underline">
                      (616) 871-1799
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Office</p>
                    <p className="text-navy font-semibold">300 Ottawa Ave NW, 5th Floor</p>
                    <p className="text-gray-600 text-sm">Grand Rapids, MI 49503, USA</p>
                  </div>
                </div>
              </div>

              <div className="bg-green/10 border border-green/20 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-navy">Already a Registered Customer?</span> Your account history and order records will carry over when you upgrade to Partner status. Many of our current partners began as registered customers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowContactSales(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
                >
                  Close
                </motion.button>
                <motion.a
                  href="mailto:sales@pacemhealth.com?subject=Partnership%20Inquiry%20-%20Healthcare%20Portal"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-medium hover:bg-navy/90 transition-all shadow-lg"
                >
                  Send Email
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
