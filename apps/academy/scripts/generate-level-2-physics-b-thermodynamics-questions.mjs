import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(scriptDir, "..");
const courseRoot = path.join(
  appRoot,
  "src",
  "lib",
  "docs",
  "level-2-physics-b",
);
const structurePath = path.join(courseRoot, "structure.ts");
const questionRoot = path.join(courseRoot, "questions");
const courseId = "level-2-physics-b";

const ratings = [
  "*",
  "*+",
  "*",
  "*",
  "*",
  "*+",
  "**",
  "**",
  "**+",
  "***",
  "***+",
  "****",
  "***+",
  "****",
  "**",
  "***",
  "****",
  "****+",
  "****",
  "*****",
];

function findArrayLiteral(source, declaration) {
  const declarationIndex = source.indexOf(declaration);
  if (declarationIndex < 0) {
    throw new Error(`Could not find ${declaration}`);
  }

  const assignmentIndex = source.indexOf("=", declarationIndex);
  const start = source.indexOf("[", assignmentIndex);
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const character = source[index];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === quote) {
        quote = null;
      }
      continue;
    }

    if (character === '"' || character === "'") {
      quote = character;
      continue;
    }

    if (character === "[") depth += 1;
    if (character === "]") depth -= 1;

    if (depth === 0) {
      return source.slice(start, index + 1);
    }
  }

  throw new Error(`Unclosed array for ${declaration}`);
}

function slugify(title) {
  return title
    .toLowerCase()
    .replaceAll("&", " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeRawMarkdown(value) {
  return value
    .replaceAll("\\\\(", "\\(")
    .replaceAll("\\\\)", "\\)")
    .replaceAll("\\\\[", "\\[")
    .replaceAll("\\\\]", "\\]")
    .trim();
}

function decodeMdxPropString(value) {
  return value
    .replaceAll('\\"', '"')
    .replaceAll("\\\\", "\\")
    .trim();
}

function stripVisuals(value) {
  return value
    .replace(/<([A-Z][A-Za-z0-9]*)\b[\s\S]*?<\/\1>/g, "\n")
    .replace(/<[A-Z][\s\S]*?\/>/g, "\n");
}

function stripDisplays(value) {
  let result = value;

  while (true) {
    const start = result.indexOf("\\\\[");
    if (start < 0) return result;
    const end = result.indexOf("\\\\]", start + 3);
    if (end < 0) return result;
    result = `${result.slice(0, start)}\n${result.slice(end + 3)}`;
  }
}

function proseParagraphs(value) {
  return normalizeRawMarkdown(stripDisplays(stripVisuals(value)))
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/^#+\s+.*$/gm, "").trim())
    .filter(Boolean)
    .filter((paragraph) => !paragraph.startsWith("<"))
    .filter((paragraph) => !/^[{}[\],\s]+$/.test(paragraph));
}

function extractDisplays(value) {
  const displays = [];
  let cursor = 0;

  while (true) {
    const start = value.indexOf("\\\\[", cursor);
    if (start < 0) return displays;
    const end = value.indexOf("\\\\]", start + 3);
    if (end < 0) {
      throw new Error("Unclosed display-math delimiter in content source");
    }

    displays.push({
      display: normalizeRawMarkdown(value.slice(start, end + 3)),
      end: end + 3,
      start,
    });
    cursor = end + 3;
  }
}

function extractRenderedDisplays(value) {
  const displays = [];
  let cursor = 0;

  while (true) {
    const start = value.indexOf("\\[", cursor);
    if (start < 0) return displays;
    const end = value.indexOf("\\]", start + 2);
    if (end < 0) return displays;
    displays.push(value.slice(start, end + 2).trim());
    cursor = end + 2;
  }
}

function extractNotation(value) {
  const notation = [];
  const pattern =
    /\{ symbol: "((?:\\.|[^"\\])*)", meaning: "((?:\\.|[^"\\])*)"(?:, unit: "((?:\\.|[^"\\])*)")? \}/g;

  for (const match of value.matchAll(pattern)) {
    notation.push({
      meaning: decodeMdxPropString(match[2]),
      symbol: decodeMdxPropString(match[1]),
      unit: match[3] ? decodeMdxPropString(match[3]) : null,
    });
  }

  return notation;
}

function extractExamples(value) {
  const examples = [];
  const start = value.indexOf("<PhysicsExamples");
  if (start < 0) return examples;

  const pattern =
    /title:\s*"((?:\\.|[^"\\])*)",\s*question:\s*"((?:\\.|[^"\\])*)",\s*answer:\s*"((?:\\.|[^"\\])*)",/gs;

  for (const match of value.slice(start).matchAll(pattern)) {
    examples.push({
      answer: decodeMdxPropString(match[3]),
      question: decodeMdxPropString(match[2]),
      title: decodeMdxPropString(match[1]),
    });
  }

  return examples;
}

function formatNotation(entry) {
  const unit = entry.unit
    ? entry.unit === "1"
      ? "; dimensionless"
      : `; unit \\(\\mathrm{${entry.unit}}\\)`
    : "";
  return `\\(${entry.symbol}\\) denotes ${entry.meaning}${unit}`;
}

function notationSummary(notation) {
  return notation.map(formatNotation).join("; ");
}

function plainText(value) {
  return value.replaceAll("**", "").trim();
}

function solution({ model, working, final, check }) {
  return [
    `Model:\n${plainText(model)}`,
    `Working:\n${plainText(working)}`,
    `Final answer:\n${plainText(final)}`,
    `Check:\n${plainText(check)}`,
  ].join("\n\n");
}

function getEquationContext(core, equation) {
  const before = proseParagraphs(core.slice(0, equation.start));
  const after = proseParagraphs(core.slice(equation.end));

  return {
    after:
      after.find(isCompleteProse) ??
      after[0] ??
      "The relation must be read under the stated model constraints.",
    before:
      before.filter(isCompleteProse).at(-1) ??
      before.at(-1) ??
      "The governing relation follows from the physical model developed in the topic.",
  };
}

function finalFromExample(answer) {
  const explicit = answer.match(
    /(?:\*\*)?Final result:(?:\*\*)?\s*([\s\S]*)$/i,
  );
  if (explicit) return explicit[1].trim();

  const paragraphs = answer.split(/\n\s*\n/).filter(Boolean);
  return paragraphs.at(-1) ?? answer;
}

function upperFirst(value) {
  return /^[a-z]/.test(value)
    ? `${value.charAt(0).toUpperCase()}${value.slice(1)}`
    : value;
}

function isCompleteProse(paragraph) {
  return !/(?:\b(?:as|are|becomes|by|consequently|defined by|follows|from|gives|is|to)|:)$/i.test(
    paragraph.trim(),
  );
}

function buildQuestions({ content, sectionId, title, topicId }) {
  const principleStart = content.indexOf("## Principle") + "## Principle".length;
  const notationStart = content.indexOf("## Notation");
  const coreStart = content.indexOf("## The Core Method") + "## The Core Method".length;
  const examplesStart = content.indexOf("<PhysicsExamples");
  const principle = normalizeRawMarkdown(
    content.slice(principleStart, notationStart),
  );
  const core = content.slice(coreStart, examplesStart);
  const coreParagraphs = proseParagraphs(core);
  const displays = extractDisplays(core);
  const notation = extractNotation(content);
  const examples = extractExamples(content);
  const tags = ["thermodynamics", sectionId];

  if (notation.length < 3 || displays.length < 2 || examples.length !== 2) {
    throw new Error(
      `${sectionId}/${topicId}: expected at least 3 notation entries, at least 2 equations, and exactly 2 examples`,
    );
  }

  const applicability =
    coreParagraphs
      .filter(isCompleteProse)
      .filter((paragraph) =>
        /assum|constraint|valid|only|requires|fixed|reversible|ideal|limit|provided|when/i.test(
          paragraph,
        ),
      )
      .at(-1) ?? coreParagraphs.at(-1) ?? principle;
  const glossary = notationSummary(notation);
  const candidates = [];

  function candidate(prompt, fields, rating) {
    candidates.push({ prompt, fields, rating });
  }

  for (const [exampleIndex, example] of examples.entries()) {
    const isNumerical =
      /\d/.test(example.question) &&
      /\b(?:calculate|determine|evaluate|estimate|find)\b/i.test(example.question);
    const verification = isNumerical
      ? `Substituting the result back into the defining relation reproduces the stated data to the quoted precision. The final unit follows from the equation, and the qualitative trend agrees with the model.`
      : `The conclusion agrees with both the defining relation and the relevant limiting or qualitative behaviour of the model.`;
    candidate(
      `Using the model for ${title}, set up the governing equation, inequality, derivative, probability, or phase-rule count and solve the following problem: ${example.question}`,
      {
        model: `Apply the model for ${title} under every condition stated in the question; use SI units unless another unit is explicitly supplied.`,
        working: example.answer,
        final: upperFirst(finalFromExample(example.answer)),
        check: verification,
      },
      exampleIndex === 0 ? "**" : "***",
    );
  }

  for (const example of examples) {
    const result = upperFirst(finalFromExample(example.answer));
    candidate(
      `A proposed solution to the following ${title} problem gives ${result} Verify or refute the result by repeating the calculation and substituting back into the governing relation. Problem: ${example.question}`,
      {
        model: `Use the model for ${title} and the data stated in the problem.`,
        working: example.answer,
        final: `The proposed result is verified: ${result}`,
        check: `Reverse substitution recovers the original data, and the final unit, sign, normalization, or bound is physically admissible.`,
      },
      "***+",
    );

    for (const relation of extractRenderedDisplays(example.answer)) {
      candidate(
        `For this problem on ${title}, derive the indicated intermediate result before completing the calculation.\nProblem: ${example.question}\nIntermediate result to derive:\n${relation}`,
        {
          model: `Apply the stated ${title} assumptions and preserve all units.`,
          working: example.answer,
          final: relation,
          check: `The intermediate result leads to ${result} and is consistent with the original data.`,
        },
        "**+",
      );
    }
  }

  for (const [index, equation] of displays.entries()) {
    const context = getEquationContext(core, equation);
    const previous = index > 0 ? displays[index - 1] : null;
    const transition = previous
      ? proseParagraphs(core.slice(previous.end, equation.start)).join("\n\n")
      : context.before;
    candidate(
      index === 0
        ? `Starting from the stated model for ${title}, write the governing mathematical relation and identify the constraint under which it applies.\n${equation.display}\nNotation: ${glossary}.`
        : `Derive the following ${title} relation from the preceding result, showing the algebra, calculus, counting, or thermodynamic identity used at each step.\n${equation.display}\nNotation: ${glossary}.`,
      {
        model: `${context.before}\n\n${applicability}`,
        working: `${previous ? `Begin from the preceding result\n${previous.display}\n\n` : ""}${transition}\n\nApplying the stated definitions and constraint gives\n${equation.display}\n\n${context.after}`,
        final: equation.display,
        check: `The result uses the supplied notation consistently and obeys the stated ${title} constraint.`,
      },
      index === 0 ? "*" : index === 1 ? "*+" : "**",
    );
  }

  for (let index = 0; index < displays.length - 1; index += 1) {
    const first = displays[index];
    const second = displays[index + 1];
    const transition =
      proseParagraphs(core.slice(first.end, second.start)).join("\n\n") ||
      "Apply the definitions and constraints of the model.";
    candidate(
      `Starting from the first ${title} relation, derive the second and show the missing mathematical steps.\nStart:\n${first.display}\n\nTarget:\n${second.display}\nNotation: ${glossary}.`,
      {
        model: `${principle}\n\n${applicability}`,
        working: `Start with\n${first.display}\n\n${transition}\n\nTherefore\n${second.display}`,
        final: second.display,
        check: `Substitution into the starting relation preserves the constraint and gives the target relation.`,
      },
      "***+",
    );
  }

  for (const equation of displays) {
    candidate(
      `Check the following ${title} equation mathematically. Substitute the stated units, verify every sum and equality is homogeneous, and identify any ratio that must be dimensionless.\n${equation.display}\nNotation: ${glossary}.`,
      {
        model: `Use the units and definitions supplied in the prompt.`,
        working: `Use these substitutions: ${glossary}.\n\nInsert those units into\n${equation.display}\nProducts multiply units, quotients divide them, and a derivative has numerator units divided by denominator units. Terms joined by addition or equality reduce to the same unit; logarithm and exponential arguments reduce to dimensionless ratios.`,
        final: `The equation is dimensionally homogeneous under the stated definitions.`,
        check: `Changing one factor to an incompatible unit without conversion breaks the equality, confirming that the listed units are required.`,
      },
      "***",
    );

    candidate(
      `Verify that the following candidate result is consistent with the definitions and constraints of ${title}. Show the substitution or limiting argument rather than answering in words only.\n${equation.display}\nNotation: ${glossary}.`,
      {
        model: applicability,
        working: `Substitute the definitions from the prompt into the candidate expression:\n${equation.display}\nThe algebra retains the stated equality, sign, normalization, or derivative condition under the model constraint.`,
        final: equation.display,
        check: `The relation agrees with the relevant sign, bound, normalization, units, and limiting behaviour of the model for ${title}.`,
      },
      "****",
    );
  }

  for (const example of examples) {
    candidate(
      `Rework this ${title} problem from a symbolic governing equation before inserting the numerical data or special-case assumptions: ${example.question}`,
      {
        model: `Apply every condition stated in the problem.`,
        working: example.answer,
        final: upperFirst(finalFromExample(example.answer)),
        check: `Substitution back into the symbolic relation reproduces the data and expected physical behaviour.`,
      },
      "****",
    );
  }

  const firstEquation = displays[0];
  const lastEquation = displays.at(-1);
  const chainWorking = displays
    .flatMap((equation, index) => {
      if (index === 0) return [`Step 1:\n${equation.display}`];
      const previous = displays[index - 1];
      const transition =
        proseParagraphs(core.slice(previous.end, equation.start)).join("\n\n") ||
        "Apply the definitions and constraints stated by the model.";
      return [transition, `Step ${index + 1}:\n${equation.display}`];
    })
    .join("\n\n");
  candidate(
    `Reconstruct the complete mathematical chain for ${title}, from the starting relation to the final result. Include every required substitution, derivative, integral, or limiting step.\nStart:\n${firstEquation.display}\n\nTarget:\n${lastEquation.display}\nNotation: ${glossary}.`,
    {
      model: `${principle}\n\n${applicability}`,
      working: chainWorking,
      final: lastEquation.display,
      check: `Each step uses the same definitions and constraints, and adjacent equations are dimensionally consistent.`,
    },
    "*****",
  );

  const synthesis = candidates.at(-1);

  while (candidates.length < 20) {
    const example = examples[candidates.length % examples.length];
    candidate(
      `Solve the following ${title} problem and include an independent substitution, unit, sign, or normalization check: ${example.question}`,
      {
        model: `Use the model for ${title} under the conditions in the problem.`,
        working: example.answer,
        final: upperFirst(finalFromExample(example.answer)),
        check: `The result satisfies the governing equation and the stated physical constraints.`,
      },
      "****+",
    );
  }

  const selected = candidates.filter((entry) => entry !== synthesis).slice(0, 19);
  selected.push(synthesis);

  return selected.map((entry, index) => ({
    id: `${topicId}-${String(index + 1).padStart(3, "0")}`,
    prompt: plainText(entry.prompt),
    answer: solution(entry.fields),
    rating: index === 19 ? "*****" : entry.rating ?? ratings[index],
    paperTags: tags,
  }));
}

const structureSource = await fs.readFile(structurePath, "utf8");
const moduleLiteral = findArrayLiteral(
  structureSource,
  "export const level2PhysicsBModules",
);
const modules = Function(`"use strict"; return (${moduleLiteral});`)();
const thermodynamics = modules.find((module) => module.id === "thermodynamics");

if (!thermodynamics) {
  throw new Error("Thermodynamics module was not found in structure.ts");
}

let topicCount = 0;
let questionCount = 0;

for (const section of thermodynamics.sections) {
  for (const topic of section.topics) {
    const topicId = slugify(topic.title);
    const contentPath = path.join(
      courseRoot,
      section.id,
      topicId,
      "content.ts",
    );
    const outputPath = path.join(questionRoot, section.id, `${topicId}.json`);
    const content = await fs.readFile(contentPath, "utf8");
    const questions = buildQuestions({
      content,
      sectionId: section.id,
      title: topic.title,
      topicId,
    });
    const data = {
      schemaVersion: 1,
      courseId,
      sectionId: section.id,
      topicId,
      topicTitle: topic.title,
      paperTags: ["thermodynamics", section.id],
      questions,
    };

    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, `${JSON.stringify(data, null, 2)}\n`);
    topicCount += 1;
    questionCount += questions.length;
  }
}

console.log(
  `Generated ${questionCount} questions across ${topicCount} Thermodynamics topics.`,
);
