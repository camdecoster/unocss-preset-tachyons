import type { Rule } from "@unocss/core";

const paddingBottomValues: Record<string, string> = {
  "16x9": "56.25%",
  "9x16": "177.77%",
  "4x3": "75%",
  "3x4": "133.33%",
  "6x4": "66.6%",
  "4x6": "150%",
  "8x5": "62.5%",
  "5x8": "160%",
  "7x5": "71.42%",
  "5x7": "140%",
  "1x1": "100%",
};

export const aspectRatios: Rule[] = [
  ["aspect-ratio", { height: 0, position: "relative" }],
  ["aspect-ratio--object", {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    "z-index": 100,
  }],
  [/^aspect-ratio--(\d+x\d+)$/, ([_, key]) => ({ "padding-bottom": paddingBottomValues[key] })],
];