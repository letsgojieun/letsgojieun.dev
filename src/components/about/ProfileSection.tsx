import Image from "next/image";
import Link from "next/link";
import EmojiBadge from "@/components/EmojiBadge";
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
          width={300}
          height={200}
          className="rounded-full object-cover border-2 border-divider-light dark:border-divider-dark bg-button-light dark:bg-button-dark"
          priority
        />
        <EmojiBadge />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 id="about-profile" className="text-2xl font-bold">
            {PROFILE.name}
          </h1>
          <Link
            href={`mailto:${PROFILE.email}`}
            className="text-xl border-1 flex-1 border-divider-light dark:border-divider-dark bg-button-light dark:bg-button-dark w-full rounded-md text-center p-1 font-gaegu"
          >
            {`Let's Coffee Chat`}
          </Link>
        </div>
        <div>
          {PROFILE.aboutInfo.map((item) => (
            <p key={item} className="dark:text-gray-300 mb-1">
              {item}
            </p>
          ))}
        </div>
        <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
        <Strengths strengths={PROFILE.strengths} />
      </div>
    </section>
  );
}

function Strengths({ strengths }: { strengths: string[] }) {
  return (
    <div>
      <span>Key Strengths</span>
      <ul className="list-disc pl-5 space-y-1 dark:text-gray-200">
        {strengths.map((strength) => (
          <li key={strength}>{strength}</li>
        ))}
      </ul>
    </div>
  );
}
