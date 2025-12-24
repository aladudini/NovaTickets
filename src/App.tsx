import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlightResults from './components/FlightResults';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params: any) => {
    setSearchParams(params);
    setCurrentPage('results');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onSearch={handleSearch} />;
      case 'results':
        return <FlightResults searchParams={searchParams} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onSearch={handleSearch} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1128] text-[#E6F1FF]">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
