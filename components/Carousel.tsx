"use client";

import { useState } from 'react';
import Image from 'next/image';
import CarouselButton from './CarouselButton';

const images = [
  'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/macbooks_apple_1200x768.jpeg?size=1200:675',
  'https://www.apple.com/newsroom/images/product/mac/standard/Apple_next-generation-mac-macbookair-macbookpro-mac-mini_11102020_Full-Bleed-Image.jpg.large.jpg',
  'https://www.channelnews.com.au/wp-content/uploads/2021/03/macbook-pro-2021-1.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveCarousel = (direction:any) => {
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden border-2 border-gray-300 rounded-lg">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <Image key={index} src={src} width={850} height={450} alt={`Slide ${index}`} className="w-full object-cover" />
        ))}
      </div>
      <CarouselButton direction="left" onClick={() => moveCarousel(-1)} />
      <CarouselButton direction="right" onClick={() => moveCarousel(1)} />
    </div>
  );
};

export default Carousel;
