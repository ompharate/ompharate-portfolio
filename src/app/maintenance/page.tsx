import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Clock, Code2, Hammer, RefreshCw, Wrench } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen justify-center px-4">
      <div className="mx-auto w-full max-w-2xl space-y-6 text-center">
        
        {/* Animated Icon */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-primary"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Main Heading */}
        <BlurFadeText
          delay={BLUR_FADE_DELAY * 2}
          className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          yOffset={8}
          text="Under Development"
        />

        {/* Subtitle */}
        <BlurFadeText
          delay={BLUR_FADE_DELAY * 3}
          className="text-xl text-muted-foreground max-w-[600px] mx-auto"
          yOffset={8}
          text="I'm currently working on something amazing. Please check back soon!"
        />

        {/* Expected Launch Card */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Expected Launch</h3>
              </div>
              <p className="text-2xl font-bold text-primary">Coming Soon</p>
              <p className="text-sm text-muted-foreground mt-1">
                Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </BlurFade>

      </div>
    </main>
  );
}
