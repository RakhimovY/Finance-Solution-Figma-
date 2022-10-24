import React from "react";

export default function Advantages() {
  const first = require("../../assets/advantagesIcon/first.svg").default;
  const second = require("../../assets/advantagesIcon/second.svg").default;
  const third = require("../../assets/advantagesIcon/third.svg").default;
  const fourth = require("../../assets/advantagesIcon/fourth.svg").default;

  return (
    <div className="page__advantages advantages ">
      <div className="advantages__container _container">
        <div className="advantages__header header-block">
          <h2 className="header-block__title">Designing Better Experience</h2>
          <div className="header-block__sub-title">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </div>
        </div>
        <div className="advantages__body">
          <div className="advantages__column">
            <div className="advantages__item">
              <div className="advantages__icon">
                <img src={first} alt="first" />
              </div>
              <div className="advantages__value">972 +</div>
              <div className="advantages__text">Consumer Products </div>
            </div>
            <div className="advantages__item">
              <div className="advantages__icon">
                <img src={second} alt="second" />
              </div>
              <div className="advantages__value">181 +</div>
              <div className="advantages__text">Financial Services </div>
            </div>
            <div className="advantages__item">
              <div className="advantages__icon">
                <img src={third} alt="third" />
              </div>
              <div className="advantages__value">98%</div>
              <div className="advantages__text">Environmental </div>
            </div>
            <div className="advantages__item">
              <div className="advantages__icon">
                <img src={fourth} alt="fourth" />
              </div>
              <div className="advantages__value">746 +</div>
              <div className="advantages__text">Business & Finance </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
