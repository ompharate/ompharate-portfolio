import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",

};

const BLUR_FADE_DELAY = 0.04;
interface blog {
  slug:string
  title: string
  readable_publish_date: string
  description: string
  cover_image: string
  user: {
    profile_image: string
  }
}
export default async function BlogPage() {
  const posts = await getBlogPosts();
  console.log(posts)
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
      </BlurFade>
      {posts.map((post: blog, id: number) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
          <Link
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <img className="object-cover" src={post.cover_image}  />
            <div className="w-full flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <img className="rounded-full" src={post.user.profile_image} width={30} height={30} />
                <p className="tracking-tight font-bold text-2xl">{post.title}</p>
              </div>
              <p className="h-6 text-xs text-muted-foreground">
                {post.readable_publish_date}
              </p>
              <p>
                {post.description}
              </p>
            </div>
          </Link>
        </BlurFade>
      ))}
    </section>
  );
}
