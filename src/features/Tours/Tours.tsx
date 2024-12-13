import { useState } from "react";
import { Link } from "react-router-dom";
import './ToursStyles.css';

const data = [
  { id: 1, title: "Водные походы", image: "/src/assets/images/SeaTours.jpeg", link: "#" },
  { id: 2, title: "Пешие походы", image: "/src/assets/images/FeetTours.jpeg", link: "#" },
  { id: 3, title: "Горные походы", image: "/src/assets/images/MountainTours.jpeg", link: "#" },
];

const Tours = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <>
      <div className="tourContainer">
        <h2 className="tourTitle container">Походы</h2>
        <div className="tourCarousel">
          <button className="arrow left" onClick={handlePrev}>
            <img src="/src/assets/images/ArrowLeft.svg" alt="влево" />
          </button>
          <div className="tourCards">
            {data.map((item, index) => (
              <Link
                key={item.id}
                to={item.link}
                className={`tourCard ${index === currentIndex ? "active" : ""}`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span className="tourCardTitle">{item.title}</span>
              </Link>
            ))}
          </div>
          <button className="arrow right" onClick={handleNext}>
          <img src="/src/assets/images/ArrowRight.svg" alt="вправо" />
          </button>
        </div>
        <div className="indicators">
          {data.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tours;