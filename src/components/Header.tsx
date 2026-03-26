import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import pacemHealthLogo from "figma:asset/a8a15e6407f38496b80f4cc77d6cab12480f615e.png";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Utility Bar - Navy branded */}
      <div className="bg-navy">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6 text-sm">
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-heading">
            Contact Us
          </Link>
          <Link href="/careers" className="text-gray-300 hover:text-white transition-colors font-heading">
            Careers
          </Link>
          <Link href="/investors" className="text-gray-300 hover:text-white transition-colors font-heading">
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

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-navy p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Main Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="font-heading font-semibold text-gray-700 hover:text-navy transition-colors flex items-center gap-1 py-2 relative group">
                About
                <ChevronDown className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green group-hover:w-full transition-all duration-300" />
              </button>
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/about/company" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
                    Our Company
                  </Link>
                  <Link href="/about/leadership" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
                    Leadership Team
                  </Link>
                  <Link href="/about/mission-vision" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
                    Mission & Vision
                  </Link>
                  <Link href="/about/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
                    Our History
                  </Link>
                  <Link href="/about/corporate-citizenship" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
                    Corporate Citizenship
                  </Link>
                </div>
              )}
            </div>

            <Link href="/our-approach" className="font-heading font-semibold text-gray-700 hover:text-navy transition-colors py-2 relative group">
              Our Approach
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green group-hover:w-full transition-all duration-300" />
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('commitments')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="font-heading font-semibold text-gray-700 hover:text-navy transition-colors flex items-center gap-1 py-2 relative group">
                Commitments
                <ChevronDown className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green group-hover:w-full transition-all duration-300" />
              </button>
              {openDropdown === 'commitments' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/programs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
                    Programs
                  </Link>
                  <Link href="/about/sustainability" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
                    Sustainability
                  </Link>
                  <Link href="/about/community-impact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
                    Community Impact
                  </Link>
                  <Link href="/about/quality-standards" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
                    Quality Standards
                  </Link>
                  <Link href="/about/quality-assurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
                    Quality Assurance
                  </Link>
                  <Link href="/about/ethics-compliance" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy transition-colors">
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
              <button className="font-heading font-semibold text-gray-700 hover:text-navy transition-colors flex items-center gap-1 py-2 relative group">
                Business Solutions
                <ChevronDown className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green group-hover:w-full transition-all duration-300" />
              </button>
              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-[580px] bg-white shadow-xl rounded-lg border border-gray-200 py-4 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="grid grid-cols-2 gap-6 px-4">
                    {/* Healthcare Solutions Column */}
                    <div>
                      <div className="text-xs font-heading font-bold text-green mb-3 tracking-wide uppercase">
                        Healthcare Solutions
                      </div>
                      <div className="space-y-1">
                        <Link href="/solutions/pharmaceutical-supplies" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-heading font-semibold text-navy text-sm">Pharmaceutical & Medical Supplies</div>
                          <div className="text-xs text-gray-500">Quality medicine delivery</div>
                        </Link>
                        <Link href="/solutions/pharmacy-services" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-heading font-semibold text-navy text-sm">Pharmacy Services</div>
                          <div className="text-xs text-gray-500">Comprehensive pharmacy support</div>
                        </Link>
                        <Link href="/solutions/medical-equipment" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-heading font-semibold text-navy text-sm">Medical Equipment & Infrastructure</div>
                          <div className="text-xs text-gray-500">Healthcare infrastructure</div>
                        </Link>
                        <Link href="/solutions/laboratory-diagnostics" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-heading font-semibold text-navy text-sm">Laboratory & Diagnostics</div>
                          <div className="text-xs text-gray-500">Diagnostic solutions</div>
                        </Link>
                        <Link href="/solutions/community-health" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-heading font-semibold text-navy text-sm">Community Health Solutions</div>
                          <div className="text-xs text-gray-500">Reaching every community</div>
                        </Link>
                        <Link href="/solutions/digital-health" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-heading font-semibold text-navy text-sm">Digital Health & Technology</div>
                          <div className="text-xs text-gray-500">Technology solutions</div>
                        </Link>
                      </div>
                    </div>

                    {/* Partner Services Column */}
                    <div>
                      <div className="text-xs font-heading font-bold text-orange mb-3 tracking-wide uppercase">
                        Partner Services
                      </div>
                      <div className="space-y-1">
                        <Link href="/services/market-access" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-heading font-semibold text-navy text-sm">Market Access Services</div>
                          <div className="text-xs text-gray-500">Your gateway to African markets</div>
                        </Link>
                        <Link href="/services/procurement-distribution" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-heading font-semibold text-navy text-sm">Procurement & Distribution</div>
                          <div className="text-xs text-gray-500">Strategic sourcing & wholesale</div>
                        </Link>
                        <Link href="/services/supply-chain-logistics" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-heading font-semibold text-navy text-sm">Supply Chain & Logistics</div>
                          <div className="text-xs text-gray-500">End-to-end delivery</div>
                        </Link>
                        <Link href="/services/regulatory-compliance" className="block px-3 py-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="font-heading font-semibold text-navy text-sm">Regulatory & Compliance</div>
                          <div className="text-xs text-gray-500">Navigate regulatory complexity</div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* View All Solutions Link */}
                  <div className="border-t border-gray-200 mt-4 pt-3 px-4">
                    <Link href="/" className="text-blue hover:text-navy font-heading font-semibold text-sm flex items-center gap-1 transition-colors">
                      View All Solutions {'>'}
                    </Link>
                  </div>

                  {/* Support Link */}
                  <div className="border-t border-gray-200 mt-2 pt-3 px-4">
                    <Link href="/support" className="text-orange hover:text-orange/80 font-heading font-semibold text-sm flex items-center gap-1 transition-colors">
                      Need Help? Visit Support Center {'>'}
                    </Link>
                  </div>

                  {/* Shop Link */}
                  <div className="border-t border-gray-200 mt-2 pt-3 px-4">
                    <Link href="/shop" className="text-blue hover:text-navy font-heading font-semibold text-sm flex items-center gap-1 transition-colors">
                      Browse Products in Our Shop {'>'}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/news-stories" className="font-heading font-semibold text-gray-700 hover:text-navy transition-colors py-2 relative group">
              News & Stories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Logins Button */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('logins')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="font-heading bg-orange hover:bg-orange-dark text-white px-5 py-2.5 rounded-md transition-colors flex items-center gap-1 font-semibold shadow-sm">
                Logins
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'logins' && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/login/portal" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                    <div className="font-heading font-semibold text-navy text-sm">Product Catalog</div>
                    <div className="text-xs text-gray-500">Browse products, specs, and place orders</div>
                  </Link>
                  <Link href="/login/supplier" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                    <div className="font-heading font-semibold text-navy text-sm">Supplier Login</div>
                    <div className="text-xs text-gray-500">For upstream supply chain partners</div>
                  </Link>
                  <Link href="/login/pharmacy" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                    <div className="font-heading font-semibold text-navy text-sm">Pharmacy Connect</div>
                    <div className="text-xs text-gray-500">Partner portal for pharmacy clients</div>
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

      {/* Green accent line */}
      <div className="h-[3px] bg-gradient-to-r from-green via-blue to-navy" />

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            <Link href="/about/company" className="block py-2 font-heading font-semibold text-navy">About</Link>
            <Link href="/our-approach" className="block py-2 font-heading font-semibold text-navy">Our Approach</Link>
            <Link href="/programs" className="block py-2 font-heading font-semibold text-navy">Commitments</Link>
            <Link href="/solutions/pharmaceutical-supplies" className="block py-2 font-heading font-semibold text-navy">Business Solutions</Link>
            <Link href="/news-stories" className="block py-2 font-heading font-semibold text-navy">News & Stories</Link>
            <div className="pt-2 border-t border-gray-200">
              <Link href="/login/portal" className="block py-2 font-heading font-semibold text-orange">Logins</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
