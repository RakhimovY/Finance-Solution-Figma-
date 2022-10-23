import React from "react";

const Main = () => {
  const cover = require("../../assets/image/cover.jpg");
  const firstIcon = require("../../assets/servicesIcons/1.svg").default;
  const secondIcon = require("../../assets/servicesIcons/2.svg").default;
  const thirdIcon = require("../../assets/servicesIcons/3.svg").default;
  return (
    <div className="page">
      <div className="page__main-block main-block">
        <div className="main-block__container  _container">
          <div className="main-block__body">
            <h1 className="main-block__title">
              Finance and Consultancy Solution
            </h1>
            <div className="main-block__text">
              We know how large objects will act, but things on a small scale.
            </div>
            <div className="main-block__buttons">
              <a
                href="/"
                className="main-block__button main-block__button_orange"
              >
                Get Quote Now
              </a>
              <a
                href="/"
                className="main-block__button main-block__button_border"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="main-block__image _ibg">
          <img src={cover} alt="cover" />
        </div>
      </div>
      <div className="page__services services">
        <div className="services__container _container">
          <div className="services__body">
            <div className="services__column">
              <div className="services__item item-services">
                <div className="item-services__icon">
                  <img src={firstIcon} />
                </div>
                <h3 className="item-service__title">
                  Environmental Consulting
                </h3>
                <div className="item-services__text">
                  We focus on ergonomics and meeting you where you work.
                </div>
              </div>
              <div className="services__item item-services">
                <div className="item-services__icon">
                  <img src={secondIcon} alt="secondIcon" />
                </div>
                <h3 className="item-service__title">Finance and consultancy</h3>
                <div className="item-services__text">
                  Just type what's on your mind and we'll get you there.
                </div>
              </div>
              <div className="services__item item-services item-services_lastService">
                <div className="item-services__icon ">
                  <img src={thirdIcon} alt="thirdIcon" />
                </div>
                <h3 className="item-service__title">
                  Financial Services Consulting
                </h3>
                <div className="item-services__text">
                  the quick fox jumps over the lazy dog
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
