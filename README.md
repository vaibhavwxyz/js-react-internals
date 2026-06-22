# js-react-internals

Personal learning repo — 8 weeks of going deep on JS, browser, React, and Next.js internals.

## Structure

| Folder | Phase | Topics |
|---|---|---|
| `01-js-internals/` | Phase 1 | Prototype chain, closures, async/event loop, Proxy & Reflect |
| `02-browser-internals/` | Phase 2 | Rendering pipeline, HTTP & networking, security, web workers |
| `03-react-advanced/` | Phase 3 | Fiber, patterns, state management, hooks, testing |
| `04-nextjs-perf/` | Phase 4 | RSC, App Router, Web Vitals, bundlers |
| `_notes/` | All | Personal notes, diagrams & write-ups per phase |

Top-level folders map 1:1 to phases with a numeric prefix so they always sort
in order. Inside each phase, sub-folders are by topic — not by week — so
everything about a topic lives in one place. `_notes/` (underscore prefix sorts
to the bottom) is for markdown only; the code folders stay clean.

Most files are plain `.js` / `.jsx` — run them with `node` directly or drop
them into a Vite playground. `04-nextjs-perf/rsc-dashboard/` is a real Next.js
app you can run with `npm run dev`.

## Progress

- [x] Week 1 — Prototype chain & closures
- [ ] Week 2 — Event loop & async
- [ ] Week 3 — Proxy & Reflect
- [ ] Week 4 — Browser rendering pipeline & networking
- [ ] Week 5 — Browser security & web workers
- [ ] Week 6 — React Fiber & advanced patterns
- [ ] Week 7 — Hooks internals, state & testing
- [ ] Week 8 — RSC, App Router, Web Vitals & bundlers

## Conventions

**Commits** read like a journal of what you learned — phase prefix + topic:

```
w1/closures: memoize + once utilities
w4/rendering: layout-thrash repro + fix
w8/rsc: streaming dashboard demo
```
