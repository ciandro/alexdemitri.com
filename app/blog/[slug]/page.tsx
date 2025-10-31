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

      <main className="pt-40 pb-24 px-gutter-mobile md:px-gutter-desktop max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition mb-12 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Blog
        </Link>

        {/* Post header */}
        <article className="mb-12">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-8">
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
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-lg md:text-xl text-dark-gray leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Post content - Newspaper style */}
          <div className="blog-content">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-sans prose-headings:font-bold prose-headings:text-foreground
                prose-h1:text-4xl prose-h1:mb-4 prose-h1:mt-12
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                prose-p:text-lg prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-accent prose-a:underline hover:prose-a:text-accent-light
                prose-strong:font-semibold prose-strong:text-foreground
                prose-em:italic prose-em:text-foreground
                prose-img:rounded-none prose-img:my-10 prose-img:w-full prose-img:mx-auto
                prose-code:bg-light-gray prose-code:text-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-base
                prose-pre:bg-light-gray prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:my-6
                prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:text-medium-gray
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-lg prose-li:text-foreground prose-li:leading-relaxed prose-li:mb-2
                prose-hr:border-gray-300 prose-hr:my-12
                prose-figure:my-10
                prose-figcaption:text-center prose-figcaption:text-base prose-figcaption:text-medium-gray prose-figcaption:mt-3 prose-figcaption:italic"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </article>

        {/* Comments section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <Comments />
        </div>
      </main>
    </div>
  );
}
