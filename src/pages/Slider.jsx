import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div>
          <img
            src="https://media.istockphoto.com/id/1479753208/photo/confident-arab-businesswoman-working-on-implementing-modern-business-strategy-in-creative.jpg?s=1024x1024&w=is&k=20&c=xNbSv_F7Rbk2Po3w0majsPNnPdR2hZZBAT9TWZ3w6z4="
            alt=""
          />{" "}
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1489403290/photo/close-up-of-a-software-developer-working-on-a-desktop-computer-with-green-screen-mock-up.jpg?s=1024x1024&w=is&k=20&c=u-2UM-NSj5OhKTpinL3vc4dipidYmZFGMW4k00YVcB4="
            alt=""
          />{" "}
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/174655938/photo/rose-background.jpg?s=1024x1024&w=is&k=20&c=pGDOZrqVKxiYK46Ts9bcGwmhXVFPpGaJ3NI4F_kUVgE="
            alt=""
          />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1481182570/photo/female-programmer-coding-on-desktop-computer-with-six-monitors-setup-in-dark-office-smart.jpg?s=1024x1024&w=is&k=20&c=SyieX0VezjA2GPsLDjZ-NDnsx2wbP84gina0jIx5vEg=" alt="" />{" "}
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
