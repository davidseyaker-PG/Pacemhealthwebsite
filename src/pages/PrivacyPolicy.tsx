import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Shield, Globe, Lock, Mail, Phone, MapPin } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue transition-colors"
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
          className="pb-6 space-y-4 text-gray-700 leading-relaxed"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

function CalloutBox({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-blue/10 border-l-4 border-blue p-6 rounded-r-lg my-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Icon className="w-6 h-6 text-blue" />
        </div>
        <div>
          <h4 className="font-bold text-navy mb-3">{title}</h4>
          <div className="text-gray-700 leading-relaxed space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy via-navy to-blue text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-7xl font-serif text-white mb-6">Privacy Notice</h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl leading-relaxed">
              How we collect, use, share, and protect personal information across Pacem Health's
              platforms, services, and logistics operations.
            </p>
            <p className="text-sm text-gray-300 mb-8">
              <strong>Effective Date:</strong> January 18, 2026 | <strong>Last Updated:</strong> January 18, 2026
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection('who-we-are')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-sm"
              >
                Who We Are
              </button>
              <button
                onClick={() => scrollToSection('what-we-collect')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-sm"
              >
                What We Collect
              </button>
              <button
                onClick={() => scrollToSection('how-we-use')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-sm"
              >
                How We Use
              </button>
              <button
                onClick={() => scrollToSection('how-we-share')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-sm"
              >
                How We Share
              </button>
              <button
                onClick={() => scrollToSection('cross-border')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-sm"
              >
                Cross-Border Transfers
              </button>
              <button
                onClick={() => scrollToSection('your-rights')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-sm"
              >
                Your Rights
              </button>
              <button
                onClick={() => scrollToSection('cookies')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-sm"
              >
                Cookies
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Who We Are / Scope */}
        <section id="who-we-are" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Who We Are</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>Pacem Health Corporation</strong> and its affiliated entities ("Pacem," "we," "us," or "our")
              are committed to protecting the privacy of individuals whose personal information we collect and
              process in connection with our healthcare logistics and distribution services across Africa.
            </p>
            <p>
              <strong>This Privacy Notice applies to:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pacem Health websites and online platforms</li>
              <li>Customer and supplier portals</li>
              <li>Mobile applications (including driver apps and tracking applications)</li>
              <li>Client support and sales communications</li>
              <li>
                Operational logistics services including pickup/delivery, warehousing, cold chain management,
                and last-mile distribution
              </li>
            </ul>
          </div>
        </section>

        {/* Information We Collect */}
        <section id="what-we-collect" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Information We Collect</h2>
          <div className="space-y-2">
            <AccordionItem title="Information You Provide" defaultOpen>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information:</strong> Name, email address, phone number, job title, organization name</li>
                <li><strong>Account credentials:</strong> Username, password, and authentication details for portal access</li>
                <li><strong>Billing and payment information:</strong> Billing addresses, payment card details, banking information</li>
                <li><strong>Communications:</strong> Support tickets, inquiries, feedback, and other communications with Pacem</li>
                <li><strong>Professional information:</strong> Medical licenses, certifications, business registration details</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Operational / Logistics Data">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Delivery information:</strong> Pickup and delivery addresses, contact persons, delivery instructions</li>
                <li><strong>Chain-of-custody records:</strong> Transfer logs, temperature monitoring data, handling records</li>
                <li><strong>Proof of delivery:</strong> Signatures, photographs, timestamps (where permitted and necessary)</li>
                <li><strong>Route and shipment data:</strong> GPS coordinates, route information, delivery timestamps, vehicle information</li>
                <li><strong>Inventory data:</strong> Product codes, quantities, storage location, expiration dates</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Health / Sensitive Data">
              <CalloutBox icon={Shield} title="Special Category Data Handling">
                <p>
                  In limited circumstances, we may process health-related information or other sensitive personal data,
                  such as patient identifiers on labels or manifests (e.g., patient name, date of birth, medical record number),
                  prescription references, or laboratory order information.
                </p>
                <p className="mt-2">
                  <strong>Our commitments:</strong>
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Data minimization: We collect only what is strictly necessary for service delivery</li>
                  <li>Access controls: Strict role-based access limitations</li>
                  <li>Enhanced security: Additional technical and organizational safeguards</li>
                  <li>Contractual protections: Enforceable data processing agreements with all parties</li>
                </ul>
                <p className="mt-3">
                  <strong>HIPAA Compliance (where applicable):</strong> Where Pacem acts as a Business Associate or
                  service provider handling Protected Health Information (PHI) under U.S. law, we process PHI under
                  contractual Business Associate Agreements and comply with applicable HIPAA requirements.
                </p>
              </CalloutBox>
            </AccordionItem>

            <AccordionItem title="Device / Website Data">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Device information:</strong> IP address, browser type and version, device identifiers, operating system</li>
                <li><strong>Usage data:</strong> Pages visited, clicks, time spent, referral URLs, search queries</li>
                <li><strong>Cookies and trackers:</strong> See our <a href="/cookie-settings" className="text-blue hover:underline">Cookie Settings</a> page for detailed information</li>
                <li><strong>Location data:</strong> GPS data from mobile apps (with permission), approximate location from IP addresses</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Information from Third Parties">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Client organizations:</strong> Hospitals, clinics, pharmacies, and other healthcare facilities</li>
                <li><strong>Business partners:</strong> Logistics partners, suppliers, distributors</li>
                <li><strong>Verification services:</strong> Identity verification and fraud prevention vendors</li>
                <li><strong>Payment processors:</strong> Transaction details and payment status information</li>
                <li><strong>Public sources:</strong> Regulatory databases, business registries, professional licensing boards</li>
              </ul>
            </AccordionItem>
          </div>
        </section>

        {/* How We Use Information */}
        <section id="how-we-use" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">How We Use Information</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Purpose</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Provide Services</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    Route planning, order fulfillment, delivery proof, warehouse management, cold chain monitoring,
                    customer support, account management
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Safety & Integrity</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    Fraud detection and prevention, security incident investigation, risk assessment,
                    platform integrity monitoring
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Quality & Compliance</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    Internal audits, quality assurance, temperature excursion investigations, regulatory compliance,
                    pharmaceutical handling standards
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Communications</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    Service alerts, delivery notifications, account updates, onboarding materials,
                    training resources, system maintenance notices
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Analytics & Improvement</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    Service performance metrics, route optimization, capacity planning, user experience improvement,
                    aggregated trend analysis
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Legal Obligations</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    Responding to lawful requests, enforcing terms and conditions, protecting legal rights,
                    complying with regulatory requirements
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-navy mb-3">Legal Bases for Processing (GDPR/UKGDPR)</h4>
            <p className="text-gray-700 leading-relaxed mb-2">
              Where applicable, we process personal data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Contract:</strong> Processing necessary to perform our services under agreement with you</li>
              <li><strong>Consent:</strong> You have given explicit consent for specific processing activities</li>
              <li><strong>Legitimate interests:</strong> Processing necessary for our legitimate business interests (balanced against your rights)</li>
              <li><strong>Legal obligation:</strong> Processing required to comply with applicable laws and regulations</li>
              <li><strong>Vital interests:</strong> Processing necessary to protect health, safety, or vital interests</li>
            </ul>
          </div>
        </section>

        {/* How We Share Information */}
        <section id="how-we-share" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">How We Share Information</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              We share personal information with third parties only as described below. <strong>We do not sell personal data.</strong>
            </p>

            <div>
              <h4 className="font-bold text-navy mb-2">With Clients & Healthcare Facilities</h4>
              <p>
                We share delivery status, proof of delivery, chain-of-custody records, and related operational data
                with hospitals, clinics, pharmacies, and other healthcare organizations that use our services.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-navy mb-2">With Service Providers & Vendors</h4>
              <p className="mb-2">
                We engage third-party vendors to support our operations, subject to contractual data protection obligations:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cloud hosting and infrastructure providers</li>
                <li>Analytics and performance monitoring tools</li>
                <li>Customer support and communication platforms</li>
                <li>Payment processors and financial services</li>
                <li>Security and fraud prevention services</li>
                <li>Professional advisors (legal, accounting, consulting)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-navy mb-2">With Logistics Partners</h4>
              <p>
                We may share information with subcontracted couriers, warehouse operators, and transportation providers
                to the extent necessary to fulfill delivery obligations, under strict purpose limitation and
                confidentiality requirements.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-navy mb-2">With Regulators & Law Enforcement</h4>
              <p>
                We disclose information when legally required, including in response to court orders, government
                investigations, regulatory audits, or to protect the rights, property, and safety of Pacem, our
                clients, or the public.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-navy mb-2">Corporate Transactions</h4>
              <p>
                In the event of a merger, acquisition, reorganization, or sale of assets, personal information may be
                transferred to the successor entity, subject to continued application of this Privacy Notice or
                equivalent protections.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-Border Transfers */}
        <section id="cross-border" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Cross-Border Data Transfers</h2>
          
          <CalloutBox icon={Globe} title="International Data Transfers">
            <p>
              Pacem Health operates across multiple African countries and may transfer personal data internationally
              to support our logistics and technology infrastructure.
            </p>
            <p className="mt-3">
              <strong>Where Data May Be Processed:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>African countries where we operate logistics and distribution services</li>
              <li>United States (cloud infrastructure, support services, corporate functions)</li>
              <li>European Union (cloud infrastructure, analytics platforms)</li>
              <li>Other regions where our technology vendors and service providers are located</li>
            </ul>
            <p className="mt-3">
              <strong>Transfer Safeguards:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Standard Contractual Clauses (SCCs):</strong> Where required by law, we implement
                EU-approved SCCs or equivalent contractual protections
              </li>
              <li>
                <strong>Vendor Due Diligence:</strong> All international vendors undergo privacy and security assessments
              </li>
              <li>
                <strong>Data Minimization:</strong> We transfer only the minimum data necessary for the specific purpose
              </li>
              <li>
                <strong>Encryption:</strong> Data in transit is encrypted using industry-standard protocols (TLS 1.2+)
              </li>
              <li>
                <strong>Regional Compliance:</strong> We monitor and adapt to evolving data protection requirements
                across African jurisdictions
              </li>
            </ul>
            <p className="mt-3 text-sm">
              Many African data protection laws are influenced by GDPR principles. We design our cross-border
              transfer mechanisms to meet these standards and provide transparency to data subjects.
            </p>
          </CalloutBox>
        </section>

        {/* Data Retention */}
        <section id="retention" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Data Retention</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
            <p>
              We retain personal information for as long as necessary to fulfill the purposes described in this
              Privacy Notice, unless a longer retention period is required or permitted by law.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Data Category</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Retention Period</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Account Information</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Duration of relationship + 7 years</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Contractual, audit, legal requirements</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Delivery Records</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">7 years from delivery date</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Pharmaceutical regulations, liability, disputes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Temperature Logs</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">7 years from creation</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Cold chain compliance, regulatory audit</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Financial Records</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">10 years</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Tax, accounting, audit requirements</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Support Communications</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">3 years from resolution</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Quality improvement, training</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Marketing Consent</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Until withdrawal or 3 years of inactivity</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Consent management, preference tracking</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-semibold text-navy">Aggregated Analytics</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Indefinitely (de-identified)</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">Business intelligence, research</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              <strong>De-identification and Aggregation:</strong> Where possible, we de-identify or aggregate personal
              data for long-term analytics, research, and business intelligence purposes. Once properly de-identified,
              data is no longer subject to this Privacy Notice.
            </p>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Security</h2>
          
          <CalloutBox icon={Lock} title="Our Security Commitment">
            <p>
              Pacem Health implements technical, organizational, and physical safeguards designed to protect personal
              information from unauthorized access, disclosure, alteration, and destruction.
            </p>
            <p className="mt-3">
              <strong>Security Measures Include:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Encryption:</strong> Data in transit protected via TLS 1.2+ encryption; data at rest encrypted
                using AES-256 or equivalent
              </li>
              <li>
                <strong>Access Controls:</strong> Role-based access control (RBAC), multi-factor authentication (MFA),
                least-privilege principle
              </li>
              <li>
                <strong>Network Security:</strong> Firewalls, intrusion detection systems, regular vulnerability scanning
              </li>
              <li>
                <strong>Vendor Management:</strong> Third-party security assessments, contractual security obligations
              </li>
              <li>
                <strong>Employee Training:</strong> Regular privacy and security awareness training for all personnel
              </li>
              <li>
                <strong>Incident Response:</strong> Documented incident response procedures and breach notification protocols
              </li>
              <li>
                <strong>Physical Security:</strong> Controlled access to facilities, surveillance, secure disposal procedures
              </li>
            </ul>
            <p className="mt-3">
              <strong>Breach Notification:</strong> In the event of a data breach that poses a risk to individual rights,
              we will notify affected individuals and applicable regulators in accordance with legal requirements.
            </p>
          </CalloutBox>

          <div className="mt-6 text-gray-700 leading-relaxed">
            <p>
              While we strive to protect your information using industry-standard practices, no security system is
              impenetrable. We cannot guarantee absolute security and encourage you to take steps to protect your
              account credentials and report any suspected security issues promptly.
            </p>
          </div>
        </section>

        {/* Your Privacy Rights */}
        <section id="your-rights" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Your Privacy Rights</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
            <p>
              Depending on your location and the nature of our relationship with you, you may have certain rights
              regarding your personal information:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-navy mb-2">Access</h4>
              <p className="text-gray-700">
                Request a copy of the personal information we hold about you
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-navy mb-2">Correction</h4>
              <p className="text-gray-700">
                Request correction of inaccurate or incomplete personal information
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-navy mb-2">Deletion</h4>
              <p className="text-gray-700">
                Request deletion of your personal information (subject to legal retention obligations)
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-navy mb-2">Objection / Restriction</h4>
              <p className="text-gray-700">
                Object to or restrict certain processing activities
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-navy mb-2">Data Portability</h4>
              <p className="text-gray-700">
                Receive your data in a structured, commonly used format (where applicable)
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-navy mb-2">Withdraw Consent</h4>
              <p className="text-gray-700">
                Withdraw consent for processing based on consent (where applicable)
              </p>
            </div>
          </div>

          <CalloutBox icon={Mail} title="How to Submit a Privacy Request">
            <p><strong>To exercise your privacy rights, contact us via:</strong></p>
            <div className="mt-3 space-y-2">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@pacemhealth.com" className="text-blue hover:underline">
                  privacy@pacemhealth.com
                </a>
              </p>
              <p>
                <strong>Online Form:</strong>{' '}
                <a href="/contact" className="text-blue hover:underline">
                  Submit Privacy Request
                </a>
              </p>
              <p className="mt-3">
                <strong>Identity Verification:</strong> To protect your privacy, we will verify your identity before
                responding to requests. Please provide sufficient information to identify yourself (e.g., account email,
                order number, or other identifying details).
              </p>
              <p className="mt-2">
                <strong>Response Time:</strong> We aim to respond to verified requests within 30 days (or as required
                by applicable law). For complex requests, we may extend this period and will notify you.
              </p>
            </div>
          </CalloutBox>

          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-navy mb-2">Right to Complain</h4>
            <p className="text-gray-700 leading-relaxed">
              If you believe your privacy rights have been violated, you have the right to lodge a complaint with
              your local data protection authority or supervisory body. We encourage you to contact us first so we
              can address your concerns directly.
            </p>
          </div>
        </section>

        {/* Cookies & Tracking */}
        <section id="cookies" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Cookies & Tracking Technologies</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Pacem Health uses cookies, pixels, and similar tracking technologies to operate our websites and services,
              analyze usage patterns, and improve user experience.
            </p>
            <div className="p-6 bg-blue/10 rounded-lg">
              <h4 className="font-bold text-navy mb-3">Cookie Categories</h4>
              <ul className="space-y-2">
                <li>
                  <strong>Strictly Necessary:</strong> Essential for site functionality (e.g., authentication, security)
                </li>
                <li>
                  <strong>Performance / Analytics:</strong> Help us understand how visitors use our site (e.g., Google Analytics)
                </li>
                <li>
                  <strong>Functional:</strong> Enable enhanced features and personalization
                </li>
                <li>
                  <strong>Marketing / Advertising:</strong> Used for targeted advertising and retargeting campaigns
                </li>
              </ul>
            </div>
            <p>
              <strong>Your Cookie Choices:</strong> Non-essential cookies require your consent in jurisdictions with
              applicable requirements (e.g., GDPR, ePrivacy). You can manage your cookie preferences at any time.
            </p>
            <div className="mt-6">
              <a
                href="/cookie-settings"
                className="inline-block px-6 py-3 bg-blue text-white rounded-md hover:bg-navy transition-colors"
              >
                Manage Cookie Preferences
              </a>
            </div>
          </div>
        </section>

        {/* Children */}
        <section id="children" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Children's Privacy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Pacem Health's services are not directed to children under the age of 16. We do not knowingly collect
              personal information from children. If you believe we have inadvertently collected information from a
              child, please contact us immediately so we can delete it.
            </p>
          </div>
        </section>

        {/* Changes to This Notice */}
        <section id="changes" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Changes to This Privacy Notice</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We may update this Privacy Notice from time to time to reflect changes in our practices, legal
              requirements, or service offerings. When we make material changes, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Post the updated Privacy Notice on this page with a revised "Last Updated" date</li>
              <li>Notify you via email or prominent notice on our website (for material changes)</li>
              <li>Obtain your consent where required by law</li>
            </ul>
            <p>
              We encourage you to review this Privacy Notice periodically to stay informed about how we protect your information.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-12 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Contact Us</h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Notice or our data practices,
              please contact our Privacy Team:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-navy to-blue text-white rounded-lg">
                <Mail className="w-8 h-8 mb-4" />
                <h4 className="font-bold mb-2">Email</h4>
                <a href="mailto:privacy@pacemhealth.com" className="hover:underline">
                  privacy@pacemhealth.com
                </a>
              </div>

              <div className="p-6 bg-gradient-to-br from-navy to-blue text-white rounded-lg">
                <Phone className="w-8 h-8 mb-4" />
                <h4 className="font-bold mb-2">Phone</h4>
                <p>+254 20 123 4567</p>
                <p className="text-sm mt-1">(Business hours: Mon-Fri, 8am-6pm EAT)</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-navy to-blue text-white rounded-lg">
                <MapPin className="w-8 h-8 mb-4" />
                <h4 className="font-bold mb-2">Mail</h4>
                <p className="text-sm">
                  Data Protection Officer<br />
                  Pacem Health Corporation<br />
                  Westlands Business Park<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong>Data Protection Officer:</strong> For data protection inquiries specific to GDPR or other
                regulatory frameworks, you may also contact our designated Data Protection Officer at{' '}
                <a href="mailto:dpo@pacemhealth.com" className="text-blue hover:underline">
                  dpo@pacemhealth.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
