import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import distributionExpansionImg from 'figma:asset/22e445325eddecfb7772176310bd52ca8fa9a676.png';
import vaccineVialsImg from 'figma:asset/40c257b000b003a0cb10d8e96fa5884d236d1969.png';
import communityHealthImg from 'figma:asset/1ccf00b90b7dea706dbcbc91a60729367f043716.png';
import digitalHealthImg from 'figma:asset/03eb96b456de1a93479dd6b367eaf75b17092649.png';

export default function DistributionExpansion() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const articleImages = [
    distributionExpansionImg,
    'https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc2ODA1ODI1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NjgwNTgyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRpb24lMjBjZW50ZXJ8ZW58MXx8fHwxNzY4MDU4MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const relatedStories = [
    {
      title: 'New Partnership Announced to Strengthen Pharmaceutical Supply Chain',
      excerpt: 'Strategic collaboration with leading global health organizations.',
      image: vaccineVialsImg,
      link: '/stories/partnership-announcement'
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

              <div className="text-orange text-sm font-bold tracking-wide mb-4">OPERATIONS</div>
              
              <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
                Pacem Health Expands Distribution Network Across East Africa
              </h1>

              <div className="flex items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>January 8, 2026</span>
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
                alt="Distribution Network"
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
              Pacem Health is proud to announce a major expansion of our pharmaceutical distribution 
              network across East Africa, with new regional hubs now operational in Nairobi, Kenya; 
              Dar es Salaam, Tanzania; and Kampala, Uganda. This strategic expansion represents a 
              significant milestone in our mission to improve access to essential medicines throughout 
              the region.
            </p>

            {/* Section 1 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Strengthening Healthcare Infrastructure
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The new distribution hubs are equipped with state-of-the-art cold chain management 
              systems, ensuring the integrity of temperature-sensitive medications from manufacturer 
              to patient. Each facility features advanced inventory management technology, enabling 
              real-time tracking and optimal stock levels across our network.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              "This expansion allows us to reduce delivery times by up to 40% in key markets while 
              maintaining the highest quality standards," said Dr. Sarah Kimani, Regional Director 
              of Operations. "We're not just building warehouses—we're creating healthcare 
              infrastructure that will serve communities for decades to come."
            </p>

            {/* Section 2 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Impact on Access to Medicine
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The expansion is expected to improve medicine availability for over 15 million people 
              across East Africa. By establishing regional hubs, Pacem Health can now serve remote 
              and underserved areas more efficiently, ensuring that critical medications reach patients 
              when they need them most.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Key benefits of the expanded network include:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Reduced lead times for medicine delivery from 7-10 days to 2-3 days in major urban centers</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Enhanced cold chain capabilities for vaccines and biologics across the region</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Improved inventory visibility and forecasting to prevent stockouts</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Local job creation with over 200 new positions across the three hubs</span>
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Investment in Technology and Training
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Each new distribution center incorporates cutting-edge technology for inventory 
              management, quality control, and logistics optimization. Pacem Health has invested 
              significantly in training programs to ensure that local teams are equipped with the 
              skills needed to operate these advanced facilities.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The company has partnered with local universities and technical institutions to develop 
              specialized training programs in pharmaceutical logistics, quality assurance, and supply 
              chain management. This commitment to capacity building ensures that the expansion creates 
              lasting value for local communities while maintaining international quality standards.
            </p>

            {/* Section 4 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Looking Ahead
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              This expansion is part of Pacem Health's broader strategy to build resilient healthcare 
              supply chains across Africa. The company plans to open additional distribution centers 
              in West and Southern Africa over the next 18 months, further extending our reach and 
              impact.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              "Our vision is to create an integrated distribution network that ensures no patient in 
              Africa has to go without essential medicines," said CEO Michael Okonkwo. "Today's 
              announcement is a significant step toward making that vision a reality."
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
            {['Distribution', 'Supply Chain', 'East Africa', 'Operations', 'Infrastructure'].map((tag) => (
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