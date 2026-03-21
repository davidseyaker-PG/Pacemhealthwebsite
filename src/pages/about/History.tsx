import { motion } from 'motion/react';
import { Link } from 'wouter';
import heroStudentsImage from 'figma:asset/09b8771a02d610843b420a905cf063c2d9690401.png';
import discoveryImage from 'figma:asset/09b8771a02d610843b420a905cf063c2d9690401.png';
import universityImage from 'figma:asset/01e48fa181569f4541cceb857bc9d96e8ffe9261.png';
import logisticsImage from 'figma:asset/f917350bc6ad08cfca83edb79e254064d71be334.png';
import mckessonImage from 'figma:asset/1233bf0f9954d79a83ab3bc0d1efd3219cc54d97.png';
import founderImage from 'figma:asset/91a0b3257aa726f3586683a13f3edec5be0ad068.png';
import pacemHealthImage from 'figma:asset/0c7e331563a053d79be1240babeaf48885c1d154.png';

const milestones = [
  {
    year: '2013',
    title: 'The Discovery',
    image: discoveryImage,
    imageAlt: 'Laboratory research',
    description: 'Our team of five Chemistry students at Cuttington University discovered that 79% of Liberia\u2019s most consumed aspirin had substandard quality and dangerous impurities. This first-place winning research in June 2013 sparked a mission to ensure reliable access to quality medicines across Africa.'
  },
  {
    year: '2019\u20132022',
    title: 'Building Knowledge',
    image: universityImage,
    imageAlt: 'University graduation',
    description: 'Continued education in Biochemistry with a focus on Pharmaceuticals at The University of Texas at Tyler. Immersed in pharmaceutical science, quality assurance, drug stability, and regulatory standards\u2014studying international health guidelines, good manufacturing practices, and the chemistry behind safe and effective medicines. Graduated in 2022 with the scientific knowledge and conviction that Africa deserved better healthcare logistics.'
  },
  {
    year: '2023',
    title: 'Learning From the Best',
    image: logisticsImage,
    imageAlt: 'Pharmaceutical distribution center',
    description: 'Studied healthcare logistics giants Medline, Cencora, and McKesson\u2014analyzing their procurement strategies, distribution networks, inventory management systems, and customer relationships. Learned how these companies achieved 98%+ on-time delivery rates, maintained cold chains for temperature-sensitive products, and became strategic partners in healthcare delivery. Recognized the gap: these best practices and operational excellence weren\u2019t reaching Africa at scale.'
  },
  {
    year: '2024',
    title: 'Inside the Machine',
    image: mckessonImage,
    imageAlt: 'Healthcare logistics warehouse',
    description: 'Joined McKesson, one of the world\u2019s largest healthcare companies, gaining firsthand experience with world-class pharmaceutical distribution. Witnessed how systematic processes, technology integration, quality controls, and customer-centric service created seamless supply chains with 24-hour delivery and full quality assurance. The stark contrast with Africa\u2014where hospitals might wait months for supplies\u2014reinforced the mission to bring this operational excellence to African healthcare facilities.'
  },
  {
    year: '2025',
    title: 'The Beginning',
    image: pacemHealthImage,
    imageAlt: 'African healthcare future',
    description: 'With a decade of experience\u2014from discovering the problem in 2013 to understanding the science, studying industry leaders, and working inside the best system\u2014founded Pacem Health in 2025. Our mission: bring world-class pharmaceutical supply chains, medical equipment distribution, and healthcare infrastructure to every country in Africa\u2014as a sustainable business built on partnership, accountability, excellence, equity, and mutual respect. With an active pipeline spanning 15+ African countries, we are bringing the same reliability and quality standards witnessed at McKesson to the continent.'
  }
];

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue transition-colors">Home</Link>
          <span>/</span>
          <Link href="/about/company" className="hover:text-blue transition-colors">Our Story</Link>
          <span>/</span>
          <span className="text-navy font-medium">Our History</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#1E3A6E]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight">Our History</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              In 2013, a team of five Chemistry students at Cuttington University in Liberia discovered that 79% of the most consumed aspirin brand had the lowest quality and highest impurities. This revelation sparked a mission that would strengthen African healthcare logistics.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Today, Pacem Health looks very different, but in realizing our founder's vision, we remain committed to ensuring quality medicines, reliable equipment, and sustainable health systems reach every corner of Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unified Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">A Decade of Purpose</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From discovery to action, every step prepared us to strengthen African healthcare logistics</p>
          </motion.div>

          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue/20 -translate-x-1/2" />

            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative mb-20 last:mb-0">
                  {/* Year badge on line */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="bg-orange text-white font-heading font-bold text-sm px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                      {milestone.year}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className={`flex flex-col md:flex-row items-start ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={milestone.image}
                            alt={milestone.imageAlt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                          <div className="md:hidden absolute bottom-4 left-4">
                            <span className="bg-orange text-white font-heading font-bold text-sm px-3 py-1.5 rounded-full shadow-lg">{milestone.year}</span>
                          </div>
                        </div>
                        <div className="p-6 md:p-8">
                          <h3 className="text-2xl font-heading font-bold text-navy mb-3">{milestone.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </motion.div>
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                </div>
              );
            })}
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
              Leadership and Vision
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
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src={founderImage}
                  alt="Founder and CEO"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-bold text-navy mb-2">David Seyaker</h3>
                <p className="text-blue font-heading font-semibold mb-4">Founder, President & CEO</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Pacem Health's founder serves as President and Chief Executive Officer—bringing over a decade of dedication to strengthening healthcare across Africa.
                </p>
                <div className="mt-6">
                  <Link href="/about/leadership/david-seyaker" className="inline-flex items-center gap-2 text-blue hover:text-orange font-heading font-semibold transition-colors">
                    Read Full Bio →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
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
              We're just getting started. Partner with us to write the next chapter in strengthening African healthcare.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-full font-heading font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </Link>
              <Link href="/about/company" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
