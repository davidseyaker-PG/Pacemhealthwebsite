import { motion } from 'motion/react';

const stats = [
  {
    value: 'WHO-approved',
    description: 'Quality-assured certification meeting international healthcare standards',
    background: 'bg-blue',
    textColor: 'text-white',
  },
  {
    value: '15+',
    description: 'Countries served across Africa with reliable infrastructure and distribution networks',
    background: 'bg-navy',
    textColor: 'text-white',
  },
  {
    value: '3M+',
    description: 'Patients and communities reached through our distribution and service networks',
    background: 'bg-navy',
    textColor: 'text-white',
  },
  {
    value: '50+',
    description: 'Healthcare partners collaborating to expand equitable access and outcomes',
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
            Pacem Health: Company at a Glance
          </h2>
          <p className="text-xl text-gray-300">
            Built to scale. Ready to deliver. Positioned for impact across Africa.
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
              <div className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-green">{stat.value}</div>
              <p className="leading-relaxed opacity-90">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
