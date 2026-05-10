const { compile } = require("@mdx-js/mdx");
const runtime = require("react/jsx-runtime");

const BACKSLASH = "\\";

function isJsxTagStart(value, index) {
  const next = value[index + 1];
  return value[index] === "<" && !!next && /[A-Za-z!/]/.test(next);
}

function findJsxTagEnd(value, startIndex) {
  let braceDepth = 0;
  let quote = null;
  for (let index = startIndex + 1; index < value.length; index += 1) {
    const current = value[index];
    if (quote) {
      if (current === BACKSLASH) { index += 1; continue; }
      if (current === quote) { quote = null; }
      continue;
    }
    if (current === '"' || current === "'" || current === "`") {
      quote = current;
      continue;
    }
    if (current === "{") { braceDepth += 1; continue; }
    if (current === "}" && braceDepth > 0) { braceDepth -= 1; continue; }
    if (current === ">" && braceDepth === 0) { return index; }
  }
  return -1;
}

function prepareMdxBody(body) {
  let prepared = "";
  for (let index = 0; index < body.length; index += 1) {
    const current = body[index];
    if (isJsxTagStart(body, index)) {
      const tagEnd = findJsxTagEnd(body, index);
      if (tagEnd !== -1) {
        prepared += body.slice(index, tagEnd + 1);
        index = tagEnd;
        continue;
      }
    }
    prepared += current;
  }
  return prepared;
}

async function test() {
  const input = `<Equation label="Constant" tex="\\int k dx=kx+C" />`;

  console.log("=== ORIGINAL INPUT ===");
  console.log(input);
  console.log();

  const prepared = prepareMdxBody(input);

  console.log("=== PREPARE MDX BODY OUTPUT ===");
  console.log(prepared);
  console.log();

  console.log("=== COMPILING WITH @mdx-js/mdx ===");

  const result = await compile(prepared, {
    format: "mdx",
  });

  console.log("=== COMPILED CODE ===");
  console.log(result.toString());
}

test().catch(console.error);