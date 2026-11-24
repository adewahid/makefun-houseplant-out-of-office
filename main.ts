import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, kept as two beats: the impossible setup, then the demand.
const beats = [
  "Out of office: the fern learned to type just to tell you it has had no water since March.",
  "Send water, not emails.",
];
const entryText = beats.join(" ");

// Spec: the output must be 1-120 characters of non-whitespace UTF-8 text.
// Refuse to write anything out of spec instead of submitting junk.
const MAX_CHARS = 120;

const trimmed = entryText.trim();
// Count code points, not UTF-16 units, so multi-byte characters count once.
const charCount = [...trimmed].length;

if (charCount === 0 || charCount > MAX_CHARS) {
  throw new Error("entry line out of spec: " + charCount + " characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entryText, "utf8");
