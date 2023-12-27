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

export const RESUME_DATA = {
  name: "Prakhar Baveja",
  initials: "PB",
  location: "New Delhi, India, IST",
  locationLink: "https://www.google.com/maps/place/delhi",
  about:
    "Full Stack Engineer, focused on product dev with an interest across diverse aspects of the process",
  summary:
    "As a Full Stack Engineer, I've spearheaded end-to-end product development, adeptly leading teams for performance. My current tech stack includes React for the frontend, and PHP + Python for the backend, all orchestrated on AWS. With over 5 years of experience, I thrive in dynamic, product-focused environments.",
  avatarUrl: "https://avatars.githubusercontent.com/u/22319179?v=1",
  personalWebsiteUrl: "https://prakharbaveja.com",
  contact: {
    email: "prakharbaveja@gmail.com",
    tel: "+919871971607",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/pbaveja",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prakhar-baveja-244907106",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "University of Delhi",
      degree: "Bachelor of Science (Honours) in Computer Science",
      start: "2015",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Hubhopper",
      link: "https://hubhopper.com",
      badges: ["Current"],
      title: "Full Stack Engineer → Tech Lead",
      logo: ParabolLogo,
      start: "2019",
      end: "2024",
      description:
        "I manage a team of developers, which includes diving deep into research, product planning and problem solving. A notable achievment during the products growth has been the micro-serviced API that achieved 50x scale from 5Mil to 1Billion+ requests and 600x scale from 50k to 40Mil downloads and streams.",
    },
    {
      company: "TalentBrew",
      link: "https://talentbrew.app/",
      badges: [],
      title: "Founder",
      logo: JojoMobileLogo,
      start: "2023",
      end: "2024",
      description:
        "TalentBrew is an upcoming project of mine. It's an applicant tracking system designed to streamline the hiring process. I started this last year and continue to work on it and implement interesting technological solutions into it.",
    },
    {
      company: "Interglob Technologies",
      link: "https://www.igtsolutions.com/",
      badges: [],
      title: "Java Developer",
      logo: JojoMobileLogo,
      start: "2017",
      end: "2018",
      description:
        "Built processes that helped streamline the Java team development lifecycle. This included handling multi tenant architecture requests.",
    },
    {
      company: "Your Space",
      link: "https://www.your-space.in/",
      badges: [],
      title: "Technical Consultant",
      logo: NSNLogo,
      start: "2021",
      end: "2023",
      description: "This consultancy gig had me revamp technical processes and improve the codebase to minify the gap between the management and tech team.",
    },
  ],
  skills: [
    "JavaScript",
    "React/Next.js",
    "Python",
    "PHP",
    "Laravel",
    "MySQL",
    "Elasticsearch",
    "AWS"
  ],
  projects: [
    {
      title: "TalentBrew",
      techStack: [
        "JavaScript",
        "Next.js",
        "Supabase",
        "Vercel",
        "Tailwind",
      ],
      description: "A platform to build and help your hiring process",
      logo: ConsultlyLogo,
      link: {
        label: "talentbrew.app",
        href: "https://talentbrew.app/",
      },
    },
    {
      title: "Hubhopper",
      techStack: ["PHP", "React", "Microserviced"],
      description:
        "A SaaS that is India's first and largest podcasting hosting and distribution platform",
      logo: MonitoLogo,
      link: {
        label: "hubhopper",
        href: "https://hubhopper.com/",
      },
    },
    {
      title: "prakharbaveja.com",
      techStack: ["React", "Spotify API", "MDX", "AntDesign"],
      description:
        "My personal website and blog.",
      logo: JarockiMeLogo,
      link: {
        label: "prakharbaveja.com",
        href: "https://prakharbaveja.com/",
      },
    },
    {
      title: "RSS processor",
      techStack: ["NodeJS"],
      description:
        "A configurable service implemented to process RSS' and download data that is readily available inside it",
      logo: JarockiMeLogo,
      link: {
        label: "github.com/pbaveja",
        href: "https://github.com/pbaveja/itunes-podcast-rss-scraper",
      },
      {
      title: "SaaS Boilerplate",
      techStack: ["Open Source", "NextJS", "TypeScript", "MongoDB", "Express"],
      description:
        "Contributed to a SaaS boilerplate started by the poeple at Async Labs.",
      logo: JarockiMeLogo,
      link: {
        label: "Async Labs",
        href: "https://github.com/async-labs/saas",
      }
    },
  ],
} as const;
