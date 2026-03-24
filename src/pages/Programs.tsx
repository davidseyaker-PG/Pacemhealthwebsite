import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import healthcareDevImg from "figma:asset/3615afc07e05ae980b9b2915f1c1aeccc7563c09.png";
import pediatricPharmacyImg from "figma:asset/3a717d5080ebad97a4068ae660de0862e4d89607.png";
import pacemExcellenceImg from "figma:asset/7e51baf34655f079cee32f8acadb6cc16297b1da.png";
import heroImage from "figma:asset/694710ff7618c78caac00211fbe6504a8413d923.png";

export default function Programs() {
  const programs = [
    {
      title: "Healthcare Development",
      description: "Building health literacy and clinical capacity through community health worker training, public health campaigns, and provider continuing education across Africa.",
      image: healthcareDevImg,
      link: "/programs/healthcare-development",
    },
    {
      title: "Pacem Excellence",
      description: "Combating counterfeit medicines through independent pharmaceutical quality testing, university research partnerships, and STEM education programs.",
      image: pacemExcellenceImg,
      link: "/programs/pacem-excellence",
    },
    {
      title: "Pediatric Pharmacy",
      description: "Comprehensive maternal-child health services combining pediatric pharmacies, home visitation, economic empowerment, and multi-agency partnerships.",
      image: pediatricPharmacyImg,
      link: "/programs/pediatric-pharmacy",
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <span>/</span>
          <span className="text-navy font-medium">Programs</span>
        </nav>
      </div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70 z-10" />
        <motion.img
          src={heroImage}
          alt="Community health programs"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-4 leading-tight">
              Strengthening Health Systems Through Purpose-Built Programs
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">
              Three integrated programs designed to build health literacy, ensure pharmaceutical quality, and strengthen maternal-child health across Africa.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors"
              >
                Explore Our Programs
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Strategic Programs Section */}
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Our Strategic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three integrated programs that strengthen health systems, ensure pharmaceutical quality, and strengthen maternal-child health outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              return (
                <Link key={index} href={program.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-xl font-heading font-bold text-navy mb-3">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {program.description}
                      </p>

                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-navy font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-blue/90 z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGglMjBlZHVjYXRpb258ZW58MXx8fHwxNzY3OTE3NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Partner background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-heading font-bold text-white mb-6">
              Partner With Our Programs
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join us in building sustainable health ecosystems across Africa. Together, we can strengthen health systems and build lasting partnerships.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue text-white px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-blue/90 transition-colors"
              >
                Get Involved
                <ArrowRight className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                Learn About Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}