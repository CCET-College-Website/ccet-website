import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";

import NoPage from "./pages/Nopage/NoPage.jsx";
import FAQ from "./pages/FAQ/faq";
import VisionMission from "./pages/vision-mission/vision-mission.jsx";
import Infrastructure from "./pages/infrastructure/infrastructure.jsx";
import Convocation from "./pages/Convocation/Convocation.jsx";
import AntiRagging from "./pages/Students-Section/Student-Welfare/Anti-Ragging/AntiRagging.jsx";
import AntiRaggingCommittee from "./pages/Students-Section/Student-Welfare/Anti-Ragging-Committee/AntiRaggingCommittee.jsx";
import Academicheads from "./pages/AcadmicHeads/Academicheads.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Principal from "./pages/Principal/Principal.jsx";
import AcademicProspectusPage from "./pages/Academic-Prospectus/AcademicProspectusPage.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import NIRF from "./pages/NIRF/nirf.jsx";
import HelpDesk from "./pages/HelpDesk/HelpDesk.jsx";
import Examinations from "./pages/Examinations/Examinations.jsx";
import ECell from "./pages/ECell/ECell.jsx";
import SportsFacility from "./pages/Sports/SportsFacility.jsx";
import FitIndiaPage from "./pages/Students-Section/Academics/FitIndia/FitIndiaPage.jsx";
import Leet from "./pages/Degree-PU-LEET/Degree-pu-leet.jsx";
import Doctorate from "./pages/Doctorate/PhdProgrammes.jsx";
import Degree from "./pages/Degree/Degree.jsx";
import Tenders from "./pages/Tenders/Tenders.jsx";
import History from "./pages/History/History.jsx";
import RecentUpdates from "./pages/RecentUpdates.jsx";
import StudentChaptersandClubs from "./pages/StudentChaptersandClubs/StudentChaptersandClubs.jsx";
import NewsDetails from "./pages/Home/NewsDetails.jsx";
import Canteen from "./pages/Canteen/Canteen.jsx";

// ECE Department
import EceOverview from "./pages/ECE-Department/ece-overview.jsx";
import ECE_Faculty from "./pages/ECE-Department/ece-faculty.jsx";
import EceLabs from "./pages/ECE-Department/ece-labs.jsx";
import CampusVirtualTour from "./pages/CampusVirtualTour.jsx";
import Classrooms from "./pages/Classrooms/Classrooms.jsx";
import CampusMap from "./pages/CampusMap/CampusMap.jsx";

function App() {
    return (
        <HashRouter>
            <Header/>
            <Routes>
                {/* Home & Default */}
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NoPage/>}/>

                {/* Static Pages */}
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/vision-mission" element={<VisionMission/>}/>
                <Route path="/convocation" element={<Convocation/>}/>
                <Route path="/contact" element={<ContactUs/>}/>

                {/* Student Section */}
                <Route path="/anti-ragging" element={<AntiRagging/>}/>
                <Route path="/anti-ragging-committee" element={<AntiRaggingCommittee/>}/>
                <Route path="/student-chapters-clubs" element={<StudentChaptersandClubs/>}/>

                {/* About Section */}
                <Route path="/about/academic-heads" element={<Academicheads/>}/>
                <Route path="/about/principal" element={<Principal/>}/>
                <Route path="/about/history" element={<History/>}/>
                <Route path="/life/virtual-tour" element={<CampusVirtualTour/>}/>
                <Route path="/about/campus-map" element={<CampusMap />}  />
                <Route path="/about/canteen" element={<Canteen />}  />

                {/* Programmes */}
                <Route path="/programmes/pu-leet" element={<Leet/>}/>
                <Route path="/programmes/phd" element={<Doctorate/>}/>
                <Route path="/programmes/degree" element={<Degree/>}/>

                {/* Academics */}
                <Route path="/courses" element={<Courses/>}/>
                <Route path="/prospectus" element={<AcademicProspectusPage/>}/>
                <Route path="/academics/nirf" element={<NIRF/>}/>
                <Route path="/examinations" element={<Examinations/>}/>

                {/* Facilities */}
                <Route path="/sports-facility" element={<SportsFacility/>}/>
                <Route path="/fit-india" element={<FitIndiaPage/>}/>
                <Route path="/infrastructure" element={<Infrastructure/>}/>

                {/* Committees & Notices */}
                <Route path="/notices/tenders" element={<Tenders/>}/>

                {/* Others */}
                <Route path="/helpdesk" element={<HelpDesk/>}/>
                <Route path="/ecell" element={<ECell/>}/>

                {/* News */}
                <Route path="/news" element={<NewsDetails/>}/>

                {/* ECE Department */}
                <Route path="/ece" element={<EceOverview/>}/>
                <Route path="/ece/ece-faculty" element={<ECE_Faculty/>}/>
                <Route path="/ece/ece-labs" element={<EceLabs/>}/>
            </Routes>
            <Footer/>
        </HashRouter>
    );
}

export default App;