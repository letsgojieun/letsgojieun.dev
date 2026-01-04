import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/data/about";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export function ProfileSection() {
  return (
    <section
      aria-labelledby="about-profile"
      className="flex items-center flex-col gap-4 md:w-[400px] md:shrink-0"
    >
      <div className="relative">
        <Image
          src={PROFILE.image}
          alt="jieungo's profile image"
          width={250}
          height={250}
          sizes="(max-width: 768px) 80vw, 250px"
          quality={60}
          className="rounded-full object-cover border-2 divider-theme bg-button"
          priority
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-3">
          <h1 id="about-profile" className="section-title">
            {PROFILE.name}
          </h1>
          <div className="flex gap-3">
            <Link
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-button border divider-theme hover:scale-110 hover:accent-highlight transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-xl" />
            </Link>
            <Link
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-button border divider-theme hover:scale-110 hover:accent-highlight transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </Link>
            <Link
              href={`mailto:${PROFILE.email}`}
              className="p-3 rounded-full bg-button border divider-theme hover:scale-110 hover:accent-highlight transition-all duration-200"
              aria-label="Email"
            >
              <HiOutlineMail className="text-xl" />
            </Link>
          </div>
        </div>
        <div>
          <span className="font-bold">
            3rd-year React Native cross-platform specialist.
          </span>
          <p className="whitespace-pre-line">
            {`
            Over 3 years in startups, freelance, and personal projects, I've built mobile and web services with React and React Native (Expo). 

I focus on solving problems and improving metrics rather than just adding features. 

Key Experience

Built Shoobbang, a baking recipe app, from design to deployment—refined it based on real bakers' feedback.
Prefer agile workflow: build small, ship fast → gather feedback → iterate. 

Currently exploring the full service lifecycle (A to Z), 
and studying Rive to create interactive animations.`}
          </p>
        </div>
      </div>
    </section>
  );
}
