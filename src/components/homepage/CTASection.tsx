import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ctas = [
  {
    label: 'FOR CAREERS',
    title: 'Join Our Team',
    description: 'Build your career at the forefront of Africa\'s healthcare transformation alongside a team committed to lasting impact',
    buttonText: 'View Open Positions',
    buttonLink: '/careers',
    background: 'bg-gray-100',
    textColor: 'text-navy',
    buttonStyle: 'border-2 border-blue text-blue hover:bg-blue hover:text-white',
  },
  {
    label: 'INVESTORS',
    title: 'Growth & Impact',
    description: 'Discover investment opportunities in a scalable, purpose-built healthcare platform positioned across Africa',
    buttonText: 'Explore Opportunities',
    buttonLink: '/investors',
    background: 'bg-navy',
    textColor: 'text-white',
    buttonStyle: 'border-2 border-white text-white hover:bg-white hover:text-navy',
  },
  {
    label: 'OUR APPROACH',
    title: 'Sustainable Solutions',
    description: 'Learn how we\'re building resilient, locally-led healthcare systems designed for lasting impact across Africa',
    buttonText: 'Discover Our Approach',
    buttonLink: '/our-approach',
    background: 'bg-blue',
    textColor: 'text-white',
    buttonStyle: 'border-2 border-white text-white hover:bg-white hover:text-blue',
  },
];

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctas.map((cta, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${cta.background} ${cta.textColor} rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="relative mb-6">
                <div className="absolute top-0 left-0 w-12 h-1 bg-green" />
                <p className="text-sm font-heading font-bold tracking-wider pt-4 uppercase opacity-90">
                  {cta.label}
                </p>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">{cta.title}</h3>
              <p className="mb-6 leading-relaxed opacity-90">{cta.description}</p>
              <motion.a
                href={cta.buttonLink}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-md font-heading font-semibold transition-all duration-300 ${cta.buttonStyle}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cta.buttonText}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
