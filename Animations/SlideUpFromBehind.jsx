"use client"; //if app router

import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export const SlideUpFromBehind = ({ content, classes, duration, trigger }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* SECTION ONE START */
      gsap.to(".AgentHeader", {
        duration: duration ? duration : 0.88,
        y: 0,
        ease: ".165,.84,.44,1",

        scrollTrigger: {
          trigger: trigger ? trigger : ".parentDiv", // Trigger when sectionOne comes into view
          start: "top center", // Start the animation when the top of sectionOne reaches the center of the viewport
          end: "bottom center", // End the animation when the bottom of sectionOne reaches the center of the viewport
        },
      });

      return () => {
        ctx.revert();
      };
    });
  }, [duration, trigger]);

  return (
    <div className="parentDiv relative overflow-hidden w-full">
      <div className="AgentHeader translate-y-[130px] flex flex-row justify-between w-full">
        <h1 className={`text-[7rem] ${classes}`}>{content}</h1>
      </div>
    </div>
  );
};
