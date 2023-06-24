import Image from 'next/image';

function NewsCard() {
    const newsData = [
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/news-1.jpg',
            time: '20',
            month: 'April',
            author: 'Admin',
            commentCount: '2',
            title: 'Five ways that can develop your business website',
        },
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/news-2.jpg',
            time: '20',
            month: 'April',
            author: 'Admin',
            commentCount: '2',
            title: 'Five ways that can develop your business website',
        },
        {
            srcset: 'https://kodesolution.com/html/2023/desix-html/images/resource/news-3.jpg',
            time: '20',
            month: 'April',
            author: 'Admin',
            commentCount: '2',
            title: 'Five ways that can develop your business website',
        },
    ];
    return (
        <>
            <div className="row news-card-group">
                {newsData.map((news, index) => (
                    <div className="col-sm-4" key={index}>
                        <div className="news-card-item">
                            <div className="news-card-img">
                                <Image srcset={news.srcset} alt="Logo" className="" />
                            </div>
                            <div className="news-card-content">
                                <div className="news-card-time">
                                    <span>{news.time}</span>
                                    <p>{news.month}</p>
                                </div>
                                <div className="news-card-des">
                                    <div className="news-card-au">
                                        <i className="bi bi-person-circle"></i>
                                        <h3>by {news.author}</h3>
                                    </div>
                                    <div className="news-card-comment">
                                        <i className="fa-solid fa-comments"></i>
                                        <h3>{news.commentCount} Comments</h3>
                                    </div>
                                </div>
                                <div className="news-card-title">{news.title}</div>
                            </div>
                            <div className="news-card-more">
                                <span>Read More</span>
                                <span className="news-card-more--icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default NewsCard;
