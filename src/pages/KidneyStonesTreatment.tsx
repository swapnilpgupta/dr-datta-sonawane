import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, User, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const KidneyStonesTreatment = () => {
  return (
    <>
      <Helmet>
        <title>Kidney Stone Treatment - Dr. Datta Sonawane | Advanced Urological Care</title>
        <meta name="description" content="Expert kidney stone treatment using latest minimally invasive techniques. Get effective relief from kidney stones with Dr. Datta Sonawane." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Kidney Stone Treatment</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Advanced, minimally invasive treatment options for kidney stones with faster recovery times
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span>1-2 hour procedure</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-primary" />
                  <span>Outpatient treatment</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4 text-primary" />
                  <span>98% success rate</span>
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
                    <h2 className="text-2xl font-bold mb-4">About Kidney Stones</h2>
                    <p className="text-foreground/70 mb-4">
                      Kidney stones are hard deposits made of minerals and salts that form inside your kidneys. 
                      They can affect any part of your urinary tract and can be extremely painful when passing through.
                    </p>
                    <p className="text-foreground/70">
                      Dr. Datta Sonawane specializes in the latest minimally invasive techniques for kidney stone 
                      removal, ensuring faster recovery and minimal discomfort for patients.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Treatment Options</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">ESWL (Extracorporeal Shock Wave Lithotripsy)</h3>
                        <p className="text-foreground/70">Non-invasive treatment using shock waves to break stones</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">PCNL (Percutaneous Nephrolithotomy)</h3>
                        <p className="text-foreground/70">Minimally invasive procedure for larger stones</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Ureteroscopy</h3>
                        <p className="text-foreground/70">Endoscopic removal of stones from ureter and kidney</p>
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
                      Get expert evaluation and personalized treatment plan for your kidney stones.
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

export default KidneyStonesTreatment;