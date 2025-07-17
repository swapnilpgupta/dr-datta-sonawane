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
      title: "Understanding Kidney Stones: Prevention and Treatment Options",
      excerpt: "Learn about the causes, symptoms, and modern treatment approaches for kidney stones, including minimally invasive procedures.",
      content: "Kidney stones are hard deposits of minerals and salts that form inside the kidneys. They can cause severe pain and complications if not treated properly. Modern treatment options include ESWL (Extracorporeal Shock Wave Lithotripsy), laser lithotripsy, and percutaneous nephrolithotomy, offering patients effective solutions with minimal recovery time.",
      date: "2024-01-15",
      author: "Dr. Datta Sonawane"
    },
    {
      id: 2,
      title: "Prostate Health: Early Detection and Treatment Strategies",
      excerpt: "Comprehensive guide to prostate disorders, from benign enlargement to cancer screening and treatment options.",
      content: "Prostate disorders affect millions of men worldwide. Early detection through regular screening is crucial for effective treatment. Modern approaches include minimally invasive procedures like TURP surgery and laser prostatectomy, which offer excellent outcomes with reduced recovery time.",
      date: "2024-01-10",
      author: "Dr. Datta Sonawane"
    },
    {
      id: 3,
      title: "Male Infertility: Modern Diagnostic and Treatment Approaches",
      excerpt: "Exploring the latest advances in male fertility evaluation and treatment options for couples trying to conceive.",
      content: "Male infertility affects approximately 40-50% of infertile couples. Comprehensive evaluation includes semen analysis, hormone testing, and genetic screening. Treatment options range from lifestyle modifications to advanced procedures like varicocele repair and assisted reproductive technologies.",
      date: "2024-01-05",
      author: "Dr. Datta Sonawane"
    },
    {
      id: 4,
      title: "Laparoscopic Surgery: Benefits of Minimally Invasive Techniques",
      excerpt: "Discover how laparoscopic and robotic surgical techniques are revolutionizing urological care.",
      content: "Minimally invasive urological surgeries offer numerous advantages including smaller incisions, reduced pain, shorter hospital stays, and faster recovery. These techniques are now used for complex procedures like nephrectomy, pyeloplasty, and prostatectomy with excellent outcomes.",
      date: "2023-12-28",
      author: "Dr. Datta Sonawane"
    },
    {
      id: 5,
      title: "Uro-Oncology: Advances in Cancer Treatment",
      excerpt: "Latest developments in treating kidney, bladder, and prostate cancers with improved survival rates.",
      content: "Urological cancers require specialized care and treatment. Recent advances include robotic surgery, immunotherapy, and targeted therapies. Early detection through screening programs significantly improves treatment outcomes and patient survival rates.",
      date: "2023-12-20",
      author: "Dr. Datta Sonawane"
    },
    {
      id: 6,
      title: "Reconstructive Urology: Restoring Function and Quality of Life",
      excerpt: "Learn about surgical reconstruction techniques for complex urological conditions.",
      content: "Reconstructive urology focuses on restoring normal urinary and reproductive function. Procedures include urethroplasty for strictures, bladder reconstruction, and fistula repair. These complex surgeries require specialized expertise and can dramatically improve patients' quality of life.",
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