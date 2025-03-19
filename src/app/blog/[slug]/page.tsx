import { getBlog } from "@/actions/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getBlog(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.readable_publish_date,
            dateModified: post.edited_at,
            description: post.description,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <img className="object-cover" src={post.cover_image} alt="" />
      <div className="flex items-start gap-4 max-w-[650px] my-8">
        <img
          src={post.user.profile_image}
          alt={post.user.name}
          className="rounded-full w-14 h-14 border-2 border-neutral-200 dark:border-neutral-800 shadow-sm"
        />
        <div className="space-y-1">
          <h1 className="font-bold text-3xl tracking-tight leading-tight hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
        {post.title}
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 font-medium">
        {post.user.name}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {post.readable_publish_date}
          </p>
        </Suspense>
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.body_html }}
      ></article>
    </section>
  );
}
