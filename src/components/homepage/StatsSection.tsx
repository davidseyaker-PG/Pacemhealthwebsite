import { motion } from 'motion/react';

const stats = [
  {
    value: '25+',
    label: 'TARGET COUNTRIES',
    description: 'Planned market presence across African nations by 2027',
    background: 'bg-blue',
    textColor: 'text-white',
  },
  {
    value: '1,500+',
    label: 'PARTNER FACILITIES',
    description: 'Target healthcare facilities in our distribution and service network',
    background: 'bg-navy',
    textColor: 'text-white',
  },
  {
    value: '15M+',
    label: 'LIVES IMPACTED',
    description: 'Projected reach through our healthcare solutions and partnerships',
    background: 'bg-navy',
    textColor: 'text-white',
  },
  {
    value: '200%',
    label: 'GROWTH TARGET',
    description: 'Projected year-over-year revenue growth as we scale operations',
    background: 'bg-navy',
    textColor: 'text-white',
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-dark to-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-1 bg-green mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Our Strategic Growth Targets
          </h2>
          <p className="text-xl text-gray-300">
            Building the infrastructure to transform healthcare across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${stat.background} ${stat.textColor} rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="text-4xl md:text-5xl font-heading font-extrabold mb-2 text-green">{stat.value}</div>
              <div className="text-sm font-heading font-bold tracking-wider text-orange mb-3">{stat.label}</div>
              <p className="leading-relaxed opacity-90">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-400 max-w-3xl mx-auto">
            Pacem Health is an early-stage company. These figures represent strategic growth targets and are subject to market conditions, successful capital raises, and execution of our business plan. They are not guarantees of future performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
