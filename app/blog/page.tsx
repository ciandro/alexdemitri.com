import Link from 'next/link';
import Image from 'next/image';
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="space-y-4">
                  {/* Cover Image */}
                  {post.coverImage && (
                    <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:opacity-90 transition"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Date */}
                  <time
                    dateTime={post.date}
                    className="block text-sm font-medium text-medium-gray"
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-sm text-medium-gray leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read More */}
                  <div className="text-sm font-medium text-accent">
                    Read more →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
