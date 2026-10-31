const skills = [
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
  "Wordpress",
  "NodeJS",
  "MongoDB",
  "Prisma",
  "Git",
  "Github",
];

const BlockDeveloper = () => {
  return (
    <div className="flex flex-col items-center">
      {/* hard skills */}
      <div className="mx-6 my-12 max-w-2xl rounded-md border-2 border-white px-5 pb-10">
        <p className="my-8 text-center text-xl">Developer Hard Skills</p>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="cursor-pointer rounded-[5px] border-2 border-white px-2.5 py-2.5 transition-all duration-200 ease-in-out hover:scale-110 hover:border-aliceblue hover:bg-aliceblue hover:text-black"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlockDeveloper;
