import React from "react";
import Header from "./Header";
import logo from "../images/logo.png";
import Footer from "./Footer";
import British from "./British";
import im1 from "../images/im1.png";
import im2 from "../images/im2.png";
import im3 from "../images/im3.png";
import im4 from "../images/im4.png";
import im5 from "../images/im5.png";
import im6 from "../images/im6.png";

import united from "../images/united.png";
import kingdom from "../images/kingdom.png";
import canada from "../images/canada.png";
import aus from "../images/aus.png";
import newzea from "../images/newzea.png";
import european from "../images/european.png";
import Immislider from "./Immislider";
import Mobileheader from "./Mobileheader";
import British2 from "./British2";

const Immipage = () => {
  return (
    <>
      <Mobileheader />

      <Immislider />

      <section id="immisec1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header />

              <h1 className="h1whyy">Prefer Sole Solutions</h1>
              <h3 className="pwhyy">
                Why prefer Sole Solutions for Immigration Services?
              </h3>

              <p className="sole">
                Sole Solutions is one of the most renowned and trusted name in
                the industry of Study Abroad and immigration consultancy in
                Pakistan. We have a successful track record of more than 20
                years for offering exceptional services. We assess your profile
                thoroughly and guide you with selecting the most suitable visa
                category based on your credentials and prepare your visa
                application to get you the best results. We extend our expertise
                as an education consultant to you to keep you at ease throughout
                the process and strive to make the complicated procedures hassle
                free for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="stusec2">
        <div className="container">
          <h1 className="h1major">Major Immigration Program</h1>

          <div className="row" id="buscenter">
            <div className="col-md-3">
              <div className="eng">
                <img style={{ width: "100%" }} src={im1} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="health">
                <img style={{ width: "100%" }} src={im2} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="info">
                <img style={{ width: "100%" }} src={im3} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="bus">
                <img style={{ width: "100%" }} src={im4} />
              </div>
            </div>

            <div id="ar" className="col-md-3">
              <div className="art">
                <img style={{ width: "100%" }} src={im5} />
              </div>
            </div>

            <div id="laww" className="col-md-3">
              <div className="law">
                <img style={{ width: "100%" }} src={im5} />
              </div>
            </div>

            <div id="artt" className="col-md-3">
              <div className="art">
                <img style={{ width: "100%" }} src={im6} />
              </div>
            </div>

            <div id="ar" className="col-md-3">
              <div className="art">
                <img style={{ width: "100%" }} src={im6} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stusec4">
        <div className="container">
          <h1 className="h1major">Countries Offers</h1>

          <div className="row" id="buscenter">
            <div className="col-md-3">
              <div className="united">
                <img style={{ width: "100%" }} src={united} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="kingdom">
                <img style={{ width: "100%" }} src={kingdom} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="canada">
                <img style={{ width: "100%" }} src={canada} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="aus">
                <img style={{ width: "100%" }} src={aus} />
              </div>
            </div>

            <div id="ar" className="col-md-3">
              <div className="newzea">
                <img style={{ width: "100%" }} src={newzea} />
              </div>
            </div>

            <div id="laww" className="col-md-3">
              <div className="newzea">
                <img style={{ width: "100%" }} src={newzea} />
              </div>
            </div>

            <div id="artt" className="col-md-3">
              <div className="european">
                <img style={{ width: "100%" }} src={european} />
              </div>
            </div>
            <div id="ar" className="col-md-3">
              <div className="european">
                <img style={{ width: "100%" }} src={european} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <British2 />

      <British />
      <Footer />
    </>
  );
};
export default Immipage;
