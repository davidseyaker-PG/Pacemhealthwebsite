import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft,
  Search,
  MapPin,
  ChevronDown,
  Briefcase,
  Calendar,
  DollarSign,
  Star
} from 'lucide-react';
import { Link } from 'wouter';

interface Job {
  id: string;
  title: string;
  location: string;
  country: string;
  posted: string;
  description: string;
  employmentType: string;
  level: string;
  tags: string[];
}

export default function ProgramManagement() {
  const [activeTab, setActiveTab] = useState<'featured' | 'recent' | 'saved'>('featured');
  const [sortBy, setSortBy] = useState('Most Recent');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [radius, setRadius] = useState('10 miles');
  
  // Sidebar filters
  const [sidebarKeyword, setSidebarKeyword] = useState('');
  const [jobFunction, setJobFunction] = useState('All Functions');
  const [country, setCountry] = useState('All Countries');
  const [stateProvince, setStateProvince] = useState('All States/Provinces');
  const [city, setCity] = useState('All Cities');

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Program Manager - Health Systems Strengthening',
      location: 'Kampala, Uganda',
      country: 'Uganda',
      posted: 'Posted 3 days ago',
      description: 'Lead implementation of health systems strengthening programs across multiple facilities. Manage project timelines, budgets, and stakeholder relationships. Coordinate with government partners, NGOs, and healthcare providers to deliver sustainable improvements in service delivery and quality of care.',
      employmentType: 'Full-time',
      level: 'Senior-Level',
      tags: ['Uganda', 'Project Management']
    },
    {
      id: '2',
      title: 'Partnership Coordinator - Maternal Health Initiative',
      location: 'Dar es Salaam, Tanzania',
      country: 'Tanzania',
      posted: 'Posted 5 days ago',
      description: 'Coordinate partnerships for our maternal health programs across Tanzania. Build and maintain relationships with implementing partners, track deliverables, support capacity building activities, and ensure effective communication across stakeholder groups. Monitor program outcomes and contribute to reporting.',
      employmentType: 'Full-time',
      level: 'Mid-Level',
      tags: ['Tanzania', 'Partnerships']
    },
    {
      id: '3',
      title: 'Senior Program Officer - Pharmaceutical Access',
      location: 'Addis Ababa, Ethiopia',
      country: 'Ethiopia',
      posted: 'Posted 1 week ago',
      description: 'Oversee pharmaceutical access programs ensuring quality medicines reach under-resourced populations. Manage program operations, coordinate with supply chain teams, support monitoring and evaluation activities, and facilitate knowledge sharing. Work closely with government regulatory authorities and partner organizations.',
      employmentType: 'Full-time',
      level: 'Senior-Level',
      tags: ['Ethiopia', 'Pharmaceutical Access']
    }
  ];

  const filteredJobs = jobs.filter(job => {
    // Hero search filters
    const matchesHeroKeyword = !searchKeyword || 
      job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.description.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesHeroLocation = !searchLocation || 
      job.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
      job.country.toLowerCase().includes(searchLocation.toLowerCase());
    
    // Sidebar filters
    const matchesSidebarKeyword = !sidebarKeyword || 
      job.title.toLowerCase().includes(sidebarKeyword.toLowerCase()) ||
      job.description.toLowerCase().includes(sidebarKeyword.toLowerCase());
    const matchesCountry = country === 'All Countries' || job.country === country;
    const matchesCity = city === 'All Cities' || job.location.includes(city);
    
    return matchesHeroKeyword && matchesHeroLocation && matchesSidebarKeyword && matchesCountry && matchesCity;
  });

  // Sort filtered jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'Title A-Z') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'Location') {
      return a.location.localeCompare(b.location);
    }
    return 0; // Most Recent (default order)
  });

  const clearFilters = () => {
    setSearchKeyword('');
    setSearchLocation('');
    setSidebarKeyword('');
    setJobFunction('All Functions');
    setCountry('All Countries');
    setStateProvince('All States/Provinces');
    setCity('All Cities');
    setRadius('10 miles');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blue Hero Section */}
      <section className="bg-gradient-to-r from-blue to-blue/90 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/careers">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Careers
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-white mb-6">
              Program Management Careers
            </h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-12">
              Drive impact through strategic program delivery. Our program management teams coordinate 
              complex healthcare initiatives, build partnerships, and ensure sustainable results across 
              African healthcare systems.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-2xl max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-4 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-navy placeholder-gray-400"
                  />
                </div>
                <div className="md:col-span-4 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="City, State/Province, or ZIP"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-navy placeholder-gray-400"
                  />
                </div>
                <div className="md:col-span-2 relative">
                  <select 
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-navy appearance-none bg-white cursor-pointer"
                  >
                    <option>10 miles</option>
                    <option>25 miles</option>
                    <option>50 miles</option>
                    <option>100 miles</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
                <div className="md:col-span-2">
                  <button className="w-full bg-green hover:bg-green-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif font-semibold leading-tight text-navy">Refine Your Search</h3>
                  <button className="text-sm text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Keyword */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Keyword</label>
                    <input
                      type="text"
                      placeholder="Enter keywords"
                      value={sidebarKeyword}
                      onChange={(e) => setSidebarKeyword(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm"
                    />
                  </div>

                  {/* Job Function */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Job Function</label>
                    <div className="relative">
                      <select 
                        value={jobFunction}
                        onChange={(e) => setJobFunction(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm appearance-none bg-white cursor-pointer"
                      >
                        <option>All Functions</option>
                        <option>Program Manager</option>
                        <option>Partnership Coordinator</option>
                        <option>Program Officer</option>
                        <option>M&E Specialist</option>
                        <option>Project Coordinator</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Country</label>
                    <div className="relative">
                      <select 
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm appearance-none bg-white cursor-pointer"
                      >
                        <option>All Countries</option>
                        <option>Uganda</option>
                        <option>Tanzania</option>
                        <option>Ethiopia</option>
                        <option>Kenya</option>
                        <option>Rwanda</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* State/Province */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">State/Province</label>
                    <div className="relative">
                      <select 
                        value={stateProvince}
                        onChange={(e) => setStateProvince(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm appearance-none bg-white cursor-pointer"
                      >
                        <option>All States/Provinces</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">City</label>
                    <div className="relative">
                      <select 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm appearance-none bg-white cursor-pointer"
                      >
                        <option>All Cities</option>
                        <option>Kampala</option>
                        <option>Dar es Salaam</option>
                        <option>Addis Ababa</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  <button className="w-full text-sm text-gray-500 hover:text-gray-700 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors" onClick={clearFilters}>
                    Clear Filters
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Job Listings */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Tabs */}
                <div className="bg-white rounded-t-xl border-b border-gray-200">
                  <div className="flex gap-8 px-6">
                    <button
                      onClick={() => setActiveTab('featured')}
                      className={`py-4 border-b-2 font-semibold transition-colors ${
                        activeTab === 'featured'
                          ? 'border-blue text-blue'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Featured Jobs
                    </button>
                    <button
                      onClick={() => setActiveTab('recent')}
                      className={`py-4 border-b-2 font-semibold transition-colors ${
                        activeTab === 'recent'
                          ? 'border-blue text-blue'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Recently Viewed Jobs
                    </button>
                    <button
                      onClick={() => setActiveTab('saved')}
                      className={`py-4 border-b-2 font-semibold transition-colors ${
                        activeTab === 'saved'
                          ? 'border-blue text-blue'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Saved Jobs
                    </button>
                  </div>
                </div>

                {/* Job Count and Sort */}
                <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
                  <h2 className="text-2xl font-serif font-bold leading-tight text-navy">
                    {filteredJobs.length} Jobs
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <div className="relative">
                      <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 pr-10 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm appearance-none bg-white cursor-pointer"
                      >
                        <option>Most Recent</option>
                        <option>Title A-Z</option>
                        <option>Location</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Job Listings */}
                <div className="bg-white rounded-b-xl">
                  {sortedJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Star className="w-5 h-5 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />
                            <h3 className="text-xl font-bold text-blue hover:text-blue/80 cursor-pointer">
                              {job.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {job.posted}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-navy/10 text-navy rounded-full text-xs font-medium">
                          {job.employmentType}
                        </span>
                        <span className="px-3 py-1 bg-blue/10 text-blue rounded-full text-xs font-medium">
                          {job.level}
                        </span>
                        {job.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="bg-orange/5 border border-orange/20 rounded-lg p-4">
                        <p className="text-sm text-gray-700">
                          <strong>To Apply:</strong> Send your resume to{' '}
                          <a href="mailto:careers@pacemhealth.com" className="text-blue hover:text-blue/80 font-semibold">
                            careers@pacemhealth.com
                          </a>
                          {' '}with "{job.title}" in the subject line.
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}