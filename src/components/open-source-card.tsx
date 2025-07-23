"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDownIcon, ChevronUpIcon, ExternalLinkIcon, GitBranchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface OpenSourceContribution {
  organization: string;
  logoUrl: string;
  href: string;
  totalPRs: number;
  period: string;
  description: string;
  pullRequests: readonly {
    title: string;
    href: string;
    status: string;
    date: string;
    technologies: readonly string[];
  }[];
}

interface Props {
  contribution: OpenSourceContribution;
}

export function OpenSourceCard({ contribution }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="group relative overflow-hidden border-2 border-muted/20 bg-gradient-to-br from-background via-background to-muted/5 hover:border-primary/30 hover:shadow-2xl transition-all duration-700 ease-out backdrop-blur-sm">
      {/* Dynamic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
      
      <CardHeader className="relative flex flex-row items-start gap-4 pb-4 z-10">
        <div className="relative">
          <Avatar className="size-16 border-2 border-primary/20 shadow-lg group-hover:border-primary/50 transition-all duration-500 ring-2 ring-transparent group-hover:ring-primary/20">
            <AvatarImage 
              alt={contribution.organization} 
              src={contribution.logoUrl}
              className="object-contain p-1.5 group-hover:scale-110 transition-transform duration-500"
            />
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-bold text-lg">
              {contribution.organization[0]}
            </AvatarFallback>
          </Avatar>
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10" />
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <Link
              href={contribution.href}
              target="_blank"
              className="group/link inline-flex items-center gap-2 font-bold text-lg hover:text-primary transition-all duration-300 transform group-hover:translate-x-1"
            >
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text group-hover/link:from-primary group-hover/link:to-primary/80 transition-all duration-300">
                {contribution.organization}
              </span>
              <ExternalLinkIcon className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
            </Link>
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-primary/15 to-secondary/15 border-primary/30 text-primary font-bold px-4 py-1.5 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <GitBranchIcon className="h-3 w-3 mr-1" />
              {contribution.totalPRs} PRs
            </Badge>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <div className="h-1 w-8 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
            </div>
            <span className="text-sm text-muted-foreground font-medium bg-muted/30 px-2 py-1 rounded-md">
              {contribution.period}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
            {contribution.description}
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="relative pt-0 z-10">
        <div className="space-y-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full group/btn flex items-center justify-between p-4 bg-gradient-to-r from-muted/30 to-muted/10 hover:from-primary/10 hover:to-secondary/10 rounded-xl border border-muted/20 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-md"
          >
            <span className="font-medium text-sm flex items-center gap-2">
              <GitBranchIcon className="h-4 w-4 text-primary" />
              View Pull Requests
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent ml-2 group-hover/btn:from-primary/50 transition-all duration-300" />
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {contribution.pullRequests.length}
              </Badge>
              {isExpanded ? (
                <ChevronUpIcon className="h-4 w-4 text-primary transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 text-primary transition-transform duration-300 group-hover/btn:translate-y-0.5" />
              )}
            </div>
          </button>
          
          {isExpanded && (
            <div className="space-y-3 animate-in slide-in-from-top-2 duration-500">
              {contribution.pullRequests.map((pr, index) => (
                <div
                  key={pr.href}
                  className="group/pr p-4 bg-gradient-to-r from-background to-muted/20 rounded-xl border border-muted/20 hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideUp 0.5s ease-out forwards'
                  }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 to-secondary/50 rounded-l-xl opacity-0 group-hover/pr:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 space-y-2">
                      <Link
                        href={pr.href}
                        target="_blank"
                        className="group/link inline-flex items-start gap-2 font-medium text-sm hover:text-primary transition-colors duration-300"
                      >
                        <span className="line-clamp-2 group-hover/link:text-primary">
                          {pr.title}
                        </span>
                        <ExternalLinkIcon className="h-3 w-3 mt-0.5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                      </Link>
                      
                      <div className="flex flex-wrap gap-2">
                        {pr.technologies.map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-gradient-to-r from-muted/50 to-muted/30 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:scale-105"
                            style={{
                              animationDelay: `${(index * 100) + (techIndex * 50)}ms`,
                              animation: 'fadeIn 0.5s ease-out forwards'
                            }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant={pr.status === "merged" ? "default" : "secondary"}
                        className={`text-xs font-medium ${
                          pr.status === "merged"
                            ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 border-green-500/30"
                            : "bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 border-orange-500/30"
                        } hover:scale-110 transition-transform duration-200`}
                      >
                        {pr.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono bg-muted/30 px-2 py-1 rounded">
                        {pr.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
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
