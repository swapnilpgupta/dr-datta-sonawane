import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Stethoscope, GraduationCap, Hospital, Award } from 'lucide-react';

const About = () => {
  const qualifications = [
    "MBBS - Bachelor of Medicine and Bachelor of Surgery",
    "MS (General Surgery) - Master of Surgery",
    "MCh (Urology) - Master of Chirurgiae in Urology"
  ];

  const specializations = [
    "Kidney Stone Treatment",
    "Prostate Disorders",
    "Urinary Tract Infections",
    "Male Infertility",
    "Laparoscopic Surgery",
    "Endourology",
    "Reconstructive Urology",
    "Pediatric Urology"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Dr. Datta Sonawane</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A highly skilled urologist dedicated to providing exceptional patient care with 
            advanced medical expertise and compassionate treatment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Educational Background</h3>
                </div>
                <div className="space-y-3">
                  {qualifications.map((qual, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{qual}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Experience & Expertise</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  With over 15 years of experience in urology, Dr. Datta Sonawane has successfully 
                  treated thousands of patients with various urological conditions. He specializes 
                  in minimally invasive procedures and has extensive experience in laparoscopic 
                  and endoscopic surgeries.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Stethoscope className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Areas of Specialization</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {specializations.map((spec, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Hospital className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Treatment Philosophy</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Sonawane believes in providing personalized care to each patient, combining 
                  the latest medical technology with compassionate treatment. He focuses on 
                  patient education and works closely with individuals to develop the most 
                  effective treatment plans.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-border">
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <p className="text-lg font-semibold text-foreground">
                    "Your health and comfort are my top priorities"
                  </p>
                  <p className="text-sm text-muted-foreground">- Dr. Datta Sonawane</p>
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