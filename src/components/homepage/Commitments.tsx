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
            <h2 className="text-4xl md:text-5xl font-serif text-navy mt-6 mb-6">
              Hope for Communities
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Pacem Health, we believe that access to quality healthcare is a fundamental right. Our commitment extends beyond business to making a lasting impact on communities across Africa.
              </p>
              <p>
                Through sustainable partnerships, innovative solutions, and community-focused initiatives, we're working to build healthier futures for millions of people. From rural clinics to urban hospitals, our presence ensures that essential medicines and equipment reach those who need them most.
              </p>
              <p>
                We invest in local healthcare infrastructure, train healthcare workers, and support community health programs that address the unique challenges facing African healthcare systems.
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