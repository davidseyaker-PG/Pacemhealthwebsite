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

export default function BusinessOperations() {
  const [activeTab, setActiveTab] = useState<'featured' | 'recent' | 'saved'>('featured');
  const [sortBy, setSortBy] = useState('Most Recent');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [radius, setRadius] = useState('10 miles');

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Finance Manager - East Africa Region',
      location: 'Nairobi, Kenya',
      country: 'Kenya',
      posted: 'Posted 2 days ago',
      description: 'Lead financial planning, budgeting, and reporting for East Africa operations. Manage regional finance team, ensure compliance with accounting standards, oversee cash flow management, and provide strategic financial insights to support business growth and operational efficiency.',
      employmentType: 'Full-time',
      level: 'Senior-Level',
      tags: ['Kenya', 'Finance']
    },
    {
      id: '2',
      title: 'Human Resources Business Partner',
      location: 'Accra, Ghana',
      country: 'Ghana',
      posted: 'Posted 4 days ago',
      description: 'Partner with business leaders to develop and execute HR strategies that drive organizational effectiveness. Manage talent acquisition, employee relations, performance management, and training initiatives. Foster inclusive workplace culture and support employee development across multiple countries.',
      employmentType: 'Full-time',
      level: 'Mid-Level',
      tags: ['Ghana', 'HR']
    },
    {
      id: '3',
      title: 'Procurement & Supply Chain Specialist',
      location: 'Johannesburg, South Africa',
      country: 'South Africa',
      posted: 'Posted 1 week ago',
      description: 'Manage procurement operations for medical supplies, pharmaceuticals, and operational materials. Develop supplier relationships, negotiate contracts, ensure compliance with procurement policies, and optimize supply chain efficiency. Experience with healthcare procurement and regulatory requirements preferred.',
      employmentType: 'Full-time',
      level: 'Mid-Level',
      tags: ['South Africa', 'Procurement']
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesKeyword = !searchKeyword || 
      job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.description.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesLocation = !searchLocation || 
      job.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
      job.country.toLowerCase().includes(searchLocation.toLowerCase());
    return matchesKeyword && matchesLocation;
  });

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
            <h1 className="text-6xl lg:text-7xl font-serif text-white mb-6">
              Business Operations Careers
            </h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-12">
              Power organizational excellence across Africa. Our business operations teams in finance, 
              HR, legal, and procurement create the foundation that enables our healthcare mission to thrive.
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
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
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
                  <h3 className="font-bold text-navy">Refine Your Search</h3>
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
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm"
                    />
                  </div>

                  {/* Job Function */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Job Function</label>
                    <div className="relative">
                      <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm appearance-none bg-white cursor-pointer">
                        <option>All Functions</option>
                        <option>Finance & Accounting</option>
                        <option>Human Resources</option>
                        <option>Legal & Compliance</option>
                        <option>Procurement</option>
                        <option>Administration</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Country</label>
                    <div className="relative">
                      <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm appearance-none bg-white cursor-pointer">
                        <option>All Countries</option>
                        <option>Kenya</option>
                        <option>Ghana</option>
                        <option>South Africa</option>
                        <option>Nigeria</option>
                        <option>Tanzania</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* State/Province */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">State/Province</label>
                    <div className="relative">
                      <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm appearance-none bg-white cursor-pointer">
                        <option>All States/Provinces</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">City</label>
                    <div className="relative">
                      <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue focus:border-transparent text-sm appearance-none bg-white cursor-pointer">
                        <option>All Cities</option>
                        <option>Nairobi</option>
                        <option>Accra</option>
                        <option>Johannesburg</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  <button className="w-full text-sm text-gray-500 hover:text-gray-700 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
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
                  <h2 className="text-2xl font-bold text-blue">
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
                  {filteredJobs.map((job, index) => (
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
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {job.employmentType}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {job.level}
                        </span>
                        {job.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
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
