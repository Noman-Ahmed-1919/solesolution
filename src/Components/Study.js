import React from "react";
import $ from "jquery";

import logo from "../images/logo.png";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import slider4 from "../images/slider4.jpg";
import heaimg from "../images/heaimg.png";
import Header from "./Header";
import apply from "../images/applynow.png";
import apply2 from "../images/applybtn2.png";
import { NavLink } from "react-router-dom";


import ScrollToTop from "react-scroll-to-top";

// import Typing from 'react-typing-animation';

const Study = () => {
  function chnimg() {
    var img1 = document.getElementById("imagechg");
    console.log(img1);

    if (img1.src.match("apply")) {
      img1.src = apply2;
    } else {
      img1.src = apply;
    }
  }

  return (
    <>

     
      <section id="sec1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 padd">
              <Header />

              

              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  ></li>
                </ol>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      id="opacity"
                      class="d-block w-100"
                      src={slider1}
                      alt="First slide"
                    />

                    <div class="carousel-caption">
                      <h1 className="h1study">STUDY ABROAD</h1>

                      <h4 className="h4canada">
                        Canada, USA, Australia, United Kingdom,<br></br> New
                        Zealand, Malaysia and other<br></br> European Countries.
                      </h4>
                      <NavLink to="/stupage" >

                        <div className="button" >
                        <img style={{width:"220px", marginBottom:"40px"}} src={apply}/>
                        </div>
                         </NavLink>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img
                      id="opacity"
                      class="d-block w-100"
                      src={slider2}
                      alt="Second slide"
                    />
                    <div class="carousel-caption">
                      <h1 className="h1study">IMMIGRATION</h1>

                      <h4 className="h4canada">
                        Canada, USA, Australia, United Kingdom,<br></br> New
                        Zealand, Malaysia and other<br></br> European Countries.
                      </h4>
                      <NavLink to="/immipage" >   
                      
                      <div className="button" >
                        <img style={{width:"220px", marginBottom:"40px"}} src={apply}/>
                        </div>

                      </NavLink>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img
                      id="opacity"
                      class="d-block w-100"
                      src={slider3}
                      alt="Third slide"
                    />
                    <div class="carousel-caption">
                      <h1 className="h1study">IELTS SESSIONS</h1>
                      <h4 className="h4canadas">Acadamic IELTS</h4>
                      <h4 className="h4canada">General IELTS</h4>
                      <NavLink to="/english" >   

                      <div className="button" >
                        <img style={{width:"220px", marginBottom:"40px"}} src={apply}/>
                        </div>

                      </NavLink>
                    </div>
                  </div>
                  <div class="carousel-item">
                     <img
                      id="opacity"
                      class="d-block w-100"
                      src={slider4}
                      alt="Fourth slide"
                    /> 
                    <div class="carousel-caption">
                      <h1 className="h1study">ENGLISH CAMP</h1>
                      <h4 className="h4canada">
                        PTE,TOEFL IBT,GENERAL ENGLISH
                          </h4>
                          <NavLink to="/english" >     
                          <div className="button" >
                        <img style={{width:"220px", marginBottom:"40px"}} src={apply}/>
                        </div>

                          </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <ScrollToTop smooth id="scrollToTop" />
        </div>
      </section>
    </>
  );
};

export default Study;
