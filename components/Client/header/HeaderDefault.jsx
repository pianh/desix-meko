
function HeaderDefault() {
    return ( 
    <header className="main-header row">
        <div className="header-logo col-2">
            <img src="" alt="" />
            logo
        </div>
        <div className="col-10">
            <div className="header-top col-11 py-0 border border-red-50">
                <div className="header-top-left">
                    <ul className="">
                        <li className="">
                            <i class="fa-regular fa-envelope"></i>
                            <a href="#">needhelp@company.com</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-location-pin"></i>
                            <span>88 Broklyn Golden Street. New York</span>
                        </li>
                    </ul>
                </div>
                <div className="header-top-right">
                    <ul className="header-useful-links">
                        <li>
                            <a href="" className="">Help</a>
                            <span>/</span>
                        </li>
                        <li>
                            <a href="">Support</a>
                            <span>/</span>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                    <ul className="header-social-icons">
                        <li>
                            <a href="">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>      
                        <li>
                            <a href="">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa-brands fa-pinterest-p"></i>
                            </a>
                        </li>
                        <li>
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
                        <ul className="d-flex ">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Pages</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Projects</a>
                            </li>
                            <li>
                                <a href="">News</a>
                            </li>
                            <li>
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