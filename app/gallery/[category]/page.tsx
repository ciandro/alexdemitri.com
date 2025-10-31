'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Lightbox from '@/components/Lightbox';
import { getCategoryBySlug, getImagesByCategory } from '@/lib/gallery';

export default function CategoryGallery() {
  const params = useParams();
  const categorySlug = params.category as string;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const category = getCategoryBySlug(categorySlug);
  const images = getImagesByCategory(categorySlug);
  const imageSources = images.map(img => img.src);

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
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -150px 0px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.03,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden hover:opacity-90 transition">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <Lightbox
          imageSrc={imageSources[selectedImageIndex]}
          imageAlt="Gallery image"
          onClose={() => setSelectedImageIndex(null)}
          images={imageSources}
          currentIndex={selectedImageIndex}
          onNavigate={setSelectedImageIndex}
        />
      )}
    </div>
  );
}
