import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  Stethoscope, 
  Scissors, 
  Heart, 
  Shield, 
  Microscope, 
  Activity,
  Zap,
  Baby,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Treatments = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();
  
  const treatments = [
    {
      id: "kidney-stones-prostate-disorders",
      icon: Stethoscope,
      title: "Kidney Stones & Prostate Disorders",
      description: "Comprehensive treatment for kidney stones and prostate-related conditions using advanced minimally invasive techniques.",
      features: ["ESWL (Shock Wave Lithotripsy)", "Laser Lithotripsy", "TURP Surgery", "Laser Prostatectomy"]
    },
    {
      id: "male-infertility-sexual-health",
      icon: Heart,
      title: "Male Infertility & Sexual Health",
      description: "Complete evaluation and treatment of male fertility issues and sexual health disorders with cutting-edge diagnostic techniques.",
      features: ["Semen Analysis", "Varicocele Repair", "Hormone Therapy", "Erectile Dysfunction Treatment"]
    },
    {
      id: "laparoscopic-minimally-invasive",
      icon: Scissors,
      title: "Laparoscopic & Minimally Invasive Urological Surgeries",
      description: "State-of-the-art minimally invasive surgical procedures for various urological conditions with faster recovery times.",
      features: ["Laparoscopic Nephrectomy", "Robotic Surgery", "Endoscopic Procedures", "Pyeloplasty"]
    },
    {
      id: "uro-oncology",
      icon: Shield,
      title: "Uro-Oncology (Kidney, Bladder & Prostate Cancers)",
      description: "Specialized cancer care for urological malignancies with comprehensive treatment plans and advanced surgical techniques.",
      features: ["Radical Nephrectomy", "Cystectomy", "Prostatectomy", "Immunotherapy"]
    },
    {
      id: "reconstructive-urology",
      icon: Zap,
      title: "Reconstructive Urology (Stricture, Fistula, etc.)",
      description: "Expert surgical reconstruction of the urinary tract for complex conditions including strictures and fistulas.",
      features: ["Urethroplasty", "Bladder Reconstruction", "Fistula Repair", "Urethral Stricture Treatment"]
    },
    {
      id: "general-urological-disorders",
      icon: Activity,
      title: "General Urological Disorders",
      description: "Comprehensive care for common urological conditions with personalized treatment approaches and follow-up care.",
      features: ["UTI Treatment", "Bladder Dysfunction", "Incontinence Management", "General Consultation"]
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Treatments</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive urological care with state-of-the-art technology and personalized treatment approaches.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {treatments.map((treatment, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: cardsVisible ? 1 : 0,
                transition: `all 0.6s ease-out ${index * 100}ms`
              }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 hover-scale">
                  <treatment.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{treatment.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {treatment.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Procedures:</h4>
                  <ul className="space-y-1">
                    {treatment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link to={`/treatment/${treatment.id}`} className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Advanced Medical Technology
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our clinic is equipped with the latest medical technology and equipment to ensure 
                accurate diagnosis and effective treatment. We stay updated with the latest 
                advancements in urological care to provide you with the best possible outcomes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Treatments;