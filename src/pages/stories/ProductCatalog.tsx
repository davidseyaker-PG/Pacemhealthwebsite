import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import productCatalogImg from '../../assets/b75b6c3d301e30dd2c37a3f33a8b9165f8b5d0f1.png';
import companyLaunchImg from '../../assets/02d42d707511272b88d4c2c144be611ba1600a10.png';
import marketEntryImg from '../../assets/c88e4fb775957e420c8bfcf1cf1554fc5bfd3581.png';
import vaccineVialsImg from '../../assets/40c257b000b003a0cb10d8e96fa5884d236d1969.png';
import ctScannerImg from '../../assets/5f6fa446a3e7c9ecb1afecc0e9506ea04f287f60.png';
import medicalDeviceImg from '../../assets/5bb9c17902070451bddd0165c35fa445603956cb.png';
import equipmentGridImg from '../../assets/44b30efb68e484dd35d7907dcfa16d782b54eafb.png';

export default function ProductCatalog() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const articleImages = [
    productCatalogImg,
    ctScannerImg,
    medicalDeviceImg,
    equipmentGridImg
  ];

  const relatedStories = [
    {
      title: 'Pacem Health Officially Launches to Transform African Healthcare Systems',
      excerpt: 'U.S.-based global health innovation company announces official launch.',
      image: companyLaunchImg,
      link: '/stories/company-launch'
    },
    {
      title: 'Pacem Health Announces Africa Market Entry Strategy',
      excerpt: 'Strategic roadmap outlines phased approach to entering priority African markets.',
      image: marketEntryImg,
      link: '/stories/market-entry'
    },
    {
      title: 'New Partnership Announced to Strengthen Pharmaceutical Supply Chain',
      excerpt: 'Strategic collaboration with leading global health organizations.',
      image: vaccineVialsImg,
      link: '/stories/partnership-announcement'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % articleImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + articleImages.length) % articleImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Title and Meta */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/news-stories">
                <div className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2 cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                  Back to News
                </div>
              </Link>

              <div className="text-orange text-sm font-bold tracking-wide mb-4">PRODUCT LAUNCH</div>
              
              <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
                Pacem Health Unveils Comprehensive Medical Product Catalog for Africa
              </h1>

              <div className="flex items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>February 18, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>7 min read</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="text-white hover:text-blue flex items-center gap-2 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="font-semibold">Share</span>
                </button>
                <button className="text-white hover:text-blue flex items-center gap-2 transition-colors">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Download Catalog</span>
                </button>
              </div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src={articleImages[0]}
                alt="Medical equipment and products display"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-sm">Sample of medical equipment featured in the Pacem Health comprehensive product catalog</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>Grand Rapids, MI</strong> — Pacem Health today launched its comprehensive Medical Product 
              Catalog, providing healthcare institutions across Africa with transparent access to over 3,500 medical 
              products spanning pharmaceuticals, equipment, diagnostics, and consumables. The catalog represents the 
              first comprehensive, Africa-focused medical product resource with complete technical specifications, 
              regulatory compliance information, and transparent pricing.
            </p>

            {/* Section 1 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Addressing Information Gaps in Medical Procurement
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Healthcare procurement teams across Africa face significant challenges in identifying, evaluating, and 
              sourcing appropriate medical products. Limited access to comprehensive product information, unclear 
              pricing structures, uncertain regulatory compliance status, and difficulty comparing alternative options 
              create inefficiencies and suboptimal purchasing decisions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Pacem Health Medical Product Catalog addresses these challenges by providing complete, standardized 
              product information in a searchable, user-friendly format. Procurement professionals can quickly identify 
              products meeting their requirements, compare alternatives, verify regulatory compliance, and obtain 
              accurate pricing information.
            </p>

            {/* Catalog Features Box */}
            <div className="bg-gray-50 rounded-xl p-8 my-12 border-l-4 border-blue">
              <h3 className="text-2xl font-serif text-navy mb-6">Catalog Features and Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-navy mb-2">Comprehensive Coverage</h4>
                  <p className="text-gray-700 text-base">3,500+ products across 22 major categories and 150+ subcategories</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Advanced Search</h4>
                  <p className="text-gray-700 text-base">Powerful filtering by category, application, specifications, and price range</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Complete Documentation</h4>
                  <p className="text-gray-700 text-base">Technical specs, user manuals, compliance certificates, and training materials</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Regulatory Clarity</h4>
                  <p className="text-gray-700 text-base">WHO prequalification status, country registrations, and quality certifications</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Product Categories and Coverage
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The catalog spans the complete spectrum of medical products needed for healthcare delivery. Major 
              categories include pharmaceuticals with both generic and branded medications for common conditions, 
              infectious diseases, and chronic disease management. Each pharmaceutical listing includes active 
              ingredients, dosage forms, packaging configurations, stability data, and regulatory approvals.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Medical equipment ranges from basic examination tools to advanced diagnostic and treatment devices. 
              Categories cover diagnostic imaging, laboratory analyzers, patient monitoring systems, surgical equipment, 
              and durable medical equipment. Each equipment listing provides detailed technical specifications, power 
              requirements, maintenance needs, training requirements, and warranty information.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Diagnostic products include laboratory reagents and test kits for clinical chemistry, hematology, 
              microbiology, immunology, and point-of-care testing. Complete information on storage requirements, 
              shelf life, quality control procedures, and result interpretation guides procurement decisions.
            </p>

            {/* Section 3 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Transparent Pricing and Procurement Terms
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A defining feature of the catalog is transparent, published pricing for all products. Each listing 
              includes unit prices, volume discount schedules, minimum order quantities, and lead times. This 
              transparency enables accurate budgeting and cost comparison across alternative products.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pricing is structured to support both small individual facility orders and large-scale institutional 
              or government procurement. Volume discounts reward bulk purchasing while ensuring small facilities can 
              access products at reasonable prices.
            </p>

            {/* Quality Assurance Box */}
            <div className="bg-gray-50 rounded-xl p-8 my-12 border-l-4 border-orange">
              <h3 className="text-2xl font-serif text-navy mb-6">Quality Assurance and Regulatory Compliance</h3>
              <p className="text-gray-700 mb-4">All products in the catalog meet rigorous quality standards and regulatory requirements:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span><strong>WHO Standards:</strong> Products align with WHO Essential Medicines List, prequalification programs, and technical specifications</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span><strong>Manufacturing Quality:</strong> All manufacturers maintain current Good Manufacturing Practice (cGMP) certification</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span><strong>Country Registrations:</strong> Regulatory approval status clearly indicated for each African country market</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                  <span><strong>Quality Documentation:</strong> Certificates of analysis, stability studies, and quality control data available on request</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Digital Platform and User Experience
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The catalog is accessible through an intuitive digital platform designed for healthcare procurement 
              professionals. Advanced search and filtering capabilities enable users to quickly identify products 
              meeting specific technical requirements, budget constraints, or regulatory needs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Product comparison tools allow side-by-side evaluation of alternative options across specifications, 
              pricing, and features. Users can create customized product lists, save searches, and share information 
              with colleagues for collaborative procurement decision-making.
            </p>

            {/* Section 5 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Procurement Support Services
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Beyond product information, Pacem Health provides comprehensive procurement support services. Technical 
              consultations help institutions identify optimal products for specific clinical applications and facility 
              contexts. Procurement specialists assist with tender preparation, specifications development, and vendor 
              evaluation.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Financing options enable institutions to procure needed products through flexible payment arrangements 
              aligned with operational cash flows. Supply chain services ensure reliable delivery, proper storage, 
              and inventory management support.
            </p>

            {/* Section 6 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Supporting Health System Strengthening
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Medical Product Catalog advances health system strengthening by improving procurement efficiency, 
              enabling evidence-based product selection, supporting budget planning with accurate pricing information, 
              reducing procurement cycle times, and ensuring regulatory compliance and quality assurance.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              By addressing information asymmetries and transaction costs in medical product procurement, the catalog 
              helps healthcare institutions maximize the impact of limited procurement budgets while ensuring products 
              meet clinical needs and quality standards.
            </p>

            {/* Section 7 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Looking Forward
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The launch of the comprehensive Medical Product Catalog marks an important milestone in Pacem Health's 
              mission to strengthen African healthcare systems. By providing transparent, comprehensive product 
              information and supporting efficient procurement processes, the catalog contributes to better-equipped 
              health facilities and improved patient care.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              As the catalog grows and evolves based on user needs and market developments, it will continue serving 
              as an essential resource for healthcare procurement professionals working to build stronger, more 
              effective health systems across Africa.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <span className="text-sm text-gray-500 font-semibold">
              IMAGE {currentImageIndex + 1} OF {articleImages.length}
            </span>
          </div>

          <div className="relative">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src={articleImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-navy" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-navy" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {articleImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentImageIndex ? 'w-12 bg-blue' : 'w-8 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-navy mb-12">Related Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={story.link}>
                  <div className="group cursor-pointer">
                    <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-serif text-navy mb-3 group-hover:text-blue transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{story.excerpt}</p>
                    <div className="flex items-center gap-2 text-blue font-semibold text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tags */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-serif text-navy mb-6">Related Tags</h3>
          <div className="flex flex-wrap gap-3">
            {['Product Catalog', 'Medical Equipment', 'Procurement', 'Healthcare Solutions', 'Africa'].map((tag) => (
              <button
                key={tag}
                className="bg-white text-blue border-2 border-blue px-6 py-2 rounded-full font-semibold hover:bg-blue hover:text-white transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}