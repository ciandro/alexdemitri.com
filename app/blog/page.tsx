import Navigation from '@/components/Navigation';
import BlogGrid from '@/components/BlogGrid';
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
          <BlogGrid posts={posts} />
        )}
      </main>
    </div>
  );
}
