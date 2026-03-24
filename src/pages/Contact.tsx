import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Building2, Globe, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Building2,
      title: 'Headquarters',
      details: ['123 Health Plaza', 'Nairobi, Kenya', 'East Africa'],
      color: 'text-orange'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+254 (0) 20 123 4567', '+234 (0) 1 234 5678', 'Mon-Fri, 8am-6pm EAT'],
      color: 'text-blue'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@pacemhealth.com', 'partnerships@pacemhealth.com', 'support@pacemhealth.com'],
      color: 'text-teal'
    },
    {
      icon: Globe,
      title: 'Regional Offices',
      details: ['Lagos, Nigeria', 'Accra, Ghana', 'Johannesburg, South Africa'],
      color: 'text-blue'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'services', label: 'Service Information' },
    { value: 'careers', label: 'Careers' },
    { value: 'media', label: 'Media & Press' },
    { value: 'support', label: 'Customer Support' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzY3OTA2NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Contact us"
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              GET IN TOUCH
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Let's discuss how we can partner to transform healthcare delivery across Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Icon className={`w-10 h-10 ${info.color} mb-4`} />
                  <h3 className="text-xl font-serif font-semibold text-blue mb-3 leading-tight">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-1 w-20 bg-orange mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-6 leading-tight">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Whether you're a global health partner looking to enter African markets, a healthcare provider seeking solutions, or simply want to learn more about our services, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-blue mb-2 leading-tight">
                      Quick Response Time
                    </h3>
                    <p className="text-gray-600">
                      We typically respond to inquiries within 24-48 hours during business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-blue mb-2 leading-tight">
                      Dedicated Support
                    </h3>
                    <p className="text-gray-600">
                      Our team of experts is ready to discuss your specific needs and provide tailored solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-blue mb-2 leading-tight">
                      Pan-African Coverage
                    </h3>
                    <p className="text-gray-600">
                      With regional offices across the continent, we're always close to our partners.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="mt-10 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3ODQxMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Customer service"
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
                {/* Inquiry Type */}
                <div className="mb-6">
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-blue mb-2">
                    Type of Inquiry *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                  >
                    {inquiryTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-blue mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-blue mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-blue mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-blue mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="+254 123 456 789"
                    />
                  </div>
                </div>

                {/* Company & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-blue mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-blue mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="Kenya"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-semibold text-blue mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-blue mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
                    submitStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-blue text-white hover:bg-blue/90'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <span>✓</span>
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-center text-green-600 text-sm"
                  >
                    Thank you for contacting us! We'll get back to you shortly.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Office Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-4 leading-tight">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">
              Pan-African presence with regional offices serving the continent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: 'Nairobi',
                country: 'Kenya',
                region: 'East Africa Headquarters',
                address: '123 Health Plaza, Westlands',
                phone: '+254 (0) 20 123 4567',
                image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc4MjAzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              {
                city: 'Lagos',
                country: 'Nigeria',
                region: 'West Africa Regional Office',
                address: '456 Victoria Island, Lagos',
                phone: '+234 (0) 1 234 5678',
                image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc4MjAzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              {
                city: 'Johannesburg',
                country: 'South Africa',
                region: 'Southern Africa Regional Office',
                address: '789 Sandton Drive, Sandton',
                phone: '+27 (0) 11 234 5678',
                image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc4MjAzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-serif font-semibold text-white leading-tight">
                      {location.city}
                    </h3>
                    <p className="text-white/90 text-sm">{location.country}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-orange mb-3">
                    {location.region}
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-blue mt-1 flex-shrink-0" />
                      <span className="text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue flex-shrink-0" />
                      <span className="text-sm">{location.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy/95 z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzY3OTA2NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Transform Healthcare Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the leading healthcare partners across Africa who trust Pacem Health to deliver excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+254201234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange/90 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.a>
              <motion.a
                href="mailto:info@pacemhealth.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
