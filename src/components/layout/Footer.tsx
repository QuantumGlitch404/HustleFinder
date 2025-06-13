
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-6 sm:py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Made By QuantumGlitch404
          </p>
          <p className="text-xs text-muted-foreground/80 mt-1">
            © {year} Hustle Finder.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
