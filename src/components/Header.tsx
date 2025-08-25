import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:shivam@agistudios.co';
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-white'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-foreground hover:text-text-secondary transition-colors">
              AGI Studios
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
            <button onClick={() => scrollToSection('clients')} className="nav-link">Clients</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>
          
          <button 
            onClick={handleEmailClick}
            className="btn-header"
          >
            Book a Call
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;