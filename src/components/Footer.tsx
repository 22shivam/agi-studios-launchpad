const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-surface-elevated border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-text-primary">AGI Studios</h3>
          </div>
          <p className="text-text-secondary mb-6">
            Building the future of AI-driven technology
          </p>
          <p className="text-sm text-text-tertiary">
            © {new Date().getFullYear()} AGI Labs LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
