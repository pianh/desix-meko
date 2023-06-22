import Image from 'next/image';

function HeaderDefault() {
    return ( 
    <header className="main-header w-full min-h-[840px] sm-min-h-[640] row header-bg">
        <div className="header-logo col-2 h-15">
            {/* <img className="h-full w-full" src="https://kodesolution.com/html/2023/desix-html/images/logo.png" alt="" /> */}
            {/* <Image
                srcset="https://kodesolution.com/html/2023/desix-html/images/logo.png"
                alt="Logo"
                // width={}
                // height={40}
                className='ml-10 mt-5'
            /> */}
        </div>
        <div className="col-10 mr-">
            <div className="header-top col-12 py-0">
                <div className="header-top-left mx-5 my-2 items-center">
                    <ul className="">
                        <li className="mr-4">
                            <i class="fa-solid fa-envelope"></i>
                            <a href="#" className="text-[#848484] ml-2 text-xs">needhelp@company.com</a>
                        </li>
                        <li className="ml-3">
                            <i className="fa-solid fa-location-pin"></i>
                            <span className="ml-2 text-[#848484] text-xs">88 Broklyn Golden Street. New York</span>
                        </li>
                    </ul>
                </div>
                <div className="header-top-right flex items-center">
                    <ul className="header-useful-links px-3 text-xs text-[#808287] ">
                        <li className="mr-4">
                            <a href="" className="">Help</a>
                        </li>
                        <li className="mr-4">
                            <span>/</span>
                        </li>
                        <li className="mr-4">
                            <a href="">Support</a>
                        </li>
                        <li className="mr-4">
                            <span>/</span>
                        </li>
                        <li className="mr-4">
                            <a href="">Contact</a>
                        </li>
                    </ul>
                    <ul className="header-social-icons">
                        <li className="mr-4">
                            <a href="">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>      
                        <li className="mr-4">
                            <a href="">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="">
                                <i className="fa-brands fa-pinterest-p"></i>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="">
                                <i className="fa-brands fa-instagram"></i>  
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-lower d-flex">
                  <div className="header-lower-tab row col-12">
                    <div className="header-lower-item col-10">
                        <ul className="d-flex px-5 py-10 text-[18px] text-white font-light">
                            <li className="pr-4">
                                <ul>
                                    <span>Home</span>
                                    <span>
                                        <li>Home Page 1</li>
                                        <li>Home Page 2</li>
                                        <li>Dark Styles</li>
                                        <li>Boxed Styles</li>
                                        <li>Single tyles</li>
                                        <li>Home RTL One</li>
                                        <li>Header Styles</li>
                                    </span>
                                   
                                </ul>
                                <i class="fa-solid fa-chevron-down"></i>
                            </li>
                            <li className="px-4">
                                <a href="">Pages</a>
                                <i class="fa-solid fa-chevron-down"></i>
                            </li>
                            <li className="px-4">
                                <a href="">Services</a>
                                <i class="fa-solid fa-chevron-down"></i>
                            </li>
                            <li className="px-4">
                                <a href="">Projects</a>
                                <i class="fa-solid fa-chevron-down"></i>
                            </li>
                            <li className="px-4">
                                <a href="">News</a>
                                <i class="fa-solid fa-chevron-down"></i>
                            </li>
                            <li className="px-4">
                                <a href="">Contact</a>
                            </li>
                        </ul>
                        <i class="fa-solid fa-magnifying-glass text-white text-[22px]"></i>
                    </div>
                    <div className="header-lower-call col-2">
                            <div className="header-lower-icon">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className="header-lower-call--any text-white">
                                <span>Call anytime</span>
                                <span>+92(8800) - 9850</span>
                            </div>
                    </div>
                  </div>
            </div>
        </div>
    </header> );
}
export default HeaderDefault;