How to Use the New Features

Adding Cover Images to Blog Posts

In your markdown frontmatter, add a coverImage field:

  ---
title: "My Blog Post"
date: "2025-10-30"
excerpt: "A brief description"
coverImage: "/images/blog/my-cover-image.jpg"
  ---

Image Layout Options in Blog Posts

1. Default (Centered, Full-Width):
   ![Alt text](/images/photo.jpg)

2. Sized Images (Centered):
   <img src="/images/photo.jpg" alt="Description" class="img-small" />
   <img src="/images/photo.jpg" alt="Description" class="img-medium" />
   <img src="/images/photo.jpg" alt="Description" class="img-large" />

3. Newspaper-Style Indented Images:
  <!-- Float left with text wrapping around -->
  <img src="/images/photo.jpg" alt="Description" class="img-indent-left" />

  <!-- Float right with text wrapping around -->
  <img src="/images/photo.jpg" alt="Description" class="img-indent-right" />

  <!-- Clear floats after wrapped content -->
  <div class="clear"></div>

4. Images with Captions:
  <figure>
    <img src="/images/venice.jpg" alt="Venice street scene" />
    <figcaption>Venice, Italy 2023</figcaption>
  </figure>