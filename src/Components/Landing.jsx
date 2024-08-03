import React from "react";
import Header from "./Header/Header";
import ThreeScene from "./ThreeScene";
// import Clouds from "./Header/Clouds";

export default function Landing() {
  return (
    <div>
      <Header />
      <div>Landing</div>
      <div>
        <div className="tacos">
          <ThreeScene />
        </div>
      </div>
    </div>
  );
}
