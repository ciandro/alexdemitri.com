import { notFound } from 'next/navigation';
import Link from 'next/link';
import { marked } from 'marked';
import Navigation from '@/components/Navigation';
import Comments from '@/components/Comments';
import { getBlogPost, getBlogPosts } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = marked(post.content);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-32 pb-16 px-gutter-mobile md:px-gutter-desktop max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-sm uppercase tracking-wider text-medium-gray hover:text-foreground transition mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        {/* Post header */}
        <article>
          <header className="mb-12">
            <time
              dateTime={post.date}
              className="text-sm text-medium-gray uppercase tracking-wider"
            >
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mt-4 mb-6">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-medium-gray font-light leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Post content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-light prose-headings:tracking-tight
              prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
              prose-p:text-medium-gray prose-p:leading-relaxed
              prose-a:text-foreground prose-a:underline hover:prose-a:opacity-70
              prose-img:rounded-lg
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>

        {/* Comments section */}
        <Comments />
      </main>
    </div>
  );
}
