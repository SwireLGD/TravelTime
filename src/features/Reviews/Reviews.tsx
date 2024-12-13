import './ReviewsStyles.css';

const Reviews = () => {
    return (
        <>
            <h2 className='container'>Отзывы</h2>
            <div className="reviewsBG">
                    <button className="arrow left">
                        <img src="/src/assets/images/ArrowLeft.svg" alt="влево" />
                    </button>
                    <div className="reviewCards">
                        <div className="reviewCard reviewCard1">
                            <div className="reviewCardHead">
                                <div className="avatar mariya"></div>
                                <h3>Мария<br />Перес</h3>
                            </div>
                            <p className="reviewText">
                                Путешествие с "Пора в поход" на Байкал было незабываемым. Организация была превосходной, . Гиды были профессиональными.
                                Комфорт и безопасность также были приоритетом. Рекомендую "Пора в поход" всем, кто хочет испытать незабываемые приключения на Байкале.
                            </p>
                        </div>
                        <div className="reviewCard reviewCard2">
                            <div className="reviewCardHead">
                                <div className="avatar evgeniy"></div>
                                <h3>Евгений<br />Ким</h3>
                            </div>
                            <p className="reviewText">
                            Путешествие с "Пора в поход" на Байкал было незабываемым. Они предлагают уникальные  приключения, гарантируют комфорт и безопасность,
                            а также обеспечивают высокий уровень профессионализма и заботы о клиентах. В общем рекомендую всем.
                            </p>
                        </div>
                    </div>
                    <button className="arrow right">
                        <img src="/src/assets/images/ArrowRight.svg" alt="вправо" />
                    </button>
            </div>
        </>
    );
};

export default Reviews;