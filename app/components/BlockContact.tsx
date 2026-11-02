"use client";

// Assets
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const baseServices = [
  "Frontend Dev",
  "Backend Dev",
  "Full Stack",
  "Discovery",
  "Creative",
  "Production",
  "Project Management",
  "Product Development",
  "Software Engineer",
  "Systems Architecture",
  "Agentic Engineer",
  "AI Engineer",
  "Branding",
  "Teamwork",
  "Decision Making",
  "Writting",
  "Communications"

];

const contactLinks = [
  {
    label: "fernandojcastellanos@gmail.com",
    href: "mailto:fernandojcastellanos@gmail.com",
    icon: "/icons/email-icon.svg",
    alt: "Email icon",
  },
  // {
  //   label: "@",
  //   href: "https://twitter.com/",
  //   icon: "/icons/twitter.svg",
  //   alt: "Twitter icon",
  // },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fernando-castellanos-03a484160/",
    icon: "/icons/linkedin-icon.svg",
    alt: "LinkedIn icon",
  },
  // {
  //   label: "Curriculum Vitae",
  //   href: "https://drive.google.com",
  //   icon: "/icons/cv-icon.svg",
  //   alt: "CV icon",
  // },
];

const shuffleArray = <T,>(array: T[], seed: number): T[] => {
  const copy = [...array];
  let currentSeed = seed;
  for (let i = copy.length - 1; i > 0; i--) {
    currentSeed = (currentSeed * 1664525 + 1013904223) % 2 ** 31;
    const j = Math.floor((currentSeed / 2 ** 31) * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const BlockContact = () => {
  const [shuffleKey, setShuffleKey] = useState<number>(0);

  // Generate a random seed on client mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setShuffleKey(Math.floor(Math.random() * 2 ** 31));
  }, []);

  const services = useMemo(() => shuffleArray(baseServices, shuffleKey), [shuffleKey]);

  return (
    <div className="flex flex-col items-center">
      {/* Services to provide */}
      <div className="mx-6 my-12 max-w-2xl rounded-md border-2 border-white px-5 pb-10">
        <p className="my-8 text-center text-xl">Service</p>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {services.map((service, index) => (
            <li
              key={`${service}-${index}`}
              className="cursor-pointer rounded-[5px] border-2 border-white px-2.5 py-2.5 transition-all duration-200 ease-in-out hover:scale-110 hover:border-aliceblue hover:bg-aliceblue hover:text-black"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact links */}
      <div className="my-12 flex flex-col gap-10">
        {contactLinks.map(({ label, href, icon, alt }) => (
          <a
            key={label}
            className="flex items-center justify-center gap-3 transition-opacity duration-200 hover:opacity-70"
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          >
            <Image className="h-7 w-7" src={icon} alt={alt} width={28} height={28} />
            <p>{label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlockContact;