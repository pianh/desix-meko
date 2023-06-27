import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function HeaderDefault() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className="header-wrapper">
            <div className={`main-header ${isSticky ? 'hidden' : ''}`}>
                <div className="header-top">
                    <div className="header-top-left">
                        <ul>
                            <li style={{ marginLeft: '20px' }}>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="#" className="text-[#848484] ml-2 text-xs hover:text-white">
                                    needhelp@company.com
                                </a>
                            </li>
                            <li>
                                <i className="fa-solid fa-location-pin"></i>
                                <span className="ml-2 text-[#848484] text-xs">88 Broklyn Golden Street. New York</span>
                            </li>
                        </ul>
                    </div>
                    <div className="header-top-right">
                        <ul className="header-useful-links text-[#848484] text-xs" style={{ marginRight: '20px' }}>
                            <li>
                                <a href="">Help</a>
                            </li>
                            <li>
                                <span>/</span>
                            </li>
                            <li>
                                <a href="">Support</a>
                            </li>
                            <li>
                                <span>/</span>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                        <ul className="header-social-icons">
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-pinterest-p"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-lower row">
                    <div className="row">
                        <Navbar expand="lg" className="w-full ">
                            <Navbar.Brand href="#home">
                                <Image
                                    srcset="https://kodesolution.com/html/2023/desix-html/images/logo.png"
                                    alt="Logo"
                                    // width={}
                                    // height={40}
                                    className="mb-2 ml-7"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto text-white header-link">
                                    <NavDropdown title="Home" id="basic-nav-dropdown" className="header-nav" href="/">
                                        <NavDropdown.Item href="/">Home Page 1</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Home Page 2</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Home Page 3</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Home Page 4</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Page" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                        <NavDropdown.Item href="/about">Team</NavDropdown.Item>
                                        <NavDropdown.Item href="/about">Shop</NavDropdown.Item>
                                        <NavDropdown.Item href="/about">FAQ</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Services" id="basic-nav-dropdown" href="/service">
                                        <NavDropdown.Item href="/services">Services 1</NavDropdown.Item>
                                        <NavDropdown.Item href="/services">Services 2</NavDropdown.Item>
                                        <NavDropdown.Item href="/services">Services 3</NavDropdown.Item>
                                        <NavDropdown.Item href="/services">Services 4</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Project" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Project 4</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="News" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/news">News 1</NavDropdown.Item>
                                        <NavDropdown.Item href="/news">News 2</NavDropdown.Item>
                                        <NavDropdown.Item href="/news">News 3</NavDropdown.Item>
                                        <NavDropdown.Item href="/news">News 4</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>

            <div className={`header-sticky ${isSticky ? 'sticky-appear' : ''}`}>
                <Navbar expand="lg" className="w-full d-flex justify-content-between">
                    <Navbar.Brand href="#home">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/logo-2.png"
                            alt="Logo"
                            className="mb-2 ml-7"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="header-link">
                            <NavDropdown title="Home" id="basic-nav-dropdown" className="header-nav" href="/">
                                <NavDropdown.Item href="/">Home Page 1</NavDropdown.Item>
                                <NavDropdown.Item href="/">Home Page 2</NavDropdown.Item>
                                <NavDropdown.Item href="/">Home Page 3</NavDropdown.Item>
                                <NavDropdown.Item href="/">Home Page 4</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Page" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                <NavDropdown.Item href="/about">Team</NavDropdown.Item>
                                <NavDropdown.Item href="/about">Shop</NavDropdown.Item>
                                <NavDropdown.Item href="/about">FAQ</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Services" id="basic-nav-dropdown" href="/service">
                                <NavDropdown.Item href="/services">Services 1</NavDropdown.Item>
                                <NavDropdown.Item href="/services">Services 2</NavDropdown.Item>
                                <NavDropdown.Item href="/services">Services 3</NavDropdown.Item>
                                <NavDropdown.Item href="/services">Services 4</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Project" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Project 4</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="News" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/news">News 1</NavDropdown.Item>
                                <NavDropdown.Item href="/news">News 2</NavDropdown.Item>
                                <NavDropdown.Item href="/news">News 3</NavDropdown.Item>
                                <NavDropdown.Item href="/news">News 4</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
}
export default HeaderDefault;
