import { motion } from 'motion/react';
import { Search, Phone, Mail, MessageCircle, GraduationCap, Headphones, Server, FileText, FileCheck, Wrench, Users, Briefcase, DollarSign, Smartphone, MapPin, Share2, ShieldCheck, HelpCircle, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

export default function Support() {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    email: '',
    phone: '',
    organization: '',
    priority: 'medium',
    subject: '',
    description: ''
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const supportCategories = [
    'Request Equipment Quote',
    'Request Equipment Demo',
    'Training & Education Support',
    'Platform & Systems Support',
    'Equipment Services & Maintenance',
    'Manuals & Documentation Request',
    'Spare Parts or Repair Request',
    'Career or Staffing Inquiry',
    'Procurement or Supply Chain Inquiry',
    'Donor, NGO, or Government Partnership',
    'Billing & Finance Assistance',
    'Digital Health Integration Request',
    'Site Planning or Readiness Assessment',
    'Distributors, Agents, or Resellers',
    'Product Safety or Compliance Help',
    'General Inquiry'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://pacem-market-access-production.up.railway.app/api/support-ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setShowTicketForm(false);
        alert('Support ticket submitted. Our team will respond within 24 hours.');
        setFormData({ category: '', name: '', email: '', phone: '', organization: '', priority: 'medium', subject: '', description: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        alert('Something went wrong. Please try again or email us at support@pacemhealth.com.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch {
      setSubmitStatus('error');
      alert('Something went wrong. Please try again or email us at support@pacemhealth.com.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our support team',
      detail: '(616) 871-1799',
      color: 'bg-blue'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your questions',
      detail: 'support@pacemhealth.com',
      color: 'bg-green'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: '24/7 chat support available',
      detail: 'Start Chat Now',
      color: 'bg-orange'
    }
  ];

  const featuredServices = [
    {
      icon: GraduationCap,
      title: 'Training & Education',
      description: 'Comprehensive training programs, webinars, and certification courses for healthcare professionals.',
      image: 'https://images.unsplash.com/photo-1597058557804-95ac4ee36e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjB0cmFpbmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3Njc5MjQ3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-blue'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Expert assistance for equipment troubleshooting, maintenance, and technical issues.',
      image: 'https://images.unsplash.com/photo-1724260793422-7754e5d06fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwZW5naW5lZXIlMjBjb21wdXRlcnxlbnwxfHx8fDE3Njc5MjQ3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-green'
    },
    {
      icon: Server,
      title: 'Platform & Systems',
      description: 'Support for digital health platforms, system integrations, and software solutions.',
      image: 'https://images.unsplash.com/photo-1647866427893-0057366e91b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtJTIwaGVhZHNldHxlbnwxfHx8fDE3Njc5MjQ3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-orange'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Access user manuals, guides, FAQs, and comprehensive product documentation.',
      image: 'https://images.unsplash.com/photo-1711526601883-c772ff6f5afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGF0aW9uJTIwbWFudWFsJTIwZ3VpZGV8ZW58MXx8fHwxNzY3OTI0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-navy'
    }
  ];

  const quickActions = [
    { icon: FileCheck, label: 'Request Equipment Quote', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: FileCheck, label: 'Request Equipment Demo', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: GraduationCap, label: 'Training & Education Support', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: Server, label: 'Platform & Systems Support', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: Wrench, label: 'Equipment Services & Maintenance', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: FileText, label: 'Manuals & Documentation Request', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: Wrench, label: 'Spare Parts or Repair Request', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: Users, label: 'Career or Staffing Inquiry', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: Briefcase, label: 'Procurement or Supply Chain Inquiry', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: Briefcase, label: 'Donor, NGO, or Government Partnership', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: DollarSign, label: 'Billing & Finance Assistance', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: Smartphone, label: 'Digital Health Integration Request', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: MapPin, label: 'Site Planning or Readiness Assessment', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: Share2, label: 'Distributors, Agents, or Resellers', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: ShieldCheck, label: 'Product Safety or Compliance Help', color: 'bg-blue/10 text-navy hover:bg-blue/20' },
    { icon: HelpCircle, label: 'General Inquiry', color: 'bg-blue/10 text-navy hover:bg-blue/20' }
  ];

  const handleQuickActionClick = (category: string) => {
    setFormData(prev => ({ ...prev, category }));
    setShowTicketForm(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy/90 py-16 sm:py-20 lg:py-24">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white mb-4 sm:mb-6">
              How Can We Help?
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto">
              Search our knowledge base or get in touch with our support team
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="w-full px-5 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-14 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all text-base sm:text-lg"
                />
                <button className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-orange text-white p-2 sm:p-2.5 rounded-full hover:bg-orange/90 transition-all">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to connect with our support team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 ${method.color} rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold leading-tight text-navy mb-2">
                  {method.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {method.description}
                </p>
                <p className="text-base sm:text-lg font-semibold text-navy">
                  {method.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Support Services */}
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
              Featured Support Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support across all aspects of healthcare delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 ${service.color} rounded-full`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-serif font-semibold leading-tight text-navy mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What do you need help with? */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-3 sm:mb-4">
              What do you need help with?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Select a topic to get started with your inquiry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${action.color} rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition-all shadow-sm hover:shadow-md text-left`}
                onClick={() => handleQuickActionClick(action.label)}
              >
                <div className="flex-shrink-0">
                  <action.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-sm sm:text-base font-medium">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Need Immediate Assistance */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-3 sm:mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 for urgent equipment or technical issues.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTicketForm(true)}
              className="inline-flex items-center gap-2 bg-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-blue/90 transition-all shadow-lg"
            >
              Submit a Support Ticket
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Support Ticket Form */}
      {showTicketForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-5 sm:p-6 max-w-3xl w-full max-h-[95vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold leading-tight text-navy">Submit a Support Ticket</h2>
              <button
                className="text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => setShowTicketForm(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-orange">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue transition-all text-sm"
                  >
                    <option value="">Select a category</option>
                    {supportCategories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-orange">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Your Hospital or Organization"
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Priority Level <span className="text-orange">*</span>
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue transition-all text-sm"
                  >
                    <option value="low">Low - General Inquiry</option>
                    <option value="medium">Medium - Standard Request</option>
                    <option value="high">High - Urgent Issue</option>
                    <option value="critical">Critical - Emergency</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief description of your request"
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue transition-all text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Detailed Description <span className="text-orange">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Please provide as much detail as possible about your request or issue..."
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue transition-all text-sm resize-none"
                    rows={2}
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-blue text-white px-6 py-2.5 rounded-full text-sm sm:text-base font-medium hover:bg-blue/90 transition-all shadow-lg"
                >
                  Submit Ticket
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowTicketForm(false)}
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-2.5 rounded-full text-sm sm:text-base font-medium hover:bg-gray-300 transition-all"
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}