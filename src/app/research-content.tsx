import {
  ArrowDown,
  ArrowRight,
  Check,
  FileText,
  Search,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { SlideBody } from "./slide-types";

type ResearchBody = Extract<SlideBody, { kind: "research" }>;

function Flow({
  items,
}: {
  items: { title: string; detail: string; human?: boolean }[];
}) {
  return (
    <ol className="research-flow">
      {items.map((item, index) => (
        <li key={item.title}>
          <div
            className={
              item.human ? "research-node human-node" : "research-node"
            }
          >
            {item.human === undefined ? (
              <Search size={20} aria-hidden="true" />
            ) : item.human ? (
              <UserRound size={20} aria-hidden="true" />
            ) : (
              <Sparkles size={20} aria-hidden="true" />
            )}
            <div>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </div>
          </div>
          {index < items.length - 1 && (
            <ArrowDown
              className="research-arrow"
              size={18}
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ol>
  );
}

export function ResearchContent({ body }: { body: ResearchBody }) {
  return (
    <div className="research-layout">
      <div className="research-copy">
        <ul>
          {body.points.map((point) => (
            <li key={point.title}>
              <h2>{point.title}</h2>
              <p>{point.text}</p>
            </li>
          ))}
        </ul>
        <div className="research-example">
          <span className="content-label">
            {body.visual === "cycle"
              ? "Confidentiality"
              : body.visual === "manuscript"
                ? "Practical prompt"
                : "Try this"}
          </span>
          <p>{body.example}</p>
        </div>
      </div>
      <figure className={`research-visual visual-${body.visual}`}>
        {body.visual === "argument" && (
          <>
            <figcaption>Interrogate the argument</figcaption>
            <Flow
              items={[
                { title: "Research problem", detail: "Why does this matter?" },
                {
                  title: "Research gap",
                  detail: "What cannot existing work address?",
                },
                {
                  title: "Proposed approach",
                  detail: "Why should this approach help?",
                },
                {
                  title: "Contributions",
                  detail: "What does the evidence establish?",
                },
              ]}
            />
          </>
        )}
        {body.visual === "matrix" && (
          <>
            <figcaption>From papers to relationships</figcaption>
            <div className="paper-input">
              <FileText />
              <span>A</span>
              <FileText />
              <span>B</span>
              <FileText />
              <span>C</span>
              <ArrowRight />
              <span>Extract</span>
            </div>
            <table>
              <caption>Hypothetical examples</caption>
              <thead>
                <tr>
                  <th>Paper</th>
                  <th>Focus / approach</th>
                  <th>Limitation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>A</th>
                  <td>
                    Understanding
                    <br />
                    LLM explanation
                  </td>
                  <td>Author-stated</td>
                </tr>
                <tr>
                  <th>B</th>
                  <td>
                    Critique
                    <br />
                    Guideline checks
                  </td>
                  <td>Researcher-inferred</td>
                </tr>
                <tr>
                  <th>C</th>
                  <td>
                    Authoring
                    <br />
                    Design assistance
                  </td>
                  <td>Not reported</td>
                </tr>
              </tbody>
            </table>
            <div className="research-result">
              <ArrowDown size={18} /> Themes: explain · critique · create
            </div>
            <p className="visual-note">
              Label each limitation: author-stated, researcher-inferred, or
              unreported (unknown, not absent).
            </p>
          </>
        )}
        {body.visual === "claims" && (
          <>
            <figcaption>Illustrative evaluation result</figcaption>
            <div className="manuscript-card supported">
              <span className="content-label">Measured outcome</span>
              <p>
                Participants averaged <strong>194 s</strong> with our system
                versus <strong>263 s</strong> with the baseline.
              </p>
            </div>
            <ArrowDown className="research-arrow" size={18} />
            <div className="manuscript-card unsupported">
              <span className="content-label">Problematic AI rewrite</span>
              <p>
                Our system <mark>significantly improves analytical performance</mark>
                and <mark>decision-making accuracy</mark>.
              </p>
            </div>
            <ArrowDown className="research-arrow" size={18} aria-hidden="true" />
            <div className="manuscript-card supported revised-claim">
              <span className="content-label">Better revision</span>
              <p>
                Participants completed tasks faster with our system than with
                the baseline (194 seconds versus 263 seconds on average).
              </p>
            </div>
            <p className="visual-note">
              No test reported; decision accuracy was not measured.
            </p>
          </>
        )}
        {body.visual === "review" && (
          <>
            <figcaption>Five perspectives, one manuscript</figcaption>
            <div className="review-perspectives">
              {[
                "Novelty",
                "Methodology",
                "Evaluation",
                "Clarity",
                "Limitations",
              ].map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
            <div className="review-manuscript">
              <FileText size={32} />
              <strong>Research manuscript</strong>
            </div>
            <ArrowDown className="research-arrow" size={18} />
            <Flow
              items={[
                {
                  title: "Ground the concern",
                  detail: "Passage, figure, method, or result",
                },
                {
                  title: "Researcher validates",
                  detail: "Revise · clarify · reject · investigate",
                  human: true,
                },
                {
                  title: "Learn from the critique",
                  detail: "Check what the manuscript actually supports",
                },
              ]}
            />
          </>
        )}
        {body.visual === "citations" && (
          <>
            <figcaption>Two checks before citing</figcaption>
            <Flow
              items={[
                {
                  title: "AI-suggested citation",
                  detail: "Treat as a candidate",
                },
                {
                  title: "Reference hallucination?",
                  detail: "Paper or metadata does not exist",
                },
                {
                  title: "Citation misattribution?",
                  detail: "Real paper, but claim is unsupported",
                },
                {
                  title: "Verify the original",
                  detail: "Match wording to findings and conditions",
                  human: true,
                },
              ]}
            />
            <div className="citation-stop">
              Existence is not support: inspect the cited paper itself.
            </div>
          </>
        )}
        {body.visual === "manuscript" && (
          <>
            <figcaption>Follow each claim through the paper</figcaption>
            <ol className="manuscript-sequence" aria-label="Manuscript sections">
              {["Abstract", "Contributions", "Evaluation", "Discussion", "Conclusion"].map(
                (label, index) => (
                  <li key={label}>
                    <span>{label}</span>
                    {index < 4 ? <ArrowRight size={15} aria-hidden="true" /> : null}
                  </li>
                ),
              )}
            </ol>
            <div className="consistency-examples">
              <div>
                <span>Abstract</span>
                <p>“Our system improves analytical accuracy.”</p>
              </div>
              <div className="consistency-gap">
                <span>Evaluation</span>
                <p>Only task completion time was measured.</p>
              </div>
              <div className="consistency-gap">
                <span>Conclusion</span>
                <p>“Improves usability and decision-making.”</p>
              </div>
            </div>
            <p className="visual-note">
              The reported measure does not establish accuracy, usability, or
              decision quality.
            </p>
          </>
        )}
        {body.visual === "cycle" && (
          <>
            <figcaption>
              Scientific decisions stay with the researcher
            </figcaption>
            <Flow
              items={[
                {
                  title: "1  Define the argument",
                  detail: "Problem · contribution · evidence",
                  human: true,
                },
                {
                  title: "2  Critique the outline",
                  detail: "Find gaps and challenge assumptions",
                  human: false,
                },
                {
                  title: "3  Validate the feedback",
                  detail: "Accept, reject, or refine ↺ critique",
                  human: true,
                },
                {
                  title: "4  Draft and revise",
                  detail: "Clarity with meaning preserved",
                  human: false,
                },
                {
                  title: "5  Review critically",
                  detail: "Perspectives and consistency ↺ revise",
                  human: false,
                },
                {
                  title: "6  Verify and finalize",
                  detail: "Claims · citations · venue policy",
                  human: true,
                },
              ]}
            />
          </>
        )}
      </figure>
    </div>
  );
}
