import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Professional from "./pages/Professional";
import Miscelleneous from "./pages/Miscelleneous";
import userDataContext from "./context/user-data-context";
import Preview from "./pages/Preview";
import Resume1 from "./resumes/Resume1";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
function App() {

const [userData, setUserData] = useState({});

return(
    <userDataContext.Provider value={{ userData, setUserData }}>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/professional" element={<Professional />}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/miscelleneous" element={<Miscelleneous />}></Route>
        <Route path="/preview-resume" element={<Preview />}></Route>
        <Route path="/view-resume" element={<Resume1 />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </userDataContext.Provider>
  );
}
export default App;
