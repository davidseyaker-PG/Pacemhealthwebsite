import { Route, Switch } from "wouter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { HeroCarousel } from "./components/HeroCarousel";
import { HealthcareSolutions } from "./components/homepage/HealthcareSolutions";
import { AreasOfFocus } from "./components/homepage/AreasOfFocus";
import { PartnerServices } from "./components/homepage/PartnerServices";
import { Commitments } from "./components/homepage/Commitments";
import { NewsCarousel } from "./components/homepage/NewsCarousel";
import { StatsSection } from "./components/homepage/StatsSection";
import { CTASection } from "./components/homepage/CTASection";
import { MarketAccessPage } from "./components/pages/MarketAccessPage";
import ProcurementDistribution from "./pages/ProcurementDistribution";
import SupplyChainLogistics from "./pages/SupplyChainLogistics";
import RegulatoryCompliance from "./pages/RegulatoryCompliance";
import PharmaceuticalSupplies from "./pages/PharmaceuticalSupplies";
import PharmaceuticalDistribution from "./pages/PharmaceuticalDistribution";
import PharmacyServices from "./pages/PharmacyServices";
import MedicalEquipment from "./pages/MedicalEquipment";
import LaboratoryDiagnostics from "./pages/LaboratoryDiagnostics";
import CommunityHealth from "./pages/CommunityHealth";
import DigitalHealth from "./pages/DigitalHealth";
import OurApproach from "./pages/OurApproach";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import HealthcareDevelopment from "./healthcare-development";
import PacemExcellence from "./pacem-excellence";
import PediatricPharmacy from "./pediatric-pharmacy";
import Support from "./pages/Support";
import Shop from "./pages/Shop";
import OurCompany from "./pages/about/OurCompany";
import Leadership from "./pages/about/Leadership";
import LeaderBio from "./pages/about/LeaderBio";
import Board from "./pages/about/Board";
import MissionVision from "./pages/about/MissionVision";
import History from "./pages/about/History";
import Sustainability from "./pages/about/Sustainability";
import CommunityImpact from "./pages/about/CommunityImpact";
import QualityStandards from "./pages/about/QualityStandards";
import QualityAssurance from "./pages/about/QualityAssurance";
import EthicsCompliance from "./pages/about/EthicsCompliance";
import CorporateCitizenship from "./pages/about/CorporateCitizenship";
import Investors from "./pages/Investors";
import Careers from "./pages/Careers";
import DistributionOperations from "./pages/careers/DistributionOperations";
import ClinicalPharmacy from "./pages/careers/ClinicalPharmacy";
import HealthSystemsAdvisory from "./pages/careers/HealthSystemsAdvisory";
import TechnologyInnovation from "./pages/careers/TechnologyInnovation";
import BusinessOperations from "./pages/careers/BusinessOperations";
import TrainingEducation from "./pages/careers/TrainingEducation";
import RegionalCountryLeadership from "./pages/careers/RegionalCountryLeadership";
import ProgramManagement from "./pages/careers/ProgramManagement";
import NewsStories from "./pages/NewsStories";
import DistributionExpansion from "./pages/stories/DistributionExpansion";
import PartnershipAnnouncement from "./pages/stories/PartnershipAnnouncement";
import CommunityMilestone from "./pages/stories/CommunityMilestone";
import DigitalPlatform from "./pages/stories/DigitalPlatform";
import CompanyLaunch from "./pages/stories/CompanyLaunch";
import ProductCatalog from "./pages/stories/ProductCatalog";
import MarketEntry from "./pages/stories/MarketEntry";
import PharmaceuticalHub from "./pages/stories/PharmaceuticalHub";
import InfantNutrition from "./pages/stories/InfantNutrition";
import UniversityPartnership from "./pages/stories/UniversityPartnership";
import CorporateOverview from "./pages/CorporateOverview";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookieSettings from "./pages/CookieSettings";

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <HealthcareSolutions />
      <AreasOfFocus />
      <PartnerServices />
      <Commitments />
      <NewsCarousel />
      <StatsSection />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/our-approach" component={OurApproach} />
          <Route
            path="/services/market-access"
            component={MarketAccessPage}
          />
          <Route
            path="/services/procurement-distribution"
            component={ProcurementDistribution}
          />
          <Route
            path="/services/supply-chain-logistics"
            component={SupplyChainLogistics}
          />
          <Route
            path="/services/regulatory-compliance"
            component={RegulatoryCompliance}
          />
          <Route
            path="/solutions/pharmaceutical-supplies"
            component={PharmaceuticalSupplies}
          />
          <Route
            path="/solutions/pharmaceutical-distribution"
            component={PharmaceuticalDistribution}
          />
          <Route
            path="/solutions/pharmacy-services"
            component={PharmacyServices}
          />
          <Route
            path="/solutions/medical-equipment"
            component={MedicalEquipment}
          />
          <Route
            path="/solutions/laboratory-diagnostics"
            component={LaboratoryDiagnostics}
          />
          <Route
            path="/solutions/community-health"
            component={CommunityHealth}
          />
          <Route
            path="/solutions/digital-health"
            component={DigitalHealth}
          />
          <Route path="/about" component={OurCompany} />
          <Route path="/about/company" component={OurCompany} />
          <Route path="/corporate-overview" component={CorporateOverview} />
          <Route
            path="/about/leadership"
            component={Leadership}
          />
          <Route
            path="/about/leadership/:slug"
            component={LeaderBio}
          />
          <Route
            path="/about/board"
            component={Board}
          />
          <Route
            path="/about/mission-vision"
            component={MissionVision}
          />
          <Route path="/about/history" component={History} />
          <Route
            path="/about/sustainability"
            component={Sustainability}
          />
          <Route
            path="/about/community-impact"
            component={CommunityImpact}
          />
          <Route
            path="/about/quality-standards"
            component={QualityStandards}
          />
          <Route
            path="/about/quality-assurance"
            component={QualityAssurance}
          />
          <Route
            path="/about/ethics-compliance"
            component={EthicsCompliance}
          />
          <Route
            path="/about/corporate-citizenship"
            component={CorporateCitizenship}
          />
          <Route path="/our-approach" component={OurApproach} />
          <Route
            path="/solutions"
            component={() => (
              <div className="py-20 text-center">
                Solutions Page
              </div>
            )}
          />
          <Route path="/stories" component={NewsStories} />
          <Route path="/news-stories" component={NewsStories} />
          <Route
            path="/stories/distribution-expansion"
            component={DistributionExpansion}
          />
          <Route
            path="/stories/partnership-announcement"
            component={PartnershipAnnouncement}
          />
          <Route
            path="/stories/community-milestone"
            component={CommunityMilestone}
          />
          <Route
            path="/stories/digital-platform"
            component={DigitalPlatform}
          />
          <Route
            path="/stories/company-launch"
            component={CompanyLaunch}
          />
          <Route
            path="/stories/product-catalog"
            component={ProductCatalog}
          />
          <Route
            path="/stories/market-entry"
            component={MarketEntry}
          />
          <Route
            path="/stories/pharmaceutical-hub"
            component={PharmaceuticalHub}
          />
          <Route
            path="/stories/infant-nutrition"
            component={InfantNutrition}
          />
          <Route
            path="/stories/university-partnership"
            component={UniversityPartnership}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/careers" component={Careers} />
          <Route path="/careers/distribution-operations" component={DistributionOperations} />
          <Route path="/careers/clinical-pharmacy" component={ClinicalPharmacy} />
          <Route path="/careers/health-systems-advisory" component={HealthSystemsAdvisory} />
          <Route path="/careers/technology-innovation" component={TechnologyInnovation} />
          <Route path="/careers/business-operations" component={BusinessOperations} />
          <Route path="/careers/training-education" component={TrainingEducation} />
          <Route path="/careers/regional-country-leadership" component={RegionalCountryLeadership} />
          <Route path="/careers/program-management" component={ProgramManagement} />
          <Route path="/investors" component={Investors} />
          <Route path="/programs" component={Programs} />
          <Route
            path="/programs/healthcare-development"
            component={HealthcareDevelopment}
          />
          <Route
            path="/programs/pacem-excellence"
            component={PacemExcellence}
          />
          <Route
            path="/programs/pediatric-pharmacy"
            component={PediatricPharmacy}
          />
          <Route path="/support" component={Support} />
          <Route path="/shop" component={Shop} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/cookie-settings" component={CookieSettings} />
          <Route>
            <div className="py-20 text-center">
              <h1 className="text-4xl font-serif text-navy mb-4">
                404 - Page Not Found
              </h1>
              <p className="text-gray-600">
                The page you're looking for doesn't exist.
              </p>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;