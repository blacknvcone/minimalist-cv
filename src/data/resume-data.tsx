import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fachrul Dani Prasetya",
  initials: "DN",
  location: "Sidoarjo, Indonesia, GMT",
  locationLink: "https://www.google.com/maps/place/indonesia",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "I'm not your average software engineer—I'm the coding aficionado who also happens to be a pro angler in my spare time. With 7 years of experience diving deep into programming languages and navigating through RDBMS, I ensure our applications sail seamlessly across platforms. My skills span Golang and JavaScript (plus a bit of fisherman's luck), along with MySQL, MongoDB, Redis (knowing my tables and catches inside out), and AWS, GCP (making clouds behave like well-trained sea creatures). When not writing code or reeling in big fish, you can find me tinkering with gadgets, exploring new tech trends, or simply enjoying the serenity of nature.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://danipras.dev",
  contact: {
    email: "dani.prasetya.dev@gmail.com",
    tel: "+6200000000000",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/blacknvcone",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dani-prasetya-4a6389168/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/blacknvc",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Electronic Engineering Polytechnic Institute of Surabaya (EEPIS)",
      degree: "Bachelor's Degree in Informatics Engineering",
      start: "2016",
      end: "2019",
    },
    {
      school: "Politeknik Negeri Jember",
      degree: "Diploma in Informatics Engineering",
      start: "2012",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Efishery",
      link: "https://efishery.com",
      badges: [],
      title: "Backend Engineer",
 //     logo: ParabolLogo,
      start: "2022",
      end: "NOW",
      description:
        "Implemented new features, improving the way developers ship the code and make it eficient, and sometimes fixing bug :p. Technologies: Golang, Redis, PostgreSQL, GraphQL",
    },
    {
      company: "Majoo",
      link: "https://majoo.id",
      badges: [],
      title: "Backend Engineer",
 //     logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description:
        "Responsible as backend engineer in internal product department. Hunting bug and maintain some code. Technologies: Golang, PHP, Kafka, PostgreSQL, GraphQL",
    },
    {
      company: "Kano Solution",
      link: "https://efishery.com",
      badges: [],
      title: "Full-stack Engineer",
 //     logo: ParabolLogo,
      start: "2020",
      end: "2021",
      description:
        "Responsible as full-stack engineer to maintain some existing and incoming project from client. Technologies: Golang, AWS, React, Javascript",
    },
    {
      company: "Vascomm Solusi Teknologi",
      link: "https://vascomm.co.id",
      badges: [],
      title: "Supervisor",
 //     logo: ParabolLogo,
      start: "2018",
      end: "2020",
      description:
        "Responsible as supervisor at backend developement teams and act as senior backend engineer too, leading and managing task for teams relate with current project. Technologies: Node, PHP, Laravel, Javascript",
    },
    {
      company: "Politeknik Negeri Jember",
      link: "https://vascomm.co.id",
      badges: [],
      title: "Network Administrator",
 //     logo: ParabolLogo,
      start: "2015",
      end: "2018",
      description:
        "Responsible for the entire infrastructure, especially in the networking section in the academic community, ensuring the overall service runs well and efficiently. Technologies: Cisco",
    },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
  skills: [
    "Golang",
    "PHP",
    "JavaScript",
    "Laravel",
    "React/Next.js",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Kafka",
    "Cisco",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
