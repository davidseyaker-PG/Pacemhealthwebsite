import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Share2, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Link } from 'wouter';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import infantNutritionImg from 'figma:asset/c345068955ef3bfc48f34e2b2bc6ac441c34069f.png';
import communityHealthImg from 'figma:asset/1ccf00b90b7dea706dbcbc91a60729367f043716.png';
import productCatalogImg from 'figma:asset/b75b6c3d301e30dd2c37a3f33a8b9165f8b5d0f1.png';
import pharmaceuticalHubImg from 'figma:asset/44fd008152cbbf2ddf85747e909f6ee06523968b.png';
import infantFeedingImg from 'figma:asset/08c7a27e0019d0d9c1b5f6f3562b2b783c5490b4.png';
import babyPortraitImg from 'figma:asset/743a592456394ba5da3f48f3ec1319d9e1ea97bd.png';
import babyBottleImg from 'figma:asset/58d6924292e06f7ea8f92cb33d5440e243a4237d.png';

export default function InfantNutrition() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const articleImages = [
    infantNutritionImg,
    infantFeedingImg,
    babyPortraitImg,
    babyBottleImg
  ];

  const relatedStories = [
    {
      title: 'Community Health Initiative Reaches 100,000 Patients Milestone',
      excerpt: 'Celebrating impact across rural and underserved communities.',
      image: communityHealthImg,
      link: '/stories/community-milestone'
    },
    {
      title: 'Pacem Health Unveils Comprehensive Medical Product Catalog for Africa',
      excerpt: 'First-of-its-kind comprehensive catalog features over 3,500 medical products.',
      image: productCatalogImg,
      link: '/stories/product-catalog'
    },
    {
      title: 'Pacem Health Announces East African Regional Pharmaceutical Hub',
      excerpt: 'New facility in Kenya will serve as central distribution center.',
      image: pharmaceuticalHubImg,
      link: '/stories/pharmaceutical-hub'
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

              <div className="text-orange text-sm font-bold tracking-wide mb-4">INNOVATION</div>
              
              <h1 className="text-5xl lg:text-6xl font-serif text-white mb-6">
                Pacem Health Introduces Innovative Infant Nutritional Solution
              </h1>

              <div className="flex items-center gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>March 25, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>8 min read</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="text-white hover:text-blue flex items-center gap-2 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="font-semibold">Share</span>
                </button>
                <button className="text-white hover:text-blue flex items-center gap-2 transition-colors">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Download PDF</span>
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
                alt="Mother caring for infant child"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-sm">New infant nutritional solution designed to address malnutrition in African communities</p>
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
              <strong>Grand Rapids, Michigan</strong> — Pacem Health today announced the development of an innovative infant 
              nutritional product specifically designed to address malnutrition in resource-limited African settings. 
              The fortified nutritional solution combines evidence-based nutritional science with practical 
              considerations of affordability, shelf stability, and local ingredient availability.
            </p>

            {/* Section 1 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Addressing a Critical Health Challenge
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Infant and young child malnutrition remains a persistent challenge across many African communities. 
              Inadequate complementary feeding practices, micronutrient deficiencies, food insecurity, and limited 
              access to appropriate nutritional products contribute to high rates of stunting, wasting, and 
              developmental delays that have lifelong consequences.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Existing nutritional products often face barriers to widespread use including high costs that exceed 
              family budgets, limited availability in rural areas, short shelf life requiring cold chain storage, 
              unfamiliar ingredients and preparation methods, and taste profiles that infants reject. The Pacem 
              Health infant nutritional solution was designed from the ground up to address these practical barriers 
              while meeting rigorous nutritional standards.
            </p>

            {/* Product Innovation Box */}
            <div className="bg-gray-50 rounded-xl p-8 my-12 border-l-4 border-blue">
              <h3 className="text-2xl font-serif text-navy mb-6">Product Innovation Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-navy mb-2">Local Ingredients</h4>
                  <p className="text-gray-700 text-base">Formulated with regionally-available grains, legumes, and micronutrient fortification</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Shelf Stable</h4>
                  <p className="text-gray-700 text-base">12-month shelf life without refrigeration in tropical climate conditions</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Age Appropriate</h4>
                  <p className="text-gray-700 text-base">Formulations optimized for 6-12 months and 12-24 months age groups</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Affordable Pricing</h4>
                  <p className="text-gray-700 text-base">Cost structure designed for accessibility to low-income households</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Evidence-Based Nutritional Formulation
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The product formulation was developed in collaboration with pediatric nutritionists, food scientists, 
              and public health experts. It meets World Health Organization guidelines for complementary feeding and 
              micronutrient supplementation while addressing common nutritional deficiencies observed in African 
              infant populations.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The base formulation combines locally-sourced cereals and legumes to provide high-quality protein and 
              complex carbohydrates. Micronutrient fortification addresses prevalent deficiencies in iron, zinc, 
              vitamin A, and other essential nutrients critical for infant growth and development.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The product includes beneficial components such as prebiotics to support healthy gut microbiome 
              development, essential fatty acids for brain and vision development, and carefully balanced 
              macronutrients to support appropriate weight gain and linear growth.
            </p>

            {/* Section 3 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Local Sourcing and Production
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A distinctive feature of the product is its use of locally-sourced ingredients wherever possible. 
              Primary grain ingredients including sorghum, millet, and maize are procured from regional agricultural 
              cooperatives. Legume components such as beans and lentils similarly come from African farmers.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This local sourcing approach delivers multiple benefits:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Reduced production costs enabling more affordable pricing</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Support for regional agricultural economies</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Cultural familiarity and acceptability of ingredients</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-shrink-0" />
                <span>Reduced environmental impact from shorter supply chains</span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Production facilities are being established in Kenya and Nigeria to serve regional markets. These 
              facilities will create local employment while ensuring product availability and freshness in target 
              markets.
            </p>

            {/* Section 4 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Clinical Development and Testing
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The product underwent rigorous development and testing to ensure safety, efficacy, and acceptability:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue pl-6">
                <h4 className="font-bold text-navy mb-2">Formulation Development</h4>
                <p className="text-gray-700">Multiple iterations tested for nutrient content, digestibility, and organoleptic properties</p>
              </div>
              <div className="border-l-4 border-orange pl-6">
                <h4 className="font-bold text-navy mb-2">Acceptability Studies</h4>
                <p className="text-gray-700">Community-based research assessing infant acceptance, maternal preferences, and cultural appropriateness</p>
              </div>
              <div className="border-l-4 border-teal pl-6">
                <h4 className="font-bold text-navy mb-2">Safety Testing</h4>
                <p className="text-gray-700">Comprehensive microbiological and chemical analyses confirming product safety</p>
              </div>
              <div className="border-l-4 border-navy pl-6">
                <h4 className="font-bold text-navy mb-2">Efficacy Trials</h4>
                <p className="text-gray-700">Pilot studies demonstrating improvements in growth parameters and micronutrient status</p>
              </div>
            </div>

            {/* Section 5 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Packaging and Preparation
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The product comes in single-serve sachets designed for convenience and hygiene. Each sachet contains 
              the appropriate quantity for one feeding, eliminating measurement errors and reducing contamination 
              risk. The sachets utilize moisture-barrier materials that maintain product stability in humid tropical 
              environments.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Preparation is straightforward requiring only the addition of clean water and mixing. Clear pictorial 
              instructions on each sachet accommodate low-literacy caregivers. The product dissolves easily without 
              lumps and requires no cooking, making it practical for families with limited fuel resources.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Multiple flavor variants were developed to appeal to infant taste preferences while introducing 
              appropriate flavor diversity for developing palates. Initial offerings include mild banana, 
              orange-mango, and plain options.
            </p>

            {/* Section 6 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Distribution and Access Strategy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pacem Health is implementing a multi-channel distribution strategy to maximize product accessibility. 
              Public health channels will supply the product through government health facilities, community health 
              programs, and maternal-child health clinics often at subsidized prices or as part of nutrition 
              intervention programs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Commercial retail distribution will make the product available through pharmacies, general stores, and 
              kiosks in both urban and rural areas. Pricing for retail channels remains affordable while supporting 
              sustainable business operations.
            </p>

            {/* Section 7 */}
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 mt-12">
              Contributing to Nutrition Security
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The introduction of this infant nutritional product represents Pacem Health's commitment to addressing 
              fundamental health challenges through innovative, contextually-appropriate solutions. By combining 
              scientific rigor with practical design considerations, the product has potential to meaningfully 
              contribute to reducing infant malnutrition rates across Africa.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Success will be measured not in units sold but in healthier children, reduced malnutrition rates, and 
              strengthened food and nutrition security for African families. As the product scales and evidence of 
              impact grows, it will contribute to the broader agenda of ensuring all African children have the 
              nutrition they need to survive, thrive, and reach their full potential.
            </p>

            {/* Contact Box */}
            <div className="bg-blue/5 border-l-4 border-blue rounded-lg p-8 my-12">
              <h3 className="text-xl font-serif text-navy mb-4">Product Information</h3>
              <p className="text-gray-700 mb-4">For product inquiries or partnership opportunities:</p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Pacem Health Nutrition Division</strong></p>
                <p>Email: nutrition@pacemhealth.com</p>
                <p>Phone: +254 (20) 555-0200 (Nairobi Office)</p>
              </div>
            </div>
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
            {['Infant Nutrition', 'Innovation', 'Malnutrition', 'Product Development', 'Africa'].map((tag) => (
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