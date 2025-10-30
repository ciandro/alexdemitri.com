import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="about" />

      {/* Main Content */}
      <main className="pt-40 pb-24 px-gutter-mobile md:px-gutter-desktop max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold tracking-tight mb-6 text-foreground">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start mb-32">
          {/* Image Column */}
          <div className="lg:col-span-2">
            <div className="sticky top-32">
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl shadow-lg">
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
          <div className="lg:col-span-3 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl md:text-2xl leading-relaxed text-dark-gray font-light mb-8">
                Hello! I'm Alex Demitri, a passionate photographer dedicated to capturing
                the beauty and emotion of life's precious moments.
              </p>
              <p className="text-lg leading-relaxed text-medium-gray mb-6">
                With years of experience in various photography styles, from portraits
                to landscapes, I strive to tell compelling visual stories through my lens.
              </p>
              <p className="text-lg leading-relaxed text-medium-gray">
                Every photograph tells a story. My goal is to capture authentic moments
                that resonate with emotion and meaning, creating timeless images that you'll
                treasure for years to come.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-3xl shadow-lg p-10 md:p-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-4 text-foreground">
              Services
            </h2>
            <p className="text-lg text-medium-gray mb-12">
              Comprehensive photography solutions tailored to your needs
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Portrait Photography', desc: 'Capturing personality and emotion' },
                { title: 'Event & Wedding Photography', desc: 'Documenting your special moments' },
                { title: 'Landscape Photography', desc: 'Natural beauty through the lens' },
                { title: 'Commercial Photography', desc: 'Professional imagery for your brand' },
                { title: 'Photo Editing & Retouching', desc: 'Perfecting every detail' },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-border hover:border-accent-light hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-medium-gray">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
