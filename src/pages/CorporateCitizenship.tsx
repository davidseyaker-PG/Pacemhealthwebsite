import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, ChevronDown, CheckCircle, Users, Heart, Leaf, Target } from "lucide-react";
import heroImage from "../assets/2e170ddaa1a8a9649a2983449b47672843abb7c3.png";
import accessImage from "../assets/c65ddf11f55990fdb08536f163ce1f86697a1266.png";
import capacityImage from "../assets/5492ae38758d4197e3b907b48acad7185b4a838f.png";
import peopleImage from "../assets/eaa642f4b240a653fbb36e871a347a37c4369d46.png";
import sustainabilityImage from "../assets/012e7c9fb4c8c1280093a37e8d7cc19360ff1d86.png";

export default function CorporateCitizenship() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const pillars = [
    {
      id: "access",
      icon: Heart,
      number: "01",
      title: "Expand Healthcare Access",
      subtitle: "Bridging Pharmaceutical Gaps Across Africa",
      description: "Making quality medicines and healthcare services accessible to under-resourced communities across the African continent.",
      image: accessImage,
      stats: {
        value: "750K+",
        label: "Patients Impacted Annually by 2027"
      },
      approach: [
        {
          title: "Our Role in African Healthcare",
          content: "As a trusted partner to ministries of health, international pharmaceutical companies, and healthcare providers across 15+ African countries, we bridge critical gaps in pharmaceutical access and healthcare delivery. Every day without essential medicines means lives at risk—we work tirelessly to ensure quality healthcare products reach those who need them most, when they need them."
        },
        {
          title: "Our Capabilities",
          content: "Since our founding, we've built comprehensive capabilities spanning the entire pharmaceutical value chain—from regulatory navigation and product registration across multiple African markets, to cold chain logistics ensuring vaccine and medicine integrity, to last-mile distribution reaching rural communities. Our expertise in navigating Africa's diverse regulatory landscape, combined with deep local knowledge, enables us to accelerate market access for life-saving treatments while maintaining the highest quality standards."
        },
        {
          title: "Technology and Progress",
          content: "We use advanced technology to overcome Africa's unique healthcare challenges. Our digital cold chain monitoring systems ensure temperature-sensitive vaccines maintain efficacy from manufacturer to patient. Real-time inventory tracking optimizes stock levels and prevents stockouts. Mobile health integration enables remote communities to access pharmaceutical services. Every innovation is designed to save time, reduce waste, and ultimately save lives across the continent."
        },
        {
          title: "Community Health Partnerships",
          content: "Sustainable healthcare access requires strong community partnerships. We collaborate with local health workers, community health volunteers, and traditional leaders to understand unique needs and build culturally appropriate solutions. Our community engagement programs educate families on medication adherence, disease prevention, and proper medicine storage—empowering communities to take charge of their health outcomes."
        }
      ]
    },
    {
      id: "capacity",
      icon: Users,
      number: "02",
      title: "Build Local Capacity",
      subtitle: "Strengthening African Health Systems for Lasting Impact",
      description: "Developing local expertise, infrastructure, and capabilities to create self-sustaining healthcare systems across Africa.",
      image: capacityImage,
      stats: {
        value: "3,200+",
        label: "Healthcare Professionals Trained by 2027"
      },
      approach: [
        {
          title: "Professional Training Programs",
          content: "Our WHO-certified training programs build critical competencies in Good Distribution Practice (GDP), Good Manufacturing Practice (GMP), pharmacovigilance, and regulatory affairs. We don't just deliver training—we develop African healthcare leaders who will strengthen their countries' health systems for decades to come. Over 3,200 professionals across 15+ countries have completed our certification programs, bringing international quality standards to their organizations and communities."
        },
        {
          title: "Infrastructure Development",
          content: "Sustainable healthcare requires robust infrastructure. We invest in cold chain facilities, quality-controlled warehouses, and distribution networks that meet international standards while adapting to local contexts. Our infrastructure partnerships help governments and private sector players build the physical foundations for reliable pharmaceutical supply chains—from capital cities to remote rural areas."
        },
        {
          title: "Regulatory System Strengthening",
          content: "Strong regulatory frameworks protect patients and build confidence in healthcare systems. We partner with African regulatory authorities to strengthen their capacity through knowledge transfer, technical assistance, and quality system development. Our regulatory capacity-building initiatives help countries achieve WHO maturity level advancements, enabling them to better protect public health and attract pharmaceutical investment."
        },
        {
          title: "Knowledge Transfer and Mentorship",
          content: "Lasting impact comes from transferring knowledge, not creating dependency. Our mentorship programs pair experienced international experts with emerging African healthcare leaders, fostering skills development, confidence building, and professional networks. We believe in growing local talent who understand both global best practices and local realities—creating solutions that truly work in African contexts."
        }
      ]
    },
    {
      id: "people",
      icon: Target,
      number: "03",
      title: "Empower Our People",
      subtitle: "Cultivating Excellence Through Our Values and Culture",
      description: "Creating an exceptional workplace where diverse talent thrives, grows, and delivers impact across Africa.",
      image: peopleImage,
      stats: {
        value: "92%",
        label: "Local Employment Target by 2026"
      },
      approach: [
        {
          title: "Our Core Values",
          content: "Our values—Excellence, Partnership, Innovation, and Impact—are more than words on a wall. They guide every decision, shape our culture, and inspire how we serve African communities. Excellence drives our commitment to quality in everything we do. Partnership reflects our collaborative approach with clients, communities, and colleagues. Innovation pushes us to find better solutions to healthcare challenges. Impact reminds us that our work ultimately saves and improves lives."
        },
        {
          title: "Local Talent Development",
          content: "We believe Africa's healthcare future depends on African leadership. Our commitment to 92% local employment isn't just a metric—it's a philosophy. We actively recruit, develop, and promote African talent into leadership roles, providing career pathways from entry-level positions to executive leadership. Our talent development programs include technical training, leadership development, international exposure, and succession planning that ensures our impact continues for generations."
        },
        {
          title: "Employee Growth and Engagement",
          content: "Engaged employees deliver exceptional results. We invest in continuous learning opportunities, from regulatory certifications to MBA sponsorships. Our employee engagement initiatives include regular feedback mechanisms, transparent communication, recognition programs, and career advancement opportunities. We measure engagement annually and act on insights—because our people's growth directly correlates with our ability to improve African healthcare."
        },
        {
          title: "Diversity, Inclusion, and Belonging",
          content: "Our strength comes from our diversity—diverse nationalities, cultures, perspectives, and experiences. We foster an inclusive environment where every team member feels valued, heard, and empowered to contribute their best. Our diversity initiatives span gender equity, cultural inclusion, disability accommodation, and equitable opportunity. We're building a workplace that reflects the rich diversity of the continent we serve."
        },
        {
          title: "Employee Well-Being and Safety",
          content: "Healthy, safe employees deliver better healthcare outcomes. We prioritize comprehensive health benefits, mental health support, safe working conditions, and work-life balance. Our occupational health and safety programs exceed local requirements, reflecting our belief that every employee deserves to return home safely every day. We measure safety performance rigorously and continuously improve our practices."
        },
        {
          title: "Community Engagement",
          content: "We encourage employees to give back to communities where we live and work. Our community engagement programs include paid volunteer time, company-matched charitable donations, health awareness campaigns, and skills-based volunteering. When our employees thrive personally and professionally, our communities thrive too."
        }
      ]
    },
    {
      id: "planet",
      icon: Leaf,
      number: "04",
      title: "Operate Sustainably",
      subtitle: "Environmental Responsibility and Community Stewardship",
      description: "Protecting the environment and supporting communities through responsible operations and sustainable practices.",
      image: sustainabilityImage,
      stats: {
        value: "35%",
        label: "Carbon Emissions Reduction by 2030"
      },
      approach: [
        {
          title: "Climate Action and Energy Efficiency",
          content: "Operating across 15+ African countries with extensive cold chain infrastructure, we recognize our environmental responsibility. We're committed to reducing our carbon footprint through energy-efficient cold storage technologies, solar power integration at warehouses and distribution centers, optimized transport routing to minimize fuel consumption, and continuous measurement of our greenhouse gas emissions. Our goal: 35% reduction in operational carbon emissions by 2030 from our 2023 baseline."
        },
        {
          title: "Sustainable Supply Chain Management",
          content: "Our environmental commitment extends throughout our supply chain. We partner with suppliers who share our sustainability values, prioritize recyclable and biodegradable packaging materials, minimize single-use plastics in our operations, and optimize inventory management to reduce waste. We conduct regular supplier assessments on environmental practices and work collaboratively to improve sustainability across the pharmaceutical value chain."
        },
        {
          title: "Pharmaceutical Waste Management",
          content: "Proper pharmaceutical waste disposal protects communities and ecosystems from contamination. We implement rigorous waste segregation protocols, partner with certified waste disposal providers, educate healthcare facilities on safe disposal practices, and support national pharmaceutical waste management frameworks. Our waste management systems ensure expired or damaged medicines never contaminate water supplies or harm communities."
        },
        {
          title: "Water Stewardship",
          content: "Clean water is fundamental to health. While our operations don't require significant water use, we invest in community water access initiatives, support clean water projects in under-resourced areas, protect local water sources from pharmaceutical contamination, and partner with NGOs delivering clean water solutions. We recognize that healthcare improvements mean little without access to safe water."
        },
        {
          title: "Environmental Community Partnerships",
          content: "We engage communities in environmental stewardship through tree planting initiatives, environmental health education programs, support for local conservation efforts, and employee environmental volunteer programs. Our partnerships recognize that environmental health and human health are inseparable—healthy ecosystems support healthy communities."
        }
      ]
    }
  ];

  const publicGoals = [
    {
      category: "Healthcare Access",
      goals: [
        {
          metric: "Patients Reached",
          target: "750,000 patients annually by 2027",
          current: "Launch Phase - 2026",
          progress: 0,
          status: "launching"
        },
        {
          metric: "Market Readiness",
          target: "15 African countries by 2027",
          current: "5 markets approved",
          progress: 33,
          status: "on-track"
        },
        {
          metric: "Distribution Infrastructure",
          target: "40% rural coverage by 2027",
          current: "Infrastructure development underway",
          progress: 25,
          status: "on-track"
        }
      ]
    },
    {
      category: "Capacity Building",
      goals: [
        {
          metric: "Training Programs Developed",
          target: "15 certification programs by 2026",
          current: "8 programs designed",
          progress: 53,
          status: "on-track"
        },
        {
          metric: "Professionals Trained",
          target: "3,200 by 2027",
          current: "Pilot cohorts - 2026",
          progress: 0,
          status: "launching"
        },
        {
          metric: "Regulatory Partnerships",
          target: "20 authority collaborations by 2027",
          current: "12 MOUs signed",
          progress: 60,
          status: "on-track"
        }
      ]
    },
    {
      category: "Our People",
      goals: [
        {
          metric: "Local Employment",
          target: "92% by 2026",
          current: "88%",
          progress: 96,
          status: "on-track"
        },
        {
          metric: "Leadership Diversity",
          target: "50% women in leadership by 2028",
          current: "42%",
          progress: 84,
          status: "on-track"
        },
        {
          metric: "Employee Engagement",
          target: "85 score by 2026",
          current: "78",
          progress: 92,
          status: "on-track"
        }
      ]
    },
    {
      category: "Environmental Sustainability",
      goals: [
        {
          metric: "Carbon Emissions Reduction",
          target: "35% reduction by 2030",
          current: "Baseline measurement complete",
          progress: 15,
          status: "in-progress"
        },
        {
          metric: "Renewable Energy",
          target: "60% renewable by 2029",
          current: "Solar installations at 3 facilities",
          progress: 20,
          status: "in-progress"
        },
        {
          metric: "Waste Management Systems",
          target: "80% waste diversion by 2028",
          current: "Protocols established",
          progress: 35,
          status: "on-track"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative curved background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0C200 150 400 200 800 100V600H0V0Z" fill="rgba(74, 159, 216, 0.1)" />
              <path d="M0 100C300 250 500 150 800 300V600H0V100Z" fill="rgba(0, 163, 173, 0.08)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-1 w-20 bg-orange mb-6" />
              <h1 className="text-6xl lg:text-7xl font-serif font-extrabold text-white mb-6 leading-tight">
                Our Commitment to Corporate Citizenship
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Our ESG strategy integrates environmental stewardship, social responsibility, and ethical governance into everything we do—improving African healthcare access, building local capacity, empowering our people, and protecting the planet for future generations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue/90 transition-colors"
              >
                View Our Impact Report
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <img
                src={heroImage}
                alt="Healthcare team serving African communities"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guided by Purpose */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-6">
              Guided by Purpose: Improving Lives Across Africa
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our corporate citizenship approach goes beyond compliance—it's about creating lasting, positive impact on the communities we serve. We operate with integrity, transparency, and accountability, measuring our progress against internationally recognized frameworks and holding ourselves to the highest standards.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-serif font-semibold leading-tight text-navy mb-6">Our Framework Alignment</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "UN SDG 3", desc: "Good Health & Well-Being" },
                  { name: "UN SDG 10", desc: "Reduced Inequalities" },
                  { name: "UN SDG 17", desc: "Partnerships for Goals" },
                  { name: "GRI Standards", desc: "Global Reporting" }
                ].map((framework, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl font-bold text-navy mb-2">{framework.name}</p>
                    <p className="text-sm text-gray-600">{framework.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors inline-flex items-center gap-2"
            >
              View Our Public Goals
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-4">
              Four Pillars of Corporate Citizenship
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to creating sustainable, positive impact across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="h-2 bg-gradient-to-r from-blue to-teal" />
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-semibold leading-tight text-navy mb-6">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-navy">{pillar.stats.value}</div>
                        <div className="text-sm text-gray-600">{pillar.stats.label}</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue/90 transition-colors"
                        onClick={() => {
                          const element = document.getElementById(`pillar-${pillar.id}`);
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Pillar Sections */}
      {pillars.map((pillar, pillarIndex) => {
        const IconComponent = pillar.icon;
        return (
          <section
            key={pillar.id}
            id={`pillar-${pillar.id}`}
            className={pillarIndex % 2 === 0 ? "py-20 bg-white" : "py-20 bg-gray-50"}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Pillar Header with Image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-navy mb-4">
                    {pillar.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {pillar.subtitle}
                  </p>
                  <div className="bg-navy/5 rounded-xl p-6">
                    <div className="text-4xl font-bold text-navy mb-2">{pillar.stats.value}</div>
                    <div className="text-gray-600">{pillar.stats.label}</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Our Approach Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <h3 className="text-3xl font-serif font-semibold leading-tight text-navy text-center mb-8">Our Approach</h3>
                <div className="space-y-4">
                  {pillar.approach.map((item, index) => {
                    const accordionId = `${pillar.id}-${index}`;
                    const isOpen = openAccordion === accordionId;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                      >
                        <button
                          onClick={() => toggleAccordion(accordionId)}
                          className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-semibold text-navy text-left">
                            {item.title}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                          </motion.div>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                            {item.content}
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Our Public Goals */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white mb-4">
              Our Public Goals: Measuring Impact
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We hold ourselves accountable through measurable, time-bound goals aligned with our corporate citizenship pillars
            </p>
          </motion.div>

          <div className="space-y-12">
            {publicGoals.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="text-2xl font-serif font-semibold leading-tight text-navy mb-6">{category.category}</h3>
                <div className="space-y-6">
                  {category.goals.map((goal, goalIndex) => (
                    <div key={goalIndex} className="border-l-4 border-orange pl-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-navy text-lg mb-1">{goal.metric}</h4>
                          <p className="text-gray-600 text-sm">Target: {goal.target}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-navy">{goal.current}</div>
                          <div className={`text-sm font-semibold ${
                            goal.status === 'launching' ? 'text-navy' : 'text-teal'
                          }`}>
                            {goal.progress > 0 ? `${goal.progress}% Complete` : 'Launching 2026'}
                          </div>
                        </div>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goal.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-2 rounded-full ${
                            goal.status === 'launching' ? 'bg-blue' : 'bg-teal'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue/90 transition-colors inline-flex items-center gap-2"
            >
              Download Full ESG Performance Data
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592392821486-71f028a00581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaGVhbHRoY2FyZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODQ0MzYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Healthcare team collaboration"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white mb-6">
              Join Us in Building Healthier Communities
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Our commitment to corporate citizenship reflects our belief that business success and social impact go hand in hand. Together, we're creating a healthier, more equitable Africa.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors shadow-lg"
              >
                Partner With Us
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                View Careers
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}