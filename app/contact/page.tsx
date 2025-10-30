import Link from 'next/link';

export default function Contact() {
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
              <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-400 transition">About</Link>
              <Link href="/contact" className="text-gray-900 dark:text-white font-semibold">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent outline-none"
                  placeholder="How can I help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <a href="mailto:hello@alexdemitri.com" className="hover:text-gray-900 dark:hover:text-white transition">
                    hello@alexdemitri.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="hover:text-gray-900 dark:hover:text-white transition">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p>Based in Your City, Country</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  Instagram
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
