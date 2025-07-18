import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Activity, Heart, Shield, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GeneralUrology = () => {
  return (
    <>
      <Helmet>
        <title>General Urological Disorders - Dr. Datta Sonawane</title>
        <meta name="description" content="Comprehensive care for common urological conditions including UTIs, bladder dysfunction, and general urological consultations." />
        <meta name="keywords" content="general urology, UTI treatment, bladder dysfunction, incontinence, urological consultation, urinary problems" />
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
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    General Urological Disorders
                  </h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Comprehensive care for common urological conditions
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Common Urological Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    General urology encompasses the diagnosis and treatment of common conditions affecting the 
                    urinary system. These conditions can affect people of all ages and often require prompt, 
                    effective treatment to prevent complications and improve quality of life.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">UTI Treatment</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive management of urinary tract infections</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">Bladder Health</h4>
                      <p className="text-sm text-muted-foreground">Treatment of bladder dysfunction and disorders</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Stethoscope className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold">General Care</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive urological consultations and care</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Urinary Tract Infections (UTIs)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Types of UTIs</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Lower UTIs:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• <strong>Cystitis:</strong> Bladder infection</li>
                            <li>• <strong>Urethritis:</strong> Urethra infection</li>
                            <li>• <strong>Prostatitis:</strong> Prostate infection (men)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Upper UTIs:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• <strong>Pyelonephritis:</strong> Kidney infection</li>
                            <li>• <strong>Urosepsis:</strong> Severe systemic infection</li>
                            <li>• <strong>Complicated UTIs:</strong> With structural abnormalities</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Symptoms & Diagnosis</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Common Symptoms:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Burning during urination</li>
                            <li>• Frequent urination</li>
                            <li>• Urgency to urinate</li>
                            <li>• Cloudy or bloody urine</li>
                            <li>• Pelvic pain (women)</li>
                            <li>• Fever and chills</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Diagnostic Tests:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Urine analysis</li>
                            <li>• Urine culture</li>
                            <li>• Blood tests</li>
                            <li>• Imaging (if recurrent)</li>
                            <li>• Cystoscopy (if indicated)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Treatment Approach</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Acute Treatment:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Appropriate antibiotics</li>
                            <li>• Pain management</li>
                            <li>• Increased fluid intake</li>
                            <li>• Symptom relief measures</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Prevention:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Proper hygiene</li>
                            <li>• Adequate hydration</li>
                            <li>• Prophylactic antibiotics (if indicated)</li>
                            <li>• Lifestyle modifications</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Bladder Dysfunction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Overactive Bladder</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Characterized by sudden, intense urges to urinate that are difficult to control.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Symptoms:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Urgent need to urinate</li>
                            <li>• Frequent urination (&gt;8 times/day)</li>
                            <li>• Nocturia (nighttime urination)</li>
                            <li>• Urge incontinence</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Treatment Options:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Behavioral therapy</li>
                            <li>• Bladder training</li>
                            <li>• Medications (anticholinergics)</li>
                            <li>• Botox injections</li>
                            <li>• Nerve stimulation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg mb-2">Neurogenic Bladder</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Bladder dysfunction caused by problems with the nervous system.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Causes:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Spinal cord injury</li>
                            <li>• Multiple sclerosis</li>
                            <li>• Diabetes</li>
                            <li>• Stroke</li>
                            <li>• Parkinson's disease</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Management:</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Catheterization</li>
                            <li>• Medications</li>
                            <li>• Bladder training</li>
                            <li>• Surgery (if indicated)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Urinary Incontinence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Types of Incontinence</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Stress incontinence:</strong> Leakage during physical activity</li>
                        <li>• <strong>Urge incontinence:</strong> Unable to hold urine when feeling urgent</li>
                        <li>• <strong>Mixed incontinence:</strong> Combination of stress and urge</li>
                        <li>• <strong>Overflow incontinence:</strong> Constant dribbling due to overfull bladder</li>
                        <li>• <strong>Functional incontinence:</strong> Due to physical/mental limitations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Treatment Options</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Pelvic floor exercises</li>
                        <li>• Bladder training</li>
                        <li>• Medications</li>
                        <li>• Surgical interventions</li>
                        <li>• Slings and devices</li>
                        <li>• Lifestyle modifications</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">General Consultation Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Our general urology consultations provide comprehensive evaluation and management 
                      for a wide range of urological concerns. We focus on early detection, appropriate 
                      treatment, and preventive care.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Common Concerns:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Blood in urine (hematuria)</li>
                          <li>• Frequent urination</li>
                          <li>• Difficulty urinating</li>
                          <li>• Pelvic or flank pain</li>
                          <li>• Urinary retention</li>
                          <li>• Recurrent infections</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Preventive Care:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Regular health screenings</li>
                          <li>• Prostate health monitoring</li>
                          <li>• Kidney function assessment</li>
                          <li>• Lifestyle counseling</li>
                          <li>• Risk factor assessment</li>
                          <li>• Patient education</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">When to See a Urologist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Urgent Symptoms:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Severe abdominal or back pain</li>
                          <li>• Blood in urine</li>
                          <li>• Inability to urinate</li>
                          <li>• Fever with urinary symptoms</li>
                          <li>• Severe burning during urination</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Routine Consultation:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Changes in urination pattern</li>
                          <li>• Recurrent UTIs</li>
                          <li>• Kidney stones</li>
                          <li>• Prostate concerns</li>
                          <li>• Fertility issues</li>
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

export default GeneralUrology;