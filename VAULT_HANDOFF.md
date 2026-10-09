# Vault Design System

**Portfolio brief and developer handoff · Version 1.0 · WCAG 2.1 AA target**

Vault is a fictional fintech product and design system. The token values below are a proposed starting point, not a substitute for contrast testing in final component contexts or usability research with customers.

## 1. Foundations and rationale

### What the system is for

Design tokens name decisions that should stay consistent: the semantic role of a color, a spacing step, a type style, a radius, or an elevation. In a money product, that consistency is functional. It makes balances scannable, separates a confirmed transfer from a pending one, and keeps a destructive action recognizable wherever it appears. A token is not merely a hex value; it is a contract between design and code.

Core components are the reusable controls and data containers built from those contracts: buttons, inputs, cards, status badges, dialogs, navigation, rows, and segmented choices. They provide predictable anatomy, states, accessible names, and responsive behavior. Teams should compose product screens from library components instead of drawing local lookalikes.

AI patterns are reusable interaction structures around model behavior, not decorative “AI styling.” They tell a person when processing is happening, make suggestions optional, qualify uncertainty, and explain the evidence behind an insight. In fintech, these patterns must protect agency: an AI suggestion must not silently initiate a payment, alter an account, or present a forecast as guaranteed.

### Figma project organization: four pages

Create a single Figma file named **Vault — Fintech Design System**. Use the four pages below in this order. Put page-level cover frames and concise instructions at the top-left; keep component assets in named sections, not scattered canvases.

1. **Foundations**: add a cover and principles; create color primitives and semantic variables; add `Light` and `Dark` variable modes; create type, spacing, radius, elevation, and icon reference sections; publish variable descriptions and contrast notes. Use component properties that reference semantic aliases, not raw hex values.
2. **Components**: group the eight core components by action, form, container, status, overlay, navigation, data display, and selection. Build each with Auto Layout; expose size, intent, state, leading/trailing icon, and content as component properties where appropriate. Include anatomy, minimum target, keyboard/focus, and content-length examples beside the variants.
3. **AI Patterns**: document loading, suggestion, confidence, and explanation patterns as compositions of library components. Include both variable modes, empty/slow/error states, evidence and disclosure behavior, and at least one narrow-mobile example. Label model-dependent or unvalidated behavior explicitly.
4. **Documentation**: place the product brief, audience, usage rules, accessibility checklist, changelog, ownership, two fully composed mobile examples, PDF export cover, and handoff links. Keep annotated references adjacent to the screen they describe.

Suggested section naming: `00 Cover`, `01 Principles`, `02 Color`, `03 Type`, `04 Spacing`, `05 Components`, `06 AI Patterns`, `07 Examples`, `08 QA`. Use Figma descriptions to state intent, not repeat the layer name.

## 2. Research and accessibility brief

### Five recurring fintech accessibility failure patterns

These are common audit risks, not a prevalence ranking or a claim that every app has each defect. Test both app UI and embedded bank, identity, and payment flows.

| Failure pattern | Relevant WCAG 2.1 AA | Prevention and verification |
|---|---|---|
| Low-contrast text, disabled controls, chart labels, or status colors | 1.4.3 Contrast (Minimum), 1.4.11 Non-text Contrast | Check every foreground/background pair in both themes: 4.5:1 normal text, 3:1 large text, and 3:1 for meaningful controls/graphics. Do not assume a brand color passes because it looks legible. |
| Color-only success, risk, transaction, or chart encoding | 1.4.1 Use of Color | Pair color with a visible label, icon, shape, or pattern; announce the same state in accessible text. Test grayscale and color-vision simulations. |
| Small or crowded touch targets for amounts, close buttons, tab bars, or transaction rows | 2.5.5 Target Size (Enhanced) is AAA; 2.5.8 is WCAG 2.2 AA, not 2.1. For this system use a 44 × 44 CSS px product target as a usability standard, while checking applicable 2.1 criteria such as 2.5.1 Pointer Gestures and 2.5.2 Pointer Cancellation. | Give each action a full target area, adequate spacing, and a non-gesture alternative. Do not label 44px as a WCAG 2.1 AA requirement. Verify at device scale and with assistive touch. |
| Unlabeled amount fields, icon-only actions, confusing errors, or unlabeled dynamic balance updates | 1.1.1 Non-text Content, 3.3.1 Error Identification, 3.3.2 Labels or Instructions, 4.1.2 Name, Role, Value, 4.1.3 Status Messages | Use persistent programmatic labels, explain valid formats, identify the error in text, associate it with the field, and announce asynchronous status. Test VoiceOver and TalkBack in a realistic transfer flow. |
| Fixed text, clipped transaction tables/charts, or loss of content at zoom/reflow | 1.4.4 Resize Text, 1.4.10 Reflow, 1.4.12 Text Spacing | Support 200% text resizing and narrow reflow without loss or two-dimensional scrolling for ordinary content. Use flexible layouts, avoid baking text into images, and check long account names and currency values. |

### Design system brief

**Product vision.** Vault makes everyday money decisions easier to understand. It pairs dependable financial controls with transparent AI assistance so customers can move from “what happened?” to “what can I do?” without surrendering control.

**Brand tone and personality.** Calm, precise, candid, capable, and quietly optimistic. Use plain language and exact amounts. Be reassuring without promising outcomes; be intelligent without pretending to be human. Avoid hype, shame, urgency, unexplained jargon, and playful treatment of risk or loss.

**Audience personas.**

- **Jordan, first-time investor:** building an emergency cushion and learning financial language. Needs clear definitions, reversible steps, and reassurance that an estimate is not a guarantee.
- **Ari, busy household planner:** coordinates bills, shared spending, and savings goals. Needs a fast overview, useful alerts, and transparent ways to inspect or correct a category.
- **Morgan, financially cautious:** has experienced an unexpected fee and checks every recommendation. Needs provenance, confidence calibration, data-use clarity, and control before any consequential action.

### AI feature briefs

1. **AI Loading State:** Explain the active task (“Reviewing your recent spending”), provide honest indeterminate progress unless the backend can report real progress, and set a modest expectation. Preserve the surrounding screen where possible. Offer cancel when cancellation is safe. Announce start and completion as a polite status message; never announce every animation frame. Include slow, retry, and error states.
2. **Suggestion Chip:** Offer a small set of contextual prompts such as “Show my dining trends.” Frame them as optional, wrap text, and provide freeform input or another route. A chip click should populate or start the stated task only; it must not move money or commit a financial change. Support keyboard focus, selected/pressed feedback, and dismissal of stale suggestions.
3. **AI Confidence Indicator:** Place calibrated qualitative confidence beside the claim, e.g. “High · 92%,” only when a score is meaningful and validated. Pair a meter with visible text and an explanation of what the score means. State evidence, caveats, and what the model does not know. Never imply a 92% probability of a financial outcome unless that is exactly what the calibrated model estimates.
4. **AI Explanation Callout:** Answer “Why am I seeing this?” next to a personalized insight. State the input categories, comparison period, and limitation in plain language, then link to inspectable records or a correction route. Let the user dismiss it. Do not expose sensitive raw data unnecessarily or present correlation as causation.

## 3. Token architecture

### Naming and mode model

Use three layers: `primitive` values (palette), semantic `color` aliases (roles), and `component` aliases only when a component genuinely needs a unique role. Example: `primitive/forest/700` → `color/text/link` → `component/button/primary/background`. Components must consume semantic aliases. Figma collection names can use `/`; CSS variables use kebab case such as `--color-surface-base`. Use lowercase dot-separated token paths in JSON: `color.surface.base`.

Create `Light` and `Dark` modes for semantic collections. Primitive values can remain shared; semantic aliases change per mode. Never name a semantic token by its current appearance (`white-2`); name its role (`surface.raised`). The following exact hex values are the initial Figma values.

| Group | Token | Light | Dark | Intended role |
|---|---|---:|---:|---|
| Brand | `brand.ink` | `#173C34` | `#D9F0DE` | Deep brand / inverse text |
| Brand | `brand.forest` | `#245849` | `#ABD3B6` | Brand action and links |
| Brand | `brand.moss` | `#4F806B` | `#83B69A` | Secondary brand accent |
| Brand | `brand.mint` | `#C6E8D4` | `#31503D` | Brand tint |
| Brand | `brand.lime` | `#D8F06A` | `#D8F06A` | Highlight; not small text on white |
| Brand | `brand.gold` | `#D9AD59` | `#E8C479` | Decorative/illustrative accent |
| Surface | `surface.canvas` | `#F5F5F0` | `#151D19` | App canvas |
| Surface | `surface.base` | `#FFFFFF` | `#1E2923` | Default content surface |
| Surface | `surface.subtle` | `#F0F1EB` | `#202C26` | Secondary surface |
| Surface | `surface.raised` | `#FFFFFF` | `#26332B` | Raised surface |
| Surface | `surface.inverse` | `#173C34` | `#D9F0DE` | Inverse surface |
| Surface | `surface.scrim` | `#15231F` at 35% | `#000000` at 55% | Modal backdrop; alpha token |
| Surface | `surface.selected` | `#E5EEE7` | `#2E4437` | Selected row/control |
| Surface | `surface.disabled` | `#E8E9E4` | `#303A33` | Disabled control surface |
| Text | `text.primary` | `#1D2824` | `#EDF1EB` | Primary copy |
| Text | `text.secondary` | `#53605A` | `#BCC8BF` | Supporting copy |
| Text | `text.tertiary` | `#707B75` | `#A2AEA5` | Low-emphasis copy; verify contrast |
| Text | `text.inverse` | `#FFFFFF` | `#15231A` | Copy on inverse surface |
| Text | `text.link` | `#245849` | `#ABD3B6` | Inline links; underline on hover/focus |
| Text | `text.disabled` | `#838B86` | `#78847C` | Disabled copy; not for essential info |
| Border | `border.default` | `#D9DDD5` | `#344239` | Default separators/outlines |
| Border | `border.strong` | `#AEB8AF` | `#607066` | Strong boundaries |
| Border | `border.subtle` | `#E8EAE5` | `#2B362F` | Quiet separators |
| Border | `border.focus` | `#245849` | `#ABD3B6` | Focus indicator; 3:1 against adjacent colors |
| Border | `border.inverse` | `#526D62` | `#789681` | Border on inverse surface |
| Semantic | `semantic.success` | `#246B45` | `#8FD0A1` | Success foreground/icon |
| Semantic | `semantic.success.bg` | `#E4F2E8` | `#263F30` | Success container |
| Semantic | `semantic.warning` | `#805500` | `#F0C66A` | Warning foreground/icon |
| Semantic | `semantic.warning.bg` | `#FFF1CB` | `#44371F` | Warning container |
| Semantic | `semantic.danger` | `#A33D36` | `#F09A8D` | Error/destructive foreground |
| Semantic | `semantic.danger.bg` | `#FBE9E6` | `#482B29` | Error container |
| Semantic | `semantic.info` | `#285B7B` | `#8CC4E3` | Informational foreground |
| Semantic | `semantic.info.bg` | `#E5F1F7` | `#253B49` | Informational container |
| AI | `ai.accent` | `#6B4C91` | `#D0B4ED` | AI mark and accent text |
| AI | `ai.accent.strong` | `#50376F` | `#E3D3F4` | High-emphasis AI accent |
| AI | `ai.accent.soft` | `#F0EAF6` | `#392E45` | AI callout surface |
| AI | `ai.glow` | `#D8C9EE` | `#624C76` | Nonessential motion/decoration |
| AI | `ai.confidence.high` | `#246B45` | `#8FD0A1` | High confidence label plus text |
| AI | `ai.confidence.medium` | `#805500` | `#F0C66A` | Medium confidence label plus text |
| AI | `ai.confidence.low` | `#A33D36` | `#F09A8D` | Low confidence label plus text |

These 40 semantic tokens are **not automatically contrast-safe in every pairing**. Test combinations used in production; semantic backgrounds and foregrounds must be evaluated together. Disabled content is exempt from some contrast requirements but must remain understandable and should not conceal why an action is unavailable.

### Spacing, layout, and responsive type

| Token | Value | Typical use |
|---|---:|---|
| `space.0` | 0px | Reset |
| `space.1` | 4px | Icon gap, tight adjustment |
| `space.2` | 8px | Compact control gap |
| `space.3` | 12px | Dense row inset/gap |
| `space.4` | 16px | Standard component inset |
| `space.5` | 20px | Group separation |
| `space.6` | 24px | Section inset/gap |
| `space.8` | 32px | Major section separation |
| `space.10` | 40px | Large composition gap |
| `space.12` | 48px | Page rhythm |
| `space.16` | 64px | Large layout separation |

Base increment is 4px; use 8px as the common rhythm and 4px steps for optical adjustments. Touch area can exceed visual control size. Avoid arbitrary values unless optical alignment, chart geometry, or platform conventions require them; document exceptions.

| Style | Mobile | Wide | Line height | Weight / use |
|---|---|---|---|---|
| `type.display` | 32px | 40px | 1.08 | Editorial serif, 400; screen title |
| `type.heading.1` | 28px | 32px | 1.15 | Humanist sans, 600; page heading |
| `type.heading.2` | 22px | 26px | 1.2 | Section heading |
| `type.heading.3` | 18px | 22px | 1.25 | Card/dialog heading |
| `type.body.lg` | 17px | 17px | 1.5 | Prominent explanatory copy |
| `type.body.md` | 15px | 15px | 1.5 | Default body and inputs |
| `type.body.sm` | 13px | 13px | 1.45 | Secondary metadata; not dense essential disclosures |
| `type.label` | 12px | 12px | 1.35 | Control label; sentence case |
| `type.caption` | 11px | 11px | 1.4 | Nonessential timestamp/source metadata |
| `type.numeric.lg` | 28px | 32px | 1.1 | Tabular numerals, balances |

Use container breakpoints: mobile `0–599px`, compact `600–899px`, wide `900px+`; do not scale font size continuously with viewport width. Prefer a legible humanist sans for UI and an editorial serif only for display moments. Numerals should use tabular figures. Test user text scaling and long localized currency strings.

## 4. Core component specifications

For all components, bind color, spacing, type, radius, and focus to semantic variables. Figma variants should use property names `Size`, `Intent`, `State`, and `Icon`; booleans should be used for optional content, not duplicative variant axes. Auto Layout should hug content by default, with explicit fill behavior for full-width mobile controls. Minimum product touch area is 44 × 44 CSS px; this is a Vault standard, not WCAG 2.1 AA language.

| Component | Auto Layout and anatomy | Properties and variants | Accessibility and behavior |
|---|---|---|---|
| Button | Horizontal Auto Layout; 12px gap, 16px horizontal inset; min height 48px; label plus optional leading/trailing icon. | `Intent`: primary, secondary, tertiary, destructive; `Size`: compact, default, large; `State`: default, hover, focus, pressed, disabled, loading; `Icon`: none/leading/trailing. | Native button; accessible name includes the action and target (“Transfer to Maya”), not just “Continue” when context is ambiguous. Preserve focus ring. Loading state announces progress and prevents duplicate submission; disabled state has a textual reason nearby. |
| Input Field | Vertical Auto Layout: persistent label, optional hint, control, optional error; 4/8px gaps. Control min height 52px; leading currency/recipient adornment stays separate from editable value. | `Type`: text, amount, search; `State`: default, focus, filled, error, success, disabled; `Leading`: none/currency/icon; `Trailing`: none/clear/visibility. | Real label association; correct input mode and autocomplete; do not use placeholder as label. Link hint/error with described-by; announce errors after submission, preserve entered value, describe amount units and decimal rules. |
| Card | Vertical Auto Layout with 16px inset and 8/12px section gaps; optional header/body/footer slots; no nested cards by default. | `Surface`: base, subtle, inverse; `Density`: standard, compact; `Interactive`: static, button/link; optional selected state. | Static card should not be announced as a group unless useful. If interactive, expose one clear role/name and keyboard behavior; avoid nested interactive controls with ambiguous click targets. |
| Badge | Hug-content horizontal Auto Layout; icon + status label, 8px horizontal inset, 24px min height. | `Status`: neutral, success, warning, danger, info, pending; `Size`: default/compact; icon optional only if visible label still conveys state. | Include status as text (“Payment pending”), not color alone. Keep contrast for text and icon. Do not communicate a financial risk only through a tiny badge. |
| Modal | Centered dialog with max width 480px, 24px inset, title, content, explicit close only when safe, and action footer. Mobile becomes full-height sheet or near-full-width dialog. | `Purpose`: confirmation, form, alert; `Size`: compact, standard; `State`: open, submitting, result. | `dialog` semantics, labelled title, focus moved inside, tab contained while open, Escape policy appropriate to consequence, focus returned to opener. Confirmation copy states amount, recipient, fees, and reversibility before transfer. |
| Navigation Bar | Horizontal Auto Layout, equal or content-sized destinations, min height 64px; icon and visible text label; selected marker independent of color. | `Placement`: bottom, top; `Item count`: 3–5; item `State`: selected, default, disabled only with explanation. | Each item is a named link/button with selected/current state. Touch targets at least 44px square. Do not rely on icon recognition. Keep order and labels stable across screens. |
| List Item | Horizontal Auto Layout, min height 64px; optional leading icon, vertical title/metadata, trailing value/status; 16px inset and 12px gap. | `Density`: standard, compact; `Leading`: merchant/account/avatar; `Trailing`: amount, status, chevron; `State`: default, pressed, selected. | Group row content into one coherent accessible name when it is one action; format amount and currency unambiguously; expose debit/credit in text, not color alone. Separate row action from any secondary action. |
| Segmented Control | Horizontal equal-width segments in one container; min 40px visual height and 44px hit target; selected fill and clear text. | `Count`: 2–4; `Selection`: one value; `Size`: standard/compact; `State`: enabled/disabled. | Use radio-group or tab semantics based on behavior. Expose selected state and keyboard arrows; do not use as navigation if destinations are separate pages. Ensure labels fit at 200% text size. |

### Component documentation: usage rules and Do / Don’t

- **Button:** Use primary for the single next action, secondary for a safe alternative, and destructive only for an explicitly named harmful action. **Do:** include amount/recipient in high-consequence confirmation context. **Don’t:** use “OK” for a money-moving action, hide a fee behind a generic CTA, or make a disabled control the only route.
- **Input Field:** Use for user-entered values; show format and units before entry. **Do:** validate after a reasonable user action and state how to fix an error. **Don’t:** clear a valid amount after an error, encode required state by color alone, or change decimal/currency interpretation silently.
- **Card:** Use to group related content, not as a default decorative wrapper for every section. **Do:** keep hierarchy and reading order meaningful. **Don’t:** put cards inside cards or imply that a static balance container is a control.
- **Badge:** Use for a concise, current state. **Do:** pair state color with readable text and, when useful, an icon. **Don’t:** use badges for long explanations, prediction certainty without method, or transient updates that need live announcement.
- **Modal:** Use when the user must resolve a focused decision. **Do:** explain consequence and provide a safe cancel path where valid. **Don’t:** interrupt for routine information, trap focus invisibly, or close a pending transfer dialog while an irreversible request is unclear.
- **Navigation Bar:** Use for stable top-level destinations. **Do:** provide text labels and current-page state. **Don’t:** use an unlabeled icon-only bottom bar or change item order unexpectedly.
- **List Item:** Use for scannable records with aligned metadata. **Do:** provide date, merchant/recipient, and signed amount in a consistent order. **Don’t:** make the whole row and trailing icon separate overlapping actions.
- **Segmented Control:** Use for a small number of mutually exclusive views in the same context. **Do:** preserve selection and announce it. **Don’t:** use it for a long option list or as a substitute for tabs when content is not a single view.

## 5. AI pattern specifications

All AI patterns use the same four theme modes as the semantic token collection. Examples below give the default intent; re-check every actual foreground/background pair to the WCAG checklist before publishing. AI accent is a category cue, not a trust/safety signal.

| Pattern | Layout, content, and component properties | State variants and both themes |
|---|---|---|
| AI Loading State | Vertical Auto Layout, 12–16px gap. Status glyph, concise active verb, honest progress (indeterminate unless real backend progress exists), optional elapsed/typical duration, safe cancel. Keep height stable to avoid layout shift. | Variants: `Task` insight/transaction explanation; `Progress` indeterminate/real determinate; `State` active/slow/retry/error/cancelled/complete. Light: `surface.base` + `ai.accent`/`text.primary`; dark: dark base + light AI accent. Never animate when reduced motion is requested; announce only meaningful status changes. |
| Suggestion Chip | Wrap-capable horizontal Auto Layout; 8px gap; label-based pill, 36px visual height and 44px target. Optional section label and freeform route. | Variants: `State` default/focus/pressed/selected/disabled; `Content` short/long; `Theme` light/dark. Light uses `ai.accent.soft` + `ai.accent.strong`; dark uses dark soft surface + light accent. Never visually imply a chip is a mandatory answer. |
| Confidence Indicator | Vertical Auto Layout: claim, qualitative label and optional calibrated score, visible meter, evidence/explanation link, caveat. Meter is supplementary to text. | Variants: `Level` high/medium/low/unknown; `Evidence` available/unavailable; `Theme` light/dark. Use dedicated confidence semantic tokens in both themes; unknown omits score and meter and says “Not enough information.” Never map a percentage to outcome probability unless validated as such. |
| AI Explanation Callout | Vertical Auto Layout with 12px inset; heading “Why this insight?”, rationale, source/time window, limitation, inspect/correct and dismiss actions. Place beside the insight, not several screens away. | Variants: `Density` inline/expanded; `State` open/collapsed/source unavailable; `Theme` light/dark. Light uses `ai.accent.soft` with dark text; dark uses the dark soft token with light text. Keep contrast and link distinction in both. Disclose missing/estimated data rather than inventing provenance. |

### AI pattern documentation: Do / Don’t

- **Loading:** **Do** say what is being analyzed and allow safe cancellation. **Don’t** use an endless spinner with no task context, fabricate a percentage, or announce decorative updates to screen readers.
- **Suggestion:** **Do** offer useful, optional prompts and a freeform path. **Don’t** frame a generated prompt as user intent or submit a transfer from a suggestion chip.
- **Confidence:** **Do** expose calibrated meaning, source, and caveat in text. **Don’t** use a colored ring or unexplained score as proof, or use “high confidence” to imply guaranteed financial results.
- **Explanation:** **Do** cite data category and period with an inspection/correction route. **Don’t** claim causation from a correlation or expose more personal data than needed.

For every pattern, interactive elements need accessible names and 44 × 44px product targets; static explanatory content must remain in reading order. Meet 4.5:1 normal text, 3:1 large text, and 3:1 meaningful non-text contrast in both modes. Use `aria-live="polite"` for concise loading/completion changes, never for continuously changing progress. Keyboard focus must be visible. Honor reduced motion and text scaling.

## 6. Color contrast audit checklist

1. Export the final semantic pairs used by each component, including overlays, disabled states, charts, chips, badges, focus, and hover; audit both Light and Dark modes.
2. Measure actual composited colors, including alpha scrims, gradients, image overlays, and elevation surfaces. Do not test a token in isolation if another layer changes the result.
3. Confirm 4.5:1 for normal text and 3:1 for large text (at least 24 CSS px regular or about 18.66 CSS px bold); test placeholder, helper, error, and numeric text too.
4. Confirm 3:1 for meaningful control boundaries, icons, focus indicators, chart marks, and other non-text information against adjacent colors (1.4.11).
5. Verify that state meaning is not conveyed only by color; check grayscale, common color-vision deficiencies, and screen-reader output.
6. Do not mark essential information “safe” because a state is disabled; disabled content has specific contrast exemptions, but users still need to understand the state and how to proceed.
7. Test focus against both the component surface and surrounding page surface. Check keyboard focus, hover, pressed, selected, error, and high-contrast/forced-colors behavior.
8. Re-run automated checks after token or alpha changes, then manually inspect screenshots at real mobile density. Save tool, date, tested pair, ratio, and pass/fail beside the token audit.
9. Treat every failed text pair as a release blocker; fix the token or pairing, not just the screenshot. Re-test on the actual screen and with browser zoom.

## 7. AI-generated variant review framework

Use this as a human approval gate for variants generated inside Figma. Score each dimension 0 (fail), 1 (needs revision), or 2 (pass). A variant cannot ship with a 0 in safety, accessibility, user control, or truthfulness. Keep prompt, model/tool, date, source components, and reviewer with the candidate.

| Dimension | Review question |
|---|---|
| System fit | Does it use published variables, components, Auto Layout, naming, and both theme modes rather than detached local styling? |
| Task clarity | Can the user tell what the model is doing or recommending, in plain language, without a tooltip? |
| Truthfulness | Are uncertainty, limitations, data provenance, and progress represented accurately? Are no figures or sources fabricated? |
| Financial safety | Could this be mistaken for advice, a guaranteed return, a verified fraud finding, or a committed money movement? Is explicit confirmation retained? |
| User agency | Can the user dismiss, inspect, correct, choose another route, and undo where possible? |
| Accessibility | Are contrast, text resize/reflow, focus order, names/roles/states, touch targets, and reduced motion covered? |
| Content resilience | Does it handle long names, large balances, negative amounts, localization, empty/error/slow states, and narrow screens? |
| Consistency | Does it preserve expected component anatomy, tone, spacing rhythm, semantics, and platform behavior? |

**Decision:** 14–16 with no critical 0 = approve for prototype; 10–13 = revise and review; under 10 = reject. Any critical 0 means reject regardless of total. AI output is a draft; a designer and accessibility/product reviewer approve final variants. Validate generated code and behavior separately from the Figma appearance.

## 8. Usage Examples page specifications

Use a `Usage Examples` section on the Documentation page. Canvas width 1440px; 64px outer margins; 12-column grid with 24px gutters; section title plus `Mobile · 390 × 844` label. Center two frames at 390 × 844 with at least 40px between them; use a 1× reference and a 200% text/long-string QA companion. Add annotations in a side column rather than over the device content.

1. **Home / account overview:** navigation bar; greeting and profile action; total balance card with exact currency and period; clearly labeled send/add/move buttons; recent transaction list with merchant, date, signed amount, and accessible status. Show a no-activity state as a separate variant. No chart may rely on color alone.
2. **AI insight / savings opportunity:** back navigation; AI insight label; concise recommendation; confidence indicator with qualitative level, calibrated score only if validated, evidence period, and caveat; explanation callout with inspectable transaction link; optional suggestion chips and freeform alternative; primary “Explore savings plan” and secondary “Not now.” No money moves until a separate reviewed confirmation flow.

Both examples must use only published Vault components and semantic variables. Include annotations for focus sequence, screen-reader names, color pairs, and source of financial data. Check 320px width, 200% text, dark mode, long localized currency, empty/loading/error states, and VoiceOver/TalkBack before presenting.

## 9. Developer-facing handoff PDF: 10-page outline

1. **Cover:** Vault, version, date, owner, “Money clarity, with a human in control.”
2. **Principles and product brief:** vision, tone, audience, non-negotiable safety rule.
3. **Token architecture:** naming, primitive-to-semantic mapping, Light/Dark collection modes.
4. **Color and accessibility:** full semantic palette, tested pairings, contrast checklist, known exceptions.
5. **Spacing and typography:** scales, responsive breakpoints, numeric formatting, localization notes.
6. **Core components:** anatomy, Figma properties, dimensions, variants, interaction state table.
7. **AI patterns:** four pattern anatomy sheets, sample copy, theme behavior, loading/error/reduced-motion states.
8. **Usage examples:** the two annotated mobile screens, source data, focus and screen-reader notes.
9. **Engineering implementation:** token export mapping, component API expectations, responsive behavior, interaction/ARIA notes, integration boundaries.
10. **Quality and governance:** accessibility sign-off, AI variant review framework, open risks, ownership, version/changelog, handoff contacts.

Export text as selectable text, not flattened image. Include tagged headings, readable contrast, descriptive links, page numbers, and a PDF accessibility check. Attach the Figma library URL and token export separately; the PDF is guidance, not the source of truth.

## 10. Loom walkthrough script (about 4 minutes)

### 0:00–0:30 · Intro

“Hi, I’m walking through Vault, a fintech design system built around a simple promise: make money easier to understand while keeping the person in control. This file is organized into four Figma pages: Foundations, Components, AI Patterns, and Documentation. I’ll focus on the AI Patterns page, but first I’ll show the foundation that keeps those patterns consistent. Vault’s AI can explain and suggest; it never silently moves money or turns an estimate into a guarantee.”

### 0:30–1:10 · Foundations

“On Foundations, color is organized by meaning rather than by the color picker. Brand, surface, text, border, semantic, and AI tokens are named by role. The same semantic token changes value between Light and Dark modes, so a component doesn’t need a separate hand-built dark version. We also define a four-point spacing base, an eight-point common rhythm, and a responsive type scale. Before publishing, we test the actual foreground and background pairings in both themes. The palette is a system of choices, not a claim that every combination already passes contrast.”

### 1:10–3:35 · AI Patterns Deep-Dive

“Here are the four patterns. First, AI Loading State. The message names the task, ‘Reviewing your spending,’ and gives an honest expectation. Progress stays indeterminate unless the service can report real progress. There’s a cancel route when cancellation is safe, plus slow and error variants in the specification. Reduced-motion and screen-reader behavior are part of the pattern, not afterthoughts.

“Second, Suggestion Chip. The prompts are optional starting points, not the only way to continue. The component wraps on small screens and always has an alternative, such as freeform input. Selecting a prompt starts only the described task; it can’t authorize a transfer.

“Third, Confidence Indicator. The qualitative label sits beside the claim, with a score only when that score is calibrated and meaningful. The meter is supplementary; the words communicate the state. We include evidence and a caveat so ‘high confidence’ can’t be mistaken for a guaranteed financial outcome. If confidence isn’t available, the pattern says so instead of inventing a number.

“Fourth, AI Explanation Callout. It answers ‘Why am I seeing this?’ with the data category and date range used, plus an inspectable route to the underlying transactions. It distinguishes a comparison from a causal explanation, and it can be dismissed or corrected.

“I’m switching the preview to dark mode here. Each pattern follows the same semantic variable modes, so contrast and hierarchy remain intentional. Across all four, the user should know what the system is doing, why it made this observation, and what happens next.”

### 3:35–4:15 · Handoff and Conclusion

“The Documentation page brings the system into two mobile examples: a clear account overview and an AI savings insight. Both are composed from Vault components, with the insight showing confidence, evidence, optional prompts, and a safe next step. The handoff document includes component properties, accessibility checks, the AI variant review rubric, and a ten-page developer PDF outline. The most important review gate is that safety, truthfulness, accessibility, and user control cannot be traded away for a visually polished variant. That’s Vault: useful intelligence, visible evidence, and the final decision staying with the customer. Thanks for taking a look.”