import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const hospitalData = [
  {
    id: 1,
    name: "Apollo Hospitals",
    location: "Mumbai Central",
    phone: "+91 98765 43210",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    services: ["Cardiology", "Oncology", "Neurology"]
  },
  {
    id: 2,
    name: "Fortis Healthcare",
    location: "Andheri West",
    phone: "+91 98765 43211",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    services: ["Orthopedics", "Gastroenterology", "Pediatrics"]
  },
  {
    id: 3,
    name: "Kokilaben Dhirubhai Ambani Hospital",
    location: "Andheri West",
    phone: "+91 98765 43212",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
    services: ["Neurosurgery", "Cardiac Surgery", "Transplants"]
  },
  {
    id: 4,
    name: "Lilavati Hospital",
    location: "Bandra West",
    phone: "+91 98765 43213",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop",
    services: ["Emergency Care", "ICU", "Radiology"]
  },
  {
    id: 5,
    name: "Breach Candy Hospital",
    location: "Breach Candy",
    phone: "+91 98765 43214",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    services: ["Maternity", "Gynecology", "General Surgery"]
  },
  {
    id: 6,
    name: "Hinduja Hospital",
    location: "Mahim",
    phone: "+91 98765 43215",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    services: ["Nephrology", "Hepatology", "Pulmonology"]
  },
  {
    id: 7,
    name: "Jaslok Hospital",
    location: "Pedder Road",
    phone: "+91 98765 43216",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
    services: ["Oncology", "Neurology", "Cardiology"]
  },
  {
    id: 8,
    name: "Bombay Hospital",
    location: "New Marine Lines",
    phone: "+91 98765 43217",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop",
    services: ["General Medicine", "Surgery", "Psychiatry"]
  },
  {
    id: 9,
    name: "Wockhardt Hospital",
    location: "Mumbai Central",
    phone: "+91 98765 43218",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    services: ["Minimal Access Surgery", "Joint Replacement", "Spine Surgery"]
  },
  {
    id: 10,
    name: "Nanavati Super Speciality Hospital",
    location: "Vile Parle West",
    phone: "+91 98765 43219",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    services: ["Robotic Surgery", "Cancer Care", "Heart Care"]
  }
];

const AffiliateHospitals = () => {
  const [ref, inView] = useScrollAnimation();

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Affiliate Hospitals</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We collaborate with leading healthcare institutions to provide comprehensive medical care
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {hospitalData.map((hospital) => (
                <CarouselItem key={hospital.id} className="md:basis-1/2">
                  <div className="p-1">
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={hospital.image} 
                          alt={hospital.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">{hospital.name}</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-foreground/70">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{hospital.location}</span>
                          </div>
                          <div className="flex items-center text-foreground/70">
                            <Phone className="h-4 w-4 mr-2" />
                            <span>{hospital.phone}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hospital.services.slice(0, 2).map((service, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                          {hospital.services.length > 2 && (
                            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                              +{hospital.services.length - 2} more
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <Link to="/affiliate-hospitals">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <ExternalLink className="mr-2 h-5 w-5" />
              Check More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AffiliateHospitals;