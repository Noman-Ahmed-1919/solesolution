import React from "react";
import Marquee, { Motion, randomIntFromInterval,Box } from "react-marquee-slider";
import times from "lodash/times";


import british from "../images/british.png";
import apply from "../images/apply.png";
import ielts from "../images/ielts.png";
import qeac from "../images/qeac.png";



const British = () => {
  return (
    <>

    <section id="britishh">

    <Marquee velocity={12} minScale={0.7}  >
    {times(4, Number).map((id) => (
   
        <div
          style={{
          
          }}
        >


      <div className="container">
        <div className="row">

       
             <div className="col-md-3">
            <img style={{ width: "100%" }} src={british} />
          </div>

          <div className="col-md-3">
            <img style={{ width: "100%" }} src={apply} />
          </div>


          <div className="col-md-3">
            <img style={{ width: "100%" }} src={ielts} />
          </div>


          <div className="col-md-3">
            <img style={{ width: "100%" }} src={qeac} />
          </div>




        
       
        </div>
      </div>

      </div>
          ))}

      </Marquee>




      </section>
    </>
  );
};

export default British;
