"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { slides } from "../deck-data";
import {
  copyPromptText,
  isSlideId,
  openPresenterChannel,
  PRESENTER_NOTES_REQUEST,
  PRESENTER_NOTES_STORAGE_KEY,
  readPresenterSlideId,
  readSlideIdFromHash,
} from "../presenter-notes-state";
import { TakeawayContent } from "../slide-takeaway";
import type { SlideId } from "../slide-types";

export default function SpeakerNotesPage() {
  const [slideId, setSlideId] = useState<SlideId>(slides[0].id);
  const activeIndex = Math.max(
    0,
    slides.findIndex((slide) => slide.id === slideId),
  );
  const slide = slides[activeIndex];

  useEffect(() => {
    const update = (id: SlideId) => {
      setSlideId(id);
      window.history.replaceState(null, "", `#${id}`);
    };
    update(readPresenterSlideId() ?? readSlideIdFromHash() ?? slides[0].id);
    const channel = openPresenterChannel();
    if (channel) {
      channel.onmessage = (event: MessageEvent<unknown>) => {
        if (isSlideId(event.data)) update(event.data);
      };
      channel.postMessage(PRESENTER_NOTES_REQUEST);
    }
    const onStorage = (event: StorageEvent) => {
      if (
        event.key === PRESENTER_NOTES_STORAGE_KEY &&
        isSlideId(event.newValue)
      ) {
        update(event.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      channel?.close();
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <main className="presenter-notes-page">
      <header className="presenter-notes-hero">
        <span className="presenter-notes-index">
          {String(activeIndex + 1).padStart(2, "0")} / {slides.length} ·{" "}
          {slide.section}
        </span>
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
      </header>
      <section className="presenter-notes-card">
        <h2 className="presenter-notes-label">Takeaway</h2>
        <p className="notes-takeaway">
          <TakeawayContent takeaway={slide.takeaway} />
        </p>
        <h2 className="presenter-notes-label">Speaker notes</h2>
        <ul className="notes-list">
          {slide.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <p className="notes-evidence">{slide.evidence}</p>
        {slide.sources.length ? (
          <ul className="notes-sources">
            {slide.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
      {slide.prompt ? (
        <PromptCard key={slide.id} prompt={slide.prompt} />
      ) : null}
      <p className="presenter-sync-hint">
        Follows the active slide in the presentation window.
      </p>
    </main>
  );
}

function PromptCard({ prompt }: { prompt: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  return (
    <section className="presenter-notes-card prompt-copy">
      <h2 className="presenter-notes-label">Prompt</h2>
      <pre className="prompt-text">{prompt}</pre>
      <button
        className="copy-prompt-button"
        type="button"
        onClick={async () =>
          setStatus((await copyPromptText(prompt)) ? "copied" : "failed")
        }
      >
        {status === "copied" ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}
        {status === "copied" ? "Copied" : "Copy prompt"}
      </button>
      <p className="copy-status" role="status">
        {status === "copied"
          ? "Prompt copied to clipboard."
          : status === "failed"
            ? "Could not access the clipboard. Select and copy the prompt above."
            : ""}
      </p>
    </section>
  );
}
