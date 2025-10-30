export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation - Transparent with blur */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-nav z-50 border-b border-gray-100">
        <div className="px-gutter-mobile md:px-gutter-desktop">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="text-xl font-light tracking-wide hover:opacity-70 transition">
              ALEX DEMITRI
            </a>
            <div className="flex gap-8 text-sm uppercase tracking-wider">
              <a href="/gallery" className="hover:opacity-70 transition">Gallery</a>
              <a href="/about" className="hover:opacity-70 transition">About</a>
              <a href="/contact" className="hover:opacity-70 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Minimal with large imagery */}
      <main className="flex-1 pt-20">
        <section className="relative h-[85vh] flex items-center justify-center bg-light-gray">
          <div className="text-center px-gutter-mobile md:px-gutter-desktop max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-foreground">
              Alex Demitri
            </h1>
            <p className="text-lg md:text-xl font-light text-medium-gray mb-12 tracking-wide">
              Photography
            </p>
          </div>
        </section>

        {/* Featured Work Grid - Masonry style */}
        <section className="py-16 md:py-24 px-gutter-mobile md:px-gutter-desktop">
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
