import { Zap, Code, FlaskConical } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: Zap,
      title: "AI SaaS Applications",
      description: "Tools that make AI accessible to creators and businesses, enabling rapid development and deployment of intelligent solutions.",
      gradient: "from-purple-600 to-purple-800"
    },
    {
      icon: Code,
      title: "Developer Infrastructure",
      description: "Scalable backend and cloud-native systems designed for modern development workflows and enterprise requirements.",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: FlaskConical,
      title: "Research & Experimentation",
      description: "Applying frontier AI models to real-world problems, pushing the boundaries of what's possible with artificial intelligence.",
      gradient: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Our <span className="text-gradient">Focus Areas</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto fade-in fade-in-delay-1">
            We build across the full spectrum of AI-driven technology, from user-facing applications to foundational infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className={`card-hover p-8 rounded-2xl group fade-in fade-in-delay-${index + 2}`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110`}>
                <product.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-gradient transition-colors">
                {product.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;