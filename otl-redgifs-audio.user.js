// ==UserScript==
// @name         OTL RedGIFs Audio Fix
// @namespace    https://obeythelight.com/
// @version      1.0.2
// @description  Automatically unmute RedGIFs videos on supported browsers.
// @author       Obey The Light
// @match        https://www.redgifs.com/ifr/*
// @run-at       document-idle
// @grant        none
// @updateURL    https://obeythelight.com/scripts/otl-redgifs-audio.user.js
// @downloadURL  https://obeythelight.com/scripts/otl-redgifs-audio.user.js
// ==/UserScript==

(() => {
  'use strict';

  // Never attempt synthetic unmuting on iPhone or iPad.
  const isIOS =
    /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (isIOS) return;

  const MAX_ATTEMPTS = 100;
  const CHECK_INTERVAL_MS = 200;
  let attempts = 0;
  let previousVideo = null;
  let previousTime = null;

  const timer = setInterval(() => {
    attempts += 1;
    if (attempts >= MAX_ATTEMPTS) clearInterval(timer);

    const video = document.querySelector('video');
    const button = document.querySelector('button.SoundButton');
    if (!video || !button) return;

    if (!video.muted) {
      clearInterval(timer);
      return;
    }
    if (button.getAttribute('aria-label') !== 'Sound Off') return;

    // Do not unmute a newly loaded player before playback has progressed.
    if (video !== previousVideo) {
      previousVideo = video;
      previousTime = video.currentTime;
      return;
    }
    const now = video.currentTime;
    const progressing =
      !video.paused &&
      video.readyState >= 2 &&
      Number.isFinite(now) &&
      Number.isFinite(previousTime) &&
      now > previousTime + 0.015;
    previousTime = now;
    if (!progressing) return;

    clearInterval(timer);

    let monitoring = true;
    let recovered = false;

    const recover = () => {
      if (!monitoring || recovered || !video.isConnected || !video.paused) return;
      recovered = true;

      // Restore RedGIFs' native mute state so the speaker icon stays correct.
      if (button.getAttribute('aria-label') === 'Sound On') button.click();
      if (!video.muted) video.muted = true;

      // Muted playback should be permitted even when audible autoplay is not.
      try {
        const resume = video.play();
        if (resume && typeof resume.catch === 'function') {
          resume.catch(error => console.warn('[OTL audio] Muted resume failed:', error));
        }
      } catch (error) {
        console.warn('[OTL audio] Muted resume failed:', error);
      }
      console.info('[OTL audio] Recovered a paused video by returning to muted playback.');
    };
    const onPause = () => {
      if (monitoring) setTimeout(recover, 0);
    };
    video.addEventListener('pause', onPause);

    // Use RedGIFs' own button to keep its icon synchronized.
    button.click();

    // Some Chromium pauses are observable after the click rather than inside it.
    for (const delay of [100, 350, 850, 1800]) setTimeout(recover, delay);
    setTimeout(() => {
      monitoring = false;
      video.removeEventListener('pause', onPause);
    }, 2500);
  }, CHECK_INTERVAL_MS);
})();
