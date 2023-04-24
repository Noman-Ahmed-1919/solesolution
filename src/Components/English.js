import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";

import Header from "./Header";
import logo from "../images/logo.png";
import British from "./British";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";

import ieltseng from "../images/ieltseng.png";
import eng1 from "../images/eng1.png";
import eng2 from "../images/eng2.png";
import eng3 from "../images/eng3.png";
import eng4 from "../images/eng4.png";
import eng5 from "../images/eng5.png";

import Engheader from "./Engheader";
import apply from "../images/applynow.png";
import { Studies } from "./Studies";
import { Studies1 } from "./Studies1";
import { Studies2 } from "./Studies2";
import { Studies3 } from "./Studies3";
import { Studies4 } from "./Studies4";
import Mobileheader from "./Mobileheader";
import British2 from "./British2";

const English = () => {
  const { page } = useParams();

  return (
    <>
      <Mobileheader />

      <Engheader />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
      </div>

      <section id="englishh">
        <div className="container">
          <h1 className="h1major">FIND YOUR LANGUAGE PROGRAM</h1>

          <div className="row">
            <div className="col-4">
              <NavLink to="/english/studies">
                <div className="eng1">
                  <img style={{ width: "100%" }} src={eng2} />
                </div>
              </NavLink>
            </div>

            <div className="col-4">
              <NavLink to="/english/studies1">
                <div className="health1">
                  <img style={{ width: "100%" }} src={eng1} />
                </div>
              </NavLink>
            </div>

            <div className="col-4">
              <NavLink to="/english/studies2">
                <div className="info1">
                  <img style={{ width: "100%" }} src={eng3} />
                </div>
              </NavLink>
            </div>

            <div className="helllo">
              <div className="col-4">
                <NavLink to="/english/studies3">
                  <div className="bus1">
                    <img style={{ width: "100%" }} src={eng4} />
                  </div>
                </NavLink>
              </div>

              <div className="col-4">
                <NavLink to="/english/studies4">
                  <div className="bus1">
                    <img style={{ width: "100%" }} src={eng5} />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {page == "studies" && <Studies />}
      {page == "studies1" && <Studies1 />}
      {page == "studies2" && <Studies2 />}
      {page == "studies3" && <Studies3 />}
      {page == "studies4" && <Studies4 />}

      <section id="check">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="appcheck">
                <div>
                  <h2 className="yengg">
                    Check Your English Competency Apply Now for
                    <span className="free"> FREE MOCK TEST</span>
                  </h2>
                </div>

                <div className="appenggbtn">
                  <img className="buttoneng" src={apply} id="imagechg" />
                </div>
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

export default English;
