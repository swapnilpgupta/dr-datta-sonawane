import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Stethoscope, 
  Scissors, 
  Heart, 
  Shield, 
  Microscope, 
  Activity,
  Zap,
  Baby
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Kidney Stone Treatment",
      description: "Advanced treatment for kidney stones using minimally invasive techniques including lithotripsy and laser surgery.",
      features: ["ESWL (Shock Wave Lithotripsy)", "Laser Lithotripsy", "Percutaneous Nephrolithotomy"]
    },
    {
      icon: Shield,
      title: "Prostate Disorders",
      description: "Comprehensive treatment for prostate-related conditions including BPH and prostate cancer screening.",
      features: ["Prostate Biopsy", "TURP Surgery", "Laser Prostatectomy"]
    },
    {
      icon: Activity,
      title: "Urinary Tract Infections",
      description: "Diagnosis and treatment of recurrent UTIs and complicated urinary tract infections.",
      features: ["Urine Culture", "Cystoscopy", "Antibiotic Therapy"]
    },
    {
      icon: Heart,
      title: "Male Infertility",
      description: "Evaluation and treatment of male fertility issues with advanced diagnostic techniques.",
      features: ["Semen Analysis", "Varicocele Repair", "Hormone Therapy"]
    },
    {
      icon: Scissors,
      title: "Laparoscopic Surgery",
      description: "Minimally invasive surgical procedures for various urological conditions.",
      features: ["Laparoscopic Nephrectomy", "Pyeloplasty", "Cystectomy"]
    },
    {
      icon: Microscope,
      title: "Endourology",
      description: "Advanced endoscopic procedures for treating urological conditions.",
      features: ["Ureteroscopy", "Cystoscopy", "Nephroscopy"]
    },
    {
      icon: Zap,
      title: "Reconstructive Urology",
      description: "Surgical reconstruction of the urinary tract and male reproductive system.",
      features: ["Urethroplasty", "Bladder Reconstruction", "Penile Surgery"]
    },
    {
      icon: Baby,
      title: "Pediatric Urology",
      description: "Specialized care for urological conditions in children and adolescents.",
      features: ["Hypospadias Repair", "Undescended Testis", "Vesicoureteral Reflux"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive urological care with state-of-the-art technology and personalized treatment approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Procedures:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
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

export default Services;