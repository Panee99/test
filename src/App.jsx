import React, { useEffect, useRef } from "react";
import { SpinePlayer } from "@esotericsoftware/spine-player";

export const App = () => {
  const spineRef = useRef(null);

  useEffect(() => {
    const spinePlayer = new SpinePlayer("spine", {
      jsonUrl: "/spine/boom-quest-1.json",
      atlasUrl: "/spine/boom-quest-1.atlas",
      preserveDrawingBuffer: true,
      showControls: false,
      backgroundColor: "#00000000",
      alpha: true,
      animations: ["idle", "bomb"],
      success: function () {
        console.log("hello");
      },
    });

    spineRef.current?.appendChild(spinePlayer.canvas);
  }, []);
  return (
    <div
      id="spine"
      ref={spineRef}
      style={{ width: "800px", height: "600px" }}
    ></div>
  );
};
