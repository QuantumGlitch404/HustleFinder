
import Link from 'next/link';
import { Github, Linkedin, FileText, Info, MessageSquare, Users, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h5 className="font-semibold text-lg mb-3 text-primary">Hustle Finder</h5>
            <p className="text-sm text-muted-foreground">
              Your starting point for discovering side hustles and unlocking new income opportunities.
            </p>
             <p className="text-xs mt-4 text-muted-foreground">Made By QuantumGlitch404</p>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-3 text-foreground">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start"><Info className="w-4 h-4 mr-2" />About Us</Link></li>
              <li><Link href="/hustles" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start"><FileText className="w-4 h-4 mr-2" />All Hustles</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start"><MessageSquare className="w-4 h-4 mr-2" />Contact (Coming Soon)</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start"><Users className="w-4 h-4 mr-2" />Contribute Hustle (Coming Soon)</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-3 text-foreground">Legal & Social</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start"><ShieldCheck className="w-4 h-4 mr-2" />Privacy Policy (Coming Soon)</Link></li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/QuantumGlitch404/HustleFinder" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center justify-center md:justify-start">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {year} Hustle Finder. All content is for informational purposes. Always do your own research.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
