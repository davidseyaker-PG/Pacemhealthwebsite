import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'motion/react';
import { TrendingUp, Users, Building2, Target, ArrowRight, CheckCircle2, Mail, Phone, MapPin, FileText, Download, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import heroImage from 'figma:asset/47f3e42a0e8789a57177122815bba7dc752ee55c.png';
import jpMorganConferenceImage from 'figma:asset/07613fdf74f8f9a95fcfe0ff900feb1bc15a3cfc.png';
import kenyaOperationsImage from 'figma:asset/be6339830644be225ab3eb00d1acd86b9f755bd2.png';
import q4ResultsImage from 'figma:asset/edc3cbc1afc3ece465b97cffd92fcb354bcf1f5b.png';

export default function Investors() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    investorType: '',
    message: ''
  });

  const [activeQuarterlyTab, setActiveQuarterlyTab] = useState('summary');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://pacem-market-access-production.up.railway.app/api/investor-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.organization,
          investorType: formData.investorType,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setSubmitStatus('success');
        alert('Thank you for your interest. Our investor relations team will contact you shortly.');
        setFormData({ name: '', email: '', organization: '', investorType: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        alert('Something went wrong. Please try again or email us at sales@pacemhealth.com.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch {
      setSubmitStatus('error');
      alert('Something went wrong. Please try again or email us at sales@pacemhealth.com.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <img
            src={heroImage}
            alt="Pharmaceutical Research - Laboratory Innovation"
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>
        <div className="absolute inset-0 bg-navy/30"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white mb-6">
              Invest in Africa's Healthcare Future
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join us in transforming healthcare delivery across Africa. We're building the infrastructure 
              to serve 1.4 billion people with quality, accessible healthcare solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-8">
              Corporate Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              Pacem Health is a leading health systems integrator focused on strengthening healthcare delivery across sub-Saharan Africa. We partner with governments, development organizations, and healthcare institutions to build resilient, self-sustaining health infrastructure through integrated pharmaceutical supply chains, medical equipment provisioning, healthcare facility development, and digital health solutions -- creating sustainable value while transforming health outcomes for millions.
            </p>
            <Link
              href="/corporate-overview"
              className="inline-flex items-center gap-2 bg-navy text-white hover:bg-navy/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 group"
            >
              READ MORE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Investor News Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-orange tracking-wider mb-2">FEATURED UPDATES</div>
                <h2 className="text-3xl font-serif font-bold leading-tight text-navy">Latest Developments</h2>
              </div>
              <a 
                href="/news" 
                className="text-navy hover:text-navy font-semibold flex items-center gap-2 group"
              >
                View All News
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Large Featured Story */}
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-10"></div>
                <img
                  src={jpMorganConferenceImage}
                  alt="JPMorgan Conference - Africa Map"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-orange text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider">
                    PARTNERSHIP ANNOUNCEMENT
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="text-white/80 text-sm mb-3 font-semibold">January 15, 2026</div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-white mb-3 leading-tight">
                    Pacem Health Secures $45M Partnership with African Development Bank
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Multi-year agreement to strengthen pharmaceutical supply chains across 12 sub-Saharan African countries, 
                    marking our largest institutional partnership to date.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Two Smaller Stories Stacked */}
            <div className="space-y-8">
              {/* Story 2 */}
              <motion.article
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group cursor-pointer flex gap-6"
              >
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="bg-blue/10 text-navy px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                      MARKET EXPANSION
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm mb-2 font-semibold">January 12, 2026</div>
                  <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3 group-hover:text-navy transition-colors">
                    Kenya Operations Launch: First 50 Healthcare Facilities Onboarded
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    Successful deployment of integrated pharmaceutical supply and digital health solutions across 
                    Nairobi and surrounding counties, with plans to scale to 200+ facilities by Q2 2026.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-navy font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={kenyaOperationsImage}
                    alt="Kenya Healthcare Operations - Patient Care"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.article>

              {/* Story 3 */}
              <motion.article
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group cursor-pointer flex gap-6"
              >
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="bg-green/10 text-green px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                      FINANCIAL MILESTONE
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm mb-2 font-semibold">January 8, 2026</div>
                  <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3 group-hover:text-navy transition-colors">
                    Q4 2025 Revenue Exceeds Projections by 40%, Signaling Strong Market Demand
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    Fourth quarter results demonstrate accelerating growth trajectory with pharmaceutical distribution 
                    revenue reaching $8.2M, driven by government contracts and institutional partnerships.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-navy font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={q4ResultsImage}
                    alt="Q4 2025 Financial Results - Revenue Growth"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Stakeholder Report Section */}
      <section className="py-20 bg-blue">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white mb-6">
              2025 Annual Stakeholder Report
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our comprehensive annual report provides stakeholders with detailed insights into our operations, 
              impact, partnerships, and strategic direction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:shadow-lg transition-all duration-300 group border border-white/20"
            >
              <FileText className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-white text-center">CEO Letter to Stakeholders</span>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:shadow-lg transition-all duration-300 group border border-white/20"
            >
              <FileText className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-white text-center">Impact & Sustainability Report</span>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:shadow-lg transition-all duration-300 group border border-white/20"
            >
              <FileText className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-white text-center">Partnership Highlights</span>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:shadow-lg transition-all duration-300 group border border-white/20"
            >
              <FileText className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-white text-center">Market Expansion & Growth</span>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:shadow-lg transition-all duration-300 group border border-white/20"
            >
              <FileText className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-white text-center">Regulatory & Compliance</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <button className="inline-flex items-center gap-2 bg-white text-blue hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              <Download className="w-5 h-5" />
              Download Complete 2025 Report
            </button>
          </motion.div>
        </div>
      </section>

      {/* Latest Quarterly Updates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-6">
              Latest Quarterly Updates
            </h2>
            <div className="text-5xl font-bold text-navy mb-2">Q4</div>
            <div className="text-xl text-gray-600">2025</div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl hover:bg-blue/5 hover:shadow-lg transition-all duration-300 group border border-gray-200"
            >
              <FileText className="w-12 h-12 text-navy group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-navy text-center">Executive Summary</span>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl hover:bg-blue/5 hover:shadow-lg transition-all duration-300 group border border-gray-200"
            >
              <FileText className="w-12 h-12 text-navy group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-navy text-center">Operational Highlights</span>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl hover:bg-blue/5 hover:shadow-lg transition-all duration-300 group border border-gray-200"
            >
              <ExternalLink className="w-12 h-12 text-navy group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-navy text-center">Partnership Updates</span>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl hover:bg-blue/5 hover:shadow-lg transition-all duration-300 group border border-gray-200"
            >
              <FileText className="w-12 h-12 text-navy group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-navy text-center">Market Progress</span>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl hover:bg-blue/5 hover:shadow-lg transition-all duration-300 group border border-gray-200"
            >
              <FileText className="w-12 h-12 text-navy group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-navy text-center">Impact Metrics</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <button className="inline-flex items-center gap-2 bg-navy text-white hover:bg-navy/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              VIEW ALL QUARTERLY UPDATES
            </button>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-6">
              A Massive Market Opportunity
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Africa's healthcare market represents one of the world's last great growth frontiers, 
              with unprecedented demand driven by population growth, economic development, and increasing health awareness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-5xl font-bold mb-2 text-navy">$259B</div>
              <div className="text-xl font-semibold mb-3 text-navy">Market Size by 2030</div>
              <div className="text-gray-600">African healthcare market projected to reach $259 billion by 2030, growing at 11% CAGR</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-5xl font-bold mb-2 text-navy">1.4B</div>
              <div className="text-xl font-semibold mb-3 text-navy">Population</div>
              <div className="text-gray-600">Serving a rapidly growing population with increasing healthcare needs and purchasing power</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-5xl font-bold mb-2 text-navy">$66B</div>
              <div className="text-xl font-semibold mb-3 text-navy">Infrastructure Gap</div>
              <div className="text-gray-600">Annual healthcare infrastructure gap requiring immediate investment and practical solutions</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Thesis Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-12">
              Why Pacem Health
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3">Integrated Solutions Platform</h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete healthcare value chain from pharmaceutical supply to digital health, 
                  providing end-to-end solutions that address Africa's unique healthcare challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3">Government & Institutional Focus</h3>
                <p className="text-gray-700 leading-relaxed">
                  Strategic partnerships with ministries of health, development banks, and large healthcare 
                  institutions provide stable, long-term revenue opportunities and market access.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3">Proven Business Model</h3>
                <p className="text-gray-700 leading-relaxed">
                  Built on decades of pharmaceutical distribution expertise from McKesson, the largest 
                  healthcare company in the U.S., adapted specifically for African markets.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-navy"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3">Experienced Leadership</h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded by pharmaceutical industry veterans with combined 100+ years of experience 
                  across 30+ African countries, backed by deep operational expertise.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Growth Targets Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-6">
              Ambitious Growth Roadmap
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our 2026 targets represent our strategic vision for rapid, sustainable expansion across 
              Africa's healthcare landscape. These goals guide our operational planning and capital deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl font-bold text-navy mb-2">200%</div>
              <div className="text-sm text-orange font-semibold mb-2">YoY REVENUE GROWTH</div>
              <div className="text-gray-600 text-sm">Projected year-over-year revenue growth target</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl font-bold text-navy mb-2">25+</div>
              <div className="text-sm text-orange font-semibold mb-2">ACTIVE COUNTRIES</div>
              <div className="text-gray-600 text-sm">Target market presence across African nations</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl font-bold text-navy mb-2">1,500+</div>
              <div className="text-sm text-orange font-semibold mb-2">PARTNER FACILITIES</div>
              <div className="text-gray-600 text-sm">Healthcare facilities in our network</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl font-bold text-navy mb-2">15M+</div>
              <div className="text-sm text-orange font-semibold mb-2">PEOPLE REACHED</div>
              <div className="text-gray-600 text-sm">Lives impacted through our healthcare solutions</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-blue/5 border border-blue/20 rounded-xl p-8"
          >
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-navy mb-2">Early-Stage Growth Company</div>
                <p className="text-gray-600">
                  Pacem Health is an early-stage company with ambitious growth targets. These 2026 projections 
                  represent our strategic goals and are subject to market conditions, successful capital raises, 
                  and execution of our business plan. Past projections are not indicative of future results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Strategic Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-6">
              Target Strategic Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're actively pursuing partnerships with Africa's leading healthcare institutions, 
              development banks, and government entities to scale our impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-orange font-bold mb-4">TARGET PARTNERSHIP</div>
              <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-4">African Development Bank</h3>
              <p className="text-gray-600 mb-4">
                Multi-year collaboration framework focused on healthcare infrastructure development 
                across 12+ African countries.
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold mb-1">Strategic Focus:</div>
                <div>Healthcare infrastructure financing and technical assistance programs</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-orange font-bold mb-4">TARGET PARTNERSHIP</div>
              <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-4">Ministry of Health, Kenya</h3>
              <p className="text-gray-600 mb-4">
                Strategic memorandum of understanding for integrated healthcare delivery 
                across 15+ counties.
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold mb-1">Strategic Focus:</div>
                <div>County-level pharmaceutical supply chain and primary healthcare support</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-orange font-bold mb-4">TARGET PARTNERSHIP</div>
              <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-4">Government of Ghana</h3>
              <p className="text-gray-600 mb-4">
                National healthcare program targeting 75,000+ patients through community 
                health initiatives.
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold mb-1">Strategic Focus:</div>
                <div>Community health worker programs and rural healthcare access</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UN SDG Alignment */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Aligned with UN Sustainable Development Goals
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our business model directly contributes to achieving critical UN SDGs, creating measurable 
              social impact alongside financial returns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-2xl font-bold text-orange mb-2">SDG 3</div>
              <div className="font-semibold mb-2 text-black">Good Health & Well-Being</div>
              <div className="text-sm text-gray-600">
                Ensuring healthy lives and promoting well-being through quality healthcare access
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-2xl font-bold text-orange mb-2">SDG 8</div>
              <div className="font-semibold mb-2 text-black">Decent Work & Economic Growth</div>
              <div className="text-sm text-gray-600">
                Creating quality employment and driving sustainable economic development
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-2xl font-bold text-orange mb-2">SDG 9</div>
              <div className="font-semibold mb-2 text-black">Industry, Innovation & Infrastructure</div>
              <div className="text-sm text-gray-600">
                Building resilient healthcare infrastructure and fostering innovation
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-2xl font-bold text-orange mb-2">SDG 10</div>
              <div className="font-semibold mb-2 text-black">Reduced Inequalities</div>
              <div className="text-sm text-gray-600">
                Ensuring equal access to quality healthcare regardless of location or income
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-2xl font-bold text-orange mb-2">SDG 17</div>
              <div className="font-semibold mb-2 text-black">Partnerships for the Goals</div>
              <div className="text-sm text-gray-600">
                Strengthening partnerships to achieve sustainable development objectives
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Inquiry Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-6">
              Investment Inquiries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interested in learning more about investment opportunities with Pacem Health? 
              Contact our investor relations team to receive detailed materials and discuss our growth strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-xl p-8 text-white h-full">
                <h3 className="text-xl font-serif font-semibold leading-tight mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:investors@pacemhealth.com" className="text-white/80 hover:text-orange transition-colors">
                        investors@pacemhealth.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Address</div>
                      <div className="text-white/80">
                        300 Ottawa Ave NW, 5th Floor<br />
                        Grand Rapids, MI 49503<br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+16168711799" className="text-white/80 hover:text-orange transition-colors">
                        (616) 871-1799
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-sm text-white/70">
                    <strong className="text-white">For Qualified Investors:</strong> Detailed investment 
                    materials, financial projections, and management presentations are available upon request 
                    and execution of appropriate confidentiality agreements.
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-navy mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                      placeholder="Investment Firm Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="investorType" className="block text-sm font-semibold text-navy mb-2">
                      Investor Type
                    </label>
                    <select
                      id="investorType"
                      value={formData.investorType}
                      onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                    >
                      <option value="">Select Type</option>
                      <option value="institutional">Institutional Investor</option>
                      <option value="venture">Venture Capital</option>
                      <option value="private-equity">Private Equity</option>
                      <option value="family-office">Family Office</option>
                      <option value="angel">Angel Investor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent transition-all resize-none"
                    placeholder="Please tell us about your investment interests and any specific questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-blue hover:bg-blue/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Inquiry
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. All inquiries are confidential and will be handled by our investor relations team.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold leading-tight mb-4">
              Ready to Join Africa's Healthcare Revolution?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our investor relations team today to learn more about investment opportunities 
              and receive our detailed corporate overview.
            </p>
            <a
              href="mailto:investors@pacemhealth.com"
              className="inline-flex items-center gap-2 bg-white text-navy hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email Investor Relations
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}