export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'portraits' | 'landscapes' | 'street' | 'abstract';
}

export interface GalleryCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: '1',
    name: 'Portraits',
    slug: 'portraits',
    description: 'Capturing personality and emotion',
    coverImage: '/images/gallery/portraits/cover.jpg',
  },
  {
    id: '2',
    name: 'Landscapes',
    slug: 'landscapes',
    description: 'Natural beauty and vast horizons',
    coverImage: '/images/gallery/landscapes/cover.jpg',
  },
  {
    id: '3',
    name: 'Street',
    slug: 'street',
    description: 'Life and stories in urban spaces',
    coverImage: '/images/gallery/street/cover.jpg',
  },
  {
    id: '4',
    name: 'Abstract',
    slug: 'abstract',
    description: 'Form, texture, and visual exploration',
    coverImage: '/images/gallery/abstract/cover.jpg',
  },
];

// Placeholder images - replace with your actual images
export const galleryImages: GalleryImage[] = [
  // Portraits
  { id: 'p1', src: '/images/gallery/portraits/1.jpg', alt: 'Portrait 1', category: 'portraits' },
  { id: 'p2', src: '/images/gallery/portraits/2.jpg', alt: 'Portrait 2', category: 'portraits' },
  { id: 'p3', src: '/images/gallery/portraits/3.jpg', alt: 'Portrait 3', category: 'portraits' },
  { id: 'p4', src: '/images/gallery/portraits/4.jpg', alt: 'Portrait 4', category: 'portraits' },
  { id: 'p5', src: '/images/gallery/portraits/5.jpg', alt: 'Portrait 5', category: 'portraits' },
  { id: 'p6', src: '/images/gallery/portraits/6.jpg', alt: 'Portrait 6', category: 'portraits' },
    { id: 'p7', src: '/images/gallery/portraits/7.jpg', alt: 'Portrait 7', category: 'portraits' },
    { id: 'p8', src: '/images/gallery/portraits/8.jpg', alt: 'Portrait 8', category: 'portraits' },
    { id: 'p9', src: '/images/gallery/portraits/9.jpg', alt: 'Portrait 9', category: 'portraits' },

    // Landscapes
  { id: 'l1', src: '/images/gallery/landscapes/1.jpg', alt: 'Landscape 1', category: 'landscapes' },
  { id: 'l2', src: '/images/gallery/landscapes/2.jpg', alt: 'Landscape 2', category: 'landscapes' },
  { id: 'l3', src: '/images/gallery/landscapes/3.jpg', alt: 'Landscape 3', category: 'landscapes' },

  // Street
  { id: 's1', src: '/images/gallery/street/1.jpg', alt: 'Street 1', category: 'street' },
  { id: 's2', src: '/images/gallery/street/2.jpg', alt: 'Street 2', category: 'street' },
  { id: 's3', src: '/images/gallery/street/3.jpg', alt: 'Street 3', category: 'street' },

  // Abstract
  { id: 'a1', src: '/images/gallery/abstract/1.jpg', alt: 'Abstract 1', category: 'abstract' },
  { id: 'a2', src: '/images/gallery/abstract/2.jpg', alt: 'Abstract 2', category: 'abstract' },
  { id: 'a3', src: '/images/gallery/abstract/3.jpg', alt: 'Abstract 3', category: 'abstract' },
];

export function getImagesByCategory(category: string): GalleryImage[] {
  return galleryImages.filter(img => img.category === category);
}

export function getCategoryBySlug(slug: string): GalleryCategory | undefined {
  return galleryCategories.find(cat => cat.slug === slug);
}
