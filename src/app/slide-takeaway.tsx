import type { SlideTakeaway } from "./slide-types";

export function TakeawayContent({ takeaway }: { takeaway: SlideTakeaway }) {
  if (typeof takeaway === "string") return takeaway;

  return (
    <>
      {takeaway.lead}{" "}
      <a
        className="takeaway-link"
        href={takeaway.link.href}
        target="_blank"
        rel="noreferrer"
      >
        {takeaway.link.label}
      </a>
      .
    </>
  );
}
