import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, Settings } from 'lucide-react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl border-t-4 border-orange overflow-hidden">
            {!showSettings ? (
              // Main Cookie Banner
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-orange" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-navy mb-2">
                      We Value Your Privacy
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                      By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                      <a href="/privacy-policy" className="text-blue hover:underline">Privacy Policy</a>.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue/90 transition-colors"
                      >
                        Accept All
                      </button>
                      <button
                        onClick={handleRejectAll}
                        className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                      >
                        Reject All
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Customize
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowBanner(false)}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close banner"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              // Cookie Settings Panel
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-serif text-navy mb-2">
                      Cookie Preferences
                    </h3>
                    <p className="text-gray-600">
                      Choose which cookies you want to allow
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close settings"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-navy">Necessary Cookies</h4>
                        <span className="text-xs bg-navy text-white px-2 py-1 rounded">Required</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Essential for the website to function properly. These cannot be disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-navy rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-navy mb-1">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Help us understand how visitors interact with our website to improve user experience.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className="ml-4"
                      aria-label="Toggle analytics cookies"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.analytics ? 'bg-blue justify-end' : 'bg-gray-300 justify-start'
                      } px-1`}>
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-navy mb-1">Marketing Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Used to deliver personalized advertisements and track campaign effectiveness.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className="ml-4"
                      aria-label="Toggle marketing cookies"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.marketing ? 'bg-blue justify-end' : 'bg-gray-300 justify-start'
                      } px-1`}>
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="bg-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue/90 transition-colors"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
