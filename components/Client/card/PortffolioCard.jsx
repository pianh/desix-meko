import { Image } from 'react-bootstrap';

function PortffolioCard() {
    const portfolios = [
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/project-1.jpg',
            title: 'Marketing web',
        },
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/project-2.jpg',
            title: 'Marketing web',
        },
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/project-3.jpg',
            title: 'Marketing web',
        },
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/project-4.jpg',
            title: 'Marketing web',
        },
    ];
    return (
        <>
            {portfolios.map((portfolio, index) => (
                <div className="col-sm-3 home-portfolio-card" key={index}>
                    <div className="home-portfolio-img">
                        <Image srcset={portfolio.srcset} alt="Logo" className="mt-1" />
                    </div>
                    <div className="home-portfolio-effect">
                        <div className="home-portfolio-effect-icon">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                        <span>Development</span>
                        <h1>{portfolio.title}</h1>
                    </div>
                </div>
            ))}
        </>
    );
}
export default PortffolioCard;
