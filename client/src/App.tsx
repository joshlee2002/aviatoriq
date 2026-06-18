import { Toaster } from "@/components/ui/sonner";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import { initAnalytics } from "./lib/analytics";
import { usePageTracking } from "./hooks/usePageTracking";

import ErrorBoundary from "./components/ErrorBoundary";

import { ThemeProvider } from "./contexts/ThemeContext";
import { CountryProvider } from "./contexts/CountryContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";

// Country selector
import CountrySelect from "./pages/CountrySelect";

// US pages
import HomeUS from "./pages/HomeUS";
import MedicalConditionLookupUS from "./pages/MedicalConditionLookupUS";
import CadetEligibilityUS from "./pages/CadetEligibilityUS";
import CalculatorUS from "./pages/CalculatorUS";
import HowToBecomePilotUS from "./pages/guides/HowToBecomePilotUS";
import SchoolsUS from "./pages/SchoolsUS";
import Part61Vs141 from "./pages/guides/Part61Vs141";
import FaaMedicalGuide from "./pages/guides/FaaMedicalGuide";

// Public pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Schools from "./pages/Schools";
import Calculator from "./pages/Calculator";
import GuidesIndex from "./pages/GuidesIndex";
import GuidesIndexUS from "./pages/GuidesIndexUS";

// Guide pages
import HowToBecomePilot from "./pages/guides/HowToBecomePilot";
import PilotTrainingCosts from "./pages/guides/PilotTrainingCosts";
import IntegratedVsModular from "./pages/guides/IntegratedVsModular";
import Class1Medical from "./pages/guides/Class1Medical";
import AdhdPilotGuide from "./pages/guides/AdhdPilotGuide";
import IntegratedVsModularCost from "./pages/guides/IntegratedVsModularCost";
import AirlinePilotSalary from "./pages/guides/AirlinePilotSalary";
import BestRouteToAirline from "./pages/guides/BestRouteToAirline";
import FinanceGuide from "./pages/guides/FinanceGuide";
import TrainingTimeline from "./pages/guides/TrainingTimeline";

// Licence quiz
import LicenceQuiz from "./pages/LicenceQuiz";
import LicenceQuizResults from "./pages/LicenceQuizResults";

// Flight Deck quiz (top-of-funnel)
import FlightDeckQuiz from "./pages/FlightDeckQuiz";
import FlightDeckResults from "./pages/FlightDeckResults";
import FlightDeckShare from "./pages/FlightDeckShare";

// Admin
import AdminDashboard from "./pages/AdminDashboard";

// Decision tools
import IntModDecision from "./pages/IntModDecision";
import MedicalCheck from "./pages/MedicalCheck";

// Retrieve results
import Retrieve from "./pages/Retrieve";

// Partner page
import Partner from "./pages/Partner";
import PartnerUS from "./pages/PartnerUS";
import ForSchools from "./pages/ForSchools";

// New tools
import MedicalConditionLookup from "./pages/MedicalConditionLookup";
import CadetEligibility from "./pages/CadetEligibility";

// Quiz Hub & individual quizzes
import QuizHub from "./pages/QuizHub";
import QuizPage from "./pages/quizzes/QuizPage";

// Roadmap Generator
import RoadmapGenerator from "./pages/RoadmapGenerator";
import RoadmapGeneratorUS from "./pages/RoadmapGeneratorUS";
import FinanceCalculator from "./pages/FinanceCalculator";
import SalaryEstimator from "./pages/SalaryEstimator";
import RouteSelector from "./pages/RouteSelector";

// New SEO guides
import AmITooOld from "./pages/guides/AmITooOld";
import Class1MedicalDisqualifiers from "./pages/guides/Class1MedicalDisqualifiers";
import CadetProgrammes from "./pages/guides/CadetProgrammes";
import PilotTrainingFinance2026 from "./pages/guides/PilotTrainingFinance2026";
import PilotSalaryUK2026 from "./pages/guides/PilotSalaryUK2026";
import ReadyToStartTraining from "./pages/guides/ReadyToStartTraining";
import HourBuilding from "./pages/guides/HourBuilding";
import AtplExams from "./pages/guides/AtplExams";
import PilotShortageUK from "./pages/guides/PilotShortageUK";
import TypeRating from "./pages/guides/TypeRating";
import RAFvsCivilian from "./pages/guides/RAFvsCivilian";
import PilotTrainingOver40 from "./pages/guides/PilotTrainingOver40";
import AirlineInterview from "./pages/guides/AirlineInterview";
import WomenInAviation from "./pages/guides/WomenInAviation";
import BestFlightSchoolsUK from "./pages/guides/BestFlightSchoolsUK";
import BASpeedbirdAcademy from "./pages/guides/BASpeedbirdAcademy";
import EasyJetGeneration from "./pages/guides/EasyJetGeneration";
import RyanairCadet from "./pages/guides/RyanairCadet";
import WizzAirAcademy from "./pages/guides/WizzAirAcademy";
import TuiMPL from "./pages/guides/TuiMPL";
import PilotAptitudeTest from "./pages/guides/PilotAptitudeTest";
import PilotCvGuide from "./pages/guides/PilotCvGuide";
import PilotAptitudeTestPrep from "./pages/guides/PilotAptitudeTestPrep";
import SimulatorAssessmentGuide from "./pages/guides/SimulatorAssessmentGuide";

// New UK licence & career guides
import PplGuideUK from "./pages/guides/PplGuideUK";
import CplGuideUK from "./pages/guides/CplGuideUK";
import InstrumentRatingUK from "./pages/guides/InstrumentRatingUK";
import FrozenAtplUK from "./pages/guides/FrozenAtplUK";
import FirstOfficerUK from "./pages/guides/FirstOfficerUK";
import FlightInstructorUK from "./pages/guides/FlightInstructorUK";
import MccJocUK from "./pages/guides/MccJocUK";
import PilotEyesightUK from "./pages/guides/PilotEyesightUK";

// New US guides
import AirlineInterviewUSA from "./pages/guides/AirlineInterviewUSA";
import AmITooOldUSA from "./pages/guides/AmITooOldUSA";
import PilotTrainingOver40USA from "./pages/guides/PilotTrainingOver40USA";
import UnitedAviateGuide from "./pages/guides/UnitedAviateGuide";
import DeltaPropelGuide from "./pages/guides/DeltaPropelGuide";
import PilotAptitudeTestUSA from "./pages/guides/PilotAptitudeTestUSA";
import HourBuildingUSA from "./pages/guides/HourBuildingUSA";
import TypeRatingUSA from "./pages/guides/TypeRatingUSA";
import WomenInAviationUSA from "./pages/guides/WomenInAviationUSA";
import PilotCvGuideUSA from "./pages/guides/PilotCvGuideUSA";
import BestFlightSchoolsUSA from "./pages/guides/BestFlightSchoolsUSA";
import TrainingTimelineUSA from "./pages/guides/TrainingTimelineUSA";
import PilotTrainingCostsUSA from "./pages/guides/PilotTrainingCostsUSA";
import MilitaryToAirlineUSA from "./pages/guides/MilitaryToAirlineUSA";
import EmbryRiddleGuide from "./pages/guides/EmbryRiddleGuide";
import AtpFlightSchoolGuide from "./pages/guides/AtpFlightSchoolGuide";
import PilotSalaryUSA from "./pages/guides/PilotSalaryUSA";
import FundPilotTrainingUSA from "./pages/guides/FundPilotTrainingUSA";
import PplRequirementsUSA from "./pages/guides/PplRequirementsUSA";
import CommercialPilotCertUSA from "./pages/guides/CommercialPilotCertUSA";
import GiBillFlightTraining from "./pages/guides/GiBillFlightTraining";
import InstrumentRatingUSA from "./pages/guides/InstrumentRatingUSA";
import UsPilotCareerOutlook from "./pages/guides/UsPilotCareerOutlook";
import AdhdFaaMedical from "./pages/guides/AdhdFaaMedical";
import AtpCertificateUSA from "./pages/guides/AtpCertificateUSA";
import CfiCareerUSA from "./pages/guides/CfiCareerUSA";

// Regional hub pages — consolidated into CountryHub
import CountryHub from "./pages/CountryHub";

// New regional guides (Australia, Canada, Europe)
import HowToBecomePilotAustralia from "./pages/guides/HowToBecomePilotAustralia";
import HowToBecomePilotCanada from "./pages/guides/HowToBecomePilotCanada";
import HowToBecomePilotEurope from "./pages/guides/HowToBecomePilotEurope";
// New US guides (batch 2)
import FaaAtpRequirements from "@/pages/guides/FaaAtpRequirements";
import UsRegionalAirlinesGuide from "@/pages/guides/UsRegionalAirlinesGuide";
import MajorAirlinesHiringUSA from "@/pages/guides/MajorAirlinesHiringUSA";
import FaaMedicalClass1 from "@/pages/guides/FaaMedicalClass1";
import FaaMedicalClass2 from "@/pages/guides/FaaMedicalClass2";
import FaaMedicalClass3 from "@/pages/guides/FaaMedicalClass3";
import UsFlightSchoolLoans from "@/pages/guides/UsFlightSchoolLoans";
import UsCadetPrograms from "@/pages/guides/UsCadetPrograms";
import UsMilitaryPilotToAirlines from "@/pages/guides/UsMilitaryPilotToAirlines";
import UsPilotSalary2026 from "@/pages/guides/UsPilotSalary2026";
import UsPilotRetirementAge from "@/pages/guides/UsPilotRetirementAge";
import UsPilotUnionGuide from "@/pages/guides/UsPilotUnionGuide";
import UsPilotShortage2026 from "@/pages/guides/UsPilotShortage2026";
import UsPilotSeniority from "@/pages/guides/UsPilotSeniority";
import UsPilotCommuting from "@/pages/guides/UsPilotCommuting";
import UsPilotBases from "@/pages/guides/UsPilotBases";
import UsPilotSchedule from "@/pages/guides/UsPilotSchedule";
import UsPilotBenefits from "@/pages/guides/UsPilotBenefits";
import UsPilotTaxes from "@/pages/guides/UsPilotTaxes";
import UsPilotHousing from "@/pages/guides/UsPilotHousing";
// New Australia guides
import CasaCplRequirements from "@/pages/guides/CasaCplRequirements";
import CasaAtplRequirements from "@/pages/guides/CasaAtplRequirements";
import CasaMedicalClass1 from "@/pages/guides/CasaMedicalClass1";
import AustraliaPilotTrainingCosts from "@/pages/guides/AustraliaPilotTrainingCosts";
import AustraliaFlightSchoolLoans from "@/pages/guides/AustraliaFlightSchoolLoans";
import AustraliaCadetPrograms from "@/pages/guides/AustraliaCadetPrograms";
import AustraliaPilotSalary2026 from "@/pages/guides/AustraliaPilotSalary2026";
import AustraliaPilotShortage from "@/pages/guides/AustraliaPilotShortage";
import QantasGroupPilotAcademy from "@/pages/guides/QantasGroupPilotAcademy";
import VirginAustraliaCadet from "@/pages/guides/VirginAustraliaCadet";
import RexPilotAcademy from "@/pages/guides/RexPilotAcademy";
import AustraliaRegionalAirlines from "@/pages/guides/AustraliaRegionalAirlines";
import AustraliaMilitaryToAirlines from "@/pages/guides/AustraliaMilitaryToAirlines";
import AustraliaFlightInstructor from "@/pages/guides/AustraliaFlightInstructor";
import AustraliaPilotSeniority from "@/pages/guides/AustraliaPilotSeniority";
import AustraliaPilotBases from "@/pages/guides/AustraliaPilotBases";
import AustraliaPilotCommuting from "@/pages/guides/AustraliaPilotCommuting";
import AustraliaPilotSchedule from "@/pages/guides/AustraliaPilotSchedule";
import AustraliaPilotBenefits from "@/pages/guides/AustraliaPilotBenefits";
import AustraliaPilotTaxes from "@/pages/guides/AustraliaPilotTaxes";
// New Canada guides
import TcCpLRequirements from "@/pages/guides/TcCpLRequirements";
import TcAtplRequirements from "@/pages/guides/TcAtplRequirements";
import TcMedicalClass1 from "@/pages/guides/TcMedicalClass1";
import CanadaPilotTrainingCosts from "@/pages/guides/CanadaPilotTrainingCosts";
import CanadaFlightSchoolLoans from "@/pages/guides/CanadaFlightSchoolLoans";
import CanadaCadetPrograms from "@/pages/guides/CanadaCadetPrograms";
import CanadaPilotSalary2026 from "@/pages/guides/CanadaPilotSalary2026";
import CanadaPilotShortage from "@/pages/guides/CanadaPilotShortage";
import AirCanadaJazzCadet from "@/pages/guides/AirCanadaJazzCadet";
import WestJetEncoreCadet from "@/pages/guides/WestJetEncoreCadet";
import PorterAirlinesCadet from "@/pages/guides/PorterAirlinesCadet";
import CanadaRegionalAirlines from "@/pages/guides/CanadaRegionalAirlines";
import CanadaMilitaryToAirlines from "@/pages/guides/CanadaMilitaryToAirlines";
import CanadaFlightInstructor from "@/pages/guides/CanadaFlightInstructor";
import CanadaPilotSeniority from "@/pages/guides/CanadaPilotSeniority";
import CanadaPilotBases from "@/pages/guides/CanadaPilotBases";
import CanadaPilotCommuting from "@/pages/guides/CanadaPilotCommuting";
import CanadaPilotSchedule from "@/pages/guides/CanadaPilotSchedule";
import CanadaPilotBenefits from "@/pages/guides/CanadaPilotBenefits";
import CanadaPilotTaxes from "@/pages/guides/CanadaPilotTaxes";
// New Europe guides
import EasaCplRequirements from "@/pages/guides/EasaCplRequirements";
import EasaAtplRequirements from "@/pages/guides/EasaAtplRequirements";
import EasaMedicalClass1 from "@/pages/guides/EasaMedicalClass1";
import EuropePilotTrainingCosts from "@/pages/guides/EuropePilotTrainingCosts";
import EuropeFlightSchoolLoans from "@/pages/guides/EuropeFlightSchoolLoans";
import EuropeCadetPrograms from "@/pages/guides/EuropeCadetPrograms";
import EuropePilotSalary2026 from "@/pages/guides/EuropePilotSalary2026";
import EuropePilotShortage from "@/pages/guides/EuropePilotShortage";
import LufthansaEuropeanFlightAcademy from "@/pages/guides/LufthansaEuropeanFlightAcademy";
import AirFranceKLMCadet from "@/pages/guides/AirFranceKLMCadet";
import EuropeRegionalAirlines from "@/pages/guides/EuropeRegionalAirlines";
import EuropeMilitaryToAirlines from "@/pages/guides/EuropeMilitaryToAirlines";
import EuropeFlightInstructor from "@/pages/guides/EuropeFlightInstructor";
import EuropePilotSeniority from "@/pages/guides/EuropePilotSeniority";
// New UAE guides
import UaePilotTrainingCosts from "@/pages/guides/UaePilotTrainingCosts";
import EmiratesCadetPilotProgram from "@/pages/guides/EmiratesCadetPilotProgram";
import EtihadCadetPilotProgram from "@/pages/guides/EtihadCadetPilotProgram";
import AirArabiaCadetProgram from "@/pages/guides/AirArabiaCadetProgram";
import UaePilotSalary2026 from "@/pages/guides/UaePilotSalary2026";
import UaePilotLifestyle from "@/pages/guides/UaePilotLifestyle";
import UaeMedicalClass1 from "@/pages/guides/UaeMedicalClass1";
import UaePilotShortage from "@/pages/guides/UaePilotShortage";
import BestFlightSchoolsCanada from "@/pages/guides/BestFlightSchoolsCanada";
import BestFlightSchoolsAustralia from "@/pages/guides/BestFlightSchoolsAustralia";
import BestFlightSchoolsEurope from "@/pages/guides/BestFlightSchoolsEurope";
import AirlineInterviewPrepUSA from "@/pages/guides/AirlineInterviewPrepUSA";
import PilotLifestyleUK from "@/pages/guides/PilotLifestyleUK";
import HowToBecomePilotUAE from "@/pages/guides/HowToBecomePilotUAE";
// New South Africa guides
import SaCplRequirements from "@/pages/guides/SaCplRequirements";
import SaAtplRequirements from "@/pages/guides/SaAtplRequirements";
import SaMedicalClass1 from "@/pages/guides/SaMedicalClass1";
import SouthAfricaPilotTrainingCosts from "@/pages/guides/SouthAfricaPilotTrainingCosts";
import SouthAfricaCadetPrograms from "@/pages/guides/SouthAfricaCadetPrograms";
import SouthAfricaPilotSalary2026 from "@/pages/guides/SouthAfricaPilotSalary2026";
import SouthAfricaPilotShortage from "@/pages/guides/SouthAfricaPilotShortage";
import BestFlightSchoolsSouthAfrica from "@/pages/guides/BestFlightSchoolsSouthAfrica";
import SouthAfricaRegionalAirlines from "@/pages/guides/SouthAfricaRegionalAirlines";
import SouthAfricaMilitaryToAirlines from "@/pages/guides/SouthAfricaMilitaryToAirlines";
// New New Zealand guides
import NzCplRequirements from "@/pages/guides/NzCplRequirements";
import NzAtplRequirements from "@/pages/guides/NzAtplRequirements";
import NzMedicalClass1 from "@/pages/guides/NzMedicalClass1";
import NewZealandPilotTrainingCosts from "@/pages/guides/NewZealandPilotTrainingCosts";
import NewZealandCadetPrograms from "@/pages/guides/NewZealandCadetPrograms";
import AirNewZealandCadet from "@/pages/guides/AirNewZealandCadet";
import NewZealandPilotSalary2026 from "@/pages/guides/NewZealandPilotSalary2026";
import NewZealandPilotShortage from "@/pages/guides/NewZealandPilotShortage";
import BestFlightSchoolsNewZealand from "@/pages/guides/BestFlightSchoolsNewZealand";
import NewZealandRegionalAirlines from "@/pages/guides/NewZealandRegionalAirlines";
// HomeUAE, HomeSouthAfrica, HomeNewZealand — replaced by CountryHub

// New section pages
import Stories from "./pages/Stories";
import Jobs from "./pages/Jobs";

// Simple static pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import EditorialPolicy from "./pages/EditorialPolicy";
import AboutOurAuthors from "./pages/AboutOurAuthors";
import CorrectionsPolicy from "./pages/CorrectionsPolicy";
import HowWeReview from "./pages/HowWeReview";
import PilotTrainingCostsHub from "./pages/hubs/PilotTrainingCostsHub";
import PilotMedicalHub from "./pages/hubs/PilotMedicalHub";
import CadetProgrammesHub from "./pages/hubs/CadetProgrammesHub";
import PilotSalaryHub from "./pages/hubs/PilotSalaryHub";
import FlightSchoolsHub from "./pages/hubs/FlightSchoolsHub";

// Initialise PostHog analytics once on app load
initAnalytics();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  usePageTracking();
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* Home */}
        <Route path="/" component={Home} />

        {/* Quiz funnel */}
        <Route path="/quiz" component={Quiz} />
        <Route path="/results/:leadId" component={Results} />
        <Route path="/retrieve" component={Retrieve} />

        {/* Licence quiz */}
        <Route path="/quiz/licence" component={LicenceQuiz} />
        <Route path="/quiz/licence/results" component={LicenceQuizResults} />

        {/* Flight Deck quiz (top-of-funnel) */}
        <Route path="/quiz/flight-deck" component={FlightDeckQuiz} />
        <Route path="/quiz/flight-deck/results" component={FlightDeckResults} />
        <Route
          path="/quiz/flight-deck/share/:shareId"
          component={FlightDeckShare}
        />

        {/* Directory & tools */}
        <Route path="/schools" component={Schools} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/tools/integrated-vs-modular" component={IntModDecision} />
        <Route path="/tools/class-1-medical-check" component={MedicalCheck} />
        <Route
          path="/tools/medical-condition-lookup"
          component={MedicalConditionLookup}
        />
        <Route path="/tools/cadet-eligibility" component={CadetEligibility} />
        <Route path="/tools/finance-calculator" component={FinanceCalculator} />
        <Route path="/tools/salary-estimator" component={SalaryEstimator} />
        <Route path="/tools/route-selector" component={RouteSelector} />

        {/* Guides */}
        <Route path="/guides" component={GuidesIndex} />
        <Route
          path="/guides/how-to-become-a-pilot-australia"
          component={HowToBecomePilotAustralia}
        />
        <Route
          path="/guides/how-to-become-a-pilot-canada"
          component={HowToBecomePilotCanada}
        />
        <Route
          path="/guides/how-to-become-a-pilot-europe"
          component={HowToBecomePilotEurope}
        />
        <Route
          path="/guides/how-to-become-a-pilot"
          component={HowToBecomePilot}
        />
        <Route
          path="/guides/pilot-training-costs"
          component={PilotTrainingCosts}
        />
        <Route
          path="/guides/integrated-vs-modular"
          component={IntegratedVsModular}
        />
        <Route path="/guides/class-1-medical" component={Class1Medical} />
        <Route path="/guides/adhd-pilot-uk" component={AdhdPilotGuide} />
        <Route
          path="/guides/integrated-vs-modular-cost"
          component={IntegratedVsModularCost}
        />
        <Route
          path="/guides/modular-vs-integrated-pilot-training"
          component={IntegratedVsModular}
        />
        <Route
          path="/guides/airline-pilot-salary"
          component={AirlinePilotSalary}
        />
        <Route
          path="/guides/best-route-to-airline"
          component={BestRouteToAirline}
        />
        <Route path="/guides/finance-guide" component={FinanceGuide} />
        <Route path="/guides/training-timeline" component={TrainingTimeline} />

        {/* New SEO guides */}
        <Route
          path="/guides/am-i-too-old-to-become-a-pilot"
          component={AmITooOld}
        />
        <Route
          path="/guides/class-1-medical-disqualifiers"
          component={Class1MedicalDisqualifiers}
        />
        <Route
          path="/guides/cadet-pilot-programmes-uk"
          component={CadetProgrammes}
        />
        <Route
          path="/guides/how-to-finance-pilot-training-uk"
          component={PilotTrainingFinance2026}
        />
        <Route
          path="/guides/uk-pilot-salary-2026"
          component={PilotSalaryUK2026}
        />
        <Route
          path="/guides/am-i-ready-to-start-pilot-training"
          component={ReadyToStartTraining}
        />
        <Route path="/guides/hour-building-pilot-uk" component={HourBuilding} />
        <Route path="/guides/atpl-theory-exams-uk" component={AtplExams} />
        <Route
          path="/guides/uk-pilot-shortage-2026"
          component={PilotShortageUK}
        />
        <Route path="/guides/pilot-type-rating-uk" component={TypeRating} />
        <Route
          path="/guides/raf-vs-civilian-pilot-training"
          component={RAFvsCivilian}
        />
        <Route
          path="/guides/pilot-training-over-40"
          component={PilotTrainingOver40}
        />
        <Route
          path="/guides/airline-pilot-interview"
          component={AirlineInterview}
        />
        <Route
          path="/guides/women-in-aviation-uk"
          component={WomenInAviation}
        />
        <Route
          path="/guides/best-flight-schools-uk-2026"
          component={BestFlightSchoolsUK}
        />

        {/* Cadet programme guides */}
        <Route
          path="/guides/ba-speedbird-academy"
          component={BASpeedbirdAcademy}
        />
        <Route
          path="/guides/easyjet-generation-pilot"
          component={EasyJetGeneration}
        />
        <Route
          path="/guides/ryanair-cadet-programme"
          component={RyanairCadet}
        />
        <Route
          path="/guides/wizz-air-pilot-academy"
          component={WizzAirAcademy}
        />
        <Route path="/guides/tui-mpl-cadet-programme" component={TuiMPL} />
        <Route
          path="/guides/pilot-aptitude-test-uk"
          component={PilotAptitudeTest}
        />
        <Route path="/guides/pilot-cv-cover-letter" component={PilotCvGuide} />
        <Route
          path="/guides/pilot-aptitude-test-preparation"
          component={PilotAptitudeTestPrep}
        />
        <Route
          path="/guides/airline-simulator-assessment"
          component={SimulatorAssessmentGuide}
        />

        {/* New UK licence & career guides */}
        <Route path="/guides/ppl-uk" component={PplGuideUK} />
        <Route path="/guides/cpl-uk" component={CplGuideUK} />
        <Route
          path="/guides/instrument-rating-uk"
          component={InstrumentRatingUK}
        />
        <Route path="/guides/frozen-atpl-uk" component={FrozenAtplUK} />
        <Route path="/guides/first-officer-uk" component={FirstOfficerUK} />
        <Route
          path="/guides/flight-instructor-uk"
          component={FlightInstructorUK}
        />
        <Route path="/guides/mcc-joc-uk" component={MccJocUK} />
        <Route
          path="/guides/pilot-eyesight-requirements-uk"
          component={PilotEyesightUK}
        />

        {/* New section pages */}
        <Route path="/stories" component={Stories} />
        <Route path="/jobs" component={Jobs} />

        {/* Quiz Hub */}
        <Route path="/quizzes" component={QuizHub} />
        <Route path="/quizzes/:slug" component={QuizPage} />

        {/* Roadmap Generator */}
        <Route path="/roadmap" component={RoadmapGenerator} />

        {/* Admin */}
        <Route path="/admin" component={AdminDashboard} />
        {/* Partner */}
        <Route path="/partner" component={Partner} />
        <Route path="/for-schools" component={ForSchools} />

        {/* Static pages */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/editorial-policy" component={EditorialPolicy} />
        <Route path="/about-our-authors" component={AboutOurAuthors} />
        <Route path="/corrections-policy" component={CorrectionsPolicy} />
        <Route
          path="/how-we-review-pilot-training-information"
          component={HowWeReview}
        />

        {/* Country selector */}
        <Route path="/select" component={CountrySelect} />

        {/* Regional hub routes — all served by CountryHub */}
        <Route path="/australia" component={() => <CountryHub />} />
        <Route path="/canada" component={() => <CountryHub />} />
        <Route path="/europe" component={() => <CountryHub />} />

        {/* US routes */}
        <Route path="/us" component={HomeUS} />
        <Route path="/us/medical-lookup" component={MedicalConditionLookupUS} />
        <Route path="/us/cadet-eligibility" component={CadetEligibilityUS} />
        <Route path="/us/calculator" component={CalculatorUS} />
        <Route path="/us/roadmap" component={RoadmapGeneratorUS} />
        <Route path="/us/partner" component={PartnerUS} />
        <Route path="/us/guides" component={GuidesIndexUS} />
        <Route
          path="/us/guides/how-to-become-a-pilot"
          component={HowToBecomePilotUS}
        />
        <Route path="/us/guides/part-61-vs-141" component={Part61Vs141} />
        <Route
          path="/us/guides/faa-medical-requirements"
          component={FaaMedicalGuide}
        />
        <Route path="/us/schools" component={SchoolsUS} />

        {/* New US guides */}
        <Route
          path="/us/guides/airline-pilot-salary-usa"
          component={PilotSalaryUSA}
        />
        <Route
          path="/us/guides/how-to-fund-pilot-training-usa"
          component={FundPilotTrainingUSA}
        />
        <Route
          path="/us/guides/ppl-requirements-usa"
          component={PplRequirementsUSA}
        />
        <Route
          path="/us/guides/commercial-pilot-certificate-usa"
          component={CommercialPilotCertUSA}
        />
        <Route
          path="/us/guides/gi-bill-flight-training"
          component={GiBillFlightTraining}
        />
        <Route
          path="/us/guides/instrument-rating-usa"
          component={InstrumentRatingUSA}
        />
        <Route
          path="/us/guides/us-pilot-career-outlook"
          component={UsPilotCareerOutlook}
        />
        <Route path="/us/guides/adhd-faa-medical" component={AdhdFaaMedical} />
        <Route
          path="/us/guides/atp-certificate-usa"
          component={AtpCertificateUSA}
        />
        <Route path="/us/guides/cfi-career-usa" component={CfiCareerUSA} />
        <Route
          path="/us/guides/airline-interview-usa"
          component={AirlineInterviewUSA}
        />
        <Route
          path="/us/guides/am-i-too-old-to-become-a-pilot-usa"
          component={AmITooOldUSA}
        />
        <Route
          path="/us/guides/pilot-training-over-40-usa"
          component={PilotTrainingOver40USA}
        />
        <Route
          path="/us/guides/united-aviate-program"
          component={UnitedAviateGuide}
        />
        <Route
          path="/us/guides/delta-propel-program"
          component={DeltaPropelGuide}
        />
        <Route
          path="/us/guides/pilot-aptitude-test-usa"
          component={PilotAptitudeTestUSA}
        />
        <Route
          path="/us/guides/hour-building-usa"
          component={HourBuildingUSA}
        />
        <Route path="/us/guides/type-rating-usa" component={TypeRatingUSA} />
        <Route
          path="/us/guides/women-in-aviation-usa"
          component={WomenInAviationUSA}
        />
        <Route path="/us/guides/pilot-resume-usa" component={PilotCvGuideUSA} />
        <Route
          path="/us/guides/best-flight-schools-usa"
          component={BestFlightSchoolsUSA}
        />
        <Route
          path="/us/guides/pilot-training-timeline-usa"
          component={TrainingTimelineUSA}
        />
        <Route
          path="/us/guides/pilot-training-costs-usa"
          component={PilotTrainingCostsUSA}
        />
        <Route
          path="/us/guides/military-to-airline-usa"
          component={MilitaryToAirlineUSA}
        />
        <Route
          path="/us/guides/embry-riddle-aeronautical-university"
          component={EmbryRiddleGuide}
        />
        <Route
          path="/us/guides/atp-flight-school-guide"
          component={AtpFlightSchoolGuide}
        />

        {/* New US guides (batch 2) */}
        <Route
          path="/us/guides/faa-atp-requirements"
          component={FaaAtpRequirements}
        />
        <Route
          path="/us/guides/us-regional-airlines-guide"
          component={UsRegionalAirlinesGuide}
        />
        <Route
          path="/us/guides/major-airlines-hiring-usa"
          component={MajorAirlinesHiringUSA}
        />
        <Route
          path="/us/guides/faa-medical-class-1"
          component={FaaMedicalClass1}
        />
        <Route
          path="/us/guides/faa-medical-class-2"
          component={FaaMedicalClass2}
        />
        <Route
          path="/us/guides/faa-medical-class-3"
          component={FaaMedicalClass3}
        />
        <Route
          path="/us/guides/us-flight-school-loans"
          component={UsFlightSchoolLoans}
        />
        <Route
          path="/us/guides/us-cadet-programs"
          component={UsCadetPrograms}
        />
        <Route
          path="/us/guides/us-military-pilot-to-airlines"
          component={UsMilitaryPilotToAirlines}
        />
        <Route
          path="/us/guides/us-pilot-salary-2026"
          component={UsPilotSalary2026}
        />
        <Route
          path="/us/guides/us-pilot-retirement-age"
          component={UsPilotRetirementAge}
        />
        <Route
          path="/us/guides/us-pilot-training-market-guide"
          component={UsPilotUnionGuide}
        />
        <Route
          path="/us/guides/us-pilot-seniority"
          component={UsPilotSeniority}
        />
        <Route
          path="/us/guides/us-pilot-commuting"
          component={UsPilotCommuting}
        />
        <Route
          path="/us/guides/us-pilot-training-2026"
          component={UsPilotBases}
        />
        <Route
          path="/us/guides/us-pilot-schedule"
          component={UsPilotSchedule}
        />
        <Route
          path="/us/guides/us-pilot-benefits"
          component={UsPilotBenefits}
        />
        <Route path="/us/guides/us-pilot-taxes" component={UsPilotTaxes} />
        <Route path="/us/guides/us-pilot-housing" component={UsPilotHousing} />
        {/* Australia guides */}
        <Route
          path="/australia/guides/casa-cpl-requirements"
          component={CasaCplRequirements}
        />
        <Route
          path="/australia/guides/casa-atpl-requirements"
          component={CasaAtplRequirements}
        />
        <Route
          path="/australia/guides/casa-medical-class-1"
          component={CasaMedicalClass1}
        />
        <Route
          path="/australia/guides/australia-pilot-training-costs"
          component={AustraliaPilotTrainingCosts}
        />
        <Route
          path="/australia/guides/australia-flight-school-loans"
          component={AustraliaFlightSchoolLoans}
        />
        <Route
          path="/australia/guides/australia-cadet-programs"
          component={AustraliaCadetPrograms}
        />
        <Route
          path="/australia/guides/australia-pilot-salary-2026"
          component={AustraliaPilotSalary2026}
        />
        <Route
          path="/australia/guides/australia-pilot-shortage"
          component={AustraliaPilotShortage}
        />
        <Route
          path="/australia/guides/qantas-group-pilot-academy"
          component={QantasGroupPilotAcademy}
        />
        <Route
          path="/australia/guides/virgin-australia-cadet-pilot-program"
          component={VirginAustraliaCadet}
        />
        <Route
          path="/australia/guides/rex-pilot-academy"
          component={RexPilotAcademy}
        />
        <Route
          path="/australia/guides/australia-regional-airlines"
          component={AustraliaRegionalAirlines}
        />
        <Route
          path="/australia/guides/australia-military-to-airlines"
          component={AustraliaMilitaryToAirlines}
        />
        <Route
          path="/australia/guides/australia-flight-instructor"
          component={AustraliaFlightInstructor}
        />
        <Route
          path="/australia/guides/pilot-seniority"
          component={AustraliaPilotSeniority}
        />
        <Route
          path="/australia/guides/australia-pilot-bases"
          component={AustraliaPilotBases}
        />
        <Route
          path="/australia/guides/australia-pilot-commuting"
          component={AustraliaPilotCommuting}
        />
        <Route
          path="/australia/guides/australia-pilot-schedule"
          component={AustraliaPilotSchedule}
        />
        <Route
          path="/australia/guides/australia-pilot-benefits"
          component={AustraliaPilotBenefits}
        />
        <Route
          path="/australia/guides/australia-pilot-taxes"
          component={AustraliaPilotTaxes}
        />
        {/* Canada guides */}
        <Route
          path="/canada/guides/transport-canada-cpl-requirements"
          component={TcCpLRequirements}
        />
        <Route
          path="/canada/guides/tc-atpl-requirements"
          component={TcAtplRequirements}
        />
        <Route
          path="/canada/guides/tc-medical-class-1"
          component={TcMedicalClass1}
        />
        <Route
          path="/canada/guides/canada-pilot-training-costs"
          component={CanadaPilotTrainingCosts}
        />
        <Route
          path="/canada/guides/canada-flight-school-loans"
          component={CanadaFlightSchoolLoans}
        />
        <Route
          path="/canada/guides/canada-cadet-programs"
          component={CanadaCadetPrograms}
        />
        <Route
          path="/canada/guides/canada-pilot-salary-2026"
          component={CanadaPilotSalary2026}
        />
        <Route
          path="/canada/guides/canada-pilot-shortage"
          component={CanadaPilotShortage}
        />
        <Route
          path="/canada/guides/air-canada-jazz-cadet"
          component={AirCanadaJazzCadet}
        />
        <Route
          path="/canada/guides/westjet-encore-cadet"
          component={WestJetEncoreCadet}
        />
        <Route
          path="/canada/guides/porter-airlines-cadet-program"
          component={PorterAirlinesCadet}
        />
        <Route
          path="/canada/guides/canada-regional-airlines"
          component={CanadaRegionalAirlines}
        />
        <Route
          path="/canada/guides/canada-military-to-airlines"
          component={CanadaMilitaryToAirlines}
        />
        <Route
          path="/canada/guides/canada-flight-instructor"
          component={CanadaFlightInstructor}
        />
        <Route
          path="/canada/guides/canada-pilot-seniority"
          component={CanadaPilotSeniority}
        />
        <Route
          path="/canada/guides/canada-pilot-bases"
          component={CanadaPilotBases}
        />
        <Route
          path="/canada/guides/canada-pilot-commuting"
          component={CanadaPilotCommuting}
        />
        <Route
          path="/canada/guides/canada-pilot-schedule"
          component={CanadaPilotSchedule}
        />
        <Route
          path="/canada/guides/canada-pilot-benefits"
          component={CanadaPilotBenefits}
        />
        <Route
          path="/canada/guides/canada-pilot-taxes"
          component={CanadaPilotTaxes}
        />
        {/* Europe guides */}
        <Route
          path="/europe/guides/easa-cpl-requirements"
          component={EasaCplRequirements}
        />
        <Route
          path="/europe/guides/easa-atpl-requirements"
          component={EasaAtplRequirements}
        />
        <Route
          path="/europe/guides/easa-medical-class-1"
          component={EasaMedicalClass1}
        />
        <Route
          path="/europe/guides/pilot-training-costs"
          component={EuropePilotTrainingCosts}
        />
        <Route
          path="/europe/guides/europe-flight-school-loans"
          component={EuropeFlightSchoolLoans}
        />
        <Route
          path="/europe/guides/europe-cadet-programs"
          component={EuropeCadetPrograms}
        />
        <Route
          path="/europe/guides/pilot-salary-2026"
          component={EuropePilotSalary2026}
        />
        <Route
          path="/europe/guides/europe-pilot-shortage"
          component={EuropePilotShortage}
        />
        <Route
          path="/europe/guides/lufthansa-european-flight-academy"
          component={LufthansaEuropeanFlightAcademy}
        />
        <Route
          path="/europe/guides/air-france-klm-cadet-pilot-program"
          component={AirFranceKLMCadet}
        />
        <Route
          path="/europe/guides/europe-regional-airlines-pilot-training"
          component={EuropeRegionalAirlines}
        />
        <Route
          path="/europe/guides/military-to-airlines"
          component={EuropeMilitaryToAirlines}
        />
        <Route
          path="/europe/guides/europe-flight-instructor"
          component={EuropeFlightInstructor}
        />
        <Route
          path="/europe/guides/europe-pilot-seniority"
          component={EuropePilotSeniority}
        />
        {/* UAE hub and guides */}
        <Route path="/uae" component={() => <CountryHub />} />
        <Route
          path="/uae/guides/uae-pilot-training-costs"
          component={UaePilotTrainingCosts}
        />
        <Route
          path="/uae/guides/emirates-cadet-pilot-program"
          component={EmiratesCadetPilotProgram}
        />
        <Route
          path="/uae/guides/etihad-cadet-pilot-program"
          component={EtihadCadetPilotProgram}
        />
        <Route
          path="/uae/guides/air-arabia-cadet-program"
          component={AirArabiaCadetProgram}
        />
        <Route
          path="/uae/guides/uae-pilot-salary-2026"
          component={UaePilotSalary2026}
        />
        <Route
          path="/uae/guides/uae-pilot-lifestyle"
          component={UaePilotLifestyle}
        />
        <Route
          path="/uae/guides/uae-medical-class-1"
          component={UaeMedicalClass1}
        />
        <Route
          path="/uae/guides/uae-pilot-shortage"
          component={UaePilotShortage}
        />
        {/* South Africa hub and guides */}
        <Route path="/south-africa" component={() => <CountryHub />} />
        <Route
          path="/south-africa/guides/sacpl-requirements"
          component={SaCplRequirements}
        />
        <Route
          path="/south-africa/guides/sa-atpl-requirements"
          component={SaAtplRequirements}
        />
        <Route
          path="/south-africa/guides/sacaa-class-1-medical-certificate"
          component={SaMedicalClass1}
        />
        <Route
          path="/south-africa/guides/pilot-training-costs"
          component={SouthAfricaPilotTrainingCosts}
        />
        <Route
          path="/south-africa/guides/south-africa-cadet-programs"
          component={SouthAfricaCadetPrograms}
        />
        <Route
          path="/south-africa/guides/pilot-salary-2026"
          component={SouthAfricaPilotSalary2026}
        />
        <Route
          path="/south-africa/guides/south-africa-pilot-shortage"
          component={SouthAfricaPilotShortage}
        />
        <Route
          path="/south-africa/guides/best-flight-schools-south-africa"
          component={BestFlightSchoolsSouthAfrica}
        />
        <Route
          path="/south-africa/guides/south-africa-regional-airlines-pilot-training"
          component={SouthAfricaRegionalAirlines}
        />
        <Route
          path="/south-africa/guides/military-to-airlines"
          component={SouthAfricaMilitaryToAirlines}
        />
        {/* New Zealand hub and guides */}
        <Route path="/new-zealand" component={() => <CountryHub />} />
        <Route
          path="/new-zealand/guides/nz-cpl-requirements"
          component={NzCplRequirements}
        />
        <Route
          path="/new-zealand/guides/nz-atpl-requirements"
          component={NzAtplRequirements}
        />
        <Route
          path="/new-zealand/guides/nz-medical-class-1"
          component={NzMedicalClass1}
        />
        <Route
          path="/new-zealand/guides/new-zealand-pilot-training-costs"
          component={NewZealandPilotTrainingCosts}
        />
        <Route
          path="/new-zealand/guides/new-zealand-cadet-programs"
          component={NewZealandCadetPrograms}
        />
        <Route
          path="/new-zealand/guides/air-new-zealand-cadet-pilot-training"
          component={AirNewZealandCadet}
        />
        <Route
          path="/new-zealand/guides/new-zealand-pilot-salary-2026"
          component={NewZealandPilotSalary2026}
        />
        <Route
          path="/new-zealand/guides/new-zealand-pilot-shortage"
          component={NewZealandPilotShortage}
        />
        <Route
          path="/new-zealand/guides/best-flight-schools-new-zealand"
          component={BestFlightSchoolsNewZealand}
        />
        <Route
          path="/new-zealand/guides/new-zealand-regional-airlines-pilot-training"
          component={NewZealandRegionalAirlines}
        />
        {/* New cluster guides */}
        <Route
          path="/canada/guides/best-flight-schools-canada"
          component={BestFlightSchoolsCanada}
        />
        <Route
          path="/australia/guides/best-flight-schools-australia"
          component={BestFlightSchoolsAustralia}
        />
        <Route
          path="/europe/guides/best-flight-schools-europe"
          component={BestFlightSchoolsEurope}
        />
        <Route
          path="/us/guides/airline-interview-prep"
          component={AirlineInterviewPrepUSA}
        />
        <Route path="/guides/pilot-lifestyle-uk" component={PilotLifestyleUK} />
        <Route
          path="/uae/guides/how-to-become-a-pilot-uae"
          component={HowToBecomePilotUAE}
        />
        {/* Hub pages */}
        <Route
          path="/hubs/pilot-training-costs"
          component={PilotTrainingCostsHub}
        />
        <Route path="/hubs/pilot-medical" component={PilotMedicalHub} />
        <Route path="/hubs/cadet-programmes" component={CadetProgrammesHub} />
        <Route path="/hubs/pilot-salary" component={PilotSalaryHub} />
        <Route path="/hubs/flight-schools" component={FlightSchoolsHub} />
        {/* 404 */}
        <Route path="/404" component={NotFound} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <CountryProvider>
          <CurrencyProvider>
            <ThemeProvider defaultTheme="light">
              <TooltipProvider>
                <Toaster />
                <Router />
              </TooltipProvider>
            </ThemeProvider>
          </CurrencyProvider>
        </CountryProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
export default App;
