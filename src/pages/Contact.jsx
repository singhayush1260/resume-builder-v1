import { Link, useNavigate } from "react-router-dom";
import userDataContext from "../context/user-data-context";
import { useContext } from "react";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import { contactSchema } from "./schemas/contactSchema";

const Contact = () => {

const navigate=useNavigate();
  
const { userData, setUserData } = useContext(userDataContext);

const initialValues=userData;

console.log('initial values',initialValues);

const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactSchema,
      onSubmit: (values) => {
        console.log(values);
        setUserData(values);
        navigate('/education');
      },
    });

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="header" style={{borderBottom: '3px solid  #4070f4',width: '105px'}}>
          <h2>Contact</h2>
        </div>
        <div className="form-container">
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/fluency-systems-regular/48/000000/user.png" />
              <input
                type="text"
                value={values.Name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your name"
                id="name"
                name="Name"
              />
            </div>
            {errors.Name && touched.Name ? (<small className="error"><p>{errors.Name}</p></small>) : null}
          </div>
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/ios/50/000000/phone.png" />
              <input
                type="number"
                value={values.Phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your phone number"
                id="number"
                name="Phone"
              />
            </div>
            {errors.Phone && touched.Phone ? (
              <small className="error">
                <p>{errors.Phone}</p>
              </small>
            ) : null}
          </div>
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/ios/50/000000/new-post.png" />
              <input
                type="email"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                id="email"
                name="Email"
              />
            </div>
            {errors.Email && touched.Email ? (
              <small className="error">
                <p>{errors.Email}</p>
              </small>
            ) : null}
          </div>
        </div>
        <div className="form-container">
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/ios/50/000000/address--v1.png" />
              <input
                type="number"
                value={values.Pincode}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Pincode"
                name="Pincode"
              />
            </div>
            {errors.Pincode && touched.Pincode ? (
              <small className="error">
                <p>{errors.Pincode}</p>
              </small>
            ) : null}
          </div>
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/ios/50/000000/address--v1.png" />
              <input
                type="text"
                value={values.City}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="City/Town"
                name="City"
              />
            </div>
            {errors.City && touched.City ? (
              <small className="error">
                <p>{errors.City}</p>
              </small>
            ) : null}
          </div>
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/ios/50/000000/address--v1.png" />
              <input
                type="text"
                value={values.State}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your State"
                name="State"
              />
            </div>
            {errors.State && touched.State ? (
              <small className="error">
                <p>{errors.State}</p>
              </small>
            ) : null}
          </div>
        </div>

        <div className="form-container">
          <div className="input-div full-width-input">
            <div className="form-controller" id="address">
              <img src="https://img.icons8.com/ios/50/000000/address--v1.png" />
              <input
                type="text"
                value={values.Address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your complete address"
                name="Address"
              />
            </div>
            {errors.Address && touched.Address ? (
              <small className="error">
                <p>{errors.Address}</p>
              </small>
            ) : null}
          </div>
        </div>

        <div className="form-container">
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/ios/50/000000/linkedin-2--v1.png" />
              <input
                type="text"
                value={values.Linkedin}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="LinkedIn"
                name="Linkedin"
              />
            </div>
            {errors.Linkedin && touched.Linkedin ? (
              <small className="error">
                <p>{errors.Linkedin}</p>
              </small>
            ) : null}
          </div>
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" />
              <input
                type="text"
                value={values.Twitter}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Twitter"
                name="Twitter"
              />
            </div>
            {errors.Twitter && touched.Twitter ? (
              <small className="error">
                <p>{errors.Twitter}</p>
              </small>
            ) : null}
          </div>
          <div className="input-div">
            <div className="form-controller">
              <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-GitHub-social-media-those-icons-lineal-those-icons-2.png" />
              <input
                type="text"
                value={values.Github}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Github"
                name="Github"
              />
            </div>
            {errors.Github && touched.Github ? (
              <small className="error">
                <p>{errors.Github}</p>
              </small>
            ) : null}
          </div>
        </div>
        <div className="button-container">
          <button className="btn back-btn" id="backBtn" disabled>Back</button>
          <Link className="btn next-btn" to="/education" onClick={handleSubmit} style={{ textDecoration: "none" }}>Next</Link>
        </div>
      </form>
    </Layout>
  );
};
export default Contact;
/*

<button className="btn next-btn hover" type="submit" disabled>Next</button>

const onLinkClick = (e) => {
    e.preventDefault();
    ---do your stuff---
    history.push('/your-route');
};

<a href='/your-route' onClick={onLinkClick}> Navigate </a>


*/