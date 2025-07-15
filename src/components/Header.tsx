import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="Dr. Datta Sonawane" className="h-8 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Dr. Datta Sonawane</h1>
              <p className="text-xs text-muted-foreground">MBBS, MS, MCh (Urology)</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('treatments')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollToSection('appointment')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Appointment
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <Button 
              onClick={() => scrollToSection('appointment')}
              className="bg-primary hover:bg-primary/90"
            >
              Book Appointment
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col py-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('treatments')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Treatments
              </button>
              <button
                onClick={() => scrollToSection('appointment')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Appointment
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <div className="px-4 py-2">
                <Button 
                  onClick={() => scrollToSection('appointment')}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;