import React from "react";
import British from "./British";
import Footer from "./Footer";
import Study from "./Study";
import Request from "./Request";
import What from "./What";
import Key from "./Key";
import Stupage from "./Stupage";
import Serslider from "./Serslider";
import Mobileheader from "./Mobileheader";
import British2 from "./British2";
import logo from "../images/logo.png";

const Home = () => {


const content = document.querySelector("#sec111")


window.addEventListener("scroll", () =>{

const scrolled= window.scrollY;
console.log(scrolled)

if(scrolled <= 9){
content.style.display = 'none';

}else{
  content.style.display = 'block';

}

})


  return (
    <>


    
      <div className="container-fluid" id="mainlogoback">
        <div className="row">
          <div className="col-12">
            <div className="newmain">
              <img className="newlogo" src={logo} />
            </div>
          </div>
        </div>
      </div>




      <section id="sec111">
        <Mobileheader />
        <Study />

        <Serslider />
        <Key />
        <What />
        <Request />

        <British />
        <British2 />
      </section>
      <Footer />
    </>
  );
};

export default Home;
