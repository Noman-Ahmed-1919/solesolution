import React from "react";
import Header from "./Header";
import logo from "../images/logo.png";
import dot from "../images/dot.png";

import British from "./British";
import Footer from "./Footer";

import bus from "../images/bus.png";
import art from "../images/art.png";
import health from "../images/health.png";
import law from "../images/law.png";
import info from "../images/info.png";
import eng from "../images/eng.png";
import united from "../images/united.png";
import kingdom from "../images/kingdom.png";
import canada from "../images/canada.png";
import aus from "../images/aus.png";
import newzea from "../images/newzea.png";
import european from "../images/european.png";

import ScrollToTop from "react-scroll-to-top";
import Abroadslider from "./Abroadslider";
import Mobileheader from "./Mobileheader";
import British2 from "./British2";

const Stupage = () => {
  return (
    <>
      <Mobileheader />

      <Abroadslider />

      <section id="stusec1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header />

             

              <h1 className="h1why">Why Study Abroad?</h1>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">It’s a challenge</h5>
                  <p className="pthere">
                    There are unique challenges that come with going overseas to
                    study, but that’s all part of the fun and the experience.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Experience a different culture </h5>
                  <p className="pthere">
                    One of the biggest advantages of studying abroad for many
                    international students is the chance to become immersed in a
                    totally different environment.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Top quality education </h5>
                  <p className="pthere">
                    Of course, no matter where you study, your goal is always
                    going to be to get the highest possible quality of
                    education.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Learn a new language </h5>
                  <p className="pthere">
                    Learning a language can be a real challenge, but there is
                    nothing quite like living somewhere where that language is
                    spoken natively.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Career opportunities </h5>
                  <p className="pthere">
                    Of course, the main reason for getting a degree in the first
                    place is to improve your career prospects. In a globalised,
                    well-connected world, employers increasingly value graduates
                    with international experience and education.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Make new friends</h5>
                  <p className="pthere">
                    No matter where you go to university, you’re sure to meet
                    lots of new people and make new friends who are all in the
                    same position as you.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">International travel</h5>
                  <p className="pthere">
                    As well as experiencing the culture of your study
                    destination, you will also be able to travel to other nearby
                    countries.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Become independent</h5>
                  <p className="pthere">
                    It’s often said that going to university is when you become
                    truly independent from your parents and family. This is
                    especially true when you go to university in another
                    country!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stusec2">
        <div className="container">
        

          <h1 className="h1major">Major Courses</h1>

          <div className="row" id="buscenter">
            <div className="col-md-3">
              <div className="eng">
                <img style={{ width: "100%" }} src={eng} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="health">
                <img style={{ width: "100%" }} src={health} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="info">
                <img style={{ width: "100%" }} src={info} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="bus">
                <img style={{ width: "100%" }} src={bus} />
              </div>
            </div>

            <div id="ar" className="col-md-3">
              <div className="art">
                <img style={{ width: "100%" }} src={art} />
              </div>
            </div>

            <div id="laww" className="col-md-3">
              <div className="law">
                <img style={{ width: "100%" }} src={law} />
              </div>
            </div>

            <div id="artt" className="col-md-3">
              <div className="art">
                <img style={{ width: "100%" }} src={art} />
              </div>
            </div>
            <div id="ar" className="col-md-3">
              <div className="art">
                <img style={{ width: "100%" }} src={art} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stusec3">
        <div className="container">
          <div className="row">
            <div className="col-12">
           

              <h1 className="h1why">
                Pathway Towards<br></br> Successful Journey
              </h1>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Research </h5>
                  <p className="pthere">
                    It helps to do a little research before you speak to us.
                    Once you do some research, you will get an idea of the
                    subject areas that interest you the most.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Speak to one of our counsellors </h5>
                  <p className="pthere">
                    Sole Solutions counsellors are professionally certified and
                    many of them were international students themselves. They
                    have a wealth of first-hand professional advice and personal
                    experience from different study locations across the world.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Make your application </h5>
                  <p className="pthere">
                    After you have chosen your course and university or school,
                    it’s time to apply.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Accepting your offer</h5>
                  <p className="pthere">
                    Learning a language can be a real challenge, but there is
                    nothing quite like living somewhere where that language is
                    spoken natively.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Practice your English skills </h5>
                  <p className="pthere">
                    It is always a good idea to brush up your English language
                    skills to ensure you can keep up with what your lecturers
                    are saying. This will be helpful, especially if English is
                    not your first language.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Student visa </h5>
                  <p className="pthere">
                    Now that you have been accepted, it’s time to apply for your
                    student visa. Sole Solution can provide you with some
                    information to help make sure you are well positioned to
                    navigate this process with the authorised migration
                    departments.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Ready, steady, go </h5>
                  <p className="pthere">
                    Congratulations! You’re off on a huge adventure. There are
                    lots of things to think about during this time and your Sole
                    Solution counsellor will help out.
                  </p>
                </div>
              </div>

              <div className="dotflex">
                <div>
                  <img className="dotimg" src={dot} />
                </div>
                <div>
                  <h5 className="h1it">Become independent</h5>
                  <p className="pthere">
                    It’s often said that going to university is when you become
                    truly independent from your parents and family. This is
                    especially true when you go to university in another
                    country!
                  </p>
                </div>
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

      <div>
        <ScrollToTop smooth id="scrollToTop" />
      </div>
    </>
  );
};

export default Stupage;
