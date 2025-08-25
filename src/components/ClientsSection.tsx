import mediaTeamLogo from "@/assets/mediateam-logo.png";

const ClientsSection = () => {
  const clients = [
    {
      name: "MediaTeam",
      logo: mediaTeamLogo,
      url: "https://mediateam.ai",
      description: "Building software to seamlessly connect brands, agencies, and creators"
    }
  ];

  return (
    <section id="clients" className="py-24 px-6 bg-surface-elevated">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Trusted by Leading Teams
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto fade-in fade-in-delay-1">
            We partner with innovative companies to build the future of AI-driven technology.
          </p>
        </div>
        
        <div className="grid gap-8 max-w-2xl mx-auto">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block card-hover group fade-in fade-in-delay-${index + 2} transition-all duration-300`}
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white flex-shrink-0 border border-border">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors mb-2">
                    {client.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;