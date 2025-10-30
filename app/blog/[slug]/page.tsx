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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-40 pb-24 px-gutter-mobile md:px-gutter-desktop max-w-5xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition mb-12 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Blog
        </Link>

        {/* Post header */}
        <article className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
          <header className="p-8 md:p-12 lg:p-16 border-b border-border">
            <div className="flex items-center gap-3 mb-8">
              <time
                dateTime={post.date}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-4 py-2 rounded-full"
              >
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight mb-6 text-foreground">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl md:text-2xl text-dark-gray font-light leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Post content */}
          <div className="p-8 md:p-12 lg:p-20">
            <div
              className="prose prose-xl md:prose-2xl max-w-none
                prose-headings:font-serif prose-headings:font-semibold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                prose-p:text-xl prose-p:md:text-2xl prose-p:text-dark-gray prose-p:font-light prose-p:leading-relaxed prose-p:mb-8
                prose-a:text-accent prose-a:no-underline prose-a:font-medium hover:prose-a:text-accent-light
                prose-strong:text-foreground prose-strong:font-semibold
                prose-em:italic prose-em:text-dark-gray
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-12
                prose-code:bg-light-gray prose-code:text-accent prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:font-medium
                prose-pre:bg-light-gray prose-pre:border prose-pre:border-border prose-pre:rounded-2xl prose-pre:shadow-sm prose-pre:my-8
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-light-gray prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:my-8
                prose-ul:my-8 prose-ul:space-y-3 prose-ol:my-8 prose-ol:space-y-3
                prose-li:text-dark-gray prose-li:text-lg prose-li:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </article>

        {/* Comments section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <Comments />
        </div>
      </main>
    </div>
  );
}
