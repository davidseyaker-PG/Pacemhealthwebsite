import { motion } from 'motion/react';
import { Link } from 'wouter';
import { MapPin, ArrowRight } from 'lucide-react';
import childMedicineImage from 'figma:asset/b1291e7ff7bb428fa3e28708acb64d3e823fa423.png';

export default function PediatricPharmacy() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const pharmacyServices = [
    {
      title: 'Specialized Pharmaceutical Care',
      items: [
        'Pediatric medication formulations and dosing',
        'Prenatal and postnatal vitamins and supplements',
        'Medication therapy management and counseling',
        'Adverse drug reaction monitoring',
        'Drug interaction screening'
      ]
    },
    {
      title: 'Clinical Services',
      items: [
        'Immunization services (EPI schedule)',
        'Growth and development monitoring',
        'Basic health screening and vital signs',
        'Nutritional assessment and counseling',
        'Referral coordination to partner facilities'
      ]
    },
    {
      title: 'Health Education',
      items: [
        'Prenatal and parenting classes',
        'Breastfeeding support groups',
        'Infant and child care education',
        'Disease prevention workshops',
        'Maternal mental health support'
      ]
    },
    {
      title: 'Community Integration',
      items: [
        'Child-friendly environment with play areas',
        'Mother support groups and peer networks',
        'Community health worker coordination',
        'Multi-agency partnership navigation',
        'Cultural and linguistic accessibility'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:h-[600px] lg:h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Pediatric Pharmacy Program"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/75"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white mb-6">
              Pacem Health Pediatric Pharmacy Program
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
              Comprehensive maternal-child health services combining purpose-built pediatric pharmacies, 
              home visitation, economic empowerment, and multi-agency partnerships
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-8 py-4 rounded-lg text-lg hover:bg-blue/90 transition-all shadow-lg"
              >
                Partner With Us →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Africa's Maternal-Child Health Crisis */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue text-center mb-8 sm:mb-12 px-4">
              Africa's Maternal-Child Health Crisis
            </h2>
            
            <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6 px-4">
              <p>
                Sub-Saharan Africa accounts for roughly <strong>two-thirds of global maternal deaths</strong> and 
                nearly <strong>half of all neonatal deaths</strong>, despite representing only 12% of the world's 
                population. Over 200,000 African women die in childbirth each year, and 1 million African babies 
                die in their first month of life.
              </p>
              
              <p>
                These deaths are not inevitable—the vast majority are preventable with proper prenatal care, 
                skilled birth attendance, postnatal monitoring, appropriate medications, and early childhood 
                health services. The crisis stems from systemic failures across multiple dimensions.
              </p>
              
              <p>
                <strong>Access barriers:</strong> Rural women travel hours to reach clinics. Urban poor face 
                unaffordable costs. Medications are unavailable or unaffordable. Specialized pediatric 
                pharmaceutical care doesn't exist in most communities.
              </p>
              
              <p>
                <strong>Knowledge gaps:</strong> Limited prenatal education. Misinformation about infant feeding 
                and care. Limited support systems for new mothers. Limited access to information about childhood development 
                milestones and immunization schedules.
              </p>
              
              <p>
                <strong>Economic constraints:</strong> Poverty forces impossible choices between food and healthcare. 
                Women can't afford prenatal vitamins, delivery services, or pediatric medications. Economic stress 
                compounds health risks.
              </p>
              
              <p>
                <strong>Fragmented services:</strong> Health systems operate in silos. No coordination between 
                prenatal care, delivery services, postnatal follow-up, immunization programs, and economic support. 
                Mothers navigate complex bureaucracies alone.
              </p>
              
              <p>
                <strong>The Pacem Health Pediatric Pharmacy Program addresses these interconnected challenges with 
                an integrated ecosystem approach</strong>: purpose-built pediatric pharmacies providing specialized 
                pharmaceutical care, nurse home visitation ensuring continuity, economic empowerment breaking poverty 
                cycles, and multi-agency partnerships creating seamless support systems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pediatric Pharmacies */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={childMedicineImage}
                alt="Pediatric Pharmacy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="h-1 w-16 sm:w-20 bg-blue mb-4 sm:mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4 sm:mb-6">
                Pediatric Pharmacies
              </h2>
              <p className="text-xl md:text-2xl text-blue mb-4 sm:mb-6 font-medium">
                Comprehensive pharmaceutical care for mothers and children
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Purpose-built pediatric pharmacy centers providing specialized formulations, 
                immunization services, growth monitoring, medication therapy management, and 
                prenatal/parenting education classes. Child-friendly environments with play areas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pediatric Pharmacy Center Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue text-center mb-10 sm:mb-16 px-4"
          >
            Pediatric Pharmacy Center Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pharmacyServices.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all border-2 border-gray-100"
              >
                <h3 className="text-xl font-serif text-blue font-semibold leading-tight mb-4">{service.title}</h3>
                <ul className="space-y-3 list-disc list-inside">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm sm:text-base text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Pharmacy Locations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-navy via-[#0d2d4a] to-navy/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue/20 p-4 rounded-full">
                <MapPin className="w-12 h-12 text-blue" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white mb-6">
              Find a Pediatric Pharmacy Near You
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our pediatric pharmacy centers are strategically located to serve mothers and children across the region. 
              Discover convenient, child-friendly care in your community.
            </p>
            
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              See Our Pharmacy Locations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}