import React from "react";
import country from "../images/country.png";
import degree from "../images/degree.png";
import doc from "../images/doc.png";
import logo from "../images/logo.png";
import apply from "../images/applynow.png";


const Abroadslider = () =>{
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
                      src={country}
                      alt="First slide"
                    />

                    <div class="carousel-caption">
                      <h1 className="h1study1">STUDY ABROAD</h1>

                      <h4 className="h4canada1">
                      WHICH COUNTRY WOULD YOU LIKE TO GO...
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
                      src={degree}
                      alt="Second slide"
                    />
                    <div class="carousel-caption">
                      <h1 className="h1study1">STUDY ABROAD</h1>

                      <h4 className="h4canada1">
                      YOUR FUTURE IS OUR DESTINATION
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
                      src={doc}
                      alt="Third slide"
                    />
                    <div class="carousel-caption">
                      <h1 className="h1study1">STUDY ABROAD</h1>
                      
                      <h4 className="h4canada1">SELECT YOUR FIELD WE CAN APPROACH THE WORLD</h4>
                     
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

export default Abroadslider;