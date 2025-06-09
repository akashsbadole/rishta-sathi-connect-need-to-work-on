
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      brideName: "Priya Sharma",
      groomName: "Rahul Gupta",
      location: "Mumbai, Maharashtra",
      story: "We found each other through Rishta Sathi and it feels like a perfect match made in heaven. The detailed profiles and horoscope matching really helped us understand our compatibility.",
      weddingDate: "March 2024",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      brideName: "Anita Patel",
      groomName: "Vikash Kumar",
      location: "Ahmedabad, Gujarat",
      story: "After meeting on Rishta Sathi, we realized we shared the same values and dreams. The platform's family involvement feature made our parents feel comfortable throughout the process.",
      weddingDate: "January 2024",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      brideName: "Deepika Singh",
      groomName: "Arjun Reddy",
      location: "Bangalore, Karnataka",
      story: "The advanced search filters helped us find each other quickly. We're grateful to Rishta Sathi for bringing us together. Our families are also very happy with the match.",
      weddingDate: "February 2024",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      brideName: "Kavya Nair",
      groomName: "Rohit Mehta",
      location: "Kochi, Kerala",
      story: "We connected through the platform and found that we complement each other perfectly. The verification process gave us confidence in each other's profiles from the beginning.",
      weddingDate: "April 2024",
      image: "/placeholder.svg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-8 h-8 text-rose-500" />
            <h2 className="text-4xl font-bold text-gray-800">Success Stories</h2>
            <Heart className="w-8 h-8 text-rose-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real couples, real stories. Discover how thousands of couples found their perfect match through Rishta Sathi
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Image Section */}
                        <div className="relative">
                          <div className="aspect-square rounded-2xl bg-gradient-to-br from-rose-200 to-orange-200 flex items-center justify-center overflow-hidden">
                            <img 
                              src={testimonial.image} 
                              alt={`${testimonial.brideName} and ${testimonial.groomName}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                            <Heart className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6">
                          <div className="flex items-center space-x-1 mb-4">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>

                          <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                            "{testimonial.story}"
                          </blockquote>

                          <div className="space-y-2">
                            <div className="font-bold text-xl text-gray-800">
                              {testimonial.brideName} & {testimonial.groomName}
                            </div>
                            <div className="text-gray-600">{testimonial.location}</div>
                            <div className="text-sm text-rose-600 font-medium">
                              Married in {testimonial.weddingDate}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-rose-200 hover:border-rose-400 hover:bg-rose-50"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-6 h-6 text-rose-600" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-rose-200 hover:border-rose-400 hover:bg-rose-50"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-6 h-6 text-rose-600" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-rose-600 scale-125' 
                    : 'bg-rose-200 hover:bg-rose-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-900 to-red-900 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-xl text-rose-200 mb-6">
              Join thousands of couples who found their perfect match on Rishta Sathi
            </p>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 px-8 py-3 text-lg font-semibold">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
