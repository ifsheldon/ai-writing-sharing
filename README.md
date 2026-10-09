# AI × Research Writing

A 17-slide web presentation about writing and revising research papers with AI, designed for a 25-minute sharing session with visualization and HCI labmates.
The deck follows the approved [talk outline](talk-outline.md): five general suggestions, all ten writing pitfalls in guide order, and two slides on draft review and revision editing.

## Getting started

This project starts from [ifsheldon/paper-sharing](https://github.com/ifsheldon/paper-sharing) at commit `3b4e657`.
Use Bun 1.4.2 and Node.js 20.9 or later.

```bash
git clone --recurse-submodules git@github.com:ifsheldon/ai-writing-sharing.git
cd ai-writing-sharing
bun install --frozen-lockfile
bun dev
```

Open [localhost:3000](http://localhost:3000).
The presentation targets desktop displays at 16:9 and 16:10, including 1280 × 720 and 1440 × 900.
It uses the full available slide area at both ratios and does not include a mobile layout.

## Presenting

The current section appears above the slide title.

- Use the bottom progress markers or the slide overview to jump to a slide.
- Use `ArrowLeft` / `P` and `ArrowRight` / `N` to navigate, or `Home` and `End` to reach the first and last slides.
- Press `O` for the overview, `S` for speaker notes, and `F` for fullscreen.
- Press `Escape` to close a dialog.
- Open **Prompt** on slides 1–5, 16, and 17 to read and copy the complete instruction.
- Use **Open presenter window** for a separate notes window on a second display.

Notes and prompts open over the slide without changing its layout.
The Next.js development indicator is disabled so it does not cover the presentation controls.
The presenter window follows the active slide and resynchronizes after either window reloads.
Slide URLs include a stable fragment such as `#plain-writing`, so reloading or sharing that URL preserves the selected slide.
The notes connection is shared by presentation windows on the same origin, so use one main deck window per origin when presenting.

Speaker notes identify illustrative examples and historical revisions.
Speaker notes preserve the qualifications, source references, unused style examples, and full revision checklist from the outline.
The final slide links to the three writing guides at the submodule revision used to prepare the talk.

## Editing

- [`src/app/deck-data.ts`](src/app/deck-data.ts) contains the slide text, complete prompts, speaker notes, and sources.
- [`src/app/slide-types.ts`](src/app/slide-types.ts) defines the typed content layouts.
- [`src/app/slide-content.tsx`](src/app/slide-content.tsx) renders examples, comparisons, sequences, and review steps.
- [`src/app/slides.css`](src/app/slides.css) controls slide typography and layouts using the available presentation area.
- [`src/app/page.tsx`](src/app/page.tsx) provides the presentation controls and dialogs.
- [`src/app/globals.css`](src/app/globals.css) styles the shell, dialogs, and presenter window.
- [`src/app/presenter-notes-state.ts`](src/app/presenter-notes-state.ts) synchronizes validated slide IDs through browser storage and BroadcastChannel.

Keep the slide content aligned with [talk-outline.md](talk-outline.md).
After changing a layout or adding text, inspect all affected slides at both aspect ratios for clipping, overlap, and reading order.
Preserve the distinction between illustrative examples and historical manuscript revisions.

## Writing guidelines

The [vis-writing-guidelines](vis-writing-guidelines/) submodule contains the source guidance.
For an existing checkout, initialize it with:

```bash
git submodule update --init --recursive
```

Use [VIS Writing Style](vis-writing-guidelines/vis-writing-style.md) while drafting, [VIS Writing Pitfalls](vis-writing-guidelines/vis-writing-pitfalls.md) when reviewing explanations, and [VIS Editing Pitfalls](vis-writing-guidelines/vis-editing-pitfalls.md) when revising an existing argument.

## Checks

Dependencies are pinned in `package.json` and resolved in `bun.lock`.
The stack uses Next.js 16.4, React 19.3, TypeScript 7.0, Tailwind CSS 4.3, Biome 2.5, and the React Compiler.

```bash
bun run lint
bun run typecheck
bun run build
```

The type check generates Next.js route types before running TypeScript.
Use `bun run format` to format project files and `bun run start` to serve a completed production build.
