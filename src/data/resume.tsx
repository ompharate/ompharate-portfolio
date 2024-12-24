import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Om Pharate",
  initials: "DV",
  url: "https://www.ompharate.tech/",
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
      name: "Tailwindcss",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGVV8fOc_D2_vxf1_MrxRuPeF3Y1EFAJrxg&s",
    },
    {
      name: "GraphQL",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwyF9jqTzoCr79rP7GKWu_ZYEpFl_5fhoQg&s",
    },
    {
      name: "Cloud Computing",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMynKiFkd3-kRCgMWs7wUrmD6LWm0bWHZEg&s",
    },
    {
      name: "System Design",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wRYpJUzQKlpwgpYq9iKLqyd5LNyl8a-w4w&s",
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
      name: "Java",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKVrVcrrTL7A8B75qwwrpkAx3uOewEt9RbA&s",
    },
    {
      name: "C++",
      url: "https://media.licdn.com/dms/image/D4E12AQFZ22tCQSGwDw/article-cover_image-shrink_600_2000/0/1687615910475?e=2147483647&v=beta&t=e0Dz4ia72MRYikHW_0Pc0JoAKJ3sFH3Vd5VO1RyAFPs",
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://dev.to/ompharate", icon: CodeIcon, label: "Dev.to" },
  ],
  contact: {
    email: "ompharate31@example.com",
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

  work: [
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
      title: "MentorLink",
      systemLink: "https://coral-windshield-4bf.notion.site/MentorLink-166a2fdc5ce480dda99cf573eb55c458?pvs=74",
      href: "https://mentorLink.ompharate.tech/",
      dates: "Jan 2024 - Feb 2024",
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
          href: "https://mentorlink.ompharate.tech/",
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
      title: "Scalable Realtime System",
      href: "https://themecrafter.ompharate.tech/",
      systemLink:
        "https://coral-windshield-4bf.notion.site/Scalable-Realtime-System-165a2fdc5ce480bc8910edd336462da8",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: [
        "Scalable architecture",
        "High availability",
        "Microservices architecture",
        "Tested 59000 successful requests in 100sec",
        "59000Req/100sec on 5%-6% CPU usage",
      ],
      technologies: [
        "Socket IO",
        "Nodejs",
        "React",
        "Devops",
        "Virtual Machine",
        "Redis",
        "Loadbalancer",
      ],
      links: [
        {
          type: "Website",
          href: "https://ballgame.ompharate.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ompharate/multiplayer-game.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/game.mp4",
    },
  ],
  projects: [
    {
      title: "ThemeCrafter",
      systemLink:
        "https://coral-windshield-4bf.notion.site/Themecrafter-149a2fdc5ce480549d7cf69042963d77",
      href: "https://themecrafter.ompharate.tech/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: [
        "Secure authentication",
        "Integrated with Razorpay",
        "User-friendly experience",
        "Theme Store using the MERN stack",
      ],
      technologies: [
        "Node Js",
        "Express",
        "Mongodb",
        "React",
        "TailwindCSS",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://themecrafter.ompharate.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ompharate/themecrafter/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/ThemeCrafter.mp4",
    },
    {
      title: "MagicStocks.ai",
      systemLink: "https://coral-windshield-4bf.notion.site/MagicStocks-ai-166a2fdc5ce480b9b57ef854de62fa41",
      href: "https://magicstocks.ai/",
      dates: "Jan 2024 - Feb 2024",
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
      systemLink: "https://coral-windshield-4bf.notion.site/WebIntel-166a2fdc5ce4800eb9b5d08ed5fb30b8?pvs=74",
      href: "https://webintel.ompharate.tech/",
      dates: "Jan 2024 - Feb 2024",
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
          href: "https://webintel.ompharate.tech/",
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
    {
      title: "WordWise",
      systemLink: "https://coral-windshield-4bf.notion.site/WordWise-WordWise-Chrome-Extension-157a2fdc5ce4808e9362c62f342d08f9?pvs=74",
      href: "https://wordwise.ompharate.tech/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: [
        "Clerk authentication",
        "Gemini Integration",
        "Connected With Chrome Extension",
      ],
      technologies: [
        "Node Js",
        "Google Gemini Integration",
        "Mongodb",
        "NextJs",
        "TailwindCSS",
        "Clerk auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://wordwise.ompharate.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ompharate/wordwise",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/wordwise.mp4",
    },
    {
      title: "WordWise - chrome extension",
      systemLink: "https://coral-windshield-4bf.notion.site/WordWise-WordWise-Chrome-Extension-157a2fdc5ce4808e9362c62f342d08f9?pvs=74",
      href: "https://github.com/ompharate/wordwise-extenstion.git",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: [
        "Chrome Extension",
        "Secure authentication",
        "User-friendly experience",
        "Connected With WordWise-website",
      ],
      technologies: ["Html", "Javascript", "css"],
      links: [
        {
          type: "Website",
          href: "https://github.com/ompharate/wordwise-extenstion.git",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ompharate/wordwise-extenstion.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/wordwise-extension.mp4",
    },
    {
      title: "Meowhub",
      systemLink: "https://coral-windshield-4bf.notion.site/Meow-hub-Meow-cli-166a2fdc5ce480e9a373e41b28053454?pvs=74",
      href: "https://meowhub.ompharate.tech/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: ["Integrated with Clerk auth", "Storage powered by AWS S3"],
      technologies: [
        "Node Js",
        "Express",
        "Typescript",
        "Postgresql",
        "Nextjs",
        "TailwindCSS",
        "Clerk auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://meowhub.ompharate.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ompharate/meow-hub.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/meowhub.mp4",
    },
    {
      title: "Meowhub -cli",
      systemLink: "https://coral-windshield-4bf.notion.site/Meow-hub-Meow-cli-166a2fdc5ce480e9a373e41b28053454?pvs=74",
      href: "https://www.npmjs.com/package/meow-hub-cli",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: [
        "CLI tool for Meowhub",
        "Secure auth by passkey",
        "Storage powered by AWS S3",
      ],
      technologies: ["Node Js", "commander", "chalk"],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/meow-hub-cli",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ompharate/meow-cli.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/meow-hub-cli.mp4",
    },
    {
      title: "SendToGroup",
      systemLink:
        "https://coral-windshield-4bf.notion.site/SendToGroup-149a2fdc5ce480958f8bd718f6b69587",
      href: "http://stg.ompharate.tech/",
      dates: "June 2024 - July 2024",
      active: true,
      description: [
        "Realtime chat application",
        "Integrated with Socket.io",
        "Storage powered by AWS S3",
        "Hosted on AWS EC2",
      ],
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Socket.io",
        "AWS S3",
        "AWS EC2",
      ],
      links: [
        {
          type: "Website",
          href: "http://stg.ompharate.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ompharate/sendtogroup/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/creatorAcademy.mp4",
    },
    {
      title: "opsnippets",
      systemLink:
        "https://coral-windshield-4bf.notion.site/opsnippets-npm-package-148a2fdc5ce4807e9900fd389bd9a3e6",
      href: "https://www.npmjs.com/package/opsnippets",
      dates: "June 2024 - July 2024",
      active: true,
      description: [
        "Npm package provides components",
        "Integrated with Typescript",
        "Published on NPM",
      ],
      technologies: ["React.js", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/opsnippets",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ompharate/opsnippets/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/opsnippites.mp4",
    },
  ],
  hackathons: [
    {
      title: "MagicStocks.ai",
      dates: "OCT 2024",
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
  ],
} as const;
