import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import vaccineVialsImg from 'figma:asset/40c257b000b003a0cb10d8e96fa5884d236d1969.png';
import distributionExpansionImg from 'figma:asset/22e445325eddecfb7772176310bd52ca8fa9a676.png';
import communityHealthImg from 'figma:asset/1ccf00b90b7dea706dbcbc91a60729367f043716.png';
import digitalHealthImg from 'figma:asset/03eb96b456de1a93479dd6b367eaf75b17092649.png';
import automatedWarehouseImg from 'figma:asset/ff0862815e91e12b2d9a3cfdf52c995c47c6c120.png';
import pharmaQualityControlImg from 'figma:asset/c088e809fc0059831087428dcf388b52a8fe5f8b.png';

export default function PartnershipAnnouncement() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const articleImages = [
    vaccineVialsImg,
    automatedWarehouseImg,
    distributionExpansionImg,
    pharmaQualityControlImg
  ];

  const relatedStories = [
    {
      title: 'Pacem Health Expands Distribution Network Across East Africa',
      excerpt: 'New regional hubs strengthen pharmaceutical supply chain.',
      image: distributionExpansionImg,
      link: '/stories/distribution-expansion'
    },
    {
      title: 'Community Health Initiative Reaches 100,000 Patients Milestone',
      excerpt: 'Celebrating impact across rural and underserved communities.',
      image: communityHealthImg,
      link: '/stories/community-milestone'
    },
    {
      title: 'Digital Health Platform Launched to Improve Patient Care',
      excerpt: 'New technology platform enables real-time patient monitoring.',
      image: digitalHealthImg,
      link: '/stories/digital-platform'
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
                  Back to News & Stories
                </div>
              </Link>

              <div className="text-orange text-sm font-bold tracking-wide mb-4">PARTNERSHIPS</div>
              
              <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
                New Partnership Announced to Strengthen Pharmaceutical Supply Chain
              </h1>

              <div className="flex items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>January 5, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>4 min read</span>
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
                alt="Partnership Announcement"
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
              Pacem Health today announced a groundbreaking partnership with the Global Health Supply 
              Chain Alliance (GHSCA) and several leading pharmaceutical manufacturers to strengthen 
              medicine distribution and quality assurance across Africa. This collaboration represents 
              one of the most comprehensive public-private partnerships in African healthcare logistics.
            </p>

            {/* Section 1 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              A Multi-Stakeholder Approach
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The partnership brings together international organizations, pharmaceutical manufacturers, 
              government health ministries, and Pacem Health's extensive distribution network to create 
              an integrated approach to medicine supply chain management. This collaborative model 
              ensures that quality medications reach patients efficiently while maintaining rigorous 
              quality standards.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              "By working together, we can address systemic challenges that no single organization 
              could solve alone," said Dr. Amara Okafor, Chief Strategy Officer at Pacem Health. 
              "This partnership leverages each organization's strengths to create a supply chain 
              that is more resilient, efficient, and patient-focused."
            </p>

            {/* Section 2 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Key Partnership Initiatives
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The partnership will focus on several strategic initiatives designed to transform 
              pharmaceutical supply chains across Africa:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Quality Assurance Framework:</strong> Implementation of standardized quality 
                control protocols across all distribution points</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Technology Integration:</strong> Deployment of digital tracking systems 
                for end-to-end supply chain visibility</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Capacity Building:</strong> Training programs for healthcare workers and 
                supply chain professionals across 15 African countries</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Cold Chain Enhancement:</strong> Investment in temperature-controlled 
                infrastructure for vaccines and biologics</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Last-Mile Innovation:</strong> Development of solutions to reach remote 
                and underserved communities</span>
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Expected Impact and Outcomes
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The partnership is projected to improve medicine availability for over 50 million people 
              across Africa over the next five years. By combining resources, expertise, and 
              infrastructure, partners aim to reduce medicine stockouts by 60% while ensuring that 
              all products meet international quality standards.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              James Mwangi, Executive Director of the Global Health Supply Chain Alliance, emphasized 
              the transformative potential of this collaboration: "This partnership demonstrates what's 
              possible when we align our efforts around a common goal. Together, we're not just 
              improving a supply chain—we're saving lives and building healthier communities."
            </p>

            {/* Section 4 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Supporting Sustainable Development
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Beyond immediate operational improvements, the partnership incorporates strong 
              sustainability commitments. All partners have agreed to reduce carbon emissions from 
              pharmaceutical distribution by 40% by 2030, implement environmentally friendly packaging, 
              and support local manufacturing capacity development.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The initiative also prioritizes local employment and skills development, with commitments 
              to hire and train at least 5,000 local healthcare supply chain professionals over the 
              next three years. This focus on capacity building ensures that the partnership creates 
              lasting value for African communities.
            </p>

            {/* Section 5 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Next Steps and Timeline
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Implementation of the partnership initiatives will begin immediately, with pilot programs 
              launching in Kenya, Nigeria, and South Africa during Q1 2026. Based on learnings from 
              these pilots, the partnership will scale to additional countries throughout the year.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              A joint steering committee comprised of representatives from all partner organizations 
              will oversee implementation and ensure accountability. Regular progress reports will be 
              published to maintain transparency and share learnings with the broader global health 
              community.
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
            {['Partnerships', 'Supply Chain', 'Quality Assurance', 'Collaboration', 'Global Health'].map((tag) => (
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