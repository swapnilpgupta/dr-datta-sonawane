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
                    <h2 className="text-2xl font-bold mb-4">Comprehensive Guide to Prostate Disorders</h2>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      Prostate disorders encompass benign prostatic hyperplasia (BPH), prostatitis, and prostate cancer. BPH affects over 50% of men over 60, causing urinary symptoms due to prostate enlargement. Treatment ranges from medication to minimally invasive procedures like TURP (Transurethral Resection of the Prostate) and laser prostatectomy.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">BPH (Enlarged Prostate)</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Affects 50% of men over 60</li>
                          <li>• Urinary frequency</li>
                          <li>• Weak stream</li>
                          <li>• Incomplete emptying</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Prostatitis</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Inflammation of prostate</li>
                          <li>• Pelvic pain</li>
                          <li>• Urinary urgency</li>
                          <li>• Sexual dysfunction</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Prostate Cancer</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Most common male cancer</li>
                          <li>• Often asymptomatic early</li>
                          <li>• PSA screening important</li>
                          <li>• Highly treatable when caught early</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm text-foreground/70 italic">
                        "Early detection through PSA screening and digital rectal examination is crucial for prostate cancer, which is highly treatable when caught early."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Advanced Treatment Options</h2>
                    <div className="space-y-6">
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">TURP (Transurethral Resection of the Prostate)</h3>
                        <p className="text-foreground/70 mb-2">
                          Gold standard treatment for enlarged prostate, removing excess tissue through the urethra without external incisions.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• Minimally invasive approach</li>
                          <li>• Immediate symptom relief</li>
                          <li>• 2-3 day hospital stay</li>
                          <li>• 90% success rate</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">Laser Prostatectomy</h3>
                        <p className="text-foreground/70 mb-2">
                          Advanced laser treatment with minimal bleeding and faster recovery compared to traditional surgery.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• Minimal bleeding</li>
                          <li>• Faster recovery</li>
                          <li>• Same-day discharge possible</li>
                          <li>• Precision tissue removal</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">Robotic-Assisted Surgery</h3>
                        <p className="text-foreground/70 mb-2">
                          Precision surgery for prostate cancer using robotic technology for better outcomes and faster recovery.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• Enhanced precision</li>
                          <li>• Reduced blood loss</li>
                          <li>• Shorter hospital stay</li>
                          <li>• Better functional outcomes</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">Hormone Therapy</h3>
                        <p className="text-foreground/70 mb-2">
                          Advanced treatments for prostate cancer including hormone therapy and targeted radiation.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• Androgen deprivation therapy</li>
                          <li>• Targeted radiation therapy</li>
                          <li>• Combination treatments</li>
                          <li>• Personalized protocols</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Prevention & Early Detection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Screening Guidelines</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• PSA testing annually after 50</li>
                          <li>• Earlier screening for high-risk men</li>
                          <li>• Digital rectal examination</li>
                          <li>• Family history assessment</li>
                          <li>• Lifestyle risk evaluation</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Risk Factors</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Age over 50</li>
                          <li>• Family history</li>
                          <li>• African American ethnicity</li>
                          <li>• Diet high in red meat</li>
                          <li>• Obesity and sedentary lifestyle</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Comprehensive Evaluation</h3>
                    <p className="text-foreground/70 mb-4">
                      Get complete prostate health assessment and personalized treatment plans using the latest medical technologies.
                    </p>
                    <Button className="w-full mb-4">
                      Schedule Consultation
                    </Button>
                    <div className="text-sm text-foreground/70 space-y-2">
                      <p><strong>Consultation Includes:</strong></p>
                      <ul className="space-y-1 text-xs">
                        <li>• Complete medical history</li>
                        <li>• Physical examination</li>
                        <li>• PSA testing</li>
                        <li>• Imaging studies if needed</li>
                        <li>• Personalized treatment plan</li>
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

export default ProstateTreatment;