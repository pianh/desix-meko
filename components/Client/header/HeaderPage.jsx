import Image from 'next/image';
import React, { useEffect, useState } from 'react';
function HeaderPage() {
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
                        <div className="header-logo col-2">
                            <Image
                                srcset="https://kodesolution.com/html/2023/desix-html/images/logo.png"
                                alt="Logo"
                                // width={}
                                // height={40}
                                className="mb-2 ml-7"
                            />
                        </div>
                        <div className="col-10 text-white">
                            <div className="header-lower-tab">
                                <div className="header-lower-item col-9">
                                    <ul>
                                        <li className="pr-4">
                                            <ul>
                                                <span>Home</span>
                                                <ul>
                                                    <li>Home Page 1</li>
                                                    <li>Home Page 2</li>
                                                    <li>Dark Styles</li>
                                                    <li>Boxed Styles</li>
                                                    <li>Single Styles</li>
                                                    <li>Home RTL One</li>
                                                    <li>Header Styles</li>
                                                </ul>
                                            </ul>
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </li>
                                        <li className="px-3">
                                            <a href="">Pages</a>
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </li>
                                        <li className="px-3">
                                            <a href="">Services</a>
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </li>
                                        <li className="px-3">
                                            <a href="">Projects</a>
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </li>
                                        <li className="px-3">
                                            <a href="">News</a>
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </li>
                                        <li className="px-3">
                                            <a href="">Contact</a>
                                        </li>
                                    </ul>
                                    <i classname="fa-solid fa-magnifying-glass text-white text-[22px] mr-8"></i>
                                </div>
                                <div className="header-lower-call col-3">
                                    <i classname="fa-solid fa-phone text-2xl mr-6"></i>
                                    <div className="header-lower-call--any text-white">
                                        <span className="text-[#ECB83C] font-medium text-sm">Call anytime</span>
                                        <span className="font-bold">+92 (8800) - 9850</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`header-sticky ${isSticky ? 'sticky-appear' : ''}`}>
                <div className="row ml-12 mr-12 h-100">
                    <div className="col-5 h-100 d-flex align-items-center">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/logo-2.png"
                            alt="Logo"
                            // width={}
                            // height={40}
                            className=""
                        />
                    </div>
                    <div className="col-7 header-sticky--tab">
                        <ul>
                            <li>
                                <ul>
                                    <span>Home</span>
                                    <ul>
                                        <li>Home Page 1</li>
                                        <li>Home Page 2</li>
                                        <li>Dark Styles</li>
                                        <li>Boxed Styles</li>
                                        <li>Single Styles</li>
                                        <li>Home RTL One</li>
                                        <li>Header Styles</li>
                                    </ul>
                                </ul>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                            <li>
                                <a href="">Pages</a>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                            <li>
                                <a href="">Services</a>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                            <li>
                                <a href="">Projects</a>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                            <li>
                                <a href="">News</a>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default HeaderPage;
