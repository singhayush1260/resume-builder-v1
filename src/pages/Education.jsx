import { Link,useNavigate } from "react-router-dom";
import userDataContext from "../context/user-data-context";
import { useContext } from "react";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import { educationSchema } from "./schemas/educationSchema";

/*const initialValues = {
  School: "",
  SchoolSY: "",
  SchoolEY: "",
  College: "",
  CollegeSY: "",
  CollegeEY: "",
  CollegeEY: "",
  CollegeD: "",
};*/

const Education = () => {

  const navigate=useNavigate();

  const { userData, setUserData } = useContext(userDataContext);

  const initialValues=userData;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: educationSchema,
      onSubmit: (values) => {
        setUserData(values);
        console.log(values);
        navigate('/professional');
      },
    });

  console.log(userData);
  return (
    <Layout>
      <form>
        <div className="header" style={{borderBottom: '3px solid  #4070f4',width: '120px'}}>
          <h2>Education</h2>{" "}
        </div>
        <div className="form-container">
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/fluency-systems-regular/48/000000/school.png" />
              <input
                type="text"
                value={values.School}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="School"
                id="name"
                name="School"
              />
            </div>
            { errors.School && touched.School ?( <small className="error"><p>{errors.School}</p></small>):null}
          </div>
          <div className="input-div">
            <div className="form-controller">
              <p>From</p>
              <input
                type="date"
                value={values.SchoolSY}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="DD/MM/YYYY"
                id="number"
                name="SchoolSY"
              />
            </div>
            { errors.SchoolSY && touched.SchoolSY ?( <small className="error"><p>{errors.SchoolSY}</p></small>):null}
          </div>
          <div className="input-div">
            <div className="form-controller">
              <p>To</p>
              <input
                type="date"
                value={values.SchoolEY}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="DD/MM/YYYY"
                name="SchoolEY"
              />
            </div>
            { errors.SchoolEY && touched.SchoolEY ?( <small className="error"><p>{errors.SchoolEY}</p></small>):null}
          </div>
        </div>
        <div className="form-container">
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/external-others-maxicons/62/000000/external-college-high-school-others-maxicons-12.png" />
              <input
                type="text"
                value={values.College}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="College"
                id="name"
                name="College"
              />
            </div>
            { errors.College && touched.College ?( <small className="error"><p>{errors.College}</p></small>):null}
          </div>
          <div className="input-div">
            <div className="form-controller">
              <p>From</p>
              <input
                type="date"
                value={values.CollegeSY}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="DD/MM/YYYY"
                id="number"
                name="CollegeSY"
              />
            </div>
            { errors.CollegeSY && touched.CollegeSY ?( <small className="error"><p>{errors.CollegeSY}</p></small>):null}
          </div>
          <div className="input-div">
            <div className="form-controller">
              <p>To</p>
              <input
                type="date"
                value={values.CollegeEY}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="DD/MM/YYYY"
                name="CollegeEY"
              />
            </div>
            { errors.SchoolEY && touched.SchoolEY ?( <small className="error"><p>{errors.SchoolEY}</p></small>):null}
          </div>
        </div>

        <div className="form-container">
          <div className="input-div  full-width-input">
            <div className="form-controller">
              <p>College Description</p>
              <input
                type="text"
                value={values.CollegeD}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Describe your course"
                name="CollegeD"
              />
            </div>
            { errors.CollegeD && touched.CollegeD ?( <small className="error"><p>{errors.CollegeD}</p></small>):null}
          </div>
        </div>
        <div className="button-container">
          <Link
            className="btn back-btn"
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            Back
          </Link>
          <Link className="btn next-btn" onClick={handleSubmit} style={{ textDecoration: "none" }}>Next</Link>
        </div>
      </form>
    </Layout>
  );
};
export default Education;
