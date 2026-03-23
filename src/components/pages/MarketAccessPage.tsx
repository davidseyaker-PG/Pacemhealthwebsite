import { motion } from 'motion/react';
import { ArrowRight, Check, X, CheckCircle } from 'lucide-react';
import { ServiceBreadcrumb } from '../ServiceBreadcrumb';
import { useState } from 'react';

// Import hero image
import heroImage from 'figma:asset/2ea91c7969bf0a40f124cfbd09213e708d6fdec9.png';

// Import pillar images
import pillar01Image from 'figma:asset/f45abfec1847afa7a1f8bc034fab148fadc16722.png';
import pillar02Image from 'figma:asset/7edd4d80b0284086cd13369f47740168a67bb57c.png';
import pillar03Image from 'figma:asset/84b6d833e29389c31bee727a23a1e7d6b46078be.png';
import pillar04Image from 'figma:asset/399dcd5edf54b6eb6928c6e0d80fdbd70043d713.png';

// Import compliance badge
import whoGdpBadge from 'figma:asset/7bc150127cbd25d48f1299b3fe81d0b053a9348e.png';
import iso9001Badge from 'figma:asset/ea0f25b348665fff9dba230427b0f2a2a98f4cbc.png';
import licensedDistributorBadge from 'figma:asset/aebd1b590b6d8161955dc8c5228fc2db9b6169fb.png';
import coldChainBadge from 'figma:asset/b926cbc186046071374014dd789f84e83a6c806e.png';
import pharmacovigilanceBadge from 'figma:asset/b2f1a5cab48889b992de4b882bb92e466d4a6b8a.png';
import financialComplianceBadge from 'figma:asset/6e8e250ac3b61b7d53fecfa5897cf91781b71555.png';

// Import partnership image
import partnershipImage from 'figma:asset/a47215a7d43e5093e47d924ef76070cc562f2cba.png';

const keyStats = [
  { 
    value: 'Growing', 
    label: 'Regional Reach',
    description: 'Regional market access across East, West, and Southern Africa through our regional hubs with established distribution networks and regulatory expertise.'
  },
  { 
    value: 'Expanding', 
    label: 'Healthcare Network',
    description: 'Hospitals, clinics, and pharmacies served through our market access partnerships, representing comprehensive coverage across public and private healthcare sectors.'
  },
  { 
    value: '2025', 
    label: 'Program Launch',
    description: 'Strategic partnership program officially launched to support international pharmaceutical and medical device manufacturers entering African healthcare markets.'
  },
  { 
    value: '4', 
    label: 'Partnership Models',
    description: 'Flexible collaboration structures from sales representative to turnkey market entry, designed to match your specific market objectives and investment level.'
  },
];

const pillars = [
  {
    number: '01',
    title: 'Market Entry Strategy & Planning',
    description: 'Comprehensive market analysis, regulatory feasibility, competitive positioning, and phased entry planning.',
    image: pillar01Image,
  },
  {
    number: '02',
    title: 'Product Registration & Regulatory Support',
    description: 'Complete regulatory support from product registration to ongoing compliance and pharmacovigilance.',
    image: pillar02Image,
  },
  {
    number: '03',
    title: 'Sales & Distribution Management',
    description: 'In-country sales teams, distribution infrastructure, and end-to-end commercial operations management.',
    image: pillar03Image,
  },
  {
    number: '04',
    title: 'Market Development & Growth',
    description: 'Healthcare provider engagement, government partnerships, and sustained market growth initiatives.',
    image: pillar04Image,
  },
];

const pillarDetails = [
  {
    title: 'Market Entry Strategy & Planning',
    subtitle: 'Data-Driven Planning for Sustainable African Market Success',
    image: pillar01Image,
    content: {
      intro: 'Successful market entry requires deep understanding of local healthcare systems, regulatory landscapes, competitive dynamics, and customer needs. Our market entry strategy services combine rigorous market research, regulatory feasibility analysis, competitive positioning, and phased entry planning to minimize risk and maximize your chances of sustainable success across African markets.',
      sections: [
        {
          heading: 'Market Opportunity Assessment',
          description: 'Comprehensive analysis of market size, growth potential, unmet needs, competitive landscape, pricing dynamics, and reimbursement environment. We evaluate disease burden, treatment patterns, prescribing behaviors, and healthcare infrastructure to identify your best opportunities and potential challenges before market entry.'
        },
        {
          heading: 'Regulatory Feasibility & Pathway',
          description: 'Detailed assessment of registration requirements, timelines, and success probability across target markets. We evaluate your product dossier against local requirements, identify potential regulatory hurdles, recommend the optimal registration pathway (national vs. regional), and provide realistic timelines and cost estimates for regulatory approval.'
        },
        {
          heading: 'Competitive Positioning & Differentiation',
          description: 'Analysis of existing competitors, their market positions, pricing strategies, and distribution channels. We identify opportunities for differentiation, recommend positioning strategies, estimate potential market share, and develop go-to-market approaches that use your unique value proposition against established and emerging competitors.'
        },
        {
          heading: 'Commercial Model & Partnership Structure',
          description: 'Recommendation of optimal commercial model (direct sales, distribution partnership, market access partnership, or turnkey solution) based on your strategic objectives, investment capacity, and risk tolerance. We design partnership structures, revenue sharing models, and governance frameworks that align incentives and enable sustainable growth.'
        },
        {
          heading: 'Phased Entry Planning',
          description: 'Development of realistic, phased market entry plans with clear milestones, resource requirements, investment timelines, and success metrics. Our entry plans balance speed-to-market with risk management, identify critical path activities, and establish decision points for scaling or pivoting based on early market feedback and performance.'
        }
      ],
      highlights: [
        'Market assessment covering multiple African countries',
        'Regulatory feasibility analysis with success probability',
        'Competitive intelligence from in-market experience',
        'Partnership model recommendation tailored to your goals',
        'Phased entry plan with realistic timelines & milestones',
        'Financial modeling with investment requirements & returns'
      ]
    }
  },
  {
    title: 'Product Registration & Regulatory Support',
    subtitle: 'Complete Regulatory Support from Submission to Approval',
    image: pillar02Image,
    content: {
      intro: 'Product registration is often the most challenging barrier to African market entry. Our regulatory team has deep relationships with national regulatory authorities, strong experience in successful registrations, and expertise navigating complex regulatory requirements across East and West African markets. We handle the entire registration process from dossier preparation to approval, ensuring compliance while minimizing timelines.',
      sections: [
        {
          heading: 'Dossier Preparation & Compilation',
          description: 'Expert preparation of registration dossiers meeting local CTD, ACTD, or country-specific requirements. We compile technical documentation, quality certifications, stability data, bioequivalence studies, and manufacturing site information. Our team ensures your dossier is complete, properly formatted, and addresses local regulatory expectations before submission.'
        },
        {
          heading: 'Regulatory Authority Liaison',
          description: 'Direct communication with regulatory authorities on your behalf throughout the registration process. We submit applications, respond to queries, attend meetings, address deficiency letters, and manage all regulatory correspondence. Our established relationships and local presence enable efficient communication and faster query resolution.'
        },
        {
          heading: 'Registration Timeline Management',
          description: 'Active management of registration timelines to minimize delays and accelerate approval. We track application status, anticipate potential issues, prepare responses in advance, and escalate when appropriate. While we cannot control regulatory authority timelines, our proactive approach is designed to reduce total registration time compared to unmanaged submissions.'
        },
        {
          heading: 'Post-Registration Compliance',
          description: 'Ongoing regulatory maintenance including renewal management, variation submissions, label updates, and safety reporting. We serve as your local responsible person, maintain regulatory files, track renewal deadlines, submit periodic reports, and ensure continuous compliance with evolving regulatory requirements.'
        },
        {
          heading: 'Pharmacovigilance & Safety Reporting',
          description: 'Comprehensive pharmacovigilance services including adverse event reporting, periodic safety update reports (PSURs), risk management plans, and local regulatory authority notifications. We maintain pharmacovigilance systems meeting international standards and local requirements, ensuring patient safety and regulatory compliance.'
        }
      ],
      highlights: [
        'Experience across multiple regulatory bodies',
        'Direct relationships with regulatory authorities',
        'Dossier preparation meeting CTD/ACTD standards',
        'Active timeline management reducing approval time',
        'Post-registration compliance & renewal management',
        'Pharmacovigilance services with safety reporting'
      ]
    }
  },
  {
    title: 'Sales & Distribution Management',
    subtitle: 'In-Country Commercial Operations Driving Revenue Growth',
    image: pillar03Image,
    content: {
      intro: 'Market entry means nothing without effective commercial execution. Our sales and distribution services provide complete in-country commercial operations including dedicated sales teams, GDP-compliant distribution infrastructure, inventory management, order fulfillment, and customer support. We convert market access into revenue through proven commercial processes and established customer relationships.',
      sections: [
        {
          heading: 'GDP-Compliant Distribution Network',
          description: 'Warehousing guided by WHO Good Distribution Practices and distribution across our regional network. Our facilities maintain proper storage conditions, implement first-expiry-first-out (FEFO) systems, track batches and serial numbers, and ensure product integrity from receipt to delivery. Cold chain capability for temperature-sensitive products with dedicated monitoring.'
        },
        {
          heading: 'Dedicated Sales Team',
          description: 'Experienced pharmaceutical sales representatives promoting your products to hospitals, clinics, pharmacies, and prescribers. Our sales team has established relationships across public and private healthcare sectors, understands local prescribing patterns and procurement processes, and delivers consistent messaging aligned with your brand strategy and commercial objectives.'
        },
        {
          heading: 'Inventory & Demand Planning',
          description: 'Data-driven inventory management balancing product availability with working capital efficiency. We forecast demand based on historical sales, market trends, and seasonal patterns, optimize stock levels to prevent stockouts and minimize expiries, manage safety stock for emergency response, and provide regular inventory and sales reporting.'
        },
        {
          heading: 'Order Management & Fulfillment',
          description: 'Efficient order processing from placement to delivery with same-day dispatch for major cities and scheduled distribution to regional areas. We handle customer inquiries, process orders across multiple channels (phone, email, sales reps, online portal), coordinate logistics, manage documentation, and track delivery performance to ensure customer satisfaction.'
        },
        {
          heading: 'Customer Relationship Management',
          description: 'Ongoing customer support including product training, technical support, complaint handling, and relationship development. We build long-term customer partnerships through responsive service, regular communication, problem resolution, and value-added support that differentiates your products and drives customer loyalty and repeat business.'
        }
      ],
      highlights: [
        'Experienced sales team with established customer relationships',
        'Distribution infrastructure guided by WHO GDP standards',
        'Coverage across public & private healthcare sectors',
        'Inventory management optimizing availability & capital',
        'Same-day delivery in major cities with regional coverage',
        'Complete customer support from training to complaints'
      ]
    }
  },
  {
    title: 'Market Development & Growth',
    subtitle: 'Building Sustainable Demand Through Strategic Initiatives',
    image: pillar04Image,
    content: {
      intro: 'Sustainable market success requires continuous market development beyond initial entry and distribution. Our market development services build awareness, educate healthcare providers, establish clinical evidence, secure government partnerships, and drive adoption through strategic initiatives that create long-term competitive advantages and expand market opportunities.',
      sections: [
        {
          heading: 'Healthcare Provider Education',
          description: 'Systematic education programs for physicians, pharmacists, and healthcare professionals covering product indications, dosing, efficacy data, safety profiles, and appropriate use. We organize continuing medical education (CME) events, clinical seminars, hospital presentations, and one-on-one detailing to build clinical confidence and drive evidence-based prescribing and product adoption.'
        },
        {
          heading: 'Clinical Evidence Development',
          description: 'Real-world evidence generation through post-marketing studies, patient registries, case series documentation, and health economic analyses. We partner with leading hospitals and research institutions to generate local clinical data, demonstrate product value in African populations, support formulary inclusion, and build credibility with key opinion leaders and decision-makers.'
        },
        {
          heading: 'Government & Institutional Partnerships',
          description: 'Strategic engagement with ministries of health, national procurement agencies, insurance programs, and donor organizations. We navigate public procurement processes, pursue inclusion in essential medicines lists and treatment guidelines, participate in health policy discussions, and secure contracts with government healthcare programs and donor-funded initiatives.'
        },
        {
          heading: 'Formulary & Guideline Inclusion',
          description: 'Targeted efforts to achieve formulary status at major hospital systems and inclusion in national treatment guidelines. We prepare dossiers demonstrating clinical and economic value, engage with pharmacy and therapeutics committees, provide health economic analyses, and use clinical evidence to secure preferred product status and institutional commitments.'
        },
        {
          heading: 'Market Expansion Initiatives',
          description: 'Proactive initiatives expanding market opportunities including new indication development, adjacent therapeutic area expansion, novel delivery channels, and geographic market penetration. We identify growth opportunities, develop business cases, pilot new approaches, and scale successful initiatives to drive sustained revenue growth and market share expansion.'
        }
      ],
      highlights: [
        'Healthcare provider education with CME programs',
        'Real-world evidence generation with local data',
        'Government partnerships & public procurement access',
        'Formulary inclusion at major hospital systems',
        'Treatment guideline inclusion advocacy',
        'Market expansion identifying new growth opportunities'
      ]
    }
  }
];

const partnershipModels = [
  {
    number: '01',
    title: 'Sales Representative',
    subtitle: 'Market Intelligence & Lead Generation',
    description: 'We promote your products to our customer base while you maintain direct relationships.',
    commitment: 'Light Touch Partnership',
  },
  {
    number: '02',
    title: 'Distribution Partner',
    subtitle: 'Complete Distribution Management',
    description: 'We purchase, stock, and distribute your products across our established network.',
    commitment: 'Operational Partnership',
  },
  {
    number: '03',
    title: 'Market Access Partner',
    subtitle: 'Registration + Distribution + Growth',
    description: 'Comprehensive partnership covering regulatory, commercial, and market development.',
    commitment: 'Strategic Partnership',
  },
  {
    number: '04',
    title: 'Turnkey Market Entry',
    subtitle: 'Full-Service Solution',
    description: 'We handle everything from registration to sustained growth with performance-based terms.',
    commitment: 'Complete Outsourcing',
  },
];

const benefits = [
  {
    title: 'Regional Coverage',
    description: 'Access multiple African markets through our regional hubs with established networks.',
  },
  {
    title: 'Local Expertise',
    description: 'Deep relationships with regulatory authorities, healthcare providers, and procurement organizations.',
  },
  {
    title: 'Integrated Services',
    description: 'Single partner for regulatory, distribution, quality assurance, and compliance needs.',
  },
  {
    title: 'Quality Standards',
    description: 'Guided by WHO GDP and ISO 9001:2015 quality management standards across all operations.',
  },
  {
    title: 'Market Development',
    description: 'Active market building through education, partnerships, and strategic initiatives.',
  },
  {
    title: 'Financial Capability',
    description: 'Strong balance sheet supporting inventory, market investment, and growth.',
  },
];

const idealPartnerPoints = [
  'International pharmaceutical or medical device manufacturer',
  'WHO-PQ, ERP, or stringent regulatory approval',
  'Commitment to African market development',
  'Quality products meeting international standards',
  'Long-term partnership orientation',
];

export function MarketAccessPage() {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);
  const [showPartnershipModels, setShowPartnershipModels] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <ServiceBreadcrumb serviceName="Market Access Services" />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Market Access Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-white mb-6 leading-tight">
              Market Access Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Your strategic partner for entering and growing across African healthcare markets
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                className="px-8 py-4 bg-blue hover:bg-blue-light text-white rounded-md transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-blue transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPartnershipModels(!showPartnershipModels)}
              >
                {showPartnershipModels ? 'Hide Partnership Models' : 'View Partnership Models'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* From Export to Partnership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue leading-tight">
              We Don't Just Move Product.<br />We Build Markets.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 space-y-8"
          >
            <p className="text-gray-700 text-xl leading-relaxed text-center">
              Success in African healthcare markets requires more than shipping products and hoping for sales. It demands local presence, regulatory expertise, distribution networks, and trusted relationships.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-orange">
              <p className="text-gray-700 text-lg leading-relaxed">
                Pacem Health offers <span className="font-bold text-blue">strategic partnerships</span> that combine your effective products with our deep market knowledge, established infrastructure, and deep experience. We build sustainable market presence, develop customer relationships, ensure regulatory compliance, and drive long-term growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Access Operations at a Glance - Stats Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-4 leading-tight">
              Market Access Operations at a Glance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a strategic market access partner, we not only facilitate market entry, but we also provide comprehensive regulatory support, distribution infrastructure, and market development services that enable international pharmaceutical and medical device manufacturers to succeed across African healthcare markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStats.map((stat, index) => (
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
                <div className="text-gray-600 font-semibold mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-500">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars Section - Visual Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-4 leading-tight">
              Four Pillars of Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive pharmaceutical distribution from sourcing to delivery
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
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className={`w-full h-full object-cover ${index === 1 ? 'object-top' : index === 2 ? 'object-[center_20%]' : index === 3 ? 'object-[center_30%]' : ''}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-blue mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPillar(index)}
                    className="bg-blue text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue/90 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models - Clean Cards */}
      {showPartnershipModels && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block relative mb-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue leading-tight">
                  Partnership Models
                </h2>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-orange" />
              </div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-8">
                Flexible structures designed to meet your market objectives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-8 border-t-4 border-orange hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl font-bold text-orange/30">
                      {model.number}
                    </div>
                    <div className="px-3 py-1 bg-blue/10 text-blue text-xs font-semibold rounded-full">
                      {model.commitment}
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-blue mb-2 leading-tight">
                    {model.title}
                  </h3>
                  <p className="text-orange text-sm font-semibold uppercase tracking-wide mb-4">
                    {model.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {model.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <button className="px-8 py-4 bg-navy hover:bg-navy/90 text-white rounded-md transition-all duration-300 inline-flex items-center gap-2">
                Compare All Models
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Key Benefits - Icon Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-4 leading-tight">
              Why Partner With Us
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive capabilities delivering real results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-navy"
              >
                <h3 className="text-xl font-serif font-semibold text-blue mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Program - Split Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[350px] rounded-lg overflow-hidden"
            >
              <img
                src={partnershipImage}
                alt="Partnership Program"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue mb-6 leading-tight">
                Strategic Partnership Program
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                Pacem Health offers purpose-built infrastructure to support international pharmaceutical and medical device manufacturers entering African healthcare markets. We seek strategic partners with WHO-PQ, ERP, or stringent regulatory approvals who offer quality products meeting international standards and share our commitment to long-term African market development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Standards - Compact */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              Quality & Compliance
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Meeting international standards for pharmaceutical distribution
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              {
                title: 'WHO GDP',
                image: whoGdpBadge
              },
              {
                title: 'ISO 9001:2015',
                image: iso9001Badge
              },
              {
                title: 'Licensed Distributor',
                image: licensedDistributorBadge
              },
              {
                title: 'Cold Chain',
                image: coldChainBadge
              },
              {
                title: 'Pharmacovigilance',
                image: pharmacovigilanceBadge
              },
              {
                title: 'Financial Compliance',
                image: financialComplianceBadge
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden bg-white shadow-lg">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-sm font-semibold">{cert.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Strong */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1593424561615-527232592eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaGVhbHRoY2FyZSUyMGZhY2lsaXR5fGVufDF8fHx8MTc2Nzg0MDA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Partner with us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/80" />
            </div>

            <div className="relative py-20 px-6 md:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                  Ready to Enter African Markets?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Let's discuss how we can accelerate your growth across Africa with our integrated market access platform.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    className="px-8 py-4 bg-orange hover:bg-orange/90 text-white rounded-md transition-all duration-300 inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-blue transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Partnership Guide
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
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
                  <h2 className="text-4xl font-serif font-bold text-white mb-2 leading-tight">
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
              <div className="space-y-6 mb-8">
                {pillarDetails[selectedPillar].content.sections.map((section, index) => (
                  <div key={index} className="border-l-4 border-orange pl-6">
                    <h3 className="text-xl font-serif font-semibold text-blue mb-3 leading-tight">
                      {section.heading}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="bg-teal/5 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-serif font-semibold text-blue mb-4 leading-tight">Key Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pillarDetails[selectedPillar].content.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue/90 transition-colors"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPillar(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
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