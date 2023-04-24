import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import req from "../images/backreq.png";
import logo from "../images/logo.png";
import send from "../images/send.png";

const Request = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0643o1e",
        "template_l47jcmo",
        form.current,
        "FvKx9jb7wOAMhVake"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
        

        <section id="hide">
 
        <div className="reqmaindiv">
     
          <div className="backreqimage">
            
              <h4 className="h4requestto">REQUEST TO CALL BACK</h4>

          

                <form ref={form} onSubmit={sendEmail} >

                  <div className="inputflex">

                    <div style={{width:"100%", maxWidth:"22%"}}>
                      <input
                        className="email"
                        placeholder="FULL NAME"
                        name="user_name"
                      />
                    </div>

                    <div style={{width:"100%", maxWidth:"22%"}}>
                      <input
                        className="email1"
                        placeholder="CONTACT NUMBER"
                        name="user_num"
                      />
                    </div>

                    <div style={{width:"100%", maxWidth:"22%"}}>
                      <input
                        className="email2"
                        placeholder="EMAIL ADDRESS"
                        name="user_email"
                      />
                    </div>
                  </div>

                  <div className="">
                    <input
                      className="message"
                      placeholder="TYPE YOUR MESSAGE"
                      name="message"
                    />
                  </div>

                  <div className="send">
                  <img  style={{width:"220px"}} src={send}/>

                  </div>
                </form>
              </div>
         
              </div>
  
  
      </section>

      <section id="mobilescreen">
        <div className="form">
          <div>
            <h1 className="call">REQUEST TO CALL BACK</h1>
          </div>

          <div>
            <input className="firstdiv" placeholder="First Name" />
          </div>

          <div>
            <input className="lastdiv" placeholder="CONTACT NUMBER" />
          </div>

          <div>
            <input className="lastdiv" placeholder="EMAIL ADDRESS" />
          </div>

          <div>
            <input className="secdiv" placeholder="Message" />
          </div>

          <div className="btnnncre">
            <button className="crebtn">SEND</button>
          </div>
        </div>


       





        <div></div>
      </section>
    </>
  );
};

export default Request;
