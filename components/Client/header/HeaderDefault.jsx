import Image from 'next/image';

function HeaderDefault() {
    return ( 
    <header className="header-wrapper header-bg w-full min-h-[840px]">
        <div className='main-header'>
            <div className="header-top">
                <div className="header-top-left">
                    <ul>
                        <li style={{ marginLeft: '20px' }}>
                            <i class="fa-solid fa-envelope"></i>
                            <a href="#" className="text-[#848484] ml-2 text-xs">needhelp@company.com</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-location-pin"></i>
                            <span className="ml-2 text-[#848484] text-xs">88 Broklyn Golden Street. New York
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="header-top-right">
                    <ul className="header-useful-links text-[#848484] text-xs" style={{ marginRight: '20px' }}>
                        <li >
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
                <div className='row'>
                    <div className="header-logo col-2">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/logo.png"
                            alt="Logo"
                            // width={}
                            // height={40}
                            className='ml-10 mt-5'
                        />
                    </div>
                    <div className='col-10 text-white'>
                        <div className="header-lower-tab">
                            <div className="header-lower-item col-10">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header> );
}
export default HeaderDefault;