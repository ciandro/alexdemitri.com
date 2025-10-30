import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getBlogPosts } from '@/lib/blog';

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="blog" />

      <main className="pt-40 pb-24 px-gutter-mobile md:px-gutter-desktop max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold tracking-tight mb-6 text-foreground">
            Blog
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mb-6"></div>
          <p className="text-xl text-medium-gray font-light max-w-2xl">
            Thoughts, stories, and insights from behind the lens
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24">
            <div className="bg-white rounded-3xl shadow-lg p-12 max-w-2xl mx-auto">
              <p className="text-medium-gray text-xl mb-6">No blog posts yet.</p>
              <p className="text-sm text-medium-gray">
                To create a blog post, add a markdown file to <code className="bg-light-gray px-3 py-1 rounded-lg">content/blog/</code>
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <time
                        dateTime={post.date}
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-4 py-2 rounded-full"
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold tracking-tight mb-4 text-foreground group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-lg text-medium-gray leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-4 transition-all">
                      Read Article
                      <span className="text-lg">→</span>
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
