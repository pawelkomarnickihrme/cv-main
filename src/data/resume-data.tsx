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
    "Senior Full Stack Developer with 5 years of expertise in building scalable web applications. I run my own business and collaborate on a B2B basis in Olsztyn or remotely. Proficient in JavaScript, TypeScript, React, and Node.js, with a strong foundation in software engineering principles from a Bachelor's degree in Computer Science.",
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
        "Senior Full Stack Developer specializing in Next.js and TypeScript, responsible for the entire frontend of high-traffic websites such as www.spidersweb.pl, www.rozrywka.spidersweb.pl, www.bizblog.spidersweb.pl, and www.autoblog.spidersweb.pl.",
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
      link: "https://hr-me.co/",
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
    "Next",
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

  projects: [],
} as const;
