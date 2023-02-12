import { Link,useNavigate } from "react-router-dom";
import userDataContext from "../context/user-data-context";
import { useFormik } from "formik";
import { useContext } from "react";
import Layout from "../components/Layout";
import { professionalSchema } from "./schemas/professionalSchema";

const Professional = () => {

  const { userData, setUserData } = useContext(userDataContext);
  
  const navigate=useNavigate();

  const initialValues=userData;

  console.log('professional',userData)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: professionalSchema,
      onSubmit: (values) => {
        console.log(values);
        setUserData(values)
        navigate('/projects');
      }
    });

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="header" style={{borderBottom: '3px solid  #4070f4',width: '280px'}}>
          <h2>Professional Experience</h2>{" "}
        </div>
        <div className="form-container">
        <div className="input-div">
          <div className="form-controller">
            <img src="https://img.icons8.com/ios/100/000000/enterprise-resource-planning.png" />
            <input
              type="text"
              value={values.Org1}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Organisation"
              name="Org1"
            />
          </div>
          {errors.Org1 && touched.Org1 ? (<small className="error"><p>{errors.Org1}</p></small>) : null}
          </div>
          <div className="input-div">
          <div className="form-controller">
            <p>From</p>
            <input
              type="date"
              value={values.Org1SY}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="DD/MM/YYYY"
              name="Org1SY"
            />
          </div>
          {errors.Org1SY && touched.Org1SY ? (<small className="error"><p>{errors.Org1SY}</p></small>) : null}
          </div>
          <div className="input-div">
          <div className="form-controller">
            <p>To</p>
            <input
              type="date"
              value={values.Org1EY}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="DD/MM/YYYY"
              name="Org1EY"
            />
            {errors.Org1EY && touched.Org1EY ? (<small className="error"><p>{errors.Org1EY}</p></small>) : null}
            </div>
          </div>
        </div>
        <div className="form-container">
        <div className="input-div full-width-input">
          <div className="form-controller ">
            <p>Experience</p>
            <input
              type="text"
              value={values.Org1D}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Describe your job at"
              name="Org1D"
            />
          </div>
          {errors.Org1D && touched.Org1D ? (<small className="error"><p>{errors.Org1D}</p></small>) : null}
          </div>
        </div>
        <div className="form-container">
        <div className="input-div">
          <div className="form-controller">
            <img src="https://img.icons8.com/ios/100/000000/enterprise-resource-planning.png" />
            <input
              type="text"
              value={values.Org2}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Organisation"
              name="Org2"
            />
          </div>
          {errors.Org2 && touched.Org2 ? (<small className="error"><p>{errors.Org2}</p></small>) : null}
          </div>
          <div className="input-div">
          <div className="form-controller">
            <p>From</p>
            <input
              type="date"
              value={values.Org2SY}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="DD/MM/YYYY"
              name="Org2SY"
            />
          </div>
          {errors.Org2SY && touched.Org2SY ? (<small className="error"><p>{errors.Org2SY}</p></small>) : null}
          </div>
          <div className="input-div">
          <div className="form-controller">
            <p>To</p>
            <input
              type="date"
              value={values.Org2EY}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="DD/MM/YYYY"
              name="Org2EY"
            />
            {errors.Org2EY && touched.Org2EY ? (<small className="error"><p>{errors.Org2EY}</p></small>) : null}
            </div>
          </div>
        </div>
        <div className="form-container">
        <div className="input-div full-width-input">
          <div className="form-controller">
            <p>Experience</p>
            <input
              type="text"
              value={values.Org2D}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Describe your job at"
              name="Org2D"
            />
          </div>
          {errors.Org2D && touched.Org2D ? (<small className="error"><p>{errors.Org2D}</p></small>) : null}
          </div>
        </div>
        <div className="button-container">
          <Link
            className="btn back-btn hover"
            to="/education"
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
export default Professional;
