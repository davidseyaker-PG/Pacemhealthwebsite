import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import universityPartnershipImg from 'figma:asset/8f7e2d6bc1728d4c75289e7e6ae1935bcf367806.png';
import companyLaunchImg from 'figma:asset/02d42d707511272b88d4c2c144be611ba1600a10.png';
import communityHealthImg from 'figma:asset/1ccf00b90b7dea706dbcbc91a60729367f043716.png';
import marketEntryImg from 'figma:asset/c88e4fb775957e420c8bfcf1cf1554fc5bfd3581.png';
import universityNairobiImg from 'figma:asset/c279300f49096f0a581896f907345ac2a38a6e43.png';
import engineeringBuildingImg from 'figma:asset/ba3057cc8d8956d976391f87932cbf5a5e97c790.png';
import campusModernImg from 'figma:asset/8c7ac8c4253ebeb010bdb9993db78bb8681914bd.png';

export default function UniversityPartnership() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const articleImages = [
    universityPartnershipImg,
    universityNairobiImg,
    engineeringBuildingImg,
    campusModernImg
  ];

  const relatedStories = [
    {
      title: 'Pacem Health Officially Launches to Transform African Healthcare Systems',
      excerpt: 'U.S.-based global health innovation company announces official launch.',
      image: companyLaunchImg,
      link: '/stories/company-launch'
    },
    {
      title: 'Community Health Initiative Reaches 100,000 Patients Milestone',
      excerpt: 'Celebrating impact across rural and underserved communities.',
      image: communityHealthImg,
      link: '/stories/community-milestone'
    },
    {
      title: 'Pacem Health Announces Africa Market Entry Strategy',
      excerpt: 'Strategic roadmap outlines phased approach to entering priority African markets.',
      image: marketEntryImg,
      link: '/stories/market-entry'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % articleImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + articleImages.length) % articleImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Title and Meta */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/news-stories">
                <div className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2 cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                  Back to News
                </div>
              </Link>

              <div className="text-orange text-sm font-bold tracking-wide mb-4">PARTNERSHIP ANNOUNCEMENT</div>
              
              <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
                Strategic Partnership with Leading African Universities
              </h1>

              <div className="flex items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>March 20, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>5 min read</span>
                </div>
              </div>

              <button className="text-white hover:text-blue flex items-center gap-2 transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="font-semibold">Share</span>
              </button>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src={articleImages[0]}
                alt="University Partnership"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Pacem Health has announced strategic partnerships with five leading medical universities across East 
              Africa to strengthen pharmaceutical education, clinical training, and research capacity in the region.
            </p>

            {/* Partner Institutions Box */}
            <div className="bg-gray-50 rounded-xl p-8 my-12 border-l-4 border-blue">
              <h3 className="text-2xl font-serif text-navy mb-6">Partner Institutions</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span>University of Nairobi School of Pharmacy (Kenya)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span>Muhimbili University of Health and Allied Sciences (Tanzania)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span>Makerere University College of Health Sciences (Uganda)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span>University of Rwanda School of Medicine</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span>University of Dar es Salaam School of Pharmacy (Tanzania)</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Program Components
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The partnership will focus on three key areas:
            </p>

            <div className="space-y-8 my-12">
              <div className="border-l-4 border-blue pl-6">
                <h3 className="text-2xl font-serif text-navy mb-3">1. Clinical Training Enhancement</h3>
                <p className="text-gray-700 leading-relaxed">
                  Development of practical training modules in hospital pharmacy practice, pharmaceutical care, and 
                  medication safety. Students will gain hands-on experience through structured rotations in partner 
                  health facilities.
                </p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-2xl font-serif text-navy mb-3">2. Research Collaboration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Joint research projects focusing on pharmaceutical access, medication safety, health systems 
                  strengthening, and implementation science. Research findings will inform evidence-based policy and 
                  practice improvements.
                </p>
              </div>

              <div className="border-l-4 border-teal pl-6">
                <h3 className="text-2xl font-serif text-navy mb-3">3. Continuing Professional Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Certificate and diploma programs for practicing pharmacists in specialized areas including clinical 
                  pharmacy, pharmaceutical management, and quality assurance.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Expected Impact
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The partnership aims to:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Train <strong>500+ pharmacy students annually</strong> in enhanced clinical programs</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Provide continuing education for <strong>200+ practicing pharmacists</strong> per year</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Produce <strong>20+ joint research publications</strong> over the next three years</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Develop region-specific pharmaceutical care protocols and guidelines</span>
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Clinical Training Programs
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The clinical training component will significantly enhance pharmacy students' practical skills and 
              professional competencies. Students will participate in structured rotations across various clinical 
              settings including:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Hospital pharmacy services in tertiary care facilities</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Community pharmacy practice and patient counseling</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Pharmaceutical care in specialized clinics (HIV, diabetes, oncology)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Medication safety and pharmacovigilance programs</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Supply chain and inventory management systems</span>
              </li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Research Priorities
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Joint research initiatives will address critical knowledge gaps and generate evidence to improve 
              pharmaceutical services across East Africa. Priority research areas include:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Medicine utilization patterns and prescribing practices</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Medication adherence and patient outcomes</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Pharmaceutical care interventions for chronic diseases</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Health system strengthening and service delivery models</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Implementation science for evidence-based practices</span>
              </li>
            </ul>

            {/* Quote Box */}
            <div className="bg-blue/5 border-l-4 border-blue rounded-lg p-8 my-12">
              <p className="text-lg text-gray-700 italic mb-4">
                "Strengthening Africa's healthcare workforce is essential for sustainable health systems improvement. 
                These partnerships will help ensure the next generation of pharmacists has the skills and knowledge 
                needed to deliver high-quality pharmaceutical care across the continent."
              </p>
              <p className="text-navy font-semibold">— Dr. Sarah Mwangi, Director of Professional Development, Pacem Health</p>
            </div>

            {/* Section 5 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Continuing Professional Development
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Recognizing the importance of lifelong learning, the partnership includes robust continuing professional 
              development (CPD) programs for practicing pharmacists. These programs will offer:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Certificate programs in clinical pharmacy specialties (6-12 months)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Diploma courses in pharmaceutical management and quality assurance</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Short courses and workshops on emerging topics</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Online learning platforms for flexible, self-paced education</span>
              </li>
            </ul>

            {/* Section 6 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Building Sustainable Partnerships
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              These university partnerships reflect Pacem Health's long-term commitment to capacity building and 
              workforce development. By investing in education and research, the company is helping create the human 
              resource foundation necessary for strong, sustainable healthcare systems across Africa.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The partnerships will be formalized through memoranda of understanding that outline shared commitments, 
              governance structures, and mechanisms for continuous quality improvement. Regular review processes will 
              ensure programs remain responsive to evolving educational needs and healthcare priorities.
            </p>

            {/* Section 7 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Looking Ahead
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              As these partnerships begin implementation, Pacem Health anticipates opportunities to expand 
              collaboration to additional universities across Africa. The company is particularly interested in 
              partnerships that support interdisciplinary education, bringing together pharmacy, medicine, nursing, 
              and public health professionals in collaborative learning environments.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Together with its university partners, Pacem Health is working to build a future where every African 
              community has access to well-trained, highly-skilled pharmaceutical professionals committed to 
              improving health outcomes for all.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <span className="text-sm text-gray-500 font-semibold">
              IMAGE {currentImageIndex + 1} OF {articleImages.length}
            </span>
          </div>

          <div className="relative">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src={articleImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-navy" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-navy" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {articleImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentImageIndex ? 'w-12 bg-blue' : 'w-8 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-12">Related Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={story.link}>
                  <div className="group cursor-pointer">
                    <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-serif text-navy mb-3 group-hover:text-blue transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{story.excerpt}</p>
                    <div className="flex items-center gap-2 text-blue font-semibold text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tags */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-serif text-navy mb-6">Related Tags</h3>
          <div className="flex flex-wrap gap-3">
            {['Education', 'Partnerships', 'Universities', 'Training', 'Research'].map((tag) => (
              <button
                key={tag}
                className="bg-white text-blue border-2 border-blue px-6 py-2 rounded-full font-semibold hover:bg-blue hover:text-white transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}