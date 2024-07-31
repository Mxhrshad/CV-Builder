import InputGroup from "../InputGroup";
import Buttons from "../Buttons";

function SkillForm(props) {
  const {
    skillTitle,
    skillDescription,
    id,
  } = props.form;

  const { onChange, cancel, save, remove } = props;

  return (
    <form
      className="skill-form section-form"
      id={id}
      data-array-name="skills"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup
        type="text"
        id="skill-title"
        labelText="Skill Title"
        placeholder="Enter a Skill Title"
        value={skillTitle}
        onChange={onChange}
        data-key="skillTitle"
      />
      <InputGroup
        type="textarea"
        id="skillDescription"
        labelText="Skill Description"
        placeholder="Enter Description"
        value={skillDescription}
        onChange={onChange}
        data-key="skillDescription"
        optional
      />
      <Buttons save={save} cancel={cancel} remove={remove} />
    </form>
  );
}

export default SkillForm;