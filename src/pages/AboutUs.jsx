
import classes from './AboutUs.module.css';
import Clipart from '../images/aboutus.png'
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
const AboutUs=()=>{

const navigate=useNavigate();
const navFun=()=>{
    navigate('/');
}
    return(
        <>
         <div className={classes.navbar}>
           <div className={classes.navitems}>
           <h1 className="logo" onClick={navFun}>Resume Builder</h1>
           </div>
        </div>
        <div className={classes.mainDiv}>
         <div className={classes.left}>
         <h1 className={classes.header}>
         <Typewriter onInit={(typewriter)=> {
          typewriter.typeString("What are we?").pauseFor(1000).deleteAll().typeString("We are resume Builder").pauseFor(1000).start();
          }}
          options={{loop:true}}
          />
         </h1>
        <p>
        Resume Builder is a simple, easy to use wizard based website.
        We believe that landing a job and building the perfect resume should be simple, and that a poorly written resume 
        should be the last reason for not getting the job that you want.
        </p>
         </div>
         <div className={classes.right}>
            <img src={Clipart} alt="aboutus" />
         </div>
        </div>
        <div className={classes.footer}>
        <p>Developed By: Ayush Singh</p>
            <div className={classes.socials}>
            <a href="#">Linkedin</a>
            <a href="https://twitter.com/dev_ayush6537">Twitter</a>
            <a href="https://github.com/singhayush1260">Github</a>
            </div>
        </div>
        </>
    )
}
export default AboutUs;