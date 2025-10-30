# Blog Posts

## How to Create a New Blog Post

1. Create a new `.md` file in this directory (`content/blog/`)
2. Name it using lowercase and hyphens (e.g., `my-photography-tips.md`)
3. Add frontmatter at the top with title, date, and excerpt:

```markdown
---
title: "Your Blog Post Title"
date: "2025-10-29"
excerpt: "A brief summary of your blog post that will appear on the blog listing page."
---

Your blog post content goes here...
```

## Frontmatter Fields

- **title**: The title of your blog post (required)
- **date**: Publication date in YYYY-MM-DD format (required)
- **excerpt**: A short description that appears on the blog listing page (optional)
- **coverImage**: Path to a cover image (optional, e.g., `/images/blog/my-image.jpg`)

## Writing Content

You can use standard Markdown formatting:

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[link text](https://example.com)`
- **Images**: `![alt text](/images/blog/photo.jpg)`
- **Lists**: Use `-` or `1.` for bullets and numbered lists
- **Code**: Use backticks for inline code or triple backticks for code blocks

## Comments

Comments are powered by Giscus (GitHub Discussions). To enable comments:

1. Go to https://giscus.app
2. Enter your repo: `ciandro/alexdemitri.com`
3. Follow the setup instructions
4. Update the `data-repo-id` and `data-category-id` in `components/Comments.tsx`

## Example Post Structure

```markdown
---
title: "Photography Tips for Beginners"
date: "2025-10-29"
excerpt: "Essential tips to get started with photography and improve your skills."
---

# Photography Tips for Beginners

Introduction paragraph...

## Tip 1: Understand Lighting

Content about lighting...

## Tip 2: Composition Matters

Content about composition...

![Example Photo](/images/blog/composition-example.jpg)

## Conclusion

Wrap up your thoughts...
```
