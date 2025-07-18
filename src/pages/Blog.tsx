import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Kidney Stones & Prostate Disorders: Complete Guide to Modern Treatment",
      excerpt: "Comprehensive overview of kidney stones and prostate disorders, including causes, symptoms, and advanced treatment options available today.",
      content: "Kidney stones are crystalline deposits that form in the kidneys when urine becomes concentrated, allowing minerals to crystallize and stick together. Common types include calcium oxalate, calcium phosphate, uric acid, and struvite stones. Symptoms include severe pain in the back or side, blood in urine, nausea, and frequent urination. Modern treatment options include ESWL (Extracorporeal Shock Wave Lithotripsy), which uses shock waves to break stones into smaller pieces, laser lithotripsy for precise stone fragmentation, and percutaneous nephrolithotomy for large stones. Prevention strategies include adequate hydration, dietary modifications, and medication when necessary. Prostate disorders encompass benign prostatic hyperplasia (BPH), prostatitis, and prostate cancer. BPH affects over 50% of men over 60, causing urinary symptoms due to prostate enlargement. Treatment ranges from medication to minimally invasive procedures like TURP (Transurethral Resection of the Prostate) and laser prostatectomy. Early detection through PSA screening and digital rectal examination is crucial for prostate cancer, which is highly treatable when caught early. Advanced treatments include robotic-assisted surgery, radiation therapy, and hormone therapy.",
      date: "2024-01-15",
      author: "Dr. Datta Sonawane"
    },
    {
      id: 2,
      title: "Male Infertility & Sexual Health: Advanced Diagnostic and Treatment Approaches",
      excerpt: "Comprehensive guide to male fertility issues and sexual health disorders, covering modern diagnostic techniques and treatment options.",
      content: "Male infertility affects approximately 40-50% of couples experiencing fertility issues. Common causes include varicocele (enlarged veins in the scrotum), hormonal imbalances, genetic factors, infections, and lifestyle factors. Comprehensive evaluation begins with detailed medical history and physical examination, followed by semen analysis to assess sperm count, motility, and morphology. Advanced diagnostic tests include hormone testing (testosterone, FSH, LH), genetic screening, and specialized sperm function tests. Treatment approaches vary based on underlying causes: lifestyle modifications including diet, exercise, and avoiding smoking/excessive alcohol; medical treatments such as hormone therapy and antioxidant supplements; surgical interventions like varicocele repair, which can improve sperm quality in 60-70% of cases; and assisted reproductive technologies (ART) including intrauterine insemination (IUI) and in vitro fertilization (IVF). Sexual health disorders, including erectile dysfunction (ED) and premature ejaculation, are common but highly treatable. ED affects over 30 million men in the US, with causes ranging from vascular issues to psychological factors. Treatment options include oral medications (PDE5 inhibitors), vacuum devices, penile injections, and penile implants for severe cases. Premature ejaculation can be treated with behavioral techniques, topical anesthetics, and medications. Regular follow-up and counseling are essential components of comprehensive sexual health care.",
      date: "2024-01-10",
      author: "Dr. Datta Sonawane"
    },
    {
      id: 3,
      title: "Laparoscopic Surgery: Benefits of Minimally Invasive Techniques",
      excerpt: "Discover how laparoscopic and robotic surgical techniques are revolutionizing urological care with better outcomes and faster recovery.",
      content: "Minimally invasive urological surgeries offer numerous advantages including smaller incisions, reduced pain, shorter hospital stays, and faster recovery. These techniques are now used for complex procedures like nephrectomy, pyeloplasty, and prostatectomy with excellent outcomes.",
      date: "2024-01-05",
      author: "Dr. Datta Sonawane"
    },
    {
      id: 4,
      title: "Uro-Oncology: Advances in Cancer Treatment",
      excerpt: "Latest developments in treating kidney, bladder, and prostate cancers with improved survival rates and quality of life.",
      content: "Urological cancers require specialized care and treatment. Recent advances include robotic surgery, immunotherapy, and targeted therapies. Early detection through screening programs significantly improves treatment outcomes and patient survival rates.",
      date: "2023-12-28",
      author: "Dr. Datta Sonawane"
    },
    {
      id: 5,
      title: "Reconstructive Urology: Restoring Function and Quality of Life",
      excerpt: "Learn about surgical reconstruction techniques for complex urological conditions and how they restore normal function.",
      content: "Reconstructive urology focuses on restoring normal urinary and reproductive function. Procedures include urethroplasty for strictures, bladder reconstruction, and fistula repair. These complex surgeries require specialized expertise and can dramatically improve patients' quality of life.",
      date: "2023-12-20",
      author: "Dr. Datta Sonawane"
    },
    {
      id: 6,
      title: "General Urological Health: Prevention and Early Detection",
      excerpt: "Essential information about maintaining urological health and recognizing early warning signs of common conditions.",
      content: "Prevention is key to maintaining urological health throughout life. Regular screening, healthy lifestyle choices, and early intervention can prevent many serious conditions and improve treatment outcomes when issues do arise.",
      date: "2023-12-15",
      author: "Dr. Datta Sonawane"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Dr. Datta Sonawane | Urological Health Insights</title>
        <meta name="description" content="Read the latest insights on urological health, treatment options, and medical advances from Dr. Datta Sonawane." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Blog</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Stay informed with the latest insights on urological health, treatment advances, and patient care from Dr. Datta Sonawane.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/70 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="text-sm text-foreground/60 leading-relaxed">
                      {post.content.substring(0, 150)}...
                    </div>
                    <Button variant="outline" className="w-full">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;