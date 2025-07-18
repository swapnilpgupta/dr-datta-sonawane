import { Button } from './ui/button';
import { Calendar, Award, Users, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();
  
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-12 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={heroRef}
            className={`space-y-6 transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Expert Urological Care by{' '}
                <span className="text-primary">Dr. Datta Sonawane</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                MBBS, MS (General Surgery), MCh (Urology) - Providing comprehensive urological 
                treatments with advanced medical expertise and compassionate care.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={scrollToAppointment}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                size="lg"
                variant="outline"
                asChild
              >
                <Link to="/blog">Learn More</Link>
              </Button>
            </div>

            <div 
              ref={statsRef}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-300 ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">15+ Years Experience</h3>
                <p className="text-sm text-muted-foreground">Expert in urology treatments</p>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">5000+ Patients</h3>
                <p className="text-sm text-muted-foreground">Successfully treated</p>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Emergency care available</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Dr. Datta Sonawane</h3>
                      <p className="text-primary font-medium">MCh Urology Specialist</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">🎓 MBBS, MS (General Surgery)</p>
                    <p className="text-sm text-muted-foreground">🏥 MCh (Urology)</p>
                    <p className="text-sm text-muted-foreground">📍 Available for consultation</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Specialized in kidney stones, prostate disorders, urinary tract infections, 
                      and advanced laparoscopic procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform translate-x-2 translate-y-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;