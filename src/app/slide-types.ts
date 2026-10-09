export type SlideSection =
  | "General suggestions"
  | "Writing pitfalls"
  | "Applying the guides";

export type SlideId =
  | "source-lines"
  | "paragraph-outline"
  | "ultra-review"
  | "plain-writing"
  | "research-context"
  | "surrounding-argument"
  | "explain-components"
  | "useful-examples"
  | "logical-links"
  | "reader-order"
  | "structural-repair"
  | "reader-context"
  | "separate-cases"
  | "explain-qualifications"
  | "relevant-qualifications"
  | "review-draft"
  | "revision-editing";

export type SlidePoint = { title: string; text: string };
export type SlideSource = { label: string; href: string };
export type SlideTakeaway = string | { lead: string; link: SlideSource };
export type ComparisonPair = { before: string; after: string };

export type SlideBody =
  | { kind: "source"; lines: string[]; points: SlidePoint[] }
  | { kind: "reasons"; points: SlidePoint[] }
  | {
      kind: "workflow";
      recommendation: string;
      context: string;
      steps: SlidePoint[];
    }
  | { kind: "comparisons"; rows: ComparisonPair[] }
  | { kind: "context"; materials: SlidePoint[]; arrangements: SlidePoint[] }
  | {
      kind: "handoff";
      original: string;
      edited: string;
      next: string;
      explanation: string;
    }
  | {
      kind: "comparison";
      before: string;
      after: string;
      beforeLabel?: string;
      afterLabel?: string;
      annotation?: string;
    }
  | {
      kind: "missing";
      original: string[];
      summary: string[];
      explanation: string;
    }
  | { kind: "sequence"; before: string[]; after: string[]; explanation: string }
  | {
      kind: "repair";
      promise: string;
      before: string[];
      after: string[];
      caption: string;
    }
  | { kind: "distinctions"; sentence: string; cases: SlidePoint[] }
  | { kind: "prompt"; steps: SlidePoint[] }
  | {
      kind: "revision";
      before: string;
      after: string;
      meaning: string;
      guides: (SlideSource & { stage: string })[];
    };

export type Slide = {
  id: SlideId;
  section: SlideSection;
  title: string;
  shortTitle: string;
  subtitle: string;
  pitfall?: number;
  body: SlideBody;
  takeaway: SlideTakeaway;
  prompt?: string;
  evidence: string;
  notes: string[];
  sources: SlideSource[];
};
