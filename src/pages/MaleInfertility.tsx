import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, User, Award, ArrowLeft, Calendar, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaleInfertility = () => {
  return (
    <>
      <Helmet>
        <title>Male Infertility & Sexual Health - Dr. Datta Sonawane | Comprehensive Care</title>
        <meta name="description" content="Expert treatment for male infertility and sexual health issues with advanced diagnostic techniques and personalized care." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Male Infertility & Sexual Health</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Comprehensive care for male fertility issues and sexual health disorders with advanced diagnostic and treatment approaches
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span>Comprehensive evaluation</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-primary" />
                  <span>Confidential care</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced treatments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Understanding Male Infertility
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground/70 leading-relaxed">
                      Male infertility affects approximately 40-50% of couples experiencing fertility issues. Common causes include varicocele (enlarged veins in the scrotum), hormonal imbalances, genetic factors, infections, and lifestyle factors. Comprehensive evaluation begins with detailed medical history and physical examination, followed by semen analysis to assess sperm count, motility, and morphology.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Common Causes</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Varicocele (enlarged veins)</li>
                          <li>• Hormonal imbalances</li>
                          <li>• Genetic factors</li>
                          <li>• Infections and inflammation</li>
                          <li>• Lifestyle factors</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Diagnostic Tests</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Semen analysis</li>
                          <li>• Hormone testing</li>
                          <li>• Genetic screening</li>
                          <li>• Sperm function tests</li>
                          <li>• Ultrasound examination</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Treatment Approaches
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">Lifestyle Modifications</h3>
                        <p className="text-foreground/70 mb-2">
                          Diet, exercise, and avoiding smoking/excessive alcohol can significantly improve sperm quality.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• Balanced nutrition and antioxidant supplements</li>
                          <li>• Regular exercise and weight management</li>
                          <li>• Stress reduction techniques</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">Medical Treatments</h3>
                        <p className="text-foreground/70 mb-2">
                          Hormone therapy and antioxidant supplements to address underlying causes.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• Hormone replacement therapy</li>
                          <li>• Antioxidant supplementation</li>
                          <li>• Infection treatment</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">Surgical Interventions</h3>
                        <p className="text-foreground/70 mb-2">
                          Varicocele repair can improve sperm quality in 60-70% of cases.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• Varicocelectomy (microsurgical repair)</li>
                          <li>• Obstruction correction</li>
                          <li>• Sperm retrieval procedures</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">Assisted Reproductive Technologies</h3>
                        <p className="text-foreground/70 mb-2">
                          Advanced techniques including IUI and IVF for couples with persistent fertility issues.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• Intrauterine insemination (IUI)</li>
                          <li>• In vitro fertilization (IVF)</li>
                          <li>• Intracytoplasmic sperm injection (ICSI)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sexual Health Disorders</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground/70 leading-relaxed">
                      Sexual health disorders, including erectile dysfunction (ED) and premature ejaculation, are common but highly treatable. ED affects over 30 million men in the US, with causes ranging from vascular issues to psychological factors. Treatment options include oral medications (PDE5 inhibitors), vacuum devices, penile injections, and penile implants for severe cases.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Erectile Dysfunction</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Oral medications (PDE5 inhibitors)</li>
                          <li>• Vacuum erection devices</li>
                          <li>• Penile injection therapy</li>
                          <li>• Penile implants</li>
                          <li>• Psychological counseling</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Premature Ejaculation</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Behavioral techniques</li>
                          <li>• Topical anesthetics</li>
                          <li>• Oral medications</li>
                          <li>• Counseling therapy</li>
                          <li>• Combination treatments</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm text-foreground/70 italic">
                        "Regular follow-up and counseling are essential components of comprehensive sexual health care. Treatment success rates are high when patients work closely with their healthcare provider."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Confidential Consultation</h3>
                    <p className="text-foreground/70 mb-4">
                      Get comprehensive evaluation and personalized treatment plans in a private, comfortable environment.
                    </p>
                    <Button className="w-full mb-4">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Button>
                    <div className="text-sm text-foreground/70 space-y-2">
                      <p><strong>Consultation Features:</strong></p>
                      <ul className="space-y-1 text-xs">
                        <li>• Complete privacy and confidentiality</li>
                        <li>• Comprehensive medical evaluation</li>
                        <li>• Advanced diagnostic testing</li>
                        <li>• Personalized treatment plans</li>
                        <li>• Follow-up care and support</li>
                      </ul>
                    </div>
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

export default MaleInfertility;