import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import companyLaunchImg from 'figma:asset/02d42d707511272b88d4c2c144be611ba1600a10.png';
import productCatalogImg from 'figma:asset/b75b6c3d301e30dd2c37a3f33a8b9165f8b5d0f1.png';
import marketEntryImg from 'figma:asset/c88e4fb775957e420c8bfcf1cf1554fc5bfd3581.png';
import distributionExpansionImg from 'figma:asset/22e445325eddecfb7772176310bd52ca8fa9a676.png';
import healthWorkerDigitalImg from 'figma:asset/5f98cdc84d0207f9a494410f04f0be962e1341ff.png';
import surgicalRoomImg from 'figma:asset/a01a517ef10b4c3617be8a68f7a1396c957366b7.png';
import labTechnicianImg from 'figma:asset/7c3545a19d6c6c7a205272bf38a5901154a48959.png';

export default function CompanyLaunch() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const articleImages = [
    companyLaunchImg,
    healthWorkerDigitalImg,
    surgicalRoomImg,
    labTechnicianImg
  ];

  const relatedStories = [
    {
      title: 'Pacem Health Unveils Comprehensive Medical Product Catalog for Africa',
      excerpt: 'First-of-its-kind comprehensive catalog features over 3,500 medical products.',
      image: productCatalogImg,
      link: '/stories/product-catalog'
    },
    {
      title: 'Pacem Health Announces Africa Market Entry Strategy',
      excerpt: 'Strategic roadmap outlines phased approach to entering priority African markets.',
      image: marketEntryImg,
      link: '/stories/market-entry'
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

              <div className="text-orange text-sm font-bold tracking-wide mb-4">COMPANY ANNOUNCEMENT</div>
              
              <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
                Pacem Health Officially Launches to Transform African Healthcare Systems
              </h1>

              <div className="flex items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>February 3, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>8 min read</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="text-white hover:text-blue flex items-center gap-2 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="font-semibold">Share</span>
                </button>
                <button className="text-white hover:text-blue flex items-center gap-2 transition-colors">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Download PDF</span>
                </button>
              </div>
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
                alt="Pacem Health headquarters in Grand Rapids, MI"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-sm">Pacem Health headquarters in Grand Rapids, MI</p>
              </div>
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
              <strong>Grand Rapids, MI</strong> — Pacem Health Inc. today announced its official launch as a 
              comprehensive global health innovation and systems delivery company focused on strengthening 
              healthcare across Africa. The company brings together deep expertise in health system design, 
              medical equipment solutions, supply chain optimization, and workforce development to address 
              critical gaps in healthcare delivery across the continent.
            </p>

            {/* Section 1 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              A Systems Approach to Healthcare Strengthening
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Pacem Health enters the market with a differentiated value proposition built on systems thinking 
              and sustainable solutions. Rather than offering standalone products or services, the company 
              provides integrated approaches that address multiple dimensions of healthcare delivery challenges 
              simultaneously.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The company's launch comes at a critical time for African healthcare systems. Countries across 
              the continent are working to achieve universal health coverage while managing resource constraints, 
              infrastructure gaps, and growing disease burdens. Pacem Health's model is designed specifically 
              to support governments, health institutions, and development partners in navigating these complex 
              challenges.
            </p>

            {/* Three Divisions Box */}
            <div className="bg-gray-50 rounded-xl p-8 my-12 border-l-4 border-blue">
              <h3 className="text-2xl font-serif text-navy mb-6">Three Integrated Business Divisions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-navy mb-2">Core Solutions</h4>
                  <p className="text-gray-700 text-base">Essential infrastructure, equipment, and supply chain services for healthcare facilities</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Advanced Solutions</h4>
                  <p className="text-gray-700 text-base">Digital health platforms, mobile diagnostics, and health intelligence analytics</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Advisory Services</h4>
                  <p className="text-gray-700 text-base">Strategic consulting, policy development, and health systems transformation support</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Comprehensive Service Portfolio
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pacem Health's <strong>Core Solutions</strong> division provides the foundational elements of healthcare 
              delivery including modular infrastructure for primary care facilities, medical equipment procurement 
              and maintenance, pharmaceutical and medical supply distribution, cold chain management and logistics, 
              and sustainable procurement financing models.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The <strong>Advanced Solutions</strong> division leverages technology and innovation to enhance healthcare 
              delivery through digital health platforms for patient management, mobile diagnostic units for remote 
              service delivery, fleet management systems for mobile health programs, health data analytics and 
              performance monitoring, and telehealth and remote consultation capabilities.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Through its <strong>Advisory Services</strong> division, Pacem Health provides strategic guidance and 
              technical assistance in health system strategy and planning, digital health transformation, procurement 
              and supply chain optimization, quality improvement and accreditation support, workforce development and 
              training programs, and health financing and resource mobilization.
            </p>

            {/* Section 3 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Leadership and Expertise
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pacem Health is led by a team of experienced professionals with deep backgrounds in global health, 
              healthcare delivery, international development, and business operations. The leadership team brings 
              expertise from leading healthcare companies, development organizations, and government agencies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The company's Board of Directors includes distinguished leaders in global health, development finance, 
              public health policy, and healthcare innovation. This governance structure ensures Pacem Health maintains 
              the highest standards of ethical practice, financial stewardship, and developmental impact.
            </p>

            {/* Founding Principles */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Founding Principles
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pacem Health was established on four core principles that guide all aspects of the company's work:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-orange pl-6">
                <h4 className="font-bold text-navy mb-2">Systems Thinking</h4>
                <p className="text-gray-700">Addressing interconnected challenges through integrated solutions rather than isolated interventions</p>
              </div>
              <div className="border-l-4 border-blue pl-6">
                <h4 className="font-bold text-navy mb-2">Sustainability Focus</h4>
                <p className="text-gray-700">Building local capacity and creating financially viable models that endure beyond initial implementation</p>
              </div>
              <div className="border-l-4 border-teal pl-6">
                <h4 className="font-bold text-navy mb-2">Partnership Approach</h4>
                <p className="text-gray-700">Collaborating with governments, institutions, and communities as equal partners in health system strengthening</p>
              </div>
              <div className="border-l-4 border-navy pl-6">
                <h4 className="font-bold text-navy mb-2">Evidence-Based Practice</h4>
                <p className="text-gray-700">Grounding all work in research, data, and proven best practices while remaining adaptable to local contexts</p>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Initial Partnerships and Projects
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pacem Health launches with several foundational partnerships already established. The company has signed 
              agreements with health ministries in multiple East African countries to support primary healthcare 
              strengthening initiatives. Collaborations with international development organizations will support 
              mobile health programs and diagnostic capacity building.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The company is also working with development finance institutions to create innovative financing mechanisms 
              for healthcare infrastructure and equipment procurement. These partnerships will enable health facilities 
              and governments to access critical resources through sustainable financial models.
            </p>

            {/* Section 5 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Geographic Focus and Expansion Plans
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              While Pacem Health's initial operations focus on East Africa including Kenya, Tanzania, Uganda, Rwanda, 
              and Ethiopia, the company plans measured expansion across the continent. West Africa, particularly Ghana 
              and Nigeria, represents near-term expansion opportunities given significant healthcare infrastructure needs 
              and strong government commitment to health system strengthening.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The company is establishing regional offices in Nairobi, Accra, and Abuja to ensure strong local presence 
              and responsiveness to country-specific contexts. These offices will house technical teams, supply chain 
              operations, and partnership management functions.
            </p>

            {/* Section 6 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Development Impact Goals
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pacem Health has established ambitious but achievable impact targets for its first five years of operation:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Supporting health infrastructure improvements in <strong>500 facilities</strong> across 10 countries</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Training <strong>5,000 healthcare workers</strong> in clinical and operational competencies</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Reaching <strong>5 million patients</strong> through mobile health and outreach programs</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Deploying diagnostic capacity in <strong>200 underserved communities</strong></span>
              </li>
            </ul>

            {/* Section 7 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Looking Ahead
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              As Pacem Health officially begins operations, the company remains focused on executing its mission with 
              excellence while maintaining flexibility to adapt as it learns. The healthcare landscape across Africa is 
              dynamic and complex, requiring both strategic vision and tactical responsiveness.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The launch of Pacem Health represents not just a new company entering the market, but a new model for how 
              private sector actors can contribute meaningfully to health system strengthening in partnership with 
              governments and communities. Success will be measured not in market share or revenue alone, but in lives 
              improved and health systems strengthened.
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
            {['Company Launch', 'Healthcare Systems', 'Africa', 'Global Health', 'Innovation'].map((tag) => (
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