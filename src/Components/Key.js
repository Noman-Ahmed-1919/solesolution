import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom'
import $ from 'jquery';


import logo from "../images/logo.png";
import keyfactor from "../images/keyfactor.png";
import mobile from "../images/mobile768.png";

const Key = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


    var [project,setproject] =useState(+ 0)
    var [customer,setcustomer] =useState(+ 0)
    var [developer,setdeveloper] =useState(+ 0)
    var [clientCount,setClientCount] =useState(+ 0)


    useEffect(()=>{
        // Projects()
        
        CounterAnimate()
       },[])


    
       function CounterAnimate() {
            
        // Function which adds the 'animated' class to any '.animatable' in view
        var doAnimations = function() {
        "use strict";
          
            // Calc current offset and get all animatables
            var offset = $(window).scrollTop() + $(window).height(),
                $counterSec = $('.counterSec');
            
            // Unbind scroll handler if we have no counterSec
            if ($counterSec.length == 0) {
              $(window).off('scroll', doAnimations);
            }
            
            // Check all counterSec and animate them if necessary
                $counterSec.each(function(i) {
               var $counterS = $(this);
                    if (($counterS.offset().top + $counterS.height() - 100) < offset) {
                    $counterS.removeClass('counterSec').addClass('counterOn');
                    // console.log(offset);
                    handleCounter()
                    handleCustomersData()
                    }
                     
            });
        
            };
          
          // Hook doAnimations on scroll, and trigger a scroll
            $(window).on('scroll', doAnimations);
          $(window).trigger('scroll');
      
      }








      const handleCounter =() =>{
       
      
        var startproject=project
        var endproject= + 15;
        var startCustomer=customer
        var endCustomer= + 1800;
        var startDeveloper=developer
        var endDeveloper= + 3500;
        var startClient=clientCount
        var endClient= 98 ;
    
        var projectCounting = setInterval(function(){
            if(startproject < endproject) {
                startproject++
            } else {
                clearInterval(projectCounting)
            }
            // console.log(startproject);
            setproject(startproject)
        }, 100);
    
        var developerCounting = setInterval(function(){
            if(startDeveloper < endDeveloper) {
              startDeveloper++
            } else {
                clearInterval(developerCounting)
            }
            // console.log(startDeveloper);
            setdeveloper(startDeveloper)
        }, 1);
    
        var clientCounting = setInterval(function(){
            if(startClient < endClient) {
              startClient++
            } else {
                clearInterval(clientCounting)
            }
            // console.log(startClient);
            setClientCount(startClient)
        }, 100);
      }
    



      const handleCustomersData =() =>{
        var startCustomer=customer
        var endCustomer= 1800;
    
        var customerCounting = setInterval(function(){
          if(startCustomer < endCustomer) {
            startCustomer++
          } else {
              clearInterval(customerCounting)
          }
          // console.log(startCustomer);
          setcustomer(startCustomer)
      }, 5);
      }




  return (
    <>
      <div className="container-fluid counterSec">
      
      </div>

      <section id="keyimg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mainimage">
                <img src={keyfactor} className="keyfactor" />

                <h4 className="plus">+ {project}</h4>
                <h4 className="years">
                  YEARS OF <br></br>
                  EXPERIENCE
                </h4>

                <h4 className="plus1800">+ {customer}</h4>
                <h4 className="uni">
                  UNIVERSITIES<br></br> NETWORK
                </h4>

                <h4 className="plus3500">+ {clientCount}</h4>
                <h4 className="sucess">SUCESS STORIES</h4>

                <h4 className="per">+ {developer }</h4>
                <h4 className="sucessrate">SUCESS RATE</h4>

                <h4 className="fac">KEY FACTORS</h4>
                <h4 className="having">
                  HAVING SUCCESSFUL TRACK RECORD<br></br>
                  OF OUR AIM IS TO FACILITATE YOU GET <br></br>
                  WHERE YOU WANT IN THE SWIFT <br></br>
                  POSSIBLE MANNER.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>











      <section id="mobileres">
        <div className="mobimg">
          <div className="divcen">
            <img className="img15" src={mobile} />

            <h4 className="plusmob">+ 15</h4>
            <h4 className="yearsmob">
              YEARS OF <br></br>
              EXPERIENCE
            </h4>
          </div>

          <div className="divcen1">
            <img className="img15" src={mobile} />

            <h4 className="plusmob">+ 1800</h4>
            <h4 className="yearsmob">
              UNIVERSITIES<br></br> NETWORK
            </h4>
          </div>

          <div className="divcen1">
            <img className="img15" src={mobile} />

            <h4 className="plusmob1">KEY FACTORS</h4>
            <h4 className="yearsmob1">
              HAVING SUCCESSFUL TRACK RECORD<br></br>
              OF OUR AIM IS TO FACILITATE YOU GET <br></br>
              WHERE YOU WANT IN THE SWIFT <br></br>
              POSSIBLE MANNER.
            </h4>
          </div>

          <div className="divcen1">
            <img className="img15" src={mobile} />

            <h4 className="plusmob">+ 3500</h4>
            <h4 className="yearsmob">SUCESS STORIES</h4>
          </div>

          <div className="divcen1">
            <img className="img15" src={mobile} />

            <h4 className="plusmob">98 %</h4>
            <h4 className="yearsmob">SUCESS RATE</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Key;
