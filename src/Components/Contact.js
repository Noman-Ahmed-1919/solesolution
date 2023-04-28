import React, {useEffect} from "react";

import logo from "../images/logo.png";
import Header from "./Header";
import British from "./British";
import Footer from "./Footer";
import Request from "./Request";
import ScrollToTop from "react-scroll-to-top";
import Mobileheader from "./Mobileheader";

const Contact = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


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


      <Mobileheader/>





      <section id="consec1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header />

              <h1 className="h1study1">CONTACT US</h1>
              <h4 className="mayh4">YOU MAY CONTACT US 24/7</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="consec2">
        <div className="container">
          <div className="row">
            <div className="col-md-6" id="addp">
              <h1>ADDRESS:</h1>
              <p>
                PLOT # R-805 BLOCK 9, FEDERAL <br></br>B AREA, KARACHI PAKISTAN.
                75950
              </p>
            </div>

            <div className="col-md-6" id="conus">
              <h1>CONTACT US:</h1>
              <p>TEL: +92 21 37291856</p>
              <p>CELL: +92 336 2200446 , +92 334 129 6426</p>
              <p>EMAIL: INFO@SOLESEIC.COM</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div class="gmap_canvas">
              <iframe
                id="map"
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=650&amp;height=450&amp;hl=en&amp;q=sole solution for ielts R-805 block 9&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="reqsecnew">
      <Request />

      </div>

      <British />

      <Footer />

      <div>
        <ScrollToTop smooth id="scrollToTop" />
      </div>
    </>
  );
};
export default Contact;
