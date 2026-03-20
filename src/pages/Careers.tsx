import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  Package, 
  Stethoscope, 
  Users, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Target,
  Heart,
  Award,
  TrendingUp,
  Shield,
  Sparkles,
  MessageCircle,
  Mail,
  CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'wouter';
import AdaChatDemo from '../components/AdaChatDemo';
import heroImage from 'figma:asset/bd46e08f5be58c554628f026e784538d8e4ce2f0.png';
import clinicalTeamImage from 'figma:asset/5d19dfe343e6afa70426c031ecae84547745e8ea.png';
import technologyTeamImage from 'figma:asset/6f7b074f12ea0e17657b24959b96b4ecfc415b2b.png';
import leadershipTeamImage from 'figma:asset/4dc0563245f8269c4b06ecab14bd4078bcfc53d2.png';

export default function Careers() {
  const [jobSearch, setJobSearch] = useState({ keyword: '', location: '' });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job search:', jobSearch);
    alert('Job search functionality coming soon!');
  };

  const jobCategories = [
    {
      icon: Package,
      title: 'Distribution Operations',
      description: 'Supply chain, logistics, warehouse management',
      color: 'bg-blue',
      count: 'View Roles'
    },
    {
      icon: Stethoscope,
      title: 'Clinical & Pharmacy',
      description: 'Pharmacists, clinical advisors, pharmacy operations',
      color: 'bg-teal',
      count: 'View Roles'
    },
    {
      icon: Users,
      title: 'Health Systems Advisory',
      description: 'Healthcare consulting, system strengthening',
      color: 'bg-orange',
      count: 'View Roles'
    },
    {
      icon: Code,
      title: 'Technology & Innovation',
      description: 'Digital health, software engineering, data analytics',
      color: 'bg-navy',
      count: 'View Roles'
    },
    {
      icon: Briefcase,
      title: 'Business Operations',
      description: 'Finance, HR, legal, procurement, administration',
      color: 'bg-blue',
      count: 'View Roles'
    },
    {
      icon: GraduationCap,
      title: 'Training & Education',
      description: 'Healthcare training, capacity building, curriculum development',
      color: 'bg-teal',
      count: 'View Roles'
    },
    {
      icon: Globe,
      title: 'Regional & Country Leadership',
      description: 'Country directors, regional managers, market leads',
      color: 'bg-orange',
      count: 'View Roles'
    },
    {
      icon: Target,
      title: 'Program Management',
      description: 'Project management, partnership coordination',
      color: 'bg-navy',
      count: 'View Roles'
    }
  ];

  const programs = [
    {
      title: 'Healthcare Development Program',
      description: 'Build sustainable healthcare systems in underserved communities across Africa',
      icon: Heart,
      color: 'from-blue to-teal',
      link: '/programs/healthcare-development'
    },
    {
      title: 'Pacem Excellence Program',
      description: 'Advanced training for healthcare professionals in quality management and best practices',
      icon: Award,
      color: 'from-orange to-orange/80',
      link: '/programs/pacem-excellence'
    },
    {
      title: 'Pediatric Pharmacy Program',
      description: 'Specialized program for improving child health outcomes through pharmaceutical care',
      icon: Sparkles,
      color: 'from-teal to-blue',
      link: '/programs/pediatric-pharmacy'
    },
    {
      title: 'PERT Initiative',
      description: 'Pandemic Emergency Response Training for rapid deployment and crisis management',
      icon: Shield,
      color: 'from-navy to-blue',
      link: '/programs'
    },
    {
      title: 'Social Enterprise Program',
      description: 'Community-based healthcare solutions that create sustainable local impact',
      icon: Users,
      color: 'from-orange to-teal',
      link: '/programs'
    }
  ];

  const whyPacem = [
    {
      title: 'Culture & Values',
      description: 'Mission-driven work that transforms lives. Innovation and creative problem-solving encouraged. Diverse perspectives valued and celebrated. Collaborative environment focused on impact.'
    },
    {
      title: 'Benefits & Growth',
      description: 'Competitive compensation packages. Comprehensive health and wellness benefits. Professional development and learning opportunities. Flexible working arrangements.'
    },
    {
      title: 'Inclusion & Belonging',
      description: 'Diverse voices valued at all levels. Equity and inclusion embedded in our culture. Mentorship programs and career support. Employee resource groups (ERGs).'
    },
    {
      title: 'Our Hiring Process',
      description: 'Transparent and efficient recruitment. Candidate-friendly application process. Regular communication and feedback. Fair and equitable selection practices.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <ImageWithFallback
            src={heroImage}
            alt="Healthcare Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl lg:text-7xl font-serif text-white mb-6">
              Build Health Ecosystems That Transform Africa
            </h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join a team of passionate healthcare professionals, innovators, and changemakers 
              working to strengthen healthcare systems across the African continent.
            </p>

            {/* Job Search */}
            <motion.form
              onSubmit={handleSearch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-3 shadow-2xl max-w-3xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    value={jobSearch.keyword}
                    onChange={(e) => setJobSearch({ ...jobSearch, keyword: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-blue text-navy placeholder-gray-400"
                  />
                </div>
                <div className="md:col-span-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Country or city"
                    value={jobSearch.location}
                    onChange={(e) => setJobSearch({ ...jobSearch, location: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-blue text-navy placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Search Jobs
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Find Your Impact at Pacem Health
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore career opportunities across our diverse range of departments and specialties. 
              Every role contributes to our mission of transforming healthcare in Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => {
              const categorySlug = category.title.replace(/\s+/g, '').replace(/&/g, '');
              let href = '#';
              
              if (categorySlug === 'DistributionOperations') {
                href = '/careers/distribution-operations';
              } else if (categorySlug === 'ClinicalPharmacy') {
                href = '/careers/clinical-pharmacy';
              } else if (categorySlug === 'HealthSystemsAdvisory') {
                href = '/careers/health-systems-advisory';
              } else if (categorySlug === 'TechnologyInnovation') {
                href = '/careers/technology-innovation';
              } else if (categorySlug === 'BusinessOperations') {
                href = '/careers/business-operations';
              } else if (categorySlug === 'TrainingEducation') {
                href = '/careers/training-education';
              } else if (categorySlug === 'RegionalCountryLeadership') {
                href = '/careers/regional-country-leadership';
              } else if (categorySlug === 'ProgramManagement') {
                href = '/careers/program-management';
              }
              
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={href}>
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                      <h3 className="text-xl font-bold text-navy mb-2">{category.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                      <div className="text-blue font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        {category.count}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-orange text-sm font-bold tracking-wide mb-4">STRATEGIC PROGRAMS</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Join Our Impact Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of specialized programs that are reshaping healthcare delivery across Africa. 
              These initiatives offer unique opportunities for professional growth and meaningful impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={program.link}>
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group h-full">
                      <h3 className="text-xl font-bold text-navy mb-2">{program.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                      <div className="text-blue font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* More Programs Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group h-full flex items-center justify-center text-center"
            >
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">More Programs Coming Soon</h3>
                <p className="text-gray-600 text-sm">Stay tuned for new opportunities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Pacem Health */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Why Pacem Health
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a company where your work matters, your growth is supported, and your voice is heard. 
              We're building more than a business—we're building a culture of impact and belonging.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPacem.map((section, index) => {
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 border-t-4 border-blue shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-serif text-navy mb-4">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Career Pathways at Pacem Health
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're just starting your career or bringing years of expertise, we have 
              pathways designed to help you grow and make an impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Early Careers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 border-t-4 border-blue shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-3xl font-serif text-navy mb-6">Early Careers</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Launch your career in global health with rotational programs, mentorship, and 
                hands-on experience across our operations in multiple African countries.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Graduate trainee programs in supply chain, pharmacy, and health systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Internship opportunities for students and recent graduates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Cross-functional rotations to build diverse skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Structured mentorship and professional development</span>
                </li>
              </ul>

              <button className="text-blue hover:text-blue/80 font-semibold flex items-center gap-2 group">
                Explore Early Career Opportunities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Experienced Professionals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 border-t-4 border-blue shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-3xl font-serif text-navy mb-6">Experienced Professionals</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bring your expertise to scale. Lead strategic initiatives, mentor the next generation, 
                and drive innovations that strengthen healthcare systems across Africa.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Leadership roles in operations, advisory, and strategic programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Technical specialist positions in pharmacy, health systems, and technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Country and regional management opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Executive development and continuous learning</span>
                </li>
              </ul>

              <button className="text-blue hover:text-blue/80 font-semibold flex items-center gap-2 group">
                Explore Professional Opportunities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team - Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-orange text-sm font-bold tracking-wide mb-4">CREATING A CULTURE OF IMPACT</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Meet Team Pacem Health
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of healthcare professionals, innovators, and changemakers is united 
              by a shared commitment to transforming healthcare across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-96">
                <ImageWithFallback
                  src={clinicalTeamImage}
                  alt="Healthcare Professionals"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-serif mb-2">Clinical Excellence</h3>
                  <p className="text-white/80 text-sm">Pharmacists and clinical advisors ensuring quality care</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-96">
                <ImageWithFallback
                  src={technologyTeamImage}
                  alt="Technology Innovation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-serif mb-2">Digital Innovation</h3>
                  <p className="text-white/80 text-sm">Technology teams building the future of healthcare</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-96">
                <ImageWithFallback
                  src={leadershipTeamImage}
                  alt="Business Team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-serif mb-2">Strategic Leadership</h3>
                  <p className="text-white/80 text-sm">Business leaders driving sustainable growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ada Digital Assistant */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 lg:h-full bg-gradient-to-br from-blue/5 to-teal/5 flex items-center justify-center p-8">
                <AdaChatDemo />
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8 text-blue" />
                  <h2 className="text-3xl font-serif text-navy">Introducing Ada, Our Digital Assistant</h2>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ada, Pacem Health's virtual assistant, is here to assist you in your candidate journey. 
                  You may hear from her via text or email to help you schedule an interview with our team.
                </p>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  You are also able to chat with her directly here on our career site to learn more about 
                  our culture and hiring process, find your next opportunity, as well as apply to select open roles!
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  Chat with Ada
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Talent Community CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Want to be a part of Team Pacem Health?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join our Talent Community to stay connected. Receive job alerts, company updates, 
              and invitations to exclusive events.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-3 text-lg"
            >
              <Mail className="w-6 h-6" />
              JOIN OUR TALENT COMMUNITY
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif mb-4">
              Questions About Careers at Pacem Health?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Our talent team is here to help. Reach out with any questions about opportunities, 
              our culture, or the application process.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                Contact Our Talent Team
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}