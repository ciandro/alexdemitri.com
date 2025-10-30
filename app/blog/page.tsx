import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getBlogPosts } from '@/lib/blog';

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="blog" />

      <main className="pt-32 pb-16 px-gutter-mobile md:px-gutter-desktop max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-16">Blog</h1>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-medium-gray text-lg mb-8">No blog posts yet.</p>
            <p className="text-sm text-medium-gray">
              To create a blog post, add a markdown file to <code className="bg-gray-100 px-2 py-1 rounded">content/blog/</code>
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-12 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-medium-gray uppercase tracking-wider">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight group-hover:opacity-70 transition">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-medium-gray leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="text-sm uppercase tracking-wider text-foreground group-hover:opacity-70 transition">
                      Read More →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
