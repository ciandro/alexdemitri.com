'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Lightbox from '@/components/Lightbox';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder for your actual images
  const categories = [
    { name: 'Portraits', count: 12 },
    { name: 'Landscapes', count: 24 },
    { name: 'Urban', count: 18 },
    { name: 'Events', count: 15 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="gallery" />

      {/* Main Content */}
      <main className="pt-32 pb-16 px-gutter-mobile md:px-gutter-desktop">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-16">Gallery</h1>

        {/* Categories - Minimal style */}
        <div className="mb-16">
          <div className="flex gap-6 text-sm uppercase tracking-wider overflow-x-auto pb-4">
            <button className="hover:opacity-70 transition whitespace-nowrap font-normal">All</button>
            {categories.map((category) => (
              <button
                key={category.name}
                className="hover:opacity-70 transition whitespace-nowrap text-medium-gray"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid - Masonry style - Respects Original Ratios */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (
            <div
              key={i}
              className="break-inside-avoid mb-4 hover:opacity-90 transition cursor-pointer"
              onClick={() => setSelectedImage(`/placeholder/photo-${i}.jpg`)}
            >
              <div className="w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm" style={{ aspectRatio: '3/4', minHeight: '300px' }}>
                Photo {i}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          imageSrc={selectedImage}
          imageAlt="Gallery image"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
