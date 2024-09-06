/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Carousel, Col, Nav, Row, Tab, Container, Image, Modal } from 'react-bootstrap';
import '../Style.css';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
  } from "mdb-react-ui-kit";

const API = "https://mancuso.ai/mancusov2/wp-json/v1/timeline";
const APIC = "https://mancuso.ai/mancusov2/wp-json/v1/certificates";
const APIT = "https://mancuso.ai/mancusov2/wp-json/v1/get_tags";
const APIS = "https://mancuso.ai/mancusov2/wp-json/v1/get_testimonial_byid/1310";


function Resume() {
    const [slides, setSlider] = useState([]);
    useEffect(() => {
        const fetchSlider = async () => {
            try {
                const response = await axios.get(APIS);
                setSlider(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSlider();
    }, []);
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await axios.get(API);
                setExperiences(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchExperiences();
    }, []);
    
    const removeShortcodes = (text) => {
        return text.replace(/\[rt-testimonial id="\d+" title="[^\"]+"\]/g, '');
      };

    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const response = await axios.get(APIC);
                setCertificates(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCertificates();
    }, []);

    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const response = await axios.get(APIC);
                setEducation(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchEducation();
    }, []);

    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get(APIT);
                setTags(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTags();
    }, []);

    return (
        <div className='main_Content'>
            <div className='resume_section section_padding py-5 bg-white'>
                <h2 className='section-title text-start'>Resume</h2>
                <h5 className="section-description text-end">15+ Years of Experience</h5>
                <Row className='py-5'>
                    <Col md={8}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3 className="heading">Experience</h3>
                            <button className='mainBtn'>Download resume</button>
                        </div>
                        <div>
                        <div>
               {experiences.length > 0 ? (
                experiences.map((experience, index) => (
                <div key={index}>
                <ul className='ps-0 list-unstyled'>
                    {experience.settings && experience.settings.timeline && experience.settings.timeline.length > 0 ? (
                        experience.settings.timeline.map((timelineItem, idx) => (
                            <li key={idx} className='Exp_ItemBox'>
                                
                                {/* Period */}
                                <span className="item-period">
                                    {timelineItem.period || "No period available"}
                                </span>

                                <div className='exp_item ps-4 pt-2'>

                                    {/* logo */}
                                    {timelineItem.logo && timelineItem.logo.url && (
                                        <img src={timelineItem.logo.url} className="companyN" alt='logoimg'height={50} />
                                    )}

                                    {/* parah */}
                                    <p dangerouslySetInnerHTML={{ __html: removeShortcodes(timelineItem.text) }}></p>


                                    {/* <h4 className="item-title pb-3">{timelineItem.title || "No title available"}</h4> */}
                                  
                                   {/*{timelineItem.highlights && timelineItem.highlights.length > 0 && (
                                        <ul>
                                            {timelineItem.highlights.map((highlight, i) => (
                                                <li key={i}>{highlight}</li>
                                            ))}
                                        </ul>
                                    )} */}
                                    
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>No timeline data available.</p>
                    )}
                </ul>
            </div>
            
        ))
                            ) : (
                                <p>Loading.....</p>
                            )}
                        </div>
                        </div>






                </Col>
                <Col md={4}>
                   
                        <h3 className="heading">Education</h3>
                        {education[0] && (
                       <div className='collegeCard mb-5' key={education[0].id}>
                       <a href= {education[0].settings.image.url}>
              <div className='coll_inner d-flex align-items-stretch'>
                <div className='coll_logo align-content-center p-4'>
                  <Image src={education[0].settings.logo.url} alt={education[0].settings.title} fluid />
                </div>
                <div className='collegeContent p-4'>
                  <div className="certi-content">
                    <h4>{education[0].settings.title}</h4>
                    <div className="certi-id">
                      <span>{education[0].settings.membership}</span>
                    </div>
                    <div className="certi-date">
                      <span>{education[0].settings.date}</span>
                    </div>
                  </div>
                </div>
               </div>
             </a>
            </div>
              )}


                        <div className='edu'>
                        <h3 className="heading">Certifications</h3>
                        
                        <div className='collegeCardContainer'>
                      {certificates.slice(1).map((certificate) => (
                        <div className='collegeCard' key={certificate.id}>
                            <a href={certificate.settings.image.url}>
                        <div className='coll_inner d-flex align-items-stretch'>
                            <div className='coll_logo align-content-center p-4'>
                                <Image src={certificate.settings.logo.url} alt={certificate.name} fluid />
                            </div>
                            <div className='collegeContent p-4'>
                                <div className="certi-content">
                                    <h4>{certificate.settings.title}</h4>
                                    <div className="certi-id">
                                        <span>{certificate.settings.membership}</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>{certificate.settings.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
        


                        <h3 className="heading">Skills</h3>
                        
                        <ul className='ps-0'>
                         {tags.map((tag) => (
                        <div key={tag.id}>
                        {tag.settings.knowledges.map((knowledgeItem) => (
                        <li className='customBages'>
                          {knowledgeItem.knowledge}
                        </li>
                          ))}
                         </div>
                          ))}
                         </ul>

                    </div>
                </Col>
            </Row>
        </div>
       </div>
    )
}

export default Resume