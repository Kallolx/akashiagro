import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import CattleDetails from './pages/CattleDetails';
import Footer from './components/Footer';
import Blog from './components/Blog';
import CattleListing from './pages/CattleListing';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Testimonials />
      <Team />
      <Blog />
    </>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cattle" element={<CattleListing />} />
          <Route path="/cattle/:id" element={<CattleDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
} 