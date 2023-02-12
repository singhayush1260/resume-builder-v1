import React from "react";
import "./Resume1.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import userDataContext from "../context/user-data-context";
import { useContext } from "react";
import { array } from "yup";
const Resume1 = () => {
  const { userData } = useContext(userDataContext);
  const {
    Name,
    Phone,
    Email,
    Pincode,
    City,
    State,
    Address,
    Linkedin,
    Twitter,
    Github,
    School,
    SchoolSY,
    SchoolEY,
    College,
    CollegeSY,
    CollegeEY,
    CollegeD,
    Org1,
    Org1SY,
    Org1EY,
    Org1D,
    Org2,
    Org2SY,
    Org2EY,
    Org2D,
    Skills,
    Hobbies,
    Languages,
    Project1,
    Project1Link,
    Project1D,
    Project2,
    Project2Link,
    Project2D,
  } = userData;
  console.log("inside resume1", userData);

  let fullName = Name.split(" ");
  console.log(fullName);
  let skillsArray = Skills.split(",");
  let hobbiesArray = Hobbies.split(",");
  let languagesArray = Languages.split(",");
  const generatePdf = () => {
    const content = document.querySelector(".resume-body");
    html2canvas(content, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const width = 210;
      const height = 297;
      const img = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(img, "PNG", 0, 0, width, height);
      pdf.save("resume.pdf");
    });
  };

  return (
    <body>
      <button onClick={generatePdf}>Download PDF</button>
      <div className="resume">
        <div className="resume-body">
          <div className="leftColumn">
            <div className="contact-info">
              <h1>
                {fullName[0]} <br /> {fullName[1]}
              </h1>
              <p>
                <i className="fa-solid fa-phone"></i>&nbsp;{Phone}
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>&nbsp;{Email}
              </p>
              <p>
                <i className="fa-brands fa-linkedin"></i>&nbsp;{Linkedin}
              </p>
              <p>
                <i className="fa-brands fa-twitter"></i>&nbsp;{Twitter}
              </p>
              <p>
                <i className="fa-brands fa-github"></i>&nbsp;{Github}
              </p>
            </div>
            <div className="skills">
              <h3>SKILLS</h3>
              <hr />
              {skillsArray.map((skill) => {
                return <p>{skill}</p>;
              })}
            </div>
            <div className="languages">
              <h3>LANGUAGES</h3>
              <hr />
              {languagesArray.map((skill) => {
                return <p>{skill}</p>;
              })}
            </div>
            <div className="hobbies">
              <h3>HOBBIES</h3>
              <hr />
              {hobbiesArray.map((skill) => {
                return <p>{skill}</p>;
              })}
            </div>
          </div>
          <div className="rightColumn">
            <div className="work-experience">
              <h3>PROFESSIONAL EXPERIENCE</h3>
              <hr style={{ backgroundColor: "black" }} />
              <div>
                <h3>{Org1}</h3>(
                <span>
                  {Org1SY} to {Org1EY}
                </span>
                )
                <ul style={{ wordWrap: "break-word" }}>
                  <li>
                    <h5>Experience</h5>
                    <p>{Org1D}</p>
                  </li>
                </ul>
              </div>
              <div>
                <br />
                <h3>{Org2}</h3>(
                <span>
                  {Org2SY} to {Org2EY}
                </span>
                )
                <ul style={{ wordWrap: "break-word" }}>
                  <li>
                    <h5>Experience</h5>
                    <p>{Org2D}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="education">
              <h3>EDUCATION</h3>
              <hr style={{ backgroundColor: "black" }} />
              <div>
                <h3>School:</h3>
                <h4>{School}</h4> From 
                  {SchoolSY} to {SchoolEY}
                <br />
                <br />
              </div>
              <div>
              <h3>College:</h3>
                <h4>{College}</h4> From 
                  {CollegeSY} to {CollegeEY}
                <ul style={{ wordWrap: "break-word" }}>
                  <li>{CollegeD}</li>
                </ul>
              </div>
            </div>
            <div className="projects">
            <h3>PROJECTS</h3>
              <hr style={{ backgroundColor: "black" }} />
              <h3>{Project1}</h3>
              <ul style={{ wordWrap: "break-word" }}>
                  <li>{Project1D}</li>
                </ul>
              {Project1Link ? (<><h5>Link: </h5> <span>{Project1Link}</span></>): null}
              <br />
              <h3>{Project2}</h3>
              <ul style={{ wordWrap: "break-word" }}>
                  <li>{Project2D}</li>
                </ul>
              {Project2Link ? (<><h5>Link: </h5> <span>{Project2Link}</span></>): null}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
export default Resume1;
/*

console.log('inside generate pdf function')
        let doc=new jsPDF("p","pt","a4");
        doc.setFontSize(9);
        doc.html(document.querySelector('.resume'),{
            callback:function(pdf){
                pdf.save('myresume.pdf')
            }
        })

*/
