import Link from 'next/link';

export default function Gallery() {
  // Placeholder for your actual images
  const categories = [
    { name: 'Portraits', count: 12 },
    { name: 'Landscapes', count: 24 },
    { name: 'Urban', count: 18 },
    { name: 'Events', count: 15 },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold">Alex Demitri</Link>
            <div className="flex gap-8">
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Home</Link>
              <Link href="/gallery" className="text-gray-900 dark:text-white font-semibold">Gallery</Link>
              <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-400 transition">About</Link>
              <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Gallery</h1>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{category.count} photos</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400">Photo {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
