import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronDown, Search } from 'lucide-react';
import pacemHealthLogo from "figma:asset/a8a15e6407f38496b80f4cc77d6cab12480f615e.png";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6 text-sm">
          <Link href="/contact" className="text-gray-600 hover:text-navy transition-colors">
            Contact Us
          </Link>
          <Link href="/careers" className="text-gray-600 hover:text-navy transition-colors">
            Careers
          </Link>
          <Link href="/investors" className="text-gray-600 hover:text-navy transition-colors">
            Investors
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={pacemHealthLogo} alt="Pacem Health Logo" className="h-16" />
            </div>
          </Link>

          {/* Main Nav Links */}
          <nav className="flex items-center gap-8">
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-gray-700 hover:text-navy transition-colors flex items-center gap-1 py-2">
                About
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 py-2">
                  <Link href="/about/company" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Our Company
                  </Link>
                  <Link href="/about/leadership" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Leadership Team
                  </Link>
                  <Link href="/about/mission-vision" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Mission & Vision
                  </Link>
                  <Link href="/about/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Our History
                  </Link>
                  <Link href="/about/corporate-citizenship" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Corporate Citizenship
                  </Link>
                </div>
              )}
            </div>

            <Link href="/our-approach" className="text-gray-700 hover:text-navy transition-colors py-2">
              Our Approach
            </Link>

            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('commitments')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-gray-700 hover:text-navy transition-colors flex items-center gap-1 py-2">
                Commitments
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'commitments' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 py-2">
                  <Link href="/programs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Programs
                  </Link>
                  <Link href="/about/sustainability" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Sustainability
                  </Link>
                  <Link href="/about/community-impact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Community Impact
                  </Link>
                  <Link href="/about/quality-standards" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Quality Standards
                  </Link>
                  <Link href="/about/quality-assurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Quality Assurance
                  </Link>
                  <Link href="/about/ethics-compliance" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Ethics & Compliance
                  </Link>
                </div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-gray-700 hover:text-navy transition-colors flex items-center gap-1 py-2">
                Business Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-[580px] bg-white shadow-xl rounded-lg border border-gray-200 py-4">
                  <div className="grid grid-cols-2 gap-6 px-4">
                    {/* Healthcare Solutions Column */}
                    <div>
                      <div className="text-xs font-bold text-orange mb-3 tracking-wide">
                        HEALTHCARE SOLUTIONS
                      </div>
                      <div className="space-y-1">
                        <Link href="/solutions/pharmaceutical-supplies" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-navy text-sm">Pharmaceutical & Medical Supplies</div>
                          <div className="text-xs text-gray-500">Quality medicine delivery</div>
                        </Link>
                        <Link href="/solutions/pharmacy-services" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-navy text-sm">Pharmacy Services</div>
                          <div className="text-xs text-gray-500">Comprehensive pharmacy support</div>
                        </Link>
                        <Link href="/solutions/medical-equipment" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-navy text-sm">Medical Equipment & Infrastructure</div>
                          <div className="text-xs text-gray-500">Healthcare infrastructure</div>
                        </Link>
                        <Link href="/solutions/laboratory-diagnostics" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-navy text-sm">Laboratory & Diagnostics</div>
                          <div className="text-xs text-gray-500">Diagnostic solutions</div>
                        </Link>
                        <Link href="/solutions/community-health" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-navy text-sm">Community Health Solutions</div>
                          <div className="text-xs text-gray-500">Reaching every community</div>
                        </Link>
                        <Link href="/solutions/digital-health" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-navy text-sm">Digital Health & Technology</div>
                          <div className="text-xs text-gray-500">Technology solutions</div>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Partner Services Column */}
                    <div>
                      <div className="text-xs font-bold text-orange mb-3 tracking-wide">
                        PARTNER SERVICES
                      </div>
                      <div className="space-y-1">
                        <Link href="/services/market-access" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-navy text-sm">Market Access Services</div>
                          <div className="text-xs text-gray-500">Your gateway to African markets</div>
                        </Link>
                        <Link href="/services/procurement-distribution" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-navy text-sm">Procurement & Distribution</div>
                          <div className="text-xs text-gray-500">Strategic sourcing & wholesale</div>
                        </Link>
                        <Link href="/services/supply-chain-logistics" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-navy text-sm">Supply Chain & Logistics</div>
                          <div className="text-xs text-gray-500">End-to-end delivery</div>
                        </Link>
                        <Link href="/services/regulatory-compliance" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-medium text-navy text-sm">Regulatory & Compliance</div>
                          <div className="text-xs text-gray-500">Navigate regulatory complexity</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* View All Solutions Link */}
                  <div className="border-t border-gray-200 mt-4 pt-3 px-4">
                    <Link href="/" className="text-blue hover:text-navy font-medium text-sm flex items-center gap-1 transition-colors">
                      View All Solutions →
                    </Link>
                  </div>
                  
                  {/* Support Link */}
                  <div className="border-t border-gray-200 mt-2 pt-3 px-4">
                    <Link href="/support" className="text-orange hover:text-orange/80 font-semibold text-sm flex items-center gap-1 transition-colors">
                      Need Help? Visit Support Center →
                    </Link>
                  </div>
                  
                  {/* Shop Link */}
                  <div className="border-t border-gray-200 mt-2 pt-3 px-4">
                    <Link href="/shop" className="text-blue hover:text-navy font-semibold text-sm flex items-center gap-1 transition-colors">
                      Browse Products in Our Shop →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/news-stories" className="text-gray-700 hover:text-navy transition-colors py-2">
              News & Stories
            </Link>

            {/* Logins Button */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('logins')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="bg-orange hover:bg-orange-dark text-white px-4 py-2 rounded-md transition-colors flex items-center gap-1">
                Logins
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'logins' && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 py-2">
                  <Link href="/login/portal" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Healthcare Portal
                  </Link>
                  <Link href="/login/supplier" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Supplier Login
                  </Link>
                  <Link href="/login/pharmacy" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Pharmacy Connect
                  </Link>
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button className="text-gray-700 hover:text-navy transition-colors p-2">
              <Search className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}