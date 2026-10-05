# RESONANCE AI4D Lab: homepage prototype

An improved homepage for the RESONANCE AI4D Lab @CTBE, built on the free **Shuffle** template. See [ASSESSMENT.md](ASSESSMENT.md) for the website review and prioritized recommendations.

## Run
No build step and no dependencies. Open `index.html` in a browser, or serve the folder:
```
python3 -m http.server 8000   # then visit http://localhost:8000
```
Partner logos are hot-linked from the current Google Sites page, so they need an internet connection.

## What it implements
- Homepage that names the lab and gives two clear actions: Call for Applications 2025/26 and Explore our research.
- One navigation, with a keyboard-accessible mobile menu (button, `aria-expanded`, Escape to close).
- A "Find what you need" section linking to each existing lab page, and the partner logos with alt text.
- Skip link, landmarks, one `h1`, visible focus, reduced-motion support.

## Design and technical decisions
- Template, stripped Shuffle supplied the layout and header/footer styling. I removed the demo content (stock photos, services, portfolio, fake team, statistics, FAQ, contact form, address, phone, social links) and unused libraries (AOS, Swiper, Isotope, GLightbox, PureCounter, Bootstrap JS). The page is about 900 KB on disk, mostly Bootstrap CSS and icon fonts.
-Template files untouched where possible.`main.css` is the original; all changes are in `assets/css/lab.css`. `main.js` is a trimmed version of the original.
- System fonts instead of Google Fonts: no external font requests, which helps on slow connections.
- Contrast fix. The template's accent (#1bbca3) with white text fails contrast, so I use a darker teal (#0b6e75) on light sections and a lighter teal on dark ones. Contrast is not yet measured with a tool.
- Identity.The hero's two out-of-phase waves express "resonance". It animates once and is static for reduced-motion users.
- Content restraint. All text comes from the existing site (name, section names, "Call for Applications 2025/26", "Our partners") or neutral descriptions of what each section is. The carousel was removed because its photos and copy were not the lab's. A mission statement is absent because only the lab can write it.
- Links go to the live Google Sites pages, since only the homepage is in scope.

## Known limitations
- I could read only the homepage and a few subpages as text, and found no visible body content on them; Team, News & Events and Publications were not inspected. The prototype may omit existing content.
- Partner names are unknown, so the alt text is generic.
- "CTBE" and "AI4D" are left unexpanded because the site does not expand them in the text I could read.
- Bootstrap's full CSS is still loaded, which is heavier than needed; purging it would be the next step.
- Not tested in real browsers or with a screen reader; contrast and Lighthouse scores not yet measured. The template's favicon was removed because it is not the lab's.
- No news block, because no real items were available.

## Time spent
_ 8hrs

## AI and development-tool disclosure
_ I use sample websie templates related to this site and caude ai for more elaboration.
