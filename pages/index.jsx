import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from './../components/Client/header/HeaderDefault';
import Footer from './../components/Client/footer/FooterDefault';
import { useState, useEffect } from 'react';
import PortffolioCard from './../components/Client/card/PortffolioCard';
import ServicesCard from './../components/Client/card/ServicesCard';
import NewsCard from './../components/Client/card/NewsCard';
import 'animate.css';

const inter = Inter({ subsets: ['latin'] });
const cardData = [
    {
        imageUrl: 'https://kodesolution.com/html/2023/desix-html/images/resource/service-1.jpg',
        title: 'Website development',
        effectTitle: 'Website development',
        effectSubtitle: 'There are many variations of passages of available but the majority.',
    },
    // Add more objects for additional cards
];

export default function Home() {
    const businessItems = [
        {
            icon: 'fa-solid fa-arrow-right',
            heading: 'High Quality Services',
            description: 'Lorem ipsum is simply free text dol sit amet, passage of.',
        },
        {
            icon: 'fa-solid fa-arrow-right',
            heading: 'Perfect Business Solution',
            description: 'Lorem ipsum is simply free text dol sit amet, passage of.',
        },
        {
            icon: 'fa-solid fa-arrow-right',
            heading: 'Commited to Deliver',
            description: 'Lorem ipsum is simply free text dol sit amet, passage of.',
        },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded1, setIsExpanded1] = useState(true);
    const [isExpanded2, setIsExpanded2] = useState(true);
    const [isExpanded3, setIsExpanded3] = useState(true);

    const handleToggle1 = () => {
        setIsExpanded1(!isExpanded1);
    };
    const handleToggle2 = () => {
        setIsExpanded2(!isExpanded2);
    };
    const handleToggle3 = () => {
        setIsExpanded3(!isExpanded3);
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const offset = 200; // Distance from the element before the effect is triggered

        if (scrollTop > windowHeight - offset) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="container-fluid p-0 w-full min-h-[1000px]">
            <Header />
            <section className="home-bg w-full min-h-[840px] flex justify-center items-center">
                <h1 className="home-bg-content">
                    Digital
                    <span className="selected"> agency</span>
                    <br />
                    for your business
                </h1>
                <button className="home-bg-btn">Discover More</button>
            </section>
            <section className="home-service row bg-[#18191D]">
                <div className="col-sm-6 home-service-left">
                    <span className="home-service-sub-title">Our services</span>
                    <div className="home-service-square"></div>
                    <span className="home-service-title">
                        Explore what services <br />
                        we&apos;re offering
                    </span>
                </div>
                <div className="col-sm-6 home-service-right">
                    There are many variations of passages of available but majority alteration in some form, by humou or
                    randomised words.
                </div>
            </section>
            {/* <section className="home-marketing"> */}
            <section className={`home-marketing ${isVisible ? 'animate__animated animate__fadeInTopRight' : ''}`}>
                <div className="home-marketing-card-group row">
                    <ServicesCard />
                </div>
            </section>
            <section className="home-solution row">
                {/* <div className="col-sm-6 home-solution-image-group"> */}
                <div
                    className={`col-sm-6 home-solution-image-group ${
                        isVisible ? 'animate__animated animate__fadeIn' : ''
                    }`}
                >
                    <div className="home-solution-image1">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/resource/about-1.jpg"
                            alt="Logo"
                            // width={}
                            // height={40}
                            className="mt-1 w-full"
                        />
                    </div>
                    <div className="home-solution-image2">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/resource/about-2.jpg"
                            alt="Logo"
                            // width={}
                            // height={40}
                            className="mt-1 w-full"
                        />
                    </div>
                </div>
                <div className="col-sm-6 home-solution-content">
                    <div className="home-solution-square"></div>
                    <div className="home-solution-content-heading">
                        <span className="home-solution-sub">GET TO KNOW US</span>
                        <h1 className="home-solution-title">The best digital marketing solutions</h1>
                        <p className="home-solution-des">
                            There are many variations of passages of available but the majority have suffered alteration
                            in some form, by injected hum randomised words which do not slightly.
                        </p>
                    </div>

                    <div className="home-solution-group">
                        <div className="home-solution-item">
                            <span className="home-solution-item-group">
                                <i className="fa-solid fa-bullseye"></i>
                            </span>
                            <div>
                                <div className="home-solution-item-title">Leading in marketing</div>
                                <div className="home-solution-item-text">
                                    Knowledge of technologies rules better than anyone which we apply in our daily work
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-solution-group" style={{ marginTop: '10px' }}>
                        <div className="home-solution-item">
                            <span className="home-solution-item-group">
                                <i className="fa-solid fa-bullseye"></i>
                            </span>
                            <div>
                                <div className="home-solution-item-title">Leading in marketing</div>
                                <div className="home-solution-item-text">
                                    Knowledge of technologies rules better than anyone which we apply in our daily work
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-solution-group" style={{ marginTop: '10px' }}>
                        <div className="home-solution-item">
                            <div className="home-solution-image-group">
                                <div className="home-solution-image-cycle">
                                    <Image
                                        srcset="https://kodesolution.com/html/2023/desix-html/images/resource/avatar.jpg"
                                        alt="Logo"
                                        // width={}
                                        // height={40}
                                        className="w-full home-solution-image"
                                    />
                                </div>
                                <div className="home-solution-item-name">
                                    <h1>Aleesha brown</h1>
                                    <h2>CEO & CO Founder</h2>
                                </div>
                            </div>
                            <button type="button" className="home-solution-button">
                                Discover more
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-scroll">
                <div className="home-scroll-text">*Transofrm ideas into reality</div>
                <div className="home-scroll-text">*INSPIRED WITH CREATIVITY</div>
                <div className="home-scroll-text">*Design development craft</div>
                <div className="home-scroll-text">*Transofrm ideas into reality</div>
                <div className="home-scroll-text">*INSPIRED WITH CREATIVITY</div>
            </section>
            <section className="home-digital">
                <div className="home-digital-bg"></div>
                <span>Better digital marketing solution and services at your fingertips</span>
                <div className="home-digital-button">Discover more</div>
            </section>
            {/* <section className="home-business row"> */}
            <section className={`home-business row ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}>
                <div className="home-business-heading">
                    <span>FREQUENTLY ASKED QUESTIONS</span>
                    <h2>
                        Agency is building a top <br /> business sectors
                    </h2>
                </div>
                <div className="col-sm-6 row">
                    <div className="row" style={{ marginTop: '40px' }}>
                        <div className="col-sm-6">
                            <div className="home-business-year">
                                <Image
                                    srcset="https://kodesolution.com/html/2023/desix-html/images/resource/faq.jpg"
                                    alt="Logo"
                                    // width={}
                                    // height={40}
                                    className="mt-1 w-full"
                                />
                                <div>
                                    <h1>26</h1>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 home-business-note">
                            {businessItems.map((item, index) => (
                                <div className="home-business-item" key={index} style={{ marginTop: '25px' }}>
                                    <div className="home-business-item-heading">
                                        <div className="home-business-item-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <span>{item.heading}</span>
                                    </div>
                                    <div className="home-business-des">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-6" style={{ marginTop: '30px' }}>
                    <div className="home-business-colapse">
                        <div className={`home-business-colapse ${isExpanded1 ? 'expanded' : ''}`}>
                            <div className="home-business-colapse-item">
                                <span className="home-business-colapse-heading" onClick={handleToggle1}>
                                    What does your process look like?
                                </span>
                                {isExpanded1 && (
                                    <span className="home-business-colapse-sub">
                                        <br />
                                        There are many variations of passages the majority have suffered alteration in
                                        some fo injected humour, or randomised words believable.
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="home-business-colapse">
                        <div className={`home-business-colapse ${isExpanded2 ? 'expanded' : ''}`}>
                            <div className="home-business-colapse-item">
                                <span className="home-business-colapse-heading" onClick={handleToggle2}>
                                    How long do services take to complete?
                                </span>
                                {isExpanded2 && (
                                    <span className="home-business-colapse-sub">
                                        <br />
                                        There are many variations of passages the majority have suffered alteration in
                                        some fo injected humour, or randomised words believable.
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="home-business-colapse">
                        <div className={`home-business-colapse ${isExpanded3 ? 'expanded' : ''}`}>
                            <div className="home-business-colapse-item">
                                <span className="home-business-colapse-heading" onClick={handleToggle3}>
                                    How can i find my financial record?
                                </span>
                                {isExpanded3 && (
                                    <span className="home-business-colapse-sub">
                                        <br />
                                        There are many variations of passages the majority have suffered alteration in
                                        some fo injected humour, or randomised words believable.
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-talking row home-talking-bg">
                <div className="col-sm-6 home-talking-left">
                    <span>OUR TESTIMONIALS</span>
                    <h1>
                        What they are talking <br />
                        about agency?
                    </h1>
                    <div className="home-talking-people-group">
                        <span>
                            <i className="fa-solid fa-people-group"></i>
                        </span>
                        <h2>
                            We are trusted by more then <br />
                            3800 satisfied & happy customers
                        </h2>
                    </div>
                    <div className="home-talking--arrow-group">
                        <div className="home-talking--arrow-left">
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                        <div className="home-talking--arrow-right">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 home-talking-right d-flex">
                    <div className="home-talking-group">
                        <div className="home-talking-card">
                            <span>
                                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                                Iterative approaches to corporate strategy data foster to collaborative thinking.
                            </span>
                        </div>
                        <div className="home-talking-author">
                            <div className="home-talking-img">
                                <Image
                                    srcset="https://kodesolution.com/html/2023/desix-html/images/resource/testi-thumb-1.jpg"
                                    alt="Logo"
                                    // width={}
                                    // height={40}
                                    className="mt-1 w-full"
                                />
                            </div>
                            <div className="home-talking-detail">
                                <div className="home-talking-rating">
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                </div>
                                <h5>Donald hardson</h5>
                                <span>Co Founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-talking-group" style={{ marginLeft: '20px' }}>
                        <div className="home-talking-card">
                            <span>
                                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                                Iterative approaches to corporate strategy data foster to collaborative thinking.
                            </span>
                        </div>
                        <div className="home-talking-author">
                            <div className="home-talking-img">
                                <Image
                                    srcset="https://kodesolution.com/html/2023/desix-html/images/resource/testi-thumb-1.jpg"
                                    alt="Logo"
                                    // width={}
                                    // height={40}
                                    className="mt-1 w-full"
                                />
                            </div>
                            <div className="home-talking-detail">
                                <div className="home-talking-rating">
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                </div>
                                <h5>Donald hardson</h5>
                                <span>Co Founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="home-talking-group" style={{ marginLeft: '20px' }}>
                        <div className="home-talking-card">
                            <span>
                                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                                Iterative approaches to corporate strategy data foster to collaborative thinking.
                            </span>
                        </div>
                        <div className="home-talking-author">
                            <div className="home-talking-img">
                                <Image
                                    srcset="https://kodesolution.com/html/2023/desix-html/images/resource/testi-thumb-1.jpg"
                                    alt="Logo"
                                    // width={}
                                    // height={40}
                                    className="mt-1 w-full"
                                />
                            </div>
                            <div className="home-talking-detail">
                                <div className="home-talking-rating">
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                    <i classname="fa-solid fa-star"></i>
                                </div>
                                <h5>Donald hardson</h5>
                                <span>Co Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-agency">
                <div className="home-agency-rounded-text">
                    <Image
                        srcset="https://kodesolution.com/html/2023/desix-html/images/resource/round-text.png"
                        alt="Logo"
                        // width={400}
                        // height={40}
                        className="mt-1"
                    />
                    <p>D</p>
                </div>
                <div className="home-agency-content">
                    <div className="col-sm-6">
                        <span>COMPANY BENEFITS</span>
                        <h1>
                            Why should choose <br /> our agency?
                        </h1>
                        <h2>Proin est lacus, sagittis lobortis iaculise get.</h2>
                        <p>
                            There are many variations of passages of available but the majority have suffered.
                            Alteration in some form, lipsum is simply free text by injected humou or randomised words
                            even believable.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <div className="home-agency-img">
                            <Image
                                srcset="https://kodesolution.com/html/2023/desix-html/images/resource/why-us.jpg"
                                alt="Logo"
                                // width={400}
                                // height={40}
                                className="mt-1"
                            />
                        </div>
                    </div>
                </div>
                <div className="row home-agency-qc row">
                    <div className="home-agency-qc--group">
                        <div className="home-agency-qc--item col-sm-4">
                            <span>
                                <i class="fa-solid fa-person-walking-with-cane"></i>
                            </span>
                            <h2>Leader in digital marketing</h2>
                        </div>
                        <div className="home-agency-qc--item col-sm-4">
                            <span>
                                <i class="fa-solid fa-person-walking-with-cane"></i>
                            </span>
                            <h2>Highest success rates</h2>
                        </div>
                        <div className="home-agency-qc--item col-sm-4">
                            <span>
                                <i class="fa-solid fa-person-walking-with-cane"></i>
                            </span>
                            <h2>Quality marketing solutions</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-portfolio">
                <div className="home-portfolio-content">
                    <div className="home-portfolio-heading">
                        <span>OUR PORTFOLIO</span>
                        <h1>
                            Explore our new recently <br />
                            completed projects.
                        </h1>
                    </div>
                    <div className="row">
                        {/* <div className="col-3 home-portfolio-card">
                            <div className="home-portfolio-img">
                                <Image
                                    srcset="https://kodesolution.com/html/2023/desix-html/images/resource/project-1.jpg"
                                    alt="Logo"
                                    // width={400}
                                    // height={40}
                                    className="mt-1"
                                />
                            </div>
                            <div className="home-portfolio-effect">
                                <div className="home-portfolio-effect-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                                <span>Development</span>
                                <h1>
                                    Marketing <br />
                                    webdesign
                                </h1>
                            </div>
                        </div> */}

                        {/* Card Components */}
                        <PortffolioCard />
                    </div>

                    {/* <div className="row">
                        <div className="col-3 home-portfolio-card">
                            <div className="home-portfolio-img">
                                <Image
                                    srcset="https://kodesolution.com/html/2023/desix-html/images/resource/project-1.jpg"
                                    alt="Logo"
                                    // width={400}
                                    // height={40}
                                    className="mt-1"
                                />
                            </div>
                            <div className="home-portfolio-effect">
                                <div className="home-portfolio-effect-icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                                <span>Development</span>
                                <h1>
                                    Marketing <br />
                                    webdesign
                                </h1>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            <section className="home-statist">
                <div className="home-statist-counter row">
                    <div className="home-statist-item col-3">
                        <div className="home-statist-icon">
                            <i class="fa-solid fa-list-check"></i>
                        </div>
                        <div>
                            <span class="home-statist-count-text">990</span>

                            <span className="home-statist-count-title">Projects Completed</span>
                        </div>
                    </div>
                    <div className="home-statist-item col-3">
                        <div className="home-statist-icon">
                            <i class="fa-solid fa-list-check"></i>
                        </div>
                        <div>
                            <span className="home-statist-count-text">990</span>
                            <span className="home-statist-count-title">Projects Completed</span>
                        </div>
                    </div>
                    <div className="home-statist-item col-3">
                        <div className="home-statist-icon">
                            <i class="fa-solid fa-list-check"></i>
                        </div>
                        <div>
                            <span className="home-statist-count-text">990</span>
                            <span className="home-statist-count-title">Projects Completed</span>
                        </div>
                    </div>
                    <div className="home-statist-item col-3">
                        <div className="home-statist-icon">
                            <i class="fa-solid fa-list-check"></i>
                        </div>
                        <div>
                            <span className="home-statist-count-text">990</span>
                            <span className="home-statist-count-title">Projects Completed</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-articles">
                <div className="home-articles-heading">
                    <span>FROM THE BLOG</span>
                    <h1>
                        Checkout latest news <br /> updates & articles
                    </h1>
                </div>
                <div className="home-articles-group">
                    <NewsCard />
                </div>
            </section>
            <section className="home-together home-together-bg">
                <div className="home-together-heading">
                    <span>Get in touch</span>
                    <h1>Let’s work together</h1>
                </div>
                <div className="row ">
                    <div className="col-sm-8 home-together-form">
                        <div className="home-together-input-group">
                            <div className="col-sm-5 home-together-name">
                                <input type="text" placeholder="Your name" className="form-control" />
                            </div>
                            <div className="col-sm-5">
                                <input type="text" placeholder="Email Address" className="form-control" />
                            </div>
                        </div>

                        <div className="col-sm-10 home-together-message">
                            <textarea
                                type="text"
                                name=""
                                id=""
                                placeholder="Write a message"
                                className="form-control"
                            />
                        </div>
                        <div className="home-together-button">Send a message</div>
                    </div>
                </div>
                <div className="home-together-img">
                    <Image
                        srcset="https://kodesolution.com/html/2023/desix-html/images/resource/girl.png"
                        alt="Logo"
                        className="mt-1"
                    />
                </div>
                <div className="row home-together-envato">
                    <div className="home-together-envato-img">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/clients/1.png"
                            alt="Logo"
                            className="mt-1"
                        />
                    </div>
                    <div className="home-together-envato-img">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/clients/1.png"
                            alt="Logo"
                            className="mt-1"
                        />
                    </div>
                    <div className="home-together-envato-img">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/clients/1.png"
                            alt="Logo"
                            className="mt-1"
                        />
                    </div>
                    <div className="home-together-envato-img">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/clients/1.png"
                            alt="Logo"
                            className="mt-1"
                        />
                    </div>
                    <div className="home-together-envato-img">
                        <Image
                            srcset="https://kodesolution.com/html/2023/desix-html/images/clients/1.png"
                            alt="Logo"
                            className="mt-1"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
