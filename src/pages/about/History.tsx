import { motion } from 'motion/react';
import { Link } from 'wouter';
import heroStudentsImage from 'figma:asset/09b8771a02d610843b420a905cf063c2d9690401.png';
import discoveryImage from 'figma:asset/09b8771a02d610843b420a905cf063c2d9690401.png';
import universityImage from 'figma:asset/01e48fa181569f4541cceb857bc9d96e8ffe9261.png';
import logisticsImage from 'figma:asset/f917350bc6ad08cfca83edb79e254064d71be334.png';
import mckessonImage from 'figma:asset/1233bf0f9954d79a83ab3bc0d1efd3219cc54d97.png';
import founderImage from 'figma:asset/91a0b3257aa726f3586683a13f3edec5be0ad068.png';
import pacemHealthImage from 'figma:asset/0c7e331563a053d79be1240babeaf48885c1d154.png';

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 w-full">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/about/company" className="hover:text-navy transition-colors">
              Our Story
            </Link>
            <span>/</span>
            <span className="text-navy">Our History</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue via-blue/95 to-navy/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight">
                Our History
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              In 2013, a team of five Chemistry students at Cuttington University in Liberia discovered that 79% of the most consumed aspirin brand had the lowest quality and highest impurities. This revelation sparked a mission that would transform African healthcare logistics.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Today, Pacem Health looks very different, but in realizing our founder's vision, we remain committed to ensuring quality medicines, reliable equipment, and sustainable health systems reach every corner of Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section 1: The Discovery (2013) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">
              The Discovery: 2013
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-8">
              <img
                src={discoveryImage}
                alt="Laboratory research"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-xl text-gray-700 leading-relaxed">
                Our team of five Chemistry students at Cuttington University discovered that 79% of Liberia's most consumed aspirin had substandard quality and dangerous impurities. This first-place winning research in June 2013 sparked a mission to ensure reliable access to quality medicines across Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section 2: Building Knowledge (2019-2022) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">
              Building Knowledge: 2019 - 2022
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl w-full md:w-96">
                <img
                  src={universityImage}
                  alt="University graduation"
                  className="w-full h-56 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h3 className="text-5xl font-heading font-extrabold text-navy mb-6">2019-2022</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Continued education in Biochemistry with a focus on Pharmaceuticals at The University of Texas at Tyler. Immersed in pharmaceutical science, quality assurance, drug stability, and regulatory standards—studying WHO guidelines, good manufacturing practices, and the chemistry behind safe and effective medicines. Graduated in 2022 with the scientific knowledge and conviction that Africa deserved better healthcare logistics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section 3: Learning From the Best (2023) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">
              Learning From the Best: 2023
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row-reverse gap-8 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl w-full md:w-96">
                <img
                  src={logisticsImage}
                  alt="Pharmaceutical distribution center"
                  className="w-full h-56 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h3 className="text-5xl font-heading font-extrabold text-navy mb-6">2023</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Studied healthcare logistics giants Medline, Cencora, and McKesson—analyzing their procurement strategies, distribution networks, inventory management systems, and customer relationships. Learned how these companies achieved 98%+ on-time delivery rates, maintained cold chains for temperature-sensitive products, and became strategic partners in healthcare delivery. Recognized the gap: these best practices and operational excellence weren't reaching Africa at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section 4: Inside the Machine (2024) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">
              Inside the Machine: 2024
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl w-full md:w-96">
                <img
                  src={mckessonImage}
                  alt="Healthcare logistics warehouse"
                  className="w-full h-56 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h3 className="text-5xl font-heading font-extrabold text-navy mb-6">2024</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Joined McKesson, one of the world's largest healthcare companies, gaining firsthand experience with world-class pharmaceutical distribution. Witnessed how systematic processes, technology integration, quality controls, and customer-centric service created seamless supply chains with 24-hour delivery and full quality assurance. The stark contrast with Africa—where hospitals might wait months for supplies—reinforced the mission to bring this operational excellence to African healthcare facilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section 5: The Beginning (2024 - Present) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy">
              The Beginning: 2025 - Present
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row-reverse gap-8 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl w-full md:w-96">
                <img
                  src={pacemHealthImage}
                  alt="African healthcare future"
                  className="w-full h-56 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h3 className="text-5xl font-heading font-extrabold text-navy mb-6">2025-Present</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a decade of experience—from discovering the problem in 2013 to understanding the science, studying industry leaders, and working inside the best system—founded Pacem Health in 2025. Our mission: bring world-class pharmaceutical supply chains, medical equipment distribution, and healthcare infrastructure to every country in Africa—as a sustainable business built on partnership, accountability, excellence, equity, and mutual respect. With an active pipeline spanning 15+ African countries, we are bringing the same reliability and quality standards witnessed at McKesson to the continent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Leadership and Vision: 2025 - Present
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovering the problem to building the solution
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border-t-4 border-blue shadow-xl overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={founderImage}
                alt="Founder and CEO"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-navy">David Seyaker</span>, Pacem Health's founder, serves as President and Chief Executive Officer—bringing over a decade of dedication to accelerating Africa's healthcare transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              A Decade of Preparation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to action, every step prepared us to transform African healthcare logistics
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: '2013',
                title: 'The Discovery',
                description: 'First-place winner at national science fair with research revealing 79% of widely-consumed aspirin had substandard quality in Liberia'
              },
              {
                year: '2019-2022',
                title: 'Building Expertise',
                description: 'Pursued Biochemistry degree with focus on Pharmaceuticals, graduating from The University of Texas at Tyler'
              },
              {
                year: '2023',
                title: 'Studying Excellence',
                description: 'Analyzed industry leaders Medline, Cencora, and McKesson to understand best practices in healthcare logistics'
              },
              {
                year: '2024',
                title: 'Learning the System',
                description: 'Gained firsthand experience at McKesson, witnessing world-class pharmaceutical distribution'
              },
              {
                year: '2024-Present',
                title: 'Founding Pacem Health',
                description: 'Launched mission to bring reliable pharmaceutical supply chains and healthcare infrastructure to 54 African countries'
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-40 text-right">
                  <span className="text-3xl font-heading font-bold text-orange whitespace-nowrap inline-block">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-orange rounded-full mt-2"></div>
                  {index < 4 && (
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-orange/30"></div>
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-blue/90 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Join Our Story
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We're just getting started. Partner with us to write the next chapter in African healthcare transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-lg font-heading font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </Link>
              <Link href="/about/company" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-heading font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}