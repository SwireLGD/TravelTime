import './WhyUsStyles.css';

const WhyUs = () => {
  return (
    <>
      <div className='whyUsBG'>
        <div className='container'>
          <h2 className='whyUsHeader'>Почему мы?</h2>
          <div className='whyUsCards'>
            <div className='whyUsCard'>
              <img src='/src/assets/images/Tours.svg' alt='Туры' />
              <p className='whyUsText'>Широкая география туров</p>
            </div>
            <div className='whyUsCard'>
              <img src='/src/assets/images/Team.svg' alt='Туры' />
              <p className='whyUsText'>
                Не просто группа, <br /> а команда!
              </p>
            </div>
            <div className='whyUsCard'>
              <img src='/src/assets/images/Manual.svg' alt='Туры' />
              <p className='whyUsText'>Граммотные инструктора</p>
            </div>
            <div className='whyUsCard'>
              <img src='/src/assets/images/Mountain.svg' alt='Туры' />
              <p className='whyUsText'>Доступные для всех маршруты</p>
            </div>
            <div className='whyUsCard'>
              <img src='/src/assets/images/Routes.svg' alt='Туры' />
              <p className='whyUsText'>Проверенные маршруты</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
