// The Cat on the Step — a shy cat, shelling peas, waiting on the step.
// Entry for make.fun "Make the AI judge feel brave" (20261121-0302).
import { mkdirSync, writeFileSync } from "node:fs";

const text = "The cat won't come inside.\nSo she shells peas on the step,\nand leaves the door open.\nThe bowl fills, one pea at a time.\nThe peas click in the bowl, soft as rain on leaves.\nThe light thins on the step.\nA soft weight against her ankle.\nThe cat curls in her lap,\nand stays.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
