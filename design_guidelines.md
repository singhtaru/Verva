# Design Guidelines: Women's Health Educational Quiz Platform

## Design Approach

**Selected Approach:** Design System (Health & Education Focus)

This educational platform requires a clean, trustworthy, and highly readable design that prioritizes content clarity and user learning. Drawing inspiration from educational platforms like Khan Academy and medical information sites like Mayo Clinic, the design emphasizes credibility, accessibility, and distraction-free learning.

**Core Principles:**
- Credibility through restraint: Clean, professional aesthetic that builds trust
- Content-first hierarchy: Scientific explanations are the star, not decorative elements
- Progressive disclosure: Information revealed at the right moment in the learning journey
- Cognitive ease: Reduce mental load through clear patterns and generous spacing

---

## Typography System

**Font Families:**
- Primary (Body & UI): Inter or System UI Stack (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- Headings: Epilogue or Outfit (via Google Fonts CDN)
- Scientific/Accent Text: Space Grono (for quiz topic tags, labels)

**Type Scale:**
- Hero/Topic Titles: text-4xl md:text-5xl, font-bold
- Page Headings: text-3xl md:text-4xl, font-bold
- Question Text: text-xl md:text-2xl, font-semibold, leading-relaxed
- Explanation Titles: text-lg font-semibold
- Body/Explanation Text: text-base md:text-lg, leading-relaxed (optimized for reading comprehension)
- UI Elements/Labels: text-sm font-medium
- Progress Indicators: text-xs font-medium, uppercase, tracking-wide

---

## Layout System

**Spacing Primitives:**
Use Tailwind units of **2, 4, 6, 8, 12, 16** for consistent rhythm
- Tight spacing: p-2, gap-2 (between related items)
- Standard spacing: p-4, gap-4, m-4 (component internals)
- Comfortable spacing: p-6, gap-6 (between sections within cards)
- Section spacing: p-8, py-12, py-16 (between major sections)

**Container Strategy:**
- Content wrapper: max-w-4xl mx-auto (optimal for reading scientific content)
- Wide sections: max-w-6xl mx-auto (home page topic grid)
- Quiz interface: max-w-3xl mx-auto (focused learning environment)
- Consistent horizontal padding: px-4 md:px-6 lg:px-8

**Grid Systems:**
- Topic Grid (Home): grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6
- Answer Options: Single column stack with gap-4 (avoid side-by-side confusion)

---

## Component Library

### 1. Home Page Components

**Header Section:**
- Clean top bar with site title and tagline
- Site title: text-2xl font-bold
- Tagline: text-sm md:text-base, subtle emphasis on educational mission
- No traditional hero image - keep focus on topic selection

**Topic Selection Grid:**
- Cards with topic icon, title, question count, and brief description
- Card structure: Rounded corners (rounded-xl), subtle elevation, hover lift effect
- Icon placement: Top or left of card, size w-12 h-12
- Title: text-xl font-semibold
- Meta info: text-sm (e.g., "12 Questions • ~5 min")
- Brief description: text-sm leading-relaxed, max 2 lines
- Interactive state: Subtle scale transform on hover (scale-105 transition)

### 2. Quiz Page Components

**Progress Bar:**
- Fixed top position or just below header
- Shows: Question X of Y, Current score (optional: show after first answer)
- Visual progress: Linear progress bar (h-1 or h-2) with smooth fill animation
- Layout: Flex row with space-between, text-sm font-medium

**Question Card:**
- Generous padding: p-8 md:p-12
- Background: Distinct from page background, rounded-2xl
- Question text: text-xl md:text-2xl, font-semibold, mb-8
- Center-aligned for focus or left-aligned for readability (choose based on content length)

**Answer Options:**
- Large clickable buttons: Full width, p-4 md:p-5
- Clear visual states: Default, Hover, Selected, Correct (after submission), Incorrect (after submission)
- Text: text-base md:text-lg, left-aligned within button
- Spacing: gap-4 between options
- Border or background treatment to distinguish from page
- Radio button or letter indicator (A, B, C, D) on left side

**Explanation Card:**
- Appears with smooth slide-in or fade-in animation
- Generous padding: p-6 md:p-8
- Two-part structure:
  - Feedback header: "Correct!" or "Incorrect" with icon (✓ or ✗ from Heroicons)
  - Science section: Explanation title (text-lg font-semibold) + detailed text (text-base leading-relaxed)
- Clear visual separation from question card
- Rounded corners: rounded-xl

**Action Buttons:**
- Primary: "Submit Answer" and "Next Question"
- Full width on mobile, max-w-xs mx-auto on desktop
- Generous padding: px-8 py-3 md:py-4
- Text: text-base font-semibold
- Rounded: rounded-lg

### 3. Results/Score Page Components

**Score Display:**
- Large, celebratory presentation of score
- Score number: text-5xl md:text-6xl font-bold
- Context text: text-xl (e.g., "You got 7 out of 10 correct!")
- Encouraging message based on performance

**Facts Learned Summary:**
- List format with clear visual hierarchy
- Each fact: Card-style with icon, title, and explanation excerpt
- Compact version of explanation cards from quiz
- Scrollable section if many facts
- Layout: Single column, gap-4 between fact cards

**Action Buttons:**
- "Try Another Quiz" - Returns to home
- "Retake This Quiz" - Restarts current topic
- Side-by-side on desktop: grid-cols-1 md:grid-cols-2, gap-4

---

## Navigation & Global Elements

**Header (All Pages):**
- Sticky or static top bar
- Logo/Site title on left, optional navigation on right
- Minimal distraction: No heavy navigation menus
- Back button/Home link when on quiz or results pages
- Height: h-16 or h-20, px-4 md:px-8

**Footer (Minimal):**
- Present only on Home and Results pages, not during quiz
- Compact: py-8, text-sm
- Content: Brief disclaimer about educational nature, links to resources
- Layout: Centered or split (logo left, links right)

---

## Interaction Patterns

**Animations (Minimal & Purposeful):**
- Page transitions: Simple fade-in (duration-300)
- Card interactions: Subtle hover lift (scale-105, transition-transform)
- Explanation reveal: Slide-up or fade-in (duration-500)
- Progress bar fill: Smooth width transition (transition-all duration-700)
- Answer selection: Immediate visual feedback (border highlight)
- NO: Excessive loading spinners, bouncing elements, or distracting effects

**Loading States:**
- Skeleton loaders for topic cards if data is async
- Simple loading indicator if navigating between questions
- Keep minimal - quiz should feel instant

---

## Accessibility Implementation

**Keyboard Navigation:**
- Tab order: Progress → Question → Answer Options → Submit button
- Enter key submits selected answer
- Arrow keys navigate between answer options
- Focus indicators: Clear 2px outline with offset

**Screen Reader Support:**
- Semantic HTML: <main>, <section>, <article> for content structure
- ARIA labels: "Question 3 of 10", "Correct answer", "Incorrect answer"
- Live regions: Announce score updates, explanation reveals
- Alt text: Descriptive text for topic icons and any imagery

**Visual Accessibility:**
- Text contrast: Ensure WCAG AA compliance minimum
- Focus indicators: Always visible, never removed
- Touch targets: Minimum 44x44px for mobile
- Reading width: Max-w-prose or max-w-3xl for body text

---

## Icons

**Library:** Heroicons (via CDN - Outline for general UI, Solid for emphasis)

**Usage:**
- Topic cards: Custom health-related icons or symbolic representations (w-12 h-12)
- Feedback indicators: Check circle (correct), X circle (incorrect)
- Navigation: Arrow left (back), Home icon
- Progress: Chart bar, Academic cap (optional decorative)
- Action buttons: Arrow right (next question)

---

## Images

**Image Strategy:** Minimal, purposeful use of imagery

**Home Page:**
- Optional: Small abstract health/science illustrations as topic card backgrounds or accents
- NO large hero image - focus remains on topic selection

**Quiz Pages:**
- NO images during quiz - maintain focus on content
- Exception: If a question specifically requires a diagram (e.g., "Which part of this diagram shows..."), include educational diagrams

**Results Page:**
- Optional: Small celebratory illustration or abstract pattern
- Keep subtle and non-distracting from facts learned

**If Images Are Used:**
- Diagrams: Clean, minimal line art style
- Abstract: Subtle gradient blobs or geometric patterns
- Placement: Background decoration, not foreground content
- Always with appropriate alt text for accessibility

---

## Page-Specific Layouts

### Home Page
- Header: Site title, tagline, minimal navigation (h-16)
- Intro section: py-12, Brief mission statement, centered, max-w-2xl
- Topic grid: py-8, grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Footer: py-8, minimal

### Quiz Page
- Header: With back button, progress indicator
- Main content: Centered, max-w-3xl, py-8 md:py-12
- Question card → Answer options → Submit button
- Explanation card (when shown): Below submit button or replaces it
- NO footer during quiz (minimize distraction)

### Results Page
- Header: With home link
- Score display: Centered, py-12
- Facts summary: max-w-4xl mx-auto, py-8
- Action buttons: Centered, py-8
- Footer: py-8

---

**Critical Success Factors:**
- Readability: Scientific explanations must be effortless to read (generous line-height, optimal width)
- Trustworthiness: Clean, professional aesthetic with no gimmicks
- Focus: During quiz, eliminate all distractions - user and content only
- Encouragement: Positive, educational tone throughout UI copy and feedback
- Performance: Fast loading, instant interactions, smooth transitions