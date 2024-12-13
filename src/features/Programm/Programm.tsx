import './ProgrammStyles.css';

const Programm = () => {
  return (
    <div className='programmBG'>
      <div className='container'>
        <h2>Программа</h2>
        <div className='programmCards'>
          <div className='programmCard'>
            <h5 className='programmCardHeader'>1 день</h5>
            <p className='programmCardText'>Иркутск - Малое море (пос. Сахюрта).</p>
          </div>
          <div className='programmCard'>
            <h5 className='programmCardHeader'>2 день</h5>
            <p className='programmCardText'>Начало похода. Сахюрта - Аш-Курама. - Малое море</p>
          </div>
          <div className='programmCard'>
            <h5 className='programmCardHeader'>3 день</h5>
            <p className='programmCardText'>Аш-Курама - пос. Хужир</p>
          </div>
          <div className='programmCard'>
            <h5 className='programmCardHeader'>4 день</h5>
            <p className='programmCardText'>Пос. Хужир - местность Сасы.</p>
          </div>
          <div className='programmCard'>
            <h5 className='programmCardHeader'>5 день</h5>
            <p className='programmCardText'>Сасы - метеостанция Узуры.</p>
          </div>
          <div className='programmCard'>
            <h5 className='programmCardHeader'>6 день</h5>
            <p className='programmCardText'>Узуры - мыс Ижимей.</p>
          </div>
          <div className='programmCard'>
            <h5 className='programmCardHeader'>7 день</h5>
            <p className='programmCardText'>Восхождение на гору Жима</p>
          </div>
          <div className='programmCard'>
            <h5 className='programmCardHeader'>8 день</h5>
            <p className='programmCardText'>Ижимей - мыс Ухан</p>
          </div>
          <div className='programmCard'>
            <h5 className='programmCardHeader'>9 день</h5>
            <p className='programmCardText'>Ухан - падь Идиба</p>
          </div>
          <div className='programmCard'>
            <h5 className='programmCardHeader'>10 день</h5>
            <p className='programmCardText'>Идиба - пос. Сахюрта.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programm;
