OTL RedGIFs Audio Fix

An official, free, open-source userscript for Obey The Light that automatically unmutes embedded RedGIFs videos.

Why is this needed?

OTL uses RedGIFs' embedded video player to stream clips directly from RedGIFs. These players typically start muted, and OTL cannot directly override their internal settings due to browser security restrictions.

This userscript runs inside the embedded RedGIFs player and automatically activates its native sound button. This allows videos to start with audio enabled while keeping the speaker icon synchronized.

Installation

1. Install a userscript manager

Choose a compatible manager for your browser:

Chrome, Brave, and other Chromium browsers: Tampermonkey

Firefox (desktop and Android): Violentmonkey

Safari (macOS, iPhone, and iPad): Userscripts

2. Install OTL RedGIFs Audio Fix

Once the official installation URL is available, visit:

https://obeythelight.com/scripts/otl-redgifs-audio.user.js

Follow your userscript manager's installation prompts.

3. Enable userscripts if necessary

Chrome users may need to enable Allow User Scripts under Tampermonkey's extension details.

4. Refresh OTL

Start a session using the online Media Library. RedGIFs videos should automatically unmute as they load.

Privacy & Security

This script:

Runs only on https://www.redgifs.com/ifr/*.

Uses RedGIFs' native sound control.

Makes no network requests of its own.

Collects no personal information or analytics.

Requires no special userscript API permissions (@grant none).

You can inspect the complete source code in otl-redgifs-audio.user.js.

Compatibility

Version 1.0.0 has been manually tested with OTL in a desktop browser.

Other browsers and mobile devices have not yet been verified. Browser autoplay restrictions may prevent audio from starting automatically, even with this script installed.

RedGIFs may also change its player implementation, potentially requiring updates to the script.

License

Distributed under the MIT License.

Support

For OTL-related questions, contact support@obeythelight.com or open a GitHub issue in this repository.
