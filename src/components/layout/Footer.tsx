
import Link from 'next/link';
// TextSizeAdjuster is removed from here

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-4 sm:py-6 mt-auto border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Hustle Finder. All rights reserved.
            <span className="hidden sm:inline"> | </span>
            <br className="sm:hidden"/>
            Made By QuantumGlitch404.
          </p>
          {/* Placeholder for any future footer controls if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
