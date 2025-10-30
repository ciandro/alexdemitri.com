export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">Alex Demitri</div>
            <div className="flex gap-8">
              <a href="/" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Home</a>
              <a href="/gallery" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Gallery</a>
              <a href="/about" className="hover:text-gray-600 dark:hover:text-gray-400 transition">About</a>
              <a href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Alex Demitri
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Capturing moments, creating memories
            </p>
            <a
              href="/gallery"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Gallery
            </a>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for featured images */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="text-gray-400">Image {i}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Alex Demitri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
