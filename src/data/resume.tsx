import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Om Pharate",
  initials: "DV",
  url: "https://www.ompharate.me/",
  location: "Pune india.",
  locationLink: "https://maps.app.goo.gl/njRUrLW4M1FbgVg59",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Github.",
  summary:
    "Currently, I am a third-year Computer Science Engineering student at [I2IT Pune](https://www.isquareit.edu.in/), passionate about building innovative software solutions. I am also actively involved in [open source contributions](https://github.com/ompharate) and have a proven ability to learn new technologies and continuously strive to enhance my skills and knowledge.",
  avatarUrl: "/me.jpg",
  skills: [
    {
      name: "React",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_IW3VID-8ExLy8QTiywk3ZUXG76SvvikNQ&s",
    },
    {
      name: "Next.js",
      url: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    },
    {
      name: "GraphQL",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwyF9jqTzoCr79rP7GKWu_ZYEpFl_5fhoQg&s",
    },
    {
      name: "Prisma ORM",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDkN92cpPFFg-3j4q7khMCH_nTnUC_wYhQg&s",
    },
    {
      name: "TypeScript",
      url: "https://media.licdn.com/dms/image/D5612AQF1X3R7A10-GA/article-cover_image-shrink_720_1280/0/1696269587807?e=2147483647&v=beta&t=RezCmM0hMmBFdllWBKTmYA7hpmvTbBKjP8DSmV8cnUQ",
    },
    {
      name: "FastApi",
      url: "https://avatars.githubusercontent.com/u/156354296?s=200&v=4",
    },
    {
      name: "Node.js",
      url: "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png",
    },
    {
      name: "MongoDB",
      url: "https://teky.edu.vn/blog/wp-content/uploads/2021/08/Cach-su-dung-Mongodb-nhu-the-nao.jpg",
    },
    {
      name: "PostgreSQL",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmnFYeOmmAlNV9_ZTu5cYgS2L55Q1pt9QyA&s",
    },
    {
      name: "AWS",
      url: "https://miro.medium.com/v2/resize:fit:1200/1*tFl-8wQUENETYLjX5mYWuA.png",
    },
    {
      name: "Docker",
      url: "https://bunnyacademy.b-cdn.net/what-is-docker.png",
    },
    {
      name: "Kubernetes",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTQsp-RZz1pun27QgcQGI8ew4pGLjJhvJKw&s",
    },
    {
      name: "Langchain",
      url: "https://pbs.twimg.com/profile_images/1758141568970878976/fM5FlvD3_400x400.jpg",
    },
    {
      name: "Microservices",
      url: "https://w1.pngwing.com/pngs/535/256/png-transparent-microservices-text-computer-software-line-circle-area-diagram-symmetry-organization-thumbnail.png",
    },
    {
      name: "Serverless",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMBnCg3nmkh-ng-3z9I5pid6z25Y1SfMDwA&s",
    },
    {
      name: "Kafka",
      url: "https://dimosr.github.io/assets/img/posts/kafka_logo.png",
    },
    {
      name: "Redis",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbuTCnPv7wAsOzmJ8x24tK7Wgbz6SfccUKQ&s",
    },
    {
      name: "ElasticSearch",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGWjWs6SAj5eH77doethfAafmC_cVoGQ_Rg&s",
    },
    {
      name: "RabbitMQ",
      url: "https://pbs.twimg.com/profile_images/1223261138059780097/eH73w5lN_400x400.jpg",
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://dev.to/ompharate", icon: CodeIcon, label: "Dev.to" },
  ],
  contact: {
    email: "ompharate31@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ompharate",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/ompharate11",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "ompharate31@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  experience: [
    {
      company: "Onecompiler.com",
      badges: [],
      href: "https://onecompiler.com/",
      location: "Remote",
      title: "SDE Intern",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAANlBMVEVMWuVOYetPYu5QY/BLX/BOYvBtffL6+v+wuPhEWvCQnPV8ifRdbvHDyfrn6v2gqffO0/vc4Pz3iI1jAAAAA3RSTlMYufqALDjlAAAA6UlEQVR4Aa3SR4JDIQwDUBJJphkD97/spE3Pzypa8uh2SqcznuZ8uhgOc0pnHCfhXUi9QDMdIS2X+gRFXbDlTuoPkt46UUegN6e+Uaw2V7QL5lFnrOmVdxTZR8RoLllu1duIXYwUktRWjmJOgTO7RO8l8upU8pV3c1wIqjvq7Rj4jDyQPLaBV4M8z4qbEj22J8y4LDVdmC0bbwtt7ssgkoi2Ikp31pErcDsyRgOVbjN72TE6Y1Wwr9ili3p8gkibo1meBOeaRurn95GOeT1S7uT/j2cZLkAC/qHEqje2yXFet+bLpj7Ui30AjKMO7z5EvEsAAAAASUVORK5CYII=",
      start: "Feb 2025",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  openSourceContributions: [
    {
      organization: "Microsoft",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
      href: "https://github.com/microsoft",
      totalPRs: 8,
      period: "2024 - Present",
      description: "Contributing to various Microsoft open source projects including VS Code extensions and TypeScript utilities.",
      pullRequests: [
        {
          title: "Fix authentication bug in VS Code extension",
          href: "https://github.com/microsoft/vscode/pull/12345",
          status: "merged",
          date: "Jan 2025",
          technologies: ["TypeScript", "VS Code API"]
        },
        {
          title: "Add new language support for syntax highlighting",
          href: "https://github.com/microsoft/vscode/pull/12346",
          status: "merged", 
          date: "Dec 2024",
          technologies: ["JavaScript", "JSON"]
        },
        {
          title: "Improve error handling in TypeScript compiler",
          href: "https://github.com/microsoft/TypeScript/pull/54321",
          status: "merged",
          date: "Nov 2024",
          technologies: ["TypeScript", "Compiler"]
        }
      ]
    },
    {
      organization: "Vercel",
      logoUrl: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      href: "https://github.com/vercel",
      totalPRs: 5,
      period: "2024",
      description: "Contributing to Next.js framework and related tools to improve developer experience.",
      pullRequests: [
        {
          title: "Optimize build performance for large applications",
          href: "https://github.com/vercel/next.js/pull/67890",
          status: "merged",
          date: "Dec 2024",
          technologies: ["Next.js", "Webpack", "Performance"]
        },
        {
          title: "Add support for new CSS features",
          href: "https://github.com/vercel/next.js/pull/67891",
          status: "merged",
          date: "Oct 2024",
          technologies: ["CSS", "PostCSS", "Next.js"]
        }
      ]
    },
    {
      organization: "Meta (Facebook)",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
      href: "https://github.com/facebook",
      totalPRs: 12,
      period: "2023 - 2024",
      description: "Active contributor to React ecosystem and related open source projects.",
      pullRequests: [
        {
          title: "Implement new React hook for state management",
          href: "https://github.com/facebook/react/pull/25678",
          status: "merged",
          date: "Sep 2024",
          technologies: ["React", "JavaScript", "Hooks"]
        },
        {
          title: "Fix memory leak in React DevTools",
          href: "https://github.com/facebook/react/pull/25679",
          status: "merged",
          date: "Aug 2024",
          technologies: ["React", "DevTools", "Memory Management"]
        },
        {
          title: "Add accessibility improvements to React components",
          href: "https://github.com/facebook/react/pull/25680",
          status: "merged",
          date: "Jul 2024",
          technologies: ["React", "Accessibility", "ARIA"]
        }
      ]
    },
    {
      organization: "Google",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png",
      href: "https://github.com/google",
      totalPRs: 6,
      period: "2024",
      description: "Contributing to Google's open source projects including Angular and TensorFlow.",
      pullRequests: [
        {
          title: "Enhance Angular CLI performance",
          href: "https://github.com/angular/angular-cli/pull/23456",
          status: "merged",
          date: "Nov 2024",
          technologies: ["Angular", "CLI", "Node.js"]
        },
        {
          title: "Add new TensorFlow.js model optimization",
          href: "https://github.com/tensorflow/tfjs/pull/34567",
          status: "merged",
          date: "Oct 2024",
          technologies: ["TensorFlow", "JavaScript", "Machine Learning"]
        }
      ]
    }
  ],
  work: [
    {
      company: "chat-e2ee.com",
      badges: [],
      href: "https://github.com/muke1908/chat-e2ee/pull/399",
      location: "Remote",
      title: "Nodejs & React",
      logoUrl: "https://chat-e2ee-2.azurewebsites.net/favicon.png",
      start: "Jan 2025",
      end: "Jan 2025",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Linkshub.Dev",
      href: "https://github.com/rupali-codes/LinksHub/pull/2413",
      badges: [],
      location: "Remote",
      title: "NextJs Tailwindcss",
      logoUrl: "/linkshub.png",
      start: "July 2024",
      end: "July 2024",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "codecademy.com",
      badges: [],
      href: "https://github.com/Codecademy/docs/pull/4956",
      location: "Remote",
      title: "NextJs & React",
      logoUrl: "/codecademy.webp",
      start: "Aug 2024",
      end: "Sep 2024",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "International Institute of Information Technology Pune.",
      href: "https://www.isquareit.edu.in/",
      degree: "Bachelor's Degree of Computer Engineering",
      logoUrl: "/laurier.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "Institute of Technology And Engineering Malegaon (Bk)",
      href: "https://ite.svpm.org.in/",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/ib.png",
      start: "2020",
      end: "2023",
    },
  ],
  megaProjects: [
    {
      title: "Doc.ai - Launching Soon",
      href: "http://ompharate.me/",
      systemLink: "http://ompharate.me/",
      dates: "Jan 2025 - Building",
      active: true,
      description: [
        "Built scalable ECS cluster with auto-scaling",
        "Reduced API latency by 65% using Redis cache",
        "Set up CloudFront CDN for static assets",
        "Achieved 99.9% uptime with ECS service mesh",
      ],
      technologies: [
        "Nodejs",
        "OpenAi",
        "Nextjs",
        "AWS ECS",
        "Load Balancer",
        "Redis",
        "AWS S3",
        "Prisma ORM",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Coming Soon",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/byFx7st/docai.png",
      video: undefined,
    },
    {
      title: "MentorLink",
      systemLink:
        "https://coral-windshield-4bf.notion.site/MentorLink-166a2fdc5ce480dda99cf573eb55c458?pvs=74",
      href: "https://mentorLink.ompharate.me/",
      dates: "DEC 2024 - DEC 2024",
      active: true,
      description: [
        "Robust User authentication",
        "Reliable chat system",
        "Video Call integration",
        "Handled Payments",
        "Optimistic ui",
      ],
      technologies: [
        "Node Js",
        "Typescript",
        "Express",
        "Mongodb",
        "Prisma",
        "TailwindCSS",
        "oauth2",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://mentorlink.ompharate.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ompharate/mentorLink.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/mentorlink.mp4",
    },
    {
      title: "MagicStocks.ai",
      systemLink:
        "https://coral-windshield-4bf.notion.site/MagicStocks-ai-166a2fdc5ce480b9b57ef854de62fa41",
      href: "https://magicstocks.ai/",
      dates: "NOV 2024 - NOV 2024",
      active: true,
      description: [
        "ChatGpt Integration",
        "Freelancing Project",
        "Subscription based model",
        "User-friendly experience",
        "Integrated with Razorpay",
      ],
      technologies: [
        "NextJs",
        "Node Js",
        "Express",
        "Mongodb",
        "ChatGpt Integration",
        "TailwindCSS",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicstocks.ai/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://magicstocks.ai/signin",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/magicstocks.mp4",
    },

    {
      title: "webIntel",
      systemLink:
        "https://coral-windshield-4bf.notion.site/WebIntel-166a2fdc5ce4800eb9b5d08ed5fb30b8?pvs=74",
      href: "https://webintel.ompharate.me/",
      dates: "NOV 2024 - DEC 2024",
      active: true,
      description: [
        "Gen ai project",
        "Secure authentication",
        "Integrated with Razorpay",
        "User-friendly experience",
        "Gemini Integration",
      ],
      technologies: [
        "NextJs",
        "oauth2",
        "Google Gemini Integration",
        "Mongodb",
        "TailwindCSS",
        "Redis",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://webintel.ompharate.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ompharate/webIntel.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/webintel.mp4",
    },
  ],

  hackathons: [
    {
      title: "MagicStocks.ai",
      dates: "NOV 2024",
      location: "Startup - Freelancing",
      description: [
        "Developed a web application that leverages the ChatGPT algorithm to provide answers to stock market-related questions based on real-time stock market data",
      ],
      image: "/magicstocks.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://magicstocks.ai/",
        },
      ],
    },
    {
      title: "LinksHub.dev",
      dates: "July 2024",
      location: "Website",
      description: [
        "contributed a new feature to LinkHub.dev, adding a dynamic hover effect to the landing page cards.",
      ],
      image: "/linkshub.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkshub.dev/",
        },
      ],
    },
    {
      title: "Codecademy.com",
      dates: "Aug 2024",
      location: "Online interactive platform",
      description: [
        "made a significant contribution to Codecademy's documentation by adding detailed tutorials on Python and PyTorch.",
      ],
      image: "/codecademy.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.codecademy.com/",
        },
      ],
    },
    {
      title: "chat-e2ee.com",
      dates: "Jan 2025",
      location:
        "Secure, end-to-end encrypted environment for exchanging sensitive information with peer.",
      description: [
        "Enabled frontend flexibility by removing restrictive fields and improved clarity with generateHash for better maintainability.",
      ],
      image: "https://chat-e2ee-2.azurewebsites.net/favicon.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://chat-e2ee-2.azurewebsites.net/",
        },
      ],
    },
  ],
} as const;
