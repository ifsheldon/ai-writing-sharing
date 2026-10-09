"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Expand,
  LayoutGrid,
  Minimize,
  NotebookTabs,
  Presentation,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "./deck-data";
import {
  copyPromptText,
  openPresenterChannel,
  PRESENTER_NOTES_REQUEST,
  publishPresenterSlideId,
  readSlideIdFromHash,
} from "./presenter-notes-state";
import { SlideContent } from "./slide-content";
import type { Slide } from "./slide-types";

type DialogKind = "overview" | "notes" | "prompt";
type CopyStatus = "idle" | "copied" | "failed";
const sections = Array.from(new Set(slides.map((slide) => slide.section)));

export default function Home() {
  const [selectedIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [dialog, setDialog] = useState<DialogKind | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [notice, setNotice] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const notesWindowRef = useRef<Window | null>(null);
  const channelRef = useRef<BroadcastChannel | null>(null);
  const activeIndex = Math.min(selectedIndex, slides.length - 1);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const restoreHash = () => {
      const id = readSlideIdFromHash();
      setActiveIndex(id ? slides.findIndex((slide) => slide.id === id) : 0);
    };
    restoreHash();
    setReady(true);
    window.addEventListener("hashchange", restoreHash);
    const channel = openPresenterChannel();
    channelRef.current = channel;
    if (channel) {
      channel.onmessage = (event: MessageEvent<unknown>) => {
        if (event.data === PRESENTER_NOTES_REQUEST) {
          channel.postMessage(readSlideIdFromHash() ?? slides[0].id);
        }
      };
    }
    return () => {
      window.removeEventListener("hashchange", restoreHash);
      channel?.close();
      channelRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.history.replaceState(null, "", `#${activeSlide.id}`);
    publishPresenterSlideId(activeSlide.id, channelRef.current);
  }, [activeSlide.id, ready]);

  useEffect(() => {
    const element = dialogRef.current;
    if (!element) return;
    if (dialog && !element.open) element.showModal();
    if (!dialog && element.open) element.close();
  }, [dialog]);

  useEffect(() => {
    const update = () => setFullscreen(Boolean(document.fullscreenElement));
    update();
    document.addEventListener("fullscreenchange", update);
    return () => document.removeEventListener("fullscreenchange", update);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
      setNotice("");
    } catch {
      setNotice("Fullscreen is unavailable in this browser window.");
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.defaultPrevented
      ) {
        return;
      }
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.closest("input, textarea, select") || target.isContentEditable)
      ) {
        return;
      }
      if (dialog) {
        if (event.key === "Escape") {
          event.preventDefault();
          setDialog(null);
        }
        return;
      }
      switch (event.key.toLowerCase()) {
        case "arrowright":
        case "n":
          setActiveIndex((index) => Math.min(index + 1, slides.length - 1));
          break;
        case "arrowleft":
        case "p":
          setActiveIndex((index) => Math.max(index - 1, 0));
          break;
        case "home":
          setActiveIndex(0);
          break;
        case "end":
          setActiveIndex(slides.length - 1);
          break;
        case "o":
          setDialog("overview");
          break;
        case "s":
          setDialog("notes");
          break;
        case "f":
          void toggleFullscreen();
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [dialog, toggleFullscreen]);

  const openPresenterNotes = () => {
    publishPresenterSlideId(activeSlide.id, channelRef.current);
    const existing = notesWindowRef.current;
    const notesWindow =
      existing && !existing.closed
        ? existing
        : window.open(
            `/speaker-notes#${activeSlide.id}`,
            "ai-writing-speaker-notes",
            "popup,width=760,height=920",
          );
    if (!notesWindow) {
      setNotice(
        "The presenter window was blocked. Allow pop-ups or use Notes here.",
      );
      return;
    }
    notesWindowRef.current = notesWindow;
    notesWindow.focus();
    setNotice("");
  };

  return (
    <main className="deck-app">
      <header className="deck-toolbar">
        <span className="deck-brand">AI × Research writing</span>
        <button
          className="icon-button"
          type="button"
          aria-label="Slide overview"
          title="Slide overview (O)"
          aria-haspopup="dialog"
          onClick={() => setDialog("overview")}
        >
          <LayoutGrid size={18} aria-hidden="true" />
        </button>
        <div className="toolbar-actions">
          {activeSlide.prompt ? (
            <button
              className="toolbar-button"
              type="button"
              onClick={() => setDialog("prompt")}
              aria-haspopup="dialog"
            >
              <Copy size={15} aria-hidden="true" />
              <span>Prompt</span>
            </button>
          ) : null}
          <button
            className="toolbar-button"
            type="button"
            onClick={() => setDialog("notes")}
            title="Speaker notes (S)"
            aria-haspopup="dialog"
          >
            <NotebookTabs size={17} aria-hidden="true" />
            <span>Notes</span>
          </button>
          <button
            className="icon-button"
            type="button"
            onClick={openPresenterNotes}
            aria-label="Open presenter window"
            title="Open presenter window"
          >
            <Presentation size={18} aria-hidden="true" />
          </button>
          <button
            className="icon-button"
            type="button"
            onClick={toggleFullscreen}
            aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            title={fullscreen ? "Exit fullscreen (F)" : "Enter fullscreen (F)"}
          >
            {fullscreen ? (
              <Minimize size={18} aria-hidden="true" />
            ) : (
              <Expand size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <section
        className="deck-stage"
        aria-label={`Slide ${activeIndex + 1}: ${activeSlide.title}`}
      >
        <SlideContent
          slide={activeSlide}
          index={activeIndex}
          total={slides.length}
        />
      </section>

      <footer className="deck-controls">
        <div className="control-cluster">
          <button
            className="nav-button"
            type="button"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex((index) => Math.max(index - 1, 0))}
            aria-label="Previous slide"
            title="Previous slide (← / P)"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            <span>Previous</span>
          </button>
          <button
            className="nav-button"
            type="button"
            disabled={activeIndex === slides.length - 1}
            onClick={() =>
              setActiveIndex((index) => Math.min(index + 1, slides.length - 1))
            }
            aria-label="Next slide"
            title="Next slide (→ / N)"
          >
            <span>Next</span>
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <nav className="slide-dots" aria-label="Slide progress">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className="slide-dot"
              type="button"
              data-active={index === activeIndex}
              aria-current={index === activeIndex ? "step" : undefined}
              aria-label={`Slide ${index + 1}: ${slide.shortTitle}`}
              title={`${index + 1}. ${slide.title}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </nav>
        <span className="slide-counter" aria-live="polite" aria-atomic="true">
          {String(activeIndex + 1).padStart(2, "0")} / {slides.length}
        </span>
      </footer>
      <div className="deck-notice" role="status">
        {notice}
      </div>

      <dialog
        ref={dialogRef}
        className={`deck-dialog ${dialog === "overview" ? "overview-dialog" : ""}`}
        aria-labelledby="deck-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          setDialog(null);
        }}
      >
        <div className="dialog-heading">
          <h2 id="deck-dialog-title">
            {dialog === "overview"
              ? "Slide overview"
              : dialog === "prompt"
                ? "Try this prompt"
                : "Speaker notes"}
          </h2>
          <button
            className="dialog-close icon-button"
            type="button"
            aria-label="Close dialog"
            onClick={() => setDialog(null)}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="dialog-body">
          {dialog === "overview" ? (
            <div className="overview-sections">
              {sections.map((section) => (
                <section className="overview-section" key={section}>
                  <h3>{section}</h3>
                  <ol className="overview-list">
                    {slides.map((slide, index) =>
                      slide.section === section ? (
                        <li key={slide.id}>
                          <button
                            className="overview-slide"
                            type="button"
                            data-active={index === activeIndex}
                            aria-current={
                              index === activeIndex ? "step" : undefined
                            }
                            onClick={() => {
                              setActiveIndex(index);
                              setDialog(null);
                            }}
                          >
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <strong>{slide.title}</strong>
                          </button>
                        </li>
                      ) : null,
                    )}
                  </ol>
                </section>
              ))}
            </div>
          ) : dialog === "notes" ? (
            <SlideNotes slide={activeSlide} />
          ) : dialog === "prompt" && activeSlide.prompt ? (
            <PromptCopy key={activeSlide.id} prompt={activeSlide.prompt} />
          ) : null}
        </div>
      </dialog>
    </main>
  );
}

function PromptCopy({ prompt }: { prompt: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  return (
    <section className="prompt-copy">
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

function SlideNotes({ slide }: { slide: Slide }) {
  return (
    <>
      <p className="notes-section">{slide.section}</p>
      <h3 className="notes-title">{slide.title}</h3>
      <p className="notes-takeaway">{slide.takeaway}</p>
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
      {slide.prompt ? (
        <PromptCopy key={slide.id} prompt={slide.prompt} />
      ) : null}
    </>
  );
}
