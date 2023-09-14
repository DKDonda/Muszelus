import React from "react";
import style from "./Professional.module.css";
import resume from "../docs/DevangDondaActingResume.pdf";
import headshot from "../images/headshot.png";
import Button from "../components/button/Button";
import CardLink from "../components/cards/CardLink";
import ding from '../images/ding.jpg';
import joy from '../images/joy.jpg';
import sad from '../images/sad.jpg';
import pinch from '../images/pinch.jpg';

const ProfessionalPage = () => {
  return (
    <>
      <div className={style.profession}>
        I Know what I want to persue. It's just that This page is not yet
        developed. Goals are fixed, soon will be this page. Thank you for your
        patience.
      </div>
      <div className={style.acting}>
        <div className={style["image-container"]}>
          <img src={headshot} alt="" />
        </div>
        <p>This is my Acting Resume and link to my demo reels:</p>
        <Button src={resume} text="Resume"></Button>
      </div>
      <div className={style.reels}>
        <CardLink
          src={ding}
          link="https://youtu.be/lEDY7WwFFu0"
          cardFor="Ding Reel"
          description="This Reel is about the short film Ding that I have done."
        />
        <CardLink
          src={sad}
          link="https://youtu.be/uTl2Jw6B9NE"
          cardFor="Sad Reel"
          description="A sad man who lost pet very close to him. Highly motivated and hard working guy."
        />
        <CardLink
          src={joy}
          link="https://youtu.be/slgAFLI1AnU"
          cardFor="Joy Reel"
          description="Interview of an very rich   man about the most joyeous and positive moment of his life"
        />
        <CardLink
          src={pinch}
          link="https://youtu.be/GJXxnbS7xIM"
          cardFor="Pinch Reel"
          description="This Reel is about the short film The Pinch that I have done."
        />
      </div>
    </>
  );
};

export default ProfessionalPage;
