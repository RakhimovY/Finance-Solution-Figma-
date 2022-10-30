import React from "react";

export default function GetInTouch() {
  const first = require("../../assets/getInyouchIcons/0.svg").default;
  const second = require("../../assets/getInyouchIcons/1.svg").default;
  const third = require("../../assets/getInyouchIcons/2.svg").default;

  return (
    <div className="page__getInTouch getInTouch">
      <div className="getInTouch__container _container">
        <div className="getInTouch__header header-block">
          <h2 className="header-block__title">Get In Touch</h2>
          <div className="header-block__sub-title">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </div>
        </div>
        <div className="getInTouch__body">
          <div className="getInTouch__column">
            <div className="getInTouch__item getInTouch-item">
              <div className="getInTouch-item__icon">
                <img src={first} alt="first" />
              </div>
              <div className="getInTouch-item__emails">
                <a
                  className="getInTouch-item__email"
                  href="mailto:georgia.young@example.com"
                >
                  georgia.young@example.com
                </a>

                <a
                  className="getInTouch-item__email"
                  href="mailto:georgia.young@ple.com"
                >
                  georgia.young@ple.com
                </a>
              </div>
              <h5 className="getInTouch-item__title">Get Support</h5>
              <a className="getInTouch-item__button" href="">
                Submit Request
              </a>
            </div>
            <div className="getInTouch__item getInTouch-item getInTouch-item_active">
              <div className="getInTouch-item__icon">
                <img src={second} alt="second" />
              </div>
              <div className="getInTouch-item__emails">
                <a
                  className="getInTouch-item__email"
                  href="mailto:georgia.young@example.com"
                >
                  georgia.young@example.com
                </a>
                <a
                  className="getInTouch-item__email"
                  href="mailto:georgia.young@ple.com"
                >
                  georgia.young@ple.com
                </a>
              </div>
              <h5 className="getInTouch-item__title">Get Support</h5>
              <a className="getInTouch-item__button" href="">
                Submit Request
              </a>
            </div>
            <div className="getInTouch__item getInTouch-item">
              <div className="getInTouch-item__icon">
                <img src={third} alt="third" />
              </div>
              <div className="getInTouch-item__emails">
                <a
                  className="getInTouch-item__email"
                  href="mailto:georgia.young@example.com"
                >
                  georgia.young@example.com
                </a>
                <a
                  className="getInTouch-item__email"
                  href="mailto:georgia.young@ple.com"
                >
                  georgia.young@ple.com
                </a>
              </div>
              <h5 className="getInTouch-item__title">Get Support</h5>
              <a className="getInTouch-item__button" href="">
                Submit Request
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
