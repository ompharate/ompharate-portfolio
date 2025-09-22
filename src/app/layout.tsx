import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} – Software Engineer`,
    template: `%s | ${DATA.name}`,
  },
  description:
    "Om Pharate is a Software Engineer and a final-year Computer Engineering student at I²IT Pune. Founder of Voxora, passionate about real-time systems and scalable backend infrastructure.",
  openGraph: {
    title: `${DATA.name}`,
    description:
      "Om Pharate is a Software Engineer and founder of Voxora. Portfolio, projects, and open-source contributions.",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ompharate.me/me.jpg",
        width: 1200,
        height: 630,
        alt: "Om Pharate",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} – Founder of Voxora`,
    card: "summary_large_image",
    images: ["https://ompharate.me/me.jpg"],
  },
  verification: {
    google: "", // paste GSC verification here later
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Om Pharate",
    image: "https://ompharate.me/me.jpg",
    description:
      "I'm a Software Engineer and a final-year Computer Engineering student at the International Institute of Information Technology (I²IT), Pune. I’m currently building Voxora. I love building real-time systems and scalable backend infrastructure.",
    url: "https://ompharate.me",
    sameAs: [
      "https://github.com/ompharate",
      "https://www.linkedin.com/in/ompharate",
      "https://twitter.com/YOUR_HANDLE",
    ],
    jobTitle: "Software Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "International Institute of Information Technology (I²IT), Pune",
    },
    worksFor: {
      "@type": "Organization",
      name: "Voxora",
      url: "https://voxora.ai",
    },
    founder: {
      "@type": "Organization",
      name: "Voxora",
      url: "https://voxora.ai",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Om Pharate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Om Pharate is a Software Engineer and a final-year Computer Engineering student at I²IT Pune. He is the founder of Voxora and passionate about real-time systems and scalable backend infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the founder of Voxora?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Om Pharate is the founder of Voxora, an open-source AI-native live chat and voice support solution.",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-5xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>

        {/* JSON-LD Structured Data */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
