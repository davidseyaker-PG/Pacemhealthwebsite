import { useState } from 'react';
import { motion } from 'motion/react';

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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
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
              Let's discuss how we can partner to strengthen healthcare delivery across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left Column - Contact Details */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-1 w-20 bg-orange mb-6" />
              <h2 className="text-4xl font-serif font-bold text-blue mb-4 leading-tight">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Whether you're a global health partner, a healthcare provider seeking solutions, or simply want to learn more, we're here to help.
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-semibold text-blue uppercase tracking-wider mb-2 leading-tight">Phone</h3>
                  <a href="tel:+16168711799" className="text-2xl font-serif text-gray-900 hover:text-blue transition-colors">
                    (616) 871-1799
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-blue uppercase tracking-wider mb-2 leading-tight">Email</h3>
                  <a href="mailto:support@pacemhealth.com" className="text-2xl font-serif text-gray-900 hover:text-blue transition-colors">
                    support@pacemhealth.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-blue uppercase tracking-wider mb-2 leading-tight">Headquarters</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    300 Ottawa Ave NW, 5th Floor<br />
                    Grand Rapids, MI 49503<br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-blue uppercase tracking-wider mb-2 leading-tight">Business Hours</h3>
                  <p className="text-lg text-gray-700">
                    Monday – Friday, 8:00 AM – 6:00 PM EST
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    We typically respond within 24–48 hours.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-10 rounded-2xl">
                <h3 className="text-2xl font-serif font-semibold text-blue mb-8 leading-tight">
                  Send Us a Message
                </h3>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all bg-white"
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
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Company & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-blue mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="Your Organization"
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
                      placeholder="United States"
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
                <div className="mb-8">
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
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                    submitStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-blue text-white hover:bg-blue/90'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    'Message Sent Successfully!'
                  ) : (
                    'Send Message'
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

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join the healthcare partners across Africa who trust Pacem Health to deliver quality, reliability, and reach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+16168711799"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange/90 transition-colors"
              >
                Call (616) 871-1799
              </motion.a>
              <motion.a
                href="mailto:support@pacemhealth.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
