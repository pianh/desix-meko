import ServicesCard from '@/components/Client/card/ServicesCard';
import PortffolioCard from '@/components/Client/card/PortffolioCard';
import FooterDefault from '@/components/Client/footer/FooterDefault';
import HeaderDefault from '@/components/Client/header/HeaderDefault';

const Services = () => {
    return (
        <div className="container-fluid p-0 w-full min-h-[1000px]">
            <HeaderDefault />
            <div className="services-bg row min-h-[740px]">
                <div className="services-content container">
                    <div className="services-title-outer">
                        <div className="services-title">Services</div>
                        <div className="services-page-breadcrumb">
                            <span>
                                <h2>Home / Page</h2>
                                <h5> / Services </h5>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="services-content" style={{ marginBottom: '400px' }}>
                    <ServicesCard />
                    {/* <PortffolioCard /> */}
                </div>
            </div>
            <FooterDefault />
        </div>
    );
};
export default Services;
