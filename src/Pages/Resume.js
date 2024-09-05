/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Col, Nav, Row, Tab, Container, Image, Modal } from 'react-bootstrap';
import '../Style.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/NLBM.png';
import collage from '../images/University.png';
import LSSMBB from '../images/LSSMBB.webp';
import SAS from '../images/SAS.png';
import PMP from '../images/PMP.png';
import ACP from '../images/ACP.png';
import Sa from '../images/sa.png';
import Sa_scp from '../images/sa-csp.png';
import Sa_cas from '../images/sa-cas.png';
import Sa_cms from '../images/sa-csm.png';



function Resume() {
    return (
       <div className='main_Content'>
            <div className='resume_section section_padding py-5 bg-white'>
            <h2 className='section-title text-start'>Resume</h2>
            <h5 className="section-description text-end">15+ Years of Experience</h5>
            <Row className='py-5' >
                <Col md={8}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h3 className="heading">Experience</h3>
                        <button className='mainBtn'>Download resume</button>
                    </div>

                    <ul className='ps-0 list-unstyled'>
                        <li className='Exp_ItemBox'>
                            <span class="item-period">2023 - 2024</span>
                            <div className='exp_item ps-4 pt-2'>
                                <Image src={logo5} className="companyN" alt='logoimg' />
                                <p>Hired to turn around technology operations for the company after a leadership exodus. Led technology strategy and operations for an $8M member-funded coaching and education company, empowering over 600 estate planning lawyers to build and grow their firms. Trained and developed 9 teammates.</p>
                                <h4 className="item-title pb-3">Turnaround Chief Information Officer</h4>
                                <ul>
                                    <li>Achieved a 340% increase in value delivery by transforming the IT group with comprehensive agile adoption, boosting productive time from 20% to 80%.</li>
                                    <li>Reduced software costs by 32% through the migration of 20+ SMB applications to HubSpot Enterprise, enhancing the capacity of Sales, Marketing, and Service teams while reducing expenses.</li>
                                    <li>Led the migration from Keap, Pipedrive, ZenDesk, and WordPress to HubSpot, reducing task cycle times by 90%, optimizing workflows, enhancing data integrity, and ensuring scalable infrastructure for 600+ member firms.</li>
                                    <li>Implemented a company-wide "North Star" strategy through cross-departmental workshops, aligning KPIs with company goals, and fostering collaboration, resulting in improved efficiency.</li>
                                    <li>Championed company-wide Scrum adoption by developing an agile roadmap, providing training, and establishing sprint reviews and retrospectives, leading to improved delivery timelines and product quality.</li>
                                    <li>Trained and developed a team of 9, enhancing skills and fostering a collaborative environment.</li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                </Col>
                <Col md={4}>
                    <div className='edu'>
                        <h3 className="heading">Education</h3>
                        <div className='collegeCard mb-5'>
                            <a href='#'>
                                <div className='coll_inner d-flex align-items-stretch'>
                                    <div className='coll_logo align-content-center p-4'>
                                        <Image src={collage} alt='college1' fluid />
                                    </div>
                                    <div className='collegeContent p-4'>
                                        <div className="certi-content">
                                            <h4>BLS, Management</h4>
                                            <div className="certi-id">
                                                <span>Summa Cum Laude</span>
                                            </div>
                                            <div className="certi-date">
                                                <span>University of Maine  Presque Isle</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <h3 className="heading">Certifications</h3>

                        <div className='collegeCard'>
                            <a href='#'>
                                <div className='coll_inner d-flex align-items-stretch'>
                                    <div className='coll_logo align-content-center p-4'>
                                        <Image src={LSSMBB} alt='LSSMBB' fluid />
                                    </div>
                                    <div className='collegeContent p-4'>
                                        <div className="certi-content">
                                            <h4>Lean Six Sigma Black Belt (LSSBB)</h4>
                                            <div className="certi-id">
                                                <span>4548311</span>
                                            </div>
                                            <div className="certi-date">
                                                <span>2016</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='collegeCard'>
                            <a href='#'>
                                <div className='coll_inner d-flex align-items-stretch'>
                                    <div className='coll_logo align-content-center p-4'>
                                        <Image src={SAS} alt='SAS' fluid />
                                    </div>
                                    <div className='collegeContent p-4'>
                                        <div className="certi-content">
                                            <h4>Scrum@Scale Practitioner</h4>
                                            <div className="certi-id">
                                                {/* <span>2019</span> */}
                                            </div>
                                            <div className="certi-date">
                                                <span>2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='collegeCard'>
                            <a href='#'>
                                <div className='coll_inner d-flex align-items-stretch'>
                                    <div className='coll_logo align-content-center p-4'>
                                        <Image src={PMP} alt='PMP' fluid />
                                    </div>
                                    <div className='collegeContent p-4'>
                                        <div className="certi-content">
                                            <h4>Project Management Professional (PMP)</h4>
                                            <div className="certi-id">
                                                <span>2070060</span>
                                            </div>
                                            <div className="certi-date">
                                                <span>2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='collegeCard'>
                            <a href='#'>
                                <div className='coll_inner d-flex align-items-stretch'>
                                    <div className='coll_logo align-content-center p-4'>
                                        <Image src={ACP} alt='sa' fluid />
                                    </div>
                                    <div className='collegeContent p-4'>
                                        <div className="certi-content">
                                            <h4>Agile Certified Practitioner (PMI-ACP)</h4>
                                            <div className="certi-id">
                                                <span>2105924</span>
                                            </div>
                                            <div className="certi-date">
                                                <span>2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='collegeCard'>
                            <a href='#'>
                                <div className='coll_inner d-flex align-items-stretch'>
                                    <div className='coll_logo align-content-center p-4'>
                                        <Image src={Sa} alt='sa' fluid />
                                    </div>
                                    <div className='collegeContent p-4'>
                                        <div className="certi-content">
                                            <h4>Certified Scrum Professional® - ScrumMaster (CSP-SM)</h4>
                                            <div className="certi-id">
                                                <span>000724937</span>
                                            </div>
                                            <div className="certi-date">
                                                <span>2018</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='collegeCard'>
                            <a href='#'>
                                <div className='coll_inner d-flex align-items-stretch'>
                                    <div className='coll_logo align-content-center p-4'>
                                        <Image src={Sa_scp} alt='Sa_scp' fluid />
                                    </div>
                                    <div className='collegeContent p-4'>
                                        <div className="certi-content">
                                            <h4>Certified Scrum Professional® - Product Owner (CSP-PO)</h4>
                                            <div className="certi-id">
                                                <span>000724937</span>
                                            </div>
                                            <div className="certi-date">
                                                <span>2018</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='collegeCard'>
                            <a href='#'>
                                <div className='coll_inner d-flex align-items-stretch'>
                                    <div className='coll_logo align-content-center p-4'>
                                        <Image src={Sa_cas} alt='Sa_cas' fluid />
                                    </div>
                                    <div className='collegeContent p-4'>
                                        <div className="certi-content">
                                            <h4>Certified Agile Leader® 1 (CAL-1)</h4>
                                            <div className="certi-id">
                                                <span>000724937</span>
                                            </div>
                                            <div className="certi-date">
                                                <span>2018</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='collegeCard'>
                            <a href='#'>
                                <div className='coll_inner d-flex align-items-stretch'>
                                    <div className='coll_logo align-content-center p-4'>
                                        <Image src={Sa_cms} alt='Sa_cas' fluid />
                                    </div>
                                    <div className='collegeContent p-4'>
                                        <div className="certi-content">
                                            <h4>Certified ScrumMaster (CSM)</h4>
                                            <div className="certi-id">
                                                <span>000724937</span>
                                            </div>
                                            <div className="certi-date">
                                                <span>2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <h3 className="heading">Skills</h3>
                        <ul className='ps-0'>
                            <li className='customBages'>Strategic Leadership & Vision</li>
                            <li className='customBages'>Process Optimization</li>
                            <li className='customBages'>Agile Organizational Structures</li>
                            <li className='customBages'>Change Management</li>
                            <li className='customBages'>Governance & Compliance</li>
                            <li className='customBages'>Product Development & Management</li>
                            <li className='customBages'>Organizational Development</li>
                            <li className='customBages'>Continuous Improvement</li>
                            <li className='customBages'>Operational Excellence</li>
                            <li className='customBages'>P&L Management</li>
                            <li className='customBages'>Mergers & Acquisitions (M&A)</li>
                            <li className='customBages'>Goal Setting and OKRs</li>
                            <li className='customBages'>Change Management</li>
                            <li className='customBages'>Change Management</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
       </div>
    )
}

export default Resume