import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, AlertTriangle, FileText, Scale, Mail, ExternalLink, Shield, Lock } from 'lucide-react';

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
        className="w-full py-6 flex items-center justify-between text-left hover:text-navy transition-colors"
      >
        <h3 className="text-xl font-serif text-navy">{title}</h3>
        <ChevronDown
          className={`w-6 h-6 text-navy transition-transform duration-300 ${
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
    <div className="bg-orange/10 border-l-4 border-orange p-6 rounded-r-lg my-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Icon className="w-6 h-6 text-orange" />
        </div>
        <div>
          <h4 className="font-bold text-navy mb-3">{title}</h4>
          <div className="text-gray-700 leading-relaxed space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tocItems = [
    { id: 'definitions', label: 'Definitions' },
    { id: 'acceptance', label: 'Acceptance of Terms' },
    { id: 'services', label: 'Services Description' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'accounts', label: 'Accounts & Security' },
    { id: 'orders', label: 'Orders & Service Requests' },
    { id: 'fees', label: 'Fees & Payment' },
    { id: 'shipping', label: 'Shipping & Tracking' },
    { id: 'compliance', label: 'Compliance Requirements' },
    { id: 'prohibited', label: 'Prohibited Uses' },
    { id: 'intellectual', label: 'Intellectual Property' },
    { id: 'feedback', label: 'User Feedback' },
    { id: 'third-party', label: 'Third-Party Services' },
    { id: 'disclaimers', label: 'Disclaimers' },
    { id: 'limitation', label: 'Limitation of Liability' },
    { id: 'indemnification', label: 'Indemnification' },
    { id: 'dispute', label: 'Dispute Resolution' },
    { id: 'changes', label: 'Changes to Terms' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy via-navy to-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-7xl font-serif text-white mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl leading-relaxed">
              These Terms of Service govern your access to and use of Pacem Health's websites, online
              platforms, customer portals, tracking tools, and related digital services.
            </p>
            <p className="text-sm text-gray-300">
              <strong>Effective Date:</strong> January 18, 2026 | <strong>Last Updated:</strong> January 18, 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>PLEASE READ THESE TERMS CAREFULLY.</strong> By accessing or using any Pacem Health website,
                portal, mobile application, or service (collectively, the "Platform"), you agree to be bound by these
                Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms apply to the public website, authenticated customer and supplier portals, shipment tracking
                tools, mobile applications, and any other digital services provided by Pacem Health Corporation and its
                affiliates ("Pacem," "we," "us," or "our").
              </p>
            </section>

            {/* Definitions */}
            <section id="definitions" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">1. Definitions</h2>
              <div className="space-y-2">
                <AccordionItem title="Key Terms" defaultOpen>
                  <div className="space-y-4">
                    <div>
                      <strong className="text-navy">"Services"</strong> means the healthcare logistics, distribution,
                      warehousing, cold chain management, last-mile delivery, and related operational services provided
                      by Pacem, including associated software and digital tools.
                    </div>
                    <div>
                      <strong className="text-navy">"Platform"</strong> means Pacem's websites, customer portals,
                      supplier portals, mobile applications, tracking interfaces, and related digital systems.
                    </div>
                    <div>
                      <strong className="text-navy">"Customer"</strong> means any healthcare facility, pharmacy,
                      distributor, government entity, NGO, or other organization that engages Pacem for Services.
                    </div>
                    <div>
                      <strong className="text-navy">"Partner"</strong> means suppliers, manufacturers, logistics
                      subcontractors, and other third parties with whom Pacem collaborates to deliver Services.
                    </div>
                    <div>
                      <strong className="text-navy">"Shipment"</strong> means pharmaceutical products, medical equipment,
                      laboratory supplies, or other healthcare goods transported, stored, or delivered by Pacem.
                    </div>
                    <div>
                      <strong className="text-navy">"Content"</strong> means text, images, data, software, documentation,
                      and other materials made available through the Platform.
                    </div>
                    <div>
                      <strong className="text-navy">"Confidential Information"</strong> means non-public information
                      disclosed by one party to another in connection with the Services, including pricing, customer
                      lists, shipment details, and proprietary methodologies.
                    </div>
                    <div>
                      <strong className="text-navy">"You" / "Your"</strong> means the individual accessing the Platform
                      or the organization on whose behalf such individual is acting.
                    </div>
                  </div>
                </AccordionItem>
              </div>
            </section>

            {/* Acceptance of Terms */}
            <section id="acceptance" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">2. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  By accessing, browsing, or using the Platform, you acknowledge that you have read, understood, and
                  agree to be bound by these Terms and our{' '}
                  <a href="/privacy-policy" className="text-navy hover:underline">
                    Privacy Notice
                  </a>
                  .
                </p>
                <p>
                  If you are using the Platform on behalf of an organization, you represent and warrant that you have
                  the authority to bind that organization to these Terms, and "you" and "your" refer to that organization.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. Continued use of the Platform after changes
                  are posted constitutes acceptance of the revised Terms.
                </p>
              </div>
            </section>

            {/* Services Description */}
            <section id="services" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">3. Services Description</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Pacem provides healthcare logistics and distribution services across Africa, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pharmaceutical procurement and distribution</li>
                  <li>Medical equipment supply and maintenance</li>
                  <li>Cold chain and temperature-controlled logistics</li>
                  <li>Last-mile delivery to healthcare facilities</li>
                  <li>Warehouse and inventory management</li>
                  <li>Regulatory compliance support and market access advisory</li>
                  <li>Digital tracking and supply chain visibility tools</li>
                </ul>
                <CalloutBox icon={AlertTriangle} title="Important Disclaimer">
                  <p>
                    <strong>The Platform and Content are for informational and operational purposes only.</strong> Nothing
                    on the Platform constitutes medical advice, diagnosis, or treatment recommendations. Pacem is a
                    logistics and distribution provider, not a healthcare provider. Always seek the advice of qualified
                    healthcare professionals regarding medical questions.
                  </p>
                </CalloutBox>
              </div>
            </section>

            {/* Eligibility */}
            <section id="eligibility" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">4. Eligibility & Authorized Use</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Age and Legal Capacity:</strong> You must be at least 18 years old and have the legal capacity
                  to enter into binding contracts to use the Platform.
                </p>
                <p>
                  <strong>Business Use:</strong> The Platform is designed for B2B (business-to-business) use. If you are
                  using the Platform on behalf of an organization:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You represent that you are an authorized representative of that organization</li>
                  <li>You have the authority to bind the organization to these Terms</li>
                  <li>You will ensure that all users from your organization comply with these Terms</li>
                </ul>
                <p>
                  <strong>Restricted Access:</strong> Certain areas of the Platform (portals, tracking tools) require
                  authentication and are available only to authorized Customers and Partners.
                </p>
              </div>
            </section>

            {/* Accounts & Security */}
            <section id="accounts" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">5. Accounts & Security</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Account Creation:</strong> Access to certain Platform features requires creating an account.
                  You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your account information to keep it accurate</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p>
                  <strong>Security Responsibilities:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are responsible for maintaining the confidentiality of your login credentials</li>
                  <li>You are solely responsible for all activities that occur under your account</li>
                  <li>
                    <strong>Do not share credentials:</strong> Each user must have their own account; credential sharing
                    is prohibited
                  </li>
                  <li>
                    <strong>Multi-factor authentication (MFA):</strong> Where enabled, you agree to use MFA to protect
                    your account
                  </li>
                </ul>
                <p>
                  <strong>Audit Logs:</strong> Pacem maintains audit logs of Platform access and activities for security,
                  compliance, and operational purposes. By using the Platform, you consent to such logging.
                </p>
                <p>
                  <strong>Account Termination:</strong> We reserve the right to suspend or terminate your account if you
                  violate these Terms or engage in fraudulent, abusive, or illegal activities.
                </p>
              </div>
            </section>

            {/* Orders & Service Requests */}
            <section id="orders" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">6. Orders & Service Requests</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Separate Contractual Agreements:</strong> These Terms govern your use of the Platform. Actual
                  logistics Services may be governed by separate agreements, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Master Service Agreement (MSA):</strong> Governing framework for ongoing Services
                  </li>
                  <li>
                    <strong>Statement of Work (SOW):</strong> Specific project or delivery terms
                  </li>
                  <li>
                    <strong>Service Level Agreements (SLAs):</strong> Performance commitments and remedies
                  </li>
                  <li>
                    <strong>Purchase Orders:</strong> Individual shipment or order details
                  </li>
                </ul>
                <CalloutBox icon={FileText} title="Hierarchy of Agreements">
                  <p>
                    <strong>In the event of a conflict between these Terms and a separate written agreement (MSA, SOW, or SLA),
                    the separate agreement will prevail</strong> with respect to the specific Services covered by that agreement.
                    These Terms continue to govern Platform access and use.
                  </p>
                </CalloutBox>
                <p>
                  <strong>Order Acceptance:</strong> Submission of an order or service request through the Platform does
                  not guarantee acceptance. Pacem reserves the right to accept or decline any order in its sole discretion.
                </p>
              </div>
            </section>

            {/* Fees & Payment */}
            <section id="fees" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">7. Fees & Payment</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Pricing:</strong> Fees for Services are as set forth in your applicable MSA, SOW, or quotation.
                  Pricing may vary based on volume, service level, geographic region, and shipment characteristics.
                </p>
                <p>
                  <strong>Invoicing:</strong> Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Invoices are issued upon delivery or monthly (as applicable)</li>
                  <li>Payment is due within 30 days of invoice date</li>
                  <li>All amounts are exclusive of applicable taxes, duties, and fees</li>
                </ul>
                <p>
                  <strong>Taxes:</strong> You are responsible for all sales, use, VAT, withholding, and other taxes
                  (excluding taxes based on Pacem's net income), as well as customs duties, tariffs, and related fees.
                </p>
                <p>
                  <strong>Late Payment:</strong> Overdue amounts may accrue interest at the lesser of 1.5% per month or
                  the maximum rate permitted by law. Pacem may suspend Services for accounts with past-due balances.
                </p>
                <p>
                  <strong>Refunds:</strong> Fees are generally non-refundable except as expressly provided in your MSA or
                  SOW. Requests for credits or adjustments due to service issues must be submitted within 30 days.
                </p>
                <p>
                  <strong>Chargebacks:</strong> Initiating chargebacks or payment disputes without first attempting to
                  resolve the issue with Pacem may result in account suspension and termination.
                </p>
              </div>
            </section>

            {/* Shipping & Tracking */}
            <section id="shipping" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">8. Shipping & Tracking Disclaimer</h2>
              <CalloutBox icon={AlertTriangle} title="Important Operational Disclaimers">
                <p>
                  <strong>Tracking is "Best Effort":</strong> While Pacem strives to provide accurate, real-time tracking
                  information, tracking data is provided on a "best effort" basis. GPS, cellular, and data connectivity
                  limitations may affect tracking accuracy and availability.
                </p>
                <p className="mt-3">
                  <strong>Estimated Times of Arrival (ETAs) Not Guaranteed:</strong> ETAs and delivery windows are estimates
                  only and are not guaranteed. Actual delivery times may vary due to operational, environmental, or
                  regulatory factors beyond Pacem's control.
                </p>
                <p className="mt-3">
                  <strong>Force Majeure and Operational Disruptions:</strong> Pacem is not liable for delays or failures
                  to perform caused by events beyond our reasonable control, including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Severe weather, natural disasters, pandemics, or health emergencies</li>
                  <li>Customs delays, import/export restrictions, or regulatory actions</li>
                  <li>Road closures, port congestion, fuel shortages, or infrastructure failures</li>
                  <li>Civil unrest, strikes, armed conflict, or government actions</li>
                  <li>Power outages, telecommunications failures, or cyberattacks</li>
                </ul>
                <p className="mt-3">
                  <strong>Temperature Excursions:</strong> While Pacem employs cold chain protocols, temperature excursions
                  may occur. Pacem will notify Customers of excursions per applicable SLAs but is not liable for product
                  damage caused by events beyond our control.
                </p>
              </CalloutBox>
            </section>

            {/* Compliance Requirements */}
            <section id="compliance" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">9. Compliance Requirements</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong>Operating across multiple African jurisdictions and international borders requires strict
                  compliance with applicable laws and regulations. You agree to the following:</strong>
                </p>

                <div>
                  <h4 className="font-bold text-navy mb-2">Anti-Bribery and Anti-Corruption</h4>
                  <p>
                    You represent and warrant that you comply with all applicable anti-bribery and anti-corruption laws,
                    including the U.S. Foreign Corrupt Practices Act (FCPA), UK Bribery Act, and local laws in countries
                    of operation. You agree not to offer, promise, give, or authorize any payment or thing of value to
                    government officials or private parties to improperly influence business decisions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-navy mb-2">Sanctions and Export Controls</h4>
                  <p>
                    You agree to comply with all applicable economic sanctions, trade embargoes, and export control laws,
                    including those administered by the U.S. Office of Foreign Assets Control (OFAC), the European Union,
                    and other jurisdictions. You represent that:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>You are not located in, or owned/controlled by parties in, sanctioned countries</li>
                    <li>You are not listed on any restricted party or denied persons list</li>
                    <li>
                      Shipments do not involve prohibited end-users, end-uses, or destinations without proper authorization
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-navy mb-2">Pharmaceutical and Medical Device Regulations</h4>
                  <p>
                    You are responsible for ensuring that all Shipments comply with applicable pharmaceutical regulations,
                    including product registration, licensing, good distribution practices (GDP), and cold chain requirements
                    in the countries of origin, transit, and destination.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-navy mb-2">Customer Responsibility for Shipment Contents</h4>
                  <p>
                    <strong>You warrant that:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>All Shipments are lawful and properly documented</li>
                    <li>You have all necessary licenses, permits, and authorizations for the Shipment</li>
                    <li>Products are not counterfeit, expired, adulterated, or otherwise unfit for distribution</li>
                    <li>You have accurately declared the contents, value, and nature of Shipments</li>
                    <li>Shipments do not contain prohibited, dangerous, or restricted items unless disclosed and authorized</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-navy mb-2">Data Protection and Privacy</h4>
                  <p>
                    You agree to comply with applicable data protection laws (including GDPR where applicable and local
                    African data protection laws). Where you provide personal data to Pacem, you represent that you have
                    obtained all necessary consents and have a lawful basis for such disclosure. See our{' '}
                    <a href="/privacy-policy" className="text-navy hover:underline">
                      Privacy Notice
                    </a>{' '}
                    for details on how we process personal data.
                  </p>
                </div>
              </div>
            </section>

            {/* Prohibited Uses */}
            <section id="prohibited" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">10. Prohibited Uses</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>You agree not to:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Platform for any unlawful purpose or in violation of these Terms</li>
                  <li>
                    Interfere with, disrupt, or attempt to gain unauthorized access to the Platform, servers, or networks
                  </li>
                  <li>
                    Reverse engineer, decompile, disassemble, or attempt to discover the source code of the Platform
                  </li>
                  <li>
                    Use automated tools (bots, scrapers, crawlers) to access or collect data from the Platform without
                    prior written permission
                  </li>
                  <li>Upload or transmit viruses, malware, or other malicious code</li>
                  <li>
                    Impersonate another person, organization, or Pacem employee, or falsely state your affiliation
                  </li>
                  <li>
                    Upload, post, or transmit sensitive personal data (e.g., patient health information, financial data)
                    unless explicitly authorized and secured in accordance with applicable agreements
                  </li>
                  <li>Use the Platform to send spam, unsolicited communications, or engage in phishing</li>
                  <li>
                    Attempt to bypass access controls, authentication mechanisms, or security features
                  </li>
                  <li>
                    Use the Platform in a manner that could damage Pacem's reputation or business relationships
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Violation of these prohibitions may result in immediate account termination and legal action.</strong>
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">11. Intellectual Property</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Ownership:</strong> The Platform and all Content, including software, text, graphics, logos,
                  images, video, data compilations, and the "look and feel" of the Platform, are owned by Pacem or our
                  licensors and are protected by copyright, trademark, patent, and other intellectual property laws.
                </p>
                <p>
                  <strong>Limited License:</strong> Subject to your compliance with these Terms, Pacem grants you a
                  limited, non-exclusive, non-transferable, revocable license to access and use the Platform solely for
                  your internal business purposes in connection with Pacem Services.
                </p>
                <p>
                  <strong>Restrictions:</strong> You may not:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Copy, modify, distribute, or create derivative works based on the Platform or Content</li>
                  <li>Remove, alter, or obscure any copyright, trademark, or proprietary notices</li>
                  <li>Use Pacem trademarks, logos, or branding without prior written permission</li>
                  <li>Frame, mirror, or otherwise incorporate the Platform into another website or service</li>
                </ul>
                <p>
                  <strong>Your Content:</strong> You retain ownership of any data, documents, or content you upload to
                  the Platform. By uploading, you grant Pacem a worldwide, royalty-free license to use, store, and process
                  such content solely to provide Services.
                </p>
              </div>
            </section>

            {/* Feedback */}
            <section id="feedback" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">12. User Feedback</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you provide Pacem with suggestions, ideas, enhancement requests, or other feedback ("Feedback")
                  regarding the Platform or Services, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pacem may use Feedback without any obligation or compensation to you</li>
                  <li>All Feedback is provided on a non-confidential basis</li>
                  <li>
                    Pacem has no obligation to implement Feedback or keep Feedback confidential (unless covered by a
                    separate NDA)
                  </li>
                  <li>You grant Pacem all rights necessary to use and incorporate Feedback into our Services</li>
                </ul>
              </div>
            </section>

            {/* Third-Party Services */}
            <section id="third-party" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">13. Third-Party Links & Services</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Platform may contain links to third-party websites, services, or integrations, including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Analytics providers (e.g., Google Analytics)</li>
                  <li>Mapping and geolocation services</li>
                  <li>Payment processors</li>
                  <li>Cloud infrastructure and hosting providers</li>
                  <li>Customer support and communication tools</li>
                </ul>
                <p className="mt-4">
                  <strong>Pacem is not responsible for:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The availability, accuracy, or content of third-party services</li>
                  <li>Third-party privacy practices (review their privacy policies separately)</li>
                  <li>Any damage or loss caused by your use of third-party services</li>
                </ul>
                <p className="mt-4">
                  Your use of third-party services is governed by their respective terms and privacy policies.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section id="disclaimers" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">14. Disclaimers</h2>
              <CalloutBox icon={AlertTriangle} title="Platform Provided 'AS IS'">
                <p>
                  <strong>
                    THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE, TITLE, AND NON-INFRINGEMENT.
                  </strong>
                </p>
                <p className="mt-3">
                  <strong>Pacem does not warrant that:</strong>
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The Platform will be uninterrupted, timely, secure, or error-free</li>
                  <li>The results obtained from use of the Platform will be accurate or reliable</li>
                  <li>Any errors in the Platform will be corrected</li>
                  <li>The Platform will meet your specific requirements</li>
                </ul>
                <p className="mt-3">
                  <strong>No Medical Advice:</strong> The Platform does not provide medical advice. Consult qualified
                  healthcare professionals for all medical decisions.
                </p>
                <p className="mt-3">
                  <strong>Operational Services:</strong> While Pacem uses commercially reasonable efforts to provide
                  high-quality Services, we do not guarantee uninterrupted service or specific delivery outcomes unless
                  expressly committed in an SLA.
                </p>
              </CalloutBox>
            </section>

            {/* Limitation of Liability */}
            <section id="limitation" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">15. Limitation of Liability</h2>
              <CalloutBox icon={Scale} title="Liability Limitations">
                <p>
                  <strong>
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PACEM, ITS AFFILIATES, OFFICERS,
                    DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR:
                  </strong>
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>
                    <strong>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,</strong> including lost
                    profits, lost revenue, lost data, business interruption, or loss of goodwill, arising out of or
                    related to these Terms or use of the Platform
                  </li>
                  <li>
                    <strong>DAMAGES EXCEEDING THE AMOUNT PAID BY YOU TO PACEM</strong> in the 12 months preceding the
                    event giving rise to liability (or $100 USD if no fees were paid)
                  </li>
                </ul>
                <p className="mt-3">
                  This limitation applies regardless of the legal theory (contract, tort, negligence, strict liability,
                  or otherwise) and even if Pacem has been advised of the possibility of such damages.
                </p>
                <p className="mt-3">
                  <strong>Exceptions:</strong> The above limitations do not apply to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Death or personal injury caused by Pacem's gross negligence or willful misconduct</li>
                  <li>Fraud or fraudulent misrepresentation</li>
                  <li>Violations of intellectual property rights</li>
                  <li>Other liability that cannot be excluded or limited by law</li>
                </ul>
                <p className="mt-3">
                  <strong>Separate Agreements:</strong> Liability for actual Services delivery may be governed by separate
                  MSAs or SLAs with different limitations and remedies.
                </p>
              </CalloutBox>
            </section>

            {/* Indemnification */}
            <section id="indemnification" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">16. Indemnification</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>You agree to indemnify, defend, and hold harmless</strong> Pacem, its affiliates, and their
                  respective officers, directors, employees, agents, and contractors from and against any and all claims,
                  liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of
                  or related to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your violation of these Terms or applicable laws</li>
                  <li>Your use or misuse of the Platform</li>
                  <li>
                    Your breach of representations or warranties (including those related to Shipment contents,
                    compliance, and authorization)
                  </li>
                  <li>
                    Illegal, counterfeit, expired, or otherwise non-compliant Shipments you tender to Pacem
                  </li>
                  <li>Your infringement of any third party's intellectual property or other rights</li>
                  <li>Any negligent or willful misconduct by you or your employees, agents, or contractors</li>
                </ul>
                <p className="mt-4">
                  Pacem reserves the right to assume the exclusive defense and control of any matter subject to
                  indemnification by you, and you agree to cooperate with Pacem's defense of such claims.
                </p>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section id="dispute" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">17. Dispute Resolution & Governing Law</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the
                  laws of Kenya, without regard to its conflict of law principles.
                </p>
                <p>
                  <strong>Jurisdiction and Venue:</strong> Subject to the arbitration provision below, any disputes arising
                  out of or relating to these Terms or the Platform shall be subject to the exclusive jurisdiction of the
                  courts located in Nairobi, Kenya.
                </p>
                <p>
                  <strong>Informal Dispute Resolution:</strong> Before initiating formal proceedings, you agree to first
                  contact Pacem at{' '}
                  <a href="mailto:legal@pacemhealth.com" className="text-navy hover:underline">
                    legal@pacemhealth.com
                  </a>{' '}
                  to attempt to resolve the dispute informally.
                </p>
                <p>
                  <strong>Arbitration (Optional):</strong> For disputes involving amounts over $25,000 USD, either party
                  may elect binding arbitration administered by the Nairobi Centre for International Arbitration (NCIA)
                  or another mutually agreed arbitration body, conducted in English in Nairobi, Kenya.
                </p>
                <p>
                  <strong>Local Mandatory Rights:</strong> If you are accessing the Platform from a jurisdiction with
                  mandatory consumer protection, data protection, or other statutory rights that cannot be waived by
                  contract, those rights shall remain in effect notwithstanding these Terms.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section id="changes" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">18. Changes to These Terms</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Pacem reserves the right to modify or update these Terms at any time. When we make changes, we will:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Post the updated Terms on this page with a revised "Last Updated" date</li>
                  <li>
                    Provide notice via email or prominent Platform notification for material changes (at our discretion)
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Your continued use of the Platform after changes are posted constitutes acceptance of the
                  revised Terms.</strong> If you do not agree to the updated Terms, you must discontinue use of the Platform.
                </p>
                <p>
                  We recommend reviewing these Terms periodically to stay informed of any updates.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-12 scroll-mt-20">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">19. Contact Information</h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  For questions, concerns, or inquiries regarding these Terms of Service, please contact our Legal Team:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-navy to-blue text-white rounded-lg">
                    <Mail className="w-8 h-8 mb-4" />
                    <h4 className="font-bold mb-2">Email</h4>
                    <a href="mailto:legal@pacemhealth.com" className="hover:underline">
                      legal@pacemhealth.com
                    </a>
                    <p className="text-sm mt-2 text-gray-200">For legal and contract inquiries</p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-navy to-blue text-white rounded-lg">
                    <FileText className="w-8 h-8 mb-4" />
                    <h4 className="font-bold mb-2">Mailing Address</h4>
                    <p className="text-sm">
                      Legal Department<br />
                      Pacem Health Corporation<br />
                      Westlands Business Park<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Documents */}
            <section className="mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Related Documents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="/privacy-policy"
                  className="p-6 border-2 border-blue hover:bg-blue hover:text-white rounded-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-navy group-hover:text-white flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy group-hover:text-white mb-2">Privacy Notice</h4>
                      <p className="text-sm text-gray-700 group-hover:text-white">
                        Learn how we collect, use, and protect your personal information
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-navy group-hover:text-white">
                        <span className="text-sm font-semibold">Read Privacy Notice</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>

                <div className="p-6 border-2 border-gray-300 bg-gray-50 rounded-lg opacity-60">
                  <div className="flex items-start gap-4">
                    <Scale className="w-8 h-8 text-gray-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-600 mb-2">Vendor Code of Conduct</h4>
                      <p className="text-sm text-gray-600">
                        Standards and expectations for Pacem suppliers and partners
                      </p>
                      <p className="text-xs text-gray-500 mt-3">Coming Soon</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-2 border-gray-300 bg-gray-50 rounded-lg opacity-60">
                  <div className="flex items-start gap-4">
                    <Lock className="w-8 h-8 text-gray-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-600 mb-2">Security & Compliance</h4>
                      <p className="text-sm text-gray-600">
                        Our approach to data security, certifications, and compliance frameworks
                      </p>
                      <p className="text-xs text-gray-500 mt-3">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Table of Contents */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold text-navy mb-4 uppercase tracking-wider">On This Page</h3>
              <nav className="space-y-2">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block text-left text-sm py-1 transition-colors ${
                      activeSection === item.id
                        ? 'text-navy font-semibold border-l-2 border-blue pl-3'
                        : 'text-gray-600 hover:text-navy pl-3'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}