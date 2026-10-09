import {
  ArrowDown,
  ArrowRight,
  Check,
  FileText,
  FolderOpen,
} from "lucide-react";
import { ResearchContent } from "./research-content";
import { TakeawayContent } from "./slide-takeaway";
import type {
  ComparisonText,
  Slide,
  SlideBody,
  SlidePoint,
} from "./slide-types";

export function SlideContent({
  slide,
  index,
  total,
}: {
  slide: Slide;
  index: number;
  total: number;
}) {
  return (
    <article
      className={`slide slide-${slide.body.kind}`}
      aria-label={`Slide ${index + 1} of ${total}`}
    >
      <header className="slide-heading">
        <div className="slide-eyebrow">
          <span className="section-marker" />
          <span>{slide.section}</span>
          <span className="eyebrow-divider">/</span>
          <span>
            {slide.pitfall
              ? `Pitfall ${String(slide.pitfall).padStart(2, "0")}`
              : `${String(index + 1).padStart(2, "0")}`}
          </span>
        </div>
        <h1>{slide.title}</h1>
        <p className="slide-subtitle">{slide.subtitle}</p>
      </header>
      <div className="slide-body">
        <Body body={slide.body} />
      </div>
      <footer className="slide-footer">
        <div className="takeaway">
          <span>{slide.pitfall ? "The check" : "In practice"}</span>
          <p>
            <TakeawayContent takeaway={slide.takeaway} />
          </p>
        </div>
      </footer>
    </article>
  );
}

function Points({
  points,
  className = "",
}: {
  points: SlidePoint[];
  className?: string;
}) {
  return (
    <ol className={`numbered-points ${className}`}>
      {points.map((point, index) => (
        <li key={point.title}>
          <span className="point-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h2>{point.title}</h2>
            <p>{point.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Comparison({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: ComparisonText;
  after: ComparisonText;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className="comparison">
      <section className="comparison-before">
        <span className="content-label">{beforeLabel}</span>
        <p>
          {typeof before === "string" ? (
            before
          ) : (
            <>
              {before.lead}
              <strong className="weak-transition">{before.emphasis}</strong>
              {before.tail}
            </>
          )}
        </p>
      </section>
      <div className="comparison-arrow">
        <ArrowRight aria-hidden="true" />
      </div>
      <section className="comparison-after">
        <span className="content-label">{afterLabel}</span>
        <p>
          {typeof after === "string" ? (
            after
          ) : (
            <>
              {after.lead}
              <mark className="logical-connection">{after.emphasis}</mark>
              {after.tail}
            </>
          )}
        </p>
      </section>
    </div>
  );
}

function Sequence({
  items,
  corrected = false,
}: {
  items: string[];
  corrected?: boolean;
}) {
  return (
    <ol className={`sequence ${corrected ? "sequence-corrected" : ""}`}>
      {items.map((item, index) => (
        <li key={item}>
          <span className="sequence-index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
          {index < items.length - 1 ? (
            <ArrowRight className="sequence-arrow" aria-hidden="true" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function Body({ body }: { body: SlideBody }) {
  if (body.kind === "research") return <ResearchContent body={body} />;
  switch (body.kind) {
    case "source":
      return (
        <div className="source-layout">
          <div className="source-editor">
            <div className="editor-caption">
              <FileText size={16} aria-hidden="true" />
              <span>manuscript.tex</span>
              <span className="editor-language">LaTeX source</span>
            </div>
            <div className="source-lines">
              {body.lines.map((line, index) => (
                <div
                  className={`source-line ${line ? "" : "source-blank"}`}
                  key={line}
                >
                  <span>{82 + index}</span>
                  <code>{line || " "}</code>
                </div>
              ))}
            </div>
            <div className="editor-footnote">
              <Check size={15} aria-hidden="true" />
              One sentence = one source line
            </div>
          </div>
          <Points points={body.points} className="source-points" />
        </div>
      );
    case "reasons":
      return (
        <div className="reasons-layout">
          <div className="margin-statement">
            <span className="content-label">Outline + prose</span>
            <p>
              Keep intention
              <br />
              in view.
            </p>
            <span className="margin-detail">
              LaTeX comments, immediately above each paragraph.
            </span>
          </div>
          <Points points={body.points} />
        </div>
      );
    case "workflow":
      return (
        <div className="workflow-layout">
          <div className="model-recommendation">
            <span className="content-label">Our OpenAI workflow</span>
            <h2>{body.recommendation}</h2>
            <p>{body.context}</p>
          </div>
          <div className="workflow-steps">
            {body.steps.map((step, index) => (
              <section key={step.title}>
                <span className="step-label">
                  {String(index + 1).padStart(2, "0")}
                  {index < body.steps.length - 1 ? (
                    <ArrowRight aria-hidden="true" />
                  ) : (
                    <Check aria-hidden="true" />
                  )}
                </span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </section>
            ))}
          </div>
        </div>
      );
    case "comparisons":
      return (
        <div>
          <table className="style-table">
            <thead>
              <tr>
                <th scope="col">Verbose or fancy</th>
                <th scope="col">Simple and direct</th>
              </tr>
            </thead>
            <tbody>
              {body.rows.map((row) => (
                <tr key={row.before}>
                  <td>{row.before}</td>
                  <td>{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "context":
      return (
        <div className="context-layout">
          <section className="research-materials">
            <span className="content-label">The paper draws on</span>
            {body.materials.map((material) => (
              <div className="material" key={material.title}>
                <FolderOpen aria-hidden="true" />
                <div>
                  <h2>{material.title}</h2>
                  <p>{material.text}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="context-arrangements">
            <span className="content-label">Two workable arrangements</span>
            <Points points={body.arrangements} />
          </section>
        </div>
      );
    case "handoff":
      return (
        <div className="handoff-layout">
          <section className="paragraph-change">
            <span className="content-label">Paragraph 1 is edited</span>
            <div className="paragraph-original">
              <span>Originally</span>
              <p>{body.original}</p>
            </div>
            <ArrowDown aria-hidden="true" />
            <div className="paragraph-edited">
              <span>Now</span>
              <p>{body.edited}</p>
            </div>
          </section>
          <section className="paragraph-next">
            <span className="content-label">Paragraph 2 still begins</span>
            <blockquote>{body.next}</blockquote>
            <p className="annotation">{body.explanation}</p>
          </section>
        </div>
      );
    case "comparison":
      return (
        <div className="comparison-layout">
          <Comparison
            before={body.before}
            after={body.after}
            beforeLabel={body.beforeLabel}
            afterLabel={body.afterLabel}
          />
          {body.annotation ? (
            <p className="annotation">{body.annotation}</p>
          ) : null}
        </div>
      );
    case "sequence":
      return (
        <div className="sequence-layout">
          <section>
            <span className="content-label">{body.beforeLabel}</span>
            <Sequence items={body.before} />
          </section>
          <section>
            <span className="content-label accent-label">
              {body.afterLabel}
            </span>
            <Sequence items={body.after} corrected />
          </section>
          <p className="annotation">{body.explanation}</p>
        </div>
      );
    case "repair":
      return (
        <div className="repair-layout">
          <div className="repair-promise">
            <span className="content-label">Illustrative promise</span>
            <blockquote>{body.promise}</blockquote>
          </div>
          <div className="repair-structure">
            <div className="structure-before">
              <span className="content-label">Earlier structure</span>
              <p>{body.before.join(" → ")}</p>
            </div>
            <div className="structure-after">
              <span className="content-label accent-label">
                Visible in the revised text
              </span>
              <Sequence items={body.after} corrected />
            </div>
            <p className="annotation">{body.caption}</p>
          </div>
        </div>
      );
    case "distinctions":
      return (
        <div className="distinctions-layout">
          <div className="dense-sentence">
            <span className="content-label">One sentence, two conditions</span>
            <p>{body.sentence}</p>
          </div>
          <div className="distinct-cases">
            {body.cases.map((point, index) => (
              <section key={point.title}>
                <span className="case-number">Case {index + 1}</span>
                <h2>{point.title}</h2>
                <p>{point.text}</p>
              </section>
            ))}
          </div>
        </div>
      );
    case "prompt":
      return (
        <div className="review-layout">
          <div className="margin-statement">
            <span className="content-label">A repeatable review</span>
            <p>
              Find.
              <br />
              Repair.
              <br />
              Verify.
            </p>
            <span className="margin-detail">
              After a section draft or a substantive change.
            </span>
          </div>
          <Points points={body.steps} />
        </div>
      );
    case "revision":
      return (
        <div className="revision-layout">
          <Comparison
            before={body.before}
            after={body.after}
            beforeLabel="Before · causal claim"
            afterLabel="After · supported capability"
          />
          <p className="revision-meaning">{body.meaning}</p>
          <div className="guide-links">
            {body.guides.map((guide, index) => (
              <a
                href={guide.href}
                target="_blank"
                rel="noreferrer"
                key={guide.label}
              >
                <span>
                  {String(index + 1).padStart(2, "0")} / {guide.stage}
                </span>
                <strong>
                  {guide.label}
                  <ArrowRight size={18} aria-hidden="true" />
                </strong>
              </a>
            ))}
          </div>
        </div>
      );
  }
}
