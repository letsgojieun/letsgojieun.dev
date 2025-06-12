import Image from "next/image";
import Link from "next/link";
import EmojiBadge from "./EmojiBadge";
import { PROFILE } from "@/data/about";

export function ProfileSection() {
  return (
    <section
      aria-labelledby="about-profile"
      className="flex items-center flex-col gap-4"
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
        <EmojiBadge />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 id="about-profile" className="section-title">
            {PROFILE.name}
          </h1>
          <Link
            href={`mailto:${PROFILE.email}`}
            className="text-xl  bg-button  
            text-center font-gaegu border-rounded divider-theme w-full"
          >
            {`Let's Coffee Chat`}
          </Link>
        </div>
        <div>
          {PROFILE.aboutInfo.map((item) => (
            <p key={item} className="mb-1">
              {item}
            </p>
          ))}
        </div>
        <div className="divider-theme border-b" />
        <Strengths strengths={PROFILE.strengths} />
      </div>
    </section>
  );
}

function Strengths({ strengths }: { strengths: string[] }) {
  return (
    <div>
      <span>Key Strengths</span>
      <ul className="list-disc pl-5 space-y-1">
        {strengths.map((strength) => (
          <li key={strength}>{strength}</li>
        ))}
      </ul>
    </div>
  );
}
