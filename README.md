# AI Ready School — Homepage Redesign

> **Design Assessment Submission** — UI/UX Designer + Frontend Developer role

**Live Demo:** [Vercel link — add after deployment]  
**Stack:** Next.js 14 (App Router) · JavaScript · Tailwind CSS · Lucide React

---

## 🔍 UX Audit — Top 5 Problems Identified

### 1. Navigation Causes Decision Paralysis
**20+ links** across 4 dropdown menus — Products, Programs, Philosophy, and Resources — overwhelm a first-time visitor. More critically, "Philosophy" (with items like *"It's Time to Reset Education"*) is misplaced in primary navigation; these are editorial/content pages, not navigation destinations. A school principal lands on the site and faces an immediate cognitive tax before anything useful has been communicated.

**Fix:** Reduced to 4 primary nav items (Products, Programs, Resources, About). Products dropdown redesigned as a **scannable card grid** — each item shows product name, role badge, and one-line description so users can immediately understand the portfolio without clicking.

### 2. Hero Communicates Features, Not Outcomes
The headline *"A Complete AI Ecosystem For K-12 Schools"* describes a product *category*, not a *result*. The primary visitor — a school principal — doesn't care about ecosystems. They care about: "Will this improve student outcomes? Will this reduce my teachers' workload?" The page doesn't answer these questions above the fold.

**Fix:** New headline *"Every Student. Every Teacher. Every School — AI-Ready."* is specific and aspirational. Sub-headline leads with concrete outcomes. Animated stats (schools onboarded, students impacted, satisfaction rate) appear immediately below, providing evidence before explanation.

### 3. Five Products Presented with Identical Layouts (Zero Scannability)
Each of the five products occupies its own full-width scroll section using the same text+visual template. There is no way for a visitor to quickly understand the difference between Cypher (for students) and Morpheus (for teachers) without reading 200+ words per product. The identical layout causes **scroll blindness** — by product 3, visitors disengage.

**Fix:** All 5 products reorganised into a **tabbed interface** with role-based badges (FOR STUDENTS / FOR TEACHERS / INFRASTRUCTURE). The entire product portfolio is scannable in under 10 seconds without scrolling. Detail reveals on tab click.

### 4. Social Proof Buried Below the Fold — Multiple Scrolls Down
Testimonials from school leaders appear after 5 full product sections — by which point most skeptical visitors have already formed their impression (or left). For a B2B edtech product, credibility signals need to appear **early**, before explanation.

**Fix:** School trust bar + testimonials moved to the **second section** — immediately after the hero. Testimonials now include **quantified outcomes** ("60% reduction in teacher admin load", "11-day onboarding") rather than vague praise.

### 5. Dual Branding Erodes Trust
The footer prominently shows *"Powered by learnia.ai"* — a completely different brand. For a school administrator who arrived searching for or referencing "AI Ready School", this inconsistency raises a legitimate question: "Which company am I dealing with? Are they stable?" In B2B edtech, brand trust is directly tied to procurement confidence.

**Fix:** Footer uses consistent "AI Ready School" branding only. Added a "Responsible AI Charter" link to signal values-alignment — a key concern for school leadership.

---

## 🎯 Prioritization Decisions

**Built first (highest impact):**
1. **Navigation** — First thing every visitor sees. Most complex UX problem. Fixed.
2. **Hero** — Determines whether someone scrolls at all. Fixed.
3. **Products section** — Main content of the page, redesigned for scannability.
4. **Social proof** — Repositioned and quantified.

**Would build next with more time:**
- Individual product landing pages (Cypher, Morpheus, etc.)
- FAQ accordion section (currently removed — would reintroduce with progressive disclosure UI)
- Blog/resources section
- Interactive product demo or walkthrough video
- Real school logos in the trust bar (partnership with BD team)
- User testing with 2-3 actual school principals

---

## 🏗️ Component Structure

```
components/
├── Navbar.js       — Simplified nav with mega-dropdown product cards
├── Hero.js         — Outcome-led hero with animated counting stats
├── SocialProof.js  — Trust bar + testimonial carousel (moved early!)
├── Products.js     — Tabbed product overview (replaces 5 scroll sections)
├── WhyUs.js        — 4-pillar value prop for skeptical principals
├── FinalCTA.js     — Clean CTA with reassurance signals
└── Footer.js       — Consistent branding, newsletter, legal
```

---

## 🚀 Running Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Design Decisions

- **Dark theme retained** — The original dark aesthetic is strong for an AI/tech product. Kept but elevated with proper spacing and a curated palette (`#050810` base, `#e8357a` primary accent).
- **Sora + Inter** — Sora for headings (geometric, premium feel for edtech), Inter for body (high legibility at small sizes). Both loaded from Google Fonts.
- **Glassmorphism cards** — Consistent `backdrop-filter: blur()` system creates depth without cluttering the dark backgrounds.
- **Glow orb backgrounds** — Replaces the current abstract tech graphics, which feel generic. Radial gradients with blur are more refined and load faster.
- **Mobile-first responsive** — Navbar collapses to hamburger at 900px. Stats grid goes 2-column on mobile. Footer grid stacks on small screens.
