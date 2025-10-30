import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold">Alex Demitri</Link>
            <div className="flex gap-8">
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Home</Link>
              <Link href="/gallery" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Gallery</Link>
              <Link href="/about" className="text-gray-900 dark:text-white font-semibold">About</Link>
              <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Your Photo</span>
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Hello! I'm Alex Demitri, a passionate photographer dedicated to capturing
              the beauty and emotion of life's precious moments.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              With years of experience in various photography styles, from portraits
              to landscapes, I strive to tell compelling visual stories through my lens.
            </p>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4">My Approach</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Every photograph tells a story. My goal is to capture authentic moments
            that resonate with emotion and meaning. Whether it's a portrait session,
            a wedding, or a landscape, I approach each project with creativity,
            professionalism, and attention to detail.
          </p>

          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
            <li>Portrait Photography</li>
            <li>Event & Wedding Photography</li>
            <li>Landscape Photography</li>
            <li>Commercial Photography</li>
            <li>Photo Editing & Retouching</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
