const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient">AGI Studios</h3>
            <p className="text-text-secondary mt-2">Building the future with AI</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-text-tertiary">
              © {new Date().getFullYear()} AGI Labs LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;