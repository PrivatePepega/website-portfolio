"use client";

// Assets
import { useEffect, useMemo, useState } from "react";
import FeaturedWork from "./FeaturedWork";
import HR1 from "./HR1";
import PortfolioWork from "./PortfolioWork";

const baseSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Solidity",
  "React Native",
  "NextJS",
  "Typescript",
  "Tailwind",
  "Express",
  "Electron",
  "Wordpress",
  "NodeJS",
  "MongoDB",
  "Prisma",
  "Git",
  "PostgreSQL",
  "Debugging",
  "Docker",
  "CI/CD",

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

const BlockDeveloper = () => {
  const [shuffleKey, setShuffleKey] = useState<number>(0);

  // Generate a random seed on client mount.
  // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: we want to shuffle once on mount
  useEffect(() => {
    setShuffleKey(Math.floor(Math.random() * 2 ** 31));
  }, []);

  const skills = useMemo(() => shuffleArray(baseSkills, shuffleKey), [shuffleKey]);

  return (
    <div className="flex flex-col items-center">
      {/* hard skills */}
      <div className="mx-6 mt-12 max-w-2xl rounded-md border-2 border-white px-5 pb-10">
        <p className="my-8 text-center text-xl">Developer Hard Skills</p>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {skills.map((skill, index) => (
            <li
              key={`${skill}-${index}`}
              className="cursor-pointer rounded-[5px] border-2 border-white px-2.5 py-2.5 transition-all duration-200 ease-in-out hover:scale-110 hover:border-aliceblue hover:bg-aliceblue hover:text-black"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <HR1 className="pb-16 pt-24" />

      {/* featured work */}
      <FeaturedWork />

      <HR1 className="pb-16 pt-24" />

      {/* portfolio */}
      <PortfolioWork />
    </div>
  );
};

export default BlockDeveloper;