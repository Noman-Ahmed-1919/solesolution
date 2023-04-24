import React from "react";
import logo from "../images/logo.png";
import read from "../images/read.png";

import ab1 from "../images/ab1.png"
import ab2 from "../images/ab2.png"
import ab3 from "../images/ab3.png"
import ab4 from "../images/ab4.png"
import btnser from "../images/btnser.png"
import { NavLink } from "react-router-dom";

import apply from "../images/applynow.png";


const Serslider = () =>{
    return(
        <>




              <div className="btnser"  id="servicesec">
  <img style={{width:"300px"}}  src={btnser}/>
</div>
        
        <section >
<div className="container-fluid" id="paddinggg">
          <div className="row">
            <div className="col-12" >
        

             

              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators1">
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
                      src={ab1}
                      alt="First slide"
                    />

                     <div class="carousel-caption d-none d-md-block">
                      <h1 className="h1study11">STUDY ABROAD</h1>

                      <h4 className="h4canada11">
                      Canada, USA, Australia, United Kingdom,<br></br> New
                        Zealand, Malaysia and other<br></br> European Countries.
                      </h4>
                      <NavLink to="/stupage" >   <div className="button" >
                        <img style={{width:"220px"}} src={apply}/>
                        </div>   </NavLink>
                    </div> 
                  </div>

                  <div class="carousel-item">
                    <img
                      id="opacity"
                      class="d-block w-100"
                      src={ab2}
                      alt="Second slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 className="h1study11">IMMIGRATION</h1>

                      <h4 className="h4canada11">
                      Canada, USA, Australia, United Kingdom,<br></br> New
                        Zealand, Malaysia and other<br></br> European Countries.
                      </h4>
                      <NavLink to="/immipage" >     <div className="button" >
                        <img style={{width:"220px"}} src={apply}/>
                        </div>    </NavLink>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img
                      id="opacity"
                      class="d-block w-100"
                      src={ab3}
                      alt="Third slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 className="h1study11">IELTS SESSIONS</h1>
                      
                      <h4 className="h4canada">Acadamic IELTS</h4>
                      <h4 className="h4canada">General IELTS</h4>             
                      <NavLink to="/english" >    <div className="button" >
                        <img style={{width:"220px"}} src={apply}/>
                        </div>     </NavLink>
                    </div>
                  </div>




                  <div class="carousel-item">
                    <img
                      id="opacity"
                      class="d-block w-100"
                      src={ab4}
                      alt="Third slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h1 className="h1study11">ENGLISH CAMP</h1>
                      
                      <h4 className="h4canada11">PTE,TOEFL IBT,GENERAL ENGLISH</h4>
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

export default Serslider;