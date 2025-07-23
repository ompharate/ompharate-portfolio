"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface OpenSourceContribution {
  organization: string;
  logoUrl: string;
  href: string;
  totalPRs: number;
  period: string;
  description: string;
  pullRequests: {
    title: string;
    href: string;
    status: string;
    date: string;
    technologies: string[];
  }[];
}

interface Props {
  contribution: OpenSourceContribution;
}

export function OpenSourceCard({ contribution }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group relative flex flex-col overflow-hidden border-2 border-transparent bg-gradient-to-br from-background to-muted/20 hover:border-primary/20 hover:shadow-xl transition-all duration-500 ease-out h-full backdrop-blur-sm">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative flex flex-row items-start gap-4 pb-4 z-10">
        <div className="relative">
          <Avatar className="size-14 border-2 border-primary/20 shadow-lg group-hover:border-primary/40 transition-all duration-300">
            <AvatarImage 
              alt={contribution.organization} 
              src={contribution.logoUrl}
              className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
            />
            <AvatarFallback className="bg-gradient-to-br from-primary/10 to-secondary/10 text-primary font-bold">
              {contribution.organization[0]}
            </AvatarFallback>
          </Avatar>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <Link
              href={contribution.href}
              target="_blank"
              className="font-bold text-lg hover:text-primary transition-colors duration-300 group-hover:translate-x-1 transform ease-out"
            >
              {contribution.organization}
            </Link>
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-primary font-semibold px-3 py-1 hover:scale-105 transition-transform duration-200"
            >
              {contribution.totalPRs} PRs
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              {contribution.period}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative flex-1 pb-6 z-10">
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {contribution.description}
        </p>
        
        {/* Enhanced Show/Hide PRs Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group/button flex items-center gap-3 text-sm font-semibold text-primary hover:text-primary/80 transition-all duration-300 mb-4 p-2 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/20"
        >
          <div className="flex items-center gap-2">
            {isExpanded ? "Hide PRs" : "View PRs"}
            <div className="relative">
              {isExpanded ? (
                <ChevronUpIcon className="size-4 group-hover/button:translate-y-[-2px] transition-transform duration-200" />
              ) : (
                <ChevronDownIcon className="size-4 group-hover/button:translate-y-[2px] transition-transform duration-200" />
              )}
            </div>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
        </button>

        {/* Enhanced PR List with animations */}
        <div className={`transition-all duration-500 ease-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="space-y-3">
            {contribution.pullRequests.map((pr, index) => (
              <div
                key={index}
                className="group/pr relative border border-border/50 rounded-xl p-4 bg-gradient-to-r from-muted/30 to-muted/10 hover:from-primary/5 hover:to-secondary/5 hover:border-primary/30 transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isExpanded ? 'slideInUp 0.3s ease-out forwards' : 'none'
                }}
              >
                {/* Subtle left border accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 to-secondary/50 rounded-l-xl opacity-0 group-hover/pr:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-start justify-between mb-3">
                  <Link
                    href={pr.href}
                    target="_blank"
                    className="text-sm font-medium hover:text-primary transition-colors duration-200 line-clamp-2 flex-1 pr-2 group-hover/pr:translate-x-1 transform ease-out"
                  >
                    {pr.title}
                  </Link>
                  <Badge 
                    variant={pr.status === "merged" ? "default" : "secondary"}
                    className={`ml-2 text-xs font-medium px-2 py-1 ${
                      pr.status === "merged" 
                        ? "bg-green-500/10 text-green-600 border-green-500/20" 
                        : "bg-orange-500/10 text-orange-600 border-orange-500/20"
                    } hover:scale-105 transition-transform duration-200`}
                  >
                    {pr.status}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {pr.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs px-2 py-0.5 bg-background/50 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-colors duration-200"
                        style={{ 
                          animationDelay: `${(index * 100) + (techIndex * 50)}ms`,
                          animation: isExpanded ? 'fadeIn 0.4s ease-out forwards' : 'none'
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span className="text-xs text-muted-foreground font-medium">
                      {pr.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </Card>
  );
}
