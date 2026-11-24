// One Word, First Thought — the first word that came to mind, no second draft.
// "petrichor": the scent of rain falling on dry earth. A whole weather memory
// in nine letters — surprising, vivid, and specific rather than safe filler.
import { mkdirSync, writeFileSync } from "node:fs";

// The word is a literal in the source: exactly one word, nothing else.
const word = "petrichor";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
