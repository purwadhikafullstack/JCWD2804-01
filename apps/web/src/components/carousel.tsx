'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const carousel = () => {
  const autoplayPlugin = React.useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: true }),
    [],
  );

  const images = ['hotel4.jpeg', 'hotel3.jpeg', 'hotel1.avif', 'hotel2.jpg'];

  const handleMouseEnter = () => {
    autoplayPlugin.stop();
  };

  const handleMouseLeave = () => {
    autoplayPlugin.play();
  };

  return (
    <div className="flex justify-center bg-black text-white">
      <Carousel
        plugins={[autoplayPlugin]}
        className="w-[100%] h-[480px] bg-gray-200 z-[0]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className=" h-[480px]">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default carousel;
