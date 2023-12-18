import type { Rule } from "@unocss/core";

export const images: Rule[] = [
  [/^(cover|contain)$/,([_, prop]) => ({ "background-size": `${prop} !important` })],
];