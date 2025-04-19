import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Journal from './components/sections/Journal';
import JournalDetail from './pages/Journal/JournalDetail';
import JournalList from './pages/Journal/JournalList';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "ARETHI | South Asian Illustrations";
  }, []);
  
  return (
    <Router>
      <div className="font-sans bg-cream text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Portfolio />
              <About />
              <Journal />
              <Contact />
            </>
          } />
          <Route path="/journal/:id" element={<JournalDetail />} />
          <Route path="/journal/all" element={<JournalList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;