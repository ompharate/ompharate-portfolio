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
      "name": "React",
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_IW3VID-8ExLy8QTiywk3ZUXG76SvvikNQ&s"
    },
    {
      "name": "Next.js",
      "url": "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"
    },
    {
      "name":"Tailwindcss",
      "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGVV8fOc_D2_vxf1_MrxRuPeF3Y1EFAJrxg&s"
    },
    {
      "name": "GraphQL",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwyF9jqTzoCr79rP7GKWu_ZYEpFl_5fhoQg&s",
    },
    {
      "name": "Prisma ORM",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDkN92cpPFFg-3j4q7khMCH_nTnUC_wYhQg&s"
    },
    {
      "name": "TypeScript",
      url: "https://media.licdn.com/dms/image/D5612AQF1X3R7A10-GA/article-cover_image-shrink_720_1280/0/1696269587807?e=2147483647&v=beta&t=RezCmM0hMmBFdllWBKTmYA7hpmvTbBKjP8DSmV8cnUQ"
    },
    {
      "name": "Node.js",
      url: "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png"
    },
    {
      "name": "MongoDB",
      "url": "https://teky.edu.vn/blog/wp-content/uploads/2021/08/Cach-su-dung-Mongodb-nhu-the-nao.jpg"
    },
    {
      "name": "PostgreSQL",
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmnFYeOmmAlNV9_ZTu5cYgS2L55Q1pt9QyA&s"
    },
    {
      "name": "AWS",
      url: "https://miro.medium.com/v2/resize:fit:1200/1*tFl-8wQUENETYLjX5mYWuA.png"
    },
    {
      "name": "Docker",
      "url": "https://bunnyacademy.b-cdn.net/what-is-docker.png"
    },
    {
      "name": "Java",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKVrVcrrTL7A8B75qwwrpkAx3uOewEt9RbA&s"
    },
    {
      "name": "C++",
      url: "https://media.licdn.com/dms/image/D4E12AQFZ22tCQSGwDw/article-cover_image-shrink_600_2000/0/1687615910475?e=2147483647&v=beta&t=e0Dz4ia72MRYikHW_0Pc0JoAKJ3sFH3Vd5VO1RyAFPs"
    }
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
  projects: [
    {
      title: "ThemeCrafter",
      href: "https://themecrafter.ompharate.tech/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "I developed a versatile Theme Store using the MERN stack,  offering a diverse range of high-quality themes. Integrated with Razorpay for seamless payment processing, this platform ensures a user-friendly experience from browsing to customization.",
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
      title: "SendToGroup",
      href: "http://stg.ompharate.tech/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "SendToGroup is a collaborative platform that allows users to connect with groups, share messages and files seamlessly, and engage in real-time code collaboration. It's a convenient tool for quick file and message transfer without login.",
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
      href: "https://www.npmjs.com/package/opsnippets",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "developed a new React library that provides a seamless code blogging experience, including features like copy-to-clipboard and code block highlighting..",
      technologies: [
        "React.js",
        "Typescript",
      ],
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
      title: "LinksHub.dev",
      dates: "July 2024",
      location: "Nextjs",
      description:
        "contributed a new feature to LinkHub.dev, adding a dynamic hover effect to the landing page cards.",
      image:
        "/linkshub.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkshub.dev/",
        }
      ],
    },
    {
      title: "Codecademy.com",
      dates: "Aug 2024",
      location: "React",
      description:
        "made a significant contribution to Codecademy's documentation by adding detailed tutorials on Python and PyTorch.",
      image:
        "/codecademy.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.codecademy.com/",
        }
      ],
    },


  ],
} as const;
