import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Clock, 
  Shield, 
  CheckCircle,
  Calendar,
  Stethoscope,
  Scissors,
  Heart,
  Activity,
  Microscope,
  Zap,
  Baby
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const treatmentData = {
  "kidney-stone-treatment": {
    title: "Kidney Stone Treatment",
    icon: Stethoscope,
    description: "Advanced treatment for kidney stones using minimally invasive techniques including lithotripsy and laser surgery.",
    overview: "Kidney stones are hard deposits made of minerals and salts that form inside your kidneys. Our clinic offers comprehensive treatment options using the latest technology and minimally invasive techniques to ensure optimal patient outcomes.",
    procedures: [
      {
        name: "ESWL (Shock Wave Lithotripsy)",
        description: "Non-invasive procedure using sound waves to break up kidney stones",
        duration: "30-60 minutes",
        recovery: "1-2 days"
      },
      {
        name: "Laser Lithotripsy", 
        description: "Minimally invasive laser procedure to fragment stones",
        duration: "60-90 minutes",
        recovery: "2-3 days"
      },
      {
        name: "Percutaneous Nephrolithotomy",
        description: "Surgical removal of large kidney stones through small incision",
        duration: "2-3 hours",
        recovery: "3-5 days"
      }
    ],
    benefits: [
      "Minimally invasive techniques",
      "Faster recovery times",
      "High success rates",
      "Reduced post-operative pain",
      "State-of-the-art equipment"
    ],
    preparation: [
      "Fasting 8-12 hours before procedure",
      "Blood tests and imaging studies",
      "Medication review with doctor",
      "Arrange transportation home"
    ]
  },
  "prostate-disorders": {
    title: "Prostate Disorders",
    icon: Shield,
    description: "Comprehensive treatment for prostate-related conditions including BPH and prostate cancer screening.",
    overview: "Prostate disorders are common in men over 50. We provide comprehensive diagnosis and treatment for conditions including benign prostatic hyperplasia (BPH), prostatitis, and prostate cancer.",
    procedures: [
      {
        name: "Prostate Biopsy",
        description: "Diagnostic procedure to detect prostate cancer",
        duration: "20-30 minutes",
        recovery: "Same day"
      },
      {
        name: "TURP Surgery",
        description: "Transurethral resection of the prostate for BPH",
        duration: "1-2 hours",
        recovery: "2-3 days"
      },
      {
        name: "Laser Prostatectomy",
        description: "Modern laser treatment for enlarged prostate",
        duration: "60-90 minutes",
        recovery: "1-2 days"
      }
    ],
    benefits: [
      "Early detection of prostate cancer",
      "Improved urinary flow",
      "Reduced symptoms",
      "Minimally invasive options",
      "Personalized treatment plans"
    ],
    preparation: [
      "Stop blood thinning medications",
      "Complete pre-operative testing",
      "Discuss anesthesia options",
      "Plan for post-operative care"
    ]
  },
  "urinary-tract-infections": {
    title: "Urinary Tract Infections",
    icon: Activity,
    description: "Diagnosis and treatment of recurrent UTIs and complicated urinary tract infections.",
    overview: "Urinary tract infections can be simple or complex. We specialize in treating recurrent and complicated UTIs using advanced diagnostic techniques and targeted therapies.",
    procedures: [
      {
        name: "Urine Culture",
        description: "Laboratory test to identify specific bacteria causing infection",
        duration: "5 minutes",
        recovery: "Immediate"
      },
      {
        name: "Cystoscopy",
        description: "Visual examination of the bladder using a thin camera",
        duration: "15-30 minutes", 
        recovery: "Same day"
      },
      {
        name: "Antibiotic Therapy",
        description: "Targeted antibiotic treatment based on culture results",
        duration: "7-14 days",
        recovery: "Varies"
      }
    ],
    benefits: [
      "Accurate bacterial identification",
      "Targeted antibiotic therapy",
      "Prevention of recurrence",
      "Comprehensive evaluation",
      "Long-term management plans"
    ],
    preparation: [
      "Avoid antibiotics before testing",
      "Collect clean catch urine sample",
      "Complete medical history",
      "List current medications"
    ]
  },
  "male-infertility": {
    title: "Male Infertility",
    icon: Heart,
    description: "Evaluation and treatment of male fertility issues with advanced diagnostic techniques.",
    overview: "Male infertility affects approximately 40% of couples struggling to conceive. Our comprehensive evaluation and treatment programs help identify and address underlying causes.",
    procedures: [
      {
        name: "Semen Analysis",
        description: "Comprehensive evaluation of sperm count, motility, and morphology",
        duration: "30 minutes",
        recovery: "Immediate"
      },
      {
        name: "Varicocele Repair",
        description: "Surgical correction of enlarged veins in the scrotum",
        duration: "2-3 hours",
        recovery: "1-2 weeks"
      },
      {
        name: "Hormone Therapy",
        description: "Treatment to optimize hormone levels for fertility",
        duration: "Ongoing",
        recovery: "Varies"
      }
    ],
    benefits: [
      "Detailed fertility assessment",
      "Improved sperm parameters",
      "Higher conception rates",
      "Minimally invasive procedures",
      "Comprehensive counseling"
    ],
    preparation: [
      "Abstain from ejaculation 2-5 days",
      "Avoid alcohol and smoking",
      "Complete hormone testing",
      "Genetic counseling if needed"
    ]
  },
  "laparoscopic-surgery": {
    title: "Laparoscopic Surgery",
    icon: Scissors,
    description: "Minimally invasive surgical procedures for various urological conditions.",
    overview: "Laparoscopic surgery offers patients the benefits of smaller incisions, reduced pain, shorter hospital stays, and faster recovery compared to traditional open surgery.",
    procedures: [
      {
        name: "Laparoscopic Nephrectomy",
        description: "Minimally invasive kidney removal surgery",
        duration: "3-4 hours",
        recovery: "3-5 days"
      },
      {
        name: "Pyeloplasty",
        description: "Surgical repair of ureteropelvic junction obstruction",
        duration: "2-3 hours",
        recovery: "2-4 days"
      },
      {
        name: "Cystectomy",
        description: "Minimally invasive bladder removal surgery",
        duration: "4-6 hours",
        recovery: "5-7 days"
      }
    ],
    benefits: [
      "Smaller incisions",
      "Reduced pain and scarring",
      "Shorter hospital stay",
      "Faster recovery",
      "Lower infection risk"
    ],
    preparation: [
      "Complete pre-operative testing",
      "Stop eating 8-12 hours before",
      "Bowel preparation if required",
      "Arrange post-operative care"
    ]
  },
  "endourology": {
    title: "Endourology",
    icon: Microscope,
    description: "Advanced endoscopic procedures for treating urological conditions.",
    overview: "Endourology involves minimally invasive procedures performed through natural body openings or small incisions, reducing trauma and recovery time.",
    procedures: [
      {
        name: "Ureteroscopy",
        description: "Examination and treatment of ureter and kidney using flexible scope",
        duration: "60-90 minutes",
        recovery: "Same day"
      },
      {
        name: "Cystoscopy",
        description: "Visual examination of the bladder using a thin camera",
        duration: "15-30 minutes",
        recovery: "Same day"
      },
      {
        name: "Nephroscopy",
        description: "Direct visualization of the kidney interior",
        duration: "45-60 minutes",
        recovery: "1-2 days"
      }
    ],
    benefits: [
      "Minimally invasive approach",
      "High precision treatment",
      "Reduced complications",
      "Outpatient procedures",
      "Quick recovery"
    ],
    preparation: [
      "Complete medical clearance",
      "Avoid blood thinners",
      "Arrange transportation",
      "Follow pre-procedure instructions"
    ]
  },
  "reconstructive-urology": {
    title: "Reconstructive Urology",
    icon: Zap,
    description: "Surgical reconstruction of the urinary tract and male reproductive system.",
    overview: "Reconstructive urology focuses on restoring normal function to the genitourinary system through advanced surgical techniques and innovative approaches.",
    procedures: [
      {
        name: "Urethroplasty",
        description: "Surgical repair of urethral strictures and injuries",
        duration: "2-4 hours",
        recovery: "2-4 weeks"
      },
      {
        name: "Bladder Reconstruction",
        description: "Restoration of bladder function and capacity",
        duration: "4-6 hours",
        recovery: "1-2 weeks"
      },
      {
        name: "Penile Surgery",
        description: "Correction of penile deformities and dysfunction",
        duration: "1-3 hours",
        recovery: "2-6 weeks"
      }
    ],
    benefits: [
      "Restored normal function",
      "Improved quality of life",
      "Advanced surgical techniques",
      "Personalized treatment plans",
      "Comprehensive follow-up"
    ],
    preparation: [
      "Extensive pre-operative planning",
      "Counseling and education",
      "Optimize medical conditions",
      "Arrange extended recovery support"
    ]
  },
  "pediatric-urology": {
    title: "Pediatric Urology",
    icon: Baby,
    description: "Specialized care for urological conditions in children and adolescents.",
    overview: "Pediatric urology requires specialized expertise in treating congenital and acquired urological conditions in infants, children, and adolescents.",
    procedures: [
      {
        name: "Hypospadias Repair",
        description: "Surgical correction of abnormal urethral opening",
        duration: "1-3 hours",
        recovery: "1-2 weeks"
      },
      {
        name: "Undescended Testis",
        description: "Surgical correction of cryptorchidism",
        duration: "30-60 minutes",
        recovery: "3-7 days"
      },
      {
        name: "Vesicoureteral Reflux",
        description: "Treatment of abnormal urine backflow",
        duration: "1-2 hours",
        recovery: "1-3 days"
      }
    ],
    benefits: [
      "Specialized pediatric expertise",
      "Child-friendly environment",
      "Family-centered care",
      "Minimally invasive techniques",
      "Long-term follow-up"
    ],
    preparation: [
      "Age-appropriate counseling",
      "Family education and support",
      "Specialized anesthesia planning",
      "Post-operative care coordination"
    ]
  }
};

const TreatmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !treatmentData[id as keyof typeof treatmentData]) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Treatment Not Found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const treatment = treatmentData[id as keyof typeof treatmentData];
  const IconComponent = treatment.icon;

  return (
    <>
      <Helmet>
        <title>{treatment.title} - Dr. Datta Sonawane | Urology Specialist</title>
        <meta name="description" content={treatment.description} />
        <meta name="keywords" content={`${treatment.title.toLowerCase()}, urology, Dr. Datta Sonawane, treatment`} />
        <meta property="og:title" content={`${treatment.title} - Dr. Datta Sonawane`} />
        <meta property="og:description" content={treatment.description} />
        <meta property="og:type" content="article" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-6 animate-fade-in">
              <Link to="/#treatments" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Treatments
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 mb-6 animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {treatment.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {treatment.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Treatment Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {treatment.overview}
                    </p>
                  </CardContent>
                </Card>

                {/* Procedures */}
                <Card className="animate-fade-in" style={{animationDelay: '200ms'}}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      Available Procedures
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {treatment.procedures.map((procedure, index) => (
                        <div key={index} className="border-l-4 border-primary/20 pl-4">
                          <h4 className="font-semibold text-foreground mb-2">{procedure.name}</h4>
                          <p className="text-muted-foreground mb-3">{procedure.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">Duration: {procedure.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">Recovery: {procedure.recovery}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Preparation */}
                <Card className="animate-fade-in" style={{animationDelay: '400ms'}}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Pre-Procedure Preparation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {treatment.preparation.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Benefits */}
                <Card className="animate-fade-in" style={{animationDelay: '300ms'}}>
                  <CardHeader>
                    <CardTitle className="text-lg">Treatment Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {treatment.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="w-full justify-start">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in" style={{animationDelay: '500ms'}}>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Ready to Schedule?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Book your consultation with Dr. Datta Sonawane today.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/#appointment">Book Appointment</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="animate-fade-in" style={{animationDelay: '600ms'}}>
                  <CardHeader>
                    <CardTitle className="text-lg">Emergency Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      For urgent medical concerns:
                    </p>
                    <p className="font-semibold text-foreground">+91 98765 43210</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TreatmentDetail;