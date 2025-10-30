'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Lightbox from '@/components/Lightbox';
import { getCategoryBySlug, getImagesByCategory } from '@/lib/gallery';

export default function CategoryGallery() {
  const params = useParams();
  const categorySlug = params.category as string;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const category = getCategoryBySlug(categorySlug);
  const images = getImagesByCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="gallery" />

      {/* Main Content */}
      <main className="pt-40 pb-24 px-gutter-mobile md:px-gutter-desktop max-w-7xl mx-auto">
        {/* Back link */}
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition mb-12 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Gallery
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            {category.name}
          </h1>
          <p className="text-lg text-medium-gray">
            {category.description}
          </p>
        </div>

        {/* Photo Grid */}
        {images.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-medium-gray text-lg mb-4">No photos in this category yet.</p>
            <p className="text-sm text-medium-gray">
              Add images to <code className="bg-light-gray px-2 py-1 rounded">public/images/gallery/{categorySlug}/</code>
            </p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-[4/5] bg-gray-200 flex items-center justify-center text-gray-400 rounded-lg overflow-hidden hover:opacity-90 transition">
                  {/* Placeholder - will be replaced with actual images */}
                  <span className="text-sm">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        )}
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
