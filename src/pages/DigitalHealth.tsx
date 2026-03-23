import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { ServiceBreadcrumb } from "../components/ServiceBreadcrumb";
import heroImage from "figma:asset/36ffce28ba0fc01bd98274ca5340d73fb488d02e.png";
import telemedicineImage from "figma:asset/677cf865b715620a1b4c53cabfcf0856765f092c.png";
import ehrImage from "figma:asset/c874f5262943ccf93909825e5bc09bc2b26b8dc9.png";
import patientAppImage from "figma:asset/129d9f8b4ccc20e6fc94493ea7632bfdc05b4404.png";
import analyticsAIImage from "figma:asset/918325c99a948605d8ecf362c975b096ef0428bb.png";

export default function DigitalHealth() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const heroStats = [
    { 
      value: "Growing", 
      label: "Platform Users",
      description: "Projected community of patients, healthcare providers, and facilities using our digital health platform for telemedicine, EHR, and mobile health applications across Africa."
    },
    { 
      value: "Growing", 
      label: "Partner Network",
      description: "Projected healthcare facilities, hospitals, and clinics implementing our cloud-based EHR, telemedicine, and patient engagement solutions to modernize care delivery and clinical workflows."
    },
    { 
      value: "Expanding", 
      label: "Digital Interactions",
      description: "Projected virtual doctor consultations connecting patients with licensed physicians, specialists, and mental health professionals through secure video and chat for accessible, convenient healthcare."
    }
  ];

  const pillars = [
    {
      number: "01",
      title: "Telemedicine Platform",
      description: "Secure video consultations connecting patients with licensed physicians, specialists, and mental health professionals. Virtual care, prescription services, and follow-up support accessible from anywhere.",
      image: telemedicineImage
    },
    {
      number: "02",
      title: "Electronic Health Records",
      description: "Cloud-based EHR system for healthcare facilities with patient records management, clinical decision support, e-prescribing, lab integration, and comprehensive reporting capabilities.",
      image: ehrImage
    },
    {
      number: "03",
      title: "Patient Engagement Apps",
      description: "Mobile health applications for appointment booking, medication reminders, health tracking, digital prescriptions, lab results access, and direct messaging with healthcare providers.",
      image: patientAppImage
    },
    {
      number: "04",
      title: "Health Analytics & AI",
      description: "Data analytics platform with population health insights, predictive modeling, disease surveillance, clinical quality metrics, and AI-powered diagnostic support tools for evidence-based decision making.",
      image: analyticsAIImage
    }
  ];

  const digitalSolutions = [
    {
      category: "For Patients",
      items: ["Virtual doctor consultations", "on-demand health assistance", "Digital prescriptions", "Appointment scheduling", "Medication reminders", "Health records access"]
    },
    {
      category: "For Healthcare Providers",
      items: ["Cloud-based EHR system", "Clinical decision support", "E-prescribing & lab orders", "Telemedicine capabilities", "Patient management tools", "Revenue cycle management"]
    },
    {
      category: "For Facilities",
      items: ["Hospital information systems", "Inventory management", "Billing & insurance claims", "Staff scheduling", "Quality metrics tracking", "Regulatory compliance tools"]
    },
    {
      category: "For Public Health",
      items: ["Disease surveillance", "Population health analytics", "Immunization tracking", "Outbreak detection", "Health program monitoring", "Impact reporting dashboards"]
    }
  ];

  const whoWeServe = [
    {
      title: "Individual Patients",
      description: "Access healthcare anytime, anywhere through our patient app. Book appointments, consult doctors virtually, and manage your health digitally."
    },
    {
      title: "Healthcare Facilities",
      description: "Modern health information systems streamlining clinical workflows, improving patient care, and enhancing operational efficiency."
    },
    {
      title: "Medical Practitioners",
      description: "Clinical tools supporting diagnosis, treatment decisions, patient management, and teleconsultation with integrated EHR access."
    },
    {
      title: "Government & NGOs",
      description: "Population health platforms for disease surveillance, program monitoring, and data-driven public health decision making."
    }
  ];

  const benefits = [
    { title: "Growing Users", description: "Growing digital health community" },
    { title: "Always Available", description: "Healthcare when you need it" },
    { title: "Secure & Compliant", description: "Designed for healthcare data security" },
    { title: "AI-Powered", description: "Clinical decision support" },
    { title: "Cloud-Based", description: "Scalable infrastructure" },
    { title: "Interoperable", description: "HL7/FHIR integration standards" }
  ];

  const faqs = [
    {
      question: "How does the telemedicine platform work?",
      answer: "Our telemedicine platform connects patients with licensed physicians through secure video consultations. Simply download our app, create an account, book an appointment or request an immediate consultation, and connect with a doctor via video call. The doctor can review your medical history, diagnose conditions, prescribe medications, and order tests—all digitally. Prescriptions are sent directly to your preferred pharmacy."
    },
    {
      question: "Is my health data secure and private?",
      answer: "Yes. We implement bank-level security with end-to-end encryption, secure cloud storage, multi-factor authentication, and regular security audits. Our systems comply with international healthcare data standards including healthcare data protection and GDPR. Patient data is only accessible to authorized healthcare providers involved in your care. We never share your personal health information without your explicit consent."
    },
    {
      question: "Can healthcare facilities integrate your EHR system with existing systems?",
      answer: "Yes. Our EHR system is designed for interoperability and supports HL7/FHIR standards for seamless integration with existing hospital information systems, laboratory systems, radiology PACS, pharmacy systems, and insurance platforms. We provide API access, data migration services, and technical support to ensure smooth integration with your current technology infrastructure."
    },
    {
      question: "What types of medical conditions can be treated via telemedicine?",
      answer: "Telemedicine is suitable for many conditions including common illnesses (colds, flu, infections), chronic disease management (diabetes, hypertension), mental health consultations, prescription refills, medical advice, second opinions, and follow-up care. Emergency conditions requiring immediate physical examination or procedures should be treated in-person. Our doctors will advise if in-person care is needed."
    },
    {
      question: "Do you provide training and implementation support?",
      answer: "Absolutely. We provide comprehensive implementation support including needs assessment, system configuration, data migration, staff training (clinical and administrative), go-live support, and ongoing technical assistance. Our team works closely with your facility to ensure successful adoption. We also offer user manuals, video tutorials, help desk support, and regular system updates."
    }
  ];

  const pillarDetails = [
    {
      title: "Telemedicine Platform",
      subtitle: "Virtual Healthcare Accessible Anytime, Anywhere",
      image: telemedicineImage,
      content: {
        intro: "Our telemedicine platform revolutionizes healthcare access by connecting patients with licensed physicians through secure video consultations. Whether you need immediate medical advice, specialist consultation, mental health support, or prescription refills, our platform delivers quality healthcare directly to your smartphone or computer—eliminating travel time, reducing costs, and improving access to care.",
        sections: [
          {
            heading: "Virtual Consultations with Licensed Physicians",
            description: "Connect with board-certified doctors, specialists, and healthcare providers through HD video calls. Patients can schedule appointments or request immediate consultations for urgent non-emergency conditions. Physicians review medical history, conduct virtual examinations, diagnose conditions, and recommend treatments—all through secure, healthcare data protection-compliant video technology."
          },
          {
            heading: "Specialty Care & Expert Consultations",
            description: "Access to specialist physicians including cardiologists, dermatologists, endocrinologists, psychiatrists, and other experts without long wait times or geographic barriers. Telemedicine enables patients in remote areas to receive expert opinions, second opinions, and specialized care that would otherwise require extensive travel to urban medical centers."
          },
          {
            heading: "Digital Prescriptions & Medication Management",
            description: "Physicians prescribe medications electronically during teleconsultations, with prescriptions sent directly to your preferred pharmacy for pickup or home delivery. Medication reconciliation, refill requests, and adherence monitoring through the platform help patients manage chronic conditions effectively. Integration with pharmacy systems ensures seamless prescription fulfillment."
          },
          {
            heading: "Mental Health & Counseling Services",
            description: "Confidential virtual sessions with licensed therapists, counselors, and psychiatrists for mental health support. Telemedicine eliminates stigma barriers and increases access to mental healthcare. Patients can schedule regular therapy sessions, psychiatric consultations for medication management, and crisis counseling through secure video conferencing."
          },
          {
            heading: "Follow-Up Care & Chronic Disease Management",
            description: "Ongoing virtual appointments for chronic disease monitoring including diabetes, hypertension, asthma, and other conditions. Regular check-ins, medication adjustments, lifestyle counseling, and complication screening conducted remotely improve adherence and health outcomes while reducing unnecessary clinic visits. Remote patient monitoring devices integrate with the platform for real-time health data sharing."
          }
        ],
        highlights: [
          "Growing teleconsultation volume",
          "Board-certified physicians & specialists",
          "Secure HD video consultations",
          "Digital prescriptions to pharmacy",
          "Mental health & counseling services",
          "On-demand medical advice access"
        ]
      }
    },
    {
      title: "Electronic Health Records",
      subtitle: "Cloud-Based EHR for Modern Healthcare Facilities",
      image: ehrImage,
      content: {
        intro: "Our cloud-based Electronic Health Records (EHR) system modernizes healthcare delivery by digitizing patient information, streamlining clinical workflows, and enabling data-driven decision making. Designed specifically for African healthcare facilities, our EHR improves care quality, operational efficiency, and patient safety through comprehensive digital health records management.",
        sections: [
          {
            heading: "Comprehensive Patient Records Management",
            description: "Complete digital medical records including demographics, medical history, medications, allergies, lab results, radiology images, clinical notes, vital signs, and treatment plans. Centralized patient information accessible to authorized providers across departments ensures continuity of care, reduces duplicate testing, and prevents medical errors from incomplete information."
          },
          {
            heading: "Clinical Decision Support & Safety Alerts",
            description: "Intelligent algorithms provide real-time clinical guidance including drug-drug interaction warnings, allergy alerts, dosage recommendations based on age/weight, evidence-based treatment protocols, and preventive care reminders. AI-powered decision support helps clinicians make safer, more informed treatment decisions and adhere to clinical best practices."
          },
          {
            heading: "E-Prescribing & Medication Orders",
            description: "Electronic prescription generation with direct transmission to pharmacies eliminates handwriting errors and improves medication safety. Providers can view formulary information, check for drug interactions, access dosing guidelines, and track prescription history. Integration with pharmacy systems ensures accurate dispensing and reduces medication errors by 70%."
          },
          {
            heading: "Laboratory & Radiology Integration",
            description: "Bidirectional integration with laboratory information systems (LIS) and radiology PACS enables electronic test ordering, automatic result delivery to patient charts, and digital viewing of images and reports. Clinicians can review lab trends over time, compare results to normal ranges, and access radiology images directly within the EHR workflow."
          },
          {
            heading: "Reporting, Analytics & Quality Metrics",
            description: "Comprehensive reporting tools track clinical quality indicators, disease surveillance, treatment outcomes, facility performance metrics, and regulatory compliance. Data analytics dashboards provide insights into patient populations, resource utilization, revenue cycle, and opportunities for quality improvement. Export capabilities support research and program evaluation."
          }
        ],
        highlights: [
          "Healthcare facilities across our network",
          "Cloud-based with offline capabilities",
          "Clinical decision support & safety alerts",
          "E-prescribing with pharmacy integration",
          "Lab/radiology system integration",
          "HL7/FHIR interoperability standards"
        ]
      }
    },
    {
      title: "Patient Engagement Apps",
      subtitle: "Empowering Patients Through Mobile Health Technology",
      image: patientAppImage,
      content: {
        intro: "Our patient engagement mobile application puts healthcare in the palm of your hand. From booking appointments and consulting doctors virtually to tracking health metrics and accessing medical records, our app empowers patients to take an active role in their healthcare journey while improving communication with providers and adherence to treatment plans.",
        sections: [
          {
            heading: "Appointment Scheduling & Reminders",
            description: "Browse available appointment slots, book consultations with preferred doctors, view upcoming appointments, and receive automated SMS/push notification reminders. Real-time calendar integration shows provider availability, wait times, and clinic hours. Patients can reschedule or cancel appointments directly through the app, reducing no-shows and improving clinic efficiency."
          },
          {
            heading: "Personal Health Records Access",
            description: "View complete medical history including past visits, diagnoses, lab results, radiology reports, medications, allergies, and immunizations. Download or share medical records securely with other providers. Track health trends over time with interactive graphs showing blood pressure, glucose, weight, and other vital signs. Digital health wallet stores vaccination certificates and insurance cards."
          },
          {
            heading: "Medication Management & Reminders",
            description: "Digital medication list with dosage instructions, refill reminders, and adherence tracking. Set custom reminders for medication schedules, receive alerts when refills are needed, and track medication adherence. Barcode scanning adds new medications to your profile with automatic drug interaction checking against current medications."
          },
          {
            heading: "Health Tracking & Wellness Features",
            description: "Log vital signs, symptoms, moods, exercise, sleep, and nutrition. Integration with wearable devices and health apps for automatic data sync. Set health goals, track progress, and receive personalized health tips. Women's health tracking for menstrual cycles, pregnancy, and fertility. Chronic disease management tools for diabetes, hypertension, and other conditions."
          },
          {
            heading: "Secure Messaging with Providers",
            description: "Direct communication with healthcare team through secure, encrypted messaging. Ask non-urgent medical questions, request prescription refills, share health updates, and receive care instructions. Providers can send educational materials, appointment reminders, test result notifications, and follow-up care instructions. All communications healthcare data protection-compliant and stored in patient record."
          }
        ],
        highlights: [
          "Growing app downloads and active users",
          "Appointment booking & reminders",
          "Personal health records access",
          "Medication tracking & refill reminders",
          "Secure messaging with providers",
          "Health tracking & wellness tools"
        ]
      }
    },
    {
      title: "Health Analytics & AI",
      subtitle: "Data-Driven Insights for Better Health Outcomes",
      image: analyticsAIImage,
      content: {
        intro: "Our health analytics and artificial intelligence platform transforms healthcare data into actionable insights. By applying machine learning algorithms, predictive modeling, and advanced analytics to clinical and operational data, we enable healthcare organizations to improve population health, detect disease outbreaks early, optimize resource allocation, and deliver personalized, evidence-based care.",
        sections: [
          {
            heading: "Population Health Management & Risk Stratification",
            description: "Analytics dashboards provide insights into patient populations including disease prevalence, demographic trends, geographic health disparities, and social determinants of health. Risk stratification algorithms identify high-risk patients requiring proactive interventions. Population segmentation enables targeted outreach for preventive care, chronic disease management, and care coordination programs."
          },
          {
            heading: "Predictive Analytics & Early Detection",
            description: "Machine learning models analyze patient data to predict disease onset, hospital readmissions, treatment complications, and adverse events before they occur. Early warning systems alert providers to deteriorating patient conditions. Predictive models support clinical decision-making for diagnosis, treatment selection, and prognosis estimation, improving patient outcomes through earlier intervention."
          },
          {
            heading: "Disease Surveillance & Outbreak Detection",
            description: "Real-time monitoring of disease patterns, unusual symptom clusters, and infectious disease trends enables early outbreak detection. Syndromic surveillance algorithms detect anomalies in patient presentations. Geographic mapping visualizes disease hotspots. Automated reporting to public health authorities supports rapid response to emerging health threats and epidemic preparedness."
          },
          {
            heading: "Clinical Quality Metrics & Performance",
            description: "Track key performance indicators including patient satisfaction scores, clinical outcome measures, adherence to treatment protocols, medication error rates, hospital-acquired infections, and mortality rates. Benchmarking compares performance against national standards and peer facilities. Quality dashboards identify improvement opportunities and measure impact of interventions."
          },
          {
            heading: "AI-Powered Diagnostic Support Tools",
            description: "Computer vision algorithms analyze medical images (X-rays, CT scans, pathology slides) to assist radiologists and pathologists with diagnosis. Natural language processing extracts insights from clinical notes and research literature. Diagnostic decision support systems suggest differential diagnoses based on symptoms, lab results, and imaging findings. AI tools augment clinician expertise while reducing diagnostic errors."
          }
        ],
        highlights: [
          "Machine learning & predictive analytics",
          "Population health dashboards",
          "Disease surveillance & outbreak detection",
          "Clinical quality metrics tracking",
          "AI-powered diagnostic support",
          "Evidence-based decision support tools"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Digital Health & Technology" />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <motion.img
          src={heroImage}
          alt="Digital health technology technology"
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
              Digital Health & Technology
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Transforming healthcare delivery through telemedicine, electronic health records, and AI-powered digital solutions
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue/90 transition-colors shadow-lg"
              >
                Download Patient App
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Request EHR Demo
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
              Healthcare Meets technology
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Digital health technology is revolutionizing African healthcare. Our comprehensive platform combines <strong>telemedicine</strong>, <strong>electronic health records</strong>, <strong>patient engagement apps</strong>, and <strong>AI-powered analytics</strong> to make quality healthcare more accessible, efficient, and data-driven than ever before.
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
              Comprehensive digital health solutions from telemedicine to AI analytics
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

      {/* Digital Health Operations at a Glance - Stats Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Digital Health Operations at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a digital health innovator, we not only provide telemedicine platforms, but we also deliver comprehensive electronic health records, patient engagement apps, and AI-powered analytics that transform healthcare delivery and improve patient outcomes through technology.
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

      {/* Digital Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Digital Solutions for Every Stakeholder
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive digital health tools for patients, providers, and facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalSolutions.map((category, index) => (
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
              Digital health solutions tailored to every healthcare stakeholder
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
              Why Choose Pacem Health Digital
            </h2>
            <p className="text-xl text-gray-600">
              Leading digital health platform for Africa
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
              Latest updates from our digital health solutions
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
                  src="https://images.unsplash.com/photo-1758691461916-dc7894eb8f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Telemedicine platform"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">December 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Growing Our Telemedicine Platform
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Major milestone as patients in 12 African countries access quality healthcare through virtual consultations, connecting with licensed physicians for diagnosis, prescriptions, and follow-up care.
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
                  src="https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="EHR implementation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">November 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Developing Clinical Decision Support Tools
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  New machine learning algorithms integrated into our electronic health records system provide real-time diagnostic suggestions, drug interaction alerts, and evidence-based treatment recommendations.
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
                  src="https://images.unsplash.com/photo-1691934310598-27528df21f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Mobile health app"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">October 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Advancing Patient Engagement Through Digital Tools
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our mobile health application recognized for exceptional user experience, featuring appointment booking, medication reminders, digital prescriptions, and secure messaging with healthcare providers.
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
          src={heroImage}
          alt="Digital health background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold leading-tight text-white mb-6">
              Experience the Future of Healthcare
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Access healthcare through our growing digital platform. Download our app for patients or request a demo for healthcare facilities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors"
              >
                Download Patient App
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Request EHR Demo
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>Security Focused</span>
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
                  Download App
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