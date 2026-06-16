"use client";

import { useEffect } from "react";

function animateToTarget(target: HTMLElement) {
  const stickyHeader =
    document.querySelector("header.sticky")?.getBoundingClientRect().height ?? 72;
  const targetY = Math.max(
    target.getBoundingClientRect().top + window.scrollY - stickyHeader - 16,
    0
  );
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 700;
  const startTime = performance.now();

  function easeInOutCubic(progress: number) {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  }

  function step(currentTime: number) {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function SmoothHashScroll() {
  useEffect(() => {
    function scrollToHash(hash: string) {
      const target = document.getElementById(hash.slice(1));

      if (!target) {
        return false;
      }

      animateToTarget(target);
      window.history.pushState(null, "", hash);
      return true;
    }

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented) {
        return;
      }

      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );

      if (!link || link.hash.length <= 1) {
        return;
      }

      if (scrollToHash(link.hash)) {
        event.preventDefault();
      }
    }

    document.addEventListener("click", handleClick);

    if (window.location.hash) {
      requestAnimationFrame(() => {
        scrollToHash(window.location.hash);
      });
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
