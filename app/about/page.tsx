import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="about" />

      {/* Main Content */}
      <main className="pt-32 pb-16 px-gutter-mobile md:px-gutter-desktop max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-16">About</h1>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="aspect-[4/5] relative overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Alex Demitri"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-medium-gray">
            <p>
              Hello! I'm Alex Demitri, a passionate photographer dedicated to capturing
              the beauty and emotion of life's precious moments.
            </p>
            <p>
              With years of experience in various photography styles, from portraits
              to landscapes, I strive to tell compelling visual stories through my lens.
            </p>
            <p>
              Every photograph tells a story. My goal is to capture authentic moments
              that resonate with emotion and meaning.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-light tracking-wide mb-6 uppercase text-sm">Services</h2>
            <div className="grid md:grid-cols-2 gap-4 text-medium-gray">
              <div>Portrait Photography</div>
              <div>Event & Wedding Photography</div>
              <div>Landscape Photography</div>
              <div>Commercial Photography</div>
              <div>Photo Editing & Retouching</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
