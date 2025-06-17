
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ImageCarousel = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      alt: 'Modern residential construction'
    },
    {
      src: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop',
      alt: 'Commercial building project'
    },
    {
      src: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop',
      alt: 'Luxury home renovation'
    },
    {
      src: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop',
      alt: 'Contemporary architecture'
    },
    {
      src: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop',
      alt: 'Premium construction work'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 heading-spacing">
            Our Recent <span className="font-medium">Projects</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore our portfolio of exceptional construction and renovation projects
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
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="glassmorphic-card overflow-hidden group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="p-4">
                      <p className="text-white font-light">{image.alt}</p>
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

export default ImageCarousel;
