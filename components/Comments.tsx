'use client';

import { useEffect, useRef } from 'react';

export default function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentsRef.current) return;

    // Clear any existing script
    commentsRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'ciandro/alexdemitri.com');
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID'); // You'll need to get this from giscus.app
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID'); // You'll need to get this from giscus.app
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true;

    commentsRef.current.appendChild(script);
  }, []);

  return (
    <div className="mt-16 pt-16 border-t border-gray-200">
      <h2 className="text-2xl font-light tracking-wide mb-8 uppercase text-sm">Comments</h2>
      <div ref={commentsRef} />
    </div>
  );
}
