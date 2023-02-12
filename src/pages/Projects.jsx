
import { Link,useNavigate } from "react-router-dom";
import userDataContext from "../context/user-data-context";
import { useContext } from "react";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import { projectsSchema } from "./schemas/projectsSchema";

const Projects = () => {

  const navigate=useNavigate();

  const { userData, setUserData } = useContext(userDataContext);

  const initialValues=userData;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: projectsSchema,
      onSubmit: (values) => {
        setUserData(values);
        console.log(values);
        navigate('/miscelleneous');
      },
    });

  console.log(userData);
  return (
    <Layout>
      <form>
        <div className="header" style={{borderBottom: '3px solid  #4070f4',width: '95px'}}>
          <h2>Projects</h2>{" "}
        </div>
        <div className="form-container">
          <div className="input-div">
            <div className="form-controller" style={{width:'10px'}}>
              <img src="https://img.icons8.com/fluency-systems-regular/48/000000/school.png" />
              <input
                type="text"
                value={values.Project1}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Project 1 Idea"
                id="name"
                name="Project1"
              />
            </div>
            { errors.Project1 && touched.Project1 ?( <small className="error"><p>{errors.Project1}</p></small>):null}
          </div>
          <div className="input-div">
            <div className="form-controller" style={{width:'40px'}}>
              <p>Link</p>
              <input
                type="text"
                value={values.Project1Link}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Project 1 Link"
                id="number"
                name="Project1Link"
              />
            </div>
            { errors.Project1Link && touched.Project1Link ?( <small className="error"><p>{errors.Project1Link}</p></small>):null}
          </div>
        </div>
        <div className="form-container">
          <div className="input-div  full-width-input">
            <div className="form-controller">
              <p>Description</p>
              <input
                type="text"
                value={values.Project1D}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Describe your project"
                name="Project1D"
              />
            </div>
            { errors.Project1D && touched.Project1D ?( <small className="error"><p>{errors.Project1D}</p></small>):null}
          </div>
        </div>

        <div className="form-container">
          <div className="input-div">
            <div className="form-controller" style={{width:'10px'}}>
              <img src="https://img.icons8.com/fluency-systems-regular/48/000000/school.png" />
              <input
                type="text"
                value={values.Project2}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Project 2 Idea"
                id="name"
                name="Project2"
              />
            </div>
            { errors.Project2 && touched.Project2 ?( <small className="error"><p>{errors.Project1}</p></small>):null}
          </div>
          <div className="input-div">
            <div className="form-controller" style={{width:'40px'}}>
              <p>Link</p>
              <input
                type="text"
                value={values.Project2Link}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Project 2 Link"
                id="number"
                name="Project2Link"
              />
            </div>
            { errors.Project2Link && touched.Project2Link ?( <small className="error"><p>{errors.Project2Link}</p></small>):null}
          </div>
        </div>
        <div className="form-container">
          <div className="input-div  full-width-input">
            <div className="form-controller">
              <p>Description</p>
              <input
                type="text"
                value={values.Project2D}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Describe your project"
                name="Project2D"
              />
            </div>
            { errors.Project2D && touched.Project2D ?( <small className="error"><p>{errors.Project2D}</p></small>):null}
          </div>
        </div>

        <div className="button-container">
          <Link
            className="btn back-btn"
            to="/professional"
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
export default Projects;
