import Link from 'next/link';
import Image from 'next/image';

interface NavigationProps {
  currentPage?: 'home' | 'gallery' | 'blog' | 'about' | 'contact';
}

export default function Navigation({ currentPage }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-nav z-50 border-b border-gray-100">
      <div className="px-gutter-mobile md:px-gutter-desktop">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="hover:opacity-70 transition">
            <Image
              src="/images/logo.svg"
              alt="Alex Demitri"
              width={240}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <div className="flex gap-8 text-sm uppercase tracking-wider">
            <Link
              href="/gallery"
              className={currentPage === 'gallery' ? 'opacity-100 font-normal' : 'hover:opacity-70 transition'}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className={currentPage === 'blog' ? 'opacity-100 font-normal' : 'hover:opacity-70 transition'}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={currentPage === 'about' ? 'opacity-100 font-normal' : 'hover:opacity-70 transition'}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={currentPage === 'contact' ? 'opacity-100 font-normal' : 'hover:opacity-70 transition'}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
