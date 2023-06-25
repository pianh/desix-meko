import { Image } from 'react-bootstrap';

function ServicesCard() {
    const services = [
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/service-1.jpg',
            title: 'Website development',
            description: 'There are many variations of passages of available but the majority.',
        },
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/service-2.jpg',
            title: 'Website development',
            description: 'There are many variations of passages of available but the majority.',
        },
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/service-3.jpg',
            title: 'Website development',
            description: 'There are many variations of passages of available but the majority.',
        },
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/service-4.jpg',
            title: 'Website development',
            description: 'There are many variations of passages of available but the majority.',
        },
    ];

    return (
        <div className="row">
            {services.map((service, index) => (
                <div className="col-md-3 col-sm-4 col-6" key={index}>
                    <div className="services-marketing-card">
                        <Image srcset={service.srcset} alt="Logo" className="mt-1 w-full" />
                        <div className="services-marketing-card--icon">
                            <i className="fa-solid fa-clapperboard"></i>
                        </div>
                        <div className="services-marketing-card--text">
                            <span>{service.title}</span>
                        </div>
                        <div className="services-marketing-card-effect">
                            <div className="services-marketing-card-effect--icon">
                                <i className="fa-solid fa-clapperboard"></i>
                            </div>
                            <span className="services-marketing-card-effect-title">
                                Website <br />
                                development
                            </span>
                            <span className="services-marketing-card-effect-sub">{service.description}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServicesCard;
