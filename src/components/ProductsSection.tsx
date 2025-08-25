import { Bot, Server, Lightbulb } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: <Bot className="h-12 w-12 text-orange-500" />,
      title: "AI SaaS Applications",
      description: "Tools that make AI accessible to creators and businesses, enabling automation and intelligent decision-making.",
      color: "orange"
    },
    {
      icon: <Server className="h-12 w-12 text-blue-500" />,
      title: "Developer Infrastructure", 
      description: "Scalable backend and cloud-native systems designed for modern applications and AI workloads.",
      color: "blue"
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-yellow-500" />,
      title: "Research & Experimentation",
      description: "Applying frontier AI models to real-world problems and pushing the boundaries of what's possible.",
      color: "yellow"
    }
  ];

  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Our Focus Areas
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto fade-in fade-in-delay-1">
            We specialize in building AI-driven solutions across three key areas of innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`card-hover fade-in fade-in-delay-${index + 2} group cursor-pointer`}
            >
              <div className="mb-6">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
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
