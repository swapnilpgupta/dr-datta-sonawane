import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, User, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErectileDysfunction = () => {
  return (
    <>
      <Helmet>
        <title>Erectile Dysfunction Treatment - Dr. Datta Sonawane</title>
        <meta name="description" content="Confidential and effective erectile dysfunction treatment with modern medical approaches and personalized care." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Erectile Dysfunction Treatment</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Confidential, comprehensive treatment for erectile dysfunction with proven results
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span>Consultation based</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-primary" />
                  <span>Confidential care</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4 text-primary" />
                  <span>Proven treatments</span>
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
                    <h2 className="text-2xl font-bold mb-4">Understanding Erectile Dysfunction</h2>
                    <p className="text-foreground/70 mb-4">
                      Erectile dysfunction (ED) is a common condition affecting men of all ages. 
                      It can have physical or psychological causes and is highly treatable with the right approach.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold">Physical Causes</h3>
                        <p className="text-sm text-foreground/70">Diabetes, heart disease, hormonal issues</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Psychological Factors</h3>
                        <p className="text-sm text-foreground/70">Stress, anxiety, depression</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Lifestyle Factors</h3>
                        <p className="text-sm text-foreground/70">Smoking, alcohol, lack of exercise</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Treatment Approaches</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Oral Medications</h3>
                        <p className="text-foreground/70">FDA-approved medications with proven efficacy</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Injection Therapy</h3>
                        <p className="text-foreground/70">Direct injection for immediate results</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Penile Implants</h3>
                        <p className="text-foreground/70">Surgical option for severe cases</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Lifestyle Counseling</h3>
                        <p className="text-foreground/70">Addressing underlying lifestyle factors</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Confidential Consultation</h3>
                    <p className="text-foreground/70 mb-4">
                      Private, professional consultation to discuss treatment options in a comfortable environment.
                    </p>
                    <Button className="w-full mb-4">
                      Schedule Private Consultation
                    </Button>
                    <div className="text-sm text-foreground/70">
                      <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
                      <p><strong>Email:</strong> info@drdattasonawane.com</p>
                      <p className="mt-2 text-xs">All consultations are completely confidential</p>
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

export default ErectileDysfunction;