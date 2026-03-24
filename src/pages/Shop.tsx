import { motion } from 'motion/react';
import { Package, GraduationCap, TestTube, Stethoscope, Wrench, Snowflake, Smartphone, RefreshCw, ShoppingCart, Globe, ShieldCheck, Headphones, ArrowRight, FileDown, X, Building2, User, Mail, Phone, MapPin, Calendar, Package2, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Shop() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    country: '',
    category: '',
    quantity: '',
    timeline: '',
    budget: '',
    description: ''
  });

  // Catalog download URL
  const catalogUrl = 'https://drive.google.com/uc?export=download&id=1cxwQk7ivMGhNWIx3GecPJHhWSJvgYIaL';

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { number: '1,500+', label: 'Quality Products' },
    { number: '3', label: 'Markets Served' },
    { number: '100%', label: 'Certified Equipment' },
    { number: '24/7', label: 'Support Available' }
  ];

  const categories = [
    {
      icon: Package,
      title: 'Shop All',
      description: 'Browse our complete product catalog',
      image: 'https://images.unsplash.com/photo-1722235623488-ae7639a2ffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZHVjdHMlMjBjYXRhbG9nfGVufDF8fHx8MTc2NzkyNzI3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-blue'
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'Training materials and educational resources',
      image: 'https://images.unsplash.com/photo-1767023469101-d923c6c7e9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdHJhaW5pbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzY3ODUxODIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-teal'
    },
    {
      icon: TestTube,
      title: 'Training & Simulation Kits',
      description: 'Hands-on simulation equipment for medical training',
      image: 'https://images.unsplash.com/photo-1767121184611-54feeca19339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2ltdWxhdGlvbiUyMHRyYWluaW5nfGVufDF8fHx8MTc2NzkyNzI3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-orange'
    },
    {
      icon: Stethoscope,
      title: 'Medical Equipment',
      description: 'Comprehensive range of medical devices',
      image: 'https://images.unsplash.com/photo-1595464144526-5fb181b74625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwaG9zcGl0YWx8ZW58MXx8fHwxNzY3OTExNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-blue'
    },
    {
      icon: Wrench,
      title: 'Parts & Accessories',
      description: 'Replacement parts and equipment accessories',
      image: 'https://images.unsplash.com/photo-1661078483043-6a586b684f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcGFydHMlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3Njc5MjcyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-teal'
    },
    {
      icon: Snowflake,
      title: 'Cold Chain & Transport Supplies',
      description: 'Temperature-controlled storage and transport',
      image: 'https://images.unsplash.com/photo-1645731504684-0f6f9b73f8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwY2hhaW4lMjBtZWRpY2FsJTIwc3VwcGx5fGVufDF8fHx8MTc2NzkyNzI3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-blue'
    },
    {
      icon: Smartphone,
      title: 'Digital Health & Data Tools',
      description: 'Health IT solutions and data management',
      image: 'https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaGVhbHRoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4MzgyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-orange'
    },
    {
      icon: RefreshCw,
      title: 'Refurbished Equipment',
      description: 'Certified pre-owned medical equipment',
      image: 'https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZ1cmJpc2hlZCUyMG1lZGljYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY3OTI3MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-teal'
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: 'Certified Quality',
      description: 'All equipment sourced from trusted, certified global suppliers meeting international standards.'
    },
    {
      icon: Globe,
      title: 'Export-Ready',
      description: 'Complete documentation, compliance support, and cold chain coordination for seamless delivery.'
    },
    {
      icon: Headphones,
      title: 'Full Support',
      description: 'Installation, training, maintenance, and 24/7 technical support for every product we deliver.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy/90 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <ShoppingCart className="w-10 h-10 sm:w-12 sm:h-12 text-orange" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 sm:mb-6">
              Pacem Health Shop
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Quality medical equipment, training tools, and healthcare solutions for Sub-Saharan Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-3 sm:mb-4">
              Shop by Category
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Find the right products for your healthcare facility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-serif text-navy mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                      {category.description}
                    </p>
                    <motion.a
                      href={catalogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 bg-blue text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-blue/90 transition-all w-full"
                    >
                      <FileDown className="w-4 h-4" />
                      Download Catalog
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pacem Health */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-3 sm:mb-4">
              Why Choose Pacem Health?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 border-2 border-blue/10 hover:border-blue/30 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue rounded-full mb-4 sm:mb-6">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Custom Solutions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-3 sm:mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our team can create tailored equipment packages and training programs for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-blue/90 transition-all shadow-lg"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-navy border-2 border-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-blue/5 transition-all shadow-lg"
                onClick={() => window.open(catalogUrl, '_blank')}
              >
                Download Catalog
                <FileDown className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-navy to-blue p-6 sm:p-8 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2">
                    Request a Custom Quote
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base">
                    Tell us about your needs and we'll create a tailored solution
                  </p>
                </div>
                <button
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsQuoteModalOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-xl font-serif text-navy mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-navy" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Hospital or Organization Name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title/Position *
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="e.g., Procurement Manager"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="e.g., Kenya, Nigeria, Tanzania"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-8">
                <h3 className="text-xl font-serif text-navy mb-4 flex items-center gap-2">
                  <Package2 className="w-5 h-5 text-navy" />
                  Project Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={(e) => handleInputChange(e as any)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="education-training">Education & Training</option>
                      <option value="simulation-kits">Training & Simulation Kits</option>
                      <option value="medical-equipment">Medical Equipment</option>
                      <option value="parts-accessories">Parts & Accessories</option>
                      <option value="cold-chain">Cold Chain & Transport Supplies</option>
                      <option value="digital-health">Digital Health & Data Tools</option>
                      <option value="refurbished">Refurbished Equipment</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="e.g., 10-20 units"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange(e as any)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all appearance-none"
                        required
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (Within 1 month)</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="planning">Planning phase</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => handleInputChange(e as any)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="mb-8">
                <h3 className="text-xl font-serif text-navy mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-navy" />
                  Additional Details
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your specific needs *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Please describe your requirements, specific products needed, delivery location, installation needs, training requirements, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all resize-none"
                    required
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Include any specific product models, certifications required, or special considerations
                  </p>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-gray-200">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
                  onClick={() => setIsQuoteModalOpen(false)}
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue text-white px-6 py-3 rounded-full font-medium hover:bg-blue/90 transition-all shadow-lg"
                >
                  Submit Quote Request
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}