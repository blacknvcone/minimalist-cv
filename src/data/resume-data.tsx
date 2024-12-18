import {
  EfisheryLogo,
  ProfilePicture,
  ConsultlyLogo,
  MonitoLogo,
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
    "I am a dedicated software engineer with 7 years of experience in developing robust applications and managing relational database systems. My expertise encompasses a diverse range of programming languages, including Golang and JavaScript, complemented by a solid understanding of database technologies such as MySQL, MongoDB, and Redis. I am proficient in cloud services, including AWS and GCP, enabling me to design scalable solutions that perform seamlessly across platforms. In addition to my technical skills, I have a strong passion for technology and enjoy tinkering with gadgets while staying abreast of emerging tech trends. I thrive on problem-solving and possess a keen attention to detail, which drives my commitment to delivering high-quality software solutions.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/C4E03AQFG5dItfOn_dw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1604030603232?e=1740009600&v=beta&t=K6iStLmEEpLvL61fH_T_zj7oekpcEmbhrq_X_2iXTHw",
  personalWebsiteUrl: "https://danipras.dev",
  contact: {
    email: "dani.prasetya.dev@gmail.com",
    tel: "+6282301829885",
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
  certification:[
    {
      title:"Architecting with Google Compute Engine",
      issuer:"Coursera (Google Cloud Traing Partnership)",
      date_issue:"August 2020",
      link:"https://www.coursera.org/account/accomplishments/specialization/certificate/7XBDDPF8ZYQ6"
    }
  ],
  work: [
    {
      company: "Efishery",
      link: "https://efishery.com",
      badges: [],
      title: "Backend Engineer",
    // logo: EfisheryLogo,
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
      start: "2015",
      end: "2018",
      description:
        "Responsible for the entire infrastructure, especially in the networking section in the academic community, ensuring the overall service runs well and efficiently. Technologies: Cisco",
    },

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
      title: "eFisheryKu (Efishery)",
      techStack: [
        "Golang",
        "PostgreSQL",
        "Redis",
        "RabbitMQ"
      ],
      description: "A platform which farmer can buy some fish feed, vitamin, some tools, and farmer can sold their harvest result.",
      logo: EfisheryLogo,
      link: {
        label: "efishery.com",
        href: "https://efishery.com/",
      },
    },
    {
      title: "Majoo POS",
      techStack: ["Golang", "PHP", "MySQL", "Kafka"],
      description:
        "The POS application provides detailed reports on sales performance, customer trends, and best-selling products.",
      //logo: MonitoLogo,
      link: {
        label: "majoo.id",
        href: "https://majoo.id/",
      },
    },
    {
      title: "Adalink (Kano)",
      techStack: ["Golang", "MongoDB"],
      description:
        "Link shortening app which has SEO optimization and analytics features. With these features the user will be able to analyze the URL it has.",
      //logo: MonitoLogo,
    },
    {
      title: "Hasanah Mobile (Vascomm)",
      techStack: ["Golang", "MongoDB"],
      description:
        "Hasanah Mobile is a banking application owned by BNI Syariah. In this application the user can make transactions digitally while still paying attention to security aspects.",
      //logo: MonitoLogo,
    },
    {
      title: "Simas Apps",
      techStack: ["Side Project","Laravel", "PHP", "MySQL"],
      description:
        "Archives Management Information System and disposition.Is an working app to manage all outgoing and incoming mail as well as managing disposition needs.",
      //logo: MonitoLogo,
    
    },
    {
      title: "Simas Apps",
      techStack: ["Side Project","Laravel", "PHP", "MySQL"],
      description:
        "Budgeting and Cashflow Information System.Is an application that displays a summary of budget funds in an agency.",
      //logo: MonitoLogo,
    },
   
  ],
} as const;
