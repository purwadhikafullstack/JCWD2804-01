'use client';
import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Card = () => {
  return (
    <div className="flex justify-center bg-black text-white mb-96">
      <Carousel className="w-[100%] h-full bg-gray-200 z-[0]">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-full flex gap-5 justify-center bg-black">
                <div className="flex flex-col w-[17%] [0_2px_15px_0_rgba(0,0,0,0.35)] rounded-2xl bg-white">
                  <div className="h-36 w-full bg-gray-300 rounded-2xl"></div>
                  <div className="h-5 w-48 ml-3 mt-3 bg-gray-300 rounded-full"></div>
                  <div className="h-5 w-24 ml-3 mt-[7px] bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-56 ml-3 mt-2 mb-3 bg-gray-300 rounded-full"></div>
                  <div className="h-8 w-40 ml-3 mt-6 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-48 ml-3 mt-3 mb-3 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex flex-col w-[17%] [0_2px_15px_0_rgba(0,0,0,0.35)] rounded-2xl bg-white">
                  <div className="h-36 w-full bg-gray-300 rounded-2xl"></div>
                  <div className="h-5 w-48 ml-3 mt-3 bg-gray-300 rounded-full"></div>
                  <div className="h-5 w-24 ml-3 mt-[7px] bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-56 ml-3 mt-2 mb-3 bg-gray-300 rounded-full"></div>
                  <div className="h-8 w-40 ml-3 mt-6 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-48 ml-3 mt-3 mb-3 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex flex-col w-[17%] [0_2px_15px_0_rgba(0,0,0,0.35)] rounded-2xl bg-white">
                  <div className="h-36 w-full bg-gray-300 rounded-2xl"></div>
                  <div className="h-5 w-48 ml-3 mt-3 bg-gray-300 rounded-full"></div>
                  <div className="h-5 w-24 ml-3 mt-[7px] bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-56 ml-3 mt-2 mb-3 bg-gray-300 rounded-full"></div>
                  <div className="h-8 w-40 ml-3 mt-6 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-48 ml-3 mt-3 mb-3 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex flex-col w-[17%] [0_2px_15px_0_rgba(0,0,0,0.35)] rounded-2xl bg-white">
                  <div className="h-36 w-full bg-gray-300 rounded-2xl"></div>
                  <div className="h-5 w-48 ml-3 mt-3 bg-gray-300 rounded-full"></div>
                  <div className="h-5 w-24 ml-3 mt-[7px] bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-56 ml-3 mt-2 mb-3 bg-gray-300 rounded-full"></div>
                  <div className="h-8 w-40 ml-3 mt-6 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-48 ml-3 mt-3 mb-3 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex flex-col w-[17%] [0_2px_15px_0_rgba(0,0,0,0.35)] rounded-2xl bg-white">
                  <div className="h-36 w-full bg-gray-300 rounded-2xl"></div>
                  <div className="h-5 w-48 ml-3 mt-3 bg-gray-300 rounded-full"></div>
                  <div className="h-5 w-24 ml-3 mt-[7px] bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-56 ml-3 mt-2 mb-3 bg-gray-300 rounded-full"></div>
                  <div className="h-8 w-40 ml-3 mt-6 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-48 ml-3 mt-3 mb-3 bg-gray-300 rounded-full"></div>
                </div>
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

export default Card;
