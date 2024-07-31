import "../styles/Resume.css";
import PersonalInfoSection from "./personal-info/PersonalInfoSection";
import EducationInfoSection from "./education/EducationInfoSection";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ExperienceInfoSection from "./experience/ExperienceInfoSection";
import SkillInfoSection from "./Skills/SkillInfoSection";
import { useEffect } from 'react';  
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.js'; 

function Resume({ personalInfo, sections, layout }) {

    useEffect(() => {  
        const downloadButton = document.getElementById('download-button');  

        const handleDownload = () => {  
            console.log("Download button clicked!"); // Debugging line  
            const element = document.querySelector('.resume-container');  
            html2pdf()  
                .from(element)  
                .save('your-resume.pdf')  
                .catch(error => console.error("Error generating PDF:", error)); // Error catching  
        }; 


        downloadButton.addEventListener('click', handleDownload);  

        // Clean up the event listener on component unmount  
        return () => {  
            downloadButton.removeEventListener('click', handleDownload);  
        };  
    }, []); // Empty dependency array to run on mount only 

  return (
    <div className="resume-side">
        <button id="download-button">Download Resume</button>
        <div className="resume-container">
        <div className={`resume ${layout}`}>
            <PersonalInfoSection
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
            />
            <div>
            <EducationInfoSection educations={sections.educations} />
            <ExperienceInfoSection experiences={sections.experiences} />
            <SkillInfoSection skills={sections.skills} />
            </div>
        </div>
        </div>
    </div>
  );
}

export default Resume;