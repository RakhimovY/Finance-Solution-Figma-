import React from "react";

function Footer() {
  const firstIcon = require("../../assets/footerTopIcons/0.svg").default;
  const secondIcon = require("../../assets/footerTopIcons/1.svg").default;
  const thirdIcon = require("../../assets/footerTopIcons/2.svg").default;

  const firstSocialIcon = require("../../assets/socialIcon/0.svg").default;
  const secondSocialIcon = require("../../assets/socialIcon/1.svg").default;
  const thirdSocialIcon = require("../../assets/socialIcon/2.svg").default;
  const fouthSocialIcon = require("../../assets/socialIcon/3.svg").default;
  return (
    <div className="page__footer footer">
      <div className="footer__header header-footer">
        <div className="header-footer__container _container">
          <div className="header-footer__body">
            <div className="header-footer__content">
              <h3 className="header-footer__content_title">
                Consulting Agency For Your Business
              </h3>
              <div className="header-footer__content_subTitle">
                the quick fox jumps over the lazy dog
              </div>
            </div>
            <div className="header-footer__button">
              <a className="header-footer__link" href="/">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__top top-footer">
        <div className="top-footer__container _container">
          <div className="top-footer__body">
            <div className="top-footer__column">
              <h5 className="top-footer__title">Company Info</h5>
              <div className="top-footer__links">
                <a className="top-footer__link" href="/">
                  About Us
                </a>
                <a className="top-footer__link" href="/">
                  Carrier
                </a>
                <a className="top-footer__link" href="/">
                  We are hiring
                </a>
                <a className="top-footer__link" href="/">
                  Blog
                </a>
              </div>
            </div>
            <div className="top-footer__column">
              <h5 className="top-footer__title">Legal</h5>
              <div className="top-footer__links">
                <a className="top-footer__link" href="/">
                  About Us
                </a>
                <a className="top-footer__link" href="/">
                  Carrier
                </a>
                <a className="top-footer__link" href="/">
                  We are hiring
                </a>
                <a className="top-footer__link" href="/">
                  Blog
                </a>
              </div>
            </div>
            <div className="top-footer__column">
              <h5 className="top-footer__title">Features</h5>
              <div className="top-footer__links">
                <a className="top-footer__link" href="/">
                  Business Marketing
                </a>
                <a className="top-footer__link" href="/">
                  User Analytic
                </a>
                <a className="top-footer__link" href="/">
                  Live Chat
                </a>
                <a className="top-footer__link" href="/">
                  Unlimited Support
                </a>
              </div>
            </div>
            <div className="top-footer__column">
              <h5 className="top-footer__title">Resources</h5>
              <div className="top-footer__links">
                <a className="top-footer__link" href="/">
                  IOS & Android
                </a>
                <a className="top-footer__link" href="/">
                  Watch a Demo
                </a>
                <a className="top-footer__link" href="/">
                  Customers
                </a>
                <a className="top-footer__link" href="/">
                  API
                </a>
              </div>
            </div>
            <div className="top-footer__column">
              <h5 className="top-footer__title">Get In Touch</h5>
              <div className="top-footer__links">
                <div className="top-footer__linkBody">
                  <div className="top-footer__icon">
                    <img src={firstIcon} alt="firstIcon" />
                  </div>
                  <a className="top-footer__link" href="/">
                    (480) 555-0103
                  </a>
                </div>
                <div className="top-footer__linkBody">
                  <div className="top-footer__icon">
                    <img src={secondIcon} alt="secondIcon" />
                  </div>
                  <a className="top-footer__link" href="/">
                    4517 Washington Ave. Manchester
                  </a>
                </div>
                <div className="top-footer__linkBody">
                  <div className="top-footer__icon">
                    <img src={thirdIcon} alt="thirdIcon" />
                  </div>
                  <a className="top-footer__link" href="/">
                    debra.holt@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom bottem-footer">
        <div className="bottem-footer__container _container">
          <div className="bottem-footer__body">
            <h6 className="bottem-footer__text">
              Made With Love By Figmaland All Right Reserved
            </h6>
            <div className="bottem-footer__socialBody">
              <div className="bottem-footer__social">
                <a className="bottem-footer__icon" href="/">
                  <img src={firstSocialIcon} alt="firstSocialIcon" />
                </a>
                <a className="bottem-footer__icon" href="/">
                  <img src={secondSocialIcon} alt="secondSocialIcon" />
                </a>
                <a className="bottem-footer__icon" href="/">
                  <img src={thirdSocialIcon} alt="thirdSocialIcon" />
                </a>
                <a className="bottem-footer__icon" href="/">
                  <img src={fouthSocialIcon} alt="fouthSocialIcon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
