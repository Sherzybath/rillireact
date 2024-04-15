import React from "react";
import Video from "../../Assets/R.mp4";

const Desc = () => {
  return (
    <div id="desc">
      <div className="liner">
        <div className="placeR">
          <video className="sp" src={Video} autoPlay muted loop />
        </div>

        <div className="columner">
          <h1>What are we?</h1>
          <h2>
            Rilli: An bespoke academic timetable system for universities.
            Customizable, supported for seamless scheduling excellence, and
            safeguarding academic integrity. Tailored solutions for educational
            institutions' unique needs.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Desc;
