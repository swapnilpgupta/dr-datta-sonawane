import { Heart, MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from '../assets/logo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logoImage} alt="Dr. Datta Sonawane" className="h-8 w-auto filter brightness-0 invert" />
              <div>
                <h3 className="text-lg font-bold">Dr. Datta Sonawane</h3>
                <p className="text-sm text-background/80">MBBS, MS, MCh (Urology)</p>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Expert urological care with over 15 years of experience in treating 
              various urological conditions using advanced medical techniques.
            </p>
            <div className="flex items-center space-x-2 text-sm text-background/80">
              <Heart className="h-4 w-4" />
              <span>Compassionate Care Since 2008</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm text-background/80 hover:text-background transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-background/80 hover:text-background transition-colors text-left"
              >
                About Dr. Sonawane
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm text-background/80 hover:text-background transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('appointment')}
                className="text-sm text-background/80 hover:text-background transition-colors text-left"
              >
                Book Appointment
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-background/80 hover:text-background transition-colors text-left"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-background/80 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-background/80">
                  <p>123 Medical Center Drive</p>
                  <p>Healthcare Complex, 2nd Floor</p>
                  <p>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-background/80 flex-shrink-0" />
                <span className="text-sm text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-background/80 flex-shrink-0" />
                <span className="text-sm text-background/80">info@drdattasonawane.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Working Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-background/80 flex-shrink-0" />
                <div className="text-sm text-background/80">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 12:00 AM - 1:00 PM</p>
                  <p>Sunday: Emergency Only</p>
                </div>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('appointment')}
              variant="outline"
              className="w-full bg-transparent border-background/20 text-background hover:bg-background hover:text-foreground"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-primary/10 rounded-lg p-4 mt-8">
          <h3 className="text-lg font-bold mb-3 text-center">Our Location</h3>
          <div className="aspect-[2/1] bg-muted rounded-lg overflow-hidden mb-3 max-w-md mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9750556078894!2d72.82773051490208!3d19.01721608711819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7b88c17da7%3A0xf8a6c0ea0c2fc3d!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697890000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Datta Sonawane Clinic Location"
            ></iframe>
          </div>
          <p className="text-xs text-background/80 text-center">
            123 Medical Center Drive, Healthcare Complex, 2nd Floor, Mumbai, Maharashtra 400001
          </p>
        </div>

        {/* Schedule Consultation CTA */}
        <div className="bg-primary/10 rounded-lg p-6 mt-8 text-center">
          <h3 className="text-xl font-bold mb-2">Schedule Your Consultation Today</h3>
          <p className="text-background/80 mb-4">
            Take the first step towards better urological health. Book your consultation with Dr. Datta Sonawane.
          </p>
          <Button 
            onClick={() => scrollToSection('appointment')}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Consultation
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/80">
              <p>© 2024 Dr. Datta Sonawane. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-background/80">
              <button className="hover:text-background transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-background transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-background transition-colors">
                Medical Disclaimer
              </button>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-background/60">
              This website is for informational purposes only and does not constitute medical advice. 
              Please consult with a healthcare professional for medical concerns.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
