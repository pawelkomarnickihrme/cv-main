import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Paweł Komarnicki",
  initials: "PL",
  location: "Olsztyn, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Olsztyn",
  about: "Full Stack Engineer",
  summary:
    "Experienced Full Stack Developer with 5 years of expertise in crafting robust and scalable web applications. Proficient in JavaScript, TypeScript, React, and Node.js, I bring a comprehensive skill set to both front-end and back-end development. I hold a Bachelor's degree in Computer Science, which has provided me with a solid foundation in software engineering principles. My passion for learning drives me to constantly explore and adapt to new technologies, ensuring I stay at the forefront of the ever-evolving tech landscape. ",
  avatarUrl:
    "https://wvedlmseeecpqd04.public.blob.vercel-storage.com/profil%20cut.png",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "pawelkomarnicki90@gmail.com",
    tel: "+48536764321",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/pawelkomarnickihrme",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pawe%C5%82-komarnicki-a92b3b106/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "University of Warmia and Mazury",
      degree: "IT engineer",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Grupa Spider’s Web",
      link: "https://spidersweb.pl/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2023",
      end: "Now",
      description:
        "Developed new modules and maintained existing ones in Next.js and TypeScript, directly managing the development of spidersweb.pl, rozrywka.spidersweb.pl, bizblog.spidersweb.pl, and autoblog.spidersweb.pl. Additionally, contributed indirectly to projects for prominent brands such as Samsung, Chanel, Amazon, and Allegro. Took responsibility for the entire development process, from initial project design to production deployment.",
    },
    {
      company: "Mikronika",
      link: "https://www.mikronika.pl/",
      badges: ["Remote"],
      title: "Frontend  Developer",
      start: "2021",
      end: "2023",
      description:
        "Contributed to an enterprise-scale SCADA project catering to energy firms such as Orlen, Energa, and PKP. Developed new modules and maintained legacy code. Leveraged TypeScript along with technologies like React, Redux, RestAPI, WebSocket, and CSS/SCSS.",
    },
    {
      company: "Hr Me",
      link: "https://beta.hr-me.co/",
      badges: ["Remote", "Side Project"],
      title: "Frontend  Developer",
      start: "2022",
      end: "2023",
      description:
        "Drove the development of an application focused on training and acquiring employees. Implemented user interfaces using React.js, TypeScript, and Redux to enhance the overall user experience and functionality.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "React Context",
    "Tailwind CSS",
    "HTML5",
    "CSS3/SCSS",
    "Node.js",
    "AWS",
    "Supabase",
    "Prisma",
    "Drizzle",
    "SQL",
    "Postgres",
    "Firebase",
    "NestJS",
    "tRPC",
    "Docker",
    "Vercel",
    "Git",
    "GitHub",
    "SVN",
    "NPM",
    "Yarn",
    "pnpm",
    "Webpack",
    "Turborepo",
    "Monorepo",
    "WordPress",
    "Visual Studio Code",
    "Jira",
    "Playwright",
    "Zod",
    "TanStack Query",
    "Bun",
    "Planning",
    "Self-organization",
    "Communication",
    "Native Polish",
    "English B2 level",
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
