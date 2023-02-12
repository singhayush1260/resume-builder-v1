import { Link,useNavigate} from "react-router-dom";
import userDataContext from "../context/user-data-context";
import { useContext } from "react";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import { miscelleneousSchema } from "./schemas/miscelleneousSchema";

const Miscelleneous = () => {

  const { userData, setUserData } = useContext(userDataContext);

  const initialValues=userData;

  console.log('miscelleneous',userData);

  const navigate=useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: miscelleneousSchema,
      onSubmit: (values) => {
        setUserData(values);
        localStorage.setItem('resume-data',JSON.stringify(values));
        console.log(values);
        navigate('/view-resume');
      },
    });

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="header" style={{borderBottom: '3px solid  #4070f4',width: '165px'}}>
          <h2>Miscelleneous</h2>
        </div>
        <div className="form-container">
        <div className="input-div  full-width-input">
          <div className="form-controller full-width-input">
            <img src="https://img.icons8.com/ios/100/000000/source-code.png" />
            <input
              type="text"
              value={values.Skills}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Technical skills"
              name="Skills"
              id="Skills"
            />
          </div>
          {errors.Skills && touched.Skills ? (<small className="error"><p>{errors.Skills}</p></small>) : null}
          </div>
        </div>
        <div className="form-container">
        <div className="input-div  full-width-input">
          <div className="form-controller full-width-input">
            <img src="https://img.icons8.com/ios/100/000000/singing-teacher.png" />
            <input
              type="text"
              value={values.Hobbies}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Hobbies/Interests"
              name="Hobbies"
            />
          </div>
          {errors.Hobbies && touched.Hobbies ? (<small className="error"><p>{errors.Hobbies}</p></small>) : null}
          </div>
        </div>
        <div className="form-container">
        <div className="input-div  full-width-input">
          <div className="form-controller">
            <img src="https://img.icons8.com/ios/100/000000/google-translate.png" />
            <input
              type="text"
              value={values.Languages}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Languages"
              name="Languages"
            />
          </div>
          {errors.Languages && touched.Languages ? (<small className="error"><p>{errors.Languages}</p></small>) : null}
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
          <Link className="btn next-btn" onClick={handleSubmit} style={{ textDecoration: "none" }}>View Resume</Link>
        </div>
      </form>
    </Layout>
  );
};
export default Miscelleneous;
//<Link className="btn next-btn" to="/preview-resume" style={{ textDecoration: 'none' }}>Next</Link>
