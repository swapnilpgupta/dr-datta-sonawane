import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Shield, Heart, Activity, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UroOncology = () => {
  return (
    <>
      <Helmet>
        <title>Uro-Oncology - Kidney, Bladder & Prostate Cancers - Dr. Datta Sonawane</title>
        <meta name="description" content="Comprehensive care for urological cancers including kidney, bladder, and prostate cancers with advanced treatment options." />
        <meta name="keywords" content="uro-oncology, kidney cancer, bladder cancer, prostate cancer, radical nephrectomy, cystectomy, prostatectomy" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button asChild variant="outline" className="mb-4">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Uro-Oncology
                  </h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Comprehensive care for kidney, bladder, and prostate cancers
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Understanding Urological Cancers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Urological cancers affect the organs of the urinary system and male reproductive system. 
                    Early detection and comprehensive treatment are crucial for optimal outcomes. Our team 
                    provides personalized care using the latest treatment modalities.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Prostate Cancer</h4>
                      <p className="text-sm text-muted-foreground">Most common cancer in men over 50</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Kidney Cancer</h4>
                      <p className="text-sm text-muted-foreground">Often detected incidentally on imaging</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Stethoscope className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Bladder Cancer</h4>
                      <p className="text-sm text-muted-foreground">May present with blood in urine</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Cancer Types & Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Prostate Cancer</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Treatment depends on stage, grade, and patient factors including age and overall health.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Treatment Options:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Radical Prostatectomy</li>
                            <li>• Radiation Therapy</li>
                            <li>• Hormone Therapy</li>
                            <li>• Active Surveillance</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Surgical Approaches:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Laparoscopic Prostatectomy</li>
                            <li>• Robot-assisted Surgery</li>
                            <li>• Open Surgery</li>
                            <li>• Nerve-sparing Techniques</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Kidney Cancer (Renal Cell Carcinoma)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Treatment approach depends on tumor size, location, and patient's kidney function.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Surgical Options:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Partial Nephrectomy</li>
                            <li>• Radical Nephrectomy</li>
                            <li>• Laparoscopic Surgery</li>
                            <li>• Robotic Surgery</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Advanced Treatments:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Targeted Therapy</li>
                            <li>• Immunotherapy</li>
                            <li>• Ablation Therapy</li>
                            <li>• Surveillance Protocols</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Bladder Cancer</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Treatment varies significantly based on whether cancer is confined to the bladder lining or has invaded deeper.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Early Stage:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Transurethral Resection (TURBT)</li>
                            <li>• Intravesical Therapy</li>
                            <li>• BCG Immunotherapy</li>
                            <li>• Surveillance Cystoscopy</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Advanced Stage:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Radical Cystectomy</li>
                            <li>• Urinary Diversion</li>
                            <li>• Neoadjuvant Chemotherapy</li>
                            <li>• Bladder Preservation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Diagnostic Approach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Initial Assessment</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Comprehensive medical history</li>
                        <li>• Physical examination</li>
                        <li>• Blood tests (PSA, kidney function)</li>
                        <li>• Urine analysis and cytology</li>
                        <li>• Imaging studies (CT, MRI, ultrasound)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Advanced Diagnostics</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Tissue biopsy</li>
                        <li>• Cystoscopy</li>
                        <li>• Bone scan</li>
                        <li>• PET scan</li>
                        <li>• Genetic testing when indicated</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Treatment Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Our approach to cancer care is comprehensive and patient-centered. We work closely with 
                      medical oncologists, radiation oncologists, and other specialists to ensure you receive 
                      the most appropriate treatment for your specific situation.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Our Principles:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Personalized treatment plans</li>
                          <li>• Multidisciplinary team approach</li>
                          <li>• Minimally invasive techniques when possible</li>
                          <li>• Quality of life preservation</li>
                          <li>• Comprehensive follow-up care</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Support Services:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Nutritional counseling</li>
                          <li>• Psychological support</li>
                          <li>• Rehabilitation services</li>
                          <li>• Patient education</li>
                          <li>• Family counseling</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default UroOncology;