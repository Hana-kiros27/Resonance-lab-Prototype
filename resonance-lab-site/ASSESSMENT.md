# Assessment and prioritized recommendations

Method and limit , I reviewed the homepage and the About, Research, Application 2025/26 and Contact pages as returned by a text fetch. I did not inspect Team, News & Events or Publications, and I could not see rendered layout, embedded files, or images beyond their URLs. Visual, mobile and accessibility findings below are therefore inferred from the page structure and Google Sites defaults, and must be verified with a browser, Lighthouse and a screen reader.

## What I observed
- Homepage: title, repeated navigation buttons, "Our Partners:" and three images with no alt text. No statement of what the lab does, no news, no primary action.
- About, Research, Contact: headings and navigation only; no body text was visible to my fetch. If these pages are truly empty, that is the largest problem. If the content is in embeds or images, it is invisible to search engines and assistive technology.
- Call for Applications: page titled for 2025/26. It is now October 2026, so the lab should confirm whether it is current.
- Navigation: the same menu is repeated several times on each page (desktop, mobile, "More"), and the in-page button rows duplicate it, adding to keyboard and screen-reader noise.
- Positive: a skip link, a viewport meta tag, a clear section structure, and a sensible information architecture (About, Research, Team, News, Publications, Get Involved, Contact).

## Assessment by area
| Area | Finding |
|---|---|
| Content organization | Good structure, little content. Homepage does not explain the lab. |
| Navigation | Logical, but duplicated; no primary call to action. |
| Visual design | Template look, no distinct identity (to verify visually). |
| Mobile | Google Sites is responsive by default; touch targets and image sizes unverified. |
| Accessibility | Partner images lack alt text; link-only content and image-based text are risks. |
| Clarity | A first-time visitor cannot tell what the lab researches. |
| UX | No obvious path for the main audiences: prospective students, collaborators, funders. |

## Priorities
1. Explain the lab on the homepage (a short mission statement and research focus). Needs lab input; I did not invent it.
2. Surface the main action (applications) and confirm its current status.
3. Fix accessibility basics: alt text, one navigation, headings, contrast, focus.
4. Fill or remove empty pages (About, Research, Team, Publications).
5. Show recent news/events on the homepage once real items exist.
6. Give the lab a recognisable visual identity with fast, light pages for variable connectivity.
7. Make partner names text-readable and linked.
