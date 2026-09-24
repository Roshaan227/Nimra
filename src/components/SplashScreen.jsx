import { useEffect, useState } from "react";
import { siteControl } from "../config/siteControl.js";

export function SplashScreen() {
  const { her, him } = siteControl.people;

  const [hide, setHide] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer1 = setTimeout(() => setFadeOut(true), 6500);
    const timer2 = setTimeout(() => setHide(true), 7800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (hide) {
    document.body.style.overflow = "auto";
    return null;
  }

  return (
    <div className={`cinematic-splash ${fadeOut ? "fade-out" : ""}`}>
      
      <div className="bg"></div>
      <div className="overlay"></div>

      <div className="center">

        <h1 className="main">{her.fullName}</h1>

        <div className="heart-wrapper">
          <div className="heart" />
        </div>

        <h2 className="second">{him.fullName}</h2>

        <p className="tagline">
          A story written by fate…  
          <br />
          and felt deeply by two hearts.
        </p>

        <p className="tagline sub2">
          You are not just part of my story —  
          you are the meaning of it.
        </p>

        <p className="tagline final">
          One heart. One promise. One love. ❤️
        </p>

      </div>
    </div>
  );
}