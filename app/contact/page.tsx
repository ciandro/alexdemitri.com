import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="contact" />

      {/* Hero Image - 21:9 aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Main Content */}
      <main className="pt-16 pb-16 px-gutter-mobile md:px-gutter-desktop max-w-5xl mx-auto">
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
                  +1 (208) 576-6767
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider mb-2 text-foreground">Location</div>
                <p>Based in Boise, Idaho</p>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider mb-4 text-foreground">Follow</div>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/thephotosandro/"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6 stroke-medium-gray group-hover:stroke-foreground transition-colors"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/alessandrodemitri/"
                  className="group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 stroke-medium-gray group-hover:stroke-foreground transition-colors"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
