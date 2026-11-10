// ==UserScript==
// @name         OTL RedGIFs Audio Fix
// @namespace    https://obeythelight.com/
// @version      1.0.0
// @description  Automatically unmute RedGIFs embedded videos on desktop.
// @author       Obey The Light
// @match        https://www.redgifs.com/ifr/*
// @run-at       document-idle
// @grant        none
// @updateURL    https://obeythelight.com/scripts/otl-redgifs-audio.user.js
// @downloadURL  https://obeythelight.com/scripts/otl-redgifs-audio.user.js
// ==/UserScript==

(() => {
  'use strict';

  // Skip mobile browsers to prevent autoplay interruptions.
  const isMobile =
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (isMobile) return;

  const MAX_ATTEMPTS = 100;
  const CHECK_INTERVAL_MS = 200;
  let attempts = 0;

  const timer = setInterval(() => {
    attempts++;

    const video = document.querySelector('video');
    const button = document.querySelector('button.SoundButton');

    if (video && button) {
      if (button.getAttribute('aria-label') === 'Sound Off') {
        button.click();
        clearInterval(timer);
        return;
      }

      if (!video.muted) {
        clearInterval(timer);
        return;
      }
    }

    if (attempts >= MAX_ATTEMPTS) {
      clearInterval(timer);
    }
  }, CHECK_INTERVAL_MS);
})();
