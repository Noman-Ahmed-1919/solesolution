import React from "react";

import logo from "../images/logo.png";
import apply from "../images/applynow.png";
import cafe1 from "../images/cafe1.jpg";
import cafe2 from "../images/cafe2.jpg";
import cafe3 from "../images/cafe3.jpg";



const Engheader = ()=>{
    return(
        <>
        
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="newmain">
              <img className="newlogo" src={logo} />
            </div>
          </div>
        </div>
      </div>



      <section className="newcsssec1">


        <div className="container-fluid">
          <div className="row">
            <div className="col-12 padd">
        
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
                
                </ol>

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      id="opacity"
                      class="d-block w-100"
                      src={cafe1}
                      alt="First slide"
                    />

                    <div class="carousel-caption">
                      <h1 className="h1study1">ENGLISH CAFE</h1>

                      <h4 className="h4canada1">
                      IELTS TRAINING
                      </h4>
                      <div className="button" >
                        <img style={{width:"220px"}} src={apply}/>
                        </div>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img
                      id="opacity"
                      class="d-block w-100"
                      src={cafe2}
                      alt="Second slide"
                    />
                    <div class="carousel-caption">
                      <h1 className="h1study1">ENGLISH CAFE</h1>

                      <h4 className="h4canada1">
                      PTE | CAE | TOEFL | IBT
                      </h4>
                      <div className="button" >
                        <img style={{width:"220px"}} src={apply}/>
                        </div>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img
                      id="opacity"
                      class="d-block w-100"
                      src={cafe3}
                      alt="Third slide"
                    />
                    <div class="carousel-caption">
                      <h1 className="h1study1">ENGLISH CAFE</h1>
                      
                      <h4 className="h4canada1">GENERAL ENGLISH LANGUAGE COURSES</h4>
                      <div className="button" >
                        <img style={{width:"220px"}} src={apply}/>
                        </div>
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
        
        </section>


        </>
    )
}
export default Engheader;