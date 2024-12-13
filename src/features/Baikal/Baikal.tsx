import './BaikalStyles.css';

const Baikal = () => {
    return (
        <>
            <div className="container">
                <h2>Экспедиция <br />по льду Байкала</h2>
                <div className="baikalCards">
                    <div className="baikalCard baikalCard1">
                    </div>
                    <div className="baikalCard">
                        <div className='baikalCardContent'>
                            <p className="baikalPrice">Стоимость тура <span className="baikalPriceSpan">35000</span> рублей на человека</p>
                            <ul className="baikalList">
                            <span className='baikalListSpan'>В стоимость включено:</span>
                                <li className="baikalListItem">трансфер г. Иркутск – <br />пос. МРС – г. Иркутск;</li>
                                <li className="baikalListItem">гид-проводник;</li>
                                <li className="baikalListItem">проживание в зимней палатке <br />с печкой или в отдельных 2-3х <br />местных палатках (на выбор). </li>
                                <li className="baikalListItem">размещение в гостевом доме <br />в пос. Сахюрта, пос. Хужир и на метеостанции Узуры;</li>
                                <li className="baikalListItem">питание костровое;</li>
                                <li className="baikalListItem">аренда снаряжения (палатки,<br />костровое снаряжение, сани-волокуши).</li>
                            </ul>
                            <ul className="baikalMoreList">
                            <span className='baikalMoreListSpan'>Дополнительно оплачивается:</span>
                                <li className="baikalMoreListItem">аренда ледоходов;</li>
                                <li className="baikalMoreListItem">питание в кафе во время трансфера;</li>
                                <li className="baikalMoreListItem">баня (по желанию).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Baikal;