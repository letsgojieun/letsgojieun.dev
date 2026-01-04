import { ProfileSection } from "@/components/about/ProfileSection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { CareersSection } from "@/components/about/CareersSection";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-16 font-solway">
      <ProfileSection />
      <div className="flex flex-col gap-10 items-start flex-1">
        <SkillsSection />
        <CareersSection />
      </div>
    </div>
  );
}
