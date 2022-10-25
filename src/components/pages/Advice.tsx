import React from "react";

export default function Advice() {
  const first = require("../../assets/image/01.jpg");
  const second = require("../../assets/image/02.jpg");
  const third = require("../../assets/image/03.jpg");
  const fourth = require("../../assets/image/04.jpg");

  return (
    <div className="page__advice advice">
      <div className="advice__container _container">
        <div className="advice__header header-block ">
          <h2 className="header-block__title">Practice Advice</h2>
          <div className="header-block__sub-title">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </div>
        </div>
        <div className="advice__body">
          <div className="advice__column">
            <div className="advice__item item-advice">
              <div className="item-advice__header">
                <div className="item-advice__header_title">
                  A single source of truth
                </div>
                <div className="item-advice__header_text">
                  Newton thought that light was made up of particles, but then
                  it was discovered{" "}
                </div>
              </div>
              <div className="item-advice__img _ibg">
                <img src={first} alt=" A single source of truth" />
              </div>
            </div>
          </div>
          <div className="advice__column">
            <div className="advice__item item-advice">
              <div className="item-advice__header">
                <div className="item-advice__header_title">
                  Fastest way to organize
                </div>
                <div className="item-advice__header_text">
                  “Quantum mechanics” is the description of the behaviour of
                  matter
                </div>
              </div>
              <div className="item-advice__img _ibg">
                <img src={second} alt="Fastest way to organize" />
              </div>
            </div>
          </div>
          <div className="advice__column">
            <div className="advice__item item-advice">
              <div className="item-advice__header">
                <div className="item-advice__header_title">
                  Fastest way to take action
                </div>
                <div className="item-advice__header_text">
                  They describe a universe consisting of bodies moving
                </div>
              </div>
              <div className="item-advice__img _ibg">
                <img src={third} alt="Fastest way to take action" />
              </div>
            </div>
          </div>
          <div className="advice__column">
            <div className="advice__item item-advice">
              <div className="item-advice__header">
                <div className="item-advice__header_title">
                  Work better together
                </div>
                <div className="item-advice__header_text">
                  They finally obtained a consistent description of the
                  behaviour
                </div>
              </div>
              <div className="item-advice__img _ibg">
                <img src={fourth} alt="Work better together" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
