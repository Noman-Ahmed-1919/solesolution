import React from "react";
import logo from "../images/logo.png";
import test1 from "../images/test1.png";
import test3 from "../images/test3.png";

const What = () => {
  return (
    <>
     

<section id="newsec1">

      <div className="container">
        <h1 className="h1what">WHAT THEY SAY ABOUT US</h1>
        <h4 className="h4test">TESTIMONIALS FROM OUR GREATEST CLIENTS</h4>

        <div className="row">

        {/* data-aos="fade-right"  data-aos-delay="800" data-aos-easing="ease-in-sine" */}
          <div className="col-lg-3" data-aos="fade-down"  data-aos-delay="800" data-aos-easing="ease-in-sine" >
            <img className="test1" src={test3} />

            {/* <div className="tests"> */}
              <h4 className="rija">RIJA SHAHID </h4>
              <p className="overall">
                OVERALL GREAT EXPERIENCE! STAFF IS GOOD AND SIR ILYAS QADRI AND
                <br></br>
                HIS TEAM ARE ONE OF THE BEST ADVISERS. I GOT MY AUSTRALIA
                <br></br>
                STUDENT VISA THROUGH THIS CONSULTANCY.
              </p>
            {/* </div> */}
          </div>

          {/* data-aos="flip-left"  data-aos-delay="800" */}
          <div className="col-lg-6" >
            <img className="test2" src={test1} />
            <h4 className="Muhammad">MUHAMMAD MOOSA</h4>
            <p className="the">
              THE BEST DECISION I'VE EVER TAKE FOR MY STUDY ABROAD<br></br> MOTIVES. I
              REALLY APPRECIATE THEIR PROFESSIONAL ATTITUDE<br></br> AND THE QUALITY OF
              SERVICE THEY PROVIDED WITH THEIR<br></br> IMMENSE EXPERIENCE IN THE
              INDUSTRY. I RECOMMEND OTHER<br></br> STUDENTS AS WELL TO TAKE THEIR ADVICE
              AND COMPARE IT<br></br> FOR YOURSELF FROM VARIOUS AGENCIES IN THE MARKET.
            </p>
          </div>

          {/* data-aos="fade-left"  data-aos-delay="800" data-aos-easing="ease-in-sine" */}
          <div className="col-lg-3" data-aos="fade-down"  data-aos-delay="800" data-aos-easing="ease-in-sine">
            <img className="test11" src={test3} />
            <h4 className="shehryl">SHEHRYL DAVID</h4>
            <p className="my">MY IELTS CLASSES WAS THE BEST EXPERIENCE WITH BRIGHTIOS<br></br> ENGLISH CAFE. SIR SALEEM TAUGHT ME ALL THE IMPORTANT<br></br> TIPS WHICH HELPS ME TO CLEAR MY EXAM WITH AN OVERALL<br></br> 8.5 BAND SCORE.</p>
          </div>
        </div>
      </div>
      </section>

    </>
  );
};

export default What;
