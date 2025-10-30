import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getBlogPosts } from '@/lib/blog';

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="blog" />

      <main className="pt-40 pb-24 px-gutter-mobile md:px-gutter-desktop max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Blog
          </h1>
          <p className="text-lg text-medium-gray max-w-2xl">
            Thoughts, stories, and insights from behind the lens
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="py-16">
            <p className="text-medium-gray text-lg mb-4">No blog posts yet.</p>
            <p className="text-sm text-medium-gray">
              To create a blog post, add a markdown file to <code className="bg-light-gray px-2 py-1 rounded">content/blog/</code>
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-12 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="space-y-4">
                    <time
                      dateTime={post.date}
                      className="text-sm font-medium text-medium-gray"
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-base text-medium-gray leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="text-sm font-medium text-accent">
                      Read more →
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
