'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Lightbox from '@/components/Lightbox';

export default function Home() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const portfolioImages = [
    '/images/portfolio/01.jpg',
    '/images/portfolio/02.jpg',
    '/images/portfolio/03.jpg',
    '/images/portfolio/04.jpg',
    '/images/portfolio/05.jpg',
    '/images/portfolio/06.jpg',
    '/images/portfolio/07.jpg',
    '/images/portfolio/08.jpg',
    '/images/portfolio/09.jpg',
    '/images/portfolio/10.jpg',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage="home" />

      {/* Main Content - Photos First */}
      <main className="flex-1 pt-20">
        {/* Masonry Grid - Respects Original Ratios */}
        <section className="py-12 md:py-16 px-gutter-mobile md:px-gutter-desktop">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {portfolioImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                className="break-inside-avoid mb-4 hover:opacity-90 transition cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={src}
                  alt={`Portfolio image ${index + 1}`}
                  width={1200}
                  height={1600}
                  className="w-full h-auto"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <Lightbox
          imageSrc={portfolioImages[selectedImageIndex]}
          imageAlt="Portfolio image"
          onClose={() => setSelectedImageIndex(null)}
          images={portfolioImages}
          currentIndex={selectedImageIndex}
          onNavigate={setSelectedImageIndex}
        />
      )}

      {/* Footer - Minimal */}
      <footer className="bg-light-gray py-12 border-t border-gray-200">
        <div className="px-gutter-mobile md:px-gutter-desktop text-center">
          <p className="text-sm text-medium-gray tracking-wide">
            &copy; {new Date().getFullYear()} Alex Demitri Photography
          </p>
        </div>
      </footer>
    </div>
  );
}
