import React from "react";
import "./Playground.css";
const Playground = () => {
  return (
    <div className="playgroundContainer">
      <div className="slide_pannel">
        <h4 className="headingSmall">WE ARE CREATIVE</h4>
        <h2 className="headingLarge">CREATIVE DIGITAL AGENCY</h2>
        <div className="propDesc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil non,
            quos ab earum enim, doloremque ipsum molestias nemo odit quia
            dolores. Velit eum expedita corrupti tempora mollitia illo, maiores
            dolore.
          </p>
        </div>
        <div className="Button">
          <a className="btn" href="">
            READ MORE
          </a>
          <a className="btn" href="">
            REQUEST A CONSULT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Playground;
