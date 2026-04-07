import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import digitalHealthImg from '../../assets/03eb96b456de1a93479dd6b367eaf75b17092649.png';
import distributionExpansionImg from '../../assets/22e445325eddecfb7772176310bd52ca8fa9a676.png';
import vaccineVialsImg from '../../assets/40c257b000b003a0cb10d8e96fa5884d236d1969.png';
import communityHealthImg from '../../assets/1ccf00b90b7dea706dbcbc91a60729367f043716.png';
import digitalHealthPlatform1 from '../../assets/38d5674372eb08b64371147a62effc15707d7649.png';
import digitalHealthPlatform2 from '../../assets/dbcadb84bc6114fad0b49bc12a08aec15bb1660a.png';
import digitalHealthPlatform3 from '../../assets/36ffce28ba0fc01bd98274ca5340d73fb488d02e.png';

export default function DigitalPlatform() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const articleImages = [
    digitalHealthPlatform1,
    digitalHealthPlatform2,
    digitalHealthPlatform3
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
      title: 'Community Health Initiative Reaches 100,000 Patients Milestone',
      excerpt: 'Celebrating impact across rural and underserved communities.',
      image: communityHealthImg,
      link: '/stories/community-milestone'
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

              <div className="text-orange text-sm font-bold tracking-wide mb-4">INNOVATION</div>
              
              <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
                Digital Health Platform Launched to Improve Patient Care
              </h1>

              <div className="flex items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>December 20, 2025</span>
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
                alt="Digital Health Platform"
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
              Pacem Health has officially launched its comprehensive Digital Health Platform, a 
              cutting-edge technology solution designed to transform patient care delivery across 
              Africa. The platform integrates real-time patient monitoring, medication tracking, 
              electronic health records, and seamless communication tools to create a connected 
              healthcare ecosystem.
            </p>

            {/* Section 1 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Technology Meets Healthcare Innovation
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Digital Health Platform represents the culmination of two years of development, 
              combining input from healthcare providers, patients, technology experts, and health 
              system administrators. The result is an intuitive, comprehensive solution that addresses 
              the unique challenges of healthcare delivery in African settings.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              "We didn't just digitize existing processes—we reimagined how healthcare could work 
              when technology and human expertise come together," explained Dr. Kwame Osei, Chief 
              Technology Officer at Pacem Health. "This platform puts powerful tools in the hands 
              of healthcare providers while making care more accessible and manageable for patients."
            </p>

            {/* Section 2 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Core Platform Features
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Digital Health Platform offers a comprehensive suite of features designed to 
              improve every aspect of patient care:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Electronic Health Records (EHR):</strong> Secure, cloud-based patient 
                records accessible to authorized providers across the care continuum</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Medication Management:</strong> Automated tracking of prescriptions, 
                refills, and adherence monitoring with patient reminders</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Telemedicine Integration:</strong> Video consultations and remote 
                monitoring capabilities connecting patients with providers</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Clinical Decision Support:</strong> AI-powered tools that provide 
                evidence-based treatment recommendations</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Analytics Dashboard:</strong> Real-time insights into patient 
                populations, treatment outcomes, and health trends</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span><strong>Mobile-First Design:</strong> Optimized for smartphones to ensure 
                accessibility in resource-limited settings</span>
              </li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Designed for the African Context
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike many health technology solutions developed elsewhere and adapted for Africa, 
              the Digital Health Platform was built from the ground up with African healthcare 
              realities in mind. The platform functions effectively in low-bandwidth environments, 
              supports offline data collection, and works on basic smartphones.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The platform also incorporates multilingual support, with interfaces available in 
              English, French, Swahili, Hausa, and Amharic, with additional languages planned. 
              Cultural considerations were built into every aspect of the user experience, ensuring 
              that the technology enhances rather than disrupts existing care relationships.
            </p>

            {/* Section 4 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Impact on Patient Care
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Early pilots of the Digital Health Platform have demonstrated significant improvements 
              in patient outcomes and care efficiency. In pilot sites, medication adherence increased 
              by 45%, follow-up appointment attendance improved by 60%, and chronic disease management 
              metrics showed marked improvement.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dr. Amina Hassan, a primary care physician using the platform in Kenya, shared her 
              experience: "The platform has transformed how I practice medicine. I can now track 
              my patients' progress between visits, catch potential problems early through remote 
              monitoring, and coordinate care with specialists seamlessly. My patients love the 
              medication reminders and being able to message me with questions."
            </p>

            {/* Section 5 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Security and Privacy Protections
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Patient data security and privacy were paramount considerations in platform development. 
              The system employs bank-level encryption, multi-factor authentication, and comprehensive 
              audit trails. All data storage and processing comply with international healthcare data 
              protection standards and local regulatory requirements.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Patients maintain complete control over their health information, with granular 
              permissions allowing them to decide exactly what information is shared with which 
              providers. The platform also includes robust consent management tools to ensure 
              transparency and patient autonomy.
            </p>

            {/* Section 6 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Rollout and Adoption Strategy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The platform is being deployed in phases, beginning with 50 health facilities across 
              Kenya, Nigeria, and Ghana. Each deployment includes comprehensive training for healthcare 
              providers, ongoing technical support, and patient education programs to ensure successful 
              adoption.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              By the end of 2026, Pacem Health aims to have the platform operational in 500 facilities 
              serving over 2 million patients. The phased approach allows for continuous improvement 
              based on user feedback and real-world experience.
            </p>

            {/* Section 7 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Looking to the Future
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The current platform launch is just the beginning. Future enhancements will include 
              integration with wearable devices for continuous health monitoring, expanded AI 
              capabilities for predictive analytics, and blockchain-based credential verification 
              for healthcare providers.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              "Digital health is not about replacing human connection in healthcare—it's about 
              enhancing it," said Dr. Osei. "As we continue to evolve this platform, our focus 
              remains on creating technology that empowers healthcare providers to deliver better 
              care and empowers patients to take control of their health journey."
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
            {['Digital Health', 'Innovation', 'Technology', 'Patient Care', 'Telemedicine'].map((tag) => (
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