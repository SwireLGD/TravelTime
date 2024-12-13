import './RouteStyles.css';

const RouteBlock = () => {
  return (
    <>
      <div className='routeBG'>
        <div className='container'>
          <h2 className='routeHeader'>Маршрут</h2>
          <div className='routeCards'>
            <div className='routeCard'>
              <h5 className='routeCardHeader'>Пройдёте пешком вокруг Ольхона</h5>
              <p className='routeCardText'>
                Именно здесь самый красивый прозрачный лёд. <br />
                Каждый день вы будете видеть новые места, которые вы будете долго помнить
              </p>
            </div>
            <div className='routeCard'>
              <h5 className='routeCardHeader'>Покатаетнесь на коньках по Байкалу</h5>
              <p className='routeCardText'>
                Зимой Байкал - самый большой каток в мире. Предлагаем вам кататься на коньках на
                стоянках и в свободное время, это незабываемое ощущение!
              </p>
            </div>
            <div className='routeCard'>
              <h5 className='routeCardHeader'>Восхождение на гору Жима</h5>
              <p className='routeCardText'>Это самая высокая точка на острове Ольхон</p>
            </div>
            <div className='routeCard'>
              <h5 className='routeCardHeader'>Увидите Непру</h5>
              <p className='routeCardText'>Мы знаем где она любит проводить время на льду</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RouteBlock;
