import NewsCard from '@/components/Client/card/NewsCard';
import FooterDefault from '@/components/Client/footer/FooterDefault';
import HeaderDefault from '@/components/Client/header/HeaderDefault';

const News = () => {
    return (
        <div className="container-fluid p-0 w-full min-h-[1000px]">
            <HeaderDefault />
            <div className="news-bg row min-h-[740px]">
                <div className="news-content container">
                    <div className="news-title-outer">
                        <div className="news-title">News Grid</div>
                        <div className="new-page-breadcrumb">
                            <span>
                                <h2>Home </h2>
                                <h5> / News </h5>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="news-content"></div>
                <div className="" style={{ marginTop: '0px' }}>
                    <NewsCard />
                </div>
            </div>
            <FooterDefault />
        </div>
    );
};
export default News;
