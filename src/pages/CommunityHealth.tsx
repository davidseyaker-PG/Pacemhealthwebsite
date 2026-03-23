import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { ServiceBreadcrumb } from "../components/ServiceBreadcrumb";
import mobileClinicImage from "figma:asset/e125aa6190dc223e12e3da98fe623be7164f6436.png";
import chwProgramImage from "figma:asset/ddc68d34f166395ba96ffc496278206e171a59fc.png";
import publicHealthCampaignImage from "figma:asset/99400051ee05873bdc7871470932ce9bf6fd6b34.png";
import ruralInfrastructureImage from "figma:asset/7dd4ba68b000ed51c3234cb4b3defa9950498ca8.png";

export default function CommunityHealth() {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const heroStats = [
    { 
      value: "Growing", 
      label: "Community Reach",
      description: "Reaching rural villages and urban informal settlements across our service areas with mobile clinics, trained community health workers, and culturally-sensitive health programs."
    },
    { 
      value: "Expanding", 
      label: "People Served",
      description: "Delivering essential primary care, preventive services, maternal health, immunizations, and chronic disease management through community-based approaches."
    },
    { 
      value: "Building", 
      label: "Health Worker Network",
      description: "Building local capacity through comprehensive training, supervision, and ongoing support for frontline community health workers delivering quality healthcare in their communities."
    }
  ];

  const pillars = [
    {
      number: "01",
      title: "Mobile Health Clinics",
      description: "Fully-equipped mobile units bringing primary care, preventive services, maternal health, immunizations, and chronic disease management to rural and peri-urban communities.",
      image: mobileClinicImage
    },
    {
      number: "02",
      title: "Community Health Worker Programs",
      description: "Training, equipping, and supporting frontline health workers to deliver essential health services, health education, disease surveillance, and patient navigation at the community level.",
      image: chwProgramImage
    },
    {
      number: "03",
      title: "Public Health Campaigns",
      description: "Mass vaccination drives, disease prevention programs, maternal and child health initiatives, nutrition education, and health awareness campaigns tailored to community needs and cultural contexts.",
      image: publicHealthCampaignImage
    },
    {
      number: "04",
      title: "Rural Healthcare Infrastructure",
      description: "Establishing and supporting community health posts, rural clinics, telemedicine capabilities, medicine supply chains, and referral systems to strengthen last-mile healthcare delivery.",
      image: ruralInfrastructureImage
    }
  ];

  const programAreas = [
    {
      category: "Primary Care & Prevention",
      items: ["Basic health screenings", "Preventive care services", "First aid & emergency care", "Health education & counseling", "Nutrition & wellness programs", "Non-communicable disease screening"]
    },
    {
      category: "Maternal & Child Health",
      items: ["Antenatal care", "Safe delivery services", "Postnatal follow-up", "Childhood immunizations", "Growth monitoring", "Family planning services"]
    },
    {
      category: "Infectious Disease Control",
      items: ["Malaria prevention & treatment", "HIV testing & linkage to care", "TB screening & treatment support", "Vaccination campaigns", "Disease surveillance", "Outbreak response"]
    },
    {
      category: "Chronic Disease Management",
      items: ["Hypertension monitoring", "Diabetes screening & management", "Medication adherence support", "Lifestyle counseling", "Follow-up care coordination", "Specialist referral linkage"]
    }
  ];

  const whoWeServe = [
    {
      title: "Rural Communities",
      description: "Mobile clinics and community health workers bringing essential healthcare to remote villages with limited facility access."
    },
    {
      title: "Urban Informal Settlements",
      description: "Community-based health services, health education, and disease prevention programs in peri-urban areas with limited access."
    },
    {
      title: "Government Health Programs",
      description: "Partnership support for national health initiatives, immunization campaigns, and public health interventions."
    },
    {
      title: "NGOs & Development Partners",
      description: "Implementation support for community health projects, capacity building, and impact measurement for donor-funded programs."
    }
  ];

  const benefits = [
    { title: "Growing Reach", description: "Expanding rural & urban presence" },
    { title: "Mobile Clinics", description: "Healthcare where you are" },
    { title: "Trained CHWs", description: "Growing health worker network" },
    { title: "Culturally Sensitive", description: "Community-tailored approaches" },
    { title: "Integrated Care", description: "Primary care to specialist referral" },
    { title: "Data-Driven", description: "Health outcomes tracking" }
  ];

  const faqs = [
    {
      question: "What services do mobile health clinics provide?",
      answer: "Our mobile health clinics offer comprehensive primary care including health screenings, basic diagnostics, immunizations, maternal and child health services, chronic disease management, medication dispensing, health education, and referral to specialists when needed. Each clinic is staffed by licensed nurses, clinical officers, and supported by physicians through telemedicine."
    },
    {
      question: "How do Community Health Workers (CHWs) support healthcare delivery?",
      answer: "CHWs are trained frontline health workers who live in the communities they serve. They provide health education, basic first aid, medication adherence support, disease screening, health data collection, and linkage to formal healthcare facilities. Our CHWs receive ongoing training, supervision, and technology tools to deliver quality community-based care."
    },
    {
      question: "Can organizations partner with you for public health campaigns?",
      answer: "Yes. We partner with governments, NGOs, and development organizations to implement targeted public health campaigns including mass immunization drives, disease awareness programs, maternal health initiatives, and chronic disease screening. We provide campaign design, community mobilization, field implementation, and impact reporting."
    },
    {
      question: "How do you ensure quality in remote and rural settings?",
      answer: "Quality is maintained through: standardized clinical protocols, regular staff training and supervision, telemedicine support from specialist physicians, quality assurance audits, electronic health records with built-in clinical decision support, regular supply chain monitoring, and patient feedback mechanisms. All community health workers operate under clinical oversight."
    },
    {
      question: "Do you collect health data and measure program impact?",
      answer: "Yes. We use digital health platforms to track service delivery, patient outcomes, disease trends, and program impact in real-time. All data is aggregated, analyzed, and reported to stakeholders including government health authorities, partner organizations, and donors. We provide regular reports on key health indicators, service utilization, and community health outcomes."
    }
  ];

  const pillarDetails = [
    {
      title: "Mobile Health Clinics",
      subtitle: "Bringing Healthcare Directly to Communities in Need",
      image: mobileClinicImage,
      content: {
        intro: "Our fleet of mobile health clinics delivers comprehensive primary care directly to rural villages, informal settlements, and communities with limited access across Africa. Each fully-equipped unit serves as a traveling health facility, bringing licensed healthcare professionals, diagnostic equipment, essential medications, and preventive services to populations with limited access to formal healthcare infrastructure.",
        sections: [
          {
            heading: "Primary Care & Health Screenings",
            description: "Comprehensive health assessments, vital signs monitoring, basic physical examinations, and screening for common health conditions including hypertension, diabetes, malaria, and infectious diseases. Mobile clinics provide first-line diagnosis, treatment initiation, and referral to specialist care when needed for complex medical conditions."
          },
          {
            heading: "Maternal & Child Health Services",
            description: "Antenatal care for pregnant women including prenatal check-ups, nutritional counseling, tetanus immunizations, and risk assessment. Postnatal follow-up, newborn examinations, childhood immunizations following national schedules, growth monitoring, and family planning services ensure mothers and children receive essential care throughout pregnancy and early childhood."
          },
          {
            heading: "Chronic Disease Management",
            description: "Screening, diagnosis, and ongoing management of non-communicable diseases including hypertension, diabetes, asthma, and cardiovascular conditions. Medication dispensing, adherence counseling, lifestyle modification support, and regular monitoring help patients manage chronic conditions and prevent complications in remote settings."
          },
          {
            heading: "Medication Dispensing & Pharmaceutical Care",
            description: "Essential medicines stocked on mobile units include antibiotics, antimalarials, antihypertensives, diabetes medications, and OTC drugs. Licensed pharmacists or pharmacy technicians provide medication counseling, dosage instructions, and adherence support. Cold chain maintained for vaccines and temperature-sensitive medications."
          },
          {
            heading: "Telemedicine & Specialist Consultation",
            description: "Mobile clinics equipped with telemedicine capabilities enable real-time consultation with specialist physicians for complex cases. Video conferencing, remote diagnostic support, and electronic medical record access ensure patients in remote areas receive expert medical guidance and appropriate treatment recommendations."
          }
        ],
        highlights: [
          "Fully-equipped mobile health units",
          "Licensed nurses & clinical officers on staff",
          "Essential medications & diagnostics on-board",
          "Telemedicine for specialist consultation",
          "Reaching rural communities across our service areas",
          "Preventive care & chronic disease management"
        ]
      }
    },
    {
      title: "Community Health Worker Programs",
      subtitle: "Training & Supporting Frontline Healthcare Providers",
      image: chwProgramImage,
      content: {
        intro: "Community Health Workers (CHWs) are the backbone of last-mile healthcare delivery. Our comprehensive CHW program recruits, trains, equips, supervises, and supports frontline health workers who live and work in the communities they serve. These trusted local health ambassadors bridge the gap between formal healthcare systems and community members, delivering essential services and health education directly to households.",
        sections: [
          {
            heading: "Recruitment & Training Programs",
            description: "CHW candidates selected from local communities based on literacy, community respect, commitment to service, and cultural competence. Comprehensive training covers basic health assessment, common illnesses, preventive care, maternal and child health, medication adherence support, health education, and patient navigation. Ongoing continuing education ensures CHWs maintain current knowledge and skills."
          },
          {
            heading: "Essential Health Service Delivery",
            description: "CHWs conduct home visits for health assessments, monitor vital signs, screen for diseases, provide basic first aid, distribute medications under supervision, administer vaccinations, conduct health education, and identify patients requiring facility-based care. Door-to-door outreach ensures vulnerable populations including elderly, disabled, and chronically ill receive regular care."
          },
          {
            heading: "Digital Health Tools & Data Collection",
            description: "CHWs equipped with smartphones or tablets running digital health platforms for patient registration, clinical decision support, medication tracking, and health data collection. Electronic health records enable continuity of care, track patient outcomes, monitor disease trends, and generate real-time reports for health authorities and program managers."
          },
          {
            heading: "Supervision & Quality Assurance",
            description: "Regular supervision by nurses and clinical officers ensures CHWs follow standardized protocols, deliver quality care, and receive ongoing mentorship. Monthly meetings, case discussions, competency assessments, and performance feedback maintain clinical standards. Quality audits verify accuracy of diagnoses, appropriateness of referrals, and patient satisfaction."
          },
          {
            heading: "Compensation & Career Development",
            description: "CHWs receive monthly stipends, performance incentives, mobile data allowances, and medical supplies. Clear career pathways enable high-performing CHWs to advance to supervisory roles or pursue formal healthcare training. Recognition programs celebrate excellence and retain motivated health workers serving their communities."
          }
        ],
        highlights: [
          "Growing team of trained community health workers",
          "Comprehensive initial & ongoing training",
          "Digital health tools for patient tracking",
          "Regular clinical supervision & mentorship",
          "Door-to-door household health visits",
          "Local community members serving neighbors"
        ]
      }
    },
    {
      title: "Public Health Campaigns",
      subtitle: "Mass Health Interventions Tailored to Community Needs",
      image: publicHealthCampaignImage,
      content: {
        intro: "Targeted public health campaigns address priority health challenges through mass interventions, community mobilization, health education, and preventive services. Working in partnership with governments, NGOs, and international organizations, we design and implement culturally-appropriate campaigns that achieve measurable impact on disease prevention, health behavior change, and improved health outcomes at scale.",
        sections: [
          {
            heading: "Mass Immunization Campaigns",
            description: "Childhood vaccination drives delivering routine immunizations (DPT, measles, polio, hepatitis B) to children in hard-to-reach areas. Catch-up vaccination campaigns target under-immunized populations. Cold chain management, trained vaccinators, community mobilization, and door-to-door follow-up ensure high coverage rates and protection against vaccine-preventable diseases."
          },
          {
            heading: "Maternal & Child Health Initiatives",
            description: "Campaigns promoting antenatal care attendance, skilled delivery, exclusive breastfeeding, growth monitoring, and childhood nutrition. Community education sessions, peer support groups, incentive programs for facility deliveries, and distribution of maternal health kits improve maternal and child health outcomes. Integration with family planning services supports birth spacing and maternal well-being."
          },
          {
            heading: "Disease Prevention & Awareness Programs",
            description: "Public awareness campaigns addressing malaria prevention (bed net distribution, indoor spraying), HIV testing and prevention, tuberculosis screening, neglected tropical disease control, and non-communicable disease awareness. Mass media, community drama, school programs, and peer education spread health messages and encourage behavior change."
          },
          {
            heading: "Nutrition & Food Security Interventions",
            description: "Community nutrition programs including vitamin A supplementation, deworming campaigns, promotion of dietary diversity, infant and young child feeding counseling, and management of acute malnutrition. Cooking demonstrations, kitchen gardens, and nutrition education improve household food security and reduce malnutrition rates among vulnerable populations."
          },
          {
            heading: "Water, Sanitation & Hygiene (WASH)",
            description: "Hygiene promotion campaigns including handwashing with soap, safe water storage, latrine construction, and menstrual hygiene management. Community-led total sanitation approaches mobilize communities to eliminate open defecation. WASH interventions reduce diarrheal diseases, improve school attendance, and enhance overall community health."
          }
        ],
        highlights: [
          "Partnership with governments & NGOs",
          "Mass immunization & vaccination drives",
          "Maternal health awareness campaigns",
          "Disease prevention programs (malaria, HIV, TB)",
          "Community mobilization & behavior change",
          "Culturally-tailored health messaging"
        ]
      }
    },
    {
      title: "Rural Healthcare Infrastructure",
      subtitle: "Building Sustainable Community Health Systems",
      image: ruralInfrastructureImage,
      content: {
        intro: "Sustainable healthcare access requires permanent infrastructure, reliable supply chains, functional referral systems, and local capacity. Our rural healthcare infrastructure development program establishes community health posts, supports rural clinics, implements telemedicine capabilities, strengthens medicine supply chains, and builds referral networks that create lasting improvements in healthcare delivery to communities with limited healthcare access.",
        sections: [
          {
            heading: "Community Health Posts & Rural Clinics",
            description: "Establishment and renovation of community health posts serving as primary care access points in remote villages. Infrastructure includes consultation rooms, pharmacy storage, vaccine refrigeration, waiting areas, and sanitation facilities. Staffing with trained health workers, equipment provision, and ongoing operational support ensure facilities deliver quality care and remain functional long-term."
          },
          {
            heading: "Telemedicine & Digital Health Infrastructure",
            description: "Installation of telemedicine equipment including internet connectivity, video conferencing systems, digital diagnostic tools, and electronic health records in rural health facilities. Remote consultation capabilities connect rural health workers with specialist physicians for complex cases. Digital platforms enable clinical decision support, treatment protocols, and patient data management."
          },
          {
            heading: "Medicine Supply Chain Systems",
            description: "Reliable pharmaceutical supply chains ensure continuous availability of essential medicines at community health posts. Inventory management systems, regular restocking schedules, cold chain for vaccines, expiry date monitoring, and quality assurance prevent stockouts and ensure patients receive needed medications. Integration with national medical stores and regional warehouses maintains consistent supply."
          },
          {
            heading: "Referral Systems & Transportation",
            description: "Functional referral networks link community health posts to district hospitals and tertiary facilities for patients requiring specialist care. Clear referral protocols, patient transfer forms, ambulance services, and communication systems ensure seamless transitions. Referral tracking monitors patient outcomes and enables feedback to referring health workers."
          },
          {
            heading: "Community Health Governance & Sustainability",
            description: "Establishment of community health committees involving local leaders, health workers, and community members in facility governance, priority-setting, and accountability. Training in financial management, health data use, and quality improvement builds local capacity for sustainable health facility management. Linkages with government health systems ensure long-term support and integration into national healthcare delivery."
          }
        ],
        highlights: [
          "Community health posts in remote villages",
          "Telemedicine connectivity for specialist consultation",
          "Reliable medicine supply chain systems",
          "Functional referral networks to hospitals",
          "Community governance & sustainability",
          "Integration with national health systems"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Community Health Solutions" />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <motion.img
          src="https://images.unsplash.com/photo-1634710664586-fe890319a9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGglMjB3b3JrZXIlMjBhZnJpY2F8ZW58MXx8fHwxNzY3ODkxNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Community health worker in Africa"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-white mb-6 leading-tight">
              Community Health Solutions
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Bringing quality healthcare to communities with limited access through mobile clinics, trained health workers, and sustainable programs
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue/90 transition-colors shadow-lg"
              >
                Explore Our Programs
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Partner With Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-1 w-20 bg-orange mb-6 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-6">
              Healthcare Access for Every Community
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Many communities across Africa have limited access to basic healthcare. Our community health solutions address this need through <strong>mobile health clinics</strong>, <strong>trained community health workers</strong>, and <strong>culturally-sensitive programs</strong> that deliver essential services directly to rural villages, informal settlements, and communities with limited healthcare access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Four Pillars of Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive community health from mobile clinics to sustainable infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPillar(index)}
                    className="bg-blue text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue/90 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Health Operations at a Glance - Stats Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Community Health Operations at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a community health provider, we not only provide mobile clinics and health services, but we also train community health workers, implement public health campaigns, and build sustainable rural healthcare infrastructure that brings quality care to communities with limited healthcare access across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="text-5xl font-bold text-blue mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 leading-relaxed">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Our Program Areas
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive health services addressing community needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programAreas.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 border-t-4 border-teal hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Healthcare access for every community and partnership model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border-t-4 border-orange shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Why Choose Pacem Health
            </h2>
            <p className="text-xl text-gray-600">
              Community health impact across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              News & Stories
            </h2>
            <p className="text-xl text-gray-600">
              Latest updates from our community health programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1634710664586-fe890319a9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Community health outreach"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">December 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Expanding Our Mobile Clinic Network
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are deploying new mobile health units across remote regions, bringing essential primary care services to more communities with limited healthcare access.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue font-semibold flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1766325693423-69e9fe20605b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Community health worker training"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">November 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Investing in Community Health Worker Training
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our training programs equip frontline health workers with digital tools for patient tracking, clinical decision support, and health data collection.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue font-semibold flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617378792301-8071543aca19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Vaccination campaign"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">October 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Strengthening Maternal Health Outreach
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our maternal health programs deliver antenatal care, health education, and safe delivery services to expectant mothers in rural communities across our service areas.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue font-semibold flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy/95 z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1634710664586-fe890319a9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGglMjB3b3JrZXIlMjBhZnJpY2F8ZW58MXx8fHwxNzY3ODkxNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Community health background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold leading-tight text-white mb-6">
              Join Our Community Health Mission
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Partner with Pacem Health to expand healthcare access in communities with limited access. Together, we can bring quality healthcare to communities across Africa.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors"
              >
                Explore Programs
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Become a Partner
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>Growing Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>Mobile Clinics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>Trained CHWs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillar Details Modal */}
      {selectedPillar !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedPillar(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={pillarDetails[selectedPillar].image}
                alt={pillarDetails[selectedPillar].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h2 className="text-4xl font-serif font-bold leading-tight text-white mb-2">
                    {pillarDetails[selectedPillar].title}
                  </h2>
                  <p className="text-xl text-white/90">
                    {pillarDetails[selectedPillar].subtitle}
                  </p>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto max-h-[calc(90vh-16rem)] p-8">
              {/* Introduction */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {pillarDetails[selectedPillar].content.intro}
              </p>

              {/* Sections */}
              {pillarDetails[selectedPillar].content.sections.length > 0 && (
                <div className="space-y-6 mb-8">
                  {pillarDetails[selectedPillar].content.sections.map((section, idx) => (
                    <div key={idx} className="border-l-4 border-orange pl-6">
                      <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-2">
                        {section.heading}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              {pillarDetails[selectedPillar].content.highlights.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-4">Key Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pillarDetails[selectedPillar].content.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="mt-8 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue/90 transition-colors flex items-center gap-2"
                >
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPillar(null)}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}