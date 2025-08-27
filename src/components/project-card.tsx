import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: readonly string[];
  systemLink?: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  hasSystemDesign?: boolean;
}

export function ProjectCard({
  hasSystemDesign,
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  systemLink,
  links,
  className,
}: Props) {
  const redirectToWebsite = () => {
    window.open(link, "_blank");
  };
  return (
    <Card
      className={cn(
        "group relative flex flex-col overflow-hidden h-full transition-all duration-500 ease-out",
        "bg-gradient-to-br from-background via-background to-muted/5",
        "border-2 hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/10",
        "hover:scale-[1.02] transform-gpu",
        hasSystemDesign 
          ? "border-[#211C84] dark:border-[#8B7CF8] bg-gradient-to-br from-blue-50/5 via-background to-purple-50/5" 
          : "border-muted/20 hover:border-primary/30",
        className
      )}
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer relative overflow-hidden", className)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </Link>
      <CardHeader className="px-4 py-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
            {hasSystemDesign && (
              <div className="shrink-0">
                <Badge 
                  variant="secondary" 
                  className="bg-gradient-to-r from-[#211C84] to-[#8B7CF8] text-white text-xs px-2 py-1 animate-pulse"
                >
                  System Design
                </Badge>
              </div>
            )}
          </div>
          <time className="font-mono text-sm text-muted-foreground flex items-center gap-1">
            <div className="w-1 h-1 bg-primary rounded-full"></div>
            {dates}
          </time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          {description && description.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-muted-foreground">Key Features:</h4>
              <div className="flex flex-wrap gap-2">
                {description?.map((desc, index) => (
                  <Badge
                    className={cn(
                      "px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105",
                      "border-2 bg-gradient-to-r from-background to-muted/80",
                      hasSystemDesign 
                        ? "border-[#211C84]/30 text-[#211C84] dark:border-[#8B7CF8]/50 dark:text-[#8B7CF8] hover:bg-[#211C84]/10" 
                        : "border-primary/30 text-primary hover:bg-primary/10"
                    )}
                    key={`${desc}-${index}`}
                  >
                    <span className="mr-1">•</span>
                    {desc}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4 pb-2">
        {tags && tags.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-muted-foreground">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <Badge
                  className="px-2 py-1 text-xs bg-muted/50 hover:bg-muted transition-colors duration-200 hover:scale-105 transform"
                  variant="secondary"
                  key={`${tag}-${index}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-2 flex justify-between items-center border-t border-muted/20 bg-muted/5">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge 
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-xs font-medium transition-all duration-300",
                    "bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20",
                    "border border-primary/20 hover:border-primary/40 hover:scale-105 transform",
                    "hover:shadow-lg hover:shadow-primary/20"
                  )}
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}

        {systemLink && (
          <Link href={systemLink} target="_blank" className="shrink-0">
            <button className="group relative flex flex-row items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 transform overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#211C84] via-[#8B7CF8] to-[#211C84] opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffaa40]/20 via-[#9c40ff]/20 to-[#ffaa40]/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative flex items-center gap-2 text-white">
                <svg
                  className="size-4 group-hover:rotate-12 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 15 15"
                  height="15"
                  width="15"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    fill="currentColor"
                    d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z"
                  ></path>
                </svg>
                
                <div className="h-4 w-px bg-white/30"></div>
                
                <span className="font-medium">
                  System Design
                </span>
                
                <svg
                  strokeLinecap="round"
                  strokeWidth="2"
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  height="12"
                  width="12"
                  stroke="currentColor"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    d="M0 5h7"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></path>
                  <path
                    strokeLinecap="round"
                    d="M1 1l4 4-4 4"
                    className="transition-transform duration-300"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
