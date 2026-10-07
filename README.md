# Orality Paper Sharing Slides

This is a web-based paper-sharing deck for **Orality: A Semantic Canvas for Externalizing and Clarifying Thoughts with Speech**. It keeps the paper-sharing template controls, speaker notes, keyboard navigation, and presentation workflow, but the slide content now follows a concrete Orality-first talk arc with three related papers summarized on separate ending slides.

## Getting Started

This project starts from [ifsheldon/paper-sharing](https://github.com/ifsheldon/paper-sharing) at commit `3b4e657`.
Use Bun 1.4.2 and Node.js 20.9 or later.
Install the locked dependencies, then run the development server:

```bash
git clone --recurse-submodules git@github.com:ifsheldon/ai-writing-sharing.git
cd ai-writing-sharing
bun install --frozen-lockfile
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using The Deck

- Use the left rail to jump between slides.
- Use `ArrowLeft`, `ArrowRight`, `N`, `P`, `Home`, and `End` for keyboard navigation.
- Speaker notes are hidden by default. Use the notes button to show or hide concise key points for the current slide.
- Use the Notes window button to open a separate `/speaker-notes` window and keep it synced with the active slide. Move that window to a second display for presenter notes.
- The notes window resynchronizes with the current slide when either window is reloaded, including during local development.
- Use the fullscreen button only for the main deck.

## Editing The Template

The deck content lives in `src/app/deck-data.ts`. Each slide includes:

- the title, section, layout, and presenter move,
- the slide copy, cards, bullets, and speaker key points,
- optional figure metadata and paper metadata badges,

Figure assets used by the deck live in `public/figures`.

The interactive UI is in `src/app/page.tsx`, and the visual system is in `src/app/globals.css`.

## Writing Guidelines

The [vis-writing-guidelines](vis-writing-guidelines/) submodule contains shared guidance for research writing.
For an existing checkout, initialize it with:

```bash
git submodule update --init --recursive
```

## Checks

Direct dependencies are pinned to stable releases in `package.json`, with resolved versions in `bun.lock`.
The stack uses Next.js 16.4, React 19.3, TypeScript 7.0, Tailwind CSS 4.3, Biome 2.5, and the React Compiler.
The `typecheck` command generates Next.js route types and runs the stable TypeScript 7 compiler.
Next.js also checks types during production builds.

Use Bun for local commands:

```bash
bun run lint
bun run typecheck
bun run build
```

Use `bun run format` to format project files and `bun run start` to serve a completed production build.
