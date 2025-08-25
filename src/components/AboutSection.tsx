const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-surface-elevated">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            About AGI Studios
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-text-secondary leading-relaxed">
            <p className="fade-in fade-in-delay-1">
              <strong className="text-text-primary">AGI Labs LLC</strong> (Indiana, USA) is a technology company focused on AI-driven software, developer tools, and intelligent infrastructure. We design and build cutting-edge applications that leverage machine learning, distributed systems, and cloud platforms.
            </p>
            <p className="fade-in fade-in-delay-2">
              Our focus is on creating practical AI tools for developers and businesses, making advanced artificial intelligence accessible and actionable for real-world applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
