import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Stethoscope, Award, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import doctorPortrait from '../assets/doctor-portrait.jpg';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();

  const specializations = [
    "Kidney Stone Treatment",
    "Prostate Disorders", 
    "Male Infertility",
    "Laparoscopic Surgery"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Dr. Datta Sonawane</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A highly skilled urologist with over 15 years of experience, dedicated to providing 
            exceptional patient care with advanced medical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <div 
            ref={imageRef}
            className={`transition-all duration-1000 delay-300 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <img 
                src={doctorPortrait} 
                alt="Dr. Datta Sonawane - Urologist" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Doctor Info */}
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 delay-500 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Datta Sonawane</h3>
                    <p className="text-primary font-semibold">MCh Urology | MS General Surgery</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    With over 15 years of dedicated experience in urology, Dr. Sonawane has successfully 
                    treated thousands of patients with various urological conditions. He specializes 
                    in minimally invasive procedures and advanced laparoscopic surgeries.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">15+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">5000+ Successful Surgeries</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Specializations</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {specializations.map((spec, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-1 justify-start">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link to="/doctor">
                      <Button className="w-full group">
                        Learn More About Dr. Sonawane
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;