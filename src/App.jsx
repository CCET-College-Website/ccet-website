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
import AntiRaggingCommittee from "./pages/Students-Section/Student-Welfare/Anti-Ragging-Committee/AntiRaggingCommittee";
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
import StudentChaptersandClubs from "./pages/StudentChaptersandClubs/StudentChaptersandClubs.jsx";
import NewsDetails from "./pages/Home/NewsDetails.jsx";
import EceOverview from "./pages/ECE-Department/ece-overview.jsx";
import ECE_Faculty from "./pages/ECE-Department/ece-faculty.jsx";
import EceLabs from "./pages/ECE-Department/ece-labs.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/faq"
          element={
            <>
              <Header />
              <FAQ />
              <Footer />
            </>
          }
        />

        <Route
          path="/anti-ragging"
          element={
            <>
              <Header />
              <AntiRagging />
              <Footer />
            </>
          }
        />

        <Route
          path="/anti-ragging-committee"
          element={
            <>
              <Header />
              <AntiRaggingCommittee />
              <Footer />
            </>
          }
        />

        <Route
          path="/about/academic-heads"
          element={
            <>
              <Header />
              <Academicheads />
              <Footer />
            </>
          }
        />

        <Route
          path="/courses"
          element={
            <>
              <Header />
              <Courses />
              <Footer />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <NewsDetails />
          }
        />

        <Route
          path="/about/principal"
          element={
            <>
              <Header />
              <Principal />
              <Footer />
            </>
          }
        />

        <Route
          path="/infrastructure"
          element={
            <>
              <Header />
              <Infrastructure />
              <Footer />
            </>
          }
        />

        <Route
          path="/vision-mission"
          element={
            <>
              <Header />
              <VisionMission />
              <Footer />
            </>
          }
        />

        <Route
          path="/convocation"
          element={
            <>
              <Header />
              <Convocation />
              <Footer />
            </>
          }
        />

        <Route
          path="/prospectus"
          element={
            <>
              <Header />
              <AcademicProspectusPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactUs />
              <Footer />
            </>
          }
        />

        <Route
          path="/academics/nirf"
          element={
            <>
              <Header />
              <NIRF />
              <Footer />
            </>
          }
        />

        <Route
          path="/helpdesk"
          element={
            <>
              <Header />
              <HelpDesk />
              <Footer />
            </>
          }
        />

        <Route
          path="/ecell"
          element={
            <>
              <Header />
              <ECell />
              <Footer />
            </>
          }
        />

        <Route
          path="/examinations"
          element={
            <>
              <Header />
              <Examinations />
              <Footer />
            </>
          }
        />

        <Route
          path="/sports-facility"
          element={
            <>
              <Header />
              <SportsFacility />
              <Footer />
            </>
          }
        />

        <Route
          path="/fit-india"
          element={
            <>
              <Header />
              <FitIndiaPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/programmes/pu-leet"
          element={
            <>
              <Header />
              <Leet />
              <Footer />
            </>
          }
        />

        <Route
          path="/programmes/phd"
          element={
            <>
              <Header />
              <Doctorate />
              <Footer />
            </>
          }
        />

        <Route
          path="/programmes/degree"
          element={
            <>
              <Header />
              <Degree />
              <Footer />
            </>
          }
        />

        <Route
          path="/notices/tenders"
          element={
            <>
              <Header />
              <Tenders />
              <Footer />
            </>
          }
        />

        <Route
          path="/about/history"
          element={
            <>
              <Header />
              <History />
              <Footer />
            </>
          }
        />

        <Route
          path="/student-chapters-clubs"
          element={<StudentChaptersandClubs />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <NoPage />
              <Footer />
            </>
          }
        />

        <Route path="/ece" element={
          <>
            <Header />
            <EceOverview />
            <Footer />
          </>
        } />

        <Route path="/ece/ece-faculty" element={
          <>
            <Header />
            <ECE_Faculty />
            <Footer />
          </>
        } />

        <Route path="/ece/ece-labs" element={
          <>
            <Header />
            <EceLabs />
            <Footer />
          </>
        } />

      </Routes>
    </HashRouter>
  );
}

export default App;
