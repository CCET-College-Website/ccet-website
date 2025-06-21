import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Loader from './components/Loader/Loader.jsx';
import NoPage from './pages/Nopage/NoPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Showing loader for ~4.5s
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4500); // animation timing

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;