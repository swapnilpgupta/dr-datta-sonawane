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
                    <h2 className="text-2xl font-bold mb-4">Complete Guide to Kidney Stones & Prostate Disorders</h2>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      Kidney stones are crystalline deposits that form in the kidneys when urine becomes concentrated, allowing minerals to crystallize and stick together. Common types include calcium oxalate, calcium phosphate, uric acid, and struvite stones. Symptoms include severe pain in the back or side, blood in urine, nausea, and frequent urination.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Common Stone Types</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Calcium oxalate (most common)</li>
                          <li>• Calcium phosphate</li>
                          <li>• Uric acid stones</li>
                          <li>• Struvite stones</li>
                          <li>• Cystine stones (rare)</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Symptoms</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Severe back or side pain</li>
                          <li>• Blood in urine</li>
                          <li>• Nausea and vomiting</li>
                          <li>• Frequent urination</li>
                          <li>• Burning during urination</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm text-foreground/70 italic">
                        "Modern treatment options have revolutionized kidney stone care, with success rates exceeding 95% for most stone types using minimally invasive techniques."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Advanced Treatment Options</h2>
                    <div className="space-y-6">
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">ESWL (Extracorporeal Shock Wave Lithotripsy)</h3>
                        <p className="text-foreground/70 mb-2">
                          Uses shock waves to break stones into smaller pieces that can be passed naturally. This non-invasive procedure is highly effective for stones up to 2cm in size.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• No incisions required</li>
                          <li>• Outpatient procedure</li>
                          <li>• 85-90% success rate</li>
                          <li>• Minimal recovery time</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">Laser Lithotripsy</h3>
                        <p className="text-foreground/70 mb-2">
                          Precise stone fragmentation using advanced laser technology, allowing for complete stone removal with minimal tissue damage.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• Precise targeting</li>
                          <li>• Minimal bleeding</li>
                          <li>• Same-day discharge</li>
                          <li>• High success rates</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">Percutaneous Nephrolithotomy (PCNL)</h3>
                        <p className="text-foreground/70 mb-2">
                          Minimally invasive procedure for large stones, involving a small incision to directly access and remove kidney stones.
                        </p>
                        <ul className="text-sm text-foreground/60 space-y-1">
                          <li>• For stones &gt;2cm</li>
                          <li>• Single-stage treatment</li>
                          <li>• Complete stone removal</li>
                          <li>• Faster recovery than open surgery</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Prevention Strategies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Dietary Modifications</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Increase water intake (2-3 liters daily)</li>
                          <li>• Limit sodium intake</li>
                          <li>• Moderate protein consumption</li>
                          <li>• Adequate calcium intake</li>
                          <li>• Limit oxalate-rich foods</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-primary">Medical Management</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                          <li>• Thiazide diuretics</li>
                          <li>• Potassium citrate</li>
                          <li>• Allopurinol for uric acid stones</li>
                          <li>• Regular follow-up imaging</li>
                          <li>• Metabolic evaluation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Expert Evaluation</h3>
                    <p className="text-foreground/70 mb-4">
                      Get comprehensive stone analysis and personalized treatment plan with Dr. Datta Sonawane's expertise in advanced stone management.
                    </p>
                    <Button className="w-full mb-4">
                      Schedule Consultation
                    </Button>
                    <div className="text-sm text-foreground/70 space-y-2">
                      <p><strong>Treatment Benefits:</strong></p>
                      <ul className="space-y-1 text-xs">
                        <li>• 98% success rate with modern techniques</li>
                        <li>• Minimal invasive procedures</li>
                        <li>• Same-day discharge options</li>
                        <li>• Comprehensive prevention plans</li>
                        <li>• 24/7 emergency support</li>
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

export default KidneyStonesTreatment;