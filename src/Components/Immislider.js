import React from "react";
import view from "../images/view.jpg"
import girl from "../images/girl.jpg"
import boy from "../images/boy.jpg"
import doc from "../images/doc.png";
import logo from "../images/logo.png";
import apply from "../images/applynow.png";


const Immislider = ()=>{
    return(
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
                      src={view}
                      alt="First slide"
                    />

                    <div class="carousel-caption">
                      <h1 className="h1study1">IMMIGRATION</h1>

                      <h4 className="h4canada1">
                      MOVING FOR YOUR BUSINESS GROWTH..
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
                      src={girl}
                      alt="Second slide"
                    />
                    <div class="carousel-caption">
                      <h1 className="h1study1">IMMIGRATION</h1>

                      <h4 className="h4canada1">
                      WANNA SECURE YOUR FAMILY FUTURE
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
                      src={boy}
                      alt="Third slide"
                    />
                    <div class="carousel-caption">
                      <h1 className="h1study1">IMMIGRATION</h1>
                      
                      <h4 className="h4canada1">EXPERIENCED TO EXPLORE THE WORLD</h4>
                     
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
export default Immislider;