'use client';

import { useEffect, useRef, useState } from 'react';

export default function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null);
  const [commentsEnabled, setCommentsEnabled] = useState(false);

  useEffect(() => {
    // Check if Giscus is configured
    const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
    const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

    if (!repoId || !categoryId || repoId === 'YOUR_REPO_ID' || categoryId === 'YOUR_CATEGORY_ID') {
      setCommentsEnabled(false);
      return;
    }

    if (!commentsRef.current) return;

    setCommentsEnabled(true);

    // Clear any existing script
    commentsRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'ciandro/alexdemitri.com');
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', categoryId);
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

      {!commentsEnabled ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-lg font-normal mb-4">Enable Comments</h3>
          <p className="text-medium-gray mb-4">
            To enable comments on your blog posts, follow these steps:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-medium-gray mb-6">
            <li>
              Go to your GitHub repository:{' '}
              <a
                href="https://github.com/ciandro/alexdemitri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:opacity-70"
              >
                github.com/ciandro/alexdemitri.com
              </a>
            </li>
            <li>Click on <strong>Settings</strong> → <strong>General</strong></li>
            <li>Scroll to <strong>Features</strong> section</li>
            <li>Check <strong>Discussions</strong> to enable it</li>
            <li>
              Visit{' '}
              <a
                href="https://giscus.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:opacity-70"
              >
                giscus.app
              </a>
            </li>
            <li>Enter your repo: <code className="bg-gray-100 px-2 py-1 rounded text-sm">ciandro/alexdemitri.com</code></li>
            <li>Follow the wizard and copy your <code className="bg-gray-100 px-2 py-1 rounded text-sm">repo-id</code> and <code className="bg-gray-100 px-2 py-1 rounded text-sm">category-id</code></li>
            <li>
              Create a <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env.local</code> file in your project root with:
              <pre className="bg-gray-800 text-white p-3 rounded mt-2 text-sm overflow-x-auto">
{`NEXT_PUBLIC_GISCUS_REPO_ID=your_repo_id_here
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your_category_id_here`}
              </pre>
            </li>
            <li>Commit and deploy your changes</li>
          </ol>
        </div>
      ) : (
        <div ref={commentsRef} />
      )}
    </div>
  );
}
