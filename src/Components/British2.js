import React from "react";


import british from "../images/british.png";
import apply from "../images/apply.png";
import ielts from "../images/ielts.png";
import qeac from "../images/qeac.png";



const British2 = () => {
  return (
    <>

    <section id="britishh2">

 


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

      
          

      




      </section>
    </>
  );
};

export default British2;
