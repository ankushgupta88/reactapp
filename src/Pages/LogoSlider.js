import React from 'react';
import '../Style.css';
//import { Button, Col, Nav, Row, Tab, Container, Image } from 'react-bootstrap';
import {  Image } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';

const logoSlider = () => {

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1
    //     autoplay: true
    //     speed: 500,
    //     autoplaySpeed: 500,
    //     cssEase: "linear"
    //   };

    return(
        <>
           <section className='pastEmploye bg-white section_padding text-start pb-5'>
              <h3 className='heading'>Past Employers</h3>
              <div className='logoSlider d-flex justify-content-around'>
               {/* <Slider {...settings}> */}
                  <div className='logoImg'>
                     <Image src={logo1} alt='logoimg' />
                  </div>
                  <div className='logoImg'>
                     <Image src={logo2} alt='logoimg' />
                  </div>
                  <div className='logoImg'>
                     <Image src={logo3} alt='logoimg' />
                  </div>
                  <div className='logoImg'>
                     <Image src={logo4} alt='logoimg' />
                  </div>
                  <div className='logoImg'>
                     <Image src={logo5} alt='logoimg' />
                  </div>
                {/* </Slider> */}
              </div>
            </section>
        </>
    )
  };
  
  export default logoSlider;