import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, User, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProstateTreatment = () => {
  return (
    <>
      <Helmet>
        <title>Prostate Treatment - Dr. Datta Sonawane | Advanced Urological Care</title>
        <meta name="description" content="Comprehensive prostate treatment including BPH and prostate cancer care using latest medical technologies." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Prostate Treatment</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Comprehensive care for prostate conditions including BPH and prostate cancer
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span>2-3 hour procedure</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-primary" />
                  <span>Minimally invasive</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced techniques</span>
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
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Prostate Conditions</h2>
                    <p className="text-foreground/70 mb-4">
                      The prostate is a small gland in men that can develop various conditions as men age. 
                      Dr. Datta Sonawane provides comprehensive care for all prostate-related issues.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold">Benign Prostatic Hyperplasia (BPH)</h3>
                        <p className="text-sm text-foreground/70">Enlarged prostate causing urinary symptoms</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Prostate Cancer</h3>
                        <p className="text-sm text-foreground/70">Malignant growth requiring specialized treatment</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Prostatitis</h3>
                        <p className="text-sm text-foreground/70">Inflammation of the prostate gland</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Treatment Approaches</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">TURP (Transurethral Resection)</h3>
                        <p className="text-foreground/70">Gold standard treatment for enlarged prostate</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Laser Therapy</h3>
                        <p className="text-foreground/70">Advanced laser treatment with minimal bleeding</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Robotic Surgery</h3>
                        <p className="text-foreground/70">Precision surgery for prostate cancer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Book Consultation</h3>
                    <p className="text-foreground/70 mb-4">
                      Get comprehensive evaluation for prostate conditions and personalized treatment plans.
                    </p>
                    <Button className="w-full mb-4">
                      Schedule Appointment
                    </Button>
                    <div className="text-sm text-foreground/70">
                      <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
                      <p><strong>Email:</strong> info@drdattasonawane.com</p>
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

export default ProstateTreatment;