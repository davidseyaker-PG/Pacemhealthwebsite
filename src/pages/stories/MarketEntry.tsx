import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import marketEntryImg from 'figma:asset/c88e4fb775957e420c8bfcf1cf1554fc5bfd3581.png';
import companyLaunchImg from 'figma:asset/02d42d707511272b88d4c2c144be611ba1600a10.png';
import productCatalogImg from 'figma:asset/b75b6c3d301e30dd2c37a3f33a8b9165f8b5d0f1.png';
import distributionExpansionImg from 'figma:asset/22e445325eddecfb7772176310bd52ca8fa9a676.png';
import strategyChartsImg from 'figma:asset/d0d5355d4aebf16dfbd3c5904973e87dc4872533.png';
import dataAnalysisImg from 'figma:asset/00f5a530a8d4002b66469459e27d06aad7ce5e38.png';
import teamPlanningImg from 'figma:asset/1e7dead491e62c3c5cc88d37a33f590516533241.png';

export default function MarketEntry() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const articleImages = [
    marketEntryImg,
    strategyChartsImg,
    dataAnalysisImg,
    teamPlanningImg
  ];

  const relatedStories = [
    {
      title: 'Pacem Health Officially Launches to Transform African Healthcare Systems',
      excerpt: 'U.S.-based global health innovation company announces official launch.',
      image: companyLaunchImg,
      link: '/stories/company-launch'
    },
    {
      title: 'Pacem Health Unveils Comprehensive Medical Product Catalog for Africa',
      excerpt: 'First-of-its-kind comprehensive catalog features over 3,500 medical products.',
      image: productCatalogImg,
      link: '/stories/product-catalog'
    },
    {
      title: 'Pacem Health Expands Distribution Network Across East Africa',
      excerpt: 'New regional hubs strengthen pharmaceutical supply chain.',
      image: distributionExpansionImg,
      link: '/stories/distribution-expansion'
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

              <div className="text-orange text-sm font-bold tracking-wide mb-4">STRATEGIC ANNOUNCEMENT</div>
              
              <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
                Pacem Health Announces Africa Market Entry Strategy
              </h1>

              <div className="flex items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>February 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>6 min read</span>
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
                alt="Pacem Health Africa Market Entry Strategy"
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
              Pacem Health Inc., a U.S.-based global health innovation and systems delivery company, today announced 
              its comprehensive market entry strategy for Africa, outlining a phased approach to strengthening 
              healthcare systems across the continent.
            </p>

            {/* Section 1 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Strategic Vision for African Healthcare
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The company's market entry strategy focuses on building sustainable partnerships with governments, 
              development finance institutions, healthcare providers, and NGOs to address critical gaps in 
              pharmaceutical supply chains, medical equipment management, and healthcare infrastructure across Africa.
            </p>

            {/* Phased Approach Box */}
            <div className="bg-gray-50 rounded-xl p-8 my-12 border-l-4 border-blue">
              <h3 className="text-2xl font-serif text-navy mb-6">Phased Market Entry Approach</h3>
              <p className="text-gray-700 mb-6">
                Pacem Health's strategy is built on a deliberate, phased approach that prioritizes quality, 
                sustainability, and local partnerships:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange pl-6">
                  <h4 className="font-bold text-navy mb-2">Phase 1: Foundation Building (2025)</h4>
                  <p className="text-gray-700 text-base">
                    Establishing operational infrastructure, supplier partnerships, and regulatory frameworks in 
                    priority markets. This phase focuses on building the foundation for sustainable operations.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue pl-6">
                  <h4 className="font-bold text-navy mb-2">Phase 2: Market Activation (2025-2026)</h4>
                  <p className="text-gray-700 text-base">
                    Launching comprehensive product and service offerings in select East and West African markets, 
                    with focus on pharmaceutical distribution, medical equipment, and healthcare facility support.
                  </p>
                </div>
                
                <div className="border-l-4 border-teal pl-6">
                  <h4 className="font-bold text-navy mb-2">Phase 3: Scale and Innovation (2026+)</h4>
                  <p className="text-gray-700 text-base">
                    Expanding geographic reach and introducing advanced health system solutions, including digital 
                    health platforms, fleet management systems, and mobile diagnostics.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Phase 1: Foundation Building
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The foundation building phase focuses on establishing the essential infrastructure and relationships 
              needed for long-term success. Key activities include:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Securing partnerships with internationally-recognized pharmaceutical and medical equipment manufacturers</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Building regulatory compliance frameworks across target markets</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Establishing quality assurance and supply chain management systems</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Developing relationships with key government health stakeholders and development partners</span>
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Phase 2: Market Activation
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Market activation involves launching comprehensive product and service offerings in select markets. 
              This phase will introduce:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Pharmaceutical distribution and wholesale operations</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Medical equipment procurement and lifecycle management</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Healthcare facility infrastructure planning and support</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Pharmacy management solutions and clinical services</span>
              </li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Priority Market Focus
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The strategy identifies 5+ priority African countries for initial market entry, selected based on:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Healthcare infrastructure development needs</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Government commitment to health system strengthening</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Regulatory environment and business climate</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Existing donor and development partner engagement</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Potential for sustainable impact and partnership development</span>
              </li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Partnership-Centered Approach
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Central to Pacem Health's market entry strategy is a commitment to building genuine, sustainable 
              partnerships with African governments, healthcare providers, and communities. The company will work 
              collaboratively with:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Ministries of health and national medical supply agencies</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Public and private hospitals and clinics</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Pharmacies and pharmacy networks</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Community health programs and NGOs</span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              This partnership approach ensures solutions are contextually appropriate, locally supported, and 
              sustainable over the long term.
            </p>

            {/* Section 6 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Commitment to Quality and Compliance
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              All market entry activities will be underpinned by Pacem Health's commitment to pharmaceutical quality 
              assurance, regulatory compliance, and international best practices. The company's triple-verification 
              quality process ensures every product meets stringent standards before reaching healthcare providers.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This commitment extends to all aspects of operations, including supply chain management, cold chain 
              maintenance, inventory control, and distribution logistics. Pacem Health will work closely with 
              regulatory authorities in each market to ensure full compliance with local requirements while 
              maintaining international quality standards.
            </p>

            {/* Quote Box */}
            <div className="bg-blue/5 border-l-4 border-blue rounded-lg p-8 my-12">
              <p className="text-lg text-gray-700 italic mb-4">
                "Our market entry strategy reflects our deep commitment to strengthening African healthcare systems 
                through sustainable partnerships, quality products, and innovative solutions. We're building for the 
                long term—investing in relationships, infrastructure, and systems that will serve African communities 
                for decades to come."
              </p>
              <p className="text-navy font-semibold">— Pacem Health Leadership Team</p>
            </div>

            {/* Section 7 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Looking Ahead
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              As Pacem Health executes its Africa market entry strategy throughout 2025 and beyond, the company will 
              maintain its focus on building trust, delivering quality, and creating lasting value for healthcare 
              systems, providers, and ultimately the patients they serve.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Additional market-specific announcements will be made as partnerships and operations are established 
              in each priority country. The company remains committed to transparency, accountability, and continuous 
              improvement as it builds its presence across Africa.
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
            {['Market Entry', 'Africa', 'Strategy', 'Expansion', 'Partnerships'].map((tag) => (
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