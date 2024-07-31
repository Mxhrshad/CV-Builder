import ExpandSection from "../ExpandSection";
import CreateForm from "../CreateForm";
import "../../styles/Section.css";
import DisplayForms from "../DisplayForms";
import SkillForm from "./SkillForm";

function AddSkillSection({
  isOpen,
  createForm,
  setOpen,
  skills,
  onChange,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) {
  return (
    <div className="add-Skills-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Skills"
        iconName="fa-solid fa-wrench"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={skills}
          onChange={onChange}
          onCancel={onCancel}
          toggleCollapsed={toggleCollapsed}
          onHide={onHide}
          onRemove={onRemove}
          FormComponent={SkillForm}
          titleKey="skillTitle"
          arrayName="skills"
        />

        <CreateForm onClick={createForm} buttonText="Skills" />
      </div>
    </div>
  );
}

export default AddSkillSection;