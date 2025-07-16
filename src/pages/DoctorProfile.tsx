import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  ArrowLeft, 
  GraduationCap, 
  Award, 
  Hospital, 
  Stethoscope, 
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import doctorPortrait from '../assets/doctor-portrait.jpg';

const DoctorProfile = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [educationRef, educationVisible] = useScrollAnimation();
  const [experienceRef, experienceVisible] = useScrollAnimation();
  const [achievementsRef, achievementsVisible] = useScrollAnimation();

  const education = [
    {
      degree: "MCh (Urology)",
      institution: "King Edward Memorial Hospital, Mumbai",
      year: "2008-2011",
      description: "Master of Chirurgiae in Urology with distinction"
    },
    {
      degree: "MS (General Surgery)",
      institution: "Grant Medical College, Mumbai",
      year: "2005-2008",
      description: "Master of Surgery with first class honors"
    },
    {
      degree: "MBBS",
      institution: "B.J. Medical College, Pune",
      year: "1999-2004",
      description: "Bachelor of Medicine and Bachelor of Surgery"
    }
  ];

  const experience = [
    {
      position: "Senior Consultant Urologist",
      hospital: "Apollo Hospitals, Mumbai",
      duration: "2015 - Present",
      responsibilities: [
        "Leading the Department of Urology",
        "Performing complex laparoscopic and endoscopic procedures",
        "Training junior surgeons and residents",
        "Research in minimally invasive urological techniques"
      ]
    },
    {
      position: "Consultant Urologist",
      hospital: "Kokilaben Dhirubhai Ambani Hospital",
      duration: "2012 - 2015",
      responsibilities: [
        "Specialized in pediatric urology",
        "Developed new techniques for kidney stone management",
        "Conducted outreach programs for urological awareness"
      ]
    },
    {
      position: "Resident Surgeon",
      hospital: "King Edward Memorial Hospital",
      duration: "2008 - 2012",
      responsibilities: [
        "Completed advanced training in urology",
        "Assisted in complex reconstructive surgeries",
        "Published research papers on urological disorders"
      ]
    }
  ];

  const achievements = [
    "Best Young Urologist Award - Indian Urological Association (2014)",
    "Excellence in Laparoscopic Surgery - Mumbai Medical Association (2016)",
    "Research Publication Award for Kidney Stone Management (2018)",
    "Patient Care Excellence Award - Apollo Hospitals (2020)",
    "Outstanding Contribution to Medical Education (2022)"
  ];

  const publications = [
    "Minimally Invasive Techniques in Pediatric Urology - Journal of Urology (2019)",
    "Advanced Laparoscopic Approaches to Complex Renal Cases - Indian Journal of Surgery (2020)",
    "Patient Outcomes in Robotic Prostatectomy - International Urology Review (2021)",
    "Innovation in Endoscopic Stone Management - Urological Sciences (2022)"
  ];

  return (
    <>
      <Helmet>
        <title>Dr. Datta Sonawane - Complete Profile | Urologist Mumbai</title>
        <meta name="description" content="Comprehensive profile of Dr. Datta Sonawane - education, experience, achievements, and expertise in urology. 15+ years of experience in advanced urological treatments." />
        <meta name="keywords" content="Dr. Datta Sonawane, urologist profile, medical education, surgical experience, urology achievements, Mumbai urologist" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`bg-gradient-to-r from-primary/10 to-accent/10 py-20 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={doctorPortrait} 
                  alt="Dr. Datta Sonawane" 
                  className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Dr. Datta Sonawane
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  MCh Urology | Senior Consultant Urologist
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A distinguished urologist with over 15 years of experience in providing 
                  comprehensive urological care, specializing in minimally invasive procedures 
                  and advanced surgical techniques.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    Mumbai, Maharashtra
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="mr-2 h-4 w-4" />
                    +91 98765 43210
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="mr-2 h-4 w-4" />
                    dr.sonawane@hospital.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Education Section */}
          <div 
            ref={educationRef}
            className={`mb-16 transition-all duration-1000 delay-200 ${
              educationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Educational Background</h2>
              <p className="text-muted-foreground">Academic excellence and specialized training</p>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                          <Badge variant="outline" className="text-sm w-fit">
                            {edu.year}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div 
            ref={experienceRef}
            className={`mb-16 transition-all duration-1000 delay-400 ${
              experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Professional Experience</h2>
              <p className="text-muted-foreground">Career progression and key responsibilities</p>
            </div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Hospital className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                          <Badge variant="secondary" className="text-sm w-fit">
                            {exp.duration}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium mb-4">{exp.hospital}</p>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements & Publications */}
          <div 
            ref={achievementsRef}
            className={`transition-all duration-1000 delay-600 ${
              achievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Achievements */}
              <div>
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Awards & Recognition</h2>
                  <p className="text-muted-foreground">Professional achievements and honors</p>
                </div>
                
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Publications */}
              <div>
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Research & Publications</h2>
                  <p className="text-muted-foreground">Contributing to medical literature</p>
                </div>
                
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {publications.map((publication, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Stethoscope className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">{publication}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Schedule Your Consultation Today
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Experience world-class urological care with Dr. Datta Sonawane. 
                  Book your appointment for personalized treatment and expert medical advice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/#appointment">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Appointment
                    </Button>
                  </Link>
                  <Link to="/#contact">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;