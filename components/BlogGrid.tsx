import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
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
  );
}
