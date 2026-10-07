import { slides } from "./deck-data";
import type { SlideId } from "./slide-types";

export const PRESENTER_NOTES_CHANNEL = "ai-writing-presenter";
export const PRESENTER_NOTES_STORAGE_KEY = "ai-writing-presenter-slide";
export const PRESENTER_NOTES_REQUEST = "request-current-slide";

export function isSlideId(value: unknown): value is SlideId {
  return (
    typeof value === "string" && slides.some((slide) => slide.id === value)
  );
}

export function readSlideIdFromHash(): SlideId | null {
  try {
    const value = decodeURIComponent(window.location.hash.slice(1));
    return isSlideId(value) ? value : null;
  } catch {
    return null;
  }
}

export function readPresenterSlideId(): SlideId | null {
  try {
    const value = window.localStorage.getItem(PRESENTER_NOTES_STORAGE_KEY);
    return isSlideId(value) ? value : null;
  } catch {
    return null;
  }
}

export function openPresenterChannel(): BroadcastChannel | null {
  try {
    return new BroadcastChannel(PRESENTER_NOTES_CHANNEL);
  } catch {
    return null;
  }
}

export function publishPresenterSlideId(
  id: SlideId,
  channel: BroadcastChannel | null,
) {
  try {
    window.localStorage.setItem(PRESENTER_NOTES_STORAGE_KEY, id);
  } catch {
    // BroadcastChannel can still synchronize windows when storage is unavailable.
  }
  channel?.postMessage(id);
}

export async function copyPromptText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
