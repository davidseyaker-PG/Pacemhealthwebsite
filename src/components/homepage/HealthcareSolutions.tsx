import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '../SectionLabel';
import labScientistImage from 'figma:asset/47f3e42a0e8789a57177122815bba7dc752ee55c.png';

export function HealthcareSolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-lg"
          >
            <motion.img
              src={labScientistImage}
              alt="Lab scientist working with medical samples"
              className="w-full h-[420px] object-cover rounded-lg transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl font-heading font-extrabold text-navy mb-4">
              Advancing Healthcare Access Across Africa
            </h2>
            <p className="text-gray-600 mb-3 leading-relaxed">
              Pacem Health is committed to transforming healthcare delivery across the African continent through purpose-built solutions and sustainable partnerships.
            </p>
            <p className="text-gray-600 mb-5 leading-relaxed">
              We work with governments, healthcare providers, and communities to ensure access to quality-assured medicines, reliable equipment, and essential health services. Our evidence-based approach addresses the unique challenges facing healthcare systems across the region.
            </p>
            <motion.a
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue text-blue rounded-md hover:bg-blue hover:text-white transition-all duration-300 font-heading font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Solutions
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
