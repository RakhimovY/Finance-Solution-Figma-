import React from "react";

export default function Clients() {
  const firstIcon = require("../../assets/clientsIcon/0.svg").default;
  const secondIcon = require("../../assets/clientsIcon/1.svg").default;
  const thirdIcon = require("../../assets/clientsIcon/2.svg").default;
  const fourthIcon = require("../../assets/clientsIcon/3.svg").default;
  const fifthIcon = require("../../assets/clientsIcon/4.svg").default;
  const sixthIcon = require("../../assets/clientsIcon/5.svg").default;
  return (
    <div className="page__clients clients">
      <div className="clients__container_icon _container">
        <div className="clients__icon">
          <img src={firstIcon} alt="firstIcon" />
        </div>
        <div className="clients__icon">
          <img src={secondIcon} alt="secondIcon" />
        </div>
        <div className="clients__icon">
          <img src={thirdIcon} alt="thirdIcon" />
        </div>
        <div className="clients__icon">
          <img src={fourthIcon} alt="fourthIcon" />
        </div>
        <div className="clients__icon">
          <img src={fifthIcon} alt="fifthIcon" />
        </div>
        <div className="clients__icon">
          <img src={sixthIcon} alt="sixthIcon" />
        </div>
      </div>
      <div className="clients__container _container subscribe">
        <div className="subscribe__body">
          <div className="subscribe__body_content subscribe-content">
            <div className="subscribe-content__title">
              Subscribe For Latest Newsletter
            </div>
            <form className="subscribe-content__form form">
              <input
                type="email"
                className="form__input"
                placeholder="Your Email"
                required
              />
              <button className="form__button">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="clients__background"></div>
    </div>
  );
}
