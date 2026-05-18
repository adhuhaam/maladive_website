"use client";

import { useEffect, useRef } from "react";

export function BoatLottie() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.childElementCount > 0) return;

    const init = () => {
      const player = document.createElement("lottie-player");
      player.setAttribute("src", "/assets/icon/boat.json");
      player.setAttribute("background", "transparent");
      player.setAttribute("speed", "1");
      player.setAttribute("loop", "");
      player.setAttribute("autoplay", "");
      player.style.width = "84px";
      player.style.height = "68px";
      container.appendChild(player);
    };

    if (customElements.get("lottie-player")) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/lottie-player.js";
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);
  }, []);

  return <div ref={ref} className="w-16 h-12 flex justify-center items-center" />;
}
