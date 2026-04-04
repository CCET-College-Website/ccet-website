import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import NoPage from "./pages/Nopage/NoPage.jsx";
import FAQ from "./pages/FAQ/faq";
import Nss from "./pages/Nss/Nss.jsx";
import VisionMission from "./pages/vision-mission/vision-mission.jsx";
import Infrastructure from "./pages/infrastructure/infrastructure.jsx";
import Convocation from "./pages/Convocation/Convocation.jsx";
import AntiRagging from "./pages/Anti-Ragging/AntiRagging.jsx";
import AntiRaggingCommittee from "./pages/Anti-Ragging-Committee/AntiRaggingCommittee.jsx";
import Academicheads from "./pages/AcadmicHeads/Academicheads.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Principal from "./pages/Principal/Principal.jsx";
import RulesPolicies from "./pages/Administrator/RulesPolicies.jsx";
import AuditReport from "./pages/Administrator/AuditReport.jsx";
import Nba from "./pages/Administrator/Nba.jsx";
import AcademicProspectusPage from "./pages/Academic-Prospectus/AcademicProspectusPage.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import NIRF from "./pages/NIRF/nirf.jsx";
import HelpDesk from "./pages/HelpDesk/HelpDesk.jsx";
import ECell from "./pages/ECell/ECell.jsx";
import SportsFacility from "./pages/Sports/SportsFacility.jsx";
import FitIndiaPage from "./pages/FitIndia/FitIndiaPage.jsx";
import Leet from "./pages/Degree-PU-LEET/Degree-pu-leet.jsx";
import Doctorate from "./pages/Doctorate/PhdProgrammes.jsx";
import Degree from "./pages/Degree/Degree.jsx";
import Tenders from "./pages/Tenders/Tenders.jsx";
import History from "./pages/History/History.jsx";
import StudentChaptersandClubs from "./pages/StudentChaptersandClubs/StudentChaptersandClubs.jsx";
import NoticeDetails from "./pages/Home/NoticeDetails.jsx";
import Canteen from "./pages/Canteen/Canteen.jsx";
import AdmissionNotices from "./pages/AdmissionNotices/AdmissionNotices.jsx";
import EventCalendar from "./pages/EventCalendar/EventCalendar.jsx";
import AcademicCalendar from "./pages/AcademicCalendar/AcademicCalendar.jsx";
import StudentCouncil from "./pages/Student-Council/StudentCouncil.jsx";
import EoaLatest from "./pages/MandatoryDisclosure/EoaLatest.jsx";
import Partone from "./pages/MandatoryDisclosure/ApplicationPart-1.jsx";
import Parttwo from "./pages/MandatoryDisclosure/ApplicationPart-2.jsx";
import DeficiencyReport from "./pages/MandatoryDisclosure/DeficiencyReport.jsx";
import OldEOA from "./pages/MandatoryDisclosure/OldEoas.jsx";
import CampusVirtualTour from "./pages/CampusTour/CampusVirtualTour.jsx";
import Classrooms from "./pages/Classrooms/Classrooms.jsx";
import CampusMap from "./pages/CampusMap/CampusMap.jsx";
import StudentWelfare from "./pages/StudentWelfare/StudentWelfare.jsx";
import BoysHostel from "./pages/BoysHostel/BoysHostel.jsx";
import GirlsHostel from "./pages/GirlsHostel/GirlsHostel.jsx";
import FingerPrintIssue1 from "./pages/FingerPrint/FingerPrint1.jsx";
import FingerPrintIssue2 from "./pages/FingerPrint/FingerPrint2.jsx";
import Webmasters from "./pages/Webmasters/webmasters.jsx";
import OfficialCCET from "./pages/Officials-Page/OfficialsPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/Privacy&Policy.jsx";
import ExamNotice from "./pages/ExamNotice/ExamNotice.jsx";
import Scholarship from "./pages/Scholarship/Scholarship.jsx";
import Forms from "./pages/Forms/Forms.jsx";
import Rti from "./pages/RTI/Rti.jsx";
import Downloads from "./pages/Downloads/Downloads.jsx"
import NBA_CSE from "./pages/NBA/NBA_CSE";
import NBA_ECE from "./pages/NBA/NBA_ECE";
import NBA_MECH from "./pages/NBA/NBA_MECH";
import NBA_CIVIL from "./pages/NBA/NBA_CE";

// ECE Department
import EceOverview from "./pages/ECE-Department/EceOverview.jsx"
import EceFaculty from "./pages/ECE-Department/EceFaculty.jsx";
import EceHod from "./pages/ECE-Department/EceHod.jsx";
import EceLabs from "./pages/ECE-Department/EceLabs.jsx";
import EceTimeTable from "./pages/ECE-Department/EceTimeTable.jsx";
import EceSyllabus from "./pages/ECE-Department/EceSyllabus.jsx";
import EceResearch from "./pages/ECE-Department/EceResearch.jsx";

//Applied Sciences Department
import ASOverview from "./pages/AS-Department/ASOverview.jsx";
import ASFaculty from "./pages/AS-Department/ASFaculty.jsx";
import ASHod from "./pages/AS-Department/ASHod.jsx";
import ASLabs from "./pages/AS-Department/ASLabs.jsx";
import ASResearch from "./pages/AS-Department/ASResearch.jsx";
import ASSyllabus from "./pages/AS-Department/ASSyllabus.jsx";
import ASTimeTable from "./pages/AS-Department/ASTimeTable.jsx";


//Civil Department
import CivilOverview from "./pages/Civil-Department/CivilOverview.jsx";
import CivilHod from "./pages/Civil-Department/CivilHod.jsx";
import CivilFaculty from "./pages/Civil-Department/CivilFaculty.jsx";
import CivilLabs from "./pages/Civil-Department/CivilLabs.jsx";
import CivilResearch from "./pages/Civil-Department/CivilResearch.jsx";
import CivilSyllabus from "./pages/Civil-Department/CivilSyllabus.jsx";
import CivilTimeTable from "./pages/Civil-Department/CivilTimeTable.jsx";

//Mechanical Department
import MechOverview from "./pages/Mech-Department/MechOverview.jsx";
import MechFaculty from "./pages/Mech-Department/MechFaculty.jsx";
import MechHod from "./pages/Mech-Department/MechHod.jsx";
import MechLabs from "./pages/Mech-Department/MechLabs.jsx";
import MechTimeTable from "./pages/Mech-Department/MechTimeTable.jsx";
import MechSyllabus from "./pages/Mech-Department/MechSyllabus.jsx";
import MechResearch from "./pages/Mech-Department/MechResearch.jsx";

//CSE Department
import CseOverview from "./pages/CSE-Department/CseOverview.jsx";
import CseFaculty from "./pages/CSE-Department/CseFaculty.jsx";
import CseHod from "./pages/CSE-Department/CseHod";
import CseLabs from "./pages/CSE-Department/CseLabs.jsx";
import CseTimeTable from "./pages/CSE-Department/CseTimeTable.jsx";
import CseSyllabus from "./pages/CSE-Department/CseSyllabus.jsx";
import CseResearch from "./pages/CSE-Department/CseResearch.jsx";
import IIRC from "./pages/IIRC/IIRC.jsx";
import Research from "./pages/Research/Research.jsx";
import IPRC from "./pages/IPRC/IPRC.jsx";
import ComputerCentre from "./pages/ComputerCentre/ComputerCentre.jsx";

function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                {/* Home & Default */}
                <Route path="/" element={<Home />} />
                <Route path="/event-calendar" element={<EventCalendar />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/rti" element={<Rti />} />
                <Route path="/downloads" element={<Downloads />} />

                {/* Static Pages */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/vision-mission" element={<VisionMission />} />
                <Route path="/nss" element={<Nss />} />
                <Route path="/convocation" element={<Convocation />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/admissions/help-desk" element={<HelpDesk />} />
                <Route path="/iirc" element={<IIRC />} />
                <Route path="/research" element={<Research />} />
                <Route path="/iprc" element={<IPRC />} />
                <Route path="/computercentre" element={<ComputerCentre />} />

                {/* Student Section */}
                <Route path="/anti-ragging" element={<AntiRagging />} />
                <Route path="/anti-ragging-committee" element={<AntiRaggingCommittee />} />
                <Route path="/student-chapters-clubs" element={<StudentChaptersandClubs />} />
                <Route path="/student-council" element={<StudentCouncil />} />
                <Route path="/student-welfare/officials" element={<StudentWelfare />} />
                <Route path="/boys-hostel" element={<BoysHostel />} />
                <Route path="/girls-hostel" element={<GirlsHostel />} />
                <Route path="/sports-facilities" element={<SportsFacility />} />
                <Route path="/scholarships" element={<Scholarship />} />
                <Route path="/student-forms" element={<Forms />} />

                {/* About Section */}
                <Route path="/about/academic-heads" element={<Academicheads />} />
                <Route path="/about/principal" element={<Principal />} />
                <Route path="/about/history" element={<History />} />
                <Route path="/life/virtual-tour" element={<CampusVirtualTour />} />
                <Route path="/about/campus-map" element={<CampusMap />} />
                <Route path="/about/canteen" element={<Canteen />} />
                <Route path="/about/classrooms" element={<Classrooms />} />
                 <Route path="/administrator/rules-policies" element={<RulesPolicies />} />
                 <Route path="/administrator/audit-report" element={<AuditReport />} />
                 <Route path="/administrator/nba" element={<Nba />} />
                <Route path="/about/ccet-official" element={<OfficialCCET/>} />
                 <Route path="/nba/cse" element={<NBA_CSE />} />
                 <Route path="/nba/ece" element={<NBA_ECE />} />
                 <Route path="/nba/mech" element={<NBA_MECH />} />
                 <Route path="/nba/civil" element={<NBA_CIVIL />} />

                {/* Programmes */}
                <Route path="/programmes/pu-leet" element={<Leet />} />
                <Route path="/programmes/phd" element={<Doctorate />} />
                <Route path="/programmes/degree" element={<Degree />} />

                {/* Academics */}
                <Route path="/courses" element={<Courses />} />
                <Route path="/prospectus" element={<AcademicProspectusPage />} />
                <Route path="/academics/nirf" element={<NIRF />} />
                <Route path="/academics/calendar" element={<AcademicCalendar />} />
                <Route path="/academics/eoa-report-latest" element={<EoaLatest />} />
                <Route path="/academics/application-part-1" element={<Partone />} />
                <Route path="/academics/application-part-2" element={<Parttwo />} />
                <Route path="/academics/deficiency-report" element={<DeficiencyReport />} />
                <Route path="/academics/old-aicte-eoas" element={<OldEOA />} />

                {/* Facilities */}
                <Route path="/fit-india" element={<FitIndiaPage />} />
                <Route path="/infrastructure" element={<Infrastructure />} />

                {/* Committees & Notices */}
                <Route path="/notices/tenders" element={<Tenders />} />

                {/* Others */}
                <Route path="/admissions/notices" element={<AdmissionNotices />} />
                <Route path="/helpdesk" element={<HelpDesk />} />
                <Route path="/ecell" element={<ECell />} />

                {/* News */}
                <Route path="/notices" element={<NoticeDetails />} />

                {/* ECE Department */}
                <Route path="/academics/ece/overview" element={<EceOverview />} />
                <Route path="/academics/ece/ecefaculty" element={<EceFaculty />} />
                <Route path="/academics/ece/hod" element={<EceHod />} />
                <Route path="/academics/ece/ecetimetable" element={<EceTimeTable />} />
                <Route path="/academics/ece/ecesyllabus" element={<EceSyllabus />} />
                <Route path="/academics/ece/ecelabs" element={<EceLabs />} />
                <Route path="/academics/ece/eceresearch" element={<EceResearch />} />

                {/* CSE Department */}
                <Route path="/academics/cse/overview" element={<CseOverview />} />
                <Route path="/academics/cse/csefaculty" element={<CseFaculty />} />
                <Route path="/academics/cse/hod" element={<CseHod />} />
                <Route path="/academics/cse/cselabs" element={<CseLabs />} />
                <Route path="/academics/cse/csetimetable" element={<CseTimeTable />} />
                <Route path="/academics/cse/csesyllabus" element={<CseSyllabus />} />
                <Route path="/academics/cse/cseresearch" element={<CseResearch />} />

                {/* Civil Department */}
                <Route path="/academics/civil/overview" element={<CivilOverview />} />
                <Route path="/academics/civil/hod" element={<CivilHod />} />
                <Route path="/academics/civil/civilfaculty" element={<CivilFaculty />} />
                <Route path="/academics/civil/civillabs" element={<CivilLabs />} />
                <Route path="/academics/civil/civilresearch" element={<CivilResearch />} />
                <Route path="/academics/civil/civilsyllabus" element={<CivilSyllabus />} />
                <Route path="/academics/civil/civiltimetable" element={<CivilTimeTable />} />

                {/* Mechanical Department */}
                <Route path="/academics/mechanical/overview" element={<MechOverview />} />
                <Route path="/academics/mechanical/mechfaculty" element={<MechFaculty />} />
                <Route path="/academics/mechanical/hod" element={<MechHod />} />
                <Route path="/academics/mechanical/mechlabs" element={<MechLabs />} />
                <Route path="/academics/mechanical/mechtimetable" element={<MechTimeTable />} />
                <Route path="/academics/mechanical/mechsyllabus" element={<MechSyllabus />} />
                <Route path="/academics/mechanical/mechresearch" element={<MechResearch />} />

                {/* Applied Sciences Department */}
                <Route path="/academics/appliedscience/overview" element={<ASOverview />} />
                <Route path="/academics/appliedscience/asfaculty" element={<ASFaculty />} />
                <Route path="/academics/appliedscience/ashod" element={<ASHod />} />
                <Route path="/academics/appliedscience/aslabs" element={<ASLabs />} />
                <Route path="/academics/appliedscience/asresearch" element={<ASResearch />} />
                <Route path="/academics/appliedscience/astimetable" element={<ASTimeTable />} />
                <Route path="/academics/appliedscience/assyllabus" element={<ASSyllabus />} />

                {/* Notices */}
                <Route path="/magazine/fingerprint-vii-1" element={<FingerPrintIssue1 />} />
                <Route path="/magazine/fingerprint-vii-2" element={<FingerPrintIssue2 />} />
                <Route path="/notices/exam-notice-2" element={<ExamNotice />} />

                {/*Webmasters*/}
                <Route path="/webmasters" element={<Webmasters />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
