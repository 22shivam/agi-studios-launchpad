import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-text-secondary fade-in fade-in-delay-1">
            Ready to discuss your AI project or explore partnership opportunities?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-hover p-8 rounded-2xl group fade-in fade-in-delay-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
            </div>
            <a 
              href="mailto:shivam@agistudios.co"
              className="text-lg text-text-secondary hover:text-gradient transition-colors"
            >
              shivam@agistudios.co
            </a>
          </div>
          
          <div className="card-hover p-8 rounded-2xl group fade-in fade-in-delay-3">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <p className="text-lg text-text-secondary">
              Bloomington, Indiana
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="mailto:shivam@agistudios.co"
            className="btn-hero fade-in fade-in-delay-4"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;