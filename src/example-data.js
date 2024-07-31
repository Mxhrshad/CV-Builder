import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Insert Full Name",
    email: "Insert Email",
    phoneNumber: "Phone Number",
    address: "Your Address",
  },

  sections: {
    educations: [
      {
        degree: "Your Degree Here",
        schoolName: "The School Name",
        location: "Where?",
        startDate: "Start Date",
        endDate: "End Date",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Company Name",
        positionTitle: "Your Postition Title",
        location: "Where?",
        description:
          "a Description",
        startDate: "Start Date",
        endDate: "End Date",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],

    skills: [
      {
        skillTitle: "Your Skill",
        skillDescription: "a Description",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ]
  },
};

export default exampleData;