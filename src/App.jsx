import React, { useEffect, useRef } from "react";
import { SpinePlayer } from "@esotericsoftware/spine-player";
import "./App.css";

export const App = () => {
  const spineRef = useRef(null);
  const playerRef = useRef(null);
  useEffect(() => {
    playerRef.current = new SpinePlayer("spine", {
      jsonUrl: "/spine/boom-quest-1.json",
      atlasUrl: "/spine/boom-quest-1.atlas",
      preserveDrawingBuffer: true,
      showLoading: false,
      showControls: false,
      alpha: true,
      animations: ["idle", "bomb"],
      viewport: {
        x: -1914.33,
        y: -623.16,
        width: 4107.04,
        height: 2165.26,
        padLeft: "0%",
        padRight: "0%",
        padTop: "0%",
        padBottom: "0%",
        debugRender: true,
      },
      success: function (player) {
        console.log("success");
      },
    });
  }, []);

  const click = () => {
    playerRef.current.animationState.setAnimation(0, "bomb", false);
  };

  const reset = () => {
    playerRef.current.animationState.setAnimation(0, "idle", true);
  };

  return (
    <>
      <button
        id="spine"
        ref={spineRef}
        style={{ height: "80px" }}
        onClick={click}
      ></button>
      <button onClick={reset}>reset</button>
    </>
  );
};
