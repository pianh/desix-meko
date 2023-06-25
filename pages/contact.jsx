import NewsCard from '@/components/Client/card/NewsCard';
import FooterDefault from '@/components/Client/footer/FooterDefault';
import HeaderDefault from '@/components/Client/header/HeaderDefault';

const Contact = () => {
    return (
        <div className="container-fluid p-0 w-full min-h-[1000px]">
            <HeaderDefault />
            <div className="contact-bg row min-h-[740px]">
                <div className="contact-content container">
                    <div className="contact-title-outer">
                        <div className="contact-title">Contact Us</div>
                        <div className="contact-page-breadcrumb">
                            <span>
                                <h2>Home </h2>
                                <h5> / Contact </h5>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="contact-content row">
                    <div className="col-sm-6 contact-left">
                        <span>SEND US EMAIL</span>
                        <h1>Feel free to write</h1>
                        <div className="contact-form">
                            <div className="contact-form-name-mail row">
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Enter Name" className="form-control" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Enter Email" className="form-control" />
                                </div>
                            </div>
                            <div className="contact-form-sub-phone row">
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Enter Subject" className="form-control" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Enter Phone" className="form-control" />
                                </div>
                            </div>

                            <textarea
                                type="text"
                                name=""
                                id=""
                                placeholder="Write a message"
                                className="form-control col-sm-12 contact-form-mess"
                            />

                            <div>
                                <button type="button" className="contact-button-message">
                                    Send a message
                                </button>
                                <button type="button" className="contact-button-reset">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 contact-right">
                        <span>NEED ANY HELP?</span>
                        <h1>Get in touch with us</h1>
                        <h5>
                            Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit
                            sed do eiusmod tempor incididunt simply dolore magna.
                        </h5>
                        <div className="contact-detail">
                            <div className="contact-icon">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className="contact-des">
                                <span>Have any question?</span>
                                <h2>Free +92 (020)-9850</h2>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <div className="contact-icon">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className="contact-des">
                                <span>Write email</span>
                                <h2>needhelp@company.com</h2>
                            </div>
                        </div>
                        <div className="contact-detail">
                            <div className="contact-icon">
                                <i class="fa-solid fa-location-arrow"></i>
                            </div>
                            <div className="contact-des">
                                <span>Visit anytime</span>
                                <h2 className="contact-des--location">66 broklyn golden street. New York</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-map"></div>
            <FooterDefault />
        </div>
    );
};
export default Contact;
