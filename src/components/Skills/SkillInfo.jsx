import "../../styles/SkillInfo.css";

function SkillInfo({ info }) {
  return (
    <div className="skill-info">
      <div className="skill-info-group">
        <p className="skill">
          {info.skillTitle}
        </p>
        <p>{info.skillDescription}</p>
      </div>
    </div>
  );
}

export default SkillInfo;