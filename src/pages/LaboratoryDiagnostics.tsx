import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { ServiceBreadcrumb } from "../components/ServiceBreadcrumb";
import heroImage from "figma:asset/64df82914a34a7e7488506a878fdfeca3ff95b28.png";
import techPlatformImage from "figma:asset/7c3545a19d6c6c7a205272bf38a5901154a48959.png";
import testingServicesImage from "figma:asset/262f5fc13c9bb8fef9c6a7c4d405572fdc463ec7.png";
import qualityAssuranceImage from "figma:asset/e8428c7c18768d92e0055362cae67ec2c162c66a.png";
import serviceNetworkImage from "figma:asset/a7a6a25b535878280d30e933867cb006806b459e.png";

export default function LaboratoryDiagnostics() {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const heroStats = [
    { 
      value: "Growing", 
      label: "Test Volume",
      description: "Processing a growing volume of diagnostic tests guided by international quality standards, advanced analyzers, and comprehensive result validation for accurate patient diagnosis and treatment decisions."
    },
    { 
      value: "50+", 
      label: "International Partners",
      description: "Healthcare facilities, hospitals, and clinics partnering with our laboratory network for comprehensive diagnostic testing, clinical chemistry, molecular diagnostics, and specialized pathology services."
    },
    { 
      value: "high", 
      label: "Accuracy Rate",
      description: "Diagnostic accuracy maintained through rigorous quality control, proficiency testing, continuous staff training, automated systems, and comprehensive result verification protocols."
    }
  ];

  const pillars = [
    {
      number: "01",
      title: "Comprehensive Testing Services",
      description: "Full spectrum of diagnostic testing including clinical chemistry, hematology, microbiology, immunology, molecular diagnostics, and specialized testing with internationally recognized quality standards.",
      image: testingServicesImage
    },
    {
      number: "02",
      title: "Advanced Technology Platform",
      description: "Advanced analyzers, automated systems, molecular diagnostics, digital pathology, and laboratory information systems ensuring accuracy, efficiency, and rapid results delivery.",
      image: techPlatformImage
    },
    {
      number: "03",
      title: "Quality Assurance Excellence",
      description: "Rigorous quality control, proficiency testing, quality certification goals, continuous staff training, and comprehensive result validation to ensure diagnostic accuracy and patient safety.",
      image: qualityAssuranceImage
    },
    {
      number: "04",
      title: "Accessible Service Network",
      description: "Network of collection centers, mobile phlebotomy services, online result access, physician portal integration, and dedicated emergency testing for convenient and timely diagnostics.",
      image: serviceNetworkImage
    }
  ];

  const testingServices = [
    {
      category: "Clinical Chemistry",
      items: ["Comprehensive metabolic panel", "Lipid profile & cardiac markers", "Liver & kidney function tests", "Diabetes monitoring (HbA1c, glucose)", "Thyroid function tests", "Electrolytes & minerals"]
    },
    {
      category: "Hematology & Coagulation",
      items: ["Complete blood count (CBC)", "Blood typing & cross-matching", "Coagulation studies", "Anemia workup", "Hemoglobin electrophoresis", "Bone marrow analysis"]
    },
    {
      category: "Microbiology & Infectious Disease",
      items: ["Culture & sensitivity testing", "HIV, Hepatitis, TB screening", "Malaria rapid tests & microscopy", "COVID-19 PCR & antigen tests", "Sexually transmitted infection panels", "Antibiotic resistance testing"]
    },
    {
      category: "Molecular & Specialty Testing",
      items: ["PCR & genetic testing", "Cancer biomarkers", "Prenatal screening", "Pharmacogenomics", "HPV & cervical cancer screening", "Therapeutic drug monitoring"]
    }
  ];

  const whoWeServe = [
    {
      title: "Hospitals & Clinics",
      description: "Comprehensive laboratory services supporting inpatient, outpatient, and emergency care with rapid turnaround times and extended-hours availability."
    },
    {
      title: "Individual Patients",
      description: "Direct access to diagnostic testing with convenient walk-in service, home sample collection, online booking, and digital result delivery."
    },
    {
      title: "Corporate Health Programs",
      description: "Employee health screenings, wellness panels, occupational health testing, and annual physical exam laboratory packages."
    },
    {
      title: "Research Institutions",
      description: "Specialized testing, biobanking services, clinical trial support, and custom assay development for research programs."
    }
  ];

  const benefits = [
    { title: "Quality Focused", description: "Guided by international quality standards" },
    { title: "Broad Test Menu", description: "Comprehensive testing across specialties" },
    { title: "Rapid Results", description: "Fast turnaround for routine tests" },
    { title: "Online Access", description: "Digital result portal" },
    { title: "Home Collection", description: "Mobile phlebotomy services" },
    { title: "High Accuracy", description: "Rigorous quality control" }
  ];

  const faqs = [
    {
      question: "What types of diagnostic tests do you offer?",
      answer: "We offer a comprehensive range of diagnostic tests including routine tests (CBC, metabolic panels, lipid profiles), specialized chemistry (cardiac markers, hormones, tumor markers), microbiology (cultures, infectious disease screening), molecular diagnostics (PCR, genetic testing), and pathology services. Our laboratories guided by CAP/ISO standards ensure the highest quality standards for all testing."
    },
    {
      question: "How long does it take to get test results?",
      answer: "Turnaround times vary by test complexity. Routine tests (CBC, basic chemistry) are typically available within a few hours. Most standard tests are completed within the same day. Specialized tests like cultures, molecular diagnostics, or send-out tests may take several days. STAT/emergency testing is available during extended hours with results as quickly as possible."
    },
    {
      question: "Do I need a doctor's prescription to get tested?",
      answer: "For most routine health screening tests, you can walk in without a prescription. However, certain specialized tests or insurance-covered tests require a physician's order. Our medical team can also provide consultation and recommend appropriate testing based on your health concerns. We work closely with your healthcare provider to ensure results are properly interpreted."
    },
    {
      question: "How can I access my test results?",
      answer: "Test results are available through multiple channels: secure online patient portal accessible anytime, email delivery (with your consent), SMS notification when results are ready, direct delivery to your ordering physician's portal, and printed copies available at our collection centers. All result delivery complies with patient privacy and confidentiality regulations."
    },
    {
      question: "Do you offer home sample collection services?",
      answer: "Yes. We provide mobile phlebotomy services where trained technicians come to your home or office to collect samples. This service is ideal for elderly patients, those with mobility challenges, corporate wellness programs, or anyone preferring the convenience of home collection. Same-day or scheduled appointments are available across our service areas."
    }
  ];

  const pillarDetails = [
    {
      title: "Comprehensive Testing Services",
      subtitle: "Comprehensive Diagnostic Testing with CAP/ISO Accreditation",
      image: testingServicesImage,
      content: {
        intro: "Our laboratories guided by CAP/ISO standards provide comprehensive diagnostic testing across all clinical specialties. From routine health screenings to specialized molecular diagnostics, we deliver accurate results that support informed medical decisions, early disease detection, and effective treatment monitoring for better patient outcomes.",
        sections: [
          {
            heading: "Clinical Chemistry & Metabolic Testing",
            description: "Comprehensive metabolic panels, lipid profiles, cardiac biomarkers, liver and kidney function tests, diabetes monitoring (HbA1c, glucose), thyroid function tests, and electrolyte analysis. Automated high-throughput analyzers ensure rapid turnaround with exceptional accuracy for critical clinical decision-making."
          },
          {
            heading: "Hematology & Coagulation Studies",
            description: "Complete blood counts (CBC) with differential, blood typing and cross-matching, coagulation profiles (PT, PTT, INR), anemia workups, hemoglobin electrophoresis, and specialized hematology testing. Advanced hematology analyzers with quality control protocols ensure reliable results for diagnosis and treatment monitoring."
          },
          {
            heading: "Microbiology & Infectious Disease Testing",
            description: "Culture and sensitivity testing for bacterial identification, HIV/AIDS screening and monitoring, hepatitis panels, tuberculosis diagnostics, malaria testing, COVID-19 PCR and antigen tests, STI panels, and antibiotic resistance profiling. Rapid detection and accurate pathogen identification guide appropriate antimicrobial therapy."
          },
          {
            heading: "Molecular Diagnostics & Genetics",
            description: "PCR-based testing for infectious diseases, cancer biomarker detection, prenatal genetic screening, pharmacogenomics for personalized medicine, HPV and cervical cancer screening, and therapeutic drug monitoring. Advanced molecular platforms enable precise genetic analysis and targeted treatment strategies."
          },
          {
            heading: "Specialized & Reference Testing",
            description: "Immunology and serology, hormone analysis, tumor markers, toxicology screening, allergy testing, autoimmune disease panels, and rare disease diagnostics. Comprehensive test menu with send-out capabilities to reference laboratories for ultra-specialized testing not available locally."
          }
        ],
        highlights: [
          "Comprehensive diagnostic tests across all specialties",
          "Guided by international quality standards",
          "Routine results within the same day",
          "Specialized molecular diagnostics available",
          "Expert pathologist interpretation",
          "Comprehensive test ordering and result reporting"
        ]
      }
    },
    {
      title: "Advanced Technology Platform",
      subtitle: "Automated Systems for Accuracy & Efficiency",
      image: techPlatformImage,
      content: {
        intro: "Investment in advanced laboratory technology enables us to deliver faster results, greater accuracy, and expanded diagnostic capabilities. Our automated platforms, molecular diagnostics equipment, digital pathology systems, and integrated laboratory information systems represent the latest advancements in diagnostic testing technology.",
        sections: [
          {
            heading: "High-Throughput Automated Analyzers",
            description: "Fully automated chemistry and hematology analyzers process high volumes of samples with exceptional precision and reproducibility. Automated sample handling, barcode tracking, quality control verification, and result validation minimize manual steps, reduce errors, and accelerate turnaround times for urgent patient care needs."
          },
          {
            heading: "Molecular Diagnostics Platforms",
            description: "Advanced PCR systems, next-generation sequencing equipment, and real-time molecular detection platforms enable rapid identification of pathogens, genetic mutations, and biomarkers. Molecular testing provides definitive diagnosis, guides targeted therapies, and monitors treatment response with unparalleled sensitivity and specificity."
          },
          {
            heading: "Digital Pathology & Microscopy",
            description: "High-resolution digital microscopy with image analysis software enhances diagnostic accuracy in hematology, microbiology, and cytology. Digital slide scanning enables remote consultation with pathology experts, quality assurance review, and permanent archiving of microscopic findings for longitudinal patient monitoring."
          },
          {
            heading: "Laboratory Information System (LIS)",
            description: "Comprehensive LIS integrates all laboratory operations including order management, sample tracking, instrument interfaces, result validation, and reporting. Bidirectional connectivity with hospital information systems enables seamless test ordering, automatic result delivery to electronic health records, and real-time status updates for clinicians."
          },
          {
            heading: "Point-of-Care Testing Capabilities",
            description: "Rapid diagnostic testing at collection centers and partner facilities for immediate clinical decision support. POCT devices for glucose, infectious disease screening, cardiac markers, and coagulation monitoring provide results in minutes when speed is critical for patient management."
          }
        ],
        highlights: [
          "Fully automated high-throughput analyzers",
          "Advanced molecular diagnostics platforms",
          "Digital pathology with expert consultation",
          "Integrated laboratory information system",
          "Point-of-care testing capabilities",
          "Continuous technology upgrades"
        ]
      }
    },
    {
      title: "Quality Assurance Excellence",
      subtitle: "high accuracy Through Rigorous Quality Control",
      image: qualityAssuranceImage,
      content: {
        intro: "Diagnostic accuracy is paramount for patient safety and effective medical care. Our comprehensive quality assurance program encompasses CAP/ISO accreditation, daily internal quality control, external proficiency testing, continuous staff training, comprehensive result validation, and robust quality management systems to maintain high accuracy across all testing.",
        sections: [
          {
            heading: "Quality Standards & Compliance",
            description: "Accreditation by the College of American Pathologists (CAP) and ISO 15189 certification confirms our laboratories meet the highest international standards for quality and competence. Rigorous inspection processes verify compliance with strict requirements for personnel qualifications, equipment maintenance, quality control, proficiency testing, and safety protocols."
          },
          {
            heading: "Internal Quality Control Programs",
            description: "Daily quality control testing with commercial control materials verifies accuracy and precision of all analyzers before patient testing begins. Multi-level controls spanning the reportable range detect analytical errors, instrument malfunctions, or reagent problems. Automated QC rules trigger immediate investigation when results fall outside acceptable limits."
          },
          {
            heading: "External Proficiency Testing",
            description: "Participation in CAP and WHO proficiency testing programs provides independent verification of our laboratory's analytical performance. Blind samples from external agencies are tested alongside patient specimens and results compared to peer laboratories worldwide. Excellent performance in proficiency surveys confirms diagnostic accuracy and identifies areas for improvement."
          },
          {
            heading: "Comprehensive Result Validation",
            description: "Multi-level result verification process includes automated delta checks comparing new results to patient's historical values, critical value alerts requiring immediate clinician notification, pathologist review of abnormal findings, and correlation with clinical information. Rigorous validation protocols ensure accurate, clinically relevant results reach physicians."
          },
          {
            heading: "Continuous Staff Training & Competency",
            description: "Ongoing education and competency assessment for all laboratory personnel including medical technologists, pathologists, and phlebotomists. Regular training on new instrumentation, updated procedures, quality requirements, and safety protocols ensures staff maintain expert knowledge and skills. Annual competency verification confirms technical proficiency."
          }
        ],
        highlights: [
          "Laboratories guided by CAP/ISO 15189 standards",
          "Daily internal quality control testing",
          "External proficiency testing participation",
          "Comprehensive result validation protocols",
          "Continuous staff training & competency assessment",
          "high accuracy rate across all testing"
        ]
      }
    },
    {
      title: "Accessible Service Network",
      subtitle: "Convenient Testing with Digital Results Delivery",
      image: serviceNetworkImage,
      content: {
        intro: "Access to diagnostic testing should be convenient, timely, and efficient. Our network of collection centers, mobile phlebotomy services, online test booking, digital result portals, and dedicated emergency testing ensures patients and healthcare providers can access laboratory services when and where needed with minimal barriers.",
        sections: [
          {
            heading: "Collection Center Network",
            description: "Strategically located specimen collection centers in urban and peri-urban areas provide convenient walk-in access for blood draws, urine collection, and other sample types. Extended hours including evenings and weekends accommodate working patients. Comfortable waiting areas, professional phlebotomy staff, and efficient sample processing minimize visit time."
          },
          {
            heading: "Mobile Phlebotomy Services",
            description: "Home and office sample collection services bring laboratory testing directly to patients. Ideal for elderly individuals, those with mobility challenges, pediatric patients, corporate wellness programs, and busy professionals. Trained phlebotomists arrive with all necessary supplies, collect samples according to standard protocols, and transport specimens to the laboratory under appropriate conditions."
          },
          {
            heading: "Online Booking & Digital Portals",
            description: "Patient portal allows online test booking, upload of physician orders, selection of convenient collection location or home visit, and payment processing. After testing, results are delivered to the secure patient portal with SMS/email notifications. Results include reference ranges, flagged abnormalities, and interpretive comments to aid understanding."
          },
          {
            heading: "Physician Portal Integration",
            description: "Bidirectional integration with electronic health record systems enables physicians to order tests electronically, track specimen status in real-time, receive automatic result notifications, and view current and historical results within their workflow. Seamless integration reduces administrative burden and accelerates clinical decision-making."
          },
          {
            heading: "Emergency & STAT Testing",
            description: "Extended-hours availability for urgent diagnostic testing supporting emergency departments, intensive care units, and hospitalized patients. STAT priority processing delivers critical results as quickly as possible for time-sensitive clinical situations. Emergency pathologist on-call provides consultation for complex cases requiring expert interpretation."
          }
        ],
        highlights: [
          "Network of convenient collection centers",
          "Mobile home & office sample collection",
          "Online test booking and payment",
          "Secure digital result delivery portal",
          "Physician EHR integration",
          "dedicated emergency STAT testing available"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Laboratory & Diagnostics" />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <motion.img
          src={heroImage}
          alt="Laboratory technician handling blood samples"
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
              Laboratory & Diagnostics
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Accurate diagnostic testing powered by advanced technology and internationally accredited quality standards
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue/90 transition-colors shadow-lg"
              >
                View Test Menu
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Book a Test Online
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
              Precision Diagnostics You Can Trust
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              From routine health screenings to specialized molecular diagnostics, our <strong>laboratories guided by CAP/ISO standards</strong> deliver <strong>accurate results</strong>, <strong>rapid turnaround</strong>, and <strong>convenient access</strong>. With advanced technology, rigorous quality control, and expert pathologists, we support informed medical decisions and better patient outcomes.
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
              Comprehensive laboratory services from testing to digital results delivery
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

      {/* Laboratory Operations at a Glance - Stats Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Laboratory Operations at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a diagnostic testing provider, we not only perform accurate laboratory tests, but we also provide advanced technology platforms, rigorous quality assurance, home collection services, and digital result delivery to ensure precision diagnostics and better health outcomes.
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

      {/* Testing Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="h-1 w-20 bg-orange mb-4 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-blue mb-4">
              Comprehensive Testing Services
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive range of diagnostic tests across all clinical specialties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingServices.map((category, index) => (
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
              Diagnostic excellence for healthcare providers and patients
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
              Why Choose Pacem Health Laboratory
            </h2>
            <p className="text-xl text-gray-600">
              Diagnostic accuracy backed by international quality standards
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
              Latest updates from our laboratory and diagnostics services
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
                  src="https://images.unsplash.com/photo-1630959300489-63dae3a8240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Laboratory testing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">December 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Working Toward International Laboratory Accreditation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are investing in quality systems and processes as we work toward international laboratory accreditation standards, including proficiency testing and continuous improvement in diagnostic testing.
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
                  src="https://images.unsplash.com/photo-1732400333616-8efa4f385a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Laboratory equipment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">November 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Expanding Molecular Diagnostics Capabilities
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are developing molecular diagnostics capabilities including PCR-based testing to support a broader range of diagnostic needs across our service areas.
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
                  src="https://images.unsplash.com/photo-1733119883210-04f09d5f86df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Clinical diagnostics"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal font-semibold mb-2">October 2025</div>
                <h3 className="text-xl font-serif font-semibold leading-tight text-blue mb-3">
                  Growing Our Home Collection Service Network
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are expanding our mobile phlebotomy services to bring convenient at-home sample collection to more patients, corporate health programs, and care facilities.
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
          src="https://images.unsplash.com/photo-1630959300489-63dae3a8240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdCUyMHRlc3Rpbmd8ZW58MXx8fHwxNzY3ODkxNDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Laboratory background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold leading-tight text-white mb-6">
              Get Tested Today
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book your diagnostic tests online, visit one of our collection centers, or request home sample collection. Fast, accurate results you can trust.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors"
              >
                Book Test Online
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                View Test Menu
              </motion.button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>CAP/ISO Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>24hr Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue" />
                <span>Home Collection</span>
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
                  Book Test Online
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