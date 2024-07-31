import "../../styles/SkillInfo.css";

function SkillInfo({ info }) {
  return (
    <div className="skill-info">
      <div className="skill-info-group">
        <p className="experience-info-title">
          {info.skillTitle}
        </p>
        <p className="skill-info-description">{info.skillDescription}</p>
      </div>
    </div>
  );
}

export default SkillInfo;