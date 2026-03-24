import { motion } from 'motion/react';
import { ArrowRight, Building2, Globe, Users, Target, TrendingUp, Award, Lightbulb, Shield, Play } from 'lucide-react';
import { Link } from 'wouter';
import videoThumbnail from 'figma:asset/c497a40634acfc563fd9463211ff8c99cbdae36a.png';

export default function CorporateOverview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1765351772260-9c7ddabe6977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkcXVhcnRlcnMlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njg3NDAxODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Corporate Headquarters"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white mb-6">
              Corporate Overview
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building resilient health systems across Africa through integrated solutions and strategic partnerships
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Pacem Health */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Centered Headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-6">
              Improving Health Outcomes<br />for a Better Tomorrow
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Guided by our values, we are an impact-driven organization that improves care in every setting – one product, one partner, one patient at a time.
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              {/* Placeholder Content */}
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">Video Placeholder</p>
              </div>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-[#0d2d4a] ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learn More About Pacem Health Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="h-1 w-16 bg-[#f37321] mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-4">
              Learn More About Pacem Health
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our approach to building resilient, self-sustaining health infrastructure across Africa
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Leadership Card */}
            <motion.a
              href="/about/leadership"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1763739528307-ad10867048b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXJzaGlwJTIwY29ycG9yYXRlfGVufDF8fHx8MTc2ODc1ODgxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Leadership"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold leading-tight text-[#4a9fd8] mb-2 flex items-center gap-2">
                  Leadership
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-600 text-sm">
                  Transforming our vision into action.
                </p>
              </div>
            </motion.a>

            {/* History Card */}
            <motion.a
              href="/about/history"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1680263131734-8240e8dfd29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwdGltZWxpbmUlMjBhcmNoaXZlfGVufDF8fHx8MTc2ODc1ODgxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="History"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold leading-tight text-[#4a9fd8] mb-2 flex items-center gap-2">
                  History
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-600 text-sm">
                  Our journey building Africa's health systems.
                </p>
              </div>
            </motion.a>

            {/* Corporate Governance Card */}
            <motion.a
              href="/about/ethics-compliance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618506487216-4e8c60a64c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlJTIwbWVldGluZ3xlbnwxfHx8fDE3Njg3NTg4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Corporate Governance"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold leading-tight text-[#4a9fd8] mb-2 flex items-center gap-2">
                  Corporate Governance
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-600 text-sm">
                  Committing to effective governance practices.
                </p>
              </div>
            </motion.a>

            {/* Sustainability Card */}
            <motion.a
              href="/about/sustainability"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594050157186-4d2a5dc0c990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGdyZWVuJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzY4NzQ4ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sustainability"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold leading-tight text-[#4a9fd8] mb-2 flex items-center gap-2">
                  Sustainability
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-600 text-sm">
                  Building systems for long-term impact.
                </p>
              </div>
            </motion.a>

            {/* Business Segments Card */}
            <motion.a
              href="/our-approach"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1758518729593-275baa967f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2ODc0OTY2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business Segments"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold leading-tight text-[#4a9fd8] mb-2 flex items-center gap-2">
                  Business Segments
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-600 text-sm">
                  Improving care in every setting through our services.
                </p>
              </div>
            </motion.a>

            {/* Quality Standards Card */}
            <motion.a
              href="/about/quality-standards"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618506487216-4e8c60a64c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlJTIwbWVldGluZ3xlbnwxfHx8fDE3Njg3NTg4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Quality Standards"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold leading-tight text-[#4a9fd8] mb-2 flex items-center gap-2">
                  Quality Standards
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-600 text-sm">
                  Excellence in every product and service.
                </p>
              </div>
            </motion.a>

            {/* Our Locations Card */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1705628078522-8cbb49acae1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBtYXAlMjBsb2NhdGlvbnN8ZW58MXx8fHwxNzY4NzU4ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Locations"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold leading-tight text-[#4a9fd8] mb-2 flex items-center gap-2">
                  Our Locations
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-600 text-sm">
                  Operating across sub-Saharan Africa.
                </p>
              </div>
            </motion.a>

            {/* Newsroom Card */}
            <motion.a
              href="/stories"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1640572114471-3f01541bce88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcm9vbSUyMGpvdXJuYWxpc20lMjBtZWRpYXxlbnwxfHx8fDE3Njg3NTg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Newsroom"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold leading-tight text-[#4a9fd8] mb-2 flex items-center gap-2">
                  Newsroom
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-600 text-sm">
                  Latest updates and developments.
                </p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0d2d4a] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in building resilient health systems that transform care delivery across Africa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#4a9fd8] text-white hover:bg-[#4a9fd8]/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center gap-2 bg-white text-[#0d2d4a] hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Investor Relations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}