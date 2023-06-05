import React from "react";
import "./Food.css";
import CHECK from "../assets/check.svg";
import SUSHI5 from "../assets/sushi-5.png";
import ARROWVERTICAL from "../assets/arrow-vertical.svg";
import ARROWHORIZONTAL from "../assets/arrow-horizontal.svg";
import SUSHI4 from "../assets/sushi-4.png";

const Food = () => {
  return (
    <div>
      <section className="trending" id="food">
        <section className="trending-sushi">
          <div className="trending__content" data-aos="fade-right">
            <p className="sushi__subtitle">What’s Trending / トレンド</p>

            <h3 className="sushi__title">Japanese Sushi</h3>
            <p className="sushi__description">
              Feel the taste of the most delicious Sushi here.
            </p>

            <ul className="trending__list flex-between">
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Make Sushi</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Oshizushi</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Uramaki Sushi</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Nigiri Sushi</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Temaki Sushi</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Inari Sushi</p>
              </li>
            </ul>
          </div>

          <div className="trending__image flex-center">
            <img src={SUSHI5} alt="sushi-5" data-aos="fade-left" />

            <div className="trending__arrow trending__arrow-left">
              <img src={ARROWVERTICAL} alt="arrow vertical" />
            </div>

            <div className="trending__arrow trending__arrow-bottom">
              <img src={ARROWHORIZONTAL} alt="arrow horizontal" />
            </div>
          </div>
        </section>

        <div className="trending__discover" data-aos="zoom-in">
          <p>Discover</p>
        </div>

        <section className="trending-drinks">
          <div className="trending__image flex-center">
            <img src={SUSHI4} alt="sushi-4" data-aos="fade-right" />

            <div className="trending__arrow trending__arrow-top">
              <img src={ARROWHORIZONTAL} alt="arrow horizontal" />
            </div>

            <div className="trending__arrow trending__arrow-right">
              <img src={ARROWVERTICAL} alt="arrow vertical" />
            </div>
          </div>

          <div className="trending__content" data-aos="fade-left">
            <p className="sushi__subtitle">What’s Trending / トレンド</p>

            <h3 className="sushi__title">Japanese Drinks</h3>
            <p className="sushi__description">
              Feel the taste of the most delicious Japense drinks here.
            </p>

            <ul className="trending__list flex-between">
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Oruncha</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Sakura Tea</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Aojiru</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Ofukucha</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Kombu-cha</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={CHECK} alt="check" />
                </div>
                <p>Mugicha</p>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Food;
