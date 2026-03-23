import { motion } from 'motion/react';
import { Link } from 'wouter';
import { Activity, GraduationCap, Megaphone, Stethoscope, Wind, Droplet, BarChart3, Building2, Pill, Hand, School, Wrench, Heart, Globe2 } from 'lucide-react';
import chwTrainingImage from 'figma:asset/ddc68d34f166395ba96ffc496278206e171a59fc.png';
import communityEducationImage from 'figma:asset/e8a2df3e96bb868687359e490b635a591c186c20.png';
import providerEducationImage from 'figma:asset/df610e8fe12c597f9918e82a68170dc2369070f9.png';
import heroImage from 'figma:asset/3b0f4aac6c5d570a4568e7b16a39572ffc1e6b2e.png';

export default function HealthcareDevelopment() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const programComponents = [
    {
      icon: GraduationCap,
      title: 'CHW Training Academy',
      description: 'Comprehensive training programs for community health workers covering essential health topics, diagnostic skills, and community engagement techniques.',
      image: chwTrainingImage
    },
    {
      icon: Megaphone,
      title: 'Community Education',
      description: 'Public health campaigns using radio, community events, and door-to-door outreach to build health literacy and promote preventive care practices.',
      image: communityEducationImage
    },
    {
      icon: Stethoscope,
      title: 'Provider Education',
      description: 'Continuing medical education for healthcare providers, including workshops, online courses, and clinical guideline updates to enhance care quality.',
      image: providerEducationImage
    }
  ];

  const diseaseFocus = [
    {
      icon: Wind,
      title: 'Pneumonia',
      description: 'Early recognition of respiratory distress, appropriate antibiotic use, prevention through vaccination and nutrition education.',
      color: 'bg-blue'
    },
    {
      icon: Droplet,
      title: 'Diabetes',
      description: 'Lifestyle modification counseling, blood sugar monitoring techniques, medication adherence support, and complication prevention.',
      color: 'bg-teal'
    },
    {
      icon: Activity,
      title: 'Cardiovascular Disease',
      description: 'Risk factor identification, blood pressure monitoring, emergency symptom recognition, and lifestyle intervention strategies.',
      color: 'bg-orange'
    }
  ];

  const programSteps = [
    {
      icon: GraduationCap,
      title: 'CHW Selection & Training',
      description: '2-week intensive training covering disease recognition, treatment protocols, and community engagement. Graduates receive certification and equipment kits including basic diagnostics, educational materials, and mobile devices.'
    },
    {
      icon: Megaphone,
      title: 'Public Health Campaigns',
      description: 'Multi-channel approach using radio spots, community health fairs, and door-to-door education. Focus on disease prevention, early treatment seeking, and addressing health misinformation in local languages.'
    },
    {
      icon: BarChart3,
      title: 'Digital Support Systems',
      description: 'Mobile apps for patient tracking and clinical decision support, online continuing education courses, and SMS reminders for medication adherence and follow-up appointments.'
    },
    {
      icon: Hand,
      title: 'Continuous Improvement',
      description: 'Partnership with African universities for curriculum evaluation, data collection on health outcomes, annual conferences for knowledge sharing, and regular program refinement based on results.'
    }
  ];

  const partnerships = [
    {
      icon: Building2,
      title: 'Governments',
      description: 'Contract to train CHWs for national health programs',
      detail: '$500/CHW trained - typical contracts',
      color: 'bg-navy'
    },
    {
      icon: Pill,
      title: 'Pharmaceutical Companies',
      description: 'Sponsor disease-specific education campaigns',
      detail: 'Focus on ROI through improved medication adherence',
      color: 'bg-orange'
    },
    {
      icon: Heart,
      title: 'NGOs',
      description: 'Training services for their community health workers',
      detail: 'Partners include BRAC, Living Goods, Partners in Health',
      color: 'bg-blue'
    },
    {
      icon: Globe2,
      title: 'Development Partners',
      description: 'Fund pilot programs and capacity building initiatives',
      detail: 'World Bank, USAID, Gates Foundation partnerships',
      color: 'bg-teal'
    },
    {
      icon: School,
      title: 'Universities',
      description: 'Curriculum development and research partnerships',
      detail: 'Joint publications and academic collaboration',
      color: 'bg-navy'
    },
    {
      icon: Wrench,
      title: 'Equipment Manufacturers',
      description: 'Sponsor training in exchange for product demonstrations',
      detail: 'Creates demand for quality medical equipment',
      color: 'bg-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Healthcare Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/75"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white mb-6">
              Healthcare Development Program
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Building health literacy and clinical capacity through community health worker training, 
              public health campaigns, and provider continuing education across Africa.
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

      {/* Africa's Dual Disease Burden */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue text-center mb-12">
              Africa's Dual Disease Burden and Workforce Crisis
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Africa faces a unique healthcare challenge: managing both infectious diseases that have affected 
                communities for generations and a rising tide of non-communicable diseases driven by urbanization 
                and lifestyle changes. This dual disease burden strains already limited healthcare resources.
              </p>
              
              <p>
                The WHO estimates Africa needs an additional 1.8 million healthcare workers to meet basic health 
                needs. Rural areas are particularly under-resourced, with many communities having no access to trained 
                medical professionals. Community health workers can bridge this gap, bringing essential health 
                knowledge and basic services directly to communities.
              </p>
              
              <p>
                However, CHW programs often fail due to inadequate training, limited ongoing support, and absence 
                of integration with formal health systems. Our program addresses these challenges through comprehensive 
                training, digital support systems, and partnership with governments and NGOs to ensure sustainability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue text-center mb-16"
          >
            Program Components
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programComponents.map((component, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={component.image}
                    alt={component.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">{component.title}</h3>
                  <p className="text-gray-600">{component.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Disease Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue text-center mb-16"
          >
            Priority Disease Focus Areas
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diseaseFocus.map((disease, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">{disease.title}</h3>
                <p className="text-gray-600">{disease.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Program Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue text-center mb-16"
          >
            How the Program Works
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programSteps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white mb-6">
              Build Healthcare Capacity With Us
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Partner with us to train community health workers, support community health education, and strengthen clinical capacity across 
            the continent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue text-white px-8 py-4 rounded-lg hover:bg-blue/90 transition-all shadow-lg"
                >
                  Schedule Partnership Discussion →
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all"
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