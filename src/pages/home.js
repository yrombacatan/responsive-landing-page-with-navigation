import React from "react";

import imageHeroMobile from "../images/image-hero-mobile.png";
import imageHeroDesktop from "../images/image-hero-desktop.png";

import audioPile from "../images/client-audiophile.svg";
import databiz from "../images/client-databiz.svg";
import maker from "../images/client-maker.svg";
import meet from "../images/client-meet.svg";

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="md:w-3/4 md:flex md:flex-row-reverse md:gap-10 lg:gap-20">
        <section className="mt-5 md:flex-auto md:mt-0">
          <img alt="Hero" src={imageHeroMobile} className="md:hidden" />
          <div
            className="w-full bg-no-repeat bg-contain bg-center hidden md:block"
            style={{
              height: "600px",
              backgroundImage: `url(${imageHeroDesktop})`,
            }}
          ></div>
        </section>
        <section className="flex flex-col gap-5 mt-10 p-5 text-center md:text-left lg:gap-10 md:mt-20 md:flex-1 lg:max-w-xl">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
            Make <br /> remote work
          </h1>
          <p className="text-mediumgray">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="w-36 px-4 py-3 bg-almostblack text-almostwhite rounded-2xl mx-auto md:ml-0 border border-almostblack transition-all hover:bg-almostwhite hover:border hover:border-almostblack hover:text-black">
            Learn more
          </button>
          <div>
            <ul className="flex justify-between items-center lg:w-3/4">
              <li>
                <div
                  className="w-20 h-20 bg-no-repeat bg-center  bg-contain"
                  style={{
                    backgroundImage: `url(${databiz})`,
                  }}
                ></div>
              </li>
              <li>
                <div
                  className="w-14 h-14 bg-no-repeat bg-center  bg-contain"
                  style={{
                    backgroundImage: `url(${audioPile})`,
                  }}
                ></div>
              </li>
              <li>
                <div
                  className="w-16 h-16 bg-no-repeat bg-center  bg-contain"
                  style={{
                    backgroundImage: `url(${meet})`,
                  }}
                ></div>
              </li>
              <li>
                <div
                  className="w-16 h-16 bg-no-repeat bg-center  bg-contain"
                  style={{
                    backgroundImage: `url(${maker})`,
                  }}
                ></div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
