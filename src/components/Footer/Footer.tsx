import { Link } from 'react-router-dom';
import './Footer.css';

const FooterBar = () => {

  return (
      <footer className="footer">
        <div className='container'>
            <div className='footerTopBox'>
                <Link to="/" className="footerLogo">
                    <img src="/src/assets/images/Logo.svg" alt="Пора в поход" />
                </Link>
                <nav className="footNav">
                    <Link to="#" >Команда</Link>
                    <Link to="#" >Вакансии</Link>
                    <Link to="#" >О нас</Link>
                    <Link to="#" >Блог</Link>
                </nav>
            </div>
            <div className="footerBottomBox">
                <div className="contacts">
                    <p>pora_vpoxod@mail.ru</p>
                    <p>86463337777</p>
                </div>
                <div className="socialMedia">
                <Link to="#">
                    <img src="/src/assets/images/Instagram.svg" alt="Instagram" />
                </Link>
                <Link to="#">
                    <img src="/src/assets/images/Vk.svg" alt="VK" />
                </Link>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default FooterBar;