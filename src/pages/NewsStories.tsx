import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import infantNutritionImg from 'figma:asset/c345068955ef3bfc48f34e2b2bc6ac441c34069f.png';
import companyLaunchImg from 'figma:asset/02d42d707511272b88d4c2c144be611ba1600a10.png';
import productCatalogImg from 'figma:asset/b75b6c3d301e30dd2c37a3f33a8b9165f8b5d0f1.png';
import pharmaceuticalHubImg from 'figma:asset/44fd008152cbbf2ddf85747e909f6ee06523968b.png';
import universityPartnershipImg from 'figma:asset/8f7e2d6bc1728d4c75289e7e6ae1935bcf367806.png';
import marketEntryImg from 'figma:asset/c88e4fb775957e420c8bfcf1cf1554fc5bfd3581.png';
import distributionExpansionImg from 'figma:asset/22e445325eddecfb7772176310bd52ca8fa9a676.png';
import partnershipHandshakeImg from 'figma:asset/9db084c65b7ac4de77b79de6e4a02db5d61c91c0.png';
import vaccineVialsImg from 'figma:asset/40c257b000b003a0cb10d8e96fa5884d236d1969.png';
import communityHealthImg from 'figma:asset/1ccf00b90b7dea706dbcbc91a60729367f043716.png';
import digitalHealthImg from 'figma:asset/03eb96b456de1a93479dd6b367eaf75b17092649.png';

export default function NewsStories() {
  const [activeFilter, setActiveFilter] = useState('All News');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    'All News',
    'Company News',
    'Partnerships',
    'Product Launches',
    'Impact Stories'
  ];

  const stories = [
    {
      id: 'pharmaceutical-hub',
      title: 'Pacem Health Announces East African Regional Pharmaceutical Hub',
      excerpt: 'New facility in Kenya will serve as central distribution center for essential medicines and medical supplies across East African Community member states.',
      image: pharmaceuticalHubImg,
      category: 'Company News',
      tag: 'News',
      date: 'April 15, 2025',
      readTime: '7 min read',
      link: '/stories/pharmaceutical-hub'
    },
    {
      id: 'infant-nutrition',
      title: 'Pacem Health Introduces Innovative Infant Nutritional Solution',
      excerpt: 'New fortified nutritional product addresses infant malnutrition in resource-limited settings with locally-sourced ingredients and affordable pricing.',
      image: infantNutritionImg,
      category: 'Product Launches',
      tag: 'Insights',
      date: 'March 25, 2025',
      readTime: '8 min read',
      link: '/stories/infant-nutrition'
    },
    {
      id: 'university-partnership',
      title: 'Strategic Partnership with Leading African Universities',
      excerpt: 'Collaboration aims to strengthen pharmaceutical education and clinical training programs across five East African medical schools.',
      image: universityPartnershipImg,
      category: 'Partnerships',
      tag: 'Stories',
      date: 'March 20, 2025',
      readTime: '5 min read',
      link: '/stories/university-partnership'
    },
    {
      id: 'company-launch',
      title: 'Pacem Health Officially Launches to Transform African Healthcare Systems',
      excerpt: 'U.S.-based global health innovation company announces official launch with comprehensive platform for strengthening healthcare delivery across Africa.',
      image: companyLaunchImg,
      category: 'Company News',
      tag: 'News',
      date: 'February 3, 2025',
      readTime: '8 min read',
      link: '/stories/company-launch'
    },
    {
      id: 'product-catalog',
      title: 'Pacem Health Unveils Comprehensive Medical Product Catalog for Africa',
      excerpt: 'First-of-its-kind comprehensive catalog features over 3,500 medical products across 22 categories with transparent pricing and regulatory compliance information.',
      image: productCatalogImg,
      category: 'Product Launches',
      tag: 'News',
      date: 'February 18, 2025',
      readTime: '7 min read',
      link: '/stories/product-catalog'
    },
    {
      id: 'market-entry',
      title: 'Pacem Health Announces Africa Market Entry Strategy',
      excerpt: 'Strategic roadmap outlines phased approach to entering priority African markets with comprehensive healthcare solutions and partnerships.',
      image: marketEntryImg,
      category: 'Company News',
      tag: 'Insights',
      date: 'February 2025',
      readTime: '6 min read',
      link: '/stories/market-entry'
    },
    {
      id: 'distribution-expansion',
      title: 'Pacem Health Expands Distribution Network Across East Africa',
      excerpt: 'New regional hubs in Kenya, Tanzania, and Uganda strengthen pharmaceutical supply chain and improve access to essential medicines.',
      image: distributionExpansionImg,
      category: 'Company News',
      tag: 'Stories',
      date: 'January 8, 2026',
      readTime: '5 min read',
      link: '/stories/distribution-expansion'
    },
    {
      id: 'partnership-announcement',
      title: 'New Partnership Announced to Strengthen Pharmaceutical Supply Chain',
      excerpt: 'Strategic collaboration with leading global health organizations to enhance medicine distribution and quality assurance across Africa.',
      image: vaccineVialsImg,
      category: 'Partnerships',
      tag: 'News',
      date: 'January 5, 2026',
      readTime: '4 min read',
      link: '/stories/partnership-announcement'
    },
    {
      id: 'community-milestone',
      title: 'Community Health Initiative Reaches 100,000 Patients Milestone',
      excerpt: 'Our community health programs have successfully served over 100,000 patients across rural and underserved communities in Africa.',
      image: communityHealthImg,
      category: 'Impact Stories',
      tag: 'Stories',
      date: 'December 28, 2025',
      readTime: '6 min read',
      link: '/stories/community-milestone'
    },
    {
      id: 'digital-platform',
      title: 'Digital Health Platform Launched to Improve Patient Care',
      excerpt: 'New technology platform enables real-time patient monitoring, medication tracking, and seamless communication between healthcare providers.',
      image: digitalHealthImg,
      category: 'Product Launches',
      tag: 'Insights',
      date: 'December 20, 2025',
      readTime: '5 min read',
      link: '/stories/digital-platform'
    }
  ];

  // Filter and search logic
  const filteredStories = stories.filter(story => {
    const matchesFilter = activeFilter === 'All News' || story.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const clearFilters = () => {
    setActiveFilter('All News');
    setSearchQuery('');
  };

  const featuredStories = [
    stories.find(s => s.id === 'infant-nutrition'),
    stories.find(s => s.id === 'company-launch'),
    stories.find(s => s.id === 'product-catalog')
  ].filter(Boolean);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl lg:text-7xl font-serif text-navy mb-6">
              Discover our News and Stories
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stay informed about our latest initiatives, partnerships, and impact across Africa's healthcare landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prominent Featured Article Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <Link href="/stories/combating-substandard-medications">
              <div className="cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHF1YWxpdHklMjBjb250cm9sJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjgxNjk2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pharmaceutical Quality Control"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white text-navy px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wide shadow-lg">
                      Featured Article
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:py-8">
                  <div className="text-orange text-sm font-bold tracking-wide mb-4">QUALITY ASSURANCE</div>
                  
                  <h2 className="text-4xl lg:text-5xl font-serif text-navy mb-6 group-hover:text-navy transition-colors">
                    Ensuring Quality: How Global Partners Are Combating Substandard Medications in Africa
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Pacem Health collaborates with international organizations, regulatory bodies, and local partners to strengthen pharmaceutical supply chains, implement rigorous quality assurance protocols, and protect millions of patients from counterfeit and substandard medicines across the continent.
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>January 10, 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>12 min read</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-navy font-bold text-lg group-hover:gap-4 transition-all">
                    Read Full Article
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 bg-gray-50 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="text-orange text-sm font-bold tracking-wide mb-4">FEATURED STORIES</div>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">
              Latest Important News
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={story.link}>
                  <div className="cursor-pointer h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-72 rounded-t-xl overflow-hidden">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="bg-white border border-gray-300 text-navy px-3 py-1 rounded-md text-sm font-semibold">
                          {story.tag}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{story.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{story.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-serif text-navy mb-3 group-hover:text-navy transition-colors">
                        {story.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {story.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-navy font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Sidebar - Search and Filters */}
            <aside className="lg:col-span-1">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-navy mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter a keyword"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg focus:border-blue focus:outline-none"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Filters */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-navy">Filters</h3>
                  {(activeFilter !== 'All News' || searchQuery !== '') && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-navy hover:underline"
                    >
                      Clear filters
                    </button>
                  )}
                </div>

                {/* Topic Filters */}
                <div className="border-2 border-gray-300 rounded-xl p-6 bg-white">
                  <h4 className="font-bold text-navy mb-4 pb-4 border-b border-gray-200">Topic</h4>
                  <div className="space-y-3">
                    {filters.map(filter => (
                      <label key={filter} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="filter"
                          checked={activeFilter === filter}
                          onChange={() => setActiveFilter(filter)}
                          className="w-4 h-4 accent-blue cursor-pointer"
                        />
                        <span className="text-gray-700 group-hover:text-navy">{filter}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Content - Stories */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-serif text-navy mb-8">Stories</h2>
              
              {filteredStories.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No stories found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredStories.map((story, index) => (
                    <motion.article
                      key={story.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <Link href={story.link}>
                        <div className="cursor-pointer h-full flex flex-col">
                          {/* Image */}
                          <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                            <ImageWithFallback
                              src={story.image}
                              alt={story.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 flex flex-col">
                            <div className="mb-3">
                              <span className="text-sm text-gray-600">{story.category}</span>
                            </div>

                            <h3 className="text-xl font-serif text-navy mb-3 group-hover:text-navy transition-colors">
                              {story.title}
                            </h3>

                            <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                              {story.excerpt}
                            </p>

                            <div className="flex items-center gap-2 text-navy font-semibold group-hover:gap-3 transition-all text-sm">
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif text-navy mb-6">
              Stay Updated with Pacem Health
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest news, stories, and updates 
              directly to your inbox.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue hover:bg-blue/90 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}