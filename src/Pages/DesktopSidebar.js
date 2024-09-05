/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
// import headerimg from '../images/Mancuso-Headshot.png'
import { Nav, Image } from 'react-bootstrap';
import axios from 'axios';

function DesktopSidebar() {

    const [sidebar, setSidebar] = useState("");
    const [headerimg, setHeaderimg] = useState("");
   
    useEffect(() => {
        axios.get("https://mancuso.ai/wp-json/v1/theme-settings")
            .then((resp) => {
                console.log(`Desktop SideBar API`);
                console.log(resp.data);
                setSidebar(resp.data);
                setHeaderimg(resp.data.photo.url);
            });
    }, []);


    return (
        <>
            <div className='header_content'>
                <div className='topContent text-center mx-auto my-4'>
                    <div className="header-image">
                        <Link to="/">
                            <Image src={headerimg} alt="image" fluid />
                        </Link>
                    </div>
                    <div className="site-title-block mt-4">
                        <Link to="/">
                            <h1 className="site-title">{sidebar.logo}</h1>
                        </Link>
                    </div>
                </div>
                <Nav className="flex-column sideTabs">
                    <ul className='list-unstyled'>
                        <li>
                            <NavLink to="/">About me</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume">Resume</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </Nav>
                <div className='social_icons'>
                    <a href='' >
                        <FaLinkedinIn className='custom_icons' />
                    </a>
                </div>
                <div class="copyrights">{sidebar.copyrights}</div>
            </div>
        </>
    )
}

export default DesktopSidebar