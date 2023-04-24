import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h4 className="fothead">SOLE SOLUTIONS</h4>
              <p  className="gray">HOME</p>
              <p  className="gray">ABOUT US</p>
              <p  className="gray">OUR SERVICES</p>
              <p  className="gray">BLOG</p>
              <p  className="gray">CONTACT US</p>
            </div>

            <div className="col-lg-3">
              <h4 className="fothead">USEFUL LINKS</h4>
              <p  className="gray">STUDY ABROAD</p>
              <p  className="gray">IMMIGRATION</p>
              <p  className="gray">ENGLISH CAFE</p>
              <p  className="gray">HOW WE WORK</p>
              {/* <p>QUICK SUPPORT</p> */}
              <p  className="gray">PRIVACY POLICY</p>
            </div>

            <div className="col-lg-3">
              <h4 className="fothead">ADDRESS</h4>
              <p  className="gray">
                PLOT # R-805 BLOCK 9, FEDERAL B AREA, KARACHI PAKISTAN. 75950
              </p>
            </div>

            <div className="col-lg-3">
              <h4 className="fothead">CONTACT US</h4>
              <p  className="gray">TEL: +92 21 37291856</p>
              <p className="gray">CELL: +92 336 2200446 , +92 334 129 6426</p>
              <p className="gray">EMAIL: INFO@SOLESEIC.COM</p>
            </div>
          </div>
        </div>

        <p className="copy">Copyright © 2022 Sole Solutions | Education and Immigration Consultants.</p>
      </section>
    </>
  );
};

export default Footer;
