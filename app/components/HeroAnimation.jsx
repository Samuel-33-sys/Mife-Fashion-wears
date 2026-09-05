"use client";

import { useEffect } from "react";

export default function HeroAnimation() {
  useEffect(() => {
    const hero = document.querySelector(".hero");

    if (!hero) return;

    const petalCount = 20;

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("div");

      petal.className = "petal";

      petal.innerText = ["✦", "✧", "•", "◆"][i % 4];

      petal.style.left = Math.random() * 100 + "%";

      petal.style.animationDuration =
        6 + Math.random() * 6 + "s";

      petal.style.animationDelay =
        Math.random() * 6 + "s";

      petal.style.fontSize =
        10 + Math.random() * 12 + "px";

      hero.appendChild(petal);
    }

    return () => {
      hero.querySelectorAll(".petal").forEach((petal) => {
        petal.remove();
      });
    };
  }, []);

  return null;
}