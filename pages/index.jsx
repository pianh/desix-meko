import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '../components/Client/header/HeaderDefault';
import Footer from '../components/Client/footer/FooterDefault';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <div className="container-fluid p-0 w-full min-h-[1000px]">
            <Header />
            <section className="home-bg w-full min-h-[840px] flex justify-center items-center">
                <h1 className="home-bg-content">
                    Digital
                    <span class="selected"> agency</span>
                    <br />
                    for your business
                </h1>
                <button className="home-bg-btn">Discover More</button>
            </section>
            <section className="home-service row bg-[#18191D]">
                <div className="col-6 home-service-left">
                    <span className="home-service-sub-title">Our services</span>
                    <span>
                        Explore what services <br />
                        we&apos;re offering
                    </span>
                </div>
                <div className="col-6 home-service-right">
                    There are many variations of passages of available but majority alteration in some form, by humou or
                    randomised words.
                </div>
            </section>
            <section className="home-marketing">
                <div className="home-marketing-card row"></div>
            </section>
            <Footer />
        </div>
    );
}
