import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { ServiceBreadcrumb } from "../components/ServiceBreadcrumb";
import heroImage from "figma:asset/92961bf1e989f95d373bb8a32d151a786e49efa7.png";
import pillar1Image from "figma:asset/43b775249f0da819314ecca04e1bb2d4d961fa39.png";
import pillar2Image from "figma:asset/c933b7ce04bd5211190d4040579d505dd38ca78a.png";
import pillar3Image from "figma:asset/144d7c80965c8f464e86d4f40ea056866aaf22f1.png";
import pillar4Image from "figma:asset/ee881f55ba26e61996fe1f778c6e9898ea397f82.png";

export default function PharmacyServices() {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const heroStats = [
    { 
      value: "Growing", 
      label: "Pharmacy Network",
      projection: "Projected by 2026",
      description: "Strategically located community pharmacies across Kenya and Ghana providing convenient access to medications, health services, and professional pharmaceutical care."
    },
    { 
      value: "Thousands", 
      label: "Patients Served",
      projection: "Projected by 2026",
      description: "Annual patient visits for prescription services, medication counseling, health screenings, immunizations, and chronic disease management programs."
    },
    { 
      value: "High", 
      label: "Customer Satisfaction",
      description: "Patient satisfaction rating reflecting our commitment to personalized service, expert counseling, and quality care that improves health outcomes."
    }
  ];

  const pillars = [
    {
      number: "01",
      title: "Community Pharmacy Network",
      description: "Strategically located retail pharmacies providing convenient access to medications, professional counseling, and health services across urban and peri-urban communities.",
      image: pillar1Image
    },
    {
      number: "02",
      title: "Clinical Pharmacy Services",
      description: "Medication therapy management, chronic disease counseling, immunization services, health screenings, and personalized medication adherence support.",
      image: pillar2Image
    },
    {
      number: "03",
      title: "Specialty Medication Programs",
      description: "Expert management of complex therapies including HIV/AIDS medications, oncology support, diabetes care programs, and chronic disease management with dedicated pharmacist oversight.",
      image: pillar3Image
    },
    {
      number: "04",
      title: "Digital Pharmacy Platform",
      description: "Online prescription ordering, medication delivery, digital health records, refill reminders, and teleconsultation with licensed pharmacists for convenient healthcare access.",
      image: pillar4Image
    }
  ];

  const serviceCategories = [
    {
      category: "Prescription Services",
      items: ["Prescription dispensing & verification", "Medication counseling", "Drug interaction screening", "Generic substitution guidance", "Refill management", "Prescription transfers"]
    },
    {
      category: "Clinical Services",
      items: ["Immunizations & vaccines", "Blood pressure monitoring", "Diabetes screening", "Cholesterol testing", "Medication therapy management", "Chronic disease counseling"]
    },
    {
      category: "Specialty Programs",
      items: ["HIV/AIDS medication management", "Antiretroviral therapy support", "Diabetes care programs", "Asthma management", "Hypertension control", "Mental health medication support"]
    },
    {
      category: "Wellness Services",
      items: ["Health screenings", "Nutritional counseling", "Smoking cessation programs", "Weight management support", "Prenatal vitamins consultation", "Over-the-counter guidance"]
    }
  ];

  const whoWeServe = [
    {
      title: "Individual Patients",
      description: "Personalized medication counseling, chronic disease support, and convenient prescription services for you and your family."
    },
    {
      title: "Corporate Wellness Programs",
      description: "On-site pharmacy services, medication management programs, and health screenings for employee health benefits."
    },
    {
      title: "Insurance Plans",
      description: "Network pharmacy services, formulary compliance, prior authorization support, and claims processing expertise."
    },
    {
      title: "Healthcare Providers",
      description: "Collaborative care partnerships, medication adherence monitoring, patient education, and treatment outcome tracking."
    }
  ];

  const benefits = [
    { title: "Licensed Pharmacists", description: "Professional medication expertise & counseling" },
    { title: "Growing Network", description: "Convenient community access" },
    { title: "Digital Platform", description: "Online ordering & delivery" },
    { title: "Insurance Accepted", description: "Major health plans & cash pay" },
    { title: "Extended Hours", description: "Pharmacy access when you need it" },
    { title: "Specialty Programs", description: "HIV, diabetes, chronic disease care" }
  ];

  const faqs = [
    {
      question: "What pharmacy services do you offer?",
      answer: "Our pharmacies provide comprehensive services including prescription dispensing, medication counseling, immunizations, health screenings (blood pressure, diabetes, cholesterol), medication therapy management, chronic disease support programs, and over-the-counter medication guidance. All services are delivered by licensed pharmacists committed to your health."
    },
    {
      question: "Do you accept health insurance and what are your payment options?",
      answer: "Yes, we accept most major health insurance plans including NHIF, private insurance, and employer health benefits. We also accept cash payments and offer flexible payment plans for expensive medications. Our team can verify your insurance coverage and help you understand your copay or out-of-pocket costs before dispensing."
    },
    {
      question: "Can I order prescriptions online and get them delivered?",
      answer: "Absolutely. Our digital pharmacy platform allows you to upload prescriptions, order refills, and schedule delivery to your home or office. We offer same-day delivery in major cities and next-day delivery to surrounding areas. You can also consult with a pharmacist via teleconsultation before your medication is delivered."
    },
    {
      question: "Do you provide specialized support for chronic diseases like HIV/AIDS and diabetes?",
      answer: "Yes. We operate dedicated specialty pharmacy programs with trained pharmacists who provide medication therapy management, adherence counseling, side effect monitoring, and lifestyle guidance for HIV/AIDS, diabetes, hypertension, asthma, and other chronic conditions. These programs include regular pharmacist consultations and personalized care plans."
    },
    {
      question: "What immunizations and health screenings do you offer?",
      answer: "Our pharmacies provide routine immunizations (flu, pneumonia, HPV, travel vaccines), health screenings (blood pressure, blood glucose, cholesterol, BMI), and point-of-care testing. These services are walk-in friendly with no appointment needed, and our pharmacists can assess your results and provide health recommendations on the spot."
    }
  ];

  const pillarDetails = [
    {
      title: "Community Pharmacy Network",
      subtitle: "Pharmacy Locations Across Urban and Peri-Urban Communities",
      image: pillar1Image,
      content: {
        intro: "Our growing network of community pharmacies brings professional medication access and clinical services directly to neighborhoods across Kenya and Ghana. Each location is staffed with licensed pharmacists committed to personalized care, health education, and community wellness.",
        sections: [
          {
            heading: "Strategic Locations for Maximum Access",
            description: "Pharmacies conveniently located in urban centers, residential neighborhoods, near hospitals and clinics, and peri-urban communities to ensure easy access to medications and pharmacy services. Extended hours including evenings and weekends accommodate working patients and families."
          },
          {
            heading: "Full-Service Retail Pharmacy",
            description: "Comprehensive prescription dispensing, medication therapy management, drug interaction screening, generic substitution counseling, and prescription transfer services. Wide selection of over-the-counter products, vitamins, supplements, and health essentials available alongside prescription medications."
          },
          {
            heading: "Professional Pharmacist Counseling",
            description: "Licensed pharmacists available for one-on-one medication consultations, answer questions about dosing and side effects, provide education on proper medication use, and offer guidance on managing health conditions. Private consultation areas ensure confidential discussions about your health."
          },
          {
            heading: "Insurance & Payment Flexibility",
            description: "Accept major health insurance plans including NHIF, private insurers, and corporate health benefits. Cash payment options available with competitive pricing on prescription and OTC medications. Flexible payment plans offered for expensive medications to improve access to essential treatments."
          },
          {
            heading: "Community Health Hub",
            description: "Beyond medications, our pharmacies serve as community health resources offering health screenings, immunizations, educational materials, wellness programs, and referrals to healthcare providers. We're invested in the health and wellbeing of the communities we serve."
          }
        ],
        highlights: [
          "Pharmacy locations across our service areas",
          "Licensed pharmacists at every location",
          "Extended hours including evenings & weekends",
          "Major insurance plans accepted",
          "Private consultation areas available",
          "Comprehensive prescription & OTC selection"
        ]
      }
    },
    {
      title: "Clinical Pharmacy Services",
      subtitle: "Beyond DispensingâProfessional Health Services",
      image: pillar2Image,
      content: {
        intro: "Pacem Health pharmacies provide clinical services that extend far beyond traditional prescription dispensing. Our pharmacists are trained healthcare professionals who deliver immunizations, conduct health screenings, manage chronic diseases, and provide medication therapy management to optimize your health outcomes.",
        sections: [
          {
            heading: "Immunization Services",
            description: "Comprehensive vaccination programs including seasonal flu shots, pneumonia vaccines, HPV immunization, travel vaccines (yellow fever, typhoid, hepatitis), and COVID-19 vaccinations. Walk-in immunizations available with no appointment needed. Pharmacists review immunization records and provide catch-up vaccination schedules."
          },
          {
            heading: "Health Screenings & Point-of-Care Testing",
            description: "Convenient health screenings for blood pressure monitoring, blood glucose testing, cholesterol screening, BMI assessment, and pregnancy testing. Results available immediately with pharmacist interpretation and health recommendations. Screenings help identify health risks early and prompt appropriate medical care."
          },
          {
            heading: "Medication Therapy Management (MTM)",
            description: "Comprehensive medication review for patients taking multiple medications to identify drug interactions, duplications, and optimization opportunities. Pharmacists work collaboratively with physicians to adjust therapies, improve medication adherence, and reduce adverse effects. Personalized medication action plans provided."
          },
          {
            heading: "Chronic Disease Counseling",
            description: "Specialized counseling for patients managing diabetes, hypertension, asthma, COPD, heart disease, and other chronic conditions. Education on medication use, lifestyle modifications, self-monitoring techniques, and recognizing warning signs of complications. Regular follow-up consultations track progress and adjust care plans."
          },
          {
            heading: "Medication Adherence Support",
            description: "Tools and strategies to help patients take medications as prescribed including pill organizers, medication synchronization programs, refill reminders, simplified dosing regimens, and patient education on the importance of adherence. Improved adherence leads to better health outcomes and reduced hospitalizations."
          }
        ],
        highlights: [
          "Walk-in immunizationsâno appointment needed",
          "Comprehensive health screening services",
          "Medication therapy management by pharmacists",
          "Chronic disease counseling & support",
          "Point-of-care testing with immediate results",
          "Personalized medication adherence programs"
        ]
      }
    },
    {
      title: "Specialty Medication Programs",
      subtitle: "Expert Management of Complex Therapies",
      image: pillar3Image,
      content: {
        intro: "Complex medical conditions require specialized pharmaceutical care. Our dedicated specialty pharmacy programs provide expert management of HIV/AIDS medications, oncology support therapies, diabetes care, and other chronic disease treatments with trained pharmacists, personalized counseling, and comprehensive adherence support.",
        sections: [
          {
            heading: "HIV/AIDS Medication Management",
            description: "Specialized antiretroviral therapy (ART) dispensing and adherence counseling to help patients achieve viral suppression and maintain health. Pharmacists trained in HIV medication management provide education on dosing schedules, drug interactions, side effect management, and resistance prevention. Confidential services with dedicated consultation areas."
          },
          {
            heading: "Diabetes Care Programs",
            description: "Comprehensive diabetes management including insulin and oral medication dispensing, blood glucose monitoring education, insulin injection technique training, nutrition counseling, and diabetes complication prevention. Regular pharmacist consultations track A1C levels, adjust medications, and provide lifestyle guidance for optimal glucose control."
          },
          {
            heading: "Oncology Support Services",
            description: "Supportive care medications for cancer patients including anti-nausea drugs, pain management, immune support, and side effect mitigation. Pharmacists coordinate with oncologists to optimize symptom management, monitor for drug interactions with chemotherapy, and provide patient education on managing treatment side effects."
          },
          {
            heading: "Chronic Disease Specialty Programs",
            description: "Dedicated programs for asthma/COPD management, hypertension control, cardiovascular disease prevention, mental health medication support, and autoimmune disease therapies. Each program includes specialized pharmacist oversight, regular monitoring, patient education materials, and care coordination with physicians."
          },
          {
            heading: "Adherence Monitoring & Support",
            description: "Close monitoring of medication refill patterns, adherence counseling to address barriers to taking medications as prescribed, side effect management support, and regular check-in calls or visits. Proven adherence interventions help patients stay on therapy and achieve better health outcomes."
          }
        ],
        highlights: [
          "HIV/AIDS ART programs with confidential counseling",
          "Diabetes management & insulin training",
          "Oncology supportive care expertise",
          "Chronic disease specialty programs",
          "Dedicated pharmacist oversight",
          "Comprehensive adherence monitoring"
        ]
      }
    },
    {
      title: "Digital Pharmacy Platform",
      subtitle: "Online Ordering, Delivery & Teleconsultation",
      image: pillar4Image,
      content: {
        intro: "Convenient healthcare access meets modern technology. Our digital pharmacy platform allows patients to upload prescriptions, order medications online, schedule home delivery, access digital health records, receive automated refill reminders, and consult with licensed pharmacists via video or phoneâall from the comfort of home or office.",
        sections: [
          {
            heading: "Online Prescription Ordering",
            description: "Upload new prescriptions via mobile app or web portal, request prescription refills with a few clicks, view medication history and current prescriptions, and set up automatic refill programs for chronic medications. Secure platform protects your health information and prescription data."
          },
          {
            heading: "Home & Office Delivery",
            description: "Same-day delivery available in major cities for orders placed before noon. Next-day delivery to surrounding areas and scheduled weekly delivery to remote locations. Real-time delivery tracking, SMS notifications, and flexible delivery windows accommodate your schedule. Medications delivered in discreet, secure packaging."
          },
          {
            heading: "Digital Health Records",
            description: "Access complete medication history, prescription records, immunization certificates, and health screening results through your secure patient portal. Download prescription receipts for insurance reimbursement, view medication information sheets, and track your health metrics over time. Records accessible anytime, anywhere."
          },
          {
            heading: "Automated Refill Reminders",
            description: "Never run out of medications with automated SMS and email refill reminders sent before prescriptions expire. Customizable reminder schedules, easy one-click refill ordering, and medication synchronization programs align all your prescriptions to refill on the same day each month for convenience."
          },
          {
            heading: "Virtual Pharmacist Consultations",
            description: "Consult with licensed pharmacists via video call, phone, or secure messaging for medication questions, dosing guidance, side effect concerns, and health advice. No appointment needed for quick questions. Scheduled teleconsultations available for comprehensive medication reviews and chronic disease management discussions."
          }
        ],
        highlights: [
          "Easy online prescription ordering",
          "Same-day delivery in major cities",
          "Digital health records access",
          "Automated medication refill reminders",
          "Virtual pharmacist teleconsultations",
          "Secure, HIPAA-compliant platform"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Pharmacy Services" />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <motion.img
          src={heroImage}
          alt="Modern pharmacy interior"
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
              Pharmacy Services
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Your trusted community pharmacy partner for medications, clinical services, and personalized health support
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue/90 transition-colors shadow-lg"
              >
                Find a Pharmacy Near You
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Order Prescription Online
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-6">
              More Than Just a PharmacyâYour Healthcare Partner
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Pacem Health pharmacies combine <strong>convenient medication access</strong> with <strong>clinical expertise</strong> and <strong>personalized care</strong>. From prescription dispensing to chronic disease management, immunizations to digital consultations, we're here to support your health journey every step of the way.
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-4">
              Four Pillars of Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-8">
              Comprehensive pharmacy services from community access to digital solutions
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
                    className={`w-full h-full ${index === 0 ? 'object-cover object-top' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3">
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

      {/* Pharmacy Operations at a Glance - Stats Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-4">
              Pharmacy Operations at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a community pharmacy leader, we not only dispense medications, but we also provide clinical services, health screenings, chronic disease management, and personalized care that improves health outcomes across the communities we serve.
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
                <div className="text-5xl font-bold text-navy mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 leading-relaxed">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {stat.description}
                </p>
                {stat.projection && (
                  <p className="text-sm text-gray-500 mt-2">
                    {stat.projection}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-4">
              Comprehensive Pharmacy Services
            </h2>
            <p className="text-xl text-gray-600">
              Expert care across prescription, clinical, specialty, and wellness services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 border-t-4 border-teal hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-4">
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Personalized pharmacy care for every health journey
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
                <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3">
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-4">
              Why Choose Pacem Health Pharmacy
            </h2>
            <p className="text-xl text-gray-600">
              Professional care backed by community trust
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
                <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-2">
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-4">
              News & Stories
            </h2>
            <p className="text-xl text-gray-600">
              Latest updates from our pharmacy services network
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
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Pharmacy network expansion"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">December 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3">
                  Growing Our Community Pharmacy Network
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are expanding our retail pharmacy network to bring medication access and clinical services to more communities.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-navy font-semibold flex items-center gap-2"
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
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Digital pharmacy platform"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">November 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3">
                  Developing Digital Pharmacy Capabilities
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are building digital tools to support medication access, pharmacist consultations, and convenient refill options for our patients.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-navy font-semibold flex items-center gap-2"
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
                  src="https://images.unsplash.com/photo-1576671081837-49000212a370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Specialty care program"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">October 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-3">
                  Strengthening Medication Adherence Support
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Specialized pharmacist training and dedicated counseling services support patients in achieving better adherence and viral suppression outcomes.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-navy font-semibold flex items-center gap-2"
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
          src="https://images.unsplash.com/photo-1576091358783-a212ec293ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjaXN0JTIwY29uc3VsdGF0aW9uJTIwY3VzdG9tZXJ8ZW58MXx8fHwxNzY3ODkxMDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Pharmacy background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold leading-tight text-white mb-6">
              Visit Your Neighborhood Pharmacy
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Find a Pacem Health pharmacy near you or order your prescriptions online for convenient home delivery. Our pharmacists are here to support your health.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors"
              >
                Find a Pharmacy
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Order Online
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-navy" />
                <span>Growing Network</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-navy" />
                <span>Licensed Pharmacists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-navy" />
                <span>Insurance Accepted</span>
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
                      <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-2">
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
                  <h3 className="text-xl font-serif font-semibold leading-tight text-navy mb-4">Key Highlights</h3>
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
                  Find a Pharmacy Near You
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