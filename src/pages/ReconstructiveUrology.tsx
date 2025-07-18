import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Zap, Wrench, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ReconstructiveUrology = () => {
  return (
    <>
      <Helmet>
        <title>Reconstructive Urology - Stricture & Fistula Treatment - Dr. Datta Sonawane</title>
        <meta name="description" content="Expert reconstructive urology services for complex conditions including urethral strictures, fistulas, and urinary tract reconstruction." />
        <meta name="keywords" content="reconstructive urology, urethral stricture, fistula repair, urethroplasty, bladder reconstruction, urinary tract reconstruction" />
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
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Reconstructive Urology
                  </h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Expert surgical reconstruction for complex urinary tract conditions
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What is Reconstructive Urology?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Reconstructive urology focuses on restoring normal function to the urinary tract through 
                    surgical reconstruction. This subspecialty addresses complex conditions that affect the 
                    kidneys, ureters, bladder, and urethra, often requiring sophisticated surgical techniques.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Surgical Expertise</h4>
                      <p className="text-sm text-muted-foreground">Advanced techniques for complex reconstructions</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Function Restoration</h4>
                      <p className="text-sm text-muted-foreground">Restoring normal urinary and sexual function</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Long-term Success</h4>
                      <p className="text-sm text-muted-foreground">Durable solutions for complex problems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Common Conditions Treated</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Urethral Stricture Disease</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Narrowing of the urethra that can cause difficulty urinating, recurrent infections, and kidney damage.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Causes:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Trauma or injury</li>
                            <li>• Infections</li>
                            <li>• Previous surgery</li>
                            <li>• Catheter-related injury</li>
                            <li>• Congenital abnormalities</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Treatment Options:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Urethroplasty (surgical repair)</li>
                            <li>• Urethral dilation</li>
                            <li>• Internal urethrotomy</li>
                            <li>• Staged reconstruction</li>
                            <li>• Tissue grafts and flaps</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Urinary Fistulas</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Abnormal connections between the urinary tract and other organs, causing urine leakage.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Types:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Vesicovaginal fistula</li>
                            <li>• Ureterovaginal fistula</li>
                            <li>• Rectovesical fistula</li>
                            <li>• Urethrocutaneous fistula</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Repair Techniques:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Primary surgical repair</li>
                            <li>• Tissue interposition</li>
                            <li>• Minimally invasive approaches</li>
                            <li>• Multi-layer closure</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Bladder Reconstruction</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Reconstruction of the bladder using various techniques to restore function and capacity.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Indications:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Neurogenic bladder</li>
                            <li>• Bladder cancer</li>
                            <li>• Chronic cystitis</li>
                            <li>• Traumatic injury</li>
                            <li>• Congenital abnormalities</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Procedures:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Bladder augmentation</li>
                            <li>• Neobladder construction</li>
                            <li>• Continent diversions</li>
                            <li>• Artificial urinary sphincter</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Surgical Techniques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Urethroplasty Techniques</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Excision and primary anastomosis:</strong> Direct repair for short strictures</li>
                        <li>• <strong>Buccal mucosa graft:</strong> Using inner cheek lining for reconstruction</li>
                        <li>• <strong>Skin graft urethroplasty:</strong> Using skin grafts for complex cases</li>
                        <li>• <strong>Flap reconstruction:</strong> Using local tissue flaps</li>
                        <li>• <strong>Staged procedures:</strong> Two-stage reconstruction for complex cases</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Advanced Approaches</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Laparoscopic reconstruction:</strong> Minimally invasive techniques</li>
                        <li>• <strong>Robotic surgery:</strong> Enhanced precision and visualization</li>
                        <li>• <strong>Tissue engineering:</strong> Using synthetic materials when appropriate</li>
                        <li>• <strong>Microsurgery:</strong> Precise techniques for delicate repairs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Treatment Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Pre-operative Assessment</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Detailed medical history</li>
                        <li>• Physical examination</li>
                        <li>• Imaging studies (CT, MRI, ultrasound)</li>
                        <li>• Urodynamic testing</li>
                        <li>• Cystoscopy and urethrogram</li>
                        <li>• Assessment of kidney function</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Post-operative Care</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Catheter management</li>
                        <li>• Pain control</li>
                        <li>• Wound care</li>
                        <li>• Follow-up imaging</li>
                        <li>• Functional assessment</li>
                        <li>• Long-term monitoring</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Success Rates & Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Success rates for reconstructive procedures vary depending on the complexity of the condition, 
                      patient factors, and surgical technique used. Our goal is to achieve long-term functional 
                      improvement with minimal complications.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Factors Affecting Success:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Length and location of stricture</li>
                          <li>• Cause of the condition</li>
                          <li>• Previous treatments</li>
                          <li>• Patient age and health</li>
                          <li>• Smoking history</li>
                          <li>• Diabetes or other medical conditions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Expected Outcomes:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Improved urinary flow</li>
                          <li>• Reduced infections</li>
                          <li>• Better quality of life</li>
                          <li>• Preserved kidney function</li>
                          <li>• Long-term durability</li>
                          <li>• Minimal complications</li>
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

export default ReconstructiveUrology;