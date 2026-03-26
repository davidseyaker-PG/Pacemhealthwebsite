import { motion } from 'motion/react';
import { ArrowRight, Users, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'wouter';

const ctas = [
  {
    icon: Users,
    label: 'FOR CAREERS',
    title: 'Join Our Team',
    description: 'Build your career at the forefront of Africa\'s healthcare transformation alongside a team committed to lasting impact',
    buttonText: 'View Open Positions',
    buttonLink: '/careers',
  },
  {
    icon: TrendingUp,
    label: 'INVESTORS',
    title: 'Growth & Impact',
    description: 'Discover investment opportunities in a scalable, purpose-built healthcare platform positioned across Africa',
    buttonText: 'Explore Opportunities',
    buttonLink: '/investors',
  },
  {
    icon: Heart,
    label: 'OUR APPROACH',
    title: 'Sustainable Solutions',
    description: 'Learn how we\'re building resilient, locally-led healthcare systems designed for lasting impact across Africa',
    buttonText: 'Discover Our Approach',
    buttonLink: '/our-approach',
  },
];

export function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctas.map((cta, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={cta.buttonLink}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="bg-navy p-8 flex items-center justify-center">
                    <cta.icon className="w-12 h-12 text-green" />
                  </div>
                  <div className="border-t-4 border-green p-6 flex flex-col flex-grow">
                    <p className="text-sm font-heading font-bold tracking-wider text-orange mb-2 uppercase">
                      {cta.label}
                    </p>
                    <h3 className="text-xl font-heading font-bold text-navy mb-3">{cta.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{cta.description}</p>
                    <span className="inline-flex items-center gap-2 text-blue font-heading font-semibold group-hover:gap-3 transition-all duration-300">
                      {cta.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
