import { motion } from 'motion/react';
import { SectionLabel } from '../SectionLabel';
import communityImage from 'figma:asset/3a80344ce29f147be7556f3f35a6d616d58fa6e9.png';

export function Commitments() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>COMMITMENTS</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mt-6 mb-6">
              Building Resilient Health Systems Together
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Pacem Health, we believe that access to quality healthcare is a fundamental right. Our commitment goes beyond delivering products—we invest in the infrastructure, partnerships, and locally-led programs that make lasting change possible.
              </p>
              <p>
                Through sustainable partnerships and community-focused initiatives, we work alongside governments and health providers to build stronger, more equitable health systems. From rural clinics to urban hospitals, our presence ensures that quality-assured medicines and reliable equipment reach the communities that need them most.
              </p>
              <p>
                We strengthen local healthcare infrastructure, support the training of healthcare workers, and champion scalable programs designed to address the real challenges facing health systems across Africa.
              </p>
            </div>
            <motion.a
              href="/programs"
              className="inline-block mt-8 px-8 py-4 bg-blue text-white rounded-md hover:bg-navy transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Programs
            </motion.a>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-lg shadow-xl"
          >
            <motion.img
              src={communityImage}
              alt="Young girl smiling in wheelchair, representing accessible healthcare"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
