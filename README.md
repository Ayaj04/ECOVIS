# ECOVIS RKCA website — React + Vite

A React recreation of the ECOVIS RKCA website concept published at
https://claude.ai/artifact/UuFVdMAMrBnQYeTPKpQnDU.

## Run it

Requires Node 18+ (tested on Node 24). An internet connection is needed for the Google Fonts (Adamina, Inter), as in the original.

```bash
npm install
npm run dev       # development server, http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build, http://localhost:4173
```

## Project structure

```
index.html                  viewport meta, title, Google Fonts link
src/
  main.jsx                  entry; loads styles/global.css
  App.jsx                   page switch, quiz state, "return to previous hash" logic
  hooks/useHashRoute.js     hash router (same rules as the original script)
  data/quiz.js              9 questions, answer weights, pillar names/links
  styles/global.css         the original stylesheet, unchanged, plus the host's base reset
  assets/images/            original logos, hero photo and team portraits
  components/
    Header.jsx              sticky/over-photo header, What We Do + Studio AI dropdowns, mobile burger menu
    Footer.jsx              footer (also the #contact target)
    QuizModal.jsx           quiz overlay: questions, progress bar, result bars
    QuizContext.js          shared "open the quiz" handler for every Take-the-quiz control
    ArrowButton.jsx         red label + arrow-square button (.btn / .light / .inv)
    PillarHero.jsx          breadcrumb + title + intro + question panel (pillar pages)
    Tracker.jsx             "Where this sits, from i to I" strip
    NextLink.jsx            dark-red "Next" band
    icons.jsx               every inline SVG, path-for-path from the original
  pages/
    HomePage.jsx            hero, stats, What We Do, ACE teaser, team, quiz band
    InstitutionalisePage.jsx  hero, six-move flowchart, staircase, next
    InvestablePage.jsx      hero, trust band, three phases, tracker, next
    ScalePage.jsx           hero, two tracks into "Go global", photo band, tracker, next
    StudioAIPage.jsx        photo hero, ACE columns, rotating ACE wheel, agentic band
    JourneyPage.jsx         intro, five-stage climb, four shifts, quote band, quiz band
docs/screenshots/           screenshots of this build (desktop 1440px, mobile 390px)
```

There are no dependencies beyond `react` and `react-dom`. All animation is plain CSS, as in the original.

## What is implemented

**Pages** (hash-routed like the original, so links such as `#scale` keep working): Home, Institutionalise, Make it Investable, Scale, Studio AI, The Journey. The footer appears on every page.

**Routing behaviour, matching the original script:**
- An unknown hash shows Home.
- `#home-pillars` shows Home scrolled to What We Do.
- `#contact` smooth-scrolls to the footer and leaves the current page in place.
- `#quiz` opens the quiz on top of the current page.
- Changing pages scrolls to the top and replays the page fade-up.

**Header:**
- It sits transparent with a white logo over the photo heroes on Home and Studio AI, and is a sticky white bar on the other pages.
- The active nav item is underlined in red.
- "What We Do" opens a dropdown (Institutionalise, Make it Investable, Scale) and "Studio AI" opens one with ACE AI. Only one is open at a time; each closes on an outside click or on navigation. (The What We Do dropdown was added after the original; the original linked straight to the home page section.)
- At 900px and below, a burger menu replaces the nav.

**Quiz:**
- Every "Take the quiz" control opens it.
- Each question gets a progress bar, and focus moves to the first answer.
- The result recommends the weakest pillar (ties go Institutionalise, then Investable, then Scale), shows bars per pillar, and offers "Read about …" and "Retake the quiz".
- Escape, the × button, or a click on the backdrop closes it. If the URL was `#quiz`, closing restores the previous hash.

**Animations:**
- Page fade-up (.45s).
- Staircase and climb bars grow in with staggered delays.
- The ACE wheel ring spins (80s).
- The dropdown and quiz panel rise in.
- Hover effects on buttons, the pillar gradient, wheel nodes and the Next arrow.
- All of these are switched off under `prefers-reduced-motion`.

## Visual verification

**Method:**
- Reference: a local copy of the published artifact's HTML. Only claude.ai's hosting runtime script is removed; that script handles the iframe connection and draws nothing.
- Implementation: the production build.
- Both were rendered in headless Chrome and compared pixel by pixel with pixelmatch.

**Full pages:** 6 pages × 3 viewports (1440×900, 820×1180, 390×844), with animations paused at their end state. All 18 matched: 0 differing pixels, identical page heights, and no horizontal overflow at any width.

**Interactions:** 23 scripted scenarios were run identically on both sites, comparing the viewport screenshot and the observable state (hash, visible page, scroll position, header class, active nav, dropdown and menu state, quiz text and progress, focused element). All 23 matched with 0 differing pixels. They covered:
- the dropdown: open, outside-click close, navigate
- the burger menu: open, navigate
- the What We Do and Contact links
- loading the page directly on `#contact` and on `#quiz`
- the quiz: questions 1 and 4, the result on desktop and mobile, retake, "Read about", Escape, backdrop click
- pillar and Next links
- an unknown hash
- hover on a pillar and on a wheel node

**Animations:** the computed animation name, duration, delay, easing and iteration count match on every animated element.

There are no console errors. The only failed request is Chrome's automatic `/favicon.ico` request; the original has no favicon either.

## Things kept as-is from the original (not fixed on purpose)

- **Mobile "How We Help" flowchart (Institutionalise):** below 860px, all six numbered circles stack at the top of the list, so only "6" is visible. The original stylesheet places them all at `position:absolute; left:0` with no `top`. This is reproduced exactly.
- **Phone number:** the footer reads "[Phone number]", as in the original.
- **Contact:** there is no contact form in the original. "Contact Us" and the "Book a …" buttons scroll to the footer's address and email. No data is sent anywhere.
- **Team:** the original shows four people, not six.
- **"Contact Us" highlight:** the nav item is never highlighted, because the original never marks it active.

## Known differences and limits

- **DOM structure:** the original keeps all six pages in the DOM and hides the inactive ones. This version renders only the active page. There is no visible difference.
- **Hosted view:** the comparison was made against the artifact's published source, not inside claude.ai's hosted frame. Anything that frame adds around the page was not compared.
- **Browsers:** only Chrome was tested. Firefox and Safari were not.
- **Original-browser behaviour reproduced in code:** in the original, `#contact`, `#home-pillars` and `#quiz` are element ids that exist when the page loads. On a direct visit to one of those URLs, the browser re-scrolls to the target after fonts load and clears focus. This build reproduces both effects in code (see `useHashRoute.js`), so on a direct visit to `/#quiz` the first answer is not auto-focused. It is when the quiz is opened from a button.
