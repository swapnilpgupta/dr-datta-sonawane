import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Scissors, Clock, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LaparoscopicSurgery = () => {
  return (
    <>
      <Helmet>
        <title>Laparoscopic & Minimally Invasive Surgery - Dr. Datta Sonawane</title>
        <meta name="description" content="Advanced laparoscopic and minimally invasive urological surgeries with faster recovery times and better outcomes." />
        <meta name="keywords" content="laparoscopic surgery, minimally invasive surgery, robotic surgery, endoscopic procedures, pyeloplasty, nephrectomy" />
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
                  <Scissors className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Laparoscopic & Minimally Invasive Surgery
                  </h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Advanced surgical techniques for faster recovery and better outcomes
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What is Minimally Invasive Surgery?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Minimally invasive surgery uses small incisions and advanced instruments to perform complex urological procedures. 
                    This approach reduces trauma to surrounding tissues, minimizes scarring, and significantly improves recovery times.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Faster Recovery</h4>
                      <p className="text-sm text-muted-foreground">Reduced hospital stay and quicker return to normal activities</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Less Pain</h4>
                      <p className="text-sm text-muted-foreground">Minimal tissue trauma means less post-operative pain</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Better Outcomes</h4>
                      <p className="text-sm text-muted-foreground">Improved precision and reduced complications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Available Procedures</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Laparoscopic Procedures</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong>Laparoscopic Nephrectomy:</strong> Kidney removal with minimal scarring
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong>Pyeloplasty:</strong> Repair of kidney-ureter junction obstruction
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong>Adrenalectomy:</strong> Removal of adrenal glands
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong>Varicocele Repair:</strong> Treatment of enlarged veins in scrotum
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Endoscopic Procedures</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong>TURP:</strong> Transurethral resection of prostate
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong>URS:</strong> Ureteroscopy for stone removal
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong>Cystoscopy:</strong> Bladder examination and treatment
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong>PCNL:</strong> Percutaneous nephrolithotomy
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Recovery Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Immediate Post-Op (0-24 hours)</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Monitoring in recovery room</li>
                        <li>• Pain management with medication</li>
                        <li>• Early mobilization when possible</li>
                        <li>• Monitoring of vital signs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">First Week</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Gradual return to normal activities</li>
                        <li>• Follow-up appointment</li>
                        <li>• Wound care instructions</li>
                        <li>• Light activities encouraged</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Why Choose Minimally Invasive Surgery?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Smaller incisions (typically 0.5-1cm)</li>
                          <li>• Reduced blood loss</li>
                          <li>• Lower risk of infection</li>
                          <li>• Faster recovery time</li>
                          <li>• Less post-operative pain</li>
                          <li>• Better cosmetic results</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Technology:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• High-definition cameras</li>
                          <li>• Advanced surgical instruments</li>
                          <li>• Robotic assistance when needed</li>
                          <li>• Real-time imaging guidance</li>
                          <li>• 3D visualization systems</li>
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

export default LaparoscopicSurgery;