import React, { useState } from 'react';
import {Button, Offcanvas } from 'react-bootstrap';
import headerimg from '../images/Mancuso-Headshot.png'
import { TfiMenu } from "react-icons/tfi";
import DesktopSidebar from './DesktopSidebar';


function MobileHeader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='MobileHeader'>
            <div className="mobile_header d-flex w-100 justify-content-between px-4 align-items-center">
                <div className="mobile-logo-container d-flex align-items-center">
                    <div className="mobile-header-image">
                        <a href="https://mancuso.ai/">
                            <img src={headerimg} alt="image" />
                        </a>
                    </div>

                    <div className="mobile-site-title">
                        <a href="https://mancuso.ai/">
                            Michael Mancuso  
                         </a>                      
                    </div>
                </div>
                <a className="menu-toggle pe-4">
                    <TfiMenu className='text-black' onClick={handleShow}/>
                </a>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   <div className='mobileView'>
                     <DesktopSidebar />
                   </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default MobileHeader