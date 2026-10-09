import { researchSlides } from "./research-slides";
import type { Slide } from "./slide-types";

export const slides: Slide[] = [
  {
    id: "source-lines",
    section: "General suggestions",
    title: "Give every sentence its own source line",
    shortTitle: "One sentence per line",
    subtitle: "Make comments precise and sentence edits easy to inspect.",
    body: {
      kind: "source",
      lines: [
        "The overview shows how response times vary across groups.",
        "Selecting a group highlights its observations in the scatterplot.",
        "",
        "The detail view shows the selected observations over time.",
      ],
      points: [
        {
          title: "Point to a sentence",
          text: "A source line gives feedback a clear target.",
        },
        {
          title: "Read the change",
          text: "A diff makes individual sentence edits visible.",
        },
      ],
    },
    takeaway:
      "One physical line per prose sentence. A blank line between paragraphs.",
    prompt:
      "Write each prose sentence on its own physical line in the `.tex` source, do not wrap it across lines, and separate paragraphs with a blank line.",
    evidence: "Illustrative TeX source",
    notes: [
      "Start directly with this practical suggestion. There are 17 content slides: eight minutes for general suggestions, fourteen for the ten pitfalls, and three for applying the guides. Allow up to five additional minutes for discussion.",
      "Put each prose sentence on one physical line in the TeX source. Feedback such as “the sentence at line 82 is unclear” can identify a sentence, and a diff makes sentence edits easier to inspect.",
      "This changes source formatting, not the typeset PDF. Line numbers can change after edits, so use the current file when giving feedback.",
      "Keep equations, tables, and other structured environments in their appropriate source format. Configure any formatter to preserve the sentence-per-line prose layout.",
    ],
    sources: [],
  },
  {
    id: "paragraph-outline",
    section: "General suggestions",
    title: "Keep the intended core ideas beside the prose",
    shortTitle: "Outline beside the text",
    subtitle:
      "Write each paragraph’s outline in LaTeX comments before drafting.",
    body: {
      kind: "reasons",
      points: [
        {
          title: "State your intention",
          text: "Make each paragraph’s main point, emphasis, and role explicit.",
        },
        {
          title: "Keep ideas in sync",
          text: "Update the nearby outline when the argument changes.",
        },
        {
          title: "Compare intention and result",
          text: "Check for missing points, misplaced emphasis, and detours.",
        },
      ],
    },
    takeaway:
      "Read the outline and paragraph together to check what the text actually conveys.",
    prompt:
      "Before drafting, write each paragraph's main point, intended emphasis, and logical link to the next paragraph in LaTeX comments immediately above it, check the outline's flow, keep the comments synchronized when the ideas change, and verify that the prose conveys the stated message and emphasis.",
    evidence: "Writing workflow suggestion",
    notes: [
      "There are three reasons to keep an outline beside its paragraph. First, the agent cannot perfectly infer what you want to convey or emphasize. State the main point, emphasis, and logical role before drafting.",
      "Second, core ideas can change during revision. A separate outline file requires maintaining those ideas in two places, making divergence easier. Keep the comments near the prose and update both when the ideas change.",
      "Third, reading the outline alongside the paragraph exposes missing points, misplaced emphasis, and unnecessary detours. Fluent text can still fail to convey the intended message.",
      "The comments should explain what each paragraph establishes and how it connects to the next. Check the flow before expanding the outline into prose.",
    ],
    sources: [
      {
        label: "Writing pitfalls",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md",
      },
    ],
  },
  {
    id: "ultra-review",
    section: "General suggestions",
    title: "Keep your attention on the writing",
    shortTitle: "Ultra and independent review",
    subtitle:
      "Let the agent organize delegation and review while you develop the argument.",
    body: {
      kind: "workflow",
      recommendation: "GPT-6 Astra Ultra",
      context:
        "In ChatGPT/Codex, Ultra models can initiate suitable delegation without a separate request.",
      steps: [
        {
          title: "Draft",
          text: "Give the writing agent your intended message and evidence.",
        },
        {
          title: "Review",
          text: "A subagent with fresh context checks the text against the guidelines.",
        },
        {
          title: "Improve",
          text: "The writing agent addresses supported findings before returning the draft.",
        },
      ],
    },
    takeaway:
      "Set the review expectation once. Stay focused on the argument and final content.",
    prompt:
      "After drafting or revising, have a subagent with fresh context review the text against our writing guidelines, then improve the draft based on its findings.",
    evidence: "OpenAI workflow recommendation",
    notes: [
      "For this OpenAI workflow, recommend an Ultra model such as GPT-6 Astra Ultra. In ChatGPT/Codex, other intelligence levels require an explicit request to use subagents, while Ultra models can delegate suitable work on their own.",
      "The practical benefit is preserving your train of thought. Remembering to request subagents shifts attention from the paper to managing agents. Set the expectation once and let the agent organize suitable review work as writing proceeds.",
      "Have a reviewer with fresh context check the draft and return findings to the writing agent. The writer can address gaps, unclear explanations, and other supported findings before returning the revised text.",
      "Keep your attention on the argument, emphasis, and final content. The linked OpenAI documentation describes requested and proactive delegation in ChatGPT Work.",
    ],
    sources: [
      {
        label: "OpenAI subagent documentation",
        href: "https://learn.chatgpt.com/docs/agent-configuration/subagents",
      },
    ],
  },
  {
    id: "plain-writing",
    section: "General suggestions",
    title: "Use plain words and keep the meaning",
    shortTitle: "Plain words, same meaning",
    subtitle:
      "Remove verbal overhead while preserving quantities, conditions, and uncertainty.",
    body: {
      kind: "comparisons",
      rows: [
        {
          before:
            "The interface makes use of color in order to communicate the category to which each node belongs.",
          after: "The interface uses color to show each node's category.",
        },
        {
          before:
            "In the course of the study, six of the ten participants made use of the history view for the purpose of revisiting previous selections.",
          after:
            "During the study, six of the ten participants used the history view to revisit previous selections.",
        },
        {
          before:
            "This representation may facilitate the identification of outliers, but it does not provide information about the causes of those outliers.",
          after:
            "This representation may help identify outliers, but it provides no information about their causes.",
        },
      ],
    },
    takeaway: {
      lead: "Ask the writing agent to follow the",
      link: {
        label: "VIS Writing Style",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/main/vis-writing-style.md",
      },
    },
    prompt:
      "Read `vis-writing-guidelines/vis-writing-style.md` and follow it when drafting or editing, using plain words and concrete actions while preserving the original claims, quantities, conditions, and uncertainty.",
    evidence: "Illustrative pairs with the same meaning",
    notes: [
      "Ask the agent to follow VIS Writing Style. Plain writing should retain the actor, action, objects, quantities, conditions, and strength of the claim.",
      "The three visible pairs preserve meaning. Six of ten remains six of ten, and possible help identifying outliers must not become a guarantee. The lack of causal information remains explicit.",
      "Another pair: “The interface provides users with the capability to conduct a side-by-side comparison of two versions of a chart.” becomes “The interface lets users compare two chart versions side by side.”",
      "Another pair: “Users can specify a time interval for the purpose of restricting the displayed observations to those recorded within that interval.” becomes “Users can select a time interval to show only observations recorded within it.”",
      "These are newly written teaching examples inspired by the style guide. Some guide examples also replace vague claims with specific capabilities or findings. Those changes require knowing what the system does or what the study found and cannot be justified by style alone.",
    ],
    sources: [
      {
        label: "VIS Writing Style",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-style.md",
      },
    ],
  },
  {
    id: "research-context",
    section: "General suggestions",
    title: "Give the agent the context behind the paper",
    shortTitle: "Share the research context",
    subtitle:
      "Let it consult the materials that explain the method and support the results.",
    body: {
      kind: "context",
      materials: [
        {
          title: "Manuscript",
          text: "The argument and reported claims",
        },
        {
          title: "Implementation",
          text: "How the system works",
        },
        {
          title: "Study materials",
          text: "How the study was conducted",
        },
        {
          title: "Data and analysis",
          text: "What supports the results",
        },
      ],
      arrangements: [
        {
          title: "Keep them together",
          text: "Use one repository for the paper and related research materials.",
        },
        {
          title: "Provide their paths",
          text: "Identify separate folders and explain what each contains.",
        },
      ],
    },
    takeaway:
      "Record the locations in a short README so the context survives across sessions.",
    prompt:
      "Use the manuscript in [paper path], implementation in [code path], and study data and analysis in [study path] as context for writing, and consult the relevant materials when describing the method or reporting results.",
    evidence: "Writing workflow suggestion",
    notes: [
      "A repository or Overleaf project containing only TeX sources gives the agent the manuscript. Writing the paper also requires information from the implementation, user study data, study materials, and analysis scripts.",
      "These materials help the agent understand how the system works, how the study was conducted, and what supports the reported results. Help the writing agent help you by making the relevant information accessible.",
      "Either keep the paper, implementation, and related research materials in one repository, or provide paths to separate repositories and folders with a short explanation of each. Point to relevant code, data, or analysis when discussing a method or result.",
      "A short README in the paper project can record the locations across sessions. Tell the agent to consult the relevant materials when needed.",
    ],
    sources: [],
  },
  {
    id: "surrounding-argument",
    section: "Writing pitfalls",
    title: "Read the passage around every edit",
    shortTitle: "Check the surrounding argument",
    subtitle:
      "A clearer sentence can leave a broken reference in the next paragraph.",
    pitfall: 1,
    body: {
      kind: "handoff",
      original: "P1 explains differences in response times between groups.",
      edited: "P1 now describes the interface layout.",
      next: "These differences guide users toward groups for closer inspection.",
      explanation:
        "“These differences” no longer has an explanation to refer to.",
    },
    takeaway:
      "Read the preceding paragraph, the revised passage, and the following paragraph together.",
    evidence: "Illustrative example · Writing pitfall 1",
    notes: [
      "The next ten slides follow the writing guide’s order. Allow roughly 80–90 seconds per pitfall, spending longer on the structural repair and less on short sentence examples.",
      "A local edit can leave repetition, an ambiguous reference, a missing premise, or a broken transition elsewhere. P2 still refers to differences after P1 has changed to discuss the layout.",
      "Restore the relevant comparison or rewrite the handoff according to P2’s purpose. Replacing “these differences” with another generic noun will not supply the missing explanation.",
      "After a substantive edit, read the preceding paragraph, revised passage, and following paragraph together. Check changed references, repetition, and missing premises.",
    ],
    sources: [
      {
        label: "Writing pitfall 1",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md#1-repairing-sentences-without-checking-the-surrounding-argument",
      },
    ],
  },
  {
    id: "explain-components",
    section: "Writing pitfalls",
    title: "Explain why the components are needed",
    shortTitle: "Explain the method",
    subtitle:
      "An inventory teaches vocabulary while leaving the method unexplained.",
    pitfall: 2,
    body: {
      kind: "comparison",
      beforeLabel: "Inventory",
      afterLabel: "Explanation",
      before:
        "Each comparison specifies a region, a time window, an aggregation method, and a rationale.",
      after:
        "Comparing regional trends requires observations from comparable periods. Analysts choose the geographic coverage and time window before aggregating the observations. We store these choices with each result so readers can inspect which observations it includes.",
      annotation:
        "Motivate the choices, explain the action, and show how the result is used.",
    },
    takeaway:
      "Can readers explain why it is needed, what happens, and what the result enables?",
    evidence: "Illustrative example adapted from the guide",
    notes: [
      "The weak sentence names fields without explaining why a comparison needs them or how they are determined. Readers learn vocabulary but cannot describe what happens.",
      "The revision motivates the choices and explains how the recorded information is used. It does not need to list every field before readers understand the comparison.",
      "This example assumes the described method actually makes and stores these choices. The repair supplies explanatory information and is not merely a meaning-preserving style edit.",
      "An optional real example is EvoMaestro’s discussion: an inventory of attention routing, filters, and lineage became actions to route attention, compare strategies, and inspect code and evaluation results. Evidence E2 is commit 591c25352f64579598c5c5f355f07e145276eb3b, sections/8-discussion-new.tex, 16 July 2026. Current wording differs slightly from the historical version.",
    ],
    sources: [
      {
        label: "Writing pitfall 2",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md#2-naming-components-without-explaining-why-they-exist-or-how-they-work",
      },
      {
        label: "EvoMaestro revision",
        href: "https://github.com/ifsheldon/evolvis-paper/commit/591c25352f64579598c5c5f355f07e145276eb3b",
      },
    ],
  },
  {
    id: "useful-examples",
    section: "Writing pitfalls",
    title: "Avoid examples that only repeat the claim",
    shortTitle: "Use examples to explain",
    subtitle:
      "A useful example shows a concrete case and explains why it matters.",
    pitfall: 3,
    body: {
      kind: "comparison",
      beforeLabel: "Repeats the claim",
      afterLabel: "Explains with a concrete case",
      before:
        "Summaries can omit important information. For example, an agent’s summary can leave out important instructions.",
      after:
        "A summary can preserve a task’s goal while dropping a constraint. “Fix the download bug. Change only router.py.” becomes “Fix the download bug.” A later agent given only this summary knows what to fix, but is not told to confine edits to router.py.",
      annotation:
        "The stronger example identifies the missing restriction and explains what the next agent is no longer told.",
    },
    takeaway:
      "What does the example explain that the general claim alone leaves unclear?",
    evidence: "Illustrative comparison adapted from ContextProv · 58f2e4c",
    notes: [
      "Pitfall 3 concerns explanatory writing: an example may restate a general claim without helping the reader understand it. The slide now compares weak and explanatory writing, rather than presenting summary loss as the writing pitfall itself.",
      "The weak passage substitutes “important instructions” for “important information” without showing a particular instruction, what happened to it, or why its loss matters.",
      "The stronger passage introduces the principle, gives the original request and its summary, and explains the consequence. The repair goal survives, but a later agent given only that summary is no longer told which file it may change. It does not claim that an agent actually edited another file.",
      "The request and summary come from ContextProv’s illustrative example. The surrounding explanatory prose is newly written for this slide, not a manuscript quotation. The manuscript uses the distinction to explain why the goal and instruction should be tracked separately.",
      "The original instruction can remain in recorded history even when absent from a particular model-call input. Do not conflate absence from one input with absence from the execution record.",
      "The manuscript itself labels this example illustrative. It is not an observed execution incident. Evidence E3 is ContextProv commit 58f2e4cd99a6bd41f18a03995c9db07c63a2672b, source/4-problem-modeling.tex, 12 September 2026. Search for “Illustrative download fix” in the manuscript.",
    ],
    sources: [
      {
        label: "Writing pitfall 3",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md#3-using-examples-that-repeat-the-claim-instead-of-explaining-it",
      },
    ],
  },
  {
    id: "logical-links",
    section: "Writing pitfalls",
    title: "Transitions should explain how ideas connect",
    shortTitle: "Explain the logical link",
    subtitle:
      "A word such as “then” can make sentences sound connected while leaving their logical relationship unstated. Explain why the next idea follows. A limitation may motivate another view, or one step may produce information needed by the next.",
    pitfall: 4,
    body: {
      kind: "comparison",
      beforeLabel: "Only a connecting word",
      afterLabel: "A reason for the next view",
      before: {
        lead: "The overview shows each team’s average task completion time. We ",
        emphasis: "then",
        tail: " provide a view of individual completion times.",
      },
      after: {
        lead: "The overview shows each team’s average task completion time. ",
        emphasis:
          "The same average can come from similar completion times or a mix of fast and slow ones. To distinguish these cases",
        tail: ", users can inspect individual completion times for a selected team.",
      },
      annotation:
        "The limitation of the average gives readers a reason to inspect the individual values.",
    },
    takeaway:
      "State the relationship between the ideas before choosing a connecting word.",
    evidence: "Illustrative example · Writing pitfall 4",
    notes: [
      "Transitions should carry logical connections between ideas. Connecting words can make sentences sound fluent without explaining why the next idea belongs. A limitation may motivate a method, a decision may create a need for checking, or one step may produce the information required by the next.",
      "In the weak example, “then” announces another view but leaves its purpose unexplained. The reader sees the sequence, yet must supply the reason for moving from team averages to individual completion times.",
      "The stronger passage supplies that reason: the same average can arise from different patterns of individual times. Inspecting the individual values lets users distinguish similar times from a mix of fast and slow ones. The limitation of the overview motivates the second view.",
      "This is an illustrative visualization system, not a report of measured system performance or study findings. Both versions retain the overview and individual-time view; the stronger version adds their missing logical relationship.",
      "The highlighted word is not inherently wrong. “Then” can express a useful sequence when that is the intended relationship. Replacing it with “therefore” would not fix a missing explanation. Establish the relationship, then choose a connector that fits it.",
      "Keep this distinct from the next pitfall: here a relationship is missing, while the next example contains the necessary ideas in an unhelpful order.",
    ],
    sources: [
      {
        label: "Writing pitfall 4",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md#4-adding-connecting-words-where-the-logical-relationship-is-missing",
      },
    ],
  },
  {
    id: "reader-order",
    section: "Writing pitfalls",
    title: "Finish explaining an idea before relying on it",
    shortTitle: "Order ideas for the reader",
    subtitle:
      "Readers need definitions, assumptions, and evidence before they can interpret statements that depend on them. When a passage uses an idea and then returns to explain an unfinished part, readers must reconstruct the order themselves.",
    pitfall: 5,
    body: {
      kind: "sequence",
      beforeLabel: "Definition → comparison → back to the definition",
      afterLabel: "Complete the definition → make the comparison",
      before: [
        "Runs with incorrect answers count as failures.",
        "We compare failure rates between two agents.",
        "Runs with no answer also count as failures.",
      ],
      after: [
        "Runs with incorrect answers count as failures.",
        "Runs with no answer also count as failures.",
        "We compare failure rates between two agents.",
      ],
      explanation:
        "The comparison interrupts the definition. Keeping both failure criteria together lets readers know what the rates include.",
    },
    takeaway:
      "Before moving on, check whether the reader has everything needed to understand the next statement.",
    evidence: "Illustrative example · Writing pitfall 5",
    notes: [
      "Pitfall 5 concerns the order in which information reaches the reader. Definitions, assumptions, and evidence establish the basis for later statements. A passage may contain everything necessary but interrupt an explanation, use it, and only later return to finish it.",
      "This illustrative methods passage starts defining failure, moves to comparing failure rates, and then adds a second failure criterion. The reader must revise their understanding of what those rates include after reaching the third sentence.",
      "The revision keeps exactly the same three sentences. It moves the no-answer criterion before the comparison so the complete definition is available when the comparison is introduced. No missing reason or new information has been added.",
      "This distinguishes the example from Pitfall 4. There, the logical relationship was missing and needed an explanation. Here, the necessary information is already present but appears too late.",
      "A deliberate preview can precede details when readers can recognize it as a preview. The comparison sentence is not inherently wrong. In this methods explanation, it interrupts an ongoing definition. The lesson is to order information around what readers need, not to require implementation order or forbid an overview.",
      "The agent comparison is illustrative. It does not report actual evaluation criteria or measured results.",
      "An optional real example is ContextProv’s introduction of context scopes. It explained differences in what agents receive before naming the scopes representing those differences. Evidence E6 is commit 45e88722fa609437b6922dc0e97271f4f31c7484, source/4-problem-modeling.tex, 9 September 2026.",
    ],
    sources: [
      {
        label: "Writing pitfall 5",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md#5-ordering-information-without-respecting-what-the-reader-needs-first",
      },
    ],
  },
  {
    id: "structural-repair",
    section: "Writing pitfalls",
    title: "Check that the edit implements the proposed fix",
    shortTitle: "Verify the actual edit",
    subtitle:
      "Finding the problem and proposing the right fix are not enough. Compare the actual revision with the proposed fix and check whether the original problem has been resolved. A wording change can leave the underlying problem untouched.",
    pitfall: 6,
    body: {
      kind: "repair",
      problem: "The comparison interrupts the definition of failure.",
      plan: "Put both failure criteria before the comparison.",
      original:
        "Runs with incorrect answers count as failures. We compare failure rates between two agents. Runs with no answer also count as failures.",
      before: {
        lead: "Runs with incorrect answers count as failures. We ",
        emphasis: "assess",
        tail: " failure rates between two agents. Runs with no answer also count as failures.",
      },
      after:
        "Runs with incorrect answers count as failures. Runs with no answer also count as failures. We assess failure rates between two agents.",
      caption:
        "The highlighted verb changes the wording. It does not move the second failure criterion as proposed.",
    },
    takeaway:
      "For each proposed fix, point to the change that resolves the original problem.",
    evidence: "Illustrative continuation of Pitfall 5 · Writing pitfall 6",
    notes: [
      "A correct diagnosis and a suitable proposed fix are not proof that the edit carried out the fix. Compare the actual revised passage with the intended change and check whether it resolves the original problem.",
      "This slide continues the illustrative example from Pitfall 5. We already know the problem: the passage compares failure rates before finishing the failure definition. The proposed fix is to put both criteria before that comparison.",
      "The original passage is shown in full above the revisions. The failed revision changes “compare” to the highlighted “assess” but leaves the comparison between the two failure criteria. The highlighted word shows the edit, while the failure is that the edit leaves the diagnosed ordering problem unresolved.",
      "The successful revision retains the same statements but moves the no-answer criterion before the comparison. Readers now receive the full definition first. The original problem, the proposed fix, and the resulting edit line up.",
      "These are illustrative edits for teaching, not a historical agent transcript or measured evaluation result. The distinction from Pitfall 5 is the revision check: Pitfall 5 identifies the ordering problem, while Pitfall 6 checks whether an attempted repair actually resolves it.",
      "The same check applies to other repairs. If the plan promises a reason, find that reason in the final prose. If it promises a useful example, read what the example establishes. Read the passage without relying on the agent’s description of its intentions.",
      "An optional historical example is the ContextProv subsection that needed to define an issue and explain an evaluation result. It began with evaluation procedure and introduced the issue definition later. The agent acknowledged: “Changing individual verbs has not resolved that structural problem.”",
      "The eventual ContextProv revision defined an issue, introduced an evaluation result, explained its verdict, identified supporting evidence, and explained what developers could assess. This summarizes several exchanges, not a manuscript quotation or a claim that one prompt produced the revision. The final text retained an unknown verdict to represent uncertainty.",
      "Evidence E4 is ContextProv commit 813a4f7ef2c2dd84460dd788fe425c6c9eb640bd, source/4-problem-modeling.tex, 9 September 2026, plus the paper-writing conversation. The acknowledgment follows the whole-subsection review request in turn 01a085fc-6e2c-7590-8316-991dba425133. The later transitions comment is in turn 01a08612-726e-7113-8bf2-e57fafb48b86.",
    ],
    sources: [
      {
        label: "Writing pitfall 6",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md#6-proposing-a-structural-repair-but-implementing-only-a-wording-change",
      },
    ],
  },
  {
    id: "reader-context",
    section: "Writing pitfalls",
    title: "Supply the context your reader is missing",
    shortTitle: "Supply the missing context",
    subtitle:
      "The author and AI may omit details they both know from their discussion. Paper readers do not share that conversation, so the text must supply the context needed to understand the method.",
    pitfall: 7,
    body: {
      kind: "comparison",
      context: {
        title: "Known in the writing conversation",
        text: "Participants find the city with the largest population in a bar chart. Performance means the time taken to answer.",
      },
      beforeLabel: "Plain wording, missing context",
      afterLabel: "Shared context made explicit",
      before:
        "Participants completed the task, and we recorded their performance.",
      after:
        "Participants used a bar chart to identify the city with the largest population. We measured how long they took to answer.",
      annotation:
        "The author and AI know what “the task” and “performance” mean. The paper must give readers that information.",
    },
    takeaway:
      "What must the paper explain to someone who did not take part in the conversation?",
    evidence: "Illustrative user-study example · Writing pitfall 7",
    notes: [
      "Pitfall 7 concerns shared conversational context. The author and AI may already know the relevant actors, information, and decisions, but a paper reader needs those details to be established in the manuscript.",
      "The context strip makes the shared knowledge explicit: participants identify the city with the largest population in a bar chart, and performance means the time taken to answer. Those are facts of this hypothetical user study, not details inferred from the generic sentence.",
      "The weak sentence leaves both the task and its measure unstated. The author and AI may know what they discussed, but an unfamiliar reader cannot tell what participants did or whether performance refers to speed, accuracy, or another measure.",
      "The revision carries the shared context into the paper by specifying the chart-reading task and the time measurement. This example assumes those details have not already been established in the manuscript. Once they have been explained, a short reference to the task can be sufficient.",
      "The weak sentence is already plain. This pair does not show jargon being removed. It shows why plain wording alone is insufficient when essential context is missing. Removing jargon is useful only if the explanation retains the domain information the reader needs.",
      "This is an illustrative user study, not a report of an actual experiment or result. In a real paper, use the actual task instructions and measures from the study materials rather than inventing plausible details.",
    ],
    sources: [
      {
        label: "Writing pitfall 7",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md#7-assuming-the-reader-shares-the-authors-conversational-context",
      },
    ],
  },
  {
    id: "separate-cases",
    section: "Writing pitfalls",
    title: "Separate the cases without losing their conditions",
    shortTitle: "Separate the cases",
    subtitle:
      "Nested comparisons can hide a distinction even when every clause is accurate.",
    pitfall: 8,
    body: {
      kind: "distinctions",
      sentence:
        "The interface distinguishes records missing from the source dataset from records present in that dataset but excluded from the displayed subset.",
      cases: [
        {
          title: "Missing from the source",
          text: "The record is absent from the source dataset.",
        },
        {
          title: "Excluded from the display",
          text: "The record is present in the source dataset but excluded from the displayed subset.",
        },
      ],
    },
    takeaway:
      "Name the cases separately and keep both the source and display conditions.",
    evidence: "Illustrative example · Writing pitfall 8",
    notes: [
      "The dense sentence asks readers to hold two locations and two absence conditions inside one nested comparison.",
      "A clearer sentence is: “The interface distinguishes two cases: a record is missing from the source dataset, or it is present but excluded from the displayed subset.” Present the cases on separate lines when speaking.",
      "Keep both conditions: absence from the source dataset differs from presence in that dataset combined with exclusion from the display. Shortening the sentence must not merge these cases.",
      "Ask whether cases, actors, or locations can be named separately without losing a necessary condition.",
    ],
    sources: [
      {
        label: "Writing pitfall 8",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md#8-packing-several-distinctions-into-one-comparison",
      },
    ],
  },
  {
    id: "explain-qualifications",
    section: "Writing pitfalls",
    title: "Explain the method behind the qualification",
    shortTitle: "Explain the qualification",
    subtitle:
      "Saying that a method is careful does not explain what it actually does.",
    pitfall: 9,
    body: {
      kind: "comparison",
      beforeLabel: "Vague qualification",
      afterLabel: "Method explanation",
      before:
        "The displayed links rely on the available evidence and do not assume that similar observations have the same source.",
      after:
        "We link each plotted observation to its source row using the dataset identifier and row index.",
      annotation:
        "This illustrative system uses a dataset identifier and row index to establish each link.",
    },
    takeaway:
      "Explain the concrete method, condition, or consequence that readers need.",
    evidence: "Illustrative example · Writing pitfall 9",
    notes: [
      "The setup matters: this illustrative system links plotted observations to source rows using a dataset identifier and row index. That fact supports the method explanation and cannot be inferred from the vague sentence alone.",
      "The repair explains the actual basis for the links. A claim about respecting evidence can sound careful while leaving the underlying action unspecified.",
      "Preserve uncertainty that affects the conclusion. If a condition changes what can be concluded, explain its consequence. Unavailable observation durations prevent computing rates even when event counts are known.",
      "This pitfall concerns a missing explanation behind a defensive qualification. The next concerns a qualification that is specific but answers a different question from the paragraph.",
    ],
    sources: [
      {
        label: "Writing pitfall 9",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md#9-replacing-explanation-with-defensive-qualifications",
      },
    ],
  },
  {
    id: "relevant-qualifications",
    section: "Writing pitfalls",
    title: "Keep qualifications relevant to the current claim",
    shortTitle: "Keep qualifications relevant",
    subtitle:
      "A true limitation can still interrupt a paragraph by changing the question.",
    pitfall: 10,
    body: {
      kind: "comparison",
      beforeLabel: "Distracting qualification",
      afterLabel: "Focused explanation",
      before:
        "Selecting a bar highlights the corresponding observations in the scatterplot, but it does not explain why the groups differ.",
      after:
        "Selecting a bar highlights the corresponding observations in the scatterplot.",
      annotation:
        "The paragraph explains how linked selection connects a summary to its observations.",
    },
    takeaway:
      "What would readers misunderstand about this claim without the qualification?",
    evidence: "Illustrative example · Writing pitfall 10",
    notes: [
      "The paragraph explains how linked selection connects a group summary to individual observations. The removed clause changes the subject from inspecting observations to explaining causes.",
      "The limitation can be accurate and specific. Its problem here is relevance and placement, unlike the vague defensiveness in pitfall 9.",
      "A causal limitation may belong in a discussion of causal interpretation if the paper makes claims about that capability. It does not follow merely from describing linked selection.",
      "Ask what readers would misunderstand about the current claim without the qualification. If the answer concerns a different capability, reconsider its placement.",
    ],
    sources: [
      {
        label: "Writing pitfall 10",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md#10-adding-out-of-place-qualifications",
      },
    ],
  },
  {
    id: "review-draft",
    section: "Applying the guides",
    title: "Make the ten pitfalls a review routine",
    shortTitle: "Review the draft",
    subtitle:
      "Ask for concrete findings, then check whether the edits resolve them.",
    body: {
      kind: "prompt",
      steps: [
        {
          title: "Locate the problem",
          text: "Read the guide and identify concrete issues with file and line references.",
        },
        {
          title: "Repair the explanation",
          text: "Revise affected passages and their paragraph-outline comments.",
        },
        {
          title: "Read the result",
          text: "Check neighboring paragraphs and preserve supported claims.",
        },
      ],
    },
    takeaway: "A review need not find a problem for every pitfall.",
    prompt:
      "Read `vis-writing-guidelines/vis-writing-pitfalls.md` and check the draft against all ten pitfalls, citing file and line references for each concrete problem and explaining the needed repair.\nRevise the affected passages, keep their paragraph-outline comments consistent, and reread the result with its neighboring paragraphs to verify that the explanation actually improved without changing supported claims.\nDo not invent a problem merely to produce a finding for every pitfall.",
    evidence: "Copyable review instruction",
    notes: [
      "Labmates can use the guide during writing even before reading every example themselves. Ask the agent to read the actual file and examine the current passage.",
      "A general assurance that a draft follows the guide does not identify which passages were examined or repaired. Request concrete findings and check whether the changes address them.",
      "Use this after drafting a section and after substantive changes to its explanation. The author still needs to read the final passage and resolve disputed interpretations or claims.",
      "The prompt covers all ten pitfalls but does not require ten findings. Keep paragraph-outline comments consistent with any changed message or role.",
    ],
    sources: [
      {
        label: "VIS Writing Pitfalls",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md",
      },
    ],
  },
  {
    id: "revision-editing",
    section: "Applying the guides",
    title: "Revise the wording while preserving the argument",
    shortTitle: "Preserve the argument",
    subtitle:
      "Inspect the evidence before changing claim strength or the logic of a passage.",
    body: {
      kind: "revision",
      before:
        "and this broader exploration yields encoders with lower training loss.",
      after: "and identify encoders with lower training loss.",
      meaning:
        "Remove the causal claim about broader exploration. Retain the supported ability to identify lower-loss choices.",
      guides: [
        {
          label: "Writing Style",
          href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-style.md",
          stage: "Draft",
        },
        {
          label: "Writing Pitfalls",
          href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-writing-pitfalls.md",
          stage: "Review",
        },
        {
          label: "Editing Pitfalls",
          href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-editing-pitfalls.md",
          stage: "Revise",
        },
      ],
    },
    takeaway:
      "State the intended argument, check its evidence, and compare meanings after editing.",
    prompt:
      "Before editing this revision, read `vis-writing-guidelines/vis-editing-pitfalls.md` and state the passage's intended argument.\nPreserve its comparison dimensions, actors, quantities and denominators, conditions, and supported claim strength, and flag any necessary substantive change with its evidence before applying it.\nAfter editing, compare meanings and check the surrounding paragraphs, related captions, and summaries.",
    evidence: "VIS4QC revision and accepted source check · 707d5ff",
    notes: [
      "Use VIS Editing Pitfalls when polishing an existing manuscript. Preserve the intended argument and its evidence, and make any necessary substantive change explicit.",
      "This real survey revision removed the claim that broader exploration itself produces better encoders. It retained the supported ability to identify encoders with lower training loss. The initial review had recommended further weakening, but the accepted source recheck retained the metric and utility argument.",
      "Evidence E1 is VIS4QC commit 707d5fff4442fe01c2c346ae4e93e4e01fe5764a, sections/5-usage-and-purpose.tex, 1 October 2026, plus the accepted XQAI-Eyes decision in review/description-audit-2026-09-30/description-findings.md and the paper-review conversation. The excerpts omit TeX and citations but retain the historical wording.",
      "The editing checklist: preserve the argument; avoid invented symmetry between findings on different dimensions; retain specific consequences; keep details at the intended level of analysis; explain a figure’s message before measurement details; inspect evidence before changing claim strength; preserve counted entities and denominators; remove filler while retaining consequential qualifications.",
      "For discussion, E5 is EvoMaestro commit 12fcc4530d3db1fb371c1824ba832a62e5ced48e, 16 July 2026. It changed “All differences are statistically significant” to “Asterisks mark significant differences” and clarified the Performance measure in sections/7-evaluation.tex and sections/appendix-evaluation.tex. This illustrates result scope and measurement terminology.",
      "For discussion, E7 is VIS4QC commit 57b243bcd5bae3e1777663ed3ff1a690227d1621, 1 October 2026, sections/6-abstraction-levels.tex, with the accepted Qrisp audit decision. It separated Qrisp’s tree diagrams from the description of interactive QML systems. Check which capability a grouped sentence assigns to each citation.",
      "For discussion, E8 is EvoMaestro commit 0a9617c19937a9ca52f1e577cad12d39323b3aeb, 14 July 2026. It clarified a co-author’s expert-collaboration role across the formative study, abstract, discussion, and other sections. One factual correction can affect several claims.",
      "For discussion, E9 is VIS4QC commit 4deb29fa903b78ebac868f0540733c5031292a3b, 1 October 2026, sections/2-related-work.tex, plus the accepted audit decision and paper-review discussion. Replacing “advanced” with “in depth” retained the author’s intended assessment of coverage depth. This demonstrates preservation of that assessment, not an independent judgment of the cited paper’s quality.",
      "Commit diffs establish what changed, not whether AI authored either version. The ContextProv structural revision and survey review stories also have conversation evidence. Survey examples report accepted repository source checks; this talk is not a new independent review of the underlying papers. Use historical commits for exact before-and-after passages because current manuscript text may differ.",
      "End with three guides: style while drafting, writing pitfalls while reviewing an explanation, and editing pitfalls while revising an existing argument. The links are pinned to local submodule revision a5d1a9681682c8895345c64a4d28ed55d42760f9.",
    ],
    sources: [
      {
        label: "VIS Editing Pitfalls",
        href: "https://github.com/ifsheldon/vis-writing-guidelines/blob/a5d1a9681682c8895345c64a4d28ed55d42760f9/vis-editing-pitfalls.md",
      },
      {
        label: "VIS4QC revision",
        href: "https://github.com/ifsheldon/vis4qc-paper/commit/707d5fff4442fe01c2c346ae4e93e4e01fe5764a",
      },
    ],
  },
  ...researchSlides,
];
