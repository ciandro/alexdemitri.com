'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationProps {
  currentPage?: 'home' | 'gallery' | 'blog' | 'about' | 'contact';
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/gallery', label: 'Gallery', page: 'gallery' },
    { href: '/blog', label: 'Blog', page: 'blog' },
    { href: '/about', label: 'About', page: 'about' },
    { href: '/contact', label: 'Contact', page: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-nav z-50 border-b border-gray-100">
      <div className="px-gutter-mobile md:px-gutter-desktop">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="hover:opacity-70 transition" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/images/logo.svg"
              alt="Alex Demitri"
              width={400}
              height={100}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            {links.map((link) => (
              <Link
                key={link.page}
                href={link.href}
                className={currentPage === link.page ? 'opacity-100 font-normal' : 'hover:opacity-70 transition'}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-gutter-mobile py-6 bg-white border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.page}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm uppercase tracking-wider py-2 ${
                  currentPage === link.page ? 'opacity-100 font-normal' : 'text-medium-gray hover:text-foreground transition'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
