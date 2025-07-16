import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Globe, Star, Clock, Users } from 'lucide-react';

const hospitalData = [
  {
    id: 1,
    name: "Apollo Hospitals",
    location: "Mumbai Central",
    phone: "+91 98765 43210",
    website: "www.apollohospitals.com",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    services: ["Cardiology", "Oncology", "Neurology", "Orthopedics"],
    rating: 4.8,
    established: "1983",
    beds: "500+"
  },
  {
    id: 2,
    name: "Fortis Healthcare",
    location: "Andheri West",
    phone: "+91 98765 43211",
    website: "www.fortishealthcare.com",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    services: ["Orthopedics", "Gastroenterology", "Pediatrics", "Dermatology"],
    rating: 4.7,
    established: "2001",
    beds: "300+"
  },
  {
    id: 3,
    name: "Kokilaben Dhirubhai Ambani Hospital",
    location: "Andheri West",
    phone: "+91 98765 43212",
    website: "www.kokilabenhospital.com",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
    services: ["Neurosurgery", "Cardiac Surgery", "Transplants", "Urology"],
    rating: 4.9,
    established: "2009",
    beds: "750+"
  },
  {
    id: 4,
    name: "Lilavati Hospital",
    location: "Bandra West",
    phone: "+91 98765 43213",
    website: "www.lilavatihospital.com",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop",
    services: ["Emergency Care", "ICU", "Radiology", "Pathology"],
    rating: 4.6,
    established: "1978",
    beds: "323+"
  },
  {
    id: 5,
    name: "Breach Candy Hospital",
    location: "Breach Candy",
    phone: "+91 98765 43214",
    website: "www.breachcandyhospital.org",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    services: ["Maternity", "Gynecology", "General Surgery", "Anesthesia"],
    rating: 4.5,
    established: "1950",
    beds: "200+"
  },
  {
    id: 6,
    name: "Hinduja Hospital",
    location: "Mahim",
    phone: "+91 98765 43215",
    website: "www.hindujahospital.com",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    services: ["Nephrology", "Hepatology", "Pulmonology", "Rheumatology"],
    rating: 4.7,
    established: "1951",
    beds: "450+"
  },
  {
    id: 7,
    name: "Jaslok Hospital",
    location: "Pedder Road",
    phone: "+91 98765 43216",
    website: "www.jaslokhospital.net",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
    services: ["Oncology", "Neurology", "Cardiology", "Endocrinology"],
    rating: 4.6,
    established: "1973",
    beds: "350+"
  },
  {
    id: 8,
    name: "Bombay Hospital",
    location: "New Marine Lines",
    phone: "+91 98765 43217",
    website: "www.bombayhospital.com",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop",
    services: ["General Medicine", "Surgery", "Psychiatry", "Rehabilitation"],
    rating: 4.4,
    established: "1952",
    beds: "830+"
  },
  {
    id: 9,
    name: "Wockhardt Hospital",
    location: "Mumbai Central",
    phone: "+91 98765 43218",
    website: "www.wockhardthospitals.com",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    services: ["Minimal Access Surgery", "Joint Replacement", "Spine Surgery", "Urology"],
    rating: 4.5,
    established: "2000",
    beds: "350+"
  },
  {
    id: 10,
    name: "Nanavati Super Speciality Hospital",
    location: "Vile Parle West",
    phone: "+91 98765 43219",
    website: "www.nanavati.com",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    services: ["Robotic Surgery", "Cancer Care", "Heart Care", "Organ Transplant"],
    rating: 4.8,
    established: "1950",
    beds: "350+"
  }
];

const AffiliateHospitalsPage = () => {
  return (
    <>
      <Helmet>
        <title>Affiliate Hospitals - Dr. Datta Sonawane | Partner Healthcare Network</title>
        <meta name="description" content="Explore our network of affiliate hospitals where Dr. Datta Sonawane provides expert urological care. Quality healthcare across multiple locations." />
        <meta name="keywords" content="affiliate hospitals, partner hospitals, healthcare network, urology services, Dr. Datta Sonawane" />
        <meta property="og:title" content="Affiliate Hospitals - Dr. Datta Sonawane" />
        <meta property="og:description" content="Quality healthcare through our network of affiliate hospitals" />
        <link rel="canonical" href="/affiliate-hospitals" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Affiliate Hospitals</h1>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                We partner with leading healthcare institutions across Mumbai to provide you with 
                comprehensive medical care and convenient access to specialized urological services.
              </p>
            </div>
          </div>
        </section>

        {/* Hospitals Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hospitalData.map((hospital, index) => (
                <Card 
                  key={hospital.id} 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={hospital.image} 
                      alt={hospital.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold">{hospital.name}</h3>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm font-semibold">{hospital.rating}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-foreground/70 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{hospital.location}</span>
                      </div>
                      <div className="flex items-center text-foreground/70 text-sm">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{hospital.phone}</span>
                      </div>
                      <div className="flex items-center text-foreground/70 text-sm">
                        <Globe className="h-4 w-4 mr-2" />
                        <span>{hospital.website}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>Est. {hospital.established}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>{hospital.beds} beds</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {hospital.services.slice(0, 3).map((service, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                        {hospital.services.length > 3 && (
                          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                            +{hospital.services.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      View Details
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

export default AffiliateHospitalsPage;