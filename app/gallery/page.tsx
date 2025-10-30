import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { galleryCategories } from '@/lib/gallery';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="gallery" />

      {/* Main Content */}
      <main className="pt-40 pb-24 px-gutter-mobile md:px-gutter-desktop max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Gallery
          </h1>
          <p className="text-lg text-medium-gray max-w-2xl">
            Explore my photography through different themes and styles
          </p>
        </div>

        {/* Category Tiles */}
        <div className="grid md:grid-cols-2 gap-8">
          {galleryCategories.map((category) => (
            <Link
              key={category.id}
              href={`/gallery/${category.slug}`}
              className="group block"
            >
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-accent transition-colors">
                {/* Cover Image */}
                <div className="relative aspect-[4/3] bg-gray-200">
                  <Image
                    src={category.coverImage}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-base text-medium-gray">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
