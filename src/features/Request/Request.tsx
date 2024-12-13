import './RequestStyles.css';

const Request = () => {
  return (
    <>
      <div className='requestBG'>
        <div className='container'>
          <h2 className='requestHeader'>Оставьте заявку на тур</h2>
          <p className='requestSubtext'>чтобы мы с вами связались</p>
          <form className='form'>
            <div className='inputBox'>
              <div className='form1'>
                <input type='text' placeholder='Имя' required />
                <input type='tel' placeholder='Номер' required pattern='^\+?\d*$' />
                <input type='email' placeholder='E-mail' required />
              </div>
              <div className='form2'>
                <select defaultValue='' required>
                  <option value='' disabled>
                    Тур
                  </option>
                  <option value='tour1'>Тур 1</option>
                  <option value='tour2'>Тур 2</option>
                </select>
                <input type='date' required />
                <input type='number' placeholder='Кол-во людей' required />
              </div>
            </div>
            <button className='requestBtn' type='submit'>
              ОТПРАВИТЬ
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Request;
