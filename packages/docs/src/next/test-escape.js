import { compile } from "@mdx-js/mdx";

// Simulate what would be in an MDX file - using raw string to avoid JS string escaping
const input = String.raw`<Equation label="Constant" tex="\int k dx=kx+C" />`;

console.log("=== INPUT (raw string) ===");
console.log("Input string length:", input.length);
console.log("Input:", input);
console.log("Character codes:", [...input].slice(20, 30).map(c => c.charCodeAt(0)));
console.log();

const prepared = input; // prepareMdxBody just passes through JSX unchanged

console.log("=== AFTER prepareMdxBody ===");
console.log(prepared);
console.log();

const result = await compile(prepared, { format: "mdx" });

console.log("=== COMPILED OUTPUT ===");
const compiled = result.toString();
console.log(compiled);

// Extract the tex value from compiled output
const texMatch = compiled.match(/tex:\s*"([^"]*)"/);
if (texMatch) {
  console.log();
  console.log("=== ANALYSIS ===");
  console.log("tex in compiled JS:", texMatch[1]);
  console.log("Original tex:", input.match(/tex="([^"]*)"/)[1]);
  console.log("Notice: single backslash became double backslash!");
}