import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import pharmaceuticalHubImg from 'figma:asset/44fd008152cbbf2ddf85747e909f6ee06523968b.png';
import companyLaunchImg from 'figma:asset/02d42d707511272b88d4c2c144be611ba1600a10.png';
import distributionExpansionImg from 'figma:asset/22e445325eddecfb7772176310bd52ca8fa9a676.png';
import marketEntryImg from 'figma:asset/c88e4fb775957e420c8bfcf1cf1554fc5bfd3581.png';

export default function PharmaceuticalHub() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const articleImages = [
    pharmaceuticalHubImg,
    'https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjgwMjM5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1693902997450-7e912c0d3554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlyb2JpJTIwa2VueWElMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzY4MDY2Mjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc2ODA1ODI1Mnww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const relatedStories = [
    {
      title: 'Pacem Health Officially Launches to Transform African Healthcare Systems',
      excerpt: 'U.S.-based global health innovation company announces official launch.',
      image: companyLaunchImg,
      link: '/stories/company-launch'
    },
    {
      title: 'Pacem Health Expands Distribution Network Across East Africa',
      excerpt: 'New regional hubs strengthen pharmaceutical supply chain.',
      image: distributionExpansionImg,
      link: '/stories/distribution-expansion'
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

              <div className="text-orange text-sm font-bold tracking-wide mb-4">COMPANY ANNOUNCEMENT</div>
              
              <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
                Pacem Health Announces East African Regional Pharmaceutical Hub
              </h1>

              <div className="flex items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>April 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>7 min read</span>
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
                alt="Pharmaceutical Distribution Hub"
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
              <strong>NAIROBI, KENYA</strong> — Pacem Health Inc. today announced the establishment of its first 
              regional pharmaceutical distribution hub in Nairobi, Kenya, marking a significant milestone in the 
              company's mission to strengthen healthcare systems across Africa.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The 15,000 square meter facility will serve as the central distribution point for essential medicines, 
              medical supplies, and pharmaceutical products across the East African Community (EAC) member states, 
              including Kenya, Tanzania, Uganda, Rwanda, Burundi, South Sudan, and the Democratic Republic of Congo.
            </p>

            {/* Section 1 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Strategic Location and Infrastructure
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Located near Jomo Kenyatta International Airport in Nairobi, the hub is strategically positioned to 
              serve the entire East African region. The facility features:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Temperature-controlled storage zones maintaining 2-8°C for cold chain products</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Ambient storage areas with climate control for general pharmaceuticals</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Quality assurance laboratory for incoming product testing</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Modern warehouse management system with real-time inventory tracking</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Last-mile distribution coordination center</span>
              </li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Serving the Region's Healthcare Needs
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The pharmaceutical hub will significantly reduce lead times for essential medicine delivery across 
              East Africa, from the current average of 90-180 days to 7-14 days for most products. This improvement 
              will help ensure more consistent availability of critical medicines in hospitals, clinics, and 
              pharmacies throughout the region.
            </p>

            {/* Quote Box */}
            <div className="bg-blue/5 border-l-4 border-blue rounded-lg p-8 my-12">
              <p className="text-lg text-gray-700 italic mb-4">
                "Access to essential medicines remains a critical challenge across Africa. This hub represents our 
                commitment to building the infrastructure necessary for reliable pharmaceutical supply chains that 
                serve healthcare providers and patients across the region."
              </p>
              <p className="text-navy font-semibold">— Dr. Emmanuel Okoye, Regional Director for East Africa</p>
            </div>

            {/* Section 3 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Regulatory Compliance and Quality Assurance
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The facility has been designed to meet Good Distribution Practice (GDP) standards and will operate in 
              compliance with regulatory requirements from the Pharmacy and Poisons Board of Kenya, the East African 
              Community Medicines Regulatory Harmonization initiative, and international pharmaceutical distribution 
              standards.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              All products distributed through the hub will undergo quality verification, including:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Documentation review and authenticity verification</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Physical inspection of packaging and labeling</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Temperature monitoring throughout storage and transport</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-blue mt-2 flex-shrink-0" />
                <span>Batch traceability from manufacturer to end user</span>
              </li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Employment and Local Partnerships
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The hub is expected to create approximately 150 direct jobs in Kenya, including positions in warehouse 
              operations, quality assurance, logistics coordination, and administration. Pacem Health has partnered 
              with local logistics providers and transportation companies to establish reliable distribution networks 
              throughout the region.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The company is also working with local educational institutions to develop training programs for 
              pharmaceutical supply chain professionals, helping build regional capacity in logistics and 
              distribution management.
            </p>

            {/* Section 5 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Expansion Plans
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Nairobi hub is the first of several planned regional distribution centers across Africa. Pacem 
              Health is currently conducting feasibility studies for additional hubs in West Africa (Accra, Ghana) 
              and Southern Africa (Johannesburg, South Africa), with plans to establish a network of interconnected 
              distribution centers serving the entire continent by 2028.
            </p>

            {/* Quote Box */}
            <div className="bg-orange/5 border-l-4 border-orange rounded-lg p-8 my-12">
              <p className="text-lg text-gray-700 italic mb-4">
                "This is just the beginning. Our vision is to create a pan-African pharmaceutical distribution 
                network that ensures every hospital and clinic has reliable access to the medicines they need, 
                when they need them."
              </p>
              <p className="text-navy font-semibold">— Michael Adeyemi, Chief Operating Officer</p>
            </div>

            {/* Section 6 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Impact on Healthcare Delivery
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The pharmaceutical hub is expected to have significant positive impacts on healthcare delivery across 
              East Africa:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Reduced medicine stock-outs in health facilities</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Lower procurement costs through volume consolidation</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Improved cold chain integrity for vaccines and biologics</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Enhanced traceability and counterfeit prevention</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Faster emergency medicine deployment during health crises</span>
              </li>
            </ul>

            {/* Section 7 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              About the East African Market
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The East African Community represents a combined population of over 300 million people, with 
              pharmaceutical market size estimated at $3.5 billion annually. Despite this substantial market, 
              the region faces significant challenges in pharmaceutical access, including:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Heavy dependence on imports (85-95% of medicines)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Long procurement and delivery lead times</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Frequent stock-outs of essential medicines</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Limited cold chain infrastructure</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Fragmented distribution networks</span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              The new pharmaceutical hub addresses these challenges by providing reliable, efficient distribution 
              infrastructure specifically designed for the African context.
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
            {['Pharmaceutical Hub', 'East Africa', 'Distribution', 'Kenya', 'Supply Chain'].map((tag) => (
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