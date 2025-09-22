"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  ExternalLinkIcon, 
  GitBranchIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "lucide-react";
import Link from "next/link";

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
  contributions: readonly OpenSourceContribution[];
}

export function PullRequestsTable({ contributions }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Flatten all pull requests from all organizations
  const allPRs = contributions.flatMap(contribution => 
    contribution.pullRequests.map(pr => ({
      ...pr,
      organization: contribution.organization,
      organizationLogo: contribution.logoUrl,
      organizationHref: contribution.href
    }))
  );

  const totalPRs = allPRs.length;
  const totalMerged = allPRs.filter(pr => pr.status === "merged").length;
  
  // Show first 3 PRs initially, rest when expanded
  const visiblePRs = isExpanded ? allPRs : allPRs.slice(0, 3);
  const hiddenCount = allPRs.length - 3;

  return (
    <Card className="overflow-hidden border-2 border-muted/20 bg-gradient-to-br from-background via-background to-muted/5">
     
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-muted/20 bg-muted/5">
              <tr className="text-left">
                <th className="p-4 font-semibold text-sm">Pull Request</th>
                <th className="p-4 font-semibold text-sm">Organization</th>
                <th className="p-4 font-semibold text-sm">Status</th>
                <th className="p-4 font-semibold text-sm">Date</th>
                <th className="p-4 font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visiblePRs.map((pr, index) => (
                <tr 
                  key={`${pr.organization}-${pr.href}-${index}`}
                  className="border-b border-muted/10 hover:bg-muted/5 transition-colors duration-200"
                >
                  <td className="p-4">
                    <div className="space-y-2">
                      <div className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors duration-200">
                        {pr.title}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {pr.technologies.map((tech, techIndex) => (
                          <Badge
                            key={`${tech}-${techIndex}`}
                            variant="outline"
                            className="text-xs py-0 px-2 h-5 bg-muted/30 hover:bg-primary/10 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8 border border-muted/20">
                        <AvatarImage 
                          src={pr.organizationLogo} 
                          alt={pr.organization}
                          className="object-contain p-1"
                        />
                        <AvatarFallback className="text-xs font-bold bg-gradient-to-br from-primary/20 to-secondary/20">
                          {pr.organization[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm">{pr.organization}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge
                      variant={pr.status === "merged" ? "default" : "secondary"}
                      className={`text-xs ${
                        pr.status === "merged"
                          ? "bg-gradient-to-r from-[#211C84]/10 to-[#8B7CF8]/10 text-[#211C84] border border-white dark:border-[#8B7CF8]/20 dark:text-[#8B7CF8] dark:bg-gradient-to-r dark:from-[#211C84]/30 dark:to-[#8B7CF8]/30 hover:from-[#211C84]/20 hover:to-[#8B7CF8]/20"
                          : "bg-orange-100 text-orange-700 border border-white dark:border-orange-200 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-200"
                      }`}
                    >
                      {pr.status === "merged" ? (
                        <CheckCircleIcon className="h-3 w-3 mr-1" />
                      ) : (
                        <ClockIcon className="h-3 w-3 mr-1" />
                      )}
                      {pr.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarIcon className="h-3 w-3" />
                      {pr.date}
                    </div>
                  </td>
                  <td className="p-4">
                    <Link
                      href={pr.href || ""}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      View PR
                      <ExternalLinkIcon className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {hiddenCount > 0 && (
          <div className="p-4 border-t border-muted/20 bg-muted/5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 rounded-lg border border-muted/20 hover:border-primary/30 transition-all duration-300 text-sm font-medium"
            >
              {isExpanded ? (
                <>
                  <ChevronUpIcon className="h-4 w-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDownIcon className="h-4 w-4" />
                  Show {hiddenCount} More Pull Requests
                </>
              )}
            </button>
          </div>
        )}
      </CardContent>

      <div className="p-4 bg-muted/5 border-t border-muted/20">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {totalPRs} total contributions across {contributions.length} organizations
          </span>
          {/* <span>
            {Math.round((totalMerged / totalPRs) * 100)}% merge rate
          </span> */}
        </div>
      </div>
    </Card>
  );
}
 