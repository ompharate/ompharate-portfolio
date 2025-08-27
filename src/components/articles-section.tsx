"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ExternalLinkIcon, 
  CalendarIcon, 
  ClockIcon,
  BookOpenIcon,
  StarIcon,
  TagIcon
} from "lucide-react";
import Link from "next/link";

interface Article {
  title: string;
  description: string;
  publishedDate: string;
  readTime: string;
  tags: readonly string[];
  href: string;
  featured: boolean;
}

interface ArticlesData {
  hld: readonly Article[];
  lld: readonly Article[];
}

interface Props {
  articles: ArticlesData;
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="group relative overflow-hidden border-2 border-muted/20 bg-gradient-to-br from-background via-background to-muted/5 hover:border-[#8B7CF8]/50 hover:shadow-xl hover:shadow-[#8B7CF8]/10 transition-all duration-300 hover:scale-[1.02]">
      {article.featured && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-gradient-to-r from-[#211C84] to-[#8B7CF8] text-white border-0 shadow-md">
            <StarIcon className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}
      
      <CardHeader className="px-4 py-4">
        <div className="space-y-3">
          <h3 className="text-lg font-bold leading-tight group-hover:text-[#8B7CF8] transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {article.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-3 h-3" />
                {article.publishedDate}
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className="w-3 h-3" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="mt-auto flex flex-col px-4 pb-4 pt-2">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <Badge
                key={`${tag}-${index}`}
                variant="outline"
                className="text-xs py-1 px-2 bg-muted/30 hover:bg-[#8B7CF8]/10 border-[#8B7CF8]/30 hover:border-[#8B7CF8]/50 transition-colors duration-200"
              >
                <TagIcon className="w-2 h-2 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
          
          <Link
            href={article.href}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8B7CF8] hover:text-[#211C84] transition-colors duration-200 group/link"
          >
            <BookOpenIcon className="w-4 h-4" />
            Read Article
            <ExternalLinkIcon className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

function ArticleGrid({ articles }: { articles: readonly Article[] }) {
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);
  
  return (
    <div className="space-y-8">
      {featuredArticles.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-[#8B7CF8]" />
            Featured Articles
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={`featured-${index}`} article={article} />
            ))}
          </div>
        </div>
      )}
      
      {regularArticles.length > 0 && (
        <div className="space-y-4">
          {featuredArticles.length > 0 && (
            <h4 className="text-lg font-semibold text-foreground">More Articles</h4>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <ArticleCard key={`regular-${index}`} article={article} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function ArticlesSection({ articles }: Props) {
  const totalArticles = articles.hld.length + articles.lld.length;
  const totalFeatured = [...articles.hld, ...articles.lld].filter(article => article.featured).length;
  
  return (
    <Card className="overflow-hidden border-2 border-muted/20 bg-gradient-to-br from-background via-background to-muted/5 ">
      <CardHeader className="bg-gradient-to-r from-[#8B7CF8]/10 via-[#211C84]/10 to-[#8B7CF8]/10 border-b border-muted/20 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#211C84] to-[#8B7CF8] bg-clip-text text-transparent">
              My Articles
            </h3>
            <p className="text-muted-foreground">
              Deep dive into system design, low-level implementations, and engineering best practices
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B7CF8]/20 to-[#211C84]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-[#8B7CF8]/20 rounded-xl p-4 min-w-[100px] text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#8B7CF8]/20 to-[#211C84]/10 rounded-lg">
                  <BookOpenIcon className="w-5 h-5 text-[#8B7CF8]" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-br from-[#211C84] to-[#8B7CF8] bg-clip-text text-transparent">
                  {totalArticles}
                </div>
                <div className="text-xs text-muted-foreground font-medium">Total Articles</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B7CF8]/20 to-[#211C84]/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-[#8B7CF8]/20 rounded-xl p-4 min-w-[100px] text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#8B7CF8]/20 to-[#211C84]/10 rounded-lg">
                  <StarIcon className="w-5 h-5 text-[#8B7CF8]" />
                </div>
                <div className="text-2xl font-bold text-[#8B7CF8]">
                  {totalFeatured}
                </div>
                <div className="text-xs text-muted-foreground font-medium">Featured</div>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <Tabs defaultValue="hld" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/30">
            <TabsTrigger 
              value="hld" 
              className="text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#211C84] data-[state=active]:to-[#8B7CF8] data-[state=active]:text-white"
            >
              High-Level Design ({articles.hld.length})
            </TabsTrigger>
            <TabsTrigger 
              value="lld"
              className="text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#211C84] data-[state=active]:to-[#8B7CF8] data-[state=active]:text-white"
            >
              Low-Level Design ({articles.lld.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="hld" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1 h-6 bg-gradient-to-b from-[#211C84] to-[#8B7CF8] rounded-full"></div>
                <p className="text-sm">
                  System architecture, scalability patterns, and distributed system designs for large-scale applications
                </p>
              </div>
              <ArticleGrid articles={articles.hld} />
            </div>
          </TabsContent>
          
          <TabsContent value="lld" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1 h-6 bg-gradient-to-b from-[#8B7CF8] to-[#211C84] rounded-full"></div>
                <p className="text-sm">
                  Code implementations, algorithms, design patterns, and detailed technical implementations
                </p>
              </div>
              <ArticleGrid articles={articles.lld} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
