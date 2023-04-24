import React from "react";
import logo from "../images/logo.png";

const Mobileheader = () =>{
    return(
        <>
        

        <section id="mobileheader"   className='container-fluid'>

<nav className="navbar navbar-expand-lg navbar-light"  >

  <a className="navbar-brand" href="#" id="stico" style={{ color: "white", textShadow: "2px 2px 0px rgba(0, 0, 0, 0.7)" }}>
    <img id='logo' src={logo} width={125} height={35} className="d-inline-block align-top" alt="" />
    

  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse homenav" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" id="headerrnava" >
      <li className="nav-item active">
        <a to="/"   id="aboutaa" style={{ color: "Black",  }} className="nav-link" >
             Home
        </a>
      </li>
   
      <li className="nav-item">
        <a to="/Stico"  id="abouta" style={{ color: "Black"  }} className="nav-link" >   ABOUT US</a>
      </li>
      <li className="nav-item">
        <a  id="abouta1" style={{ color: "Black"  }} className="nav-link" href="#services"> BLOG</a>
      </li>
      <li className="nav-item">
        <a  id="abouta2" style={{ color: "Black"  }} className="nav-link" href="#sec4">  OUR SERVICES</a>
      </li>
      <li className="nav-item">
        <a  id="abouta3" style={{ color: "Black"  }} className="nav-link" href="#utility">  CONTACT US</a>
      </li>
      <li className="nav-item">
        <a  id="abouta4" style={{ color: "Black"  }}  className="nav-link con" href="#utility">  Contact</a>
      </li>

      
     
    </ul>
    <div id="btnnns">

  

    {/* <div>
    <a id="btn1header2"  className=" my-2 my-sm-0" onClick={handleClickOpen} > Let's talk</a>
    </div> */}
    
    </div>
  </div>
</nav>

</section>



        </>
    )
}

export default Mobileheader;