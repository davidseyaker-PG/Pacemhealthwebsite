import { Link } from 'wouter';
import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import pacemHealthLogo from "figma:asset/a8a15e6407f38496b80f4cc77d6cab12480f615e.png";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Email Signup Section */}
      <div className="border-b border-navy-light">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-serif mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest news and insights from Pacem Health</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-navy text-white placeholder-gray-400 border border-navy-light rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-blue"
              />
              <button className="px-6 py-3 bg-blue hover:bg-blue-light text-white rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="col-span-2">
            <img src={pacemHealthLogo} alt="Pacem Holdings Logo" className="h-14 mb-4" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming healthcare delivery across Africa through quality medicines, reliable equipment, and sustainable health systems.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>+1 (234) 567-8900</span>
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <span>info@pacemhealth.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>123 Healthcare Drive<br />Atlanta, GA 30301</span>
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-navy hover:bg-blue rounded flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy hover:bg-blue rounded flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy hover:bg-blue rounded flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy hover:bg-blue rounded flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">PRODUCTS</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/products/pharmaceuticals" className="hover:text-blue transition-colors">
                  Pharmaceuticals
                </Link>
              </li>
              <li>
                <Link href="/products/supplies" className="hover:text-blue transition-colors">
                  Medical Supplies
                </Link>
              </li>
              <li>
                <Link href="/products/equipment" className="hover:text-blue transition-colors">
                  Laboratory Equipment
                </Link>
              </li>
              <li>
                <Link href="/products/diagnostics" className="hover:text-blue transition-colors">
                  Diagnostic Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">SOLUTIONS</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/solutions/distribution" className="hover:text-blue transition-colors">
                  Pharmaceutical Distribution
                </Link>
              </li>
              <li>
                <Link href="/solutions/pharmacy" className="hover:text-blue transition-colors">
                  Pharmacy Services
                </Link>
              </li>
              <li>
                <Link href="/solutions/logistics" className="hover:text-blue transition-colors">
                  Supply Chain & Logistics
                </Link>
              </li>
              <li>
                <Link href="/solutions/digital" className="hover:text-blue transition-colors">
                  Digital Health
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Company */}
          <div>
            <h4 className="font-semibold mb-4">SUPPORT</h4>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li>
                <Link href="/support/technical" className="hover:text-blue transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/support/documentation" className="hover:text-blue transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="hover:text-blue transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/support/requests" className="hover:text-blue transition-colors">
                  Service Requests
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-blue transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-blue transition-colors">
                  News & Media
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-blue transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <p>© 2026 Pacem Health. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-blue transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-settings" className="hover:text-blue transition-colors">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}