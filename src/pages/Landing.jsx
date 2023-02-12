import classes from './Landing.module.css';
import Clipart from '../images/clipart.png'
import { useNavigate } from 'react-router-dom';
const Landing=()=>{

 let navigate=useNavigate();

 const navFun=(e)=>{
   
   let n=e.target.value;

   if(n==1){
    navigate('/')
   }
   if(n==2){
    navigate('/about-us')
   }
   if(n==3){
    navigate('/contact')
   }
 }

return(
        <body>
        <div className={classes.navbar}>
           <div className={classes.navitems}>
            <h1 className="logo">Resume Builder</h1>
            <div className={classes.navlinks}>
                <button onClick={navFun} value="1">Home</button>
                <button onClick={navFun} value="2">About Us</button>
            </div>
           </div>
        </div>
        <div className={classes.mainContainer}>
            <div className={classes.callToAction}>
                <h1>Free Online <span>Resume</span><br/>Builder</h1>
                <p>A Quick and Easy Way to Create Your Professional Resume.Our resume builder lets you easily and quickly create a resume using our resume wizard.</p>
                <button onClick={navFun} value="3">Create Now</button>
            </div>
            <div className={classes.clipart}>
                <img src={Clipart} alt="clipart"/>
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
    </body>
    )
}
export default Landing;