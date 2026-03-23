import { motion } from 'motion/react';
import { Link } from 'wouter';
import { Shield, Microscope, GraduationCap, Award, FlaskConical, Building2, TrendingUp, Users, BookOpen, Beaker, Laptop, Target } from 'lucide-react';
import labTestingImage from 'figma:asset/7c3545a19d6c6c7a205272bf38a5901154a48959.png';
import scholarImage from 'figma:asset/1020a55d339f663981a87b7dc8b1f1ecc48a9fe8.png';
import mobileScienceImage from 'figma:asset/e7f3de164d321b6c548064a6dfaa63483184ea62.png';
import stemTruckImage from 'figma:asset/b27e042133348d421addc21c21f4cb22fa917c25.png';
import heroImage from 'figma:asset/3d7b890980e284e96be9c4a0477e38f0cc035996.png';

export default function PacemExcellence() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const threePillars = [
    {
      icon: Shield,
      title: 'Quality Testing & Surveillance',
      description: 'ISO 17025 accredited university laboratory partnerships, mobile testing units, and WHO collaboration to detect substandard and falsified medicines across Africa.',
      color: 'bg-teal'
    },
    {
      icon: Microscope,
      title: 'Research Partnerships',
      description: 'Academic collaboration on pharmaceutical quality studies, counterfeit detection methodologies, and joint publications advancing scientific knowledge.',
      color: 'bg-blue'
    },
    {
      icon: GraduationCap,
      title: 'STEM Education',
      description: 'Pacem Science Scholars program, annual science fair, mobile laboratory demonstrations, teacher training, and student internships inspiring future scientists.',
      color: 'bg-orange'
    }
  ];

  const partnershipTiers = [
    {
      number: '1',
      title: 'Testing Infrastructure',
      description: 'Partner with universities with ISO 17025 accredited laboratories. Share government pharmaceutical surveillance contracts. Access world-class testing capacity without building expensive infrastructure.',
      icon: FlaskConical
    },
    {
      number: '2',
      title: 'Research Collaboration',
      description: 'Joint research projects on pharmaceutical quality, drug stability studies, and counterfeit detection methods. Co-authored publications advancing scientific knowledge. WHO partnership opportunities.',
      icon: BookOpen
    },
    {
      number: '3',
      title: 'Developing Future Scientists',
      description: 'Student internships in pharmaceutical quality. Graduate research projects. Pacem Science Scholars Program supports the next generation of pharmaceutical scientists across Africa.',
      icon: Users
    }
  ];

  const qualityServices = [
    {
      icon: Building2,
      title: 'Government Quality Surveillance',
      description: 'Testing medicines collected from pharmacies and hospitals to detect substandard and falsified products in the market through contracts with regulatory authorities.'
    },
    {
      icon: TrendingUp,
      title: 'Post-Market Surveillance Studies',
      description: 'Research-based surveillance studies in partnership with universities, generating evidence for policy-making and regulatory decision-making.'
    },
    {
      icon: Beaker,
      title: 'Advanced Laboratory Testing',
      description: 'HPLC, mass spectrometry, dissolution testing, microbial contamination analysis using ISO 17025 accredited university laboratory facilities.'
    },
    {
      icon: Target,
      title: 'Mobile Field Testing',
      description: 'Mobile laboratory units for rapid field testing and market sampling, enabling surveillance in remote areas and border crossings.'
    }
  ];

  const stemPrograms = [
    {
      icon: Award,
      title: 'Pacem Science Scholars',
      description: 'Annual scholarship program for top African science students. Full university tuition plus mentorship. Supporting the next generation of pharmaceutical scientists.',
      image: scholarImage
    },
    {
      icon: FlaskConical,
      title: 'Annual Science Fair',
      description: 'Pan-African competition for high school students. Pharmaceutical and health science projects. Winners receive scholarships and laboratory equipment for their schools.',
      image: mobileScienceImage
    },
    {
      icon: Laptop,
      title: 'Mobile Science Labs',
      description: 'Traveling laboratory demonstrations visiting secondary schools. Hands-on pharmaceutical quality testing experiments. Teacher training workshops.',
      image: stemTruckImage
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:h-[600px] lg:h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pacem Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/70 to-navy/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl lg:text-7xl font-serif text-white mb-6">
              Pacem Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Advancing Pharmaceutical Quality and Scientific Excellence Across Africa
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl leading-relaxed">
              Combating counterfeit medicines through independent pharmaceutical quality testing, 
              university research partnerships, and STEM education programs that inspire Africa's next 
              generation of pharmaceutical scientists.
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

      {/* Africa's Pharmaceutical Quality Crisis */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy text-center mb-8 sm:mb-12 px-4">
              Africa's Pharmaceutical Quality Crisis
            </h2>
            
            <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6 px-4">
              <p>
                The World Health Organization estimates that <strong>1 in 10 medical products in low and 
                middle-income countries is substandard or falsified</strong>. Africa accounts for 42% of 
                reported cases globally, with counterfeit medicines causing an estimated 100,000+ deaths 
                annually and costing African economies over $30 billion.
              </p>
              
              <p>
                The problem extends beyond criminal counterfeiters. Poor storage conditions, inadequate 
                quality control in legitimate supply chains, and limited testing capacity mean even genuine 
                medicines often fail to meet quality standards by the time they reach patients.
              </p>
              
              <p>
                Pharmaceutical testing capacity across Africa remains limited. University 
                facilities exist but are underutilized due to limited funding and government contracts going 
                to international labs. Meanwhile, there's a critical shortage of pharmaceutical scientists—few 
                African students pursue these careers due to limited access to mentorship and role models.
              </p>
              
              <p>
                <strong>Pacem Excellence addresses both challenges simultaneously</strong>: partnering with 
                university laboratories to provide independent quality surveillance while inspiring the next 
                generation of African pharmaceutical scientists through education programs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars of Excellence */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy text-center mb-10 sm:mb-16 px-4"
          >
            Three Pillars of Excellence
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {threePillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all group"
              >
                <h3 className="text-lg sm:text-xl font-serif text-navy font-bold mb-3 sm:mb-4">{pillar.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Quality Surveillance */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
            >
              <img
                src={labTestingImage}
                alt="Laboratory testing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <div className="h-1 w-16 sm:w-20 bg-orange mb-4 sm:mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-4 sm:mb-6">
                Independent Quality Surveillance
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  Pacem Excellence provides <strong>independent pharmaceutical quality surveillance</strong> that 
                  is completely separate from our commercial pharmaceutical products business. This independence is 
                  critical for credibility with regulatory authorities and public health organizations.
                </p>
                <p>
                  We partner with ISO 17025 accredited university laboratories across Africa to test medicines 
                  collected from the market. This protects public health by identifying substandard and falsified 
                  medicines while building local testing capacity.
                </p>
                <p>
                  By channeling government surveillance contracts to university partners, we ensure sustainable 
                  funding for these facilities while delivering cost-effective quality testing that protects patients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* University Partnership Model */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy mb-4 sm:mb-6 px-4">
              University Partnership Model
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Building quality testing capacity through strategic partnerships with Africa's leading research institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Tier Number Badge */}
                <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8">
                  <div className="bg-navy text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">
                    {tier.number}
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <h3 className="text-lg sm:text-xl font-serif text-navy font-bold mb-2 sm:mb-3">{tier.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{tier.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Surveillance Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy text-center mb-4 sm:mb-6 px-4"
          >
            Quality Surveillance Services
          </motion.h2>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 text-center mb-10 sm:mb-16 max-w-4xl mx-auto px-4"
          >
            Independent pharmaceutical quality testing in partnership with accredited university laboratories
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {qualityServices.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all border-2 border-gray-100"
              >
                <h3 className="text-lg sm:text-xl font-serif text-navy font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STEM Education Programs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-navy text-center mb-10 sm:mb-16 px-4"
          >
            STEM Education & Science Fair Programs
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stemPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-serif text-navy font-bold mb-2 sm:mb-3">{program.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6 px-4">
              Strengthening Pharmaceutical Quality Together
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto px-4 leading-relaxed">
              Partner with pharmaceutical quality experts to ensure medicine safety, advance scientific 
              research, and inspire Africa's next generation of scientists. Together, we can build health 
              systems that protect patients and advance pharmaceutical excellence across Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg text-base sm:text-lg font-medium"
                >
                  Schedule Partnership Discussion →
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-all text-base sm:text-lg font-medium"
              >
                Download Program Brief
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}