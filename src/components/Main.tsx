import React from "react";
import backgroundIMG from "https://github.com/RakhimovY/Figma/blob/master/src/img/background.jpg";

const Main = () => {
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
              <a href="/" className="main-block__button">
                Get Quote Now
              </a>
              <a href="/" className="main-block__button_border">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-block__img _ibg">
        <img src={backgroundIMG} alt="" />
      </div>
    </div>
  );
};

export default Main;
