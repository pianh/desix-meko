
function HeaderDefault() {
    return ( 
    <header className="main-header">
        <div className="header-top col-md-10">
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
                    </li>
                    <li>
                        <a href="">Support</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                <ul className="header-social-icons">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div className="header-lower"></div>
    </header> );
}
export default HeaderDefault;