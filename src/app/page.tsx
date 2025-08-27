
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { PullRequestsTable } from "@/components/pull-requests-table";
import { ArticlesSection } from "@/components/articles-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;


export default async function Page() {
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
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Work Experience
              </h2>
              <p className="text-muted-foreground">
                My professional journey and contributions to various organizations
              </p>
            </div>
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
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Open Source Contributions
              </h2>
              <p className="text-muted-foreground">
                All my pull requests and contributions to open source projects
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <PullRequestsTable contributions={DATA.openSourceContributions} />
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-muted-foreground">
                My academic background and qualifications
              </p>
            </div>
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
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground">
                Technologies and tools I work with to build amazing products
              </p>
            </div>
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
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Some of the projects I've built to solve real-world problems
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
   
      <section id="articles">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <ArticlesSection articles={DATA.articles} />
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
