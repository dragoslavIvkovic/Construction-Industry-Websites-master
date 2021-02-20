import React from "react";
import "../App.css";

import "./LayerHome.css";

function HeroSection() {
  return (
    <div className="Layer-Home_container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>HOME FX</h1>
      <p>You need new house?</p>
    </div>
  );
}

export default HeroSection;
