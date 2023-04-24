import React from "react";
import headerimg1 from "../images/headerimg1.png";
import headerimg2 from "../images/headerimg2.png";

import whatsapp from "../images/whatsapp.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import insta from "../images/insta.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>


      <div className="container-fluid" id="mobilehide">
        <div className="row">
          <div className="col-12 paddin">

            <div className="mainhome">

              <img className="heaimg1" src={headerimg1} />
              <img className="heaimg2" src={headerimg2} />

              </div>


              <div className="mainabout">

                <NavLink to="/" className="home"> <a style={{color:"black", position:"fixed", zIndex:"1000"}}>HOME</a></NavLink>

                <div  className="about"><NavLink to="/about" style={{color:"black", position:"fixed", zIndex:"1000"}}>ABOUT <br></br> US</NavLink> </div>

                <div  className="ourser"><NavLink to="/" style={{color:"black", position:"fixed", zIndex:"1000"}}>BLOG</NavLink></div>

                <div  className="blo">  <NavLink to="/#servicesec" id="serangr" style={{color:"black", position:"fixed", zIndex:"1000"}} >OUR<br></br>SERVICES  </NavLink> </div>

              

                <div  className="contactss"> <NavLink to="/cont" style={{color:"black", position:"fixed", zIndex:"1000"}}> CONTACT<br></br> US</NavLink></div>
             
              </div>

              <a href=" https://wa.me/923362200446" target="_blank" > <img className="whatsapp" src={whatsapp} /></a>
             
<a href="https://www.facebook.com/Solesolutions4ielts" target="_blank">  <img className="facebook"  src={facebook} /></a>
 <a href="https://twitter.com/soleseic" target="_blank"><img className="twitter" src={twitter} /></a>
 <a href="https://www.linkedin.com/in/m-yousuf-saleem-a04502261/" target="_blank"><img className="linkedin" src={linkedin} /></a>
 <a href="https://www.instagram.com/soleseic/" target="_blank"><img className="insta" src={insta} /></a>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
