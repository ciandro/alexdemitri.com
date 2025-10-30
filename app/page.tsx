import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Home() {
  const portfolioImages = [
    { src: '/images/portfolio/01.jpg', featured: true },
    { src: '/images/portfolio/02.jpg' },
    { src: '/images/portfolio/03.jpg' },
    { src: '/images/portfolio/04.jpg' },
    { src: '/images/portfolio/05.jpg' },
    { src: '/images/portfolio/06.jpg', wide: true },
    { src: '/images/portfolio/07.jpg' },
    { src: '/images/portfolio/08.jpg' },
    { src: '/images/portfolio/09.jpg' },
    { src: '/images/portfolio/10.jpg' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage="home" />

      {/* Main Content - Photos First */}
      <main className="flex-1 pt-20">
        {/* Featured Work Grid - Masonry style */}
        <section className="py-12 md:py-16 px-gutter-mobile md:px-gutter-desktop">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden hover:opacity-90 transition cursor-pointer ${
                  image.featured
                    ? 'col-span-2 row-span-2 aspect-square'
                    : image.wide
                    ? 'col-span-2 aspect-[2/1]'
                    : 'aspect-square'
                }`}
              >
                <Image
                  src={image.src}
                  alt={`Portfolio image ${index + 1}`}
                  fill
                  sizes={
                    image.featured
                      ? '(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw'
                      : image.wide
                      ? '(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw'
                      : '(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                  }
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

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
