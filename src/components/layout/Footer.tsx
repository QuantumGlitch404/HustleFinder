const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Hustle Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
