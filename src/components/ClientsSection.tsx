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
    <section className="py-24 px-6 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 fade-in">
            Trusted by <span className="text-gradient">Leading Teams</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto fade-in fade-in-delay-1">
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
              className={`block card-hover p-8 rounded-2xl group fade-in fade-in-delay-${index + 2} transition-all duration-300`}
            >
              <div className="flex items-center gap-6 mb-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-elevated flex-shrink-0">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-gradient transition-colors">
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