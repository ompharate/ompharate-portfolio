import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { OpenSourceCard } from "@/components/open-source-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/actions/blog";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { redirect } from "next/navigation";
import MaintenancePage from "./maintenance/page";

const BLUR_FADE_DELAY = 0.04;
const DATA_SYSTEM_DESIGNS = [
  {
    slug: "netflix-system-design",
    title: "Netflix Video Streaming Platform",
    problem:
      "Design a scalable video streaming service handling millions of concurrent users with low latency and high availability.",
    tags: ["Microservices", "CDN", "Load Balancing", "Caching", "AWS"],
  },
  {
    slug: "uber-system-design",
    title: "Uber Ride-Sharing Platform",
    problem:
      "Design a real-time location-based ride-sharing service with matching algorithms and payment processing.",
    tags: [
      "Geolocation",
      "Real-time",
      "Distributed Systems",
      "Payment Gateway",
    ],
  },
  {
    slug: "twitter-system-design",
    title: "Twitter Social Platform",
    problem:
      "Design a social media platform that can handle millions of tweets per second with real-time feed updates.",
    tags: ["Event Streaming", "NoSQL", "Redis", "Message Queue"],
  },
  {
    slug: "instagram-system-design",
    title: "Instagram Photo Sharing",
    problem:
      "Design a photo-sharing platform with features like filters, stories, and feed generation.",
    tags: ["Object Storage", "Content Delivery", "Image Processing", "MongoDB"],
  },
  {
    slug: "whatsapp-system-design",
    title: "WhatsApp Messaging Service",
    problem:
      "Design a messaging service with end-to-end encryption and real-time notifications.",
    tags: ["WebSocket", "Encryption", "Push Notifications", "Database"],
  },
  {
    slug: "google-drive-system-design",
    title: "Google Drive File Storage",
    problem:
      "Design a cloud storage service that allows users to upload, share, and sync files across devices.",
    tags: ["Cloud Storage", "File Sync", "Access Control", "Database"],
  },
  {
    slug: "spotify-system-design",
    title: "Spotify Music Streaming",
    problem:
      "Design a music streaming service with features like playlists, recommendations, and offline access.",
    tags: ["Audio Streaming", "Recommendation System", "Database"],
  },
  {
    slug: "linkedin-system-design",
    title: "LinkedIn Professional Network",
    problem:
      "Design a professional networking platform with job postings, connections, and messaging.",
    tags: ["Graph Database", "Search Engine", "Recommendation System"],
  },

];

export default async function Page() {
  const blogs = await getAllPosts();
  
  console.log(blogs);

  // redirect("/maintenance");  udr later
  return <MaintenancePage />;
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-2xl xl:text-5xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experiences</h2>
          </BlurFade>
          {DATA.experience.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - Present`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="open-source">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Open Source Contributions</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DATA.openSourceContributions.map((contribution, id) => (
              <BlurFade
                key={contribution.organization}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <OpenSourceCard contribution={contribution} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1 justify-center">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <Badge className="w-32 h-10 gap-2" key={skill.name}>
                  {" "}
                  <img
                    className="rounded-full"
                    width={25}
                    height={25}
                    src={skill?.url}
                    alt=""
                  />
                  {skill.name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full   py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                🟧 My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2  mx-auto">
            {DATA.megaProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <ProjectCard
                  systemLink={project.systemLink}
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  hasSystemDesign={true}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="blogs">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                🌐 Latest Blogs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Recent Articles
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sharing my thoughts and experiences through writing
                </p>
              </div>
            </div>
          </BlurFade>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-4 scrollbar-hide">
            {blogs.map((blog: any, index: number) => (
              <BlurFade
                key={blog.slug}
                delay={BLUR_FADE_DELAY * 12 + index * 0.05}
              >
                <Link
                  href={`https://ompharate.me/blog/${blog.slug}`}
                  target="_blank"
                  className="group"
                >
                  <div className="min-w-[350px] h-[400px] flex-shrink-0 snap-center rounded-xl overflow-hidden bg-card hover:bg-accent transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="relative h-52">
                      <img
                        src={blog.cover_image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={blog.user.profile_image}
                          alt="author"
                          className="w-10 h-10 rounded-full border-2 border-primary"
                        />
                        <div className="text-sm text-muted-foreground">
                          {new Date(blog.published_at).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors">
                        {blog.title.length > 50
                          ? blog.title.substring(0, 40) + "..."
                          : blog.title}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {blog.tags
                            .split(",")
                            .map((tag: string, i: number) => {
                              const variants = [
                                "default",
                                "secondary",
                                "destructive",
                                "outline",
                              ] as const;
                              const variant = variants[i % variants.length];
                              return (
                                <Badge key={i} variant={variant}>
                                  {tag.trim()}
                                </Badge>
                              );
                            })}
                        </div>
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
          <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </section>

      {/* <section id="systemdesign">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 12.5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                ⚡🖥️ System Design 
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My System Design Solutions
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Deep dives into architectural decisions and scalable solutions
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-4 scrollbar-hide">
            {(
              DATA_SYSTEM_DESIGNS as Array<{
                slug: string;
                title: string;
                problem: string;
                tags: string[];
              }>
            ).map((design, index: number) => (
              <BlurFade
                key={design.slug}
                delay={BLUR_FADE_DELAY * 13 + index * 0.05}
              >
                <Link href={`/systemdesign/${design.slug}`} className="group">
                  <div
                  className={`p-4 rounded-xl transition-all duration-300
                  ${[
                    "bg-rose-500/10",
                    "bg-emerald-500/10", 
                    "bg-amber-500/10",
                    "bg-sky-500/10",
                    "bg-purple-500/10",
                    "bg-blue-500/10",
                    "bg-pink-500/10",
                    "bg-indigo-500/10"
                  ][index % 8]} hover:bg-accent`}
                  >
                  <h3 className="text-base mb-3 group-hover:text-primary font-bold">
                    {design.title}
                  </h3>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}

      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-5">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  ⭐ Open Source Contribution & Freelancing Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I like open source and the community behind it. It fosters
                  collaboration and innovation, empowering individuals to
                  contribute and shape the future of technology. recently i have
                  contributed in 2 projects
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description[0]}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={"https://in.linkedin.com/in/ompharate11"}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
