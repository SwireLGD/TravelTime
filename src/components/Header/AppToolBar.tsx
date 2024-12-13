import { Link } from 'react-router-dom';
import './AppToolBarStyles.css';
import { useState } from 'react';

const AppToolBar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
      <header className="header">
        <Link to="/" className="logo">
          <img src="/src/assets/images/Logo.svg" alt="Пора в поход" />
        </Link>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/tours" onClick={() => setIsMenuOpen(false)}>Туры</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>О нас</Link>
          <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Отзывы</Link>
          <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
        </nav>
        <button className="burger" onClick={toggleMenu}>
          <span className="burger-line">☰</span>
        </button>
      </header>
    </div>
  );
};

export default AppToolBar;