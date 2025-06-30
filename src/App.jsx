import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import NoPage from './pages/Nopage/NoPage.jsx';
import FAQ from './pages/FAQ/faq';
import AntiRagging from "./pages/Students-Section/Student-Welfare/Anti-Ragging/AntiRagging.jsx";
import AntiRaggingCommittee from './pages/Students-Section/Student-Welfare/Anti-Ragging-Committee/AntiRaggingCommittee';


function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NoPage/>} />
        <Route path="/anti-ragging" element={<AntiRagging />} />
        <Route path="/anti-ragging-committee" element={<AntiRaggingCommittee />} />

        {/* Add more routes here */}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
