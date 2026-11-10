
# OTL RedGIFs Audio Fix

An official, free, open-source userscript for [Obey The Light](https://obeythelight.com) that automatically unmutes embedded RedGIFs videos.

## Why is this needed?

OTL uses RedGIFs' embedded video player to stream clips directly from RedGIFs. These players typically start muted, and OTL cannot directly override their internal settings due to browser security restrictions.

This userscript runs inside the embedded RedGIFs player and automatically activates its native sound button. This enables audio while keeping the speaker icon synchronized.

## Installation

### 1. Install a userscript manager

Choose a compatible manager for your browser:

- **Chrome, Brave, and other Chromium browsers:** [Tampermonkey](https://www.tampermonkey.net/)
- **Firefox (desktop and Android):** [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
- **Safari (macOS, iPhone, and iPad):** [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887)

### 2. Install OTL RedGIFs Audio Fix

Once the official installation URL is available, visit:

https://obeythelight.com/scripts/otl-redgifs-audio.user.js

Follow your userscript manager's installation prompts.

### 3. Enable userscripts if necessary

Chrome users may need to enable **Allow User Scripts** under Tampermonkey's extension details.

### 4. Refresh OTL

Open [Obey The Light](https://obeythelight.com) and start a session using the online Media Library.

RedGIFs videos should now automatically unmute as they load, including when OTL switches between clips.

## Privacy & Security

This script:

- Runs only on `https://www.redgifs.com/ifr/*`.
- Uses RedGIFs' native sound control.
- Makes no network requests of its own.
- Collects no personal information or analytics.
- Requires no special userscript API permissions (`@grant none`).

The complete source code is available in [`otl-redgifs-audio.user.js`](./otl-redgifs-audio.user.js).

### Restricting extension permissions

Some userscript managers request broad website-access permissions.

On Chrome, you can restrict Tampermonkey's access to specific websites:

1. Open `chrome://extensions`.
2. Find Tampermonkey and select **Details**.
3. Under **Site access**, choose **On specific sites**.
4. Add `https://www.redgifs.com`.

Verify that the script continues working after restricting permissions.

## Compatibility

**Tested:**
- Desktop Chrome with OTL.
- Automatic unmuting during RedGIFs clip transitions.
- Correct synchronization of the speaker icon.

**Not yet verified:**
- Other desktop browsers.
- Android and iOS browsers.

Browser autoplay restrictions may still prevent audio from starting automatically, even with the script installed.

Because this script interacts with RedGIFs' player controls, future RedGIFs updates may affect compatibility.

## Updates

The userscript supports automatic updates through its `@updateURL` and `@downloadURL` metadata.

Updates are distributed through the official OTL installation URL.

## License

This project is distributed under the [MIT License](./LICENSE).

## Support

For OTL-related questions or technical issues:

- Email [support@obeythelight.com](mailto:support@obeythelight.com).
- [Open a GitHub issue](https://github.com/TheDaydreamingDev/otl-redgifs-audio-fix/issues).
