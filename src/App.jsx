import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import VisionMission from "./pages/vision-mission/vision-mission.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import NoPage from './pages/Nopage/NoPage.jsx';
import FAQ from './pages/FAQ/faq';
import AntiRagging from "./pages/Students-Section/Student-Welfare/Anti-Ragging/AntiRagging.jsx";
import AntiRaggingCommittee from "./pages/Students-Section/Student-Welfare/Anti-Ragging-Committee/AntiRaggingCommittee";
import Academicheads from "./pages/AcadmicHeads/Academicheads.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Principal from "./pages/Principal/Principal.jsx";
import AcademicProspectusPage from "./pages/Academic-Prospectus/AcademicProspectusPage.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import NIRF from "./pages/NIRF/nirf.jsx";
import ECell from './pages/ECell/ECell.jsx';
import Examinations from './pages/Examinations/Examinations.jsx';

import ECell from './pages/ECell/ECell.jsx';
import AdmissionNotices from "./pages/AdmissionNotices/AdmissionNotices.jsx";


function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/anti-ragging" element={<AntiRagging />} />
        <Route
          path="/anti-ragging-committee"
          element={<AntiRaggingCommittee />}
        />
        <Route path="/about/academic-heads" element={<Academicheads />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/about/principal" element={<Principal />}/>
        <Route path="/students-section/courses" element={<Courses />} />
        <Route path="/prospectus" element={<AcademicProspectusPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/academics/nirf" element={<NIRF />} />
        <Route path='/ecell' element={<ECell />} />
        <Route path='/examinations' element={<Examinations />} />

        <Route path='/ecell' element={<ECell />} />
        <Route path="/admissions/notices" element={<AdmissionNotices />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
