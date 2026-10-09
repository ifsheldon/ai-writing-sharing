# Using AI to Write and Revise Research Papers

A 25-minute sharing session for labmates working in visualization and HCI, with up to five minutes for discussion.
Start directly with practical suggestions, then discuss all ten writing pitfalls in the guide's order, and finish with revision editing.
The seventeen content slides need no separate background section or introduction to the three research projects.

## Session structure

| Part | Slides | Content | Time |
| --- | --- | --- | --- |
| General suggestions | 1–5 | Source formatting, paragraph outlines, model and review setup, plain writing, and access to related research materials. | 8 min |
| Common writing pitfalls | 6–15 | One example and one corrective check for each of the ten pitfalls. | 14 min |
| Applying the guides | 16–17 | A prompt for checking a draft and a prompt for editing during revision. | 3 min |

Allow roughly 80–90 seconds per pitfall.
Spend a little longer on the structural-repair example and less on the short sentence examples.
Examples marked illustrative are teaching examples, including hypothetical system behavior or study results.
The style pairs preserve meaning, while some pitfall repairs supply missing explanations or change the passage's structure.

## Part 1 General suggestions

### Slide 1 One sentence per source line

Put each prose sentence on one physical line in the TeX source.
A comment such as “the sentence at line 82 is unclear” then points directly to a sentence, and a diff makes sentence edits easy to inspect.
This concerns source formatting and does not put every sentence on a separate line in the typeset PDF.
Line numbers can change after edits, so use the current file when giving feedback.

**Copyable instruction:**

> Write each prose sentence on its own physical line in the `.tex` source, do not wrap it across lines, and separate paragraphs with a blank line.

**Illustrative source:**

```tex
The overview shows how response times vary across groups.
Selecting a group highlights its observations in the scatterplot.

The detail view shows the selected observations over time.
```

Keep equations, tables, and other structured environments in their appropriate source format.
If a formatter is used, configure it to preserve the sentence-per-line prose layout.

### Slide 2 Keep the paragraph outline beside the text

Write the outline in LaTeX comments next to the corresponding paragraphs before drafting the prose.
Explain three reasons for doing this:

1. **Make the intended message explicit.** The agent cannot perfectly infer what you want to convey or emphasize, and its writing can drift from your intention.
   An outline states each paragraph's main point, emphasis, and logical role so the agent has a clear direction to follow.
2. **Keep the outline and prose in sync.** Core ideas can change during writing and revision.
   A separate outline file requires maintaining those ideas in two places, making it easier for the outline and text to diverge.
   Keep the outline beside the text and update both when the ideas change.
3. **Compare the result with your intention.** Reading the outline alongside the paragraph helps you check whether the prose actually conveys the intended message and emphasis.
   It makes missing points, misplaced emphasis, and unnecessary detours easier to identify.

**Copyable instruction:**

> Before drafting, write each paragraph's main point, intended emphasis, and logical link to the next paragraph in LaTeX comments immediately above it, check the outline's flow, keep the comments synchronized when the ideas change, and verify that the prose conveys the stated message and emphasis.

### Slide 3 Use Ultra to keep your attention on the writing

**Recommendation for our OpenAI workflow:** Use an Ultra model, such as GPT-6 Astra Ultra.

1. **Let the agent initiate delegation.** In ChatGPT/Codex, other intelligence levels require an explicit request to use subagents, while Ultra models can delegate suitable work on their own.
   This includes assigning independent review work without a separate reminder each time.
2. **Preserve your train of thought.** Remembering to request subagents shifts your attention from the paper to managing the agents.
   With Ultra, you can focus on what the paper should say and whether the text conveys it.
3. **Make review part of the writing process.** Have a reviewer with fresh context check the draft and send findings back to the writing agent.
   The writing agent can then correct gaps, unclear explanations, and other supported findings before returning the revised text to you.
   This makes feedback and improvement part of the routine, without requiring you to organize each review round.

**Copyable instruction:**

> After drafting or revising, have a subagent with fresh context review the text against our writing guidelines, then improve the draft based on its findings.

Set this expectation once and let the Ultra agent organize the review work as writing proceeds.
The author remains focused on the argument, emphasis, and final content.

**Source note:** The distinction between requested and proactive delegation is documented for ChatGPT Work in OpenAI's [subagent documentation](https://learn.chatgpt.com/docs/agent-configuration/subagents).

### Slide 4 Ask for plain writing with the same meaning

Ask the writing agent to follow the [VIS Writing Style](https://github.com/ifsheldon/vis-writing-guidelines/blob/main/vis-writing-style.md).
The goal is to remove verbal overhead while retaining the actor, action, objects, quantities, conditions, and strength of the claim.

**Copyable instruction:**

> Read `vis-writing-guidelines/vis-writing-style.md` and follow it when drafting or editing, using plain words and concrete actions while preserving the original claims, quantities, conditions, and uncertainty.

**Illustrative pairs with the same meaning:**

| Verbose or fancy | Simple and direct |
| --- | --- |
| The interface makes use of color in order to communicate the category to which each node belongs. | The interface uses color to show each node's category. |
| The interface provides users with the capability to conduct a side-by-side comparison of two versions of a chart. | The interface lets users compare two chart versions side by side. |
| Users can specify a time interval for the purpose of restricting the displayed observations to those recorded within that interval. | Users can select a time interval to show only observations recorded within it. |
| In the course of the study, six of the ten participants made use of the history view for the purpose of revisiting previous selections. | During the study, six of the ten participants used the history view to revisit previous selections. |
| This representation may facilitate the identification of outliers, but it does not provide information about the causes of those outliers. | This representation may help identify outliers, but it provides no information about their causes. |

Show three pairs on the main slide and retain the others in the notes or handout.
The last two make it easy to check that numbers, “may,” and a consequential limitation survive.
These are newly written teaching examples inspired by the style guide.
Some examples in the guide also replace a vague claim with specific capabilities or findings, which requires knowing what the system does or what the study found.
Such a change cannot be justified by style alone.

### Slide 5 Give the agent the context behind the paper

Help the writing agent help you by giving it access to related research materials.
A repository or Overleaf project containing only TeX sources gives the agent the manuscript, but writing the paper also requires information from the implementation, user study data, study materials, and analysis scripts.
Those materials help the agent understand how the system works, how the study was conducted, and what supports the reported results.

Use either of these arrangements:

1. **Keep the materials in one repository.** Put the paper sources, implementation, and relevant study materials and analysis together so the writing agent can consult them while working.
2. **Tell the agent where to look.** If the materials live in separate repositories or folders, provide their paths and explain what each contains.
   Point it to the relevant code, data, or analysis when discussing a particular method or result.

A short README in the paper project can record these locations so the context remains available across writing sessions.
The important step is to make the related information accessible and tell the agent to consult it when needed.

**Copyable instruction:**

> Use the manuscript in [paper path], implementation in [code path], and study data and analysis in [study path] as context for writing, and consult the relevant materials when describing the method or reporting results.

## Part 2 Common writing pitfalls

Follow [VIS Writing Pitfalls](vis-writing-guidelines/vis-writing-pitfalls.md) one by one.
Use the same simple presentation for each: the problem, a short example, and the check that would catch it.
Keep the fuller explanation and source references in the speaker notes.

### Slide 6 Pitfall 1 Repairing sentences without checking the surrounding argument

**Problem:** A locally improved sentence can leave a duplicate explanation, vague reference, or broken transition in the next paragraph.

**Illustrative example:**

- P1 originally explains differences in response times between groups.
- An edit changes P1 into a description of the interface layout.
- P2 still begins, “These differences guide users toward groups for closer inspection.”

The words “these differences” now point to information the preceding paragraph no longer supplies.
The repair must restore the relevant comparison or rewrite the handoff according to P2's purpose.
Changing the pointer to another generic noun will not supply the missing explanation.

**Check:** After editing a sentence, read the preceding paragraph, the revised passage, and the following paragraph together.
Look for changed references, repetition, and missing premises.

**Guide:** Pitfall 1.

### Slide 7 Pitfall 2 Naming components without explaining why they exist or how they work

**Problem:** Readers learn the vocabulary without understanding the method.

**Illustrative weak explanation, adapted from the guide:**

> Each comparison specifies a region, a time window, an aggregation method, and a rationale.

**More explanatory:**

> Comparing regional trends requires observations from comparable periods.
> Analysts choose the geographic coverage and time window before aggregating the observations.
> We store these choices with each result so readers can inspect which observations it includes.

The improved passage motivates the choices and explains how the recorded information is used.
It does not need to list every field before readers understand the comparison.
This example assumes the described method actually makes and stores these choices.

**Check:** For each important component, can readers explain why it is needed, what happens, and what the result enables?

**Optional real example:** EvoMaestro's discussion changed an inventory of attention routing, filters, and lineage into actions: route attention, compare strategies, and inspect code and evaluation results.
See E2, commit `591c253`.

**Guide:** Pitfall 2.

### Slide 8 Pitfall 3 Using examples that repeat the claim instead of explaining it

**Problem:** An example can merely restate a general claim without helping readers understand what it means or why it matters.
Show the weak and explanatory passages together so the writing problem is visible.

**Weak illustrative example:**

> Summaries can omit important information.
> For example, an agent's summary can leave out important instructions.

**More explanatory, adapted from ContextProv:**

> A summary can preserve a task’s goal while dropping a constraint.
> “Fix the download bug. Change only router.py.” becomes “Fix the download bug.”
> A later agent given only this summary knows what to fix, but is not told to confine edits to router.py.

The weak passage substitutes “important instructions” for “important information” without showing a concrete case.
The stronger passage identifies what survives, what is lost, and what the next agent is no longer told.
This is a lesson about what an example adds to an explanation, rather than a separate pitfall about summarization.
The original request and summary come from ContextProv’s illustrative example, while the surrounding explanatory prose is newly written for the slide.
The manuscript uses the distinction to explain why the goal and instruction should be tracked separately.
The original instruction can remain in recorded history even when it is absent from a particular model-call input.

**Check:** What does the example explain that the general claim alone leaves unclear?

**Source:** E3, commit `58f2e4c`.
The paper itself labels this example illustrative, so do not describe it as an observed execution incident.
**Guide:** Pitfall 3.

### Slide 9 Pitfall 4 Adding connecting words where the logical relationship is missing

**Core idea:** Transitions should explain how ideas connect.
A word such as “then” can make sentences sound connected while leaving their logical relationship unstated.
Explain why the next idea follows.
A limitation may motivate another view, or one step may produce information needed by the next.

**Illustrative weak explanation:**

> The overview shows each team’s average task completion time.
> We **then** provide a view of individual completion times.

Highlight “then” in red on the slide.
The word announces another view but does not explain why readers need it.

**More explanatory:**

> The overview shows each team’s average task completion time.
> The same average can come from similar completion times or a mix of fast and slow ones.
> To distinguish these cases, users can inspect individual completion times for a selected team.

Use a light blue background to highlight the logical connection from “The same average” through “To distinguish these cases”, with the comma outside the highlight.
Both versions retain the overview and the individual-time view.
The revision makes their logical relationship explicit: the limitation of the average motivates inspecting the individual values.
This is an illustrative visualization system, not an observed study result.
The problem is the missing explanation, not the word “then” itself.
If the relationship is already clear, a short connecting word may be enough.

**Check:** Before adding a connector, state the relationship between the ideas in plain language.
For example, one step produces the information required by the next, or an interpretive decision creates a need for review.

**Guide:** Pitfall 4.

### Slide 10 Pitfall 5 Ordering information without respecting what the reader needs first

**Core idea:** Finish explaining an idea before relying on it.
Readers need definitions, assumptions, and evidence before they can interpret statements that depend on them.
When a passage uses an idea and then returns to explain an unfinished part, readers must reconstruct the order themselves.

**Illustrative methods passage before: definition → comparison → back to the definition**

> Runs with incorrect answers count as failures.
> We compare failure rates between two agents.
> Runs with no answer also count as failures.

**Clearer order: complete the definition → make the comparison**

> Runs with incorrect answers count as failures.
> Runs with no answer also count as failures.
> We compare failure rates between two agents.

The comparison interrupts the definition.
Keeping both failure criteria together lets readers know what the rates include.
The revision keeps exactly the same three sentences and only changes their order.
Unlike Pitfall 4, no missing logical relationship needs to be added here.
The necessary information is present but reaches the reader too late.
This is an illustrative example, not a report of actual evaluation criteria or measured results.

A deliberate preview may precede details when readers can recognize it as a preview.
The comparison sentence is not inherently wrong, but it interrupts an ongoing definition in this methods passage.
Choose the order that serves the explanation rather than assuming implementation order is always best.

**Check:** Before moving on, check whether the reader has everything needed to understand the next statement.

**Optional real example:** ContextProv explained differences in what agents receive before introducing the context scopes used to represent those differences.
See E6, commit `45e8872`.

**Guide:** Pitfall 5.

### Slide 11 Pitfall 6 Proposing a structural repair but implementing only a wording change

**Problem:** The agent can diagnose the problem correctly and still fail to implement its own proposed repair.

**Real ContextProv revision:**

The subsection needed to define an issue and explain an evaluation result.
Its earlier version began with evaluation procedure and introduced the issue definition later.
Changing individual verbs did not resolve this mismatch.
The agent acknowledged in the writing conversation:

> “Changing individual verbs has not resolved that structural problem.”

The eventual revision followed this progression:

> Define an issue → introduce an evaluation result → explain its verdict → identify supporting evidence → explain what developers can assess.

Show the difference between a promise such as “I will clarify the conceptual structure” and a visible change in paragraph roles.
The final text still represents uncertainty through an `unknown` verdict.

**Check:** For every promised repair, point to the sentence or paragraph that now provides the missing explanation.
Read the final passage without the agent's explanation of what it intended to do.

**Source:** E4, commit `813a4f7`, and the writing conversation.
The sequence above summarizes the revision after several exchanges, rather than quoting the manuscript or implying that one prompt produced it.
**Guide:** Pitfall 6.

### Slide 12 Pitfall 7 Assuming the reader shares the authors' conversational context

**Problem:** Shorthand understood by the author and agent can omit premises needed by a reader.
Removing jargon alone may leave the same gap.

**Too generic:**

> A filter receives data and produces a subset.

**More informative, in this illustrative system:**

> The filter selects observations whose recorded timestamps fall within the interval chosen by the analyst.

The reader now knows who chooses the interval, which information is examined, and the selection rule.
Plain writing still needs the specific information that makes an explanation useful.

**Check:** What actors, objects, and assumptions does an unfamiliar reader need before the next sentence will make sense?

**Guide:** Pitfall 7.

### Slide 13 Pitfall 8 Packing several distinctions into one comparison

**Problem:** A sentence can be accurate but make its comparisons difficult to follow.

**Illustrative dense version:**

> The interface distinguishes records missing from the source dataset from records present in that dataset but excluded from the displayed subset.

**Clearer, preserving the two cases:**

> The interface distinguishes two cases: a record is missing from the source dataset, or it is present but excluded from the displayed subset.

Present the cases on separate lines when speaking.
Keep both the source-dataset and displayed-subset conditions.

**Check:** Can the cases, actors, or locations be named separately without losing a condition?

**Guide:** Pitfall 8.

### Slide 14 Pitfall 9 Replacing explanation with defensive qualifications

**Problem:** A statement about being careful can leave readers unsure what the method actually does.

**Illustrative setup:** This system links plotted observations to source rows using a dataset identifier and row index.

**Vague qualification:**

> The displayed links rely on the available evidence and do not assume that similar observations have the same source.

**Method explanation:**

> We link each plotted observation to its source row using the dataset identifier and row index.

The repair explains the actual basis for the links.
It uses the stated method fact, which cannot be inferred from the vague sentence alone.
If a condition changes what can be concluded, state its consequence explicitly.
For example, unavailable observation durations prevent computing rates even when event counts are known.

**Check:** What concrete method, condition, or consequence does the qualification need to explain?
Preserve uncertainty that affects the conclusion.

**Guide:** Pitfall 9.

### Slide 15 Pitfall 10 Adding out-of-place qualifications

**Problem:** A limitation can be true and specific while answering a different question from the paragraph.

**Illustrative context:** The paragraph explains how linked selection connects a group summary to its observations.

**Distracting qualification:**

> Selecting a bar highlights the corresponding observations in the scatterplot, but it does not explain why the groups differ.

**Focused sentence:**

> Selecting a bar highlights the corresponding observations in the scatterplot.

The removed clause changes the subject from inspecting observations to explaining causes.
It may belong in a discussion of causal interpretation if the paper makes claims about that capability.
It does not follow merely from describing linked selection.

**Check:** What would readers misunderstand about the current claim without this qualification?
If the answer concerns a different capability, reconsider its placement.

**Guide:** Pitfall 10.

## Part 3 Applying the guides

### Slide 16 Have the agent check the draft against all ten pitfalls

Labmates can use the guide during writing even before reading every example themselves.
Ask the agent to read the actual file, identify concrete problems in the current passage, and check whether its edits resolve them.
A general assurance that the draft follows the guide does not show which passages were examined or repaired.

**Copyable instruction:**

> Read `vis-writing-guidelines/vis-writing-pitfalls.md` and check the draft against all ten pitfalls, citing file and line references for each concrete problem and explaining the needed repair.
> Revise the affected passages, keep their paragraph-outline comments consistent, and reread the result with its neighboring paragraphs to verify that the explanation actually improved without changing supported claims.
> Do not invent a problem merely to produce a finding for every pitfall.

Use this after drafting a section and after substantive changes to its explanation.
The author should still read the resulting passage and resolve disputed interpretations or claims.

### Slide 17 Use the editing guide during paper revision

When polishing an existing manuscript, preserve the intended argument and its evidence.
Ask the agent to read [VIS Editing Pitfalls](vis-writing-guidelines/vis-editing-pitfalls.md) before editing.
Use one compact example to show why this is a separate check.

**Real survey example:**

> Before: “and this broader exploration yields encoders with lower training loss.”

> After: “and identify encoders with lower training loss.”

The revision removed the claim that broader exploration itself produces better encoders while retaining the supported ability to identify lower-loss choices.
The initial review had recommended weakening the statement further, but the accepted source recheck retained the loss metric and the utility argument.
See E1, commit `707d5ff` and the accepted audit decision.

**Copyable instruction:**

> Before editing this revision, read `vis-writing-guidelines/vis-editing-pitfalls.md` and state the passage's intended argument.
> Preserve its comparison dimensions, actors, quantities and denominators, conditions, and supported claim strength, and flag any necessary substantive change with its evidence before applying it.
> After editing, compare meanings and check the surrounding paragraphs, related captions, and summaries.

Keep the full editing checklist in the notes rather than spending another ten minutes introducing it:

1. Preserve the argument when improving a sentence.
2. Do not invent symmetry between findings on different dimensions.
3. Retain specific consequences instead of replacing them with generic implications.
4. Keep concrete details at the paragraph's intended level of analysis.
5. Explain a figure's main message before its measurement details.
6. Inspect evidence before changing claim strength.
7. Preserve what numbers count and their denominators.
8. Remove filler while retaining consequential qualifications.

End with the three guide links and their uses: style while drafting, writing pitfalls while reviewing an explanation, and editing pitfalls while revising an existing argument.

## Optional real examples for discussion

| Example | Use | Source |
| --- | --- | --- |
| EvoMaestro turns a component inventory into an inspection sequence. | Alternative for writing pitfall 2. | E2, `591c253` |
| ContextProv motivates context scopes before naming them. | Alternative for writing pitfall 5. | E6, `45e8872` |
| The survey separates Qrisp's tree diagrams from its description of interactive QML systems. | Check which capability a grouped sentence assigns to each citation. | E7, `57b243b` |
| EvoMaestro changes “All differences are statistically significant” to “Asterisks mark significant differences” and clarifies the Performance measure. | Check result scope and measurement terminology during revision. | E5, `12fcc45` |
| EvoMaestro clarifies a co-author's expert-collaboration role across the manuscript. | A factual correction can affect several claims and sections. | E8, `0a9617c` |
| The survey retains an assessment of coverage depth while replacing “advanced” with “in depth.” | Recover the author's intended comparison before proposing a broader rewrite. | E9, `4deb29f` |

E9 illustrates preservation of the author's intended assessment, not an independent judgment of the cited paper's quality.

## Evidence and provenance

Historical excerpts above omit LaTeX formatting and citation commands while retaining the quoted wording.
Slide summaries and suggested prompts are identified separately.
Commit diffs establish what changed, but do not by themselves establish whether AI authored either version.
The ContextProv structural-revision story and the survey review stories also have conversation evidence.
The survey examples report the repository's accepted source checks; this outline does not constitute a new independent review of those underlying papers.

The EvoMaestro manuscript is in `/Users/zhiqiu/offline_code/research_ntu/evol/evolvis-paper`.
The duplicated survey path in the initial request does not point to that manuscript.

| ID | Historical evidence | Current source or review record |
| --- | --- | --- |
| E1 | VIS4QC `707d5fff4442fe01c2c346ae4e93e4e01fe5764a`, 1 October 2026. `sections/5-usage-and-purpose.tex`. | [Manuscript passage](/Users/zhiqiu/offline_code/research_ntu/vis4qc/paper_latex/sections/5-usage-and-purpose.tex:110), [accepted XQAI-Eyes audit decision](/Users/zhiqiu/offline_code/research_ntu/vis4qc/paper_latex/review/description-audit-2026-09-30/description-findings.md:35), and [paper-review](thread://01a0bdd8-8634-7430-b98a-407e895a59ee?hostId=local), 1 October discussion. |
| E2 | EvoMaestro `591c25352f64579598c5c5f355f07e145276eb3b`, 16 July 2026. `sections/8-discussion-new.tex`. | [Discussion](/Users/zhiqiu/offline_code/research_ntu/evol/evolvis-paper/sections/8-discussion-new.tex:23). Later wording differs slightly from the historical quotation. |
| E3 | ContextProv `58f2e4cd99a6bd41f18a03995c9db07c63a2672b`, 12 September 2026. `source/4-problem-modeling.tex`. | [Problem modeling](/Users/zhiqiu/offline_code/research_ntu/ContextDiagnoser/paper-src/source/4-problem-modeling.tex). Search for `Illustrative download fix`. |
| E4 | ContextProv `813a4f7ef2c2dd84460dd788fe425c6c9eb640bd`, 9 September 2026. `source/4-problem-modeling.tex`. | [Problem modeling](/Users/zhiqiu/offline_code/research_ntu/ContextDiagnoser/paper-src/source/4-problem-modeling.tex) and [paper writing](thread://01a072b2-aaed-71a1-ae18-a3ef02b63c16?hostId=local). The structural-problem acknowledgment follows the whole-subsection review request in turn `01a085fc-6e2c-7590-8316-991dba425133`. The later transitions comment is in turn `01a08612-726e-7113-8bf2-e57fafb48b86`. |
| E5 | EvoMaestro `12fcc4530d3db1fb371c1824ba832a62e5ced48e`, 16 July 2026. `sections/7-evaluation.tex` and `sections/appendix-evaluation.tex`. | [Caption](/Users/zhiqiu/offline_code/research_ntu/evol/evolvis-paper/sections/7-evaluation.tex:80) and [NASA-TLX table](/Users/zhiqiu/offline_code/research_ntu/evol/evolvis-paper/sections/appendix-evaluation.tex:231). |
| E6 | ContextProv `45e88722fa609437b6922dc0e97271f4f31c7484`, 9 September 2026. `source/4-problem-modeling.tex`. | [Problem modeling](/Users/zhiqiu/offline_code/research_ntu/ContextDiagnoser/paper-src/source/4-problem-modeling.tex). |
| E7 | VIS4QC `57b243bcd5bae3e1777663ed3ff1a690227d1621`, 1 October 2026. `sections/6-abstraction-levels.tex`. | [Manuscript passage](/Users/zhiqiu/offline_code/research_ntu/vis4qc/paper_latex/sections/6-abstraction-levels.tex:122) and [accepted Qrisp audit decision](/Users/zhiqiu/offline_code/research_ntu/vis4qc/paper_latex/review/description-audit-2026-09-30/description-findings.md:25). |
| E8 | EvoMaestro `0a9617c19937a9ca52f1e577cad12d39323b3aeb`, 14 July 2026. Changes span several manuscript sections. | [Formative study](/Users/zhiqiu/offline_code/research_ntu/evol/evolvis-paper/sections/4-formative-study.tex), [abstract](/Users/zhiqiu/offline_code/research_ntu/evol/evolvis-paper/sections/0-abstract.tex), and [discussion](/Users/zhiqiu/offline_code/research_ntu/evol/evolvis-paper/sections/8-discussion-new.tex:47). |
| E9 | VIS4QC `4deb29fa903b78ebac868f0540733c5031292a3b`, 1 October 2026. `sections/2-related-work.tex`. | [Related work](/Users/zhiqiu/offline_code/research_ntu/vis4qc/paper_latex/sections/2-related-work.tex:18), [accepted audit decision](/Users/zhiqiu/offline_code/research_ntu/vis4qc/paper_latex/review/description-audit-2026-09-30/description-findings.md:27), and [paper-review](thread://01a0bdd8-8634-7430-b98a-407e895a59ee?hostId=local), 1 October discussion. |

To inspect an example, run `git show <commit> -- <file>` in the corresponding manuscript repository.
To recover the complete earlier passage, run `git show <commit>^:<file>`.
Use these historical versions when preparing exact before-and-after slides, since current manuscript text may have changed subsequently.

## Guideline references

## Complementary section: Beyond Writing Assistance: Using AI Critically in Research Writing

Append six slides after the original 17; allow approximately 6–9 additional minutes.
The full text, prompts, notes, and reference URLs are in `src/app/research-slides.ts`.

1. Challenge the research argument before polishing prose: motivation, gap, approach, and contributions.
2. Compare papers to build a synthesis: use common dimensions and verify every comparison against source passages.
3. Check scientific claims against measured outcomes: retain statistical meaning, quantities, and study scope.
4. Review through distinct research perspectives: ground criticisms and let the researcher validate them.
5. Verify citations: check both publication existence and support for the specific claim.
6. Keep a human-led workflow: researchers define, validate, verify, and finalize scientific decisions.

The comparison matrix and evaluation rewrite are hypothetical teaching examples.
The OpenScholar paper is a published research reference, and the citation resources include both a news feature and an empirical study.
Publication-policy notes are dated October 2026; recheck the target venue before submission.

## Original guideline links

- [VIS Writing Guide](vis-writing-guidelines/vis-writing-guideline.md)
- [VIS Writing Style](vis-writing-guidelines/vis-writing-style.md)
- [VIS Writing Pitfalls](vis-writing-guidelines/vis-writing-pitfalls.md)
- [VIS Editing Pitfalls](vis-writing-guidelines/vis-editing-pitfalls.md)

The guideline mappings above use the current local submodule revision `a5d1a9681682c8895345c64a4d28ed55d42760f9`.
