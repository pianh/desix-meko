import Image from 'next/image';

function FooterDefault() {
    return (
        <footer className="footer">
            <div className="footer-top row">
                <div className="col-12 col-lg-4 col-md-6 footer-top-group">
                    <div className="footer-top-icon">
                        <i className="fa-solid fa-square-phone"></i>
                    </div>
                    <div className="footer-top-des">
                        <span>Call Anytime</span>
                        <a href="tel:+92(8800)48720">+92 (8800) -89 8630</a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 footer-top-group">
                    <div className="footer-top-icon">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="footer-top-des">
                        <span>Send Email</span>
                        <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-12 footer-top-group">
                    <div className="footer-top-icon">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="footer-top-des">
                        <span>Address</span>
                        <a>30 Broklyn Golden Street. USA</a>
                    </div>
                </div>
            </div>
            <div className="footer-center row">
                <div className="col-12 col-lg-6 col-md-12">
                    <div className="footer-image-logo">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/logo.png"
                            alt="Logo"
                            className="mt-1 w-full"
                        />
                    </div>
                    <h3>
                        Welcome to our digital agency. Lorem ipsum simply free text dolor sited amet cons cing elit.
                    </h3>
                    <div className="footer-social">
                        <div className="footer-social-item">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="footer-social-item">
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div className="footer-social-item">
                            <i className="fa-solid fa-podcast"></i>
                        </div>
                        <div className="footer-social-item">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-md-12 row">
                    <div className="col-sm-6 footer-explore">
                        <h5>Explore</h5>
                        <div className="footer-list footer-list-columns">
                            <ul>
                                <li>
                                    <a href="#">Meet Our Team</a>
                                </li>
                                <li>
                                    <a href="#">What We Do</a>
                                </li>
                                <li>
                                    <a href="#">Latest News</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Faqs</a>
                                </li>
                                <li className="break-column">
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                                <li>
                                    <a href="#">New Projects</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 footer-news">
                        <h5>Newsletter</h5>
                        <span>Subsrcibe for our latest resources</span>
                        <input type="email" className="" placeholder="Email Address" />
                        <button type="button" className="footer-button">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom row">
                <hr className="footer-bottom-line" />
                <span>© Copyright 2023 by Company.com</span>
            </div>
        </footer>
    );
}
export default FooterDefault;
