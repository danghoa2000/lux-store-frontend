import React from "react";
import { BASE_URL } from "../../../constants/constants";

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <section className="annocument background">
      <div className="container d-flex">
        <div className="img" style={mystyle}>
          <img
            src={BASE_URL + "./images/banner-1.png"}
            width="100%"
            height="100%"
            alt=""
          />
        </div>
        <div className="img" style={mystyle1}>
          <img
            src={BASE_URL + "./images/banner-2.png"}
            width="100%"
            height="100%"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Annocument;
