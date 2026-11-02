// Environment
import Image from "next/image";

// Assets
import type { WorkItem } from "../data/work";

const WorkCard = ({
  thumbnail,
  name,
  description,
  github,
  github2,
  demo,
  video,
  techstack,
}: WorkItem) => {
  const links = [
    github ? { label: "GitHub", href: github } : null,
    github2 ? { label: "GitHub (Backend)", href: github2 } : null,
    demo ? { label: "Demo", href: demo } : null,
    video ? { label: "Video", href: video } : null,
  ].filter((link): link is { label: string; href: string } => link !== null);

  return (
    <article className="flex w-full flex-col gap-8 rounded-md border-2 border-white p-6 md:flex-row md:items-start md:gap-12 md:p-8">
      {/* Thumbnail + links */}
      <div className="flex w-full flex-col gap-5 md:w-1/2">
        <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-neutral-900">
          <Image
            className="object-cover object-top"
            src={thumbnail}
            alt={name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                className="rounded-[5px] border-2 border-white px-4 py-2 transition-all duration-200 ease-in-out hover:scale-105 hover:border-aliceblue hover:bg-aliceblue hover:text-black"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex w-full flex-col gap-5 md:w-1/2">
        <p className="text-xl">{name}</p>
        <p className="text-lg leading-relaxed text-neutral-300">
          {description}
        </p>

        {techstack && techstack.length > 0 && (
          <div className="flex flex-col gap-3">
            <p className="text-lg">Tech Stack</p>
            <ul className="flex flex-wrap gap-2">
              {techstack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-[5px] border border-white/40 px-2 py-1 text-sm text-neutral-200"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};

export default WorkCard;