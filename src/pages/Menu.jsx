import React from "react";
import "./Menu.css";
import SUSHI9 from "../assets/sushi-9.png";
import SUSHI8 from "../assets/sushi-8.png";
import SUSHI7 from "../assets/sushi-7.png";
import SUSHI6 from "../assets/sushi-6.png";
import SUSHI12 from "../assets/sushi-12.png";
import SUSHI11 from "../assets/sushi-11.png";
import SUSHI10 from "../assets/sushi-10.png";
import STAR from "../assets/star.svg";
import ARROWRIGHT from "../assets/arrow-right.svg";

const Menu = () => {
  return (
    <div className="popular-foods" id="menu">
      <h2 className="popular-foods__title" data-aos="flip-up">
        Popular Food / 人気
      </h2>

      <div
        className="popular-foods__filters sushi__hide-scrollbar"
        data-aos="fade-up"
      >
        <button className="popular-foods__filter-btn active">All</button>
        <button className="popular-foods__filter-btn">
          <img src={SUSHI9} alt="sushi 9" />
          Sushi
        </button>
        <button className="popular-foods__filter-btn">
          <img src={SUSHI8} alt="sushi 8" />
          Ramen
        </button>
        <button className="popular-foods__filter-btn">
          <img src={SUSHI7} alt="sushi 7" />
          Udon
        </button>
        <button className="popular-foods__filter-btn">
          <img src={SUSHI6} alt="sushi 6" />
          Danggo
        </button>
        <button className="popular-foods__filter-btn">All</button>
      </div>

      <div className="popular-foods__catalogue" data-aos="fade-up">
        <article className="popular-foods__card">
          <img
            className="popular-foods__card-image"
            src={SUSHI12}
            alt="sushi-12"
          />
          <h4 className="popular-foods__card-title">Chezu Sushi</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              <img src={STAR} alt="star" />
              <p>4.9</p>
            </div>

            <p className="popular-foods__card-price">$21.00</p>
          </div>
        </article>

        <article className="popular-foods__card active-card">
          <img
            className="popular-foods__card-image"
            src={SUSHI11}
            alt="sushi-11"
          />
          <h4 className="popular-foods__card-title">Original Sushi</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              <img src={STAR} alt="star" />
              <p>5.0</p>
            </div>

            <p className="popular-foods__card-price">$19.00</p>
          </div>
        </article>

        <article className="popular-foods__card">
          <img
            className="popular-foods__card-image"
            src={SUSHI10}
            alt="sushi-10"
          />
          <h4 className="popular-foods__card-title">Ramen Legendo</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
              <img src={STAR} alt="star" />
              <p>4.7</p>
            </div>

            <p className="popular-foods__card-price">$13.00</p>
          </div>
        </article>
      </div>

      <button className="popular-foods__button">
        Explore Food
        <img src={ARROWRIGHT} alt="arrow-right" />
      </button>
    </div>
  );
};

export default Menu;
