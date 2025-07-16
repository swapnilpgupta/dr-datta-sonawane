import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, User, Phone, FileText, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Appointment = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const treatments = [
    "Kidney Stone Treatment",
    "Prostate Disorders",
    "Urinary Tract Infections",
    "Male Infertility",
    "Laparoscopic Surgery",
    "Endourology",
    "Reconstructive Urology",
    "Pediatric Urology",
    "General Consultation",
    "Follow-up Consultation"
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.phone || !formData.treatment || !date || !formData.time) {
      toast({
        title: "Please fill all required fields",
        description: "Name, phone, treatment, date, and time are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Appointment Request Submitted!",
      description: "We'll contact you soon to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: '',
      time: '',
      message: ''
    });
    setDate(undefined);
    setIsSubmitting(false);
  };

  return (
    <section id="appointment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Book an Appointment</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule your consultation with Dr. Datta Sonawane. We're here to provide you with the best urological care.
          </p>
        </div>

        <div 
          ref={formRef}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Appointment Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
                Appointment Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address (Optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatment" className="text-sm font-medium text-foreground">
                    Treatment Required *
                  </Label>
                  <Select value={formData.treatment} onValueChange={(value) => handleInputChange('treatment', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select treatment type" />
                    </SelectTrigger>
                    <SelectContent>
                      {treatments.map((treatment) => (
                        <SelectItem key={treatment} value={treatment}>
                          {treatment}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">
                      Preferred Date *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date() || date.getDay() === 0}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-sm font-medium text-foreground">
                      Preferred Time *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Additional Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your symptoms or any specific concerns..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Book Appointment
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Appointment Information */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Clinic Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Monday - Friday</h4>
                    <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Saturday</h4>
                    <p className="text-sm text-muted-foreground">9:00 AM - 1:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sunday</h4>
                    <p className="text-sm text-muted-foreground">Emergency Only</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Emergency</h4>
                    <p className="text-sm text-muted-foreground">24/7 Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Consultation</h4>
                      <p className="text-sm text-muted-foreground">
                        Detailed discussion about your symptoms and medical history
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Examination</h4>
                      <p className="text-sm text-muted-foreground">
                        Physical examination and diagnostic tests if required
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Treatment Plan</h4>
                      <p className="text-sm text-muted-foreground">
                        Personalized treatment recommendations and follow-up plan
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Need Emergency Care?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent medical concerns, please call our emergency line or visit the nearest emergency room.
                </p>
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: +91 98765 43210
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;