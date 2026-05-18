"use client";

import { useEffect, useRef } from "react";

export function BoatLottie() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.childElementCount > 0) return;

    const player = document.createElement("lottie-player");
    player.setAttribute("src", "/assets/icon/boat.json");
    player.setAttribute("background", "transparent");
    player.setAttribute("speed", "1");
    player.setAttribute("loop", "");
    player.setAttribute("autoplay", "");
    player.style.width = "84px";
    player.style.height = "68px";
    container.appendChild(player);
  }, []);

  return <div ref={ref} className="w-16 h-12 flex justify-center items-center" />;
}
