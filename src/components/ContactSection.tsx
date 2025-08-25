import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:shivam@agistudios.co';
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Get in Touch
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto fade-in fade-in-delay-1">
            Ready to transform your business with AI? Let's discuss how we can help you innovate and scale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="card-hover group fade-in fade-in-delay-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">Email</h3>
                <p className="text-text-secondary">Get in touch directly</p>
              </div>
            </div>
            <button 
              onClick={handleEmailClick}
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
            >
              shivam@agistudios.co
            </button>
          </div>
          
          <div className="card-hover group fade-in fade-in-delay-3">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">Location</h3>
                <p className="text-text-secondary">Based in Indiana</p>
              </div>
            </div>
            <p className="text-text-secondary">
              Bloomington, Indiana
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={handleEmailClick}
            className="btn-primary fade-in fade-in-delay-4"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
