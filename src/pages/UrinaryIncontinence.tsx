import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, User, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const UrinaryIncontinence = () => {
  return (
    <>
      <Helmet>
        <title>Urinary Incontinence Treatment - Dr. Datta Sonawane</title>
        <meta name="description" content="Expert treatment for urinary incontinence with advanced surgical and non-surgical options for better quality of life." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Urinary Incontinence Treatment</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Comprehensive treatment options to restore bladder control and improve quality of life
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span>30 min - 2 hours</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-primary" />
                  <span>Multiple options</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4 text-primary" />
                  <span>High success rate</span>
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
                    <h2 className="text-2xl font-bold mb-4">Understanding Urinary Incontinence</h2>
                    <p className="text-foreground/70 mb-4">
                      Urinary incontinence is the involuntary leakage of urine, affecting millions of people. 
                      It can significantly impact quality of life, but effective treatments are available.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold">Stress Incontinence</h3>
                        <p className="text-sm text-foreground/70">Leakage during physical activities or coughing</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Urge Incontinence</h3>
                        <p className="text-sm text-foreground/70">Sudden, intense urge to urinate</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Mixed Incontinence</h3>
                        <p className="text-sm text-foreground/70">Combination of stress and urge incontinence</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Treatment Options</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Sling Surgery</h3>
                        <p className="text-foreground/70">Minimally invasive procedure for stress incontinence</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Botox Injections</h3>
                        <p className="text-foreground/70">For overactive bladder and urge incontinence</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Pelvic Floor Therapy</h3>
                        <p className="text-foreground/70">Conservative treatment to strengthen muscles</p>
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
                      Confidential consultation to discuss treatment options for urinary incontinence.
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

export default UrinaryIncontinence;