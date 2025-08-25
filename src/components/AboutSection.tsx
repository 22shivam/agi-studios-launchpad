const AboutSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            About <span className="text-gradient">AGI Labs</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed fade-in fade-in-delay-1">
              AGI Labs LLC (Indiana, USA) is a technology company focused on AI-driven software, 
              developer tools, and intelligent infrastructure.
            </p>
            
            <p className="text-lg text-text-secondary leading-relaxed fade-in fade-in-delay-2">
              We design and build cutting-edge applications that leverage machine learning, 
              distributed systems, and cloud platforms to solve real-world problems.
            </p>
            
            <p className="text-lg text-text-secondary leading-relaxed fade-in fade-in-delay-3">
              Our focus is on creating practical AI tools that make advanced technology 
              accessible to developers and businesses of all sizes.
            </p>
          </div>
          
          <div className="relative">
            <div className="card-hover p-8 rounded-2xl fade-in fade-in-delay-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AI</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation at Scale</h3>
                <p className="text-text-secondary">
                  Bridging the gap between frontier AI research and practical business applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;