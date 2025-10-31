'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface LightboxProps {
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
  images?: string[];
  currentIndex?: number;
  onNavigate?: (newIndex: number) => void;
}

export default function Lightbox({
  imageSrc,
  imageAlt,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate
}: LightboxProps) {
  const hasMultipleImages = images.length > 1;

  const handlePrevious = () => {
    if (!onNavigate || !hasMultipleImages) return;
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    if (!onNavigate || !hasMultipleImages) return;
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  };

  useEffect(() => {
    // Handle keyboard events
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, currentIndex, images.length]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition text-4xl font-light w-12 h-12 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>

        {/* Navigation arrows - only show if multiple images */}
        {hasMultipleImages && onNavigate && (
          <>
            {/* Previous button */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition text-5xl font-light w-16 h-16 flex items-center justify-center bg-black/30 rounded-full"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition text-5xl font-light w-16 h-16 flex items-center justify-center bg-black/30 rounded-full"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/30 px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
