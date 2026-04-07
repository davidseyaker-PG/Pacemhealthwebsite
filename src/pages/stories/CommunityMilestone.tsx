import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import communityHealthImg from '../../assets/1ccf00b90b7dea706dbcbc91a60729367f043716.png';
import distributionExpansionImg from '../../assets/22e445325eddecfb7772176310bd52ca8fa9a676.png';
import vaccineVialsImg from '../../assets/40c257b000b003a0cb10d8e96fa5884d236d1969.png';
import digitalHealthImg from '../../assets/03eb96b456de1a93479dd6b367eaf75b17092649.png';
import neonatalCareImg from '../../assets/9c46f33e9191ab6113c4a1a6f4965bc2cd4b45bf.png';
import healthWorkerPatientImg from '../../assets/e1c1e87a925045e9524de5ddf3b17d87ee23c73c.png';
import diagnosticLabImg from '../../assets/f04efdfddf57ab394e90635477b4782f4ea12046.png';

export default function CommunityMilestone() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const articleImages = [
    communityHealthImg,
    neonatalCareImg,
    healthWorkerPatientImg,
    diagnosticLabImg
  ];

  const relatedStories = [
    {
      title: 'Pacem Health Expands Distribution Network Across East Africa',
      excerpt: 'New regional hubs strengthen pharmaceutical supply chain.',
      image: distributionExpansionImg,
      link: '/stories/distribution-expansion'
    },
    {
      title: 'New Partnership Announced to Strengthen Pharmaceutical Supply Chain',
      excerpt: 'Strategic collaboration with leading global health organizations.',
      image: vaccineVialsImg,
      link: '/stories/partnership-announcement'
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

              <div className="text-orange text-sm font-bold tracking-wide mb-4">IMPACT</div>
              
              <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
                Community Health Initiative Reaches 100,000 Patients Milestone
              </h1>

              <div className="flex items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>December 28, 2025</span>
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
                alt="Community Health Initiative"
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
              Pacem Health's Community Health Initiative has reached a significant milestone, 
              successfully serving over 100,000 patients across rural and underserved communities 
              in 12 African countries. This achievement represents years of dedicated work by 
              community health workers, clinical teams, and local partners committed to improving 
              healthcare access for those who need it most.
            </p>

            {/* Section 1 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Bringing Healthcare to Underserved Communities
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Community Health Initiative was launched three years ago with a clear mission: 
              to ensure that geographic isolation and economic barriers do not prevent people from 
              accessing quality healthcare. Through a network of over 500 community health workers 
              and 45 rural health clinics, the program has transformed healthcare delivery in some 
              of Africa's most remote regions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              "Reaching 100,000 patients is more than a number—it represents 100,000 individuals 
              who now have access to essential medicines, preventive care, and health education," 
              said Dr. Grace Nakato, Director of Community Health Programs. "Each person represents 
              a family whose health outcomes have improved because we brought care to their doorstep."
            </p>

            {/* Section 2 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Program Components and Services
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The initiative provides comprehensive healthcare services tailored to community needs:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Primary Care Services:</strong> Treatment for common illnesses, chronic 
                disease management, and preventive care</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Maternal and Child Health:</strong> Prenatal care, safe delivery support, 
                and pediatric services</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Disease Prevention:</strong> Vaccination programs, malaria prevention, 
                and health education</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Medicine Distribution:</strong> Ensuring continuous access to essential 
                medications through community-based distribution</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Health Education:</strong> Community workshops on nutrition, hygiene, 
                and disease prevention</span>
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Measurable Health Outcomes
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Independent evaluations of the program have documented significant health improvements 
              in communities served by the initiative. Maternal mortality rates have decreased by 35% 
              in program areas, while childhood vaccination rates have increased to over 90%—well above 
              regional averages.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The program has also made notable progress in managing chronic conditions. Over 12,000 
              patients with diabetes and hypertension are now receiving regular monitoring and 
              medication, reducing complications and hospitalizations. Community health workers use 
              mobile technology to track patient progress and ensure continuity of care.
            </p>

            {/* Section 4 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Community Health Workers at the Heart
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The success of the Community Health Initiative is largely attributed to the dedication 
              and expertise of community health workers (CHWs). These locally-recruited and trained 
              healthcare providers serve as the vital link between communities and the broader health 
              system.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Fatima Sesay, a community health worker in rural Sierra Leone, shared her perspective: 
              "I've watched children in my community grow up healthy because their families now have 
              access to vaccines and medicines. I've supported mothers through safe pregnancies and 
              helped elderly neighbors manage their chronic conditions. This work has transformed not 
              just individual lives, but our entire community's relationship with healthcare."
            </p>

            {/* Section 5 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Building on Success
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              As the program celebrates this milestone, Pacem Health is already planning for expansion. 
              Over the next two years, the initiative will extend to 20 additional communities, with 
              the goal of serving 250,000 patients by 2028.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              New program components will include mental health services, nutrition support programs, 
              and enhanced technology tools for community health workers. The expansion will also 
              incorporate lessons learned from the first three years, including stronger integration 
              with local health systems and increased focus on sustainability.
            </p>

            {/* Section 6 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              A Model for Community-Centered Care
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Community Health Initiative has attracted attention from health ministries, 
              international organizations, and other healthcare providers as a model for delivering 
              quality care in resource-limited settings. The program's emphasis on community ownership, 
              cultural sensitivity, and sustainable practices offers valuable insights for global health 
              practitioners.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              "What makes this program special is that it's truly community-led," explained Dr. Nakato. 
              "We don't impose solutions from outside. We work with communities to understand their needs, 
              respect their knowledge, and build healthcare systems that they own and sustain. That's 
              why this model works, and why it will continue to work as we grow."
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
            {['Community Health', 'Impact', 'Rural Healthcare', 'Patient Care', 'Africa'].map((tag) => (
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