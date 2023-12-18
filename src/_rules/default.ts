import type { Rule } from "@unocss/core";
import { aspectRatios } from "./aspectRatios";
import { images } from "./images";
import { backgroundPosition } from "./backgroundPosition";
import { outlines } from "./outlines";
import { borders } from "./borders";

export const rules: Rule[] = [
  aspectRatios,
  images,
  backgroundPosition,
  outlines,
  borders,
].flat(1);