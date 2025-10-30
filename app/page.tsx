import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation currentPage="home" />

      {/* Main Content - Photos First */}
      <main className="flex-1 pt-20">
        {/* Featured Work Grid - Masonry style */}
        <section className="py-12 md:py-16 px-gutter-mobile md:px-gutter-desktop">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {/* Large featured image */}
            <div className="col-span-2 row-span-2 aspect-square bg-gray-200 hover:opacity-90 transition cursor-pointer">
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Featured Image 1
              </div>
            </div>

            {/* Regular grid items */}
            {[2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 hover:opacity-90 transition cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Image {i}
                </div>
              </div>
            ))}

            {/* Another large item */}
            <div className="col-span-2 aspect-[2/1] bg-gray-200 hover:opacity-90 transition cursor-pointer">
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Wide Image 6
              </div>
            </div>

            {[7, 8, 9, 10].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 hover:opacity-90 transition cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Image {i}
                </div>
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
