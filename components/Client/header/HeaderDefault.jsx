
function HeaderDefault() {
    return ( 
    <header className="main-header row">
        <div className="header-logo col-1">
            <img src="" alt="" />
            logo
        </div>
        <div className="col-11">
            <div className="header-top col-11 py-0 border border-gray-50">
                <div className="header-top-left mx-5 my-2 items-center">
                    <ul className="">
                        <li className="mr-4">
                            <i class="fa-solid fa-envelope"></i>
                            <a href="#" className="text-gray-400 ml-2 text-sm">needhelp@company.com</a>
                        </li>
                        <li className="ml-3">
                            <i class="fa-solid fa-location-pin"></i>
                            <span className="ml-2 text-gray-400 text-sm">88 Broklyn Golden Street. New York</span>
                        </li>
                    </ul>
                </div>
                <div className="header-top-right flex items-center">
                    <ul className="header-useful-links px-3 text-sm text-gray-400 ">
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
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>      
                        <li className="mr-4">
                            <a href="">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="">
                                <i class="fa-brands fa-pinterest-p"></i>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a href="">
                                <i class="fa-brands fa-instagram"></i>  
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-lower d-flex">
                  <div className="header-lower-tab row">
                    <div className="header-lower-item col-10">
                        <ul className="d-flex px-5 py-4 text-xl text-white">
                            <li className="pr-4">
                                <a href="">Home</a>
                            </li>
                            <li className="px-4">
                                <a href="">Pages</a>
                            </li>
                            <li className="px-4">
                                <a href="">Services</a>
                            </li>
                            <li className="px-4">
                                <a href="">Projects</a>
                            </li>
                            <li className="px-4">
                                <a href="">News</a>
                            </li>
                            <li className="px-4">
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                  </div>
                  <div className="header-lower-call col-2">
                        <div className="header-lower-icon"></div>
                        <div className="header-lower-call--any">
                            <span>Call anytime</span>
                            <span>+92(8800) - 9850</span>
                        </div>
                  </div>
            </div>
        </div>
    </header> );
}
export default HeaderDefault;