import Navigation from '@/components/Navigation';

export default function Gallery() {
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

        {/* Photo Grid - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {/* Mix of different sized images for visual interest */}
          <div className="col-span-2 aspect-[3/2] bg-gray-200 hover:opacity-90 transition cursor-pointer">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              Photo 1
            </div>
          </div>

          {[2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 hover:opacity-90 transition cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Photo {i}
              </div>
            </div>
          ))}

          <div className="aspect-[2/3] bg-gray-200 hover:opacity-90 transition cursor-pointer">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              Photo 8
            </div>
          </div>

          {[9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 hover:opacity-90 transition cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Photo {i}
              </div>
            </div>
          ))}

          <div className="col-span-2 aspect-[2/1] bg-gray-200 hover:opacity-90 transition cursor-pointer">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              Photo 13
            </div>
          </div>

          {[14, 15, 16, 17, 18, 19, 20].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 hover:opacity-90 transition cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Photo {i}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
