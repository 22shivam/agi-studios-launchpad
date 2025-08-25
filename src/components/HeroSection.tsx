import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:shivam@agistudios.co';
  };

  const scrollToProducts = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-mono">
              AGI STUDIOS v2.0
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight fade-in">
              <div className="text-orange">AUTOMATE.</div>
              <div className="text-blue">OPTIMIZE.</div>
              <div className="text-yellow">INNOVATE.</div>
            </h1>
          </div>
          
          <p className="text-xl text-text-secondary max-w-lg leading-relaxed fade-in fade-in-delay-1">
            AGI Studios helps businesses harness the power of AI to automate workflows, optimize operations, and drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 fade-in fade-in-delay-2">
            <button 
              onClick={scrollToProducts}
              className="btn-primary group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={handleEmailClick}
              className="btn-secondary"
            >
              Get in Touch
            </button>
          </div>
        </div>
        
        {/* Mockup placeholder - inspired by PrimeLoop design */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="bg-white border-2 border-border rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-auto text-sm text-text-secondary font-mono">agistudios.co</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  </div>
                  <div className="h-4 bg-surface-hover rounded flex-1"></div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  </div>
                  <div className="h-4 bg-surface-hover rounded flex-1"></div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  </div>
                  <div className="h-4 bg-surface-hover rounded flex-1"></div>
                </div>
                
                <div className="mt-8 p-4 bg-surface rounded-lg border-2 border-dashed border-border">
                  <div className="text-center text-text-secondary">
                    Your perfect AI solution awaits...
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              NEW!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;