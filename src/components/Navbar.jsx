import classes from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
const Navbar=()=>{

    let navigate=useNavigate();

    const navFun=(e)=>{
      
      let n=e.target.value;
   
      if(n==1){
       navigate('/')
      }
      if(n==2){
       navigate('/about-us')
      }
    }

    return(
        <div className={classes.navbar}>
        <div className={classes.navitems}>
         <h1 className="logo">Resume Builder</h1>
         <div className={classes.navlinks}>
             <button onClick={navFun} value="1">Home</button>
             <button onClick={navFun} value="2">About Us</button>
         </div>
        </div>
     </div>
    )
}
export default Navbar;