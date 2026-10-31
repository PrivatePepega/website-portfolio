// Environment
import Image from "next/image";

const services = [
  "Web Dev",
  "App Dev",
  "3D Motion",
  "2D Motion",
  "Strategy Sessions",
  "Consulting Sessions",
  "Discovery",
  "Creative Direction",
  "Art Direction",
  "Design",
  "Production",
  "Project Management",
  "Great Service",
];

const contactLinks = [
  {
    label: "fernandojcastellanos@gmail.com",
    href: "mailto:fernandojcastellanos@gmail.com",
    icon: "/icons/email-icon.svg",
    alt: "Email icon",
  },
  {
    label: "@FernandoJCaste1",
    href: "https://twitter.com/FernandoJCaste1",
    icon: "/icons/twitter.svg",
    alt: "Twitter icon",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fernando-castellanos-03a484160/",
    icon: "/icons/linkedin-icon.svg",
    alt: "LinkedIn icon",
  },
  {
    label: "Curriculum Vitae",
    href: "https://drive.google.com/drive/folders/1t5QwxgHUe2o40-wHOCAccktlMVxIGA-G?usp=sharing",
    icon: "/icons/cv-icon.svg",
    alt: "CV icon",
  },
];

const BlockContact = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Services to provide */}
      <div className="mx-6 my-12 max-w-2xl rounded-md border-2 border-white px-5 pb-10">
        <p className="my-8 text-center text-xl">Service</p>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {services.map((service) => (
            <li
              key={service}
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
