import SkillInfo from "./SkillInfo";
import DisplaySection from "../DisplaySection";

function SkillInfoSection({ skills }) {
  return (
    <div className="skill-info-section resume-section">
      <DisplaySection
        array={skills}
        InfoComponent={SkillInfo}
        title="Skill"
      />
    </div>
  );
}

export default SkillInfoSection;