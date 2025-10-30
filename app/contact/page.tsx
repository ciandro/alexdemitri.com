import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-nav z-50 border-b border-gray-100">
        <div className="px-gutter-mobile md:px-gutter-desktop">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-xl font-light tracking-wide hover:opacity-70 transition">
              ALEX DEMITRI
            </Link>
            <div className="flex gap-8 text-sm uppercase tracking-wider">
              <Link href="/gallery" className="hover:opacity-70 transition">Gallery</Link>
              <Link href="/about" className="hover:opacity-70 transition">About</Link>
              <Link href="/contact" className="opacity-100 font-normal">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-16 px-gutter-mobile md:px-gutter-desktop max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-16">Contact</h1>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-0 py-3 border-b border-gray-300 bg-transparent focus:border-foreground focus:outline-none transition text-base"
                  placeholder="Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-0 py-3 border-b border-gray-300 bg-transparent focus:border-foreground focus:outline-none transition text-base"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-0 py-3 border-b border-gray-300 bg-transparent focus:border-foreground focus:outline-none transition text-base"
                  placeholder="Subject"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-0 py-3 border-b border-gray-300 bg-transparent focus:border-foreground focus:outline-none transition resize-none text-base"
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-foreground text-white text-sm uppercase tracking-wider hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12 text-medium-gray">
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider mb-2 text-foreground">Email</div>
                <a href="mailto:hello@alexdemitri.com" className="hover:text-foreground transition">
                  hello@alexdemitri.com
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider mb-2 text-foreground">Phone</div>
                <a href="tel:+1234567890" className="hover:text-foreground transition">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider mb-2 text-foreground">Location</div>
                <p>Based in Your City, Country</p>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider mb-4 text-foreground">Follow</div>
              <div className="space-y-2">
                <div><a href="#" className="hover:text-foreground transition">Instagram</a></div>
                <div><a href="#" className="hover:text-foreground transition">Twitter</a></div>
                <div><a href="#" className="hover:text-foreground transition">LinkedIn</a></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
