import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { SectionLabel } from '../SectionLabel';
import distributionNetworkImage from 'figma:asset/99194abf93f5b366a9eb22ea35ddd6b869c19111.png';
import partnershipImage from 'figma:asset/70103a84eb746e919fd03ed32f6184dadfa6b63a.png';
import communityMilestoneImage from 'figma:asset/1b161e16825c5b7fa1d47f09570ae8d56c883b8b.png';
import digitalHealthImage from 'figma:asset/03eb96b456de1a93479dd6b367eaf75b17092649.png';
import whoCertificationImage from 'figma:asset/d7d9796d0e2661031cab4035eaad951a82b88c56.png';

const newsStories = [
  {
    title: 'Pacem Health Expands Distribution Network Across East Africa',
    image: distributionNetworkImage,
    link: '/stories/distribution-expansion'
  },
  {
    title: 'New Partnership Announced to Strengthen Pharmaceutical Supply Chain',
    image: partnershipImage,
    link: '/stories/partnership-announcement'
  },
  {
    title: 'Community Health Initiative Reaches 100,000 Patients Milestone',
    image: communityMilestoneImage,
    link: '/stories/community-milestone'
  },
  {
    title: 'Digital Health Platform Launched to Improve Patient Care',
    image: digitalHealthImage,
    link: '/stories/digital-platform'
  },
  {
    title: 'Pacem Health Receives WHO Certification for Quality Standards',
    image: whoCertificationImage,
    link: '/news-stories'
  },
];

export function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(newsStories.length - cardsToShow, prev + 1));
  };

  const progress = ((currentIndex + 1) / (newsStories.length - cardsToShow + 1)) * 100;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionLabel>NEWS & STORIES</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif text-navy mt-6"
            >
              Discover our News and Stories.
            </motion.h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= newsStories.length - cardsToShow}
              className="w-12 h-12 rounded-full border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Cards */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {newsStories.map((story, index) => (
              <motion.div
                key={index}
                className="min-w-[calc(33.333%-16px)] group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden h-56">
                    <motion.img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-navy mb-4 leading-snug">{story.title}</h3>
                    <Link
                      href={story.link}
                      className="text-blue hover:text-blue-light transition-colors duration-300 inline-flex items-center gap-1"
                    >
                      Read More
                      <span className="group-hover:translate-x-1 transition-transform duration-300">›</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}