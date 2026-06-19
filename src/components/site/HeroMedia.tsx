"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Hero background: a poster still (LCP image) with a screen-blended video
 *  layered on top. The video is paused and hidden under `prefers-reduced-
 *  motion`, and autoplay rejections are swallowed gracefully. */
export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      video.removeAttribute("autoplay");
      video.pause();
      video.style.display = "none";
      return;
    }

    const playback = video.play();
    if (playback && typeof playback.catch === "function") {
      playback.catch(() => {
        /* Autoplay can be blocked by the browser — the poster remains. */
      });
    }
  }, []);

  return (
    <div className="hero-bg">
      <Image
        className="hero-photo"
        src="/media/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <video
        ref={videoRef}
        className="hero-video"
        src="/media/hero.mp4"
        poster="/media/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero-scrim" />
    </div>
  );
}
