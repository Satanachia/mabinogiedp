import SkillTab from "@/components/skill/SkillTab";
import SkillTable from "@/components/skill/SkillTable";

export default function AllSkillPage() {
  return (
    <main className="inner">
      <SkillTab params="all" />

      <SkillTable params="all" />
    </main>
  );
}
