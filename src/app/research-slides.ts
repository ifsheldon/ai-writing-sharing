import type { Slide } from "./slide-types";



const section =

 "Beyond Writing Assistance: Using AI Critically in Research Writing";

export const researchSlides: Slide[] = [

 {

  id: "thinking-partner",

  section,

  title: "Challenge the argument before polishing the prose",

  shortTitle: "AI as a thinking partner",

  subtitle: "Use AI to examine motivation, research gaps, and contributions.",

  body: {

   kind: "research",

   visual: "argument",

   points: [

    {

     title: "Motivation and gap",

     text: "Establish the problem and what existing work cannot address.",

    },

    {

     title: "Contributions and supporting evidence",

     text: "Distinguish the system contribution from claims that require evaluation evidence.",

    },

    {

     title: "Narrative flow",

     text: "Check whether each section supports the next.",

    },

   ],

   example:

    "Identify weaknesses in this introduction’s reasoning. Explain why they matter. Do not rewrite yet.",

  },

  takeaway:

   "Ask AI to critique your reasoning before improving your wording.",

  prompt:

   "Act as a critical visualization researcher. Review this introduction and identify weaknesses in the motivation, research gap, and contributions. Explain why each issue matters, ground it in the text, and distinguish missing information from established problems. Do not rewrite the text yet.",

  evidence: "Suggested research-writing workflow",

  notes: [

   "Before polishing an introduction, ask whether its argument works. In a visualization or HCI paper, that might mean asking why the task matters, what existing approaches leave unresolved, and why the proposed approach addresses that need.",

   "Keep the contribution claim tied to what the research actually establishes. Building a system does not by itself show that it is effective. The evaluation needs to support any effectiveness claim, and the writing should distinguish the artifact from the evidence about it. Ask AI to cite the passage or result behind its reading; then judge whether its critique is right or whether the manuscript is unclear.",

   "The diagram is a thinking aid, not a required paper structure. Separate diagnosis from rewriting so a fluent edit does not hide a weak argument. Presenter placeholder: add a brief real manuscript-revision example here if one is available. Next, we can apply evidence checks to prior work.",

  ],

  sources: [],

 },

 {

  id: "literature-synthesis",

  section,

  title: "Compare papers to build a synthesis",

  shortTitle: "Related-work synthesis",

  subtitle:

   "Move from individual summaries to relationships across research.",

  body: {

   kind: "research",

   visual: "matrix",

   points: [

    {

     title: "Use consistent dimensions",

     text: "Compare objectives, methods, contributions, and limitations.",

    },

    {

     title: "Distinguish gaps in reporting",

     text: "Separate stated limitations, inferred limitations, and unreported information.",

    },

    {

     title: "Verify proposed gaps",

     text: "A gap suggested by AI is a hypothesis to investigate.",

    },

   ],

   example:

    "Using only these papers, compare their methods and limitations. Support every cell with a source passage.",

  },

  takeaway:

   "Let AI organize the literature; verify the synthesis in the original papers.",

  prompt:

   "Using only the provided papers, create a comparison table covering their research objectives, methodologies, contributions, and limitations. Identify common themes and meaningful differences. Include source evidence and passage locations for every comparison, and mark missing information as unknown. Do not infer that an unreported capability is absent. Treat proposed research gaps as hypotheses requiring a broader literature search.",

  evidence: "Illustrative matrix · OpenScholar (Nature, 2026)",

  notes: [

   "A folder of summaries is not yet related work. A comparison matrix helps us see how papers relate across objectives, methods, contributions, and limitations instead of describing each one in isolation.",

   "The three rows here are hypothetical teaching examples, not claims about real papers. Keep three limitation categories separate: what the authors explicitly acknowledge, what we infer from the paper, and what it does not report. Unreported information is unknown, not evidence that a capability is absent. Ask AI for passages supporting each entry, then check those passages in the original.",

   "OpenScholar is Akari Asai and colleagues’ 2026 Nature paper, “Synthesizing scientific literature with retrieval-augmented language models” (DOI 10.1038/s41586-025-10072-4). It evaluates a particular retrieval-augmented system; it does not experimentally validate this seminar’s comparison workflow. Treat AI-suggested gaps as hypotheses and test them with a broader literature search. Next, we’ll see how a rewrite can overstate measured results.",

  ],

  sources: [

   {

    label: "OpenScholar: scientific literature synthesis",

    href: "https\://doi.org/10.1038/s41586-025-10072-4",

   },

  ],

 },

 {

  id: "claim-verification",

  section,

  title: "Check the claim against the measured outcome",

  shortTitle: "Scientific claim checks",

  subtitle:

   "A fluent rewrite can introduce statistical, causal, or broader claims.",

  body: {

   kind: "research",

   visual: "claims",

   points: [

    {

     title: "Statistical interpretation",

     text: "Statistical significance needs a supporting test.",

    },

    {

     title: "Measured outcomes",

     text: "Task time does not establish decision accuracy.",

    },

    {

     title: "Scope and quantities",

     text: "Do not infer unmeasured outcomes from task time.",

    },

   ],

   example:

    "Audit this paragraph against the results. Flag stronger claims, changed quantities, and unmeasured outcomes.",

  },

  takeaway:

   "Improve the communication of findings while preserving what they mean.",

  prompt:

   "Review this paragraph against the provided evaluation results. Identify unsupported claims, causal language, altered quantities or denominators, and overgeneralizations. For each concern, identify the original wording and relevant evidence. Do not strengthen the findings beyond the available evidence. Preserve the exact measured outcomes and study conditions.",

  evidence: "Illustrative evaluation and rewrite · no test implied",

  notes: [

   "This is an illustrative example, not a result from our group. The stated finding is only that mean task time was 194 seconds with the system and 263 seconds with the baseline. That supports describing a difference in observed average time; these numbers alone do not establish statistical significance.",

   "The problematic rewrite makes three jumps. It says “significantly” without a reported test, adds decision-making accuracy even though that outcome was not measured, and turns one task-time result into a broad analytical-performance claim. The better version reports the comparison and quantities without adding a test result or an outcome.",

   "In a real paper, inspect the analysis and study conditions before making stronger claims, and preserve the measure and comparison exactly. Presenter placeholder: if useful, discuss a real manuscript revision where a claim was narrowed to match its evaluation. Next, we’ll apply evidence checks to AI-generated criticism itself.",

  ],

  sources: [],

 },

 {

  id: "critical-review",

  section,

  title: "Review through distinct research perspectives",

  shortTitle: "Critical paper review",

  subtitle:

   "Ask focused questions and validate the concerns before revising.",

  body: {

   kind: "research",

   visual: "review",

   points: [

    {

     title: "Separate the perspectives",

     text: "Novelty, methodology, evaluation, clarity, and limitations.",

    },

    {

     title: "Ground the feedback",

     text: "Tie each concern to a passage, figure, method, or result.",

    },

    {

     title: "Evaluate before acting",

     text: "Supported: revise; unclear: clarify; unsupported: reject; missing: investigate.",

    },

   ],

   example:

    "Identify up to three consequential concerns. Cite manuscript evidence; separate weaknesses from clarification questions.",

  },

  takeaway:

   "Use AI to uncover potential weaknesses; judge the feedback yourself.",

  prompt:

   "Act as a skeptical CHI/IEEE VIS reviewer. Evaluate this paper’s novelty, methodology, and evaluation separately, using only the evidence available in the manuscript and supplied related work. If the available material is insufficient to assess novelty, state that explicitly. Identify up to three consequential weaknesses, without inventing issues to fill a quota. For each concern, cite supporting manuscript evidence, explain why it matters, and suggest a concrete improvement. Distinguish supported weaknesses from questions requiring clarification. Do not predict acceptance or rewrite the manuscript yet.",

  evidence: "Suggested review workflow",

  notes: [

   "A vague request to say whether a paper is good can produce equally vague feedback. Focused perspectives make critique easier to inspect: novelty asks how the contribution differs from prior work; methodology and evaluation ask whether the approach and evidence support the claims; clarity and limitations reveal what readers may misunderstand or what the study cannot establish.",

   "For each criticism, ask for a manuscript passage, figure, method, or result. Then choose an action: valid criticism means revise; a misunderstanding caused by unclear writing means clarify; an unsupported criticism means reject it; missing information means investigate. These are decisions for the researchers, not automatic instructions to the writing agent.",

   "The prompt still asks for up to three consequential issues and explicitly says not to invent weaknesses to fill the number. Its output is a set of hypotheses to check, not a human review or a prediction of acceptance. Next, the same evidence discipline applies to references: a real paper can still be cited inaccurately.",

  ],

  sources: [],

 },

 {

  id: "citation-verification",

  section,

  title: "Verify the paper and the claim it supports",

  shortTitle: "Citation verification",

  subtitle:

   "A convincing reference can be fabricated, inaccurate, or misapplied.",

  body: {

   kind: "research",

   visual: "citations",

   points: [

    {

     title: "Reference hallucination",

     text: "The publication does not exist, or the reference includes fabricated details.",

    },

    {

     title: "Citation misattribution",

     text: "The paper exists but does not support the claim assigned to it.",

    },

    {

     title: "Match the wording to evidence",

     text: "Read the original and match the claim to its evidence.",

    },

   ],

   example:

    "“Consistently improves analytical accuracy”: did each cited study measure and demonstrate that outcome?",

  },

  takeaway: "AI-suggested references are candidates until you verify them.",

  prompt:

   "For every literature claim in this paragraph, identify the original publication and supporting passage. Check bibliographic metadata, measured outcomes, study conditions, and whether the wording generalizes beyond the evidence. Mark unsupported or unverifiable claims explicitly. Do not fabricate references or quotations. I will inspect the original sources before accepting the claims.",

  evidence: "Illustrative claim · Walters & Wilder (2023)",

  notes: [

   "Separate two failure modes. A reference hallucination is a nonexistent publication or fabricated bibliographic metadata. Citation misattribution is subtler: the paper is real, but it does not support the claim attached to it. Verifying a DOI or title only addresses the first problem.",

   "The accuracy claim in the example is hypothetical. A set of real papers may measure different outcomes or study conditions and still fail to support a broad sentence. Open the original paper and inspect the methods, results, and limitations; then narrow or remove the claim as needed.",

   "Walters and Wilder’s 2023 Scientific Reports study is titled “Fabrication and errors in the bibliographic citations generated by ChatGPT” (DOI 10.1038/s41598-023-41032-5). Their tested GPT-3.5 and GPT-4 outputs included fabricated citations and substantive errors in citations to real works. Those study-specific rates are not estimates for current models, and the paper motivates verification rather than validating a particular checking workflow. Next, we’ll put the checks into a researcher-led process.",

  ],

  sources: [

   {

    label:

     "Walters & Wilder (2023), Fabrication and errors in the bibliographic citations generated by ChatGPT",

    href: "https\://doi.org/10.1038/s41598-023-41032-5",

   },

  ],

 },

 {

  id: "manuscript-consistency",

  section,

  title: "Check consistency across the entire manuscript",

  shortTitle: "Manuscript-wide consistency",

  subtitle:

   "A paper can be well written locally but inconsistent across sections.",

  body: {

   kind: "research",

   visual: "manuscript",

   points: [

    {

     title: "Trace claims across sections",

     text: "Compare abstract and contributions; methodology and evaluation; results and discussion.",

    },

    {

     title: "Check every representation",

     text: "Align figures, captions, main text, and conclusions with the evidence.",

    },

   ],

   example:

    "Review the abstract, contributions, evaluation, discussion, and conclusion. Find inconsistent or unsupported claims, cite the passages, and suggest evidence-preserving corrections.",

  },

  takeaway:

   "Check consistency across the manuscript, not just within individual paragraphs.",

  prompt:

   "Review the abstract, contributions, evaluation, discussion, and conclusion of this manuscript. Identify claims that are inconsistent, unsupported, or expressed with different levels of certainty. For each issue, cite the relevant passages and suggest a correction that preserves the actual research findings.",

  evidence: "Illustrative cross-section claim check",

  notes: [

   "A paragraph can be clear and still make a claim that conflicts with another part of the paper. This matters in visualization and HCI, where the abstract, system contribution, study measures, figure captions, and discussion are often drafted or revised at different times.",

   "The diagram is illustrative: the abstract claims improved accuracy, but the evaluation measured only task completion time, while the conclusion adds usability and decision-making. Those claims may not be supported by the reported evaluation. We would need the study design and results before making any of them stronger or deciding what the actual outcome was.",

   "AI can help compare sections and point out different wording or certainty levels, but require the passages it is comparing and check them yourself. The prompt asks for a proposed correction that preserves the actual findings, not a more impressive story. Next, we bring the checks together in a practical, researcher-led workflow.",

  ],

  sources: [],

 },

 {

  id: "human-led-writing",

  section,

  title: "Keep scientific decisions with the researcher",

  shortTitle: "A human-led workflow",

  subtitle:

   "Iterate through critique, validation, revision, and verification.",

  body: {

   kind: "research",

   visual: "cycle",

   points: [

    {

     title: "Define and validate",

     text: "Own the argument, evidence, and decisions about feedback.",

    },

    {

     title: "Draft and review with AI",

     text: "Improve clarity and inspect the paper through different perspectives.",

    },

    {

     title: "Verify and finalize",

     text: "Verify final claims, evidence, citations, and interpretations.",

    },

   ],

   example:

    "Share only materials you are authorized to share with external AI tools, particularly unpublished manuscripts, participant data, and confidential review materials.",

  },

  takeaway:

   "Researchers remain responsible for the final claims, evidence, citations, and interpretations.",

  prompt:

   "Help me follow a human-led writing workflow: first state the intended argument and its evidence; critique the outline; let me validate the feedback; draft or revise the accepted changes; review consistency across sections, figures, and results; and flag claims, citations, and statistics for final verification. Preserve scientific meaning and identify unresolved questions. Check the target venue’s current AI-use and disclosure instructions before submission.",

  evidence: "Workflow suggestion · check the target venue’s current policy",

  notes: [

   "This workflow keeps the researcher in the decision loop: define the argument and evidence, ask AI to critique or help revise, check the suggestions, then verify the final paper. The loop matters because a useful revision can expose a new inconsistency that deserves another pass.",

   "We remain responsible for the final claims, evidence, citations, and interpretations. AI may help compare a result with its caption or locate claims that differ across sections, but the researcher must inspect the source material and decide what the study supports.",

   "Use only materials you are authorized to share with external AI tools, particularly unpublished manuscripts, participant data, and confidential review materials. A file being accessible to us does not mean it is appropriate to upload. Consult the current instructions of the specific conference or journal: ACM’s authorship policy and IEEE’s author guidance take different approaches to AI use and disclosure, and policies can change.",

   "To close, invite the group to share one AI suggestion they accepted and one they rejected, with the reason for each. Presenter placeholder: add a short real manuscript-revision example here if available. The useful lesson is how evidence informed the decision, not whether the draft simply sounded better.",

  ],

  sources: [

   {

    label: "ACM Policy on Authorship (updated May 14, 2026)",

    href: "https\://prod-www\.acm\.bloomreach\.cloud/publications/policies/new-acm-policy-on-authorship",

   },

   {

    label: "IEEE submission policies",

    href: "https\://journals.ieeeauthorcenter.ieee.org/become-an-ieee-journal-author/publishing-ethics/guidelines-and-policies/submission-and-peer-review-policies/",

   },

  ],

 },

];
