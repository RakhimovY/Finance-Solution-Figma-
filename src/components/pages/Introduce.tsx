import React from "react";

export default function Introduce() {
  const firstIcon = require("../../assets/introduceIcon/0.svg").default;
  const secondIcon = require("../../assets/introduceIcon/1.svg").default;
  return (
    <div className="page__introduce introduce">
      <div className="introduce__container _container">
        <div className="introduce__header header-block">
          <h2 className="header-block__title">Who We Are</h2>
          <div className="header-block__sub-title">
            Problems trying to resolve the conflict between the two major realms{" "}
            <br />
            of Classical physics: Newtonian mechanics
          </div>
        </div>
        <div className="introduce__body introduce-body">
          <div className="introduce-body__video video">
            <iframe
              className="video__preViwe"
              src="https://www.youtube.com/embed/ombpvrlglfU?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="introduce-body__content introduce-body-content">
            <div className="introduce-body-content__info content-info">
              <div className="content-info__title">
                Most trusted in our field
              </div>
              <div className="content-info__text">
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule.
              </div>
            </div>
            <div className="introduce-body-content__list content-list">
              <div className="content-list__body">
                <div className="content-list__icon">
                  <img src={firstIcon} alt="firstIcon" />
                </div>
                <div className="content-list__info list-info">
                  <div className="list-info__title ">
                    the quick fox jumps over the lazy <br /> dog
                  </div>
                  <div className="list-info__subTitle ">
                    Things on a very small scale ...
                  </div>
                </div>
              </div>
            </div>
            <div className="introduce-body-content__list content-list">
              <div className="content-list__body">
                <div className="content-list__icon">
                  <img src={secondIcon} alt="firstIcon" />
                </div>
                <div className="content-list__info list-info">
                  <div className="list-info__title ">
                    the quick fox jumps over the lazy <br /> dog
                  </div>
                  <div className="list-info__subTitle ">
                    Things on a very small scale ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
