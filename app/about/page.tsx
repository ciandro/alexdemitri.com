import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="about" />

      {/* Main Content */}
      <main className="pt-40 pb-24 px-gutter-mobile md:px-gutter-desktop max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            About Me
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20">
          {/* Image Column */}
          <div className="lg:col-span-2">
            <div className="sticky top-32">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <Image
                  src="/images/about.jpg"
                  alt="Alex Demitri"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              Hello! I'm Alex Demitri, a passionate photographer dedicated to capturing
              the beauty and emotion of life's precious moments.
            </p>
            <p className="text-base leading-relaxed text-medium-gray">
              With years of experience in various photography styles, from portraits
              to landscapes, I strive to tell compelling visual stories through my lens.
            </p>
            <p className="text-base leading-relaxed text-medium-gray">
              Every photograph tells a story. My goal is to capture authentic moments
              that resonate with emotion and meaning, creating timeless images that you'll
              treasure for years to come.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="pt-16 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Services
          </h2>
          <p className="text-base text-medium-gray mb-10">
            Comprehensive photography solutions tailored to your needs
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Portrait Photography', desc: 'Capturing personality and emotion' },
              { title: 'Event & Wedding Photography', desc: 'Documenting your special moments' },
              { title: 'Landscape Photography', desc: 'Natural beauty through the lens' },
              { title: 'Commercial Photography', desc: 'Professional imagery for your brand' },
              { title: 'Photo Editing & Retouching', desc: 'Perfecting every detail' },
            ].map((service, index) => (
              <div key={index} className="pb-6 border-b border-gray-200 last:border-0">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-medium-gray">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
