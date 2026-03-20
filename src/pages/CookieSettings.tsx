import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Cookie, Shield, Search, CheckCircle, XCircle, Clock, ExternalLink } from 'lucide-react';

interface CookieCategory {
  id: string;
  name: string;
  required: boolean;
  enabled: boolean;
  description: string;
  examples: string[];
  retention: string;
}

interface CookieDetail {
  name: string;
  provider: string;
  purpose: string;
  type: string;
  duration: string;
  category: string;
}

interface Vendor {
  name: string;
  purpose: string;
  privacyUrl: string;
  enabled: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-xl font-serif text-navy">{title}</h3>
        <ChevronDown
          className={`w-6 h-6 text-blue transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 pt-0 bg-white"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

function Toggle({ enabled, onChange, disabled = false }: { enabled: boolean; onChange: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={disabled ? undefined : onChange}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-blue' : 'bg-gray-300'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

export default function CookieSettings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [consentStatus, setConsentStatus] = useState<'accepted' | 'rejected' | 'customized'>('customized');

  const [categories, setCategories] = useState<CookieCategory[]>([
    {
      id: 'necessary',
      name: 'Strictly Necessary',
      required: true,
      enabled: true,
      description: 'These cookies are essential for core site functionality and security—such as maintaining sessions, preventing fraud, and enabling account access. Because they are essential, you cannot disable them.',
      examples: [
        'Authentication and session management',
        'Security and fraud prevention',
        'Load balancing and performance optimization',
        'Remember login state and portal access',
        'CSRF protection tokens'
      ],
      retention: 'Session to 1 year'
    },
    {
      id: 'functional',
      name: 'Functional',
      required: false,
      enabled: true,
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences, language selection, and region settings.',
      examples: [
        'Language and region preferences',
        'User interface customization',
        'Display preferences (list view vs. grid view)',
        'Notification settings',
        'Accessibility preferences'
      ],
      retention: '6 months to 2 years'
    },
    {
      id: 'analytics',
      name: 'Analytics & Performance',
      required: false,
      enabled: false,
      description: 'These cookies help us understand how visitors use our website and services, allowing us to measure performance and improve user experience. Data is typically aggregated and anonymized.',
      examples: [
        'Google Analytics (page views, user journeys, bounce rates)',
        'Heatmaps and click tracking',
        'Performance monitoring',
        'A/B testing and optimization',
        'Error tracking and debugging'
      ],
      retention: '2 months to 2 years'
    },
    {
      id: 'marketing',
      name: 'Marketing & Advertising',
      required: false,
      enabled: false,
      description: 'These cookies are used to deliver relevant advertisements and track the effectiveness of marketing campaigns. They may also be used to limit the number of times you see an ad.',
      examples: [
        'LinkedIn Insight Tag (B2B targeting)',
        'Google Ads conversion tracking',
        'Retargeting pixels',
        'Social media sharing and engagement tracking',
        'Email campaign attribution'
      ],
      retention: '3 months to 2 years'
    },
    {
      id: 'security',
      name: 'Security & Fraud Prevention',
      required: false,
      enabled: true,
      description: 'These cookies help us detect and prevent fraudulent activity, bot traffic, and security threats to protect our platform and users.',
      examples: [
        'Bot detection and CAPTCHA',
        'Anomaly detection and abuse prevention',
        'Rate limiting and DDoS protection',
        'Login attempt monitoring',
        'Device fingerprinting for fraud prevention'
      ],
      retention: '30 days to 1 year'
    }
  ]);

  const [vendors, setVendors] = useState<Vendor[]>([
    {
      name: 'Google LLC',
      purpose: 'Analytics, Maps, ReCAPTCHA, Cloud Services',
      privacyUrl: 'https://policies.google.com/privacy',
      enabled: false
    },
    {
      name: 'Microsoft Corporation',
      purpose: 'Cloud hosting, authentication, productivity tools',
      privacyUrl: 'https://privacy.microsoft.com/privacystatement',
      enabled: true
    },
    {
      name: 'LinkedIn Corporation',
      purpose: 'B2B advertising and analytics',
      privacyUrl: 'https://www.linkedin.com/legal/privacy-policy',
      enabled: false
    },
    {
      name: 'Zendesk Inc.',
      purpose: 'Customer support and help desk',
      privacyUrl: 'https://www.zendesk.com/company/privacy-and-data-protection/',
      enabled: true
    }
  ]);

  const cookieDetails: CookieDetail[] = [
    // Strictly Necessary
    { name: 'PHSESSIONID', provider: 'Pacem Health', purpose: 'Maintain user session and authentication state', type: 'HTTP Cookie', duration: 'Session', category: 'necessary' },
    { name: 'csrf_token', provider: 'Pacem Health', purpose: 'Protect against cross-site request forgery attacks', type: 'HTTP Cookie', duration: '1 hour', category: 'necessary' },
    { name: 'auth_token', provider: 'Pacem Health', purpose: 'Secure authentication for portal access', type: 'HTTP Cookie', duration: '30 days', category: 'necessary' },
    { name: '__cfduid', provider: 'Cloudflare', purpose: 'Security and DDoS protection', type: 'HTTP Cookie', duration: '30 days', category: 'necessary' },
    
    // Functional
    { name: 'user_prefs', provider: 'Pacem Health', purpose: 'Store user preferences and settings', type: 'Local Storage', duration: '1 year', category: 'functional' },
    { name: 'lang', provider: 'Pacem Health', purpose: 'Remember language preference', type: 'HTTP Cookie', duration: '1 year', category: 'functional' },
    { name: 'region', provider: 'Pacem Health', purpose: 'Remember geographic region for content localization', type: 'HTTP Cookie', duration: '6 months', category: 'functional' },
    
    // Analytics
    { name: '_ga', provider: 'Google Analytics', purpose: 'Distinguish unique users for analytics', type: 'HTTP Cookie', duration: '2 years', category: 'analytics' },
    { name: '_gid', provider: 'Google Analytics', purpose: 'Distinguish users for 24-hour analytics', type: 'HTTP Cookie', duration: '24 hours', category: 'analytics' },
    { name: '_gat', provider: 'Google Analytics', purpose: 'Throttle request rate', type: 'HTTP Cookie', duration: '1 minute', category: 'analytics' },
    { name: 'ph_analytics', provider: 'Pacem Health', purpose: 'Internal usage analytics and performance monitoring', type: 'Local Storage', duration: '1 year', category: 'analytics' },
    
    // Marketing
    { name: '_fbp', provider: 'Meta/Facebook', purpose: 'Track visits across websites for advertising', type: 'HTTP Cookie', duration: '3 months', category: 'marketing' },
    { name: 'li_sugr', provider: 'LinkedIn', purpose: 'Browser identification for LinkedIn advertising', type: 'HTTP Cookie', duration: '3 months', category: 'marketing' },
    { name: 'bcookie', provider: 'LinkedIn', purpose: 'Browser identification for LinkedIn features', type: 'HTTP Cookie', duration: '2 years', category: 'marketing' },
    { name: '_gcl_au', provider: 'Google Ads', purpose: 'Store and track conversions', type: 'HTTP Cookie', duration: '3 months', category: 'marketing' },
    
    // Security
    { name: 'recaptcha', provider: 'Google reCAPTCHA', purpose: 'Detect bots and prevent automated abuse', type: 'HTTP Cookie', duration: '6 months', category: 'security' },
    { name: 'ph_device_fp', provider: 'Pacem Health', purpose: 'Device fingerprinting for fraud prevention', type: 'Local Storage', duration: '1 year', category: 'security' },
  ];

  const handleAcceptAll = () => {
    const updated = categories.map(cat => ({ ...cat, enabled: true }));
    setCategories(updated);
    setVendors(vendors.map(v => ({ ...v, enabled: true })));
    setConsentStatus('accepted');
    setLastUpdated(new Date());
  };

  const handleRejectAll = () => {
    const updated = categories.map(cat => ({ 
      ...cat, 
      enabled: cat.required ? true : false 
    }));
    setCategories(updated);
    setVendors(vendors.map(v => ({ ...v, enabled: false })));
    setConsentStatus('rejected');
    setLastUpdated(new Date());
  };

  const handleSavePreferences = () => {
    setConsentStatus('customized');
    setLastUpdated(new Date());
    // In production, save to localStorage or backend
  };

  const handleToggleCategory = (id: string) => {
    setCategories(categories.map(cat => 
      cat.id === id && !cat.required ? { ...cat, enabled: !cat.enabled } : cat
    ));
  };

  const handleToggleVendor = (name: string) => {
    setVendors(vendors.map(v => 
      v.name === name ? { ...v, enabled: !v.enabled } : v
    ));
  };

  const filteredCookies = cookieDetails.filter(cookie =>
    cookie.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cookie.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cookie.provider.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getConsentStatusColor = () => {
    switch (consentStatus) {
      case 'accepted': return 'text-green-600';
      case 'rejected': return 'text-red-600';
      case 'customized': return 'text-blue';
    }
  };

  const getConsentStatusIcon = () => {
    switch (consentStatus) {
      case 'accepted': return <CheckCircle className="w-5 h-5" />;
      case 'rejected': return <XCircle className="w-5 h-5" />;
      case 'customized': return <Cookie className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy via-navy to-blue text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Cookie className="w-12 h-12" />
              <h1 className="text-6xl lg:text-7xl font-serif text-white">Cookie Settings</h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              Manage how we use cookies and similar technologies to enhance your experience, analyze usage,
              and deliver relevant content.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Consent Status Panel */}
        <div className="bg-white border-2 border-navy rounded-lg p-8 mb-8 shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-serif text-navy mb-2">Your Consent Status</h2>
              <div className={`flex items-center gap-2 ${getConsentStatusColor()} font-semibold`}>
                {getConsentStatusIcon()}
                <span className="capitalize">{consentStatus}</span>
              </div>
              {lastUpdated && (
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: {lastUpdated.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleAcceptAll}
              className="px-6 py-3 bg-blue text-white rounded-md hover:bg-navy transition-colors font-semibold"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectAll}
              className="px-6 py-3 bg-gray-200 text-navy rounded-md hover:bg-gray-300 transition-colors font-semibold"
            >
              Reject All
            </button>
            <button
              onClick={handleSavePreferences}
              className="px-6 py-3 border-2 border-blue text-blue rounded-md hover:bg-blue hover:text-white transition-colors font-semibold"
            >
              Save My Preferences
            </button>
          </div>
        </div>

        {/* Category Toggles */}
        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Cookie Categories</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We use different types of cookies for different purposes. You can choose which categories to enable,
            except for strictly necessary cookies which are required for the site to function.
          </p>

          <div className="space-y-4">
            {categories.map((category) => (
              <AccordionItem 
                key={category.id} 
                title={category.name}
                defaultOpen={category.id === 'necessary'}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed mb-4">{category.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-navy mb-2">Examples:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          {category.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-bold text-navy mb-1">Typical Retention:</h4>
                        <p className="text-gray-700">{category.retention}</p>
                      </div>
                    </div>

                    <div className="ml-6 flex-shrink-0">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-navy">
                          {category.enabled ? 'ON' : 'OFF'}
                        </span>
                        <Toggle
                          enabled={category.enabled}
                          onChange={() => handleToggleCategory(category.id)}
                          disabled={category.required}
                        />
                      </div>
                      {category.required && (
                        <p className="text-xs text-gray-500 mt-2 text-right">
                          Always Active
                        </p>
                      )}
                    </div>
                  </div>

                  {category.required && (
                    <div className="bg-blue/10 border-l-4 border-blue p-4 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">
                          <strong>Required for Core Functionality:</strong> These cookies cannot be disabled
                          as they are essential for security, authentication, and basic site operations.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </AccordionItem>
            ))}
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Cookie Details</h2>
          
          {/* Search */}
          <div className="mb-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search cookies by name, provider, or purpose..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Cookie Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Provider</th>
                    <th className="px-6 py-4 text-left font-semibold">Purpose</th>
                    <th className="px-6 py-4 text-left font-semibold">Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCookies.length > 0 ? (
                    filteredCookies.map((cookie, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        <td className="px-6 py-4 font-mono text-sm text-navy">{cookie.name}</td>
                        <td className="px-6 py-4 text-gray-700">{cookie.provider}</td>
                        <td className="px-6 py-4 text-gray-700">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-gray-700">{cookie.type}</td>
                        <td className="px-6 py-4 text-gray-700">{cookie.duration}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-blue/10 text-blue text-xs font-semibold rounded-full capitalize">
                            {cookie.category}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                        No cookies found matching "{searchQuery}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Vendor List */}
        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Third-Party Vendors</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We work with trusted third-party vendors to provide analytics, security, and other services.
            You can manage vendor permissions below.
          </p>

          <div className="space-y-4">
            {vendors.map((vendor) => (
              <div 
                key={vendor.name}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-navy mb-2">{vendor.name}</h4>
                    <p className="text-gray-700 mb-3">{vendor.purpose}</p>
                    <a
                      href={vendor.privacyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue hover:underline text-sm"
                    >
                      <span>View Privacy Policy</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="ml-6 flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-navy">
                        {vendor.enabled ? 'ON' : 'OFF'}
                      </span>
                      <Toggle
                        enabled={vendor.enabled}
                        onChange={() => handleToggleVendor(vendor.name)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Change Settings */}
        <section className="mb-12 bg-orange/10 border-l-4 border-orange p-6 rounded-r-lg">
          <h3 className="font-bold text-navy mb-3 flex items-center gap-2">
            <Cookie className="w-5 h-5" />
            How to Change Settings Later
          </h3>
          <p className="text-gray-700 leading-relaxed">
            You can return to this Cookie Settings page at any time via the footer link on any page. Your
            preferences are saved locally and will persist across sessions. If you clear your browser data,
            you may need to reset your preferences.
          </p>
        </section>

        {/* Browser Controls */}
        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Browser-Level Controls</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Block all cookies</li>
              <li>Block third-party cookies</li>
              <li>Delete cookies when you close your browser</li>
              <li>View and delete individual cookies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Note:</strong> Blocking or deleting cookies may impact your ability to use certain features
              of our Platform. Learn more about cookie controls in your browser:
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline text-sm">
                Chrome
              </a>
              <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline text-sm">
                Firefox
              </a>
              <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline text-sm">
                Safari
              </a>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline text-sm">
                Edge
              </a>
            </div>
          </div>
        </section>

        {/* Legal References */}
        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Legal Framework</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Our use of cookies is governed by applicable data protection and privacy laws, including GDPR
              (General Data Protection Regulation), ePrivacy Directive, and emerging African data protection
              frameworks. Cookie rules work alongside broader data protection principles of transparency, consent,
              and user rights.
            </p>
            <p>
              <strong>Operating Countries:</strong> Pacem Health operates across multiple African countries including
              Kenya, Nigeria, Ghana, South Africa, and other markets where we provide healthcare logistics services.
              We comply with local data protection and cookie requirements in each jurisdiction.
            </p>
          </div>
        </section>

        {/* Related Documents */}
        <section>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Related Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/privacy-policy"
              className="p-6 border-2 border-blue hover:bg-blue hover:text-white rounded-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-blue group-hover:text-white flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy group-hover:text-white mb-2">Privacy Notice</h4>
                  <p className="text-sm text-gray-700 group-hover:text-white">
                    Learn how we collect, use, and protect your personal information
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-blue group-hover:text-white">
                    <span className="text-sm font-semibold">Read Privacy Notice</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/terms-of-service"
              className="p-6 border-2 border-blue hover:bg-blue hover:text-white rounded-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <Cookie className="w-8 h-8 text-blue group-hover:text-white flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-navy group-hover:text-white mb-2">Terms of Service</h4>
                  <p className="text-sm text-gray-700 group-hover:text-white">
                    Review the legal terms governing your use of our Platform
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-blue group-hover:text-white">
                    <span className="text-sm font-semibold">Read Terms</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
