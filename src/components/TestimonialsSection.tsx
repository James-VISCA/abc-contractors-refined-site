
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      project: 'New Kitchen',
      content: 'ABC Contractors transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of work exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Mike Thompson',
      project: 'Bathroom Renovation',
      content: 'Professional, reliable, and skilled. The team completed our bathroom renovation on time and within budget. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emma Davis',
      project: 'Garage Conversion',
      content: 'Exceptional craftsmanship and excellent communication throughout the project. Our garage conversion has added significant value to our home.',
      rating: 5
    },
    {
      name: 'David Wilson',
      project: 'Home Extension',
      content: 'From planning to completion, ABC Contractors delivered outstanding results. The new extension seamlessly blends with our existing home.',
      rating: 5
    },
    {
      name: 'Lisa Brown',
      project: 'Patio Installation',
      content: 'Beautiful patio installation that has transformed our outdoor space. The quality of materials and workmanship is second to none.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 heading-spacing">
            Client <span className="font-medium text-yellow-500">Testimonials</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied clients have to say
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="glassmorphic-card p-6 h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-500 fill-current" size={20} />
                      ))}
                    </div>
                    
                    <p className="text-white/90 mb-6 text-body italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="mt-auto">
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-yellow-400 text-sm">Project: {testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="glassmorphic text-white hover:text-yellow-400" />
          <CarouselNext className="glassmorphic text-white hover:text-yellow-400" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
