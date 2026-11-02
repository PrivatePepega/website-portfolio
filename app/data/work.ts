import type { StaticImageData } from "next/image";

// Assets
import cryptowebsite from "../assets/dev work/cryptowebsite.png";
import culinarywebsite from "../assets/dev work/culinarywebsite.png";
import Drumkit from "../assets/dev work/Drumkit.png";
import edsblog from "../assets/dev work/edsblog.png";
import fashionwebsite from "../assets/dev work/fashionwebsite.png";
import guildbankApp from "../assets/dev work/guildbank app pic.png";
import guildbank from "../assets/dev work/guildbank pic.png";
import homeSeller from "../assets/dev work/homeSeller.png";
import imdbmobilesite from "../assets/dev work/imdbmobilesite.png";
import oldwebsite from "../assets/dev work/oldwebsite.png";
import onlyfans from "../assets/dev work/onlyfans.png";
import personal from "../assets/dev work/personal.jpg";
import shoestore from "../assets/dev work/shoestore.png";
import space from "../assets/dev work/space.png";
import sunnyside from "../assets/dev work/sunnyside.png";
import Tindog from "../assets/dev work/Tindog.png";
import vanillaPlus from "../assets/dev work/vanilla-plus pic.png";
import chatGPT from "../assets/dev work/chatgpt app.png";
import backend from "../assets/dev work/backend project.png";
import taskHub from "../assets/dev work/task hub picture.png";
import cryptoIntel from "../assets/dev work/cryptointel.png";
import whatarethose from "../assets/dev work/whatarethose.png";


export type WorkItem = {
  /** Base keys: every card needs a thumbnail, name and description. */
  thumbnail: StaticImageData | string;
  name: string;
  description: string;
  /** Optional keys: the matching button or block only shows when provided. */
  github?: string;
  github2?: string;
  demo?: string;
  video?: string;
  techstack?: string[];
};

export const featuredWork: WorkItem[] = [
  {
    thumbnail: guildbank,
    name: "GuildBank DAPP",
    description:
      "A decentralized app for managing community funds on-chain. Wallets connect, members vote, and the vault is handled by a Solidity contract.",
    github: "https://github.com/PrivatePepega/GuildBank",
    github2: "https://github.com/PrivatePepega/GuildBank-SmartContracts",
    demo: "https://www.guildbank.biz",
    techstack: ["Next.js", "Solidity", "Smart Contracts", "Typescript", "Tailwind"],
  },
  {
    thumbnail: cryptoIntel,
    name: "ai Finance Research Platform",
    description: "AI fueled fullstack finance research platform. Ai system intelligence production and Ai chatbot with RAG and Tools",
    github: "https://github.com/PrivatePepega/crypto-intelligence-frontend",
    github2: "https://github.com/PrivatePepega/crypto-intelligence-backend",
    techstack: ["NextJS", "Typescript", "Node.js", "Express", "Vanilla Agents", "Langraph", "PostgresSQL"],
  },
  {
    thumbnail: guildbankApp,
    name: "GuildBank Windows App",
    description:
      "The desktop companion for GuildBank. Packaged with Electron and Vite so members can manage their funds without opening a browser.",
    github: "https://github.com/PrivatePepega/GuildBank-App",
    techstack: ["Electron", "Vite", "Node.js", "Tailwind"],
  },
];

export const portfolioWork: WorkItem[] = [
  {
    thumbnail: cryptoIntel,
    name: "ai Finance Research Platform",
    description: "AI fueled fullstack finance research platform. Ai system intelligence production and Ai chatbot with RAG and Tools",
    github: "https://github.com/PrivatePepega/crypto-intelligence-frontend",
    github2: "https://github.com/PrivatePepega/crypto-intelligence-backend",
    techstack: ["NextJS", "Typescript", "Node.js", "Express", "Vanilla Agents", "Langraph", "PostgresSQL"],
  },
  {
    thumbnail: guildbankApp,
    name: "GuildBank Windows App",
    description: "First Windows Electron App.",
    github: "https://github.com/PrivatePepega/GuildBank-App",
    techstack: ["Electron", "Vite", "Node.js", "Tailwind"],
  },
  {
    thumbnail: vanillaPlus,
    name: "Vanilla-Plus DAPP",
    description: "My second DAPP.",
    github: "https://github.com/PrivatePepega/Vanilla-Plus",
    github2: "https://github.com/PrivatePepega/GuildBank-SmartContracts",
    demo: "https://www.vanilla-plus.com",
    techstack: ["Next.js", "Solidity", "Smart Contracts", "Typescript", "Tailwind"],
  },
  {
    thumbnail: guildbank,
    name: "GuildBank DAPP",
    description: "My first DAPP.",
    github: "https://github.com/PrivatePepega/GuildBank",
    github2: "https://github.com/PrivatePepega/GuildBank-SmartContracts",
    demo: "https://www.guildbank.biz",
    techstack: ["Next.js", "Solidity", "Smart Contracts", "Typescript", "Tailwind"],
  },
  {
    thumbnail: taskHub,
    name: "Tutorial Fullstack Task Management app",
    description: "A fullstack app built with NextJS on the frontend and NodeJs with Express on the backend with MongoDB as our database. Complex app with proper auth and email validation. Task creation with sub tasks, members, comments, emojis and activity list. Learnt a bunch, pretty cool app.",
    github: "https://github.com/PrivatePepega/management-dashboard",
    techstack: ["NodeJS", "Express", "NextJS", "Typescript", "MondoDB"],
  },
  {
    thumbnail: backend,
    name: "Tutorial Express NodeJs Prisma PostgreSQL backend server",
    description: "Practicing backend development after watching the Scrimba backend course. Using Prisma instead of SQL for our PostgreSQL server. Auth and auth validator middleware, with a JWT. Simple movie API.",
    github: "https://github.com/PrivatePepega/movie-database-api",

    techstack: ["NodeJS", "Express", "Prisma", "Typescript", "PostgreSQL"],
  },
  {
    thumbnail: edsblog,
    name: "Headless Wordpress NextJS app",
    description: "Built a blog website using Wordpress Headlessly. Wordpress being our backend server and CMS (Content Management System) with NextJS being the frontend. ",
    github: "https://github.com/FernandoJCastellanos/Eds-Blog",
    video: "https://www.youtube.com/watch?v=semdIH5eGeQ",
    techstack: ["Headless Wordpress", "CTI", "ACF", "GraphQL", "Apollo", "NextJS"],
  },
  {
    thumbnail: homeSeller,
    name: "Tutorial Headless Wordpress NextJS website",
    description: "I took a course about how to build proper Headless Wordpress. How to make it so we can set up Wordpress as the CMS (Content Management System) to be used as a backend to manage content and styles to be set as a GraphQL to be called by the NextJS app and render the webpage’s content. First time working with actually building the database architecture this time with GraphQL.",
    github: "https://github.com/FernandoJCastellanos/Homes-App",
    video: "https://www.youtube.com/watch?v=8SGU9MMV-4U",
    techstack: ["Headless Wordpress", "CTI", "ACF", "GraphQl", "Apollo", "NextJS"],
  },
  {
    thumbnail: Tindog,
    name: "Headless Wordpress NextJS webpage",
    description: "I was having lots of trouble getting a job so I pivoted into Wordpress seeing how it was the tech stack being used in the Advertising Industry and that's where I come from so it made sense for me to move back into the Ad world. This was built using Wordpress as a backend server as a CMS (Content Management System) with Nextjs frontend.",
    github: "https://github.com/FernandoJCastellanos/WP-Headless-Tindog",
    video: "https://www.youtube.com/watch?v=AkiOaqVMAoc",
    techstack: ["Headless Wordpress", "Elementor", "REST-API", "NextJS"],
  },
  {
    thumbnail: chatGPT,
    name: "Tutorial ChatGPT Wrapper",
    description: "First time building a fullstack app with a backend server. Got to learn a bit about auth and backend api routing. Got to see how ChatGPT agents worked back then it was super primitive, no tools, no RAG, no frameworks. Simple system and user prompts.",
    github: "https://github.com/FernandoJCastellanos/ChatApp-AI-Web-Fullstack",
    techstack: ["Fullstack", "AI Wrapper", "Vite", "Backend"],
  },
  {
    thumbnail: onlyfans,
    name: "Tutorial React Native and AWS S3",
    description: "I was looking into job postings and I kept seeing React Native so I kept building React Native apps, this one was the first time working with AWS S3 bucket. My last React Native app so far, learnt much about React Native framework architecture and limitations and rendering abilities. This is an Onlyfans clone got to learn a bit about database architecture got to see how likes and comments work.",
    github: "https://github.com/FernandoJCastellanos/Onlyfans-App-Fullstack",
    video: "https://www.youtube.com/watch?v=MCgKAshyd_k",
    techstack: ["Database", "React Native", "AWS S3"],
  },
  {
    thumbnail: whatarethose,
    name: "Tutorial First Fullstack app with React Native and MongoDB",
    description: "First database app learning how MongoDB works, no actual backend server building simple database migrations and API calling. First time working with database set up and logic.",    github: "https://github.com/FernandoJCastellanos/Nike-E-Commerce-app",
    video: "https://www.youtube.com/watch?v=YAuSJl5kj6s",
    techstack: ["Database", "React Native", "MongoDB", "Stripe"],
  },
  {
    thumbnail: cryptowebsite,
    name: "Tutorial React Redux API website",
    description: "preAi, React website learning about Redux and API fetching with it. Learning about how to interact and work with APIs on websites.",
    github: "https://github.com/FernandoJCastellanos/CryptoVerse",
    demo: "https://fernandojcastellanos.github.io/CryptoVerse/",
    video: "https://www.youtube.com/watch?v=KtX6ak9g2Hg",
    techstack: ["React", "Redux", "Typescript"],
  },
  {
    thumbnail: culinarywebsite,
    name: "Tutorial React SASS website",
    description: "preAi, React website first time using SASS. Got to learn about SASS color changing settings and practiced CSS animations. Also my first time using Typescript even though it wasn't a big Typescript app.",
    github: "https://github.com/FernandoJCastellanos/Recipe-Site",
    demo: "https://fernandojcastellanos.github.io/Recipe-Site/",
    video: "https://www.youtube.com/watch?v=cnwgg7GMEhA",
    techstack: ["React", "Typescript", "SASS"],
  },
  {
    thumbnail: imdbmobilesite,
    name: "Tutorial first React Native app",
    description: "preAi, first React Native tutorial. Had an interview for a React Native app and decided to learn some React Native. It was the first project using APIs and learning about fetch requests.",
    github: "https://github.com/FernandoJCastellanos/OMDBapp--ReactNative",
    video: "https://www.youtube.com/watch?v=0emdp0ivIRQ",
    techstack: ["React Native", "CSS"],
  },
  {
    thumbnail: shoestore,
    name: "preDesigned first React webpage",
    description: "preAi webpage, first webpage built with react. A frontend mentor design webpage, built it myself.",
    github: "https://github.com/FernandoJCastellanos/E-Commerce-Site---React",
    demo: "https://fernandojcastellanos.github.io/E-Commerce-Site---React/",
    video: "https://www.youtube.com/watch?v=1dUh0SFUDcI",
    techstack: ["React", "CSS"],
  },
  {
    thumbnail: oldwebsite,
    name: "Personal project for my Dev portfolio",
    description: "preAi webpage for my dev portfolio. Last vanilla HTML,CSS and javascript before I started moving into react.",
    github:
      "https://github.com/FernandoJCastellanos/Vanilla-Frontend-Development-Website",
    demo: "https://fernandojcastellanos.github.io/Personal-Developer-Website/",
    video: "https://www.youtube.com/watch?v=Ppm6D2ZvGcc",
    techstack: ["HTML", "CSS", "JavaScript"],
  },
  {
    thumbnail: space,
    name: "preDesigned website",
    description: "preAi website from frontend mentor, I was given assets, design and example video. So I built it knowing what I knew. This one had complex javascript code and css animations.",
    github: "https://github.com/FernandoJCastellanos/Space-Tourism-Website",
    demo: "https://fernandojcastellanos.github.io/Space-Tourism-Website/",
    video: "https://www.youtube.com/watch?v=Jh7JkAkKp5g",
    techstack: ["HTML", "CSS", "JavaScript"],
  },
  {
    thumbnail: fashionwebsite,
    name: "preDesigned newsletter page",
    description: "preAi, coding was a thing so I kept practicing html, css and javascript as I was told to do. I got this design from frontendMentor and built it myself.",
    github: "https://github.com/FernandoJCastellanos/base-apparel-landing-page",
    demo: "https://fernandojcastellanos.github.io/base-apparel-landing-page/",
    video: "https://www.youtube.com/watch?v=1aehupwY3J8",
    techstack: ["HTML", "CSS"],
  },
  {
    thumbnail: sunnyside,
    name: "preDesigned single page webpage",
    description: "preAi, coding was a thing so I kept practicing html, css and javascript like I was told to. I got this design from frontendMentor and built it myself.",
    github: "https://github.com/FernandoJCastellanos/SunnySide-Ad-Agency-",
    demo: "https://fernandojcastellanos.github.io/SunnySide-Ad-Agency-/",
    video: "https://www.youtube.com/watch?v=PkBH0ch-fIE",
    techstack: ["HTML", "CSS"],
  },
  {
    thumbnail: personal,
    name: "Personal project, my Motion Design Website",
    description: "preAi. First personal project I designed and built myself, I already had a freelance animation portfolio website but built with squarespace templates. This one I designed and built myself. I really liked it. Vanilla HTML, CSS and Javascript website.",
    github: "https://github.com/FernandoJCastellanos/Personal-Art-Website",
    demo: "https://fernandojcastellanos.github.io/Personal-Art-Website/",
    video: "https://www.youtube.com/watch?v=eirOLkjPSoc",
    techstack: ["HTML", "CSS", "JavaScript"],
  },
  {
    thumbnail: Drumkit,
    name: "Tutorial sound board site",
    description: "preAi. Second website built follow a web dev course. Heavy javascript HTML site.",
    github: "https://github.com/FernandoJCastellanos/Drum-Kit",
    demo: "https://fernandojcastellanos.github.io/Drum-Kit/",
    video: "https://www.youtube.com/watch?v=VXNTfJcLVbU",
    techstack: ["HTML", "CSS", "JavaScript"],
  },
  {
    thumbnail: Tindog,
    name: "Tutorial webpage",
    description: "preAi. First website I built following a web dev course.",
    github: "https://github.com/FernandoJCastellanos/Tindog",
    demo: "https://fernandojcastellanos.github.io/Tindog/",
    video: "https://www.youtube.com/watch?v=xQx6QH6_z9M",
    techstack: ["HTML", "CSS", "JavaScript"],
  },
];
